import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

	componentDidMount() {
		let bodyStyle = document.getElementsByTagName('body')
		bodyStyle[0].style.backgroundImage = "none";
	}
	
	render() {
		return (
			<div>
				<h2 className="text-center mt-5"><strong> Welcome to Home Page </strong></h2>
				<div className="mt-4 d-flex justify-content-center">
					<Link to="/login"><button type="button" className="form-submit">Login Now</button> </Link>
				</div>
			</div>
		)
	}
}

export default Home