import React, { Component } from 'react';
import noMatch from '../assets/images/page-not-found.png';
import { Button } from 'react-bootstrap';

class NoMatch extends Component {

	componentDidMount() {
		let bodyStyle = document.getElementsByTagName('body')
		bodyStyle[0].style.backgroundImage = "none";
		bodyStyle[0].style.backgroundColor = "#4fb8bb"
	}

	backToHome = () => {
		this.props.history.push('/');
	}

	render() {
		return (
			<div className="d-flex justify-content-center mt-5 position-relative no-page-found">
				<div className="position-relative">
					<img src={noMatch} />
					<Button onClick={this.backToHome} className="btn-transparent d-block ml-auto mr-auto mt-5">Back to Home</Button>
				</div>
				
			</div>
		)
	}
}

export default NoMatch