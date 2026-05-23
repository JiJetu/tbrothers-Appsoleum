import { FiVideo, FiCalendar, FiUsers, FiHeart } from 'react-icons/fi';

const steps = [
  {
    id: 1,
    icon: FiVideo,
    title: "Record",
    desc: "Create a private video, audio, or written message.",
  },
  {
    id: 2,
    icon: FiCalendar, 
    title: "Schedule",
    desc: "Choose when your message should be delivered.",
  },
  {
    id: 3,
    icon: FiUsers,
    title: "Choose Beneficiaries",
    desc: "Select who will receive your message in the future.",
  },
  {
    id: 4,
    icon: FiHeart,
    title: "Delivered in the Future",
    desc: "They receive your message exactly when it matters most.",
  },
];

export default function StepsSection() {
  return (
    <section className="py-20 bg-[#0A1428] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            Simple To Create.{' '}
            <span className="text-[#FF6B1A]">Powerful</span> To Receive.
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative pt-4">
          
          {/* Dotted Line - Only between steps (no extension before 1st or after last) */}
          <div className="absolute top-[58px] left-[120px] right-[120px] h-[2px] bg-[#FF6B1A]/30 hidden md:block"
               style={{
                 backgroundImage: 'repeating-linear-gradient(to right, #FF6B1A, #FF6B1A 8px, transparent 8px, transparent 18px)'
               }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                
                {/* Icon + Number Container */}
                <div className="relative mb-6">
                  
                  {/* Main Icon Circle - Larger & Better Filled */}
                  <div className="w-20 h-20 rounded-full border-2 border-[#FF6B1A] bg-[#0F1C3A] flex items-center justify-center">
                    <step.icon className="text-3xl text-[#FF6B1A]" />
                  </div>

                  {/* Number Circle - Positioned at the Top */}
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#FF6B1A] flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-[#0A1428]">
                    {step.id}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[15px] leading-relaxed max-w-[230px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}