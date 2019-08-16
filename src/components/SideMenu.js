import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo-blue.jpg'

class SideMenu extends Component {
	render() {
		return (
			<div id="wrapper">
				<div className="border-right" id="sidebar-wrapper">
					<div className="sidebar-heading d-flex align-items-center text-white bg-dark-blue"><img style={{height:'30px', width:'30px'}} src={logo} /><span className="ml-1 logo-name">BRAND</span></div>
					<div className="list-group list-group-flush">
						<NavLink to="/dashboard" activeClassName="active" className="list-group-item list-group-item-action "><i className="fas fa-tachometer-alt fa-lg"></i>&nbsp;&nbsp;My Dashboard</NavLink>
						<NavLink to="/active-cases" activeClassName="active" className="list-group-item list-group-item-action"><i className="fas fa-handshake fa-lg"></i>&nbsp;&nbsp;Active Cases</NavLink>
						<NavLink to="/payout" activeClassName="active" className="list-group-item list-group-item-action"><i className="fas fa-hand-holding-usd fa-lg"></i>&nbsp;&nbsp;Payouyt</NavLink>
						<NavLink to="/file-invoice" activeClassName="active" className="list-group-item list-group-item-action"><i className="fas fa-file-invoice fa-lg"></i>&nbsp;&nbsp;&nbsp;Invoice Generator</NavLink>
						<NavLink to="/payment-status" activeClassName="active" className="list-group-item list-group-item-action"><i className="fas fa-wallet fa-lg"></i>&nbsp;&nbsp;Payment Status</NavLink>
					</div>
				</div>
			</div>
		)
	}
}

export default SideMenu	