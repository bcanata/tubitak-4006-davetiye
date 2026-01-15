// Event configuration - all event-related data in one place
export interface EventConfig {
  name: string;
  shortName: string;
  description: string;
  startDate: string; // ISO 8601 format
  endDate: string;
  location: string;
  mapsUrl: string;
  schoolName: string;
  organizerName: string;
}

export const EVENT_CONFIG: EventConfig = {
  name: "TÜBİTAK 4006 Bilim Fuarı",
  shortName: "TÜBİTAK 4006",
  description: "Veliköy OSB Mesleki ve Teknik Anadolu Lisesi'nde düzenlenen TÜBİTAK 4006 Bilim Fuarı'na davetlisiniz! 14 Mayıs 2025, 14.00'te okulumuzda gerçekleşecek bu özel etkinliğe katılımınızdan mutluluk duyarız.",
  startDate: "2025-05-14T14:00:00+03:00",
  endDate: "2025-05-14T16:00:00+03:00",
  location: "Veliköy OSB MTAL",
  mapsUrl: "https://maps.app.goo.gl/RN5z9NCVtaGmpMyn7",
  schoolName: "Veliköy OSB Mesleki ve Teknik Anadolu Lisesi",
  organizerName: "Veliköy OSB MTAL"
};
