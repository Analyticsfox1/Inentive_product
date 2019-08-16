export const activeCaseData = [
	{
		state: 'Maharashtra',
		applicant_name: 'Rohit Saxsena',
		sales_manager: 'Rahul Sharma',
		loan_amt: '10,00,000',
		app_status: 'Disbursed'
	},
	{
		state: 'Maharashtra',
		applicant_name: 'Akshay Giri',
		sales_manager: 'Ajay Patel',
		loan_amt: '20,00,000',
		app_status: 'Disbursed'
	},
	{
		state: 'Gujarat',
		applicant_name: 'Adam Walter',
		sales_manager: 'Rahul Sharma',
		loan_amt: '30,00,000',
		app_status: 'Sanctioned'
	},
];

export const payoutData = [
	{
		state: 'Maharashtra',
		applicant_name: 'Rohit Saxsena',
		sanctioned_loan_amt: '10,00,000',
		net_pay_rate: '0.25%',
		final_payout_amt: '2,500',
		status: 'Accepted'
	},
	{
		state: 'Maharashtra',
		applicant_name: 'Adam Walter',
		sanctioned_loan_amt: '10,00,000',
		net_pay_rate: '0.25%',
		final_payout_amt: '2,500',
		status: 'Accepted'
	},
	{
		state: 'Maharashtra',
		applicant_name: 'Akshay Giri',
		sanctioned_loan_amt: '10,00,000',
		net_pay_rate: '0.25%',
		final_payout_amt: '2,500',
		status: 'Accepted'
	},
	{
		state: 'Maharashtra',
		applicant_name: 'Mohan Nukala',
		sanctioned_loan_amt: '20,00,000',
		net_pay_rate: '0.25%',
		final_payout_amt: '5,000',
		status: 'Accepted'
	},
	{
		state: 'Maharashtra',
		applicant_name: 'Gaurav Katte',
		sanctioned_loan_amt: '10,00,000',
		net_pay_rate: '0.35%',
		final_payout_amt: '3,500',
		status: 'Rejected'
	},
];

export const paymentStatusData = [
	{
		invoice_no: 'INV0001',
		invoice_amt: '12,500',
		amt_paid: '10,250',
		product_type: 'SBL',
		status: 'paid'
	}
];

export const monthList = [
	{ value: 'January', label: 'January' },
	{ value: 'February', label: 'February' },
	{ value: 'March', label: 'March' },
	{ value: 'April', label: 'April' },
	{ value: 'May', label: 'May' },
	{ value: 'June', label: 'June' },
	{ value: 'July', label: 'July' },
	{ value: 'August', label: 'August' },
	{ value: 'September', label: 'September' },
	{ value: 'October', label: 'October' },
	{ value: 'November', label: 'November' },
	{ value: 'December', label: 'December' },
];

export const quaterList = [
	{ value: 'Quater1', label: 'Quater1' },
	{ value: 'Quater2', label: 'Quater2' },
	{ value: 'Quater3', label: 'Quater3' },
	{ value: 'Quater4', label: 'Quater4' },
];

export const leadingList = [
	{ value: 'SBL', label: 'SBL' },
	{ value: 'BL', label: 'BL' },
	{ value: 'ML', label: 'ML' },
	{ value: 'RL', label: 'RL' },
];

export const yearList = [
	{ value: '2019', label: '2019' },
	{ value: '2018', label: '2018' },
	{ value: '2017', label: '2017' },
	{ value: '2016', label: '2016' },
	{ value: '2015', label: '2015' },
]

export const statusList = [
	{ value: 'All', label: 'All' },
	{ value: 'Disbursed', label: 'Disbursed' },
	{ value: 'Sanctioned', label: 'Sanctioned' },
]
