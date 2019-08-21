import React, { Component } from 'react'
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import Select from 'react-select';
import { monthList, quaterList } from '../../constant';

class Dashboard extends Component {

	state = {
		isToggle: false,
		selectedQuater: quaterList[0],
		selectedMonth: monthList[0]
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

	quaterChange = (selectedQuater) => {
		this.setState({ selectedQuater });
	};

	monthChange = (selectedMonth) => {
		this.setState({ selectedMonth });
	};

	render() {
		const { selectedQuater, selectedMonth } = this.state;
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu />
				<div id="page-content-wrapper" className="pl-0">
					<Navbar {...this.props} handleToggle={this.handleToggle} />
					<div className="container">
						<div className="row mt-3">
							<div className="col-md-2">
								<Select
									name="selectedMonth"
									value={selectedMonth}
									onChange={this.monthChange}
									options={monthList}
									placeholder="Month"
								/>
							</div>
							<div className="col-md-2">
								<Select
									name="selectedQuater"
									value={selectedQuater}
									onChange={this.quaterChange}
									options={quaterList}
									placeholder="Quater"
								/>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-sm-6">
								<div className="card bg-white">
									<div className="card-header text-center text-underline">Disbursed</div>
									<div className="card-body pb-0">
										<div className="d-flex justify-content-between  align-content-center">
											<p className="text-center">Total sales <br />
												<span>20,00,000</span>
											</p>
											<p className="text-center"> No. of Cases  <br />
												<span>4</span>
											</p>
										</div>
										<div className="d-flex justify-content-center mt-3  align-content-center">
											<p className="text-center">Commision Payble<br />
												<span>xxxxxx</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="card bg-white">
									<div className="card-header text-center text-underline ">In Progress</div>
									<div className="card-body pb-0">
										<div className="d-flex justify-content-between  align-content-center">
											<p className="text-center">Totla sales <br />
												<span>10,00,000</span>
											</p>
											<p className="text-center"> No. of Case  <br />
												<span>1</span>
											</p>
										</div>
										<div className="d-flex justify-content-center mt-3  align-content-center">
											<p className="text-center">Commision Due<br />
												<span>xxxxxx</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-sm-6 offset-md-3">
								<div className="card bg-white">
									<div className="card-header text-center text-underline">Payout Slabs</div>
									<div className="card-body pb-0">
										<div className="d-flex justify-content-center  align-content-center">
											<img className="text-center" style={{ height: '200px', width: '350px' }} src="https://www.iciciprulife.com/content/icici-prudential-life-insurance/ulip-plans/icicipru-lifetime-classic/_jcr_content/contentpar/container_fullwidth/container-fullwidth-parsys/gridsystem_424694496/column-2/image.img.jpg/1495535401737.jpg" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Dashboard