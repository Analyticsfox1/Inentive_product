import React, { Component } from 'react';
import { Link } from "react-router-dom";
import image from '../assets/images/signup-bg.jpg';
import logo from '../assets/images/logo-blue.jpg';
import bottomBanner from '../assets/images/corporate1.jpg';
class Home extends Component {

	// componentDidMount() {
	// 	let bodyStyle = document.getElementsByTagName('body')
	// 	bodyStyle[0].style.backgroundImage = "none";
	// }

	aboutClick = () => {
		window.scrollTo(0, 550);
	}

	backTotop = () => {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<>
				<div className="w3-top">
					<div className="w3-bar w3-white w3-card" id="myNavbar">
						<div className="w3-right w3-hide-small header-link">
							<a onClick={this.aboutClick} className="w3-bar-item w3-button"><i className="fa fa-users"></i>&nbsp;&nbsp;ABOUT</a>
							<a className="w3-bar-item w3-button"><i className="fas fa-user"></i><Link to="/register" >&nbsp;&nbsp;SIGN UP</Link></a>
							<a className="w3-bar-item w3-button"><i className="fas fa-sign-in-alt"></i><Link to="/login" >&nbsp;&nbsp;SIGN IN</Link></a>
						</div>
						<a className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium">
							<i className="fa fa-bars"></i>
						</a>
					</div>
				</div>

				<header className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
					<div className="w3-text-white w-100 text-center" style={{ padding: "48px" }}>
						<div className="d-flex justify-content-center align-items-center">
							<img className="mr-2" style={{ height: '50px', width: '50px' }} src={logo} />
							<span className="w3-xxxlarge" style={{letterSpacing:'5px'}}>BRAND</span>
						</div>
						<div className="w3-xxlarge w3-hide-small">Start something that matters.</div>
						<div className="w3-large w3-hide-small">Today's investment climate offers unprecedented opportunities. <br/> Our mission is to help clients take advantage of those opportunities.</div>
					</div>
				</header>

				<div className="w3-aboutbg w3-container" style={{ padding: "75px 16px" }} id="about">
					<h3 className="w3-center">ABOUT THE COMPANY</h3>
					<p className="w3-center w3-large">Key features of our company</p>
					<div className="w3-row-padding w3-center" style={{ marginTop: '64px' }}>
						<div className="w3-quarter">
							<i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
							<p className="w3-large">Responsive</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
						<div className="w3-quarter">
							<i className="fa fa-heart w3-margin-bottom w3-jumbo"></i>
							<p className="w3-large">Passion</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
						<div className="w3-quarter">
							<i className="far fa-gem w3-margin-bottom w3-jumbo"></i>
							<p className="w3-large">Design</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
						<div className="w3-quarter">
							<i className="fa fa-cog w3-margin-bottom w3-jumbo"></i>
							<p className="w3-large">Support</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
				<div>
					<img src={bottomBanner} className="w3-image w3-grayscale-min" style={{ width: '100%' }} />
				</div>
				<footer className="w3-center w3-black py-2 position-relative social-icons">
					<a onClick={this.backTotop} className="w3-button"><i className="fas fa-arrow-up"></i></a>
					<div className="w3-xlarge w3-section">
						<i className="fab fa-facebook-square w3-hover-opacity cursor-pointer mr-3"></i>
						<i className="fab fa-instagram w3-hover-opacity cursor-pointer mr-3"></i>
						<i className="fab fa-snapchat w3-hover-opacity cursor-pointer mr-3"></i>
						<i className="fab fa-pinterest w3-hover-opacity cursor-pointer mr-3"></i>
						<i className="fab fa-twitter w3-hover-opacity cursor-pointer mr-3"></i>
						<i className="fab fa-linkedin w3-hover-opacity cursor-pointer mr-3"></i>
					</div>
				</footer>

			</>
		)
	}
}

export default Home