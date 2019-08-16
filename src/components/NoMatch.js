import React, { Component } from 'react';
import noMatch from '../assets/images/no-page-found.png';

class NoMatch extends Component {

	componentDidMount() {
		let bodyStyle = document.getElementsByTagName('body')
		bodyStyle[0].style.backgroundImage = "none";
	}

	render() {
		return (
			<div className="d-flex justify-content-center mt-5">
				<img src={noMatch} />
			</div>
		)
	}
}

export default NoMatch