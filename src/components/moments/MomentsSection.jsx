import { Gift, GraduationCap, Heart, BookOpen, Flame, Users } from 'lucide-react';
import { IMAGES } from '../../assets';
import { useState, useRef, useEffect } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-slide functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        // If we reached the end, go back to start
        if (slider.scrollLeft >= maxScrollLeft - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Slide one full width
          slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setActiveIndex(newIndex);
  };

  return (
    <section className="py-20 bg-white text-[#0A1428]" id='how-it-works'>
      <div className="px-8 sm:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.1] text-[#0A1428]">
              Stay Close. Even in the <span className="text-[#FF6B1A]">Future.</span>
            </h2>
            <p className="mt-4 text-base text-gray-600 max-w-lg">
              Life moves forward, but your love, wisdom, and encouragement can stay with them. 
              Send the right message for life's most meaningful moments.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#FF6B1A] flex items-center justify-center flex-shrink-0 bg-white">
              <Heart className="w-5 h-5 text-[#FF6B1A]" />
            </div>
            <div>
              <p className="font-semibold text-[15px] text-[#0A1428] leading-tight">Messages that matter.</p>
              <p className="text-gray-500 text-sm">Delivered when it matters most.</p>
            </div>
          </div>
        </div>

        {/* Desktop Cards Grid (3 columns) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Mobile Cards Slider */}
          <div className="md:hidden mt-8">
            <div 
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
            >
              {moments.map((item, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 snap-center px-2"
                >
                  <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center -mt-8 relative z-10">
                      <div className="w-16 h-16 bg-[#FF6B1A] rounded-full flex items-center justify-center shadow-md">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-8 pt-4 text-center">
                      <h3 className="text-[22px] font-semibold mb-3 text-[#0A1428]">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-2">
              {moments.map((_, index) => (
                <div 
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-6 bg-[#FF6B1A]" : "w-2 bg-[#FF6B1A]/20"
                  }`}
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}