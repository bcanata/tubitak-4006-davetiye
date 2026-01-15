// UI/UX configuration
export interface UIConfig {
  confetti: {
    numberOfPieces: number;
    duration: number; // milliseconds
  };
  parallax: {
    maxTilt: number;
  };
  card: {
    frontImage: string;
    backImage: string;
    altTextFront: string;
    altTextBack: string;
    aspectRatio: string;
  };
  countdown: {
    labels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    completedMessage: string;
  };
  animation: {
    flipDuration: number; // milliseconds
  };
}

export const UI_CONFIG: UIConfig = {
  confetti: {
    numberOfPieces: 120,
    duration: 5000
  },
  parallax: {
    maxTilt: 18
  },
  card: {
    frontImage: "/1.png",
    backImage: "/2.png",
    altTextFront: "Davetiye Ön Yüz",
    altTextBack: "Davetiye Arka Yüz",
    aspectRatio: "2000/1414"
  },
  countdown: {
    labels: {
      days: "Gün",
      hours: "Saat",
      minutes: "Dakika",
      seconds: "Saniye"
    },
    completedMessage: "Başladı!"
  },
  animation: {
    flipDuration: 700
  }
};
