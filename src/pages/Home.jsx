import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="text-black w-full flex">
			<div className="w-[300px] max-w-[800px] md:w-[4500px] mt-64 h-[350px] mx-auto text-center flex flex-col justify-center border rounded-md transparent border-[#845883] hover:border-[#A0D2EB] ease-in-out duration-700">
				<h1 className="font-bold xl:text-2xl md:text-2xl text-md text-white pb-4">
					Welcome to our awesome
				</h1>
				<h3 className="font-bold md:text-5xl text-2xl text-white pb-4 uppercase">
					Client calculator
				</h3>
				<p className="text-white font-bold md:text-xl">
					It&apos;s a pleasure to work with us
				</p>
				<div className="pt-16">
					<button
						onClick={() => navigate('/calculator')}
						className="bg-[#845883] w-[250px] md:w-[300px] rounded-md font-medium my-1 mx-auto py-3 text-white hover:bg-[#A0D2EB] ease-in-out duration-500 hover:text-gray-900"
					>
						Client Calculator
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
