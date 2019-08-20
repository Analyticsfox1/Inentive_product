import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import Select from 'react-select';
import { productList, payoutSetupType, payoutBy } from '../../constant';

class PayoutSetup extends Component {
	state = {
		isToggle: false,
		selectedProduct: productList[0],
		selectedPayoutType: payoutSetupType[0],
		selectedPayout: payoutBy[0]
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

	productChange = (selectedProduct) => {
		this.setState({ selectedProduct });
	};

	payoutSetupChange = (selectedPayoutType) => {
		this.setState({ selectedPayoutType });
	};

	payoutChange = (selectedPayout) => {
		this.setState({ selectedPayout });
	};

	render() {
		const { selectedProduct, selectedPayoutType, selectedPayout } = this.state;
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu page="admin" />
				<div id="page-content-wrapper">
					<Navbar {...this.props} handleToggle={this.handleToggle} page="admin" />
					<div className="container right__content">
						<div className="row mt-3 d-flex justify-content-between">
							<div className="col-md-3">
								<label className="font-weight-bold">Payout Setup Type</label>
								<Select
									value={selectedPayoutType}
									onChange={this.payoutSetupChange}
									options={payoutSetupType}
									placeholder="Type"
								/>
							</div>
							<div className="col-md-3">
								<label className="font-weight-bold">Payout By</label>
								<Select
									value={selectedPayout}
									onChange={this.payoutChange}
									options={payoutBy}
									placeholder="Payout By"
								/>
							</div>
							<div className="col-md-3">
								<label className="font-weight-bold">Product</label>
								<Select
									value={selectedProduct}
									onChange={this.productChange}
									options={productList}
									placeholder="Product"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PayoutSetup