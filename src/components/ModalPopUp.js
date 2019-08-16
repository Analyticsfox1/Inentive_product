import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ModalPopUp(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (

		<>
			<h6 className="cursor-pointer"><i onClick={handleShow} className="fas fa-eye"></i> {(props.page === 'Payout') && <span className="ml-2 checkbox"><input type="checkbox" /></span>}</h6>

			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						{(props.page === 'ActiveCase') &&
							<div className="row">
								<div className="col-md-6">
									<h6><b>State : </b> Maharashtra</h6>
									<h6><b>Location : </b> Mumbai</h6>
									<h6><b>Appliacnt Name : </b> Rohit Saxsena</h6>
									<h6><b>Application Date : </b> 01/07/2019</h6>
									<h6><b>Sales Manager : </b> Rahul Sharma</h6>
								</div>
								<div className="col-md-6">
									<h6><b>Loan Amount Applied : </b> Rs. 10,00,000</h6>
									<h6><b>Sanctioned Loan Amount : </b> Rs. 10,00,000</h6>
									<h6><b>Disbursal Date : </b> 10/07/2019</h6>
									<h6><b>Application Status : </b> Disbursed</h6>
								</div>
							</div>
						}
						{(props.page === 'Payout') &&
							<div className="row">
								<div className="col-md-6">
									<h6><b>State : </b> Maharashtra</h6>
									<h6><b>Location : </b> Mumbai</h6>
									<h6><b>Appliacnt Name : </b> Rohit Saxsena</h6>
									<h6><b>Sales Manager : </b> Rahul Sharma</h6>
									<h6><b>Status : </b> Accepted</h6>
								</div>
								<div className="col-md-6">
									<h6><b>Loan Amount Applied : </b> Rs. 12,00,000</h6>
									<h6><b>Sanctioned Loan Amount : </b> Rs. 10,00,000</h6>
									<h6><b>Net Pay Rate : </b> 0.25%</h6>
									<h6><b>Final Payout Amount : </b> Rs. 2,500</h6>
								</div>
							</div>
						}
						{(props.page === 'PaymentStatus') &&
							<div className="row">
								<div className="col-md-6">
									<h6><b>Invoice No. : </b> INV0001</h6>
									<h6><b>Invoice Amount : </b> Rs. 12,500</h6>
									<h6><b>IGST  : </b> -</h6>
									<h6><b>SGST : </b> 9%</h6>
								</div>
								<div className="col-md-6">
									<h6><b>CGST : </b> 9%</h6>
									<h6><b>Total : </b> Rs. 2,250</h6>
									<h6><b>Amount Paid After Deduction : </b> Rs. 10,250</h6>
									<h6><b>Status : </b> Paid</h6>
								</div>
							</div>
						}
					</div>
				</Modal.Body>

			</Modal>
		</>
	);
}