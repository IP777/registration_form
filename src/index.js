import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCvNV3g_80avFyzr6MM6-fEbxLplPe6Bw0",
	authDomain: "registration-form-firebase.firebaseapp.com",
	databaseURL: "https://registration-form-firebase.firebaseio.com",
	projectId: "registration-form-firebase",
	storageBucket: "registration-form-firebase.appspot.com",
	messagingSenderId: "504812036054",
	appId: "1:504812036054:web:556724044759ce05e60e77",
	measurementId: "G-E3YV2PT00V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
