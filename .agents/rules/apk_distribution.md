# APK Dağıtım ve WhatsApp Bildirim Kuralı

Her APK derleme işlemi (`apk_yap.ps1`, `gradlew assembleDebug` veya benzeri yöntemlerle) tamamlandığında:

1. `CevsenulKebir.apk` dosyası `tmpfiles.org` servisine yüklenmeli ve doğrudan indirme linki (`https://tmpfiles.org/dl/...`) alınmalıdır.
2. `905072502500` numarası için hazırlanan WhatsApp mesaj linki (`https://api.whatsapp.com/send/?phone=905072502500&text=...&type=phone_number&app_absent=0`) oluşturulmalıdır.
3. Bu WhatsApp bağlantısı PowerShell `Start-Process` komutu ile kullanıcının varsayılan tarayıcısında otomatik olarak açılmalıdır.
4. Asistan mesajında kullanıcıya hem doğrudan indirme bağlantısı hem de WhatsApp yönlendirme linki sunulmalıdır.
