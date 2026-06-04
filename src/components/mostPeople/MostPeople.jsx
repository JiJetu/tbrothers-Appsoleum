import { IMAGES } from "../../assets";

function MostPeople() {
  const cards = [
    {
      title: "Video Messages",
      desc: "Record heartfelt video messages for your loved ones to watch exactly when they need them most.",
      image: IMAGES.mostPeople1,
    },
    {
      title: "Text Messages",
      desc: "Send meaningful written messages into the future with perfectly timed delivery and personal impact.",
      image: IMAGES.mostPeople2,
    },
    {
      title: "Audio Messages",
      desc: "Preserve your voice, emotions, and memories through powerful audio messages that last forever.",
      image: IMAGES.mostPeople3,
    },
  ];

  return (
    <section className="bg-[#030728] py-24 px-8 sm:px-12 xl:px-16 text-white overflow-hidden relative border-t border-white/5" id="features">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
        <p className="text-[#FF6B1A] font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
          RECORD. SCHEDULE. DELIVER
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-6 leading-[1.2]">
          Most People Leave Behind Possessions.
          <br className="hidden md:block" />
          Few Leave Behind Presence.
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Life is filled with moments you'll never want to miss—a wedding day, a
          graduation, the birth of a child, or a time when someone you love
          simply needs to hear your voice.
        </p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Top Two Cards */}
        {cards.slice(0, 2).map((card, idx) => (
          <div
            key={idx}
            className="bg-[#031534] rounded-[32px] overflow-hidden border border-white/5 relative group h-[450px] md:h-[600px]"
          >
            {/* Background Ellipse Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{
                width: "345px",
                height: "345px",
                background: "rgba(0, 129, 226, 0.7)",
                filter: "blur(120px)",
              }}
            />

            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-contain z-10"
            />

            {/* Bottom Gradient Overlay (Rectangle 1236) */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(180deg, rgba(3, 21, 52, 0) 55.75%, #031534 85%)",
              }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-30">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Bottom Card (Centered in Desktop) */}
        <div className="md:col-span-2 flex justify-center">
          <div className="bg-[#031534] rounded-[32px] overflow-hidden border border-white/5 relative group h-[450px] md:h-[600px] w-full md:w-[calc(50%-16px)]">
            {/* Background Ellipse Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{
                width: "345px",
                height: "345px",
                background: "rgba(0, 129, 226, 0.7)",
                filter: "blur(120px)",
              }}
            />

            {/* Background Image */}
            <img
              src={cards[2].image}
              alt={cards[2].title}
              className="absolute inset-0 w-full h-full object-contain z-10"
            />

            {/* Bottom Gradient Overlay (Rectangle 1236) */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(180deg, rgba(3, 21, 52, 0) 55.75%, #031534 85%)",
              }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-30">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                {cards[2].title}
              </h3>
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                {cards[2].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MostPeople;
