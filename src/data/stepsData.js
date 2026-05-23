import { FiVideo, FiCalendar, FiUsers, FiHeart } from "react-icons/fi";

export const STEPS_DATA = {
  title: "Simple To Create.",
  highlighted: "Powerful",
  subtitle: "To Receive.",
  steps: [
    {
      id: 1,
      number: "1",
      title: "Record",
      description: "Create a private video, audio, or written message.",
      icon: "video",
    },
    {
      id: 2,
      number: "2",
      title: "Schedule",
      description: "Choose when your message should be delivered.",
      icon: "calendar",
    },
    {
      id: 3,
      number: "3",
      title: "Choose Beneficiaries",
      description: "Select who will receive your message in the future.",
      icon: "users",
    },
    {
      id: 4,
      number: "4",
      title: "Delivered in the Future",
      description: "They receive your message exactly when it matters most.",
      icon: "heart",
    },
  ],
};

export const getStepsIconComponent = (iconName) => {
  switch (iconName) {
    case "video":
      return FiVideo;
    case "calendar":
      return FiCalendar;
    case "users":
      return FiUsers;
    case "heart":
      return FiHeart;
    default:
      return FiVideo;
  }
};