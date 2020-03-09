import React from 'react';
import './App.css';
import Counter from './Component/Counter';
import { connect } from 'react-redux';

function App() {
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

export default connect()(App);
