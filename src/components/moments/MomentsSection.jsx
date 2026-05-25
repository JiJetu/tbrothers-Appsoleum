import { Gift, GraduationCap, Heart, BookOpen, Flame, Users } from 'lucide-react';
import { IMAGES } from '../../assets';

const moments = [
  {
    image: IMAGES.gift,
    icon: Gift,
    title: "Future Birthdays",
    desc: "Send love and birthday wishes for years to come.",
  },
  {
    image: IMAGES.graduationCap,
    icon: GraduationCap,
    title: "Graduation Messages",
    desc: "Celebrate their achievements and encourage their future.",
  },
  {
    image: IMAGES.heart,
    icon: Heart,
    title: "Wedding Day Messages",
    desc: "Share your blessings and advice on their special day.",
  },
  {
    image: IMAGES.bookOpen,
    icon: BookOpen,
    title: "Advice For Your Children",
    desc: "Guide them with your wisdom when they need it most.",
  },
  {
    image: IMAGES.flame,
    icon: Flame,
    title: "Messages Through Loss",
    desc: "Offer comfort and healing when they need you most.",
  },
  {
    image: IMAGES.users,
    icon: Users,
    title: "Family Legacy Preservation",
    desc: "Leave a lasting legacy for future generations to cherish.",
  },
];

export default function MomentsSection() {
  return (
    <section className="py-20 bg-white text-[#0A1428]">
      <div className="px-8 sm:px-12 xl:px-16">
        
        <div className="grid lg:grid-cols-3 lg:gap-12 items-start">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.1]">
              Stay Close.<br />
              Even in the{" "}
              <span className="text-[#FF6B1A]">Future.</span>
            </h2>

            <p className="mt-6 text-base text-gray-600 max-w-md">
              Life moves forward, but your love, wisdom, and encouragement can stay with them. 
              Send the right message for life's most meaningful moments.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl border-2 border-[#FF6B1A] flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-[#FF6B1A]" />
              </div>
              <div>
                <p className="font-semibold text-lg">Messages that matter.</p>
                <p className="text-gray-500">Delivered when it matters most.</p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 col-span-2">
            {moments.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Icon */}
                <div className="flex justify-center -mt-8 relative z-10">
                  <div className="w-16 h-16 bg-[#FF6B1A] rounded-2xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-8 pt-4 text-center">
                  <h3 className="text-2xl font-semibold mb-3 text-[#0A1428]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}