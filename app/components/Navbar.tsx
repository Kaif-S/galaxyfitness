import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-1 md:px-4 lg:px-28'>
        <Image loading='eager' src="/logo.png" className='hover:scale-110 transition-all' height={100} width={100} alt='gym logo' />
        <ul className='text-primary font-bricolage-grotesque text-xs flex gap-4 md:gap-8 mx-4 my-2'>
            <li className='listitem-nav px-0.5 lg:text-xl md:text-lg hover:scale-110 border-b py-2 border-black  hover:border-primary font-semibold'><Link href={"/#"}>Home</Link></li>
            <li className='listitem-nav px-0.5 lg:text-xl md:text-lg hover:scale-110 border-b py-2 border-black  hover:border-primary font-semibold'><Link href={"/#"}>About</Link></li>
            <li className='listitem-nav px-0.5 lg:text-xl md:text-lg hover:scale-110 border-b py-2 border-black  hover:border-primary font-semibold'><Link href={"/#"}>Services</Link></li>
            <li className='listitem-nav px-0.5 lg:text-xl md:text-lg hover:scale-110 border-b py-2 border-black  hover:border-primary font-semibold'><Link href={"/#"}>Contact us</Link></li>
        </ul>
        <button className='font-bold font-figtree cursor-pointer text-secondary lg:text-2xl md:text-xl hidden md:inline px-4 py-2 rounded-2xl bg-primary hover:scale-110 duration-300 transition-all '>Get Started</button>
    </nav>
  )
}

export default Navbar
