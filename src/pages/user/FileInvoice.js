import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import Select from 'react-select';
import { monthList, productList, yearList } from '../../constant';

class FileInvoice extends Component {
	state = {
		isToggle: false,
		selectedMonth: monthList[0],
		selectedProduct: productList[0],
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

	productChange = (selectedProduct) => {
		this.setState({ selectedProduct });
	};

	yearChange = (selectedYear) => {
		this.setState({ selectedYear });
	};

	render() {
		const { selectedMonth, selectedProduct, selectedYear } = this.state;
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu />
				<div id="page-content-wrapper" className="pl-0">
					<Navbar {...this.props} handleToggle={this.handleToggle} />
					<div className="container">
						<div className="row mt-3">
							<div className="col-md-2">
								<Select
									value={selectedProduct}
									onChange={this.productChange}
									options={productList}
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
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FileInvoice