import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar color="dark">
					<div className="container">
						<NavbarBrand href="/">
							Restaurante Confusion
						</NavbarBrand>
					</div>
				</Navbar>
				<Menu />
			</div>
		);
	}
}

export default App;
