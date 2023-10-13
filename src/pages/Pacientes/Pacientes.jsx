import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import pacienteService from '../../service/paciente.service';

const Pacientes = () => {
	const [patientList, setPatientList] = useState([]);
	const [msg, setMsg] = useState('');
	const [patient, setPatient] = useState({
		nome: '',
		email: '',
		telefone: '',
		endereco: {
			logradouro: '',
			bairro: '',
			cep: '',
			numero: '',
			complemento: '',
			cidade: '',
			uf: '',
		},
	});

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		pacienteService
			.getAllPaciente()
			.then((res) => {
				setPatientList(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<main className="container-fluid">
			<div className="d-flex">
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
					<h1>Pacientes</h1>

					{/* Início -- Tabela Listagem de Pacientes */}

				<div className="container mt-2">
					<h4>Listagem de Pacientes</h4>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nome</th>
								<th scope="col">Email</th>
								<th scope="col">Telefone</th>
								<th scope="col">Cidade</th>
							</tr>
						</thead>
						<tbody>
							{patientList.map((p) => (
								<tr key={p.id}>
									<td>{p.id}</td>
									<td>{p.nome}</td>
									<td>{p.email}</td>
									<td>{p.telefone}</td>
									<td>{p.endereco.cidade}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Fim -- Tabela Listagem de Pacientes */}
				</div>
			</div>
		</main>
	);
};

export default Pacientes;
