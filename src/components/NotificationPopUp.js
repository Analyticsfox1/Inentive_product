import React, { Component } from 'react';

class NotificationPopUp extends Component {
	render() {
		return (
			<>
				{
					this.props.page === 'admin' ?
						<div className="notification-dropdown">
							<a id="dLabel" role="button" data-toggle="dropdown" data-target="#">
								<i className="fas fa-bell fa-lg"></i><span className="badge badge-light">2</span>
							</a>

							<ul className="dropdown-menu notifications" role="menu" aria-labelledby="dLabel">
								<li className="divider"></li>
								<div className="notifications-wrapper">
									
									<a className="content" href="#">
										<div className="notification-item">
											<p className="item-info">Payout for the month of the <b className="text-underline">July</b> is finalised</p>
										</div>
									</a>
									<a className="content" href="#">
										<div className="notification-item">
											<p className="item-info">Payout Invoice for the month of <b className="text-underline">July</b> is signed and uploaded</p>
										</div>
									</a>
								</div>
								<li className="divider"></li>

							</ul>

						</div>
						:

						<div className="notification-dropdown">
							<a id="dLabel" role="button" data-toggle="dropdown" data-target="#">
								<i className="fas fa-bell fa-lg"></i><span className="badge badge-light">4</span>
							</a>

							<ul className="dropdown-menu notifications" role="menu" aria-labelledby="dLabel">
								<li className="divider"></li>
								<div className="notifications-wrapper">
									<a className="content" href="#">
										<div className="notification-item">
											<p className="item-info">Case <b className="text-underline">123</b> has been approved</p>
										</div>

									</a>
									<a className="content" href="#">
										<div className="notification-item">
											<p className="item-info">Cost sheet for the month of <b className="text-underline">July</b> is Processed by bank / NBFC</p>
										</div>
									</a>
									<a className="content" href="#">
										<div className="notification-item">
											<p className="item-info">Invoice for the month of <b className="text-underline">July</b> is ready for Print</p>
										</div>
									</a>
									<a className="content" href="#">
										<div className="notification-item">
											<p className="item-info">Payout for the month of <b className="text-underline">July</b> is disbursed</p>
										</div>

									</a>
								</div>
								<li className="divider"></li>

							</ul>

						</div>
				}
			</>
		)
	}
}

export default NotificationPopUp