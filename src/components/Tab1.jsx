import React, {useState, useEffect} from 'react';

const Tab1 = ({
	openTab2,
	setTaxAmount,
	setNetAmount,
	setGrossAmount,
	dataHolder,
	setDataHolder,
}) => {
	const [formData, setFormData] = useState({
		amount: '',
		period: 'weekly',
		income: '',
	});
	const handeChange = (event) => {
		const {name, value, type, checked} = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === 'checkbox' ? checked : value,
			};
		});
	};

	useEffect(() => {
		const calculate = (amount, period, income) => {
			switch (income) {
				case 'gross':
					if (period === 'weekly') {
						setGrossAmount({
							weekly: amount,
							fortnightly: amount * 2,
							monthly: amount * 4,
							annually: amount * 48,
						});
						setNetAmount({
							weekly: amount / 1.2,
							fortnightly: (amount * 2) / 1.2,
							monthly: (amount * 4) / 1.2,
							annually: (amount * 48) / 1.2,
						});
						setTaxAmount({
							weekly: (amount * 16.6667) / 100,
							fortnightly: (amount * 2 * 16.6667) / 100,
							monthly: (amount * 4 * 16.6667) / 100,
							annually: (amount * 48 * 16.6667) / 100,
						});
					} else if (period === 'fortnightly') {
						setGrossAmount({
							weekly: amount / 2,
							fortnightly: amount,
							monthly: amount * 2,
							annually: amount * 24,
						});
						setNetAmount({
							weekly: amount / 2 / 1.2,
							fortnightly: amount / 1.2,
							monthly: (amount * 2) / 1.2,
							annually: (amount * 24) / 1.2,
						});
						setTaxAmount({
							weekly: ((amount / 2) * 16.6667) / 100,
							fortnightly: (amount * 16.6667) / 100,
							monthly: (amount * 2 * 16.6667) / 100,
							annually: (amount * 24 * 16.6667) / 100,
						});
					} else if (period === 'monthly') {
						setGrossAmount({
							weekly: amount / 4,
							fortnightly: amount / 2,
							monthly: amount,
							annually: amount * 12,
						});
						setNetAmount({
							weekly: amount / 4 / 1.2,
							fortnightly: amount / 2 / 1.2,
							monthly: amount / 1.2,
							annually: (amount * 12) / 1.2,
						});
						setTaxAmount({
							weekly: ((amount / 4) * 16.6667) / 100,
							fortnightly: ((amount / 2) * 16.6667) / 100,
							monthly: (amount * 16.6667) / 100,
							annually: (amount * 12 * 16.6667) / 100,
						});
					} else if (period === 'annually') {
						setGrossAmount({
							weekly: amount / 48,
							fortnightly: amount / 24,
							monthly: amount / 12,
							annually: amount,
						});
						setNetAmount({
							weekly: amount / 48 / 1.2,
							fortnightly: amount / 24 / 1.2,
							monthly: amount / 12 / 1.2,
							annually: amount / 1.2,
						});
						setTaxAmount({
							weekly: ((amount / 48) * 16.6667) / 100,
							fortnightly: ((amount / 24) * 16.6667) / 100,
							monthly: ((amount / 12) * 16.6667) / 100,
							annually: (amount * 16.6667) / 100,
						});
					}
					break;
				case 'net':
					if (period === 'weekly') {
						setNetAmount({
							weekly: amount,
							fortnightly: amount * 2,
							monthly: amount * 4,
							annually: amount * 48,
						});
						setGrossAmount({
							weekly: amount * 1.2,
							fortnightly: amount * 2 * 1.2,
							monthly: amount * 4 * 1.2,
							annually: amount * 48 * 1.2,
						});
						setTaxAmount({
							weekly: (amount * 20) / 100,
							fortnightly: (amount * 2 * 20) / 100,
							monthly: (amount * 4 * 20) / 100,
							annually: (amount * 48 * 20) / 100,
						});
					} else if (period === 'fortnightly') {
						setNetAmount({
							weekly: amount / 2,
							fortnightly: amount,
							monthly: amount * 2,
							annually: amount * 24,
						});
						setGrossAmount({
							weekly: (amount / 2) * 1.2,
							fortnightly: amount * 1.2,
							monthly: amount * 2 * 1.2,
							annually: amount * 24 * 1.2,
						});
						setTaxAmount({
							weekly: ((amount / 2) * 20) / 100,
							fortnightly: (amount * 20) / 100,
							monthly: (amount * 2 * 20) / 100,
							annually: (amount * 24 * 20) / 100,
						});
					} else if (period === 'monthly') {
						setNetAmount({
							weekly: amount / 4,
							fortnightly: amount / 2,
							monthly: amount,
							annually: amount * 12,
						});
						setGrossAmount({
							weekly: (amount / 4) * 1.2,
							fortnightly: (amount / 2) * 1.2,
							monthly: amount * 1.2,
							annually: amount * 12 * 1.2,
						});
						setTaxAmount({
							weekly: ((amount / 4) * 20) / 100,
							fortnightly: ((amount / 2) * 20) / 100,
							monthly: (amount * 20) / 100,
							annually: (amount * 12 * 20) / 100,
						});
					} else if (period === 'annually') {
						setNetAmount({
							weekly: amount / 48,
							fortnightly: amount / 24,
							monthly: amount / 12,
							annually: amount,
						});
						setGrossAmount({
							weekly: (amount / 48) * 1.2,
							fortnightly: (amount / 24) * 1.2,
							monthly: (amount / 12) * 1.2,
							annually: amount * 1.2,
						});
						setTaxAmount({
							weekly: ((amount / 48) * 20) / 100,
							fortnightly: ((amount / 24) * 20) / 100,
							monthly: ((amount / 12) * 20) / 100,
							annually: (amount * 20) / 100,
						});
					}
					break;
				default:
					return null;
			}
		};
		calculate(parseInt(formData.amount), formData.period, formData.income);
	}, [formData]);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('formData', formData);
		setDataHolder({
			amount: formData.amount,
			period: formData.period,
			income: formData.income,
		});
		openTab2();
	};
	if (formData.amount === '' && formData.income === '') {
		formData.amount = dataHolder.amount;
		formData.income = dataHolder.income;
		formData.period = dataHolder.period;
	}
	return (
		<div className="firstTab" id="link1">
			<form onSubmit={handleSubmit}>
				<h2 className="pb-1 font-bold">What is your total income?</h2>
				<input
					type="number"
					name="amount"
					id="amount"
					value={formData.amount}
					onChange={handeChange}
					className="bg-gray-50 border border-[#845883] text-gray-900 text-sm rounded-lg  focus:border-[#845883] block w-full p-2.5"
					placeholder="$ a. g. 12,000"
					required
				/>
				<h2 className="pt-5 pb-1 font-bold">Choose period</h2>
				<select
					id="period"
					name="period"
					value={formData.period}
					onChange={handeChange}
					className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#845883] focus:border-[#845883] "
				>
					<option value="weekly">Weekly</option>
					<option value="fortnightly">Fortnightly</option>
					<option value="monthly">Monthly</option>
					<option value="annually">Annually</option>
				</select>
				<div id="forma" className="grid grid-cols-1 md:grid-cols-2">
					<h2 className="text-xl mb-6 xl:text-xl mt-5 font-bold ml-4 sm:text-xl text-center">
						Choose type of income
					</h2>
					<div className="radioHolder">
						<fieldset>
							<input
								type="radio"
								id="gross"
								name="income"
								value="gross"
								checked={formData.income === 'gross'}
								onChange={handeChange}
							/>
							<label htmlFor="gross">
								<span></span>Gross
							</label>
							<input
								type="radio"
								id="net"
								name="income"
								value="net"
								checked={formData.income === 'net'}
								onChange={handeChange}
							/>
							<label htmlFor="net">
								<span></span>Net
							</label>
							<div
								className={
									'worm ' +
									(formData.income === 'gross' || formData.income === 'net'
										? 'visible'
										: 'invisible')
								}
							>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
								<div className="worm__segment"></div>
							</div>
						</fieldset>
					</div>
				</div>
				{/* calculate */}
				<div className="w-full flex">
					<button
						id="calculate"
						onSubmit={handleSubmit}
						className="bg-[#845883] w-[400px] rounded-md font-medium my-6 mx-auto py-3 pt-3 mt-24 text-white hover:bg-[#A0D2EB] ease-in-out duration-500 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
						disabled={formData.amount === '' || formData.income === ''}
					>
						Calculate
					</button>
				</div>
			</form>
		</div>
	);
};

export default Tab1;
