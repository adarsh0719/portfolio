import ProgressBar from "../ProgressBar";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <ProgressBar/>
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
