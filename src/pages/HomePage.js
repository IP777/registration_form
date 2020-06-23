import React, { Component } from "react";
import * as firebase from "firebase";

export default class HomePage extends Component {
	state = { nick: "", name: "", age: null };

	componentDidMount() {
		const rootRef = firebase.database().ref().child("react");
		//const speedRef = rootRef.child("speed");

		// speedRef.on("value", (snap) => {
		// 	this.setState({ speed: snap.val(), user: snap.val() });
		// });

		rootRef.on("value", (snap) => {
			console.log(snap.val().name);
			this.setState({
				nick: snap.val().nick,
				name: snap.val().name,
				age: snap.val().age,
			});
		});
	}

	render() {
		return (
			<ul>
				<li>
					<h3>Slide 1 //name: {this.state.name}</h3>
				</li>
				<li>
					<h3>Slide 2 //name: {this.state.nick}</h3>
				</li>
				<li>
					<h3>Slide 3 //age: {this.state.age}</h3>
				</li>
				<li>
					<h3>Slide 4</h3>
				</li>
			</ul>
		);
	}
}
