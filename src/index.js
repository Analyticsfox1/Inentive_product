import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from '../src/components/Home'
import Login from '../src/components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from '../src/components/Dashboard';
import ActiveCases from './components/ActiveCases';
import Payout from './components/Payout';
import FileInvoice from './components/FileInvoice';
import PaymentStatus from './components/PaymentStatus';
import NoMatch from './components/NoMatch';
import './assets/css/style.css';
import Firebase from './components/Firebase/Firebase';
import FirebaseContext from './components/Firebase/Context';

const PrivateRoute = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				sessionStorage.getItem('userData') ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/login" }} />
					)
			}
		/>
	);
};

ReactDOM.render((
	<FirebaseContext.Provider value={new Firebase()}>

		<Router >
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/home' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				{/* <Route path='/register' render={() => <FirebaseContext.Consumer>{firebase => <Register firebase={firebase} />} </FirebaseContext.Consumer>} /> */}
				<Route path='/forgot-password' component={ForgotPassword} />
				<PrivateRoute path='/dashboard' component={Dashboard} />
				<PrivateRoute path='/active-cases' component={ActiveCases} />
				<PrivateRoute path='/payout' component={Payout} />
				<PrivateRoute path='/file-invoice' component={FileInvoice} />
				<PrivateRoute path='/payment-status' component={PaymentStatus} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</Router>

	</FirebaseContext.Provider>
), document.getElementById("app"));