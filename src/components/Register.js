import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FirebaseContext from '../components/Firebase/Context';

class Register extends Component {

	constructor() {
		super();
		this.state = {
			username: '',
			email: '',
			password: '',
			conf_password: '',
			invalidEmail: false,
			invalidPassword: false,
			invalidConfPassword: false,
			errors: {
				usernameError: null,
				emailError: null,
				passwordError: null,
				conf_passwordError: null
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
		if (name === 'password') {
			let passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
			if (value && !value.match(passwordRegx)) {
				this.setState({
					invalidPassword: true
				});
			}
			else {
				this.setState({
					invalidPassword: false
				});
			}
		}
		if (name === 'conf_password') {
			if (value && value !== this.state.password) {
				this.setState({
					invalidConfPassword: true
				});
			}
			else {
				this.setState({
					invalidConfPassword: false
				});
			}
		}
	}

	handleSubmit = (event) => {
		const { errors, invalidPassword, invalidEmail, invalidConfPassword, email, password } = this.state;
		const { firebase } = this.props;
		let isRegister = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isRegister = false;
			}
		}
		if (invalidPassword || invalidEmail || invalidConfPassword) {
			isRegister = false;
		}
		if (isRegister) {
			// firebase
			// 	.doCreateUserWithEmailAndPassword(email, password)
			// 	.then(response => {
			// 		this.setState({ email: email, password: password });
			// 	})
			// 	.catch(error => {
			// 		this.setState({ errors });
			// 	});

			// event.preventDefault();
			const user = { username: this.state.username, password: this.state.password }
			this.validateUser(user);
		}
		this.setState({ errors: { ...errors } });
	}

	validateUser = (user) => {
		const { username, password } = this.state;
		sessionStorage.setItem("userData", JSON.stringify(user));
		this.props.history.push('/login');
	}

	render() {
		const { username, email, password, conf_password, invalidEmail, invalidPassword, invalidConfPassword, errors } = this.state;
		return (
			<div className="main">
				<section className="signup">
					<div className="page-container">
						<div className="signup-content">
							<h2 className="form-title">Create account</h2>
							<div className="form-group">
								<input
									type="text"
									className="form-input"
									name="username"
									value={username}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Username" />
								{
									errors.usernameError &&
									<span className="errorMsg">Please enter username</span>
								}
							</div>
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
								<input
									type="password"
									className="form-input"
									name="password"
									value={password}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Password" />

								{
									errors.passwordError &&
									<span className="errorMsg">Please enter password</span>
								}
								{
									invalidPassword &&
									<span className="errorMsg">Password must contain at least 8 characters, including uppercase, lowercase and numbers</span>
								}
								{/* <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span> */}
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-input"
									name="conf_password"
									value={conf_password}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Confirm your password" />

								{
									errors.conf_passwordError &&
									<span className="errorMsg">Please enter confirm password</span>
								}
								{
									invalidConfPassword &&
									<span className="errorMsg">Confirm password does not match</span>
								}
							</div>
							<div className="form-group">
								<input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
								<label htmlFor="agree-term" className="label-agree-term">I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
							</div>
							<div className="form-group">
								<button onClick={this.handleSubmit} className="form-submit" > SIGN UP</button>
							</div>

							<p className="loginhere">
								Have already an account ? <Link to="login" className="loginhere-link">Login here</Link>
							</p>
						</div>
					</div>
				</section>

			</div>
		)
	}
}

export default Register