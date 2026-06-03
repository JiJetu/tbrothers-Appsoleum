import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { IMAGES } from "../../assets";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "How it works", targetId: "how-it-works" },
    { label: "Feature", targetId: "features" },
    { label: "What You Can Preserve", targetId: "preserve" },
    { label: "About Us", targetId: "footer" },
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-8 sm:px-12 xl:px-16">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#FF6B1A] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B1A]/20 overflow-hidden">
            <img
              src={IMAGES.logo}
              alt="Appsoleum Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white font-bold text-xl md:text-base lg:text-xl tracking-tight">
            Appsoleum
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.targetId}`}
              onClick={(e) => handleScroll(e, item.targetId)}
              className="text-white/80 hover:text-white transition-colors duration-200 text-[12px] lg:text-[15px] font-medium whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6">
          {/* <a
            href="#signin"
            className="text-white/80 hover:text-white transition-colors duration-200 text-[12px] lg:text-[15px] font-medium whitespace-nowrap"
          >
            Sign in
          </a> */}
          <button className="bg-gradient-to-r from-[#FF6B1A] to-[#FF8A3D] hover:from-[#FF8A3D] hover:to-[#FF6B1A] text-white font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-xl shadow-lg shadow-[#FF6B1A]/20 transition-all duration-300 hover:scale-105 active:scale-95 text-[12px] lg:text-[15px] whitespace-nowrap">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/95 hover:text-white focus:outline-none z-50 p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#030728]/95 border-b border-white/10 backdrop-blur-lg px-8 py-8 flex flex-col gap-6 z-40 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.targetId}`}
                  onClick={(e) => handleScroll(e, item.targetId)}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-lg font-medium py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {/* <a
                href="#signin"
                className="text-white/80 hover:text-white transition-colors duration-200 text-center py-3 rounded-xl border border-white/10 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </a> */}
              <button
                className="bg-gradient-to-r from-[#FF6B1A] to-[#FF8A3D] hover:from-[#FF8A3D] hover:to-[#FF6B1A] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-[#FF6B1A]/20 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
