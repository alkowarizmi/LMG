import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import Sports from "@/components/Sports";
import WhyLMG from "@/components/WhyLMG";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Sports />
        <WhyLMG />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
