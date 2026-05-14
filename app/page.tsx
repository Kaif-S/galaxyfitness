import StatsGrid from "./components/StatsGrid";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AnimatedCards from "./components/AnimatedCards";

export default function Home() {
  
  return (
    <main className="h-screen">
      <Navbar/>
      <HeroSection/>
      <h2 className="text-primary lg:text-6xl text-4xl font-bold font-oswald text-center mt-8">Our Strength in Numbers 💪</h2>
      <span className="text-primary text-2xl block lg:hidden text-center mt-8">The animation below might not work in mobile phones, please scoll to next section.</span>
      <StatsGrid/>
      <h1 className="text-primary lg:text-6xl text-4xl font-bold font-oswald text-center">The Galaxy fitness Experience 🏋️</h1>
      <AnimatedCards/>
    </main>
  );
}
