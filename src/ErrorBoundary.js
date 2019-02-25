import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	//if anything errors out in this component,
	//this life cycle hook will be ran
	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Ooops. That is not good.</h1>
		}
		//children will be anything that we wrap the
		//error boundary component around
		return this.props.children
	}
}

export default ErrorBoundary;