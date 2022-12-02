import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { EXAMPLE_PATH } from '../lib/constants';
export default function Footer() {
	return (
		<footer className=" bg-accent-2 text-accent-1">
			<div>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<h3 className="text-4xl lg:text-5xl font-bold font-['Crimson-Text'] tracking-tight leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
						Thoughts of a Caveman
					</h3>

					{/* Soical Media Icons */}
					<div className="flex flex-row justify-evenly items-center lg:pl-4 lg:w-1/2">
						<a href="/" className="ml-3">
							<AiFillTwitterCircle size={40} />
						</a>
						<a href="/" className="ml-3">
							<AiFillInstagram size={40} />
						</a>
					</div>
					{/* Copyright Info */}
					<p className="text-accent-1 text-center mt-12">
						&copy; 2022-2023 Jungo Writes. <br /> All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
