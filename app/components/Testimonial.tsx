"use client"
import { ArrowRight , ArrowLeft } from "lucide-react";
import { AnimatePresence , motion} from "motion/react";
import { useState , useEffect} from "react";

const CardData = [
  {
    text: "The Galaxy fitness experience has transformed my approach to health and wellness. The personalized training plans and supportive community have been instrumental in my journey.",
  },
  {
    text: "The trainers are supportive, and the gym has everything I need for serious workouts.",
  },
  {
    text: "Best gym atmosphere in town. Clean, energetic, and perfect for beginners and advanced lifters.",
  },
];
const THRESHOLD = 5000;

const Testimonial = () => {
  const [CarouselItem, setCarouselItem] = useState(0);

  const next = () => {
    setCarouselItem((prev) =>
      prev === CardData.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCarouselItem((prev) =>
      prev === 0 ? CardData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselItem((prev) =>
        prev === CardData.length - 1 ? 0 : prev + 1
      );
    }, THRESHOLD);

    return () => clearInterval(timer);
  }, [,CarouselItem]);


  return (
    <div className="container flex lg:h-[55%] h-1/3 relative justify-center items-center">
      <div className="absolute inset-0 w-full hidden md:flex justify-between items-center h-full">
        <ArrowLeft className="size-16 text-primary p-4 rounded-full lg:mx-10 hover:scale-110 active:scale-95  transition-all" onClick={prev}/>
        <ArrowRight className="size-16 text-primary p-4 rounded-full lg:mx-10 hover:scale-110 active:scale-95  transition-all" onClick={next}/>
      </div>
      <AnimatePresence mode="wait">
      {CardData.map((txt, index) => {
        if (CarouselItem === index) {
          return (
            <motion.div
              initial={{
                opacity: 0,
                x: -100
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity:0,
                x: 100
              }}
              transition={{
                duration:0.4,
                type:"spring"
              }}
              key={index}
              className="p-6 rounded-lg shadow-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center lg:max-w-[30%] md:w-xl w-[90%] bg-primary"
            >
              <p className="lg:text-2xl md:test-xl text-lg font-bricolage-grotesque italic font-bold text-secondary">
                &#34;{txt.text}&#34;
              </p>
            </motion.div>
          );
        }
        return null; 
      })}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
