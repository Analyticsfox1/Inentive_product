import React, { Component } from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import RejectPopUp from './RejectPopUp';
import ModalPopUp from './ModalPopUp';
import Select from 'react-select';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { payoutData, monthList, leadingList, yearList } from '../constant';
import { Button } from 'react-bootstrap';

class Payout extends Component {

	state = {
		isToggle: false,
		selectedMonth: monthList[0],
		selectedLeading: leadingList[0],
		selectedYear: yearList[0],
		invoice_no: '',
		isReject: false
	}

	handleToggle = () => {
		if (this.state.isToggle) {
			this.setState({
				isToggle: false,
			})
		}
		else {
			this.setState({
				isToggle: true,
			})
		}
	}

	monthChange = (selectedMonth) => {
		this.setState({ selectedMonth });
	};

	leadingChange = (selectedLeading) => {
		this.setState({ selectedLeading });
	};

	yearChange = (selectedYear) => {
		this.setState({ selectedYear });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	};

	onRejectClick = () => {
		this.setState({
			isReject: true,
		})
	}

	render() {
		const { selectedMonth, selectedLeading, selectedYear, invoice_no, isReject } = this.state;

		const columns = [{
			Header: 'State',
			accessor: 'state',
			sortable: true,
			minWidth: 110,
		}, {
			Header: 'Applicant Name',
			accessor: 'applicant_name',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'Sanctioned Loan Amt',
			accessor: 'sanctioned_loan_amt',
			sortable: true,
			minWidth: 150,
		}, {
			Header: 'Net Pay Rate',
			accessor: 'net_pay_rate',
			sortable: true,
			minWidth: 100,
		}, {
			Header: 'Final Payout Amt',
			accessor: 'final_payout_amt',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'Status',
			accessor: 'status',
			sortable: true,
			minWidth: 100,
		}, {
			Header: 'Action',
			accessor: 'action',
			Cell: <ModalPopUp page="Payout" />,
		}]
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu />
				<div id="page-content-wrapper">
					<Navbar {...this.props} handleToggle={this.handleToggle} />
					{isReject && <RejectPopUp />}
					<div className="container">
						<div className="row mt-3">
							<div className="col-md-2">
								<Select
									value={selectedLeading}
									onChange={this.leadingChange}
									options={leadingList}
									placeholder="Leading"
								/>
							</div>
							<div className="col-md-2">
								<Select
									value={selectedYear}
									onChange={this.yearChange}
									options={yearList}
									placeholder="Year"
								/>
							</div>
							<div className="col-md-2">
								<Select
									value={selectedMonth}
									onChange={this.monthChange}
									options={monthList}
									placeholder="Month"
								/>
							</div>
						</div>
						<div className="mt-3">
							<ReactTable
								data={payoutData}
								columns={columns}
								defaultPageSize={5}
							/>
						</div>
						<div className="input-group mt-5 d-flex align-items-center">
							<label className="invoice-lable">Invoice No : </label>
							<div className="col-md-2">
								<input
									type="text"
									name="invoice_no"
									value={invoice_no}
									className="form-control"
									onChange={this.handleChange} />
							</div>
							<div>
								<Button className="ml-1 generate-btn mr-3">Generate </Button>
							</div>
							<div style={{ marginLeft: '44%' }}>
								<Button className="btn-success mr-3">Accepted </Button>
								<RejectPopUp />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Payout