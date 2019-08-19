import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import Select from 'react-select';
import { monthList } from '../../constant';
import graph1 from '../../assets/images/graph-1.jpg';
import graph2 from '../../assets/images/graph-2.jpg';

class Dashboard extends Component {

	state = {
		isToggle: false,
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

	monthChange = (selectedMonth) => {
		this.setState({ selectedMonth });
	};

	render() {
		const { selectedMonth } = this.state;
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu page="admin" />
				<div id="page-content-wrapper">
					<Navbar {...this.props} handleToggle={this.handleToggle} page="admin" />
					<div className="container m-0">
						<div className="row mt-3">
							<div className="col-md-4">
								<div className="row ">
									<div className="col-md-5">
										<Select
											name="selectedMonth"
											value={selectedMonth}
											onChange={this.monthChange}
											options={monthList}
											placeholder="Month"
										/>
									</div>
								</div>
								<div className="row mt-5">
									<div className="col-md-12">
										<div className="card bg-white">
											<div className="card-header fs-21 text-center text-underline">Total DSA's</div>
											<div className="card-body p-3">
												<div className="d-flex justify-content-center  align-content-center">
													<p className="text-center w3-xlarge text-danger">120</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-8">
								<div className="card bg-white">
									<div className="card-header w3-medium text-center">Cases Disbursed for Month</div>
									<div className="card-body p-3">
										<div className="d-flex justify-content-center  align-content-center">
											<p className="text-center w3-xlarge text-danger">
												<img src={graph1} />
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-6">
								<div className="card bg-white">
									<div className="card-header w3-medium text-center">Top Performing DSA’s of Month</div>
									<div className="card-body p-3">
										<div className="d-flex justify-content-center  align-content-center">
											<p className="text-center w3-xlarge text-danger"><img src={graph2} /></p>
										</div>
									</div>
									<div className="card-footer light-bg p-2 text-center">
										<p style={{ fontSize: '18px' }}>$ 5,00,00,000</p>
									</div>
								</div>
							</div>

							<div className="col-md-6">
								<div className="card bg-white">
									<div className="card-header w3-medium text-center">Total Payout by State</div>
									<div className="card-body p-3">
										<div className="d-flex justify-content-center  align-content-center">
											<p className="text-center w3-xlarge text-danger"><img src={graph2} /></p>
										</div>
									</div>
									<div className="card-footer light-bg p-2 text-center">
										<p style={{ fontSize: '18px' }}>$ 20,00,000</p>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-4 mx-auto d-flex justify-content-center">
							<div className="col-md-4">
								<div className="card bg-white">
									<div className="card-header w3-medium text-center">Top Performing DSA’s of Month</div>
									<div className="card-body p-3">
										<div className="d-flex justify-content-center align-content-center flex-column">
											<div class="DSA-text-main"><p class="item-info"> DSA 1</p></div>
											<div class="DSA-text-main"><p class="item-info"> DSA 2</p></div>
											<div class="DSA-text-main"><p class="item-info"> DSA 3</p></div>
											<div class="DSA-text-main"><p class="item-info"> DSA 4</p></div>
											<div class="DSA-text-main"><p class="item-info"> DSA 5</p></div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="card bg-white">
									<div className="card-header w3-medium text-center">Worst Performing DSA’s of Month</div>
									<div className="card-body p-3">
										<div className="d-flex justify-content-center align-content-center flex-column">
											<div class="DSA-text-main"><p class="item-info"> DSA 46</p></div>
											<div class="DSA-text-main"><p class="item-info"> DSA 47</p></div>
											<div class="DSA-text-main"><p class="item-info"> DSA 48</p></div>
											<div class="DSA-text-main"><p class="item-info"> DSA 49</p></div>
											<div class="DSA-text-main"><p class="item-info"> DSA 50</p></div>
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