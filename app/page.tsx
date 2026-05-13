import StatsGrid from "./components/StatsGrid";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  
  return (
    <main className="h-screen">
      <Navbar/>
      <HeroSection/>
      <h2 className="text-primary text-6xl font-bold font-oswald text-center mt-8">Our Strength in Numbers 💪</h2>
      <StatsGrid/>
      <h1 className="text-primary">hello world</h1>
    </main>
  );
}
