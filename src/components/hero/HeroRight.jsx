import { IMAGES } from "../../assets";
import FindUsOnCard from "./FindUsOnCard";
import "./hero.css";

function HeroRight() {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center md:items-end">
      {/* Mobile-only Image Banner */}
      <div className="relative w-full h-[380px] md:hidden overflow-hidden mt-6 rounded-[20px]">
        {/* Gradient fade from dark hero background into the image */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#030728] to-transparent z-10 hidden md:block"></div>

        <img
          src={IMAGES.bannerBehind}
          alt="Appsoleum Experience"
          className="w-full h-full object-cover object-[70%_20%] hidden md:block"
        />
        <img
          src={IMAGES.bannerBehindMobile}
          alt="Appsoleum Experience"
          className="w-full h-full object-cover object-[70%_cover] md:hidden"
        />

        {/* Find us on Card (Centered at the bottom of mobile image) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full">
          <FindUsOnCard />
        </div>
      </div>

      {/* Desktop-only Find us on Card (placed at the bottom right) */}
      <div className="hidden md:block mb-10 mr-4 lg:mr-10 z-20">
        <FindUsOnCard />
      </div>
    </div>
  );
}

export default HeroRight;
