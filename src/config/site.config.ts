// Site-wide configuration
export interface SiteConfig {
  url: string;
  title: string;
  titleTemplate: string;
  description: string;
  ogImage: string;
  themeColor: string;
  backgroundColor: string;
}

export const SITE_CONFIG: SiteConfig = {
  url: "https://velikoyosbmtal-tubitak4006.vercel.app",
  title: "Veliköy OSB MTAL - TÜBİTAK 4006 Okul Fuarı",
  titleTemplate: "%s | Veliköy OSB MTAL",
  description: "Veliköy OSB Mesleki ve Teknik Anadolu Lisesi'nde düzenlenen TÜBİTAK 4006 Bilim Fuarı'na davetlisiniz! 14 Mayıs 2025, 14.00'te okulumuzda gerçekleşecek bu özel etkinliğe katılımınızdan mutluluk duyarız.",
  ogImage: "/1.png",
  themeColor: "#00703C",
  backgroundColor: "#D9D9D9"
};
