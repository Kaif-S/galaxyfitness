"use client"
import { motion } from 'motion/react';
import { Dumbbell , User , CalendarCog, ShieldCheck ,  } from 'lucide-react';

import React from 'react'


const cards = [
  {
    title: "500+ Active Members",
    desc: "A growing community pushing limits every day.",
    icon:<User className='size-24 text-primary group-hover:text-secondary transition-all duration-300'/>
  },
  {
    title: "20+ Professional Machines",
    desc: "Modern equipment for strength and endurance.",
    icon:<Dumbbell className='size-24 text-primary group-hover:text-secondary transition-all duration-300'/>
  },
  {
    title: "Certified Trainers",
    desc: "Expert guidance to maximize your results.",
    icon:<ShieldCheck className='size-24 text-primary group-hover:text-secondary transition-all duration-300'/>
  },
  {
    title: "Custom Workout Plans",
    desc: "Programs tailored to your fitness goals.",
    icon:<CalendarCog className='size-24 text-primary group-hover:text-secondary transition-all duration-300'/>
  },
];

const StatsGrid = () => {
  return (
    <div className='grid lg:h-[60vh] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 lg:mx-28 gap-8 lg:gap-5 my-12'>
      {cards.map((card, index) => (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
        transition={{ duration: 0.5, delay: (index * 0.2) + 0.2, type:"spring" }}
        key={index} className="bg-white/10 backdrop-blur-md rounded-3xl hover:-translate-y-8 hover:scale-110 transition-all duration-300 h-full flex items-center flex-col justify-center gap-5 p-6 text-center border border-primary/20 hover:border-0 hover:shadow-primary/40 shadow-xl group hover:bg-primary">
          {card.icon}
          <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-all duration-300">{card.title}</h2>
          <p className="text-white/80 group-hover:text-background transition-all duration-300">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsGrid
