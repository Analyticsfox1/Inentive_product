import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import ModalPopUp from '../../components/ModalPopUp';
import Select from 'react-select';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { paymentStatusData, monthList, yearList } from '../../constant';

class PaymentStatus extends Component {
	state = {
		isToggle: false,
		selectedMonth: monthList[0],
		selectedYear: yearList[0],
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

	yearChange = (selectedYear) => {
		this.setState({ selectedYear });
	};

	render() {
		const { selectedMonth, selectedYear } = this.state;

		const columns = [{
			Header: 'Invoice No.',
			accessor: 'invoice_no',
			sortable: true,
			minWidth: 100,
		}, {
			Header: 'Invoice Amount',
			accessor: 'invoice_amt',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'Amt Paid After Deduction',
			accessor: 'amt_paid',
			sortable: true,
			minWidth: 160,
		}, {
			Header: 'Product Type',
			accessor: 'product_type',
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
			Cell: <ModalPopUp page="PaymentStatus" />,
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
								data={paymentStatusData}
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

export default PaymentStatus