import React, { Component } from 'react';
import './App.css';
import Clock from "./Clock.jsx"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			end: "January 1, 2019",
			newEnd: ''
		};
	}

	update() {
		this.setState({end: this.state.newEnd});
		console.log(this.state);
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Countdown to {this.state.end}</div>
				<Clock end={this.state.end}/>
				<input 
					placeholder="new date"
					onChange={event => this.setState({ newEnd: event.target.value})}
				/>
				<button onClick={() => this.update()}>Submit</button>
			</div>
		)
	}
}

export default App;