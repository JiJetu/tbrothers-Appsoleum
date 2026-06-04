import Hero from "../components/hero/Hero";
import MostPeople from "../components/mostPeople/MostPeople";
import FeaturesSection from "../components/features/FeaturesSection";
import MomentsSection from "../components/moments/MomentsSection";
import FoundingMembersSection from "../components/foundingMembers/FoundingMembersSection";
import Footer from "../components/footer/Footer";
import YourStory from "../components/story/YourStory";

function Home() {
  return (
    <>
      <Hero />
      <MomentsSection />
      <MostPeople />
      <FeaturesSection />
      <YourStory />
      <FoundingMembersSection />
      {/* <StepsSection />
      <CapsulesSection />
      <PreserveSection />
      <AppsoInterview /> */}
      <Footer />
    </>
  );
}

export default Home;
