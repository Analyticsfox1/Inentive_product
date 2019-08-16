import React, { Component } from 'react'
import NotificationPopUp from './NotificationPopUp';

class Navbar extends Component {

	constructor (props) {
		super(props)
	}
	
	_removeStorage = () => {
		sessionStorage.removeItem('userData');
		this.props.history.push('/login');
	}

	toggleClick = () => {
		this.props.handleToggle();
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-dark-blue border-bottom">
					<a style={{ cursor: 'pointer' }} className="text-white" onClick={this.toggleClick} id="menu-toggle"><i className="fas fa-bars"></i></a>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
							<li className="nav-item text-white mt-2 mr-3">
								<i className="far fa-question-circle fa-lg"></i>
							</li>

							<li className="nav-item text-white mt-2 mr-3 cursor-pointer dropdown">
								<NotificationPopUp />
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle text-white text-underline" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									DSA1
              		</a>
								<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" onClick={this._removeStorage}>Logout</a>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar