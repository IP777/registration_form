import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//------------------------------------------------------
import AutorisationPage from "./pages/AutorisationPage";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Navigation />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/content" component={ContentPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/autorisation" component={AutorisationPage} />
					<Redirect to="/" />
				</Switch>
			</>
		);
	}
}

export default App;
