import React from 'react'
import Card from './Card'
import { Dumbbell } from 'lucide-react'


const CardGrid = () => {
  return (
    <div className='h-[70%] lg:px-28 flex py-16 justify-between'>
      <Card icon={Dumbbell} whether_plus={true} animatedText={500} text='Active members'/>
      <Card icon={Dumbbell} whether_plus={true} animatedText={20} text='Professional Machines'/>
      <Card icon={Dumbbell} whether_plus={false} animatedText={6} text='Days open Weekly'/>
    </div>
  )
}

export default CardGrid
