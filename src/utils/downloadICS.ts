import { saveAs } from "file-saver";

export function downloadICS() {
  const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:TÜBİTAK 4006 Bilim Fuarı\nDTSTART:20250514T140000\nDTEND:20250514T160000\nDESCRIPTION:TÜBİTAK 4006 Bilim Fuarı\nLOCATION:Okulumuz\nEND:VEVENT\nEND:VCALENDAR`;
  const blob = new Blob([icsContent.replace(/\n/g, "\r\n")], { type: "text/calendar" });
  saveAs(blob, "tubitak4006.ics");
} 