import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-28'>
        <Image loading='eager' src="/logo.png" className='bg-white hover:scale-110 transition-all' height={100} width={100} alt='gym logo' />
        <ul className='text-primary font-bricolage-grotesque text-lg flex gap-8 mx-4 my-2'>
            <li className='listitem-nav px-0.5 text-xl hover:scale-110 border-b py-2 border-black  hover:border-primary font-semibold'><Link href={"/#"}>Home</Link></li>
            <li className='listitem-nav px-0.5 text-xl hover:scale-110 border-b py-2 border-black  hover:border-primary font-semibold'><Link href={"/#"}>About</Link></li>
            <li className='listitem-nav px-0.5 text-xl hover:scale-110 border-b py-2 border-black  hover:border-primary font-semibold'><Link href={"/#"}>Services</Link></li>
            <li className='listitem-nav px-0.5 text-xl hover:scale-110 border-b py-2 border-black  hover:border-primary font-semibold'><Link href={"/#"}>Contact us</Link></li>
        </ul>
        <button className='font-bold cursor-pointer text-secondary text-2xl px-4 py-2 rounded-2xl bg-primary hover:scale-110 duration-300 transition-all '>Get Started</button>
    </nav>
  )
}

export default Navbar
