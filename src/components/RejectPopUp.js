import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

export default function RejectPopUp(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (

		<>
			<Button onClick={handleShow} className="btn-danger">Rejected </Button>

			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Rejection Remark</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<h5 style={{ fontSize: '17px' }}>Remark : </h5>
						<InputGroup>
							
							<FormControl as="textarea" className="text-area" placeholder="Enter your remark here..." />
						</InputGroup>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="generate-btn">Submit</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}