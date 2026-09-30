# Proje Kuralları (Cevşen-ül Kebir)

## APK Derleme Sonrası WhatsApp Bildirimi ve Dağıtımı Kuralı
Her APK derlemesi tamamlandığında veya yeni bir APK oluşturulduğunda **HER ZAMAN** aşağıdaki adımlar otomatik olarak uygulanmalıdır:

1. **İndirme Linki Oluşturma:**
   - Derlenen `CevsenulKebir.apk` dosyası `tmpfiles.org` (veya benzeri güvenilir doğrudan indirme servisine) yüklenmeli ve doğrudan indirme linki (`/dl/` uzantılı) elde edilmelidir.
   - Örnek komut: `curl.exe -F "file=@CevsenulKebir.apk" https://tmpfiles.org/api/v1/upload`

2. **WhatsApp Bağlantısı Hazırlama ve Tarayıcıda Açma:**
   - Kullanıcının WhatsApp numarası: `905072502500`
   - Mesaj metninde doğrudan indirme linki yer alacak şekilde şu şablonda URL hazırlanmalıdır:
     `https://api.whatsapp.com/send/?phone=905072502500&text=...&type=phone_number&app_absent=0`
   - Hazırlanan bağlantı `Start-Process` ile kullanıcının varsayılan tarayıcısında otomatik olarak açılmalıdır.

3. **Kullanıcıya Yanıt:**
   - Kullanıcıya her zaman tıklanabilir WhatsApp linki ve doğrudan indirme linki yanıt metninde sunulmalıdır.
