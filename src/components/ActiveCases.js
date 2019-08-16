import React, { Component } from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import ModalPopUp from './ModalPopUp';
import Select from 'react-select';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { activeCaseData, monthList, leadingList, yearList, statusList } from '../constant';

class ActiveCases extends Component {

	state = {
		isToggle: false,
		selectedMonth: monthList[0],
		selectedLeading: leadingList[0],
		selectedYear: yearList[0],
		selectedStatus: statusList[0],
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

	statusChange = (selectedStatus) => {
		this.setState({ selectedStatus });
	};


	render() {
		const { selectedMonth, selectedLeading, selectedYear, selectedStatus } = this.state;

		const columns = [{
			Header: 'State',
			accessor: 'state',
			sortable: true,
			minWidth: 140,
		}, {
			Header: 'Applicant Name',
			accessor: 'applicant_name',
			sortable: true,
			minWidth: 140,
		}, {
			Header: 'Sales Manager',
			accessor: 'sales_manager',
			sortable: true,
			minWidth: 140,
		}, {
			Header: 'Loan Amt Applied',
			accessor: 'loan_amt',
			sortable: true,
			minWidth: 140,
		}, {
			Header: 'App Status',
			accessor: 'app_status',
			sortable: true,
			minWidth: 140,
		}, {
			Header: 'Action',
			accessor: 'action',
			Cell: <ModalPopUp page="ActiveCase"/>,

		}]

		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu />
				<div id="page-content-wrapper">
					<Navbar {...this.props} handleToggle={this.handleToggle} />
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
							<div className="col-md-2">
								<Select
									value={selectedStatus}
									onChange={this.statusChange}
									options={statusList}
									placeholder="Status"
								/>
							</div>
						</div>
						<div className="mt-3">
							<ReactTable
								data={activeCaseData}
								columns={columns}
								defaultPageSize={5}
							/>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default ActiveCases