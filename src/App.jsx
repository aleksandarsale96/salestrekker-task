import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import PageNotFound from './pages/PageNotFound';

const App = () => {
	return (
		<div className="app bg-gray-900 w-full h-screen">
			<HashRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/calculator" element={<Calculator />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</HashRouter>
		</div>
	);
};

export default App;
