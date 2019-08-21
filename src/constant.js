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

export const monthSetupData = [
	{
		startDate: 'May 15, 2019',
		endDate: 'June 15, 2019',
		month: 'May'
	}, {
		startDate: 'June 16, 2019',
		endDate: 'July 10, 2019',
		month: 'June'
	},
];

export const payoutSetupData = [
	{
		disbursal: '0.1 - 0.50',
		no_of_files: '1',
		monthly_payout: '0.25'
	}, {
		disbursal: '0.51 - 1',
		no_of_files: '3',
		monthly_payout: '0.35'
	}, {
		disbursal: '> 1',
		no_of_files: '4',
		monthly_payout: '0.45'
	},
];

export const approvalData = [
	{
		name: 'Rohit Saxsena',
		type_of_entity: 'Pvt Ltd',
		state: 'Maharashtra',
		region: 'South',
		status: 'In active'
	},
	{
		name: 'Akshay Giri',
		type_of_entity: 'Pvt Ltd',
		state: 'Maharashtra',
		region: 'South',
		status: 'Approved'
	},
	{
		name: 'Mohit Nukala',
		type_of_entity: 'Pvt Ltd',
		state: 'Maharashtra',
		region: 'South',
		status: 'Approved'
	},
	{
		name: 'Kirtikumar Jain',
		type_of_entity: 'Pvt Ltd',
		state: 'Maharashtra',
		region: 'South',
		status: 'Rejected'
	},
	{
		name: 'Gaurav Katte',
		type_of_entity: 'Pvt Ltd',
		state: 'Maharashtra',
		region: 'South',
		status: 'On Hold'
	},
];

export const productSetupData = [
	{
		product_name: 'SBL',
		description: 'Small Business Loan',
		status: 'Active'
	}, {
		product_name: 'BL',
		description: 'Business Loan',
		status: 'Inactive'
	}, {
		product_name: 'PF',
		description: 'Patient Finance',
		status: 'Active'
	},
];

export const slabSetupData = [
	{
		name: '0 - 0.5',
		lower_limit: '0',
		upper_limit: '50,00,000'
	}, {
		name: '0.5 - 1',
		lower_limit: '50,00,000',
		upper_limit: '1,00,00,000'
	}, {
		name: '< 1',
		lower_limit: '1,00,00,000',
		upper_limit: '-'
	},
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

export const productList = [
	{ value: 'SBL', label: 'SBL' },
	{ value: 'BL', label: 'BL' },
	{ value: 'ML', label: 'ML' },
	{ value: 'RL', label: 'RL' },
];

export const payoutSetupType = [
	{ value: 'Master', label: 'Master' },
	{ value: 'Special', label: 'Special' },
];

export const payoutBy = [
	{ value: 'Revenue / Month', label: 'Revenue / Month' },
	{ value: 'Revenue / Year', label: 'Revenue / Year' },
	{ value: 'Revenue No of Cases / Month', label: 'Revenue No of Cases / Month' },
];

export const EntityList = [
	{ value: 'Pvt Ltd', label: 'Pvt Ltd' },
];

export const RegionList = [
	{ value: 'South', label: 'South' },
	{ value: 'North', label: 'North' },
	{ value: 'West', label: 'West' },
	{ value: 'East', label: 'East' },
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
	{ value: 'Active', label: 'Active' },
	{ value: 'Approved', label: 'Approved' },
	{ value: 'Rejected', label: 'Rejected' },
]
