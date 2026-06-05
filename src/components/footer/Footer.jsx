import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IMAGES, ICONS } from "../../assets/index";

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    company: [
      { label: "About Us", targetId: "footer" },
      { label: "How It Works", targetId: "how-it-works" },
      { label: "Features", targetId: "features" },
      { label: "Pricing", targetId: "pricing" },
    ],
    support: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  };

  return (
    <footer className="bg-[#030728] text-white pt-20" id="footer">
      <div className="px-8 md:px-12 xl:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          {/* Left Section - Logo and Tagline */}
          <div className="lg:max-w-xs flex flex-col gap-6">
            <Link
              to="/"
              onClick={(e) => handleScroll(e, "root")}
              className="flex items-center gap-3 group inline-block"
            >
              <div className="w-10 h-10 bg-[#FF6B1A] rounded-xl flex items-center justify-center shadow-lg overflow-hidden shrink-0">
                <img
                  src={IMAGES.logo}
                  alt="Appsoleum Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-[22px] tracking-tight">
                Appsoleum
              </span>
            </Link>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Your Legacy. Your Voice. Perfectly Timed.
            </p>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16">
            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-[16px] mb-6">
                Company
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`#${link.targetId}`}
                      onClick={(e) => handleScroll(e, link.targetId)}
                      className="text-white/70 hover:text-white transition-colors text-[14px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold text-[16px] mb-6">
                Support
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors text-[14px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold text-[16px] mb-6">
                Social Media
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-[14px]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-black">
                      <FaInstagram className="w-3.5 h-3.5" />
                    </div>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-[14px]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-black">
                      <FaFacebook className="w-3.5 h-3.5" />
                    </div>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-[14px]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-black">
                      <FaYoutube className="w-3.5 h-3.5" />
                    </div>
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-[14px]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-black">
                      <FaXTwitter className="w-3.5 h-3.5" />
                    </div>
                    X
                  </a>
                </li>
              </ul>
            </div>

            {/* Get The App */}
            <div>
              <h4 className="text-white font-semibold text-[16px] mb-6">
                Get The App
              </h4>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 bg-white text-black px-4 py-2.5 rounded-[12px] w-[170px] hover:bg-gray-100 transition-colors shadow-lg">
                  <img
                    src={ICONS.apple}
                    alt="Apple"
                    className="w-7 h-7 object-contain"
                  />
                  <div className="text-left flex flex-col justify-center">
                    <span className="text-[9px] text-gray-500 font-medium leading-[1]">
                      Download on the
                    </span>
                    <span className="text-[13px] font-bold leading-[1.2] mt-0.5">
                      APP STORE
                    </span>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-white text-black px-4 py-2.5 rounded-[12px] w-[170px] hover:bg-gray-100 transition-colors shadow-lg">
                  <img
                    src={ICONS.playStore}
                    alt="Google Play"
                    className="w-7 h-7 object-contain"
                  />
                  <div className="text-left flex flex-col justify-center">
                    <span className="text-[9px] text-gray-500 font-medium leading-[1]">
                      GET IT ON
                    </span>
                    <span className="text-[13px] font-bold leading-[1.2] mt-0.5">
                      Google Play
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 py-8 text-center text-white/50 text-[13px] border-t border-white/10">
          © 2026 Appsoleum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
