import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Login extends Component {

	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			isInvalid: false,
			errors: {
				usernameError: null,
				passwordError: null
			}
		}
	}

	// componentWillMount = () => {
	// 	const active = sessionStorage.getItem('userData') ? true : false;
	// 	this._LoggedIn(active)
	// }

	// _LoggedIn = (active) => {
	// 	if (active) {
	// 		this.props.history.push('/dashboard');
	// 	}
	// }

	handleSubmit = () => {
		const { errors } = this.state;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
			}
		}
		this.setState({ errors: { ...errors } });
		let user_data = JSON.parse(sessionStorage.getItem('userData'));
		let admin_data = JSON.parse(sessionStorage.getItem('adminData'));
		this.validateUser(user_data, admin_data);
	}

	validateUser = (user_data, admin_data) => {
		const { username, password } = this.state;
		const user = { username: user_data ? user_data.username : null, password: user_data ? user_data.password : null }
		const admin = { username: admin_data ? admin_data.username : null, password: admin_data ? admin_data.password : null }
		if (user_data && username == user_data.username && password == user_data.password) {
			this.props.history.push('/dashboard');
		}
		if (admin_data && username == admin_data.username && password == admin_data.password) {
			this.props.history.push('/admin-dashboard');
		}
		else {
			this.setState({
				isInvalid: true
			})
		}
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
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { username, password, errors, isInvalid } = this.state;
		return (
			<div className="main">
				<section className="signup">
					<div className="page-container">
						<div className="signup-content">
							<h2 className="form-title">LOGIN</h2>
							{
								isInvalid &&
								<div className="alert alert-danger" role="alert">
									Invalid Username or Password...!!!
									</div>
							}
							<div className="form-group">
								<input
									type="text"
									className="form-input"
									name="username"
									value={username}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Username" />
								{
									errors.usernameError &&
									<span className="errorMsg">Please enter username</span>
								}
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-input"
									name="password"
									value={password}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Password" />
								{
									errors.passwordError &&
									<span className="errorMsg">Please enter password</span>
								}
							</div>

							<div className="form-group">
								<Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
							</div>
							<div className="form-group">
								<button onClick={this.handleSubmit} className="form-submit" > Login</button>
							</div>

							<div className="form-group">
								<p className="loginhere mt-0"> Do you haven't an account ? <Link className="loginhere-link" to="/register">Create account</Link></p>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Login

