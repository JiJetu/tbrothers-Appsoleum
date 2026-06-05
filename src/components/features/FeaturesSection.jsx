import {
  Video,
  Mic,
  Image,
  PenTool,
  FileText,
  Star,
  Heart,
  Users,
} from "lucide-react";
import { IMAGES } from "../../assets";
import HorizontalSlider from "../shared/HorizontalSlider";
import RenderPhoneCard from "./RenderPhoneCard";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Videos",
      description:
        "Preserve meaningful video moments, life lessons, celebrations, and personal messages for future generations.",
      icon: Video,
    },
    {
      id: 2,
      title: "Audio",
      description:
        "Capture the sound of your voice, heartfelt conversations, prayers, and emotional moments that can be replayed forever.",
      icon: Mic,
    },
    {
      id: 3,
      title: "Photos",
      description:
        "Store treasured photos and visual memories that tell the story of your life, family, and experiences.",
      icon: Image,
    },
    {
      id: 4,
      title: "Written Memories",
      description:
        "Document your thoughts, stories, wisdom, and reflections through meaningful written memories and messages.",
      icon: PenTool,
    },
    {
      id: 5,
      title: "Documents",
      description:
        "Secure important files, letters, records, and meaningful documents in one protected legacy space.",
      icon: FileText,
    },
    {
      id: 6,
      title: "Milestones",
      description:
        "Preserve life's biggest achievements, unforgettable moments, and personal accomplishments throughout your journey.",
      icon: Star,
    },
    {
      id: 7,
      title: "Wisdom & Advice",
      description:
        "Pass down guidance, encouragement, values, and life lessons to the people you love most.",
      icon: Heart,
    },
    {
      id: 8,
      title: "Family Legacy",
      description:
        "Create a lasting digital legacy that helps future generations stay connected to your story and impact.",
      icon: Users,
    },
  ];

  const phoneItems = [
    { id: 1, image: IMAGES.featuresSection1 },
    { id: 2, image: IMAGES.featuresSection2 },
    { id: 3, image: IMAGES.featuresSection3 },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden" id="preserve">
      <div className="px-8 sm:px-12 xl:px-16 max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E293B]">
            What You Can Preserve
            <br />
            <span className="text-[#FF6B1A]">In Appso Capsule</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm lg:text-base max-w-xl mx-auto tracking-wide">
            Every memory. Every moment. Every part of your story.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-[2px] w-8 bg-[#FF6B1A]/40 rounded-full"></div>
          </div>
        </div>

        {/* Phone Cards with Reusable Slider */}
        <HorizontalSlider
          items={phoneItems}
          renderItem={RenderPhoneCard}
          autoSlide={true}
          className="mb-16 lg:mb-24"
        />

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white border border-gray-100 rounded-[28px] p-8 text-left transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#FF6B1A]/5 hover:border-[#FF6B1A]/20 group"
              >
                <div className="w-14 h-14 bg-[#FF6B1A]/10 rounded-[20px] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF6B1A]/15">
                  <Icon className="w-6 h-6 text-[#FF6B1A]" />
                </div>

                <h3 className="text-xl font-bold text-[#1E293B] mb-3">
                  {feature.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
