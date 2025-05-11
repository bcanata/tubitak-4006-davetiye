# Veliköy OSB MTAL - TÜBİTAK 4006 Okul Fuarı Davetiye Uygulaması

Bu proje, Veliköy OSB Mesleki ve Teknik Anadolu Lisesi'nin TÜBİTAK 4006 Bilim Fuarı için modern, etkileşimli ve mobil uyumlu bir davetiye sayfasıdır.

## Özellikler
- **Davetiyenin Ön/Arka Yüzü:** Tıklanabilir, parallax ve gyroskop destekli çevirme animasyonu
- **Geri Sayım:** Etkinlik tarihine kalan süreyi gösteren şık bir sayaç
- **Konum, Takvim ve PDF:** Konum, takvime ekleme ve davetiyeyi PDF olarak indirme butonları
- **Paylaşım:** Web Share API veya modal ile WhatsApp, Twitter, Facebook, Telegram ve bağlantı kopyalama
- **Confetti:** Etkinlik havası için animasyonlu konfeti (ilk 5 saniye)
- **Erişilebilirlik:** Tüm butonlarda aria-label, klavye ve mobil uyum
- **SEO & Sosyal Medya:** OG/Twitter meta etiketleri, faviconlar, manifest
- **Renk Paleti:** Okulun kurumsal renkleriyle modern ve sade tasarım

## Kurulum (Lokal)
1. **Gereksinimler:**
   - Node.js 18+
   - npm veya yarn
2. **Bağımlılıkları yükle:**
   ```bash
   npm install
   # veya
   yarn install
   ```
3. **Geliştirme sunucusunu başlat:**
   ```bash
   npm run dev
   # veya
   yarn dev
   ```
4. **Uygulamayı aç:**
   - [http://localhost:3000](http://localhost:3000)

## Vercel ile Yayınlama
1. [Vercel](https://vercel.com/) hesabı açın ve projeyi GitHub'a gönderin.
2. Vercel panelinden yeni bir proje oluşturun ve bu repoyu bağlayın.
3. Ortam değişkeni gerekmez, otomatik olarak Next.js ayarlarını algılar.
4. Deploy sonrası özel alan adınızı ekleyebilirsiniz.

## Proje Yapısı
- `src/app/page.tsx` : Ana davetiye ve tüm etkileşimler
- `src/hooks/useParallax.ts` : Parallax ve gyroskop hook'u
- `src/utils/downloadICS.ts` : Takvime ekleme fonksiyonu
- `public/` : Görseller, faviconlar, PDF ve manifest

## Katkı ve Lisans
- Katkı yapmak için fork'layıp PR gönderebilirsiniz.
- MIT Lisansı ile açık kaynak.

---

**Hazırlayan:** Veliköy OSB MTAL - 2025
