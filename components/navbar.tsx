import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import Logo from '../docs/logo.svg'

const Navbar = () => {

    const [nav, setNav ] = useState(false)

    // These states are to change the background and text colors when user scrolls down
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    } 


    useEffect(()=>{
        // If user scrolled down the window passed a certain point the background and text color of navbar will change using the following effect
        const colorChange = () => {
            if(window.scrollY >= 90 ) {
                setColor('#fff')
                setTextColor('#000')
            } else {
                setColor('transparent')
                setTextColor('#fff')
            } // Else if user is not scrolled down a certain piont than effect will return back to its orignal state
        }
        // Telling the window to listen to the scroll
        window.addEventListener('scroll', colorChange)
    }, [])

  return (
    <div style={{backgroundColor:`${color}` }} className='fixed left-0 top-0 w-full h-24 z-10 mb-12 ease-in duration-300'>
        {/* Company Logo */}
        <div className='max-w-[1240px] -mt-16 flex justify-between items-center p-4 text-white'>
            <Link href='/'>
            <Image
      src={Logo}
      alt="Picture of the author"
      width={200}
      height={200}
    />
            </Link>

            <ul style={{color:`${textColor}` }} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>   
            </ul>

            {/* Mobile Menu Button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {/* If navbar is open show the close icon. Else show the menu icon */}
                { nav ? <AiOutlineClose size={20} className='text-accent-1'/> : <AiOutlineMenu size={20} className='text-accent-2'/>}
            </div>

            {/* Mobile Menu */}
            {/* If nav is not showing display the first styles. If it is open the show the second */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-accent-2 text-center ease-in duration-300' : 'sm:hidden absolute top-[100vh] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
            <ul>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contact'>Contact</Link>
                </li>   
            </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar