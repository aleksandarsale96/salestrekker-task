import React, {useState} from 'react';
import Tab1 from '../components/Tab1';
import Tab2 from '../components/Tab2';

const Calculator = () => {
	const [openTab, setOpenTab] = React.useState(1);
	const openTab2 = () => {
		if (dataHolder.amount !== '' && dataHolder.income !== '') {
			setOpenTab(2);
		}
	};
	const [isDisabled, setIsDisabled] = useState(true);
	const [grossAmount, setGrossAmount] = useState({
		weekly: 0,
		fortnightly: 0,
		monthly: 0,
		annually: 0,
	});

	const [netAmount, setNetAmount] = useState({
		weekly: 0,
		fortnightly: 0,
		monthly: 0,
		annually: 0,
	});

	const [taxAmount, setTaxAmount] = useState({
		weekly: 0,
		fortnightly: 0,
		monthly: 0,
		annually: 0,
	});
	const [dataHolder, setDataHolder] = useState({
		amount: '',
		period: 'weekly',
		income: '',
	});
	console.log(isDisabled);
	return (
		<>
			<div className="flex flex-wrap justify-center mt-36 h-screen bg-gray-900">
				<div className="max-w-[1240px] lg:w-[700px] sm:w-[500px] w-[300px] h-screen">
					<ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
						<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
							<a
								className={
									'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal hover:bg-[#A0D2EB] hover:text-gray-800 ease-in-out duration-700 ' +
									(openTab === 1 ? 'text-white bg-[#845883]' : 'text-[#845883] bg-white')
								}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(1);
								}}
								data-toggle="tab"
								href="#link1"
								role="tablist"
							>
								INCOME DETAILS
							</a>
						</li>
						<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
							<a
								className={
									'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal hover:bg-[#845883] hover:text-white ease-in-out duration-700 ' +
									(openTab === 2
										? 'text-white bg-[#845883]'
										: 'text-[#845883] bg-white') +
									' '
									// (isDisabled
									// 	? 'hover:bg-white'
									// 	: 'hover:bg-[#845883] hover:text-white')
								}
								onClick={(e) => {
									e.preventDefault();
									if (dataHolder.amount !== '' && dataHolder.income !== '') {
										setIsDisabled(true);
										setOpenTab(2);
									}
									// else {
									// 	setIsDisabled(f);
									// 	setOpenTab(2);
									// }
								}}
								data-toggle="tab"
								href="#link2"
								role="tablist"
							>
								INCOME
							</a>
						</li>
					</ul>
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded z-10">
						<div className="px-4 py-5 flex-auto">
							<div className="tab-content tab-space">
								{openTab === 1 ? (
									<Tab1
										openTab2={openTab2}
										setGrossAmount={setGrossAmount}
										setNetAmount={setNetAmount}
										setTaxAmount={setTaxAmount}
										dataHolder={dataHolder}
										setDataHolder={setDataHolder}
									/>
								) : (
									<Tab2
										grossAmount={grossAmount}
										netAmount={netAmount}
										taxAmount={taxAmount}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Calculator;
