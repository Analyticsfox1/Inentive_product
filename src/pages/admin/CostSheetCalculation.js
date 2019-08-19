import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';

class CostSheetCalculation extends Component {
	state = {
		isToggle: false,
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

	render() {
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu page="admin" />
				<div id="page-content-wrapper">
					<Navbar {...this.props} handleToggle={this.handleToggle} page="admin" />
					<div className="container m-0">
						<div className="row mt-3">
							<div className="col-md-12">
								<p className="w3-height p-3"><strong> Cost Sheet Calculation </strong></p>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default CostSheetCalculation