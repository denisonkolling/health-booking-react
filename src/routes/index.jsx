import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Medicos from '../pages/Medicos/Medicos';
import Pacientes from '../pages/Pacientes/Pacientes';
import Consultas from '../pages/Consultas/Consultas';
import Unidades from '../pages/Unidades/Unidades';
import Ocupacao from '../pages/Ocupacao/Ocupacao';


const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
			  <Route path="/" element={<Home />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/medicos" element={<Medicos />} />
				<Route exact path="/pacientes" element={<Pacientes />} />
				<Route exact path="/unidades" element={<Unidades />} />
				<Route exact path="/consultas" element={<Consultas />} />
				<Route exact path="/ocupacao" element={<Ocupacao />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
