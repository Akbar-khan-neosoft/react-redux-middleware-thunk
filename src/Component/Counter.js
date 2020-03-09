import React, { Component } from 'react';
import { connect } from 'react-redux';
import { diff, thunk_function } from '../Store/Action/ActionCreator';

class Counter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				Counter : {this.props.counter}
				<div>
					<button onClick={this.props.onAdd}>Add</button>
					<button onClick={this.props.onSub}>Substract</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { counter: state.counter };
};

const mapDispatchToProps = dispatch => ({
	onAdd: () => dispatch(thunk_function()),
	onSub: () => dispatch(diff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
