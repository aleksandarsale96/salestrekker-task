import React, {useEffect, useState} from 'react';

const Tab2 = ({grossAmount, netAmount, taxAmount}) => {
	const [selectedIncome, setSelectedIncome] = useState('weekly');
	const handleSelectChange = (event) => {
		const {value} = event.target;
		setSelectedIncome(value);
	};
	const [showNetIncome, setShowNetIncome] = useState(Math.round(netAmount.weekly));
	useEffect(() => {
		if (selectedIncome === 'weekly') {
			setShowNetIncome(Math.round(netAmount.weekly));
		} else if (selectedIncome === 'fortnightly') {
			setShowNetIncome(Math.round(netAmount.fortnightly));
		} else if (selectedIncome === 'monthly') {
			setShowNetIncome(Math.round(netAmount.monthly));
		} else if (selectedIncome === 'annually') {
			setShowNetIncome(Math.round(netAmount.annually));
		}
	}, [selectedIncome]);
	return (
		<div className="secondTab" id="link2">
			<div className="flex flex-col">
				<div className="overflow-x-auto">
					<div className="p-1.5 w-full inline-block align-middle">
						<div className="pb-1 grid grid-cols-1 text-center md:grid-cols-3 items-center">
							<p>Your net income</p>
							<select
								id="seletedNetIncome"
								name="selectedIncome"
								value={selectedIncome}
								onChange={handleSelectChange}
								className="block p-2 w-full md:w-[130px] text-sm bg-gray-50 rounded-lg border border-transparent focus:border-transparent h-[40px] text-blue-400 font-bold outline-0 text-center"
							>
								<option value="weekly">Weekly</option>
								<option value="fortnightly">Fortnightly</option>
								<option value="monthly">Monthly</option>
								<option value="annually">Annually</option>
							</select>
							<button className="bg-[#A0D2EB] w-[200px] md:w-[150px] xl:w-[200px] rounded-md font-medium my-6 mx-auto py-3 pt-3  text-white ease-in-out duration-500 hover:text-gray-900 text-center">
								{showNetIncome}
							</button>
						</div>
						<div className="md:overflow-hidden border rounded-lg overflow-scroll">
							<table className="min-w-full divide-y divide-gray-200 ">
								<thead className="bg-gray-50 border-b border-[#845883]">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold  text-center text-gray-500 uppercase"
										>
											Frequency
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold  text-center text-gray-500 uppercase "
										>
											Gross Income
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold  text-center text-gray-500 uppercase"
										>
											Tax
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
										>
											Net Income
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									<tr>
										<td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
											Weekly
										</td>
										<td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
											{Math.round(grossAmount.weekly)}
										</td>
										<td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
											{Math.round(taxAmount.weekly)}
										</td>
										<td className="px-6 py-4 text-sm  font-medium whitespace-nowrap text-center text-blue-400 hover:text-[#A0D2EB]">
											{Math.round(netAmount.weekly)}
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
											Fortnightly
										</td>
										<td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
											{Math.round(grossAmount.fortnightly)}
										</td>
										<td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
											{Math.round(taxAmount.fortnightly)}
										</td>
										<td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-center text-blue-400 hover:text-[#A0D2EB]">
											{Math.round(netAmount.fortnightly)}
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
											Monthly
										</td>
										<td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
											{Math.round(grossAmount.monthly)}
										</td>

										<td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
											{Math.round(taxAmount.monthly)}
										</td>
										<td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap text-blue-400 hover:text-[#A0D2EB]">
											{Math.round(netAmount.monthly)}
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
											Annually
										</td>
										<td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
											{Math.round(grossAmount.annually)}
										</td>
										<td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
											{Math.round(taxAmount.annually)}
										</td>
										<td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-center text-blue-400 hover:text-[#A0D2EB]">
											{Math.round(netAmount.annually)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tab2;
