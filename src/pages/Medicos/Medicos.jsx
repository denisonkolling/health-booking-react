import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Medicos = () => {
	return (
		<main className="container-fluid">
			<div className='d-flex'>
				<aside
					style={{
						width: '202px',
						height: '100vh',
						border: 'solid #C2C4C5 1px',
						backgroundColor: '#F8F9FA',
					}}>
					<Navbar />
				</aside>
        <div className="container-fluid">
          <h1>Médicos</h1>
        </div>
			</div>
		</main>
	);
};

export default Medicos;
