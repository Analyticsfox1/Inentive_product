import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo-blue.jpg';
import banklogo from '../assets/images/logo.png';

class SideMenu extends Component {
	render() {
		return (
			<>
				{
					this.props.page === 'admin' ?
						<div id="wrapper">
							<div className="border-right" id="sidebar-wrapper">
								<div className="sidebar-heading d-flex align-items-center text-white bg-dark-blue"><img style={{ height: '50px', width: '80px' }} src={banklogo} /></div>
								<div className="list-group list-group-flush">
									<NavLink to="/admin-dashboard" activeClassName="active" className="list-group-item list-group-item-action "><i className="fas fa-tachometer-alt fa-lg"></i>&nbsp;&nbsp;My Dashboard</NavLink>

									<span className="month-dropdown-toggle">
										<a href="#month" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle list-group-item list-group-item-action">
											<i className="far fa-calendar-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;Monthly Setup
										</a>
										<ul className="mb-0 list-unstyled" id="month">
											<li>
												<NavLink to="/month-setup" activeClassName="active" className="list-group-item list-group-item-action">
													<span className="ml-4">
														<i className="far fa-calendar-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;Month Setup
												</span>
												</NavLink>
											</li>
											<li>
												<NavLink to="/payout-setup" activeClassName="active" className="list-group-item list-group-item-action">
													<span className="ml-4">
														<i className="fas fa-hand-holding-usd fa-lg"></i>&nbsp;&nbsp;Payout Setup
												</span>
												</NavLink>
											</li>
										</ul>
									</span>

									<NavLink to="/cost-sheet" activeClassName="active" className="list-group-item list-group-item-action "><i className="fas fa-calculator fa-lg"></i>&nbsp;&nbsp;Cost Sheet Calculation</NavLink>

									<span className="vendor-dropdown-toggle">
										<a href="#vendor" data-toggle="collapse" className="dropdown-toggle list-group-item list-group-item-action "><i className="fas fa-handshake fa-lg"></i>&nbsp;&nbsp;Vendor Onboarding</a>

										<ul className="mb-0 list-unstyled" id="vendor">
											<li>
												<NavLink to="/registration" activeClassName="active" className="list-group-item list-group-item-action">
													<span className="ml-4">
														<i className="fas fa-file-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;Registration
												</span>
												</NavLink>
											</li>
											<li>
												<NavLink to="/approval" activeClassName="active" className="list-group-item list-group-item-action">
													<span className="ml-4">
														<i className="fas fa-file-signature fa-lg"></i>&nbsp;&nbsp;Approval
												</span>
												</NavLink>
											</li>
										</ul>
									</span>
									<span className="onetime-dropdown-toggle">
										<a href="#one-time" data-toggle="collapse" className="dropdown-toggle list-group-item list-group-item-action "><i className="fas fa-hand-pointer fa-lg"></i>&nbsp;&nbsp;One Time Setup</a>
										<ul className="mb-0 list-unstyled" id="one-time">
											<li>
												<NavLink to="/invoice-setup" activeClassName="active" className="list-group-item list-group-item-action">
													<span className="ml-4">
														<i className="fas fa-file-invoice fa-lg"></i>&nbsp;&nbsp;&nbsp;Invoice Setup
												</span>
												</NavLink>
											</li>
											<li>
												<NavLink to="/product-setup" activeClassName="active" className="list-group-item list-group-item-action">
													<span className="ml-4">
														<i className="fas fa-box fa-lg"></i>&nbsp;&nbsp;Product Setup
												</span>
												</NavLink>
											</li>
											<li>
												<NavLink to="/slab-setup" activeClassName="active" className="list-group-item list-group-item-action">
													<span className="ml-4">
														<i className="fas fa-truck-monster fa-lg"></i>&nbsp;&nbsp;Slab Setup
												</span>
												</NavLink>
											</li>
										</ul>

									</span>

								</div>
							</div>
						</div> :
						<div id="wrapper">
							<div className="border-right" id="sidebar-wrapper">
								<div className="sidebar-heading d-flex align-items-center text-white bg-dark-blue"><img style={{ height: '30px', width: '30px' }} src={logo} /><span className="ml-1 logo-name">BRAND</span></div>
								<div className="list-group list-group-flush">
									<NavLink to="/dashboard" activeClassName="active" className="list-group-item list-group-item-action "><i className="fas fa-tachometer-alt fa-lg"></i>&nbsp;&nbsp;My Dashboard</NavLink>
									<NavLink to="/active-cases" activeClassName="active" className="list-group-item list-group-item-action"><i className="fas fa-handshake fa-lg"></i>&nbsp;&nbsp;Active Cases</NavLink>
									<NavLink to="/payout" activeClassName="active" className="list-group-item list-group-item-action"><i className="fas fa-hand-holding-usd fa-lg"></i>&nbsp;&nbsp;Payouyt</NavLink>
									<NavLink to="/file-invoice" activeClassName="active" className="list-group-item list-group-item-action"><i className="fas fa-file-invoice fa-lg"></i>&nbsp;&nbsp;&nbsp;Invoice Generator</NavLink>
									<NavLink to="/payment-status" activeClassName="active" className="list-group-item list-group-item-action"><i className="fas fa-wallet fa-lg"></i>&nbsp;&nbsp;Payment Status</NavLink>
								</div>
							</div>
						</div>
				}
			</>
		)
	}
}

export default SideMenu	