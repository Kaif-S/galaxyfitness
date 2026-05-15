"use client"
import React from 'react'
import { WordsPullUp } from './WordsPullup'
import { motion } from 'motion/react'


const HeroSection = () => {
  return (
    <section className='relative lg:h-screen h-[80vh] w-full'>
      <div
        className="absolute inset-0 bg-cover bg-center lg:h-screen h-[80vh] before:content-[''] before:absolute before:backdrop-blur-md before:inset-0 before:bg-black/70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
      </div>
      <div className='relative h-[75vh] flex justify-center lg:px-28 items-center flex-col md:gap-8 gap-6 lg:gap-12'>
      <WordsPullUp text='Build Your Strongest Self' className='font-bold font-oswald lg:text-7xl md:text-5xl text-3xl text-primary z-10' />
      <motion.span 
      initial={{opacity:0,translateY:20}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:0.3,delay:0.2}}
      viewport={{once:true}}
      className='text-primary font-figtree lg:py-0 w-[90vw] text-center lg:text-left lg:w-[60vw]'>Galaxy Fitness is built for people who want real results — from strength training and fat loss to endurance and athletic performance. Modern equipment, expert trainers, and an atmosphere designed to keep you motivated every day.</motion.span>
      <button className='text-secondary font-bold font-figtree text-2xl px-4 py-2 rounded-2xl cursor-pointer hover:scale-110 transition-all duration-300 bg-primary active:scale-90'>Join Galaxy Fitness</button>
      </div>
    </section>
  )
}

export default HeroSection
