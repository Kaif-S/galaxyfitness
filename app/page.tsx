import StatsGrid from "./components/StatsGrid";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AnimatedCards from "./components/AnimatedCards";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <main className="h-screen">
      <HeroSection/>
      <h2 className="text-primary lg:text-6xl text-4xl font-bold font-oswald text-center mt-8">Our Strength in Numbers 💪</h2>
      <StatsGrid/>
      <h1 className="text-primary lg:text-6xl text-4xl font-bold font-oswald text-center">The Galaxy fitness Experience 🏋️</h1>
      <AnimatedCards/>
      <h1 className="text-primary lg:text-6xl text-4xl font-bold font-oswald text-center mt-8">Testimonials 💭</h1>
      <Testimonial/>
      <Footer></Footer>
    </main>
  );
}
