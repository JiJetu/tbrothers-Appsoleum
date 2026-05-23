import { useState } from 'react';

export default function FoundingMembersSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! You're now on the founding list. 🎉");
    setEmail('');
  };

  return (
    <section className="py-20 bg-[#0A1428]">
      <div className="px-8 md:px-12 xl:px-16">
        <div 
          className="relative rounded-[16px] p-10 md:p-16 border border-white/10 overflow-hidden"
          style={{
            background: 'linear-gradient(270deg, rgba(255, 107, 0, 0.1) 0%, rgba(255, 107, 0, 0) 100%)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Text */}
            <div>
              <h2 className="text-[30px] md:text-[32px] font-bold text-white leading-tight tracking-[-0.75px] mb-4">
                Join Our Founding Legacy Members
              </h2>
              <p className="text-[16px] text-white/60 leading-relaxed max-w-md">
                Be part of the first generation preserving their voice for future generations.
              </p>
            </div>

            {/* Right Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                
                {/* Email Input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/15 rounded-[12px] 
                             text-white placeholder:text-gray-400 focus:outline-none 
                             focus:ring-2 focus:ring-white/30 text-base"
                  required
                />

                {/* Button */}
                <button
                  type="submit"
                  className="px-10 py-4 bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold 
                             rounded-[12px] shadow-[0px_0px_20px_rgba(255,107,0,0.3)] 
                             transition-all duration-200 whitespace-nowrap"
                >
                  Get Early Access
                </button>
              </form>

              {/* Bottom Text */}
              <p className="mt-6 text-xs text-white/40 text-center md:text-left">
                Early access • Exclusive updates • Special founding benefits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}