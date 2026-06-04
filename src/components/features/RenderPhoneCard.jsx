const RenderPhoneCard = (item, idx) => (
  <div
    key={idx}
    className="relative w-full max-w-[376px] h-[620px] rounded-[32px] overflow-hidden flex justify-center items-center px-6 pb-0 shadow-2xl group transition-transform duration-300 hover:-translate-y-2 mx-auto"
    style={{
      background: "linear-gradient(180deg, #FFFFFF 13.71%, #AEDCFF 67.66%)",
      boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    }}
  >
    {/* Phone Screen Content */}
    <div className="relative w-[92%] aspect-[9/16] h-[100%] rounded-[24px] overflow-hidden shadow-inner">
      <img
        src={item.image}
        alt={`Capsule Example ${idx + 1}`}
        className="w-full h-full object-cover transition-transform duration-700"
      />
    </div>

    {/* Phone Home Indicator */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/30 rounded-full"></div>
  </div>
);

export default RenderPhoneCard;
