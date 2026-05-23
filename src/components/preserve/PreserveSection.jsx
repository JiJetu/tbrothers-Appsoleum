import { 
  Video, 
  Mic, 
  Image, 
  Pencil, 
  Folder, 
  Star, 
  Heart, 
  Users 
} from 'lucide-react';

const preserveItems = [
  {
    icon: Video,
    title: "Videos",
    desc: "Ultra-moment birth, wedding",
  },
  {
    icon: Mic,
    title: "Audio",
    desc: "Voice notes, stories, and memories",
  },
  {
    icon: Image,
    title: "Photos",
    desc: "Captured memories that last forever",
  },
  {
    icon: Pencil,
    title: "Written Memories",
    desc: "Letters, journals, and personal notes",
  },
  {
    icon: Folder,
    title: "Documents",
    desc: "Important files and meaningful mementos",
  },
  {
    icon: Star,
    title: "Milestones",
    desc: "Celebrate life's biggest moments",
  },
  {
    icon: Heart,
    title: "Wisdom & Advice",
    desc: "Guidance for the next generation",
  },
  {
    icon: Users,
    title: "Family Legacy",
    desc: "Preserve and pass on family history",
  },
];

export default function PreserveSection() {
  return (
    <section className="py-20 bg-[#0A1929] text-white">
      <div className="px-8 sm:px-12 xl:px-16">
        <div className="bg-[#0D2440] rounded-3xl p-10 md:p-16">
          
          {/* Title & Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#FF6B1A]">
              What You Can Preserve in Appso Capsules
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Every memory. Every moment. Every part of your story.
            </p>
          </div>

          {/* Items Row */}
          <div className="overflow-x-auto">
            <div className="inline-flex min-w-max border-[#2C3039]">
              {preserveItems.map((item, index) => (
                <div
                  key={index}
                className={`flex flex-col items-center text-center px-8 py-10 min-w-[160px] md:min-w-[180px] group relative ${
                  index !== preserveItems.length - 1 
                    ? "after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-12 after:w-[1px] after:bg-[#2C3A5A]" 
                    : ""
                }`}
                >
                  <div className="w-16 h-16 rounded-full bg-[#1E2F5A] flex items-center justify-center mb-4 group-hover:bg-[#FF6B1A] transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-[#FF6B1A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-snug max-w-[140px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}