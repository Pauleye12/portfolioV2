import About from "./About";
import Navbar from "./components/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NewPortfolio from "./NewPortfolio";

import Skills from "./Skills";
import Work from "./Work";

const App = () => {
  return (
    <div className="flex flex-col w-full bg-[#161719] ">
      <Navbar /> <HeroSection /> <About /> <Skills /> <Work /> <NewPortfolio />{" "}
      <Contact /> <Footer />
    </div>
  );
};

export default App;
