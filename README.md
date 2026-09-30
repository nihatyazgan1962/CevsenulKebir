# 📿 Cevşenül Kebir — Sesli Okuma & Mealli Dua Uygulaması

Cevşen-ül Kebir duasının Arapça metnini, Türkçe mealini ve sesli tilavetini sunan Android mobil uygulamasıdır. Kullanıcılar duayı takip ederek okuyabilir, ses eşliğinde dinleyebilir.

## ✨ Özellikler

- 🔊 Sesli Cevşen tilâveti (audioplayers entegrasyonu)
- 📖 Arapça metin + Türkçe meal yan yana
- 📍 Okunan bölümü otomatik takip
- 🌙 Koyu/Açık tema desteği
- 💾 Son okunan yeri hatırlama (shared_preferences)
- 📱 Hem Flutter hem Capacitor tabanlı web sürümü

## 🛠️ Teknolojiler

| Katman | Teknoloji |
|--------|-----------|
| Mobil UI | Flutter 3.x (Dart) |
| Web Wrapper | Capacitor 6.x |
| Ses | audioplayers ^6.0.0 |
| TTS | flutter_tts ^4.2.2 |
| Font | Google Fonts |
| Depolama | shared_preferences |

## 📋 Gereksinimler

- Flutter SDK ≥ 3.0.0
- Android SDK 21+
- Java 17+ (Android derleme için)
- Node.js 18+ (Capacitor web sürümü için)

## 🚀 Kurulum

### Flutter Sürümü
```bash
flutter pub get
flutter run
```

### APK Derleme
```powershell
# Windows
.\apk_yap.ps1
# veya
.\apk_yap.bat
```

### Capacitor Web Sürümü
```bash
npm install
npx cap sync android
npx cap open android
```

## 📁 Proje Yapısı

```
├── lib/              # Flutter kaynak kodları
├── assets/           # Ses dosyaları, görseller
├── android/          # Android native proje
├── www/              # Web (Capacitor) sürümü
└── pubspec.yaml      # Flutter bağımlılıkları
```

## 👨‍💻 Geliştirici

**Nihat Yazgan** — Yazgan Bileşim  
GitHub: [@nihatyazgan1962](https://github.com/nihatyazgan1962)
