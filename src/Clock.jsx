import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	}

	unix(end) {
		const time = Date.parse(end) - Date.parse(new Date());
		const days = Math.floor(this.zeroFill(time / (1000 * 60 * 60 * 24)));
		const hours = Math.floor(this.zeroFill(time / (1000 * 60 * 60) % 24));
		const minutes = Math.floor(this.zeroFill((time / 1000 * 60) % 60));
		const seconds = Math.floor(this.zeroFill((time/1000) % 60));
		this.setState({ days, hours, minutes, seconds });
	}

	zeroFill(n) {
		return (n < 10 ? "0" : "") + n
	}

	componentWillMount() {
		this.unix(this.props.end);
	}

	componentDidMount() {
		setInterval(() => this.unix(this.props.end), 1000);
	}

	render() {
		return (
			<div>
				<div className="Clock">{this.state.days} days</div>
				<div className="Clock">{this.state.hours} hours</div>
				<div className="Clock">{this.state.minutes} minutes</div>
				<div className="Clock">{this.state.seconds} seconds</div>
			</div>
		)
	}
}

export default Clock;