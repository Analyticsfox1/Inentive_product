import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import Select from 'react-select';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { payoutSetupData, productList, monthList, RegionList, payoutSetupType, payoutBy } from '../../constant';
import { Button } from 'react-bootstrap';


class PayoutSetup extends Component {
	state = {
		isToggle: false,
		selectedMonth: monthList[0],
		selectedRegion: RegionList[0],
		selectedProduct: productList[0],
		selectedPayoutType: payoutSetupType[0],
		selectedPayout: payoutBy[0],
		selectedDSA: null,
		isMonth: false,
		isRegion: false,
		isDSA: false

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

	monthChange = (selectedMonth) => {
		this.setState({ selectedMonth });
	};

	regionChange = (selectedRegion) => {
		this.setState({ selectedRegion });
	};

	handleCheckChange = (event) => {
		this.setState({
			[event.target.name]: event.target.checked
		});
	}

	render() {
		const { selectedProduct, selectedPayoutType, selectedPayout, selectedMonth, selectedRegion, selectedDSA, isMonth, isRegion, isDSA } = this.state;
		const columns = [{
			Header: 'Disbursal in Cr.',
			accessor: 'disbursal',
		}, {
			Header: 'Monthly Payout (%)',
			accessor: 'monthly_payout',
			Cell: ({ original }) => {
				return (
					<div>
						<input value={original.monthly_payout} type="text" />
					</div>
				);
			},
		}]
		if ((selectedPayout.value === 'Revenue No of Cases / Month')) {
			columns.splice(1, 0, {
				Header: 'No of Files Disbursed',
				accessor: 'no_of_files',
				Cell: ({ original }) => {
					return (
						<div>
							<input value={original.no_of_files} type="text" />
						</div>
					);
				},
			});
		}

		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu page="admin" />
				<div id="page-content-wrapper" className="payoutPage">
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
						{
							selectedPayoutType.value === 'Special' &&

							<div className="mt-3 p-2 border rounded">
								<div>
									<label className="font-weight-bold fs-16"> Additional Configuration </label>
								</div>
								<div className="row d-flex justify-content-between">
									<div className="col-md-3">
										<label className="font-weight-bold">
											<input
												className="check-box"
												name="isMonth"
												type="checkbox"
												checked={isMonth}
												onChange={this.handleCheckChange}
											/> Select Month
										</label>
										<Select
											value={selectedMonth}
											onChange={this.monthChange}
											options={monthList}
											placeholder="Month"
											isDisabled={isMonth ? false : true}
										/>
									</div>
									<div className="col-md-3">
										<label className="font-weight-bold">
											<input
												className="check-box"
												name="isRegion"
												type="checkbox"
												checked={isRegion}
												onChange={this.handleCheckChange}
											/>  Select Region </label>
										<Select
											value={selectedRegion}
											onChange={this.regionChange}
											options={RegionList}
											placeholder="Region"
											isDisabled={isRegion ? false : true}
										/>
									</div>
									<div className="col-md-3">
										<label className="font-weight-bold">
											<input
												className="check-box"
												name="isDSA"
												type="checkbox"
												checked={isDSA}
												onChange={this.handleCheckChange}
											/>  DSA Name </label>
										<Select
											value={selectedDSA}
											onChange={this.dsaChange}
											placeholder="Select DSA"
											isDisabled={isDSA ? false : true}
										/>
									</div>
								</div>
							</div>
						}
						<div className="mt-5 col-md-6 mr-auto ml-auto">
							<ReactTable
								data={payoutSetupData}
								columns={columns}
								defaultPageSize={3}
								showPagination={false}
								sortable={false}
							/>
							<div className="mt-4 text-right">
								<Button className="px-4 py-2 generate-btn ml-auto">Update </Button>
							</div>
						</div>


					</div>
				</div>
			</div>
		)
	}
}

export default PayoutSetup