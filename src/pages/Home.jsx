import Hero from "../components/hero/Hero";
import FeaturesSection from "../components/features/FeaturesSection";
import StepsSection from "../components/steps/StepsSection";
import MomentsSection from "../components/moments/MomentsSection";
import CapsulesSection from "../components/capsules/CapsulesSection";
import PreserveSection from "../components/preserve/PreserveSection";
import FoundingMembersSection from "../components/foundingMembers/FoundingMembersSection";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <StepsSection />
      <MomentsSection />
      <CapsulesSection />
      <PreserveSection />
      <FoundingMembersSection />
      <Footer />
    </>
  );
}

export default Home;
