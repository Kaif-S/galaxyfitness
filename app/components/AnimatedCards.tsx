"use client"
import {motion} from 'framer-motion';

function iseven(Index:number) {
    if(Index%2===0){
        return true
    }else{
        return false
    }
}


const cards = [{
    heading:"Strength Training",
    subheading:"Train Smarter, Grow Stronger",
    desc:"Access modern equipment and progressive training programs built for muscle growth and strength."
},
{
    heading:"Personal Coaching",
    subheading:"Expert Trainers",
    desc:"Get personalized guidance, workout plans, and motivation from certified fitness coaches."
},
{
    heading:"Cardio & Endurance",
    subheading:"Push Your Limits",
    desc:"Improve stamina, burn fat, and stay energized with dedicated cardio zones and routines."
},

]

const AnimatedCards = () => {
  return (
    <>
    <div className='relative inset-0 pt-4 mt-12 lg:block hidden' style={{height:`${cards.length*100}svh`}}>
      {cards.map((card,index)=>{
        return<motion.div 
        
        key={index} className={`bg-primary w-[50%] h-svh text-secondary px-6 py-10 flex flex-col justify-center gap-28 absolute ${iseven(index)?"right-0":"left-0"}`} style={{top:`${(index*100)}svh`}}> 
        <h1 className='text-8xl font-bold font-oswald'>{card.heading}</h1>
        <h4 className='text-6xl font-semibold font-figtree'>{card.subheading}</h4>
        <span className='font-bricolage-grotesque text-xl '>{card.desc}</span>
        </motion.div>
      })}
    </div>
    <div className='relative inset-0 pt-4 mt-12 lg:hidden block' style={{height:`${cards.length*70}svh`}}>
      {cards.map((card,index)=>{
        return<div 
        
        key={index} className={`w-full h-[70svh] px-6 py-10 flex flex-col justify-center gap-14 absolute ${iseven(index)?"text-secondary bg-primary":"text-primary bg-background"}`} style={{top:`${(index*70)}svh`}}> 
        <h1 className='text-7xl font-bold font-oswald'>{card.heading}</h1>
        <h4 className='text-3xl font-semibold font-figtree'>{card.subheading}</h4>
        <span className='font-bricolage-grotesque text-lg '>{card.desc}</span>
        </div>
      })}
    </div>
    </>
  )
}

export default AnimatedCards
