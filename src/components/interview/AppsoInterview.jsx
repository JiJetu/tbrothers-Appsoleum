import { motion } from "framer-motion";
import { Play, Mic, Users, Sparkles } from "lucide-react";
import { IMAGES } from "../../assets";

export function AppsoInterview() {
  const cards = [
    {
      label: "Video",
      icon: Play,
      title: "Guided Video Prompts",
      desc: "Thoughtful, on-screen questions guide you through each chapter of your story — no script needed.",
      img: IMAGES.interviewGuided,
      badge: "Recording",
      badgeDot: true,
    },
    {
      label: "Audio",
      icon: Mic,
      title: "Audio Storytelling",
      desc: "Capture the warmth of a voice. Perfect for stories that feel more natural spoken than seen.",
      img: IMAGES.interviewAudio,
      badge: "Playing",
      badgeDot: false,
    },
    {
      label: "Legacy",
      icon: Users,
      title: "For Future Generations",
      desc: "Loved ones can revisit your interviews anytime — a living archive of who you are, kept forever.",
      img: IMAGES.interviewLegacy,
      badge: "Saved",
      badgeDot: false,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#0A1929] relative overflow-hidden border-t border-slate-800/50">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-appso-orange/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-appso-orange/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-appso-orange/10 border border-appso-orange/30 px-4 py-1.5 rounded-full mb-6">
            <Sparkles size={14} className="text-appso-orange" />
            <span className="text-appso-orange text-xs font-bold tracking-widest uppercase">
              Appso Interview
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-white mb-6 leading-tight">
            Your Life Story, <span className="text-appso-orange">Guided.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Experience guided video or audio interviews inside Appsoleum
            designed to preserve your stories, wisdom, memories, and life
            experiences for future generations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-slate-800 hover:border-appso-orange/40 rounded-3xl overflow-hidden transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900 flex items-center justify-center p-2">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 rounded-full bg-appso-orange/10 blur-3xl"></div>
                </div>

                <img
                  src={card.img}
                  alt={card.title}
                  className="relative z-10 h-full w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 z-20">
                  {card.badgeDot && (
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                  <span className="text-white text-[10px] font-semibold uppercase tracking-wider">
                    {card.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-appso-orange/10 border border-appso-orange/20 flex items-center justify-center text-appso-orange">
                    <card.icon size={14} />
                  </div>
                  <span className="text-appso-orange text-xs font-bold uppercase tracking-wider">
                    {card.label}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          <button className="group inline-flex items-center gap-3 bg-appso-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-2xl shadow-appso-orange/30 hover:shadow-appso-orange/50 hover:-translate-y-0.5">
            Start Preserving Your Legacy
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <p className="text-slate-500 text-xs mt-4">
            Free to start · No credit card required
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
