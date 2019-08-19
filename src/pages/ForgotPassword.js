import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ForgotPassword extends Component {

	constructor() {
		super();
		this.state = {
			email: '',
			invalidEmail: false,
			errors: {
				emailError: null,
			}
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleValidate = (e) => {
		const { errors } = this.state;
		let name = e.target.name;
		let value = e.target.value;
		if (value === "" || value === null || value === undefined) {
			this.setState({ errors: { ...errors, [name + 'Error']: true } });
		}
		else {
			this.setState({ errors: { ...errors, [name + 'Error']: false } });
		}
		if (name === 'email') {
			let emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (value && !value.match(emailRegx)) {
				this.setState({
					invalidEmail: true
				});
			}
			else {
				this.setState({
					invalidEmail: false
				});
			}
		}
	}

	handleSubmit = () => {
		const { errors, invalidEmail } = this.state;
		let isSuccess  = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isSuccess = false;
			}
		}
		if ( invalidEmail) {
			isSuccess = false;
		}
		if (isSuccess) {
			this.props.history.push(`/login`);
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { email, invalidEmail, errors } = this.state;
		return (
			<div>
				<section className="signup">
					<div className="page-container">
						<div className="signup-content">
							<h2 className="form-title">Reset Password</h2>
							<h6 className="text-center mb-5">Enter your email address below and we'll send you an email with instructions.</h6>

							<div className="form-group">
								<input
									type="email"
									className="form-input"
									name="email"
									value={email}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Email" />
								{
									errors.emailError &&
									<span className="errorMsg">Please enter email</span>
								}
								{
									invalidEmail &&
									<span className="errorMsg">Please enter valid email</span>
								}
							</div>
							<div className="form-group">
								<button onClick={this.handleSubmit} className="form-submit">Reset</button>
							</div>

							<p className="loginhere mt-0" ><Link to="login" className="loginhere-link">Back to Login</Link></p>

						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default ForgotPassword