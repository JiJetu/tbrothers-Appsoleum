import { useState, useRef, useEffect } from "react";

export default function HorizontalSlider({
  items,
  renderItem,
  className = "",
  autoSlide = false,
  autoSlideInterval = 4000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto slide
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const slider = sliderRef.current;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 20) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
      }
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setActiveIndex(newIndex);
  };

  return (
    <div className={`${className}`}>
      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
        ))}
      </div>

      {/* Mobile + Tablet Slider */}
      <div className="lg:hidden">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 gap-6"
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 snap-center">
              {renderItem(item, index)}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-[#FF6B1A]"
                  : "w-2 bg-[#FF6B1A]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
