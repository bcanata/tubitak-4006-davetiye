# TÜBİTAK 4006 Davetiye

Veliköy OSB Mesleki ve Teknik Anadolu Lisesi TÜBİTAK 4006 Bilim Fuarı davetiyesi.

## Özellikler

- **3D Çevirme Kartı Animasyonu** - Parallax ve jiroskop destekli interaktif davetiye
- **Geri Sayım Sayacı** - Etkinliğe kalan süre (gün, saat, dakika, saniye)
- **Paylaşım Özellikleri** - WhatsApp, Twitter, Facebook, Telegram
- **Takvim Entegrasyonu** - .ics dosyası ile takvime ekleme
- **PDF İndirme** - Davetiyeyi PDF olarak indirme
- **Konum Haritası** - Google Maps entegrasyonu
- **PWA Desteği** - Çevrimdışı çalışma, mobil uygulama olarak yüklenebilir
- **Erişilebilirlik** - Klavye navigasyonu, ekran okuyucu desteği, reduced motion
- **SEO Optimizasyonu** - Open Graph, Twitter Cards, meta etiketler
- **Güvenlik Başlıkları** - HSTS, X-Frame-Options, CSP vb.

## Teknolojiler

- **Framework:** Next.js 15.5.9 (App Router)
- **UI:** React 19.1.3
- **Stil:** Tailwind CSS 4
- **Dil:** TypeScript 5
- **PWA:** Service Worker

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucu
npm start
```

## Yapılandırma

Etkinlik bilgilerini düzenlemek için `src/config/event.config.ts` dosyasını düzenleyin:

```typescript
export const EVENT_CONFIG: EventConfig = {
  name: "TÜBİTAK 4006 Bilim Fuarı",
  shortName: "TÜBİTAK 4006",
  description: "...",
  startDate: "2025-05-14T14:00:00+03:00",
  endDate: "2025-05-14T16:00:00+03:00",
  location: "Veliköy OSB MTAL",
  mapsUrl: "https://maps.app.goo.gl/...",
  schoolName: "Veliköy OSB Mesleki ve Teknik Anadolu Lisesi",
  organizerName: "Veliköy OSB MTAL"
};
```

## Proje Yapısı

```
src/
├── app/
│   ├── page.tsx              # Ana sayfa (22 satır)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global stiller
├── components/
│   ├── countdown/            # Geri sayım bileşeni
│   ├── confetti/             # Konfeti animasyonu
│   ├── invitation-card/      # 3D davetiye kartı
│   ├── action-buttons/       # Aksiyon butonları
│   ├── share-modal/          # Paylaşım modalı
│   ├── flip-hint/            # Çevirme ipucu
│   ├── error-boundary/       # Hata sınırı
│   └── body-wrapper/         # Client wrapper
├── hooks/
│   ├── useParallax.ts        # Parallax efekti
│   ├── useDownloadActions.ts # İndirme aksiyonları
│   ├── useShareActions.ts    # Paylaşım aksiyonları
│   ├── useWindowSize.ts      # Pencere boyutu
│   ├── useReducedMotion.ts   # Reduced motion
│   └── useServiceWorker.ts   # PWA kayıt
├── config/
│   ├── event.config.ts       # Etkinlik ayarları
│   ├── site.config.ts        # Site ayarları
│   └── ui.config.ts          # UI ayarları
├── lib/
│   └── service-worker.ts     # SW yardımcıları
├── styles/
│   └── print.css             # Yazdırma stilleri
├── types/
│   └── index.ts              # TypeScript tipleri
└── utils/
    └── downloadICS.ts         # Takvim indirme
```

## Deploy

Bu proje Vercel'e deploy edilmiştir.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?clone=https://github.com/bcanata/tubitak-4006-davetiye)

## Geliştirme Notları

- **Kod Kalitesi:** TypeScript strict mode, ESLint
- **Performans:** React 19, Next.js 15, optimizasyonlar
- **Erişilebilirlik:** ARIA etiketleri, klavye navigasyonu
- **PWA:** Service Worker, manifest, offline support
- **Güvenlik:** Security headers, CSP

## Lisans

MIT

---

**Hazırlayan:** Veliköy OSB MTAL - 2025
