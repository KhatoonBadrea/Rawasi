import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
// import About from "./components/About";
import AboutSection from "./components/about/AboutSection";
import Contact from "./components/Contact";
import SignatureCTA from "./components/SignatureCTA";
import Services from "./components/Services";
import WhyRawasi from "./components/WhyRawasi";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";

// import ServicesSection from "./components/services/ServicesSection";

function App() {
  return (
    <div dir="rtl">
      <Navbar />

      <main>
        <Hero />
        <FeaturedProperties />
        <Services />
        <AboutSection />
        <WhyRawasi />
        <Destinations />
        <SignatureCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
