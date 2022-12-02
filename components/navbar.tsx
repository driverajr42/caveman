import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import Logo from '../docs/logo.svg';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div
			// style={{ backgroundColor: `${color}` }}
			className="fixed left-0 top-0 w-full h-24 z-10 mb-12 ease-in duration-300 bg-white
             shadow-medium"
		>
			{/* Company Logo */}
			<div className="max-w-[1240px]  flex justify-between items-center p-4 text-white">
				<Link href="/">
					<h1 className="text-accent-2 text-2xl text-center uppercase tracking-wide ml-6 font-['Crimson-Text']">
						Thoughts <br />
						of a Caveman
					</h1>
				</Link>

				<ul className="hidden sm:flex">
					<li className="p-4">
						<Link href="/">Home</Link>
					</li>
					<li className="p-4">
						<Link href="/#gallery">Gallery</Link>
					</li>
					<li className="p-4">
						<Link href="/portfolio">Work</Link>
					</li>
					<li className="p-4">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<div onClick={handleNav} className="block sm:hidden z-10">
					{/* If navbar is open show the close icon. Else show the menu icon */}
					{nav ? (
						<AiOutlineClose size={20} className="text-accent-1" />
					) : (
						<AiOutlineMenu size={20} className="text-accent-2" />
					)}
				</div>

				{/* Mobile Menu */}

				{/* If nav is not showing display the first styles. If it is open the show the second */}
				<div
					className={
						nav
							? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-accent-2 text-center ease-in duration-300'
							: 'sm:hidden absolute top-[100vh] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
					}
				>
					<ul className="font-['Crimson-Text'] uppercase">
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href="/">Home</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href="/#gallery">Gallery</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href="/portfolio">Work</Link>
						</li>
						<li className="p-4 text-4xl hover:text-gray-500">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
