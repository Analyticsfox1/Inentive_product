import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import { Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { productSetupData } from '../../constant';

class ProductSetup extends Component {
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
		const columns = [{
			Header: 'Product Name',
			accessor: 'product_name',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'Description',
			accessor: 'description',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'Status',
			accessor: 'status',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'Action',
			accessor: 'action',
			Cell: <div><i className="fas fa-edit"></i>&nbsp;&nbsp;<i className="fas fa-trash"></i></div>,
		}]
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu page="admin" />
				<div id="page-content-wrapper">
					<Navbar {...this.props} handleToggle={this.handleToggle} page="admin" />
					<div className="container right__content">
						<div className="row mt-3">
							<div className="col-md-12">
								<Button className="px-4 py-2 generate-btn btn btn-primary">Create </Button>
							</div>
						</div>
						<div className="mt-4">
							<ReactTable
								data={productSetupData}
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

export default ProductSetup