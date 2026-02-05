import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import WhyLMGPage from "@/pages/WhyLMGPage";
import PartnersPage from "@/pages/PartnersPage";
import ContactPage from "@/pages/ContactPage";
import SportsPage from "@/pages/divisions/SportsPage";
import EntertainmentPage from "@/pages/divisions/EntertainmentPage";
import MediaPage from "@/pages/divisions/MediaPage";
import StudiosPage from "@/pages/divisions/StudiosPage";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-lmg" element={<WhyLMGPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/divisions/sports" element={<SportsPage />} />
            <Route path="/divisions/entertainment" element={<EntertainmentPage />} />
            <Route path="/divisions/media" element={<MediaPage />} />
            <Route path="/divisions/studios" element={<StudiosPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
