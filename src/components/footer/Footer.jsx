import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IMAGES, ICONS } from "../../assets/index";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container px-8 md:px-12 xl:px-16">
        {/* Left Section - Logo and Tagline */}
        <div className="footer-left">
          <div className="footer-logo-section">
            <div className="flex items-center gap-3">
              <img src={IMAGES.logo} alt="Appsoleum" className="footer-logo" loading="lazy" />
              <h3 className="footer-tagline">Appsoleum</h3>
            </div>
            <p className="footer-description">
              Your Legacy. Your Voice. Perfectly Timed.
            </p>
          </div>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
              title="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Center Section - Links */}
        {/* <div className="footer-center">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>
                <Link to="#">Features</Link>
              </li>
              <li>
                <Link to="#">How It Works</Link>
              </li>
              <li>
                <Link to="#">Use Cases</Link>
              </li>
              <li>
                <Link to="#">Security</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Our Mission</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>
        </div> */}
        {/* CHANGE IT */}
        <div className="footer-center" />

        {/* Right Section - Download Buttons */}
        <div className="footer-right">
          <h4 className="text-white font-semibold mb-5">Get the App</h4>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Apple App Store Button */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-store-btn flex-1 flex items-center gap-3 px-5 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition-all duration-200"
            >
              <img
                src={ICONS.apple}
                alt="Apple App Store"
                className="w-9 h-9"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-xs text-white/70">Download on the</span>
                <span className="font-bold text-lg text-white">App Store</span>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-store-btn flex-1 flex items-center gap-3 px-5 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition-all duration-200"
            >
              <img
                src={ICONS.playStore}
                alt="Google Play Store"
                className="w-9 h-9"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-xs text-white/70">Download on the</span>
                <span className="font-bold text-lg text-white">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom px-8 md:px-12 xl:px-16 py-5">
        <p className="copyright">&copy; 2026 Appsoleum. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="#">Privacy</Link>
          <Link to="#">Terms</Link>
          {/* <Link to="#">Cookies</Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
