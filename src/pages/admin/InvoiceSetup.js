import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EntityList } from '../../constant';
import { Button } from 'react-bootstrap';


class InvoiceSetup extends Component {
	state = {
		isToggle: false,
		pan_number: '',
		pan_name: '',
		selectedGST_no: null,
		selectedEntity: null,
		trade_name: '',
		address: '',
		city: '',
		selectedState: null,
		pincode: '',
		type_of_buissness: '',
		gst_reg_date: ''
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

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	entityChange = (selectedEntity) => {
		this.setState({ selectedEntity })
	}

	handleGstDate = (date) => {
		this.setState({
			gst_reg_date: date
		});
	}

	render() {
		const { pan_number, pan_name, selectedGST_no, selectedEntity, trade_name, address, city, selectedState, pincode, type_of_buissness, gst_reg_date } = this.state;
		return (
			<div className={"d-flex dashboard-page" + (this.state.isToggle ? ' toggled' : ' ')} id="wrapper">
				<SideMenu page="admin" />
				<div id="page-content-wrapper" className="invoicePage">
					<Navbar {...this.props} handleToggle={this.handleToggle} page="admin" />
					<div className="container right__content">
						<div className="row mt-3">
							<div className="col-md-4">
								<label className="font-weight-bold">Enter PAN No </label>
								<input
									type="text"
									name="pan_number"
									className="form-control h-40"
									value={pan_number}
									onChange={this.handleChange} />
							</div>
							<div className="col-md-4">
								<label className="font-weight-bold">Enter PAN Name </label>
								<input
									type="text"
									name="pan_name"
									className="form-control h-40"
									value={pan_name}
									onChange={this.handleChange} />
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-4">
								<label className="font-weight-bold">GST No </label>
								<Select
									value={selectedGST_no}
									placeholder="GST No"
								/>
							</div>
							<div className="col-md-4">
								<label className="font-weight-bold">Type Of Entity </label>
								<Select
									value={selectedEntity}
									onChange={this.entityChange}
									options={EntityList}
									placeholder="Type of Entity"
								/>
							</div>
							<div className="col-md-4">
								<label className="font-weight-bold">Trade Name </label>
								<input
									type="text"
									name="trade_name"
									className="form-control h-40"
									value={trade_name}
									onChange={this.handleChange} />
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-12">
								<label className="font-weight-bold">Address </label>
								<input
									type="text"
									name="address"
									className="form-control h-40"
									value={address}
									onChange={this.handleChange} />
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-4">
								<label className="font-weight-bold">City </label>
								<input
									type="text"
									name="city"
									className="form-control h-40"
									value={city}
									onChange={this.handleChange} />
							</div>
							<div className="col-md-4">
								<label className="font-weight-bold">State </label>
								<Select
									value={selectedState}
									placeholder="State"
								/>
							</div>
							<div className="col-md-4">
								<label className="font-weight-bold">Pincode </label>
								<input
									type="text"
									name="pincode"
									className="form-control h-40"
									value={pincode}
									onChange={this.handleChange} />
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-4">
								<label className="font-weight-bold">Type of Business </label>
								<input
									type="text"
									name="type_of_buissness"
									className="form-control h-40"
									value={type_of_buissness}
									onChange={this.handleChange} />
							</div>
							<div className="col-md-4">
								<label className="font-weight-bold">GST Reg Date </label>
								<div className="input-group input-group-append h-40">
									<DatePicker
										selected={gst_reg_date}
										onChange={this.handleGstDate}
										dateFormat='dd/MM/yyyy'
										placeholderText="DD/MM/YYYY"
									/>
									<span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
								</div>
							</div>
						</div>
						<div className="row mt-3" style={{ float: 'right' }}>
							<div className="col-md-2">
								<Button className="px-4 py-2 generate-btn btn btn-primary">Submit </Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default InvoiceSetup