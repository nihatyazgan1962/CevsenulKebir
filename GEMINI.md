# Proje Kuralları (Cevşen-ül Kebir)

## APK Derleme Sonrası WhatsApp Bildirimi ve Dağıtımı Kuralı
Her APK derlemesi tamamlandığında veya yeni bir APK oluşturulduğunda **HER ZAMAN** aşağıdaki adımlar otomatik olarak uygulanmalıdır:

1. **Reklamsız Doğrudan İndirme Linki Oluşturma:**
   - Derlenen `CevsenulKebir.apk` dosyası reklamsız ve doğrudan indirme sağlayan bir servise yüklenmelidir:
     - Öncelikli: `litterbox.catbox.moe` (`curl.exe -F "reqtype=fileupload" -F "time=72h" -F "fileToUpload=@<apk>" https://litterbox.catbox.moe/resources/internals/api.php`)
     - Veya projenin GitHub deposundaki doğrudan indirme bağlantısı: `https://github.com/<user>/<repo>/raw/main/<apk>`
   - Kesinlikle reklam veya ara sayfa gösteren (tmpfiles.org vb.) servisler KULLANILMAMALIDIR.

2. **WhatsApp Bağlantısı Hazırlama ve Tarayıcıda Açma:**
   - Kullanıcının WhatsApp numarası: `905072502500`
   - Mesaj metninde doğrudan indirme linki yer alacak şekilde şu şablonda URL hazırlanmalıdır:
     `https://api.whatsapp.com/send/?phone=905072502500&text=...&type=phone_number&app_absent=0`
   - Hazırlanan bağlantı `Start-Process` ile kullanıcının varsayılan tarayıcısında otomatik olarak açılmalıdır.

3. **Kullanıcıya Yanıt:**
   - Kullanıcıya her zaman tıklanabilir WhatsApp linki ve doğrudan indirme linki yanıt metninde sunulmalıdır.
