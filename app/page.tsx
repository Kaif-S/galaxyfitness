import CardGrid from "./components/CardGrid";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  
  return (
    <main className="h-screen">
      <Navbar/>
      <HeroSection/>
      <h2 className="text-primary text-6xl font-bold font-oswald text-center mt-8">Our Strength in Numbers 💪</h2>
      <CardGrid/>
    </main>
  );
}
