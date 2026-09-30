package com.cevsan.kebir;

import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;
import java.net.URLEncoder;
import java.util.Locale;

public class MainActivity extends BridgeActivity {
    private TextToSpeech tts;
    private boolean ttsReady = false;
    private MediaPlayer mediaPlayer;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Ekranın sürekli uyanık ve açık kalmasını sağla
        try {
            getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            // Üst bildirim çubuğu ve alt navigasyon çubuğu renklerini ayarla
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
                getWindow().setStatusBarColor(android.graphics.Color.parseColor("#212121"));
                getWindow().setNavigationBarColor(android.graphics.Color.parseColor("#0d0102"));
            }
        } catch (Exception ignored) {}

        // Android Yerel TTS Motorunu Başlat (Google TTS / Varsayılan TTS)
        initTTS();

        try {
            WebView webView = getBridge().getWebView();
            if (webView != null) {
                WebSettings settings = webView.getSettings();
                settings.setMediaPlaybackRequiresUserGesture(false);
                settings.setJavaScriptEnabled(true);
                settings.setDomStorageEnabled(true);
                settings.setDatabaseEnabled(true);
                settings.setAllowFileAccess(true);
                settings.setAllowContentAccess(true);
                
                // JavaScript'e AndroidTTS köprüsü ekle
                webView.addJavascriptInterface(new AndroidTTSInterface(), "AndroidTTS");
            }
        } catch (Exception ignored) {}
    }

    private void initTTS() {
        try {
            if (tts != null) {
                try { tts.shutdown(); } catch (Exception ignored) {}
            }
            tts = new TextToSpeech(this, new TextToSpeech.OnInitListener() {
                @Override
                public void onInit(int status) {
                    if (status == TextToSpeech.SUCCESS) {
                        ttsReady = true;
                        try {
                            tts.setLanguage(new Locale("tr", "TR"));
                            setupUtteranceListener();
                        } catch (Exception ignored) {}
                    }
                }
            });
        } catch (Exception ignored) {}
    }

    private void setupUtteranceListener() {
        if (tts == null) return;
        tts.setOnUtteranceProgressListener(new android.speech.tts.UtteranceProgressListener() {
            @Override
            public void onStart(String utteranceId) {}

            @Override
            public void onDone(String utteranceId) {
                notifyWebTTSFinished(utteranceId);
            }

            @Override
            public void onError(String utteranceId) {
                notifyWebTTSFinished(utteranceId);
            }
        });
    }

    private void notifyWebTTSFinished(String utteranceId) {
        runOnUiThread(() -> {
            try {
                WebView wv = getBridge().getWebView();
                if (wv != null) {
                    wv.evaluateJavascript("if(window.onAndroidTTSFinished) window.onAndroidTTSFinished('" + utteranceId + "');", null);
                }
            } catch (Exception ignored) {}
        });
    }

    public class AndroidTTSInterface {
        @JavascriptInterface
        public void speak(String text, String lang) {
            speak(text, lang, "utt_" + System.currentTimeMillis());
        }

        @JavascriptInterface
        public void playLocalAudio(String assetPath) {
            playLocalAudio(assetPath, 0);
        }

        @JavascriptInterface
        public void playLocalAudio(String assetPath, int startMs) {
            runOnUiThread(() -> {
                try {
                    stop();
                    mediaPlayer = new MediaPlayer();
                    mediaPlayer.setAudioAttributes(
                        new AudioAttributes.Builder()
                            .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                            .setUsage(AudioAttributes.USAGE_MEDIA)
                            .build()
                    );

                    String cleanPath = assetPath.startsWith("/") ? assetPath.substring(1) : assetPath;
                    android.content.res.AssetFileDescriptor afd = null;
                    try {
                        afd = getAssets().openFd(cleanPath);
                    } catch (Exception e1) {
                        try {
                            if (!cleanPath.startsWith("public/")) {
                                afd = getAssets().openFd("public/" + cleanPath);
                            } else {
                                afd = getAssets().openFd(cleanPath.substring(7));
                            }
                        } catch (Exception e2) {}
                    }

                    if (afd != null) {
                        mediaPlayer.setDataSource(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength());
                        afd.close();
                    } else {
                        // Dosya sıkıştırılmışsa veya doğrudan fd açılamıyorsa InputStream ile geçici dosyaya yazıp çal
                        java.io.InputStream is = null;
                        try {
                            is = getAssets().open(cleanPath);
                        } catch (Exception e1) {
                            try {
                                if (!cleanPath.startsWith("public/")) {
                                    is = getAssets().open("public/" + cleanPath);
                                } else {
                                    is = getAssets().open(cleanPath.substring(7));
                                }
                            } catch (Exception e2) {}
                        }

                        if (is != null) {
                            java.io.File tempFile = new java.io.File(getCacheDir(), "current_playing.mp3");
                            java.io.FileOutputStream fos = new java.io.FileOutputStream(tempFile);
                            byte[] buf = new byte[16384];
                            int len;
                            while ((len = is.read(buf)) != -1) {
                                fos.write(buf, 0, len);
                            }
                            fos.close();
                            is.close();
                            mediaPlayer.setDataSource(tempFile.getAbsolutePath());
                        } else {
                            // Dosya bulunamadı
                            return;
                        }
                    }

                    mediaPlayer.setOnPreparedListener(mp -> {
                        if (startMs > 0) {
                            mp.seekTo(startMs);
                        }
                        mp.start();
                    });
                    mediaPlayer.setOnCompletionListener(mp -> {
                        mp.release();
                        mediaPlayer = null;
                        runOnUiThread(() -> {
                            try {
                                WebView wv = getBridge().getWebView();
                                if (wv != null) {
                                    wv.evaluateJavascript("if(window.onNativeAudioFinished) window.onNativeAudioFinished();", null);
                                }
                            } catch (Exception ignored) {}
                        });
                    });
                    mediaPlayer.setOnErrorListener((mp, what, extra) -> {
                        mp.release();
                        mediaPlayer = null;
                        return true;
                    });
                    mediaPlayer.prepareAsync();
                } catch (Exception e) {
                    try {
                        if (mediaPlayer != null) {
                            mediaPlayer.release();
                            mediaPlayer = null;
                        }
                    } catch (Exception ignored) {}
                }
            });
        }

        @JavascriptInterface
        public void playOnline(String text, String lang, String utteranceId) {
            runOnUiThread(() -> {
                try {
                    stop();
                    String clean = text.replaceAll("[\\r\\n\\t]", " ").trim();
                    if (clean.length() > 160) clean = clean.substring(0, 160);
                    String targetLang = (lang != null && lang.toLowerCase().startsWith("ar")) ? "ar" : "tr";
                    String encoded = URLEncoder.encode(clean, "UTF-8");
                    String streamUrl = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=" + targetLang + "&q=" + encoded;

                    mediaPlayer = new MediaPlayer();
                    mediaPlayer.setAudioAttributes(
                        new AudioAttributes.Builder()
                            .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                            .setUsage(AudioAttributes.USAGE_MEDIA)
                            .build()
                    );
                    
                    // Android MediaPlayer için HTTP Header'ları ekle (User-Agent ile engellemeyi önler)
                    java.util.Map<String, String> headers = new java.util.HashMap<>();
                    headers.put("User-Agent", "Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Mobile Safari/537.36");
                    headers.put("Referer", "https://translate.google.com/");

                    mediaPlayer.setDataSource(MainActivity.this, Uri.parse(streamUrl), headers);
                    mediaPlayer.setOnPreparedListener(mp -> mp.start());
                    mediaPlayer.setOnCompletionListener(mp -> {
                        mp.release();
                        mediaPlayer = null;
                        notifyWebTTSFinished(utteranceId);
                    });
                    mediaPlayer.setOnErrorListener((mp, what, extra) -> {
                        mp.release();
                        mediaPlayer = null;
                        // Sentetik sese düşme, doğrudan bitir
                        notifyWebTTSFinished(utteranceId);
                        return true;
                    });
                    mediaPlayer.prepareAsync();
                } catch (Exception e) {
                    notifyWebTTSFinished(utteranceId);
                }
            });
        }

        @JavascriptInterface
        public void speak(String text, String lang, String utteranceId) {
            runOnUiThread(() -> {
                try {
                    if (tts == null) {
                        initTTS();
                    }
                    if (tts != null) {
                        Locale targetLocale;
                        if ("ar".equalsIgnoreCase(lang) || "ar-SA".equalsIgnoreCase(lang)) {
                            targetLocale = new Locale("ar");
                            int res = tts.setLanguage(targetLocale);
                            if (res == TextToSpeech.LANG_MISSING_DATA || res == TextToSpeech.LANG_NOT_SUPPORTED) {
                                targetLocale = new Locale("tr", "TR");
                                tts.setLanguage(targetLocale);
                            }
                        } else {
                            targetLocale = new Locale("tr", "TR");
                            tts.setLanguage(targetLocale);
                        }

                        // CİHAZ SESİ KESİN ERKEK SESİ: Tok, vakarlı ve bas erkek tonu
                        tts.setPitch(0.78f);
                        tts.setSpeechRate(0.92f);

                        try {
                            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP && tts.getVoices() != null) {
                                android.speech.tts.Voice bestMaleVoice = null;
                                for (android.speech.tts.Voice v : tts.getVoices()) {
                                    if (v.getLocale() != null && v.getLocale().getLanguage().equalsIgnoreCase(targetLocale.getLanguage())) {
                                        String vName = v.getName().toLowerCase();
                                        // Erkek ses göstergeleri
                                        if (vName.contains("male") || vName.contains("erkek") || vName.contains("#male") || 
                                            vName.contains("-d-") || vName.contains("-b-") || vName.contains("local") || 
                                            vName.contains("cem") || vName.contains("ahmet")) {
                                            bestMaleVoice = v;
                                            break;
                                        }
                                    }
                                }
                                if (bestMaleVoice != null) {
                                    tts.setVoice(bestMaleVoice);
                                }
                            }
                        } catch (Exception ignored) {}

                        Bundle params = new Bundle();
                        params.putFloat(TextToSpeech.Engine.KEY_PARAM_VOLUME, 1.0f);
                        tts.speak(text, TextToSpeech.QUEUE_FLUSH, params, utteranceId);
                    } else {
                        notifyWebTTSFinished(utteranceId);
                    }
                } catch (Exception e) {
                    notifyWebTTSFinished(utteranceId);
                }
            });
        }

        @JavascriptInterface
        public void stop() {
            runOnUiThread(() -> {
                if (mediaPlayer != null) {
                    try {
                        if (mediaPlayer.isPlaying()) mediaPlayer.stop();
                        mediaPlayer.release();
                    } catch (Exception ignored) {}
                    mediaPlayer = null;
                }
                if (tts != null) {
                    try {
                        tts.stop();
                    } catch (Exception ignored) {}
                }
            });
        }

        @JavascriptInterface
        public boolean isAvailable() {
            return true;
        }
    }

    @Override
    public void onDestroy() {
        if (tts != null) {
            try {
                tts.stop();
                tts.shutdown();
            } catch (Exception ignored) {}
        }
        super.onDestroy();
    }
}


