import React from 'react';
import { type LucideIcon } from 'lucide-react';
import AnimateCounter from './AnimatedCounter';

interface CardProps {
    icon: LucideIcon;
    animatedText:number;
    text: string;
    whether_plus:boolean;
}

const Card = ({icon:ICON,animatedText,text,whether_plus}:CardProps) => {
  return (
    <div className='flex flex-col font-figtree justify-center items-center gap-8 min-w-[26%] border border-primary text-primary rounded-2xl p-4'>
        <ICON className='size-20'/>
        <span className='text-3xl font-semibold'><AnimateCounter from={0} to={animatedText} animationOptions={{duration:2.5, "ease":"easeInOut"}} />{whether_plus&&"+"}</span>
        <span className='text-3xl font-semibold'>{text}</span>
    </div>
  )
}

export default Card
