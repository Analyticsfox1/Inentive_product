import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyBWY3R2vrse9Q4SZs1Inso9tCJFe8I_lhA",
	authDomain: "react-assignment-134dc.firebaseapp.com",
	databaseURL: "https://react-assignment-134dc.firebaseio.com",
	projectId: "react-assignment-134dc",
	storageBucket: "",
	messagingSenderId: "999381773745",
	appId: "1:999381773745:web:e3359a6f9a0d0ad3"
};

export default class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);
		this.auth = app.auth();
	}
	//  *** Auth API ***

	doCreateUserWithEmailAndPassword = (username, password) => {
		this.auth.createUserWithEmailAndPassword(username, password);
	}
}