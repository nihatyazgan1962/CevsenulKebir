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
                    mediaPlayer.setDataSource(MainActivity.this, Uri.parse(streamUrl));
                    mediaPlayer.setOnPreparedListener(mp -> mp.start());
                    mediaPlayer.setOnCompletionListener(mp -> {
                        mp.release();
                        mediaPlayer = null;
                        notifyWebTTSFinished(utteranceId);
                    });
                    mediaPlayer.setOnErrorListener((mp, what, extra) -> {
                        mp.release();
                        mediaPlayer = null;
                        // Çevrimiçi hata verirse TTS ile devam et
                        speak(text, lang, utteranceId);
                        return true;
                    });
                    mediaPlayer.prepareAsync();
                } catch (Exception e) {
                    // Hata durumunda yerel TTS'e devret
                    speak(text, lang, utteranceId);
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
                                tts.setLanguage(new Locale("tr", "TR"));
                            }
                        } else {
                            targetLocale = new Locale("tr", "TR");
                            tts.setLanguage(targetLocale);
                        }
                        tts.setSpeechRate(0.90f);
                        tts.setPitch(1.0f);

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


