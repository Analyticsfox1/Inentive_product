import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import Select from 'react-select';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { approvalData, EntityList, statusList, RegionList } from '../../constant';

class Approval extends Component {
	state = {
		isToggle: false,
		pan_number: '',
		selectedEntity: EntityList[0],
		selectedRegion: RegionList[0],
		selectedStatus: statusList[0],
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

	entityChange = (selectedEntity) => {
		this.setState({ selectedEntity })
	}

	regionChange = (selectedRegion) => {
		this.setState({ selectedRegion })
	}

	statusChange = (selectedStatus) => {
		this.setState({ selectedStatus })
	}

	handleChange = (event) => {
		this.setState({ pan_number: event.target.value });
	}

	render() {
		const { selectedEntity, selectedStatus, selectedRegion, pan_number } = this.state;

		const columns = [{
			Header: 'Name',
			accessor: 'name',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'Type of Entity',
			accessor: 'type_of_entity',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'State',
			accessor: 'state',
			sortable: true,
			minWidth: 120,
		}, {
			Header: 'Region',
			accessor: 'region',
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
							<div className="col-md-3">
								<Select
									value={selectedEntity}
									onChange={this.entityChange}
									options={EntityList}
									placeholder="Type of Entity"
								/>
							</div>
							<div className="col-md-3">
								<input type="text" className="form-control h-40" placeholder="PAN Number" value={pan_number} onChange={this.handleChange} />
							</div>
							<div className="col-md-3">
								<Select
									value={selectedStatus}
									onChange={this.statusChange}
									options={statusList}
									placeholder="Status"
								/>
							</div>
							<div className="col-md-3">
								<Select
									value={selectedRegion}
									onChange={this.regionChange}
									options={RegionList}
									placeholder="Region"
								/>
							</div>
						</div>
						<div className="mt-4">
							<ReactTable
								data={approvalData}
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

export default Approval