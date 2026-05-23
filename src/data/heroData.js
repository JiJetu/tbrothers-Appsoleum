import { FiVideo } from "react-icons/fi";
import {
  MdCalendarToday,
  MdLockOutline,
  MdFavoriteBorder,
  MdShield,
} from "react-icons/md";

export const HERO_DATA = {
  badge: "Your Legacy. Your Voice. Perfectly Timed.",
  mainHeading: {
    part1: "If you could send one message into the future...",
    part2: "whose life would it change?",
  },
  description: {
    intro: "Appsoleum lets you record time capsule messages by storing your",
    highlights: ["video, audio", "text"],
    outro: "- preserving your wisdom, love and memories for the people who matter most.",
  },
  features: [
    {
      id: 1,
      title: "Record",
      description: "Video, audio or text. Your story, your way.",
      icon: "video",
    },
    {
      id: 2,
      title: "Schedule",
      description: "Choose the future date for delivery.",
      icon: "calendar",
    },
    {
      id: 3,
      title: "Secure",
      description: "Bank-level security to protect what matters most.",
      icon: "lock",
    },
    {
      id: 4,
      title: "Deliver",
      description: "They receive your message at the perfect time.",
      icon: "heart",
    },
  ],
  trustedSection: {
    title: "Trusted by families",
    subtitle: "to protect what matters most.",
    metrics: [
      {
        id: 1,
        value: "100K+",
        label: "Messages Delivered",
      },
      {
        id: 2,
        value: "4.9/5",
        label: "User Rating",
        showStars: true,
      },
    ],
    ctaButton: "Start Your Legacy",
  },
};

export const getHeroIconComponent = (iconName) => {
  const iconMap = {
    video: FiVideo,
    calendar: MdCalendarToday,
    lock: MdLockOutline,
    heart: MdFavoriteBorder,
    shield: MdShield,
  };
  return iconMap[iconName] || FiVideo;
};
