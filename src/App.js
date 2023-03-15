import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Timer from './components/Timer.js';
import Stopwatch from './components/Stopwatch.js';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<nav className='nav-links'>
						<Link className='showlink' to='/'>
							Home
						</Link>
						<Link className='showlink' to='/stopwatch'>
							Stop Watch
						</Link>
						<Link className='showlink' to='/timer'>
							Timer
						</Link>
					</nav>
				</header>
				<div className='App-body'>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/stopwatch' element={<Home />} />
						<Route exact path='/timer' element={<Home />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
