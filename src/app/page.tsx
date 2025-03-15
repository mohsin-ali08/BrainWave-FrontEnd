import Webinar from "@/components/webinars";
import Hero from "../components/Hero";
import Subsection from "../components/sub-section";
import AchievementQA from "../components/AchievementQA";
import QuestionAnswer from "../components/Question&Ans";
import Contact from "../components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="md:pt-0 pt-40">
        <Subsection />
      </div>
      <div className="pt-12 md:pt-24">
        <Webinar />
        <AchievementQA />
        <div className="pt-12 md:pt-36">
          <QuestionAnswer />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
