import { useState } from "react";
import { Menu, X } from "lucide-react";
import React from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	

 	if (isOpen) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	return (
		<div>
			<div className="flex justify-between items-center p-4 z-20">
				<div>
					<img
						src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logo.png"
						alt="user-logo"
					/>
				</div>

				<div className=" hidden lg:flex ">
					<ul className="flex text-[#c4cfde] gap-14">
						<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">HOME</li>
						<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">FEATURE</li>
						<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">PORTFOLIO</li>
						<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">RESUME</li>
						<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">TESTIMONIAL</li>
						<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">CLIENTS</li>
						<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">CONTACTS</li>
					</ul>
				</div>

				<div className="sm:visible lg:hidden absolute top-8 bg-black rounded-full right-0">
					<div
						className="btn w-14 flex justify-center items-center hover:scale-110 rounded-full duration-700 h-13"
						onClick={() => setIsOpen(true)}
					>
						<Menu size={32} color="#ff014f" className="cursor-pointer" />
					</div>
				</div>
			</div>

			<div
				className={`bg-[#191b1e] z-70 sm:visible  lg:hidden w-[60%] h-[100%] fixed top-0 left-0 shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
					}`}
			>
				<button className="absolute top-4 right-4 sm:visible  lg:hidden" onClick={() => setIsOpen(false)}>
					<X size={32} color="#ff014f" />
				</button>

				<div className="sm:visible  lg:hidden p-6">
					<img
						src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logo.png"
						alt="Sidebar Logo"
					/>
				</div>

				<div className="p-6   sm:visible  lg:hidden">
					<h1 className="">Build Immigration Visa Consulting
					Website Faster & Easy</h1>
				</div>

					<hr className="text-black sm:visible  lg:hidden"/>
					<hr className="text-black sm:visible  lg:hidden"/>
				<ul className="text-white p-6 space-y-4 sm:visible  lg:hidden">
					<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">HOME</li>
					<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">FEATURE</li>
					<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">PORTFOLIO</li>
					<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">RESUME</li>
					<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">TESTIMONIAL</li>
					<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">CLIENTS</li>
					<li className="hover:text-[#ff014f] text-sm cursor-pointer duration-200">CONTACTS</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
