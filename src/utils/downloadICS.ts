import { saveAs } from "file-saver";
import { EVENT_CONFIG } from "@/config/event.config";

export function downloadICS() {
  const startDate = new Date(EVENT_CONFIG.startDate);
  const endDate = new Date(EVENT_CONFIG.endDate);

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${EVENT_CONFIG.name}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
DESCRIPTION:${EVENT_CONFIG.description}
LOCATION:${EVENT_CONFIG.location}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent.replace(/\n/g, "\r\n")], { type: "text/calendar" });
  const filename = `${EVENT_CONFIG.shortName.toLowerCase().replace(/\s+/g, "")}.ics`;
  saveAs(blob, filename);
} 