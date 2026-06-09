import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Appsoleum</title>
        <meta name="description" content="Preserve your memories forever with Appsoleum. Capture, share, and protect your most precious moments for generations to come." />
        <meta name="keywords" content="memories, preserve, appsoleum, legacy, family, photos, stories" />
        <meta property="og:title" content="Appsoleum - Preserve Your Memories Forever" />
        <meta property="og:description" content="Preserve your memories forever with Appsoleum. Capture, share, and protect your most precious moments for generations to come." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Appsoleum - Preserve Your Memories Forever" />
        <meta name="twitter:description" content="Preserve your memories forever with Appsoleum. Capture, share, and protect your most precious moments for generations to come." />
      </Helmet>

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
