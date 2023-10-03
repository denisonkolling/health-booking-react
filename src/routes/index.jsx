import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';


const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
			  <Route path="/" element={<Home />} />
				<Route exact path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
