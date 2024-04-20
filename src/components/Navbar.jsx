import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Navbar = () => {
    const [showHamburger, setShowHamburger] = useState(true);
  return (
    <section className='bg-white text-black text-base'>
        <nav className='md:flex justify-around mt-7'>
            <Image src={'logo.svg'} width={140} height={30} alt='logo'  />
            <div className='flex justify-between items-center gap-16 md:visible '>
            <ul className='flex justify-between gap-6'>
                <li>
                    <Link href='#'>Solutions</Link>
                </li>
                <li>
                    <Link href='#'>Use Cases</Link>
                </li>
                <li>
                    <Link href='#'>About</Link>
                </li>
            </ul>
            <button className='border border[#E3E5EA] px-3 py-4 text-black-500 '>
                Request Demo
            </button>
            </div>
            {showHamburger &&
            <Image src={'HERO.svg'} width={14} height={8} alt='hamburger' className='md:hidden'/>
            }
        </nav>
    </section>
  )
}
