import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import AdminDashboard from './pages/admin/Dashboard';
import MonthSetup from './pages/admin/MonthSetup';
import PayoutSetup from './pages/admin/PayoutSetup';
import CostSheetCalculation from './pages/admin/CostSheetCalculation';
import Registration from './pages/admin/Registartion';
import Approval from './pages/admin/Approval';
import InvoiceSetup from './pages/admin/InvoiceSetup';
import ProductSetup from './pages/admin/ProductSetup';
import SlabSetup from './pages/admin/SlabSetup';
import Dashboard from './pages/user/Dashboard';
import ActiveCases from './pages/user/ActiveCases';
import Payout from './pages/user/Payout';
import FileInvoice from './pages/user/FileInvoice';
import PaymentStatus from './pages/user/PaymentStatus';
import NoMatch from './components/NoMatch';
import './assets/css/style.css';
import Firebase from './components/Firebase/Firebase';
import FirebaseContext from './components/Firebase/Context';

const PrivateRoute = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				sessionStorage.getItem('adminData') ? (
					<Component {...props} />
				) : sessionStorage.getItem('userData') ?
						<Component {...props} /> :
						(
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
				<PrivateRoute path='/admin-dashboard' component={AdminDashboard} />
				<PrivateRoute path='/month-setup' component={MonthSetup} />
				<PrivateRoute path='/payout-setup' component={PayoutSetup} />
				<PrivateRoute path='/cost-sheet' component={CostSheetCalculation} />
				<PrivateRoute path='/registration' component={Registration} />
				<PrivateRoute path='/approval' component={Approval} />
				<PrivateRoute path='/invoice-setup' component={InvoiceSetup} />
				<PrivateRoute path='/product-setup' component={ProductSetup} />
				<PrivateRoute path='/slab-setup' component={SlabSetup} />
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