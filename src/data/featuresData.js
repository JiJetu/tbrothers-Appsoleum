import { FiVideo, FiMic, FiCalendar, FiShield } from "react-icons/fi";

export const FEATURES_DATA = {
  title: "Preserve Your Voice.",
  subtitle: "Deliver It At The Perfect Time.",
  description: "Record video, audio, and text messages that can be delivered to loved ones in the future — on birthdays, milestones, anniversaries, or life-changing moments.",
  features: [
    {
      id: 1,
      title: "Video Messages",
      description: "Record meaningful videos that capture your voice, expressions and love.",
      icon: "video",
    },
    {
      id: 2,
      title: "Audio Messages",
      description: "Share your thoughts, stories and advice in your own voice.",
      icon: "audio",
    },
    {
      id: 3,
      title: "Scheduled Delivery",
      description: "Choose the perfect future date for your message to arrive.",
      icon: "calendar",
    },
    {
      id: 4,
      title: "Beneficiary Protection",
      description: "Ensure your message reaches the right people securely and privately.",
      icon: "shield",
    },
  ],
};

export const getIconComponent = (iconName) => {
  switch (iconName) {
    case "video":
      return FiVideo;
    case "audio":
      return FiMic;
    case "calendar":
      return FiCalendar;
    case "shield":
      return FiShield;
    default:
      return FiVideo;
  }
};