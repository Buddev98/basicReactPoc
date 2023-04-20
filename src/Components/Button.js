import React, { Component } from "react";


export default class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pressed : false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState(prevState => ({ pressed : !prevState.pressed}));
	  }
	render() {
	return (
		<button type={this.props.type} 
				id={this.props.id} 
				className={`${this.props.variant} ${this.props.size}`} 
				disabled={this.props.isDisabled} 
				// role={this.props.alert ? "alert" : ""} 
				aria-pressed={this.state.pressed}
                onClick={this.handleClick}  
				>
					{this.props.children}
		</button>
	);
	}
};
