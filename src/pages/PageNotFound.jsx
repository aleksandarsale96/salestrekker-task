import React from 'react';
import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<div>
			<main className="h-screen w-full flex flex-col justify-center items-center bg-gray-900">
				<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
				<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
					Page Not Found
				</div>
				<button className="mt-5">
					<a className="relative inline-block text-sm font-medium text-[#A0D2EB] group active:text-[#A0D2EB] ease-in-out duration-500 focus:outline-none focus:ring">
						<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#A0D2EB] ease-in-out duration-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
						<span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
							<a className="p-4 cursor-pointer" onClick={() => navigate('/')}>
								Home
							</a>
						</span>
					</a>
				</button>
			</main>
		</div>
	);
};

export default PageNotFound;
