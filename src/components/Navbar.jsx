import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	const navigate = useNavigate();
	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white border-b">
			<h1 className="w-full text-3xl font-bold text-[#A0D2EB]">SALESTREKKER</h1>
			<ul className="hidden md:flex">
				<li className="p-4 cursor-pointer" onClick={() => navigate('/')}>
					Home
				</li>
				<li className="p-4 cursor-pointer" onClick={() => navigate('/calculator')}>
					Calculator
				</li>
			</ul>
			<div onClick={handleNav} className="block md:hidden">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					nav
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-gray-500 ease-in-out duration-500 z-20'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className="w-full text-xl md:text-3xl mt-5 font-bold text-[#845883]-600 m-4">
					SALESTREKKER
				</h1>
				<ul className="p-4 uppercase">
					<li className="p-4 border-b cursor-pointer">
						<Link onClick={handleNav} to="/" duration={500}>
							Home
						</Link>
					</li>
					<li className="p-4 border-b cursor-pointer">
						<Link onClick={handleNav} to="calculator" duration={500}>
							Calculator
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
