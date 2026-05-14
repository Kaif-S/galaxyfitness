"use client"
import { motion } from 'framer-motion';
import { Dumbbell , User , CalendarCog, ShieldCheck ,  } from 'lucide-react';

import React from 'react'


const cards = [
  {
    title: "500+ Active Members",
    desc: "A growing community pushing limits every day.",
    icon:<User className='size-24 text-primary'/>
  },
  {
    title: "20+ Professional Machines",
    desc: "Modern equipment for strength and endurance.",
    icon:<Dumbbell className='size-24 text-primary'/>
  },
  {
    title: "Certified Trainers",
    desc: "Expert guidance to maximize your results.",
    icon:<ShieldCheck className='size-24 text-primary'/>
  },
  {
    title: "Custom Workout Plans",
    desc: "Programs tailored to your fitness goals.",
    icon:<CalendarCog className='size-24 text-primary'/>
  },
];

const StatsGrid = () => {
  return (
    <div className='grid lg:h-[60vh] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 lg:mx-28 gap-8 lg:gap-4 my-12'>
      {cards.map((card, index) => (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2, type:"spring" }}
        key={index} className="bg-white/10 backdrop-blur-md rounded-3xl h-full flex items-center flex-col justify-center gap-5 p-6 text-center border border-primary/20">
          {card.icon}
          <h2 className="text-2xl font-bold text-primary mb-2">{card.title}</h2>
          <p className="text-white/80">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsGrid
