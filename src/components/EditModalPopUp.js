import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { monthList } from '../constant';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditModalPopUp(props) {
	const [show, setShow] = useState(false);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [selectedMonth, setMonth] = useState(monthList[0]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleStartDate = (date) => setStartDate(date);
	const handleEndDate = (date) => setEndDate(date);
	const monthChange = (selectedMonth) => setMonth(selectedMonth);

	return (

		<>
			<h6 className="cursor-pointer"><i onClick={handleShow} className="fas fa-edit"></i>&nbsp;&nbsp;<i className="fas fa-trash"></i> </h6>

			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Update</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container">
						<div className="row mt-3 d-flex justify-content-between align-items-end">
							<div className="col-md-4">
								<strong>Select Start Date</strong>
								<div className="input-group input-group-append">
									<DatePicker
										selected={startDate}
										onChange={handleStartDate}
										dateFormat='dd/MM/yyyy'
										placeholderText="DD/MM/YYYY"
									/>
									<span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
								</div>
							</div>
							<div className="col-md-4">
								<strong>Select End Date</strong>
								<div className="input-group input-group-append">
									<DatePicker
										selected={endDate}
										onChange={handleEndDate}
										dateFormat='dd/MM/yyyy'
										placeholderText="DD/MM/YYYY"
									/>
									<span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
								</div>
							</div>
							<div className="col-md-4">
								<strong>Select Month</strong>
								<Select
									name="selectedMonth"
									value={selectedMonth}
									onChange={monthChange}
									options={monthList}
									placeholder="Month"
								/>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer className="footer-bg">
					<Button className="generate-btn">Submit</Button>
				</Modal.Footer>

			</Modal>
		</>
	);
}