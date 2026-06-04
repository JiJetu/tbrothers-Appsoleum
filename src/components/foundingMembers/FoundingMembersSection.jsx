import { useState } from "react";

export default function FoundingMembersSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! You're now on the founding list. 🎉");
    setEmail("");
  };

  return (
    <section
      className="py-24 px-4 md:px-8 bg-white flex justify-center items-center"
      id="footer"
    >
      <div
        className="w-full rounded-[20px] px-6 py-12 md:py-[100px] md:px-[60px] lg:px-[210px] flex flex-col items-center justify-center gap-10 text-center"
        style={{
          background: "linear-gradient(360deg, #FFD0A4 0%, #FFFFFF 73.43%)",
        }}
      >
        {/* Title & Subtitle */}
        <div className="flex flex-col items-center gap-5 max-w-[780px]">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.2] text-[#2F4A58] tracking-tight">
            Join Our{" "}
            <span className="text-[#FE8235]">Founding Legacy Members</span>
          </h2>
          <p className="text-[15px] lg:text-[16px] leading-[24px] text-[#63636A]">
            Be among the first to experience Appsoleum — the platform designed
            to preserve memories, deliver time capsule messages, and keep your
            legacy alive for generations to come.
          </p>
        </div>

        {/* Content (Form + Features) */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[694px]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-stretch gap-4 w-full"
          >
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="flex-1 w-full px-6 py-[14px] bg-white rounded-[16px] text-left text-[#63636A] placeholder:text-[#63636A] focus:outline-none focus:ring-2 focus:ring-[#FE8235]/50 transition-all text-[16px]"
              style={{
                boxShadow: "10px 20px 60px rgba(0, 0, 0, 0.06)",
              }}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-[14px] text-white font-semibold text-[16px] rounded-[16px] transition-transform hover:scale-[1.02] active:scale-95 whitespace-nowrap"
              style={{
                background: "linear-gradient(90deg, #FE8235 0%, #FE631E 100%)",
                boxShadow: "10px 20px 60px rgba(0, 0, 0, 0.06)",
              }}
            >
              Get Early Access
            </button>
          </form>

          {/* Features List */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 w-full mt-2">
            <span className="text-[#63636A] text-[14px] lg:text-[16px] leading-[24px]">
              Exclusive early access
            </span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#63636A]"></div>
            <span className="text-[#63636A] text-[14px] lg:text-[16px] leading-[24px]">
              Founding member updates
            </span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#63636A]"></div>
            <span className="text-[#63636A] text-[14px] lg:text-[16px] leading-[24px]">
              Launch announcements
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
