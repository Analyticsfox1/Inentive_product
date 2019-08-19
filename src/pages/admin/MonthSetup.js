import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MonthSetup extends Component {


	state = {
		isToggle: false,
		startDate: '',
		endDate: ''
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

	handleStartDate = (date) => {
		this.setState({
			startDate: date
		});
	}

	handleEndDate = (date) => {
		this.setState({
			endDate: date
		});
	}

	render() {
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu page="admin" />
				<div id="page-content-wrapper">
					<Navbar {...this.props} handleToggle={this.handleToggle} page="admin" />
					<div className="container m-0">
						<div className="row mt-3">
							<div className="col-md-3">
								<strong>Select Start Date</strong>
								<div>
									<DatePicker
										selected={this.state.startDate}
										onChange={this.handleStartDate}
										dateFormat='dd/MM/yyyy'
										placeholderText="dd/mm/yyyy"
									/>
								</div>
							</div>
							<div className="col-md-3">
								<strong>Select End Date</strong>
								<div>
									<DatePicker
										selected={this.state.endDate}
										onChange={this.handleEndDate}
										dateFormat='dd/MM/yyyy'
										placeholderText="dd/mm/yyyy"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default MonthSetup