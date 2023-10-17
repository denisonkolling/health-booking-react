import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import patientService from '../../service/patient.service';

const Pacientes = () => {
	const [patientList, setPatientList] = useState([]);
	const [msg, setMsg] = useState('');
	const [patient, setPatient] = useState({
		nome: '',
		email: '',
		cpf: '',
		telefone: '',
		endereco: {
			logradouro: '',
			bairro: '',
			cep: '',
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
		patientService
			.getAllPatient()
			.then((res) => {
				setPatientList(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleAddressChange = (e) => {
		const { name, value } = e.target;
		setPatient({
			...patient,
			endereco: {
				...patient.endereco,
				[name]: value,
			},
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setPatient({
			...patient,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		patientService
			.savePatient(patient)
			.then((res) => {
				cleanForm();
				init();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const cleanForm = () => {
		setPatient({
			nome: '',
			email: '',
			cpf: '',
			telefone: '',
			endereco: {
				logradouro: '',
				bairro: '',
				cep: '',
				cep: '',
				numero: '',
				complemento: '',
				cidade: '',
				uf: '',
			},
		});
	};

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

				{/* INÍCIO -- Formulário Cadastro Pacientes */}

				<div className="container-fluid mt-2">
					<h4>Cadastro Paciente</h4>
					<form className="row g-3" onSubmit={handleSubmit}>
						<div className="col-md-4">
							<label for="nome" className="form-label">
								Nome
							</label>
							<input
								type="text"
								className="form-control"
								name="nome"
								onChange={handleChange}
								value={patient.nome}
							/>
						</div>
						<div className="col-md-3">
							<label for="inputEmail4" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								name="email"
								onChange={handleChange}
								value={patient.email}
							/>
						</div>
						<div className="col-md-3">
							<label for="telefone" className="form-label">
								Telefone
							</label>
							<input
								type="number"
								className="form-control"
								name="telefone"
								onChange={handleChange}
								value={patient.telefone}
							/>
						</div>

						<div className="col-md-2">
							<label for="cpf" className="form-label">
								CPF
							</label>
							<input
								type="number"
								className="form-control"
								name="cpf"
								onChange={handleChange}
								value={patient.cpf}
							/>
						</div>

						<div className="col-6">
							<label for="endereco" className="form-label">
								Endereço
							</label>
							<input
								type="text"
								className="form-control"
								name="logradouro"
								onChange={handleAddressChange}
								value={patient.endereco.logradouro}
							/>
						</div>

						<div className="col-2">
							<label for="numero" className="form-label">
								Número
							</label>
							<input
								type="text"
								className="form-control"
								name="numero"
								onChange={handleAddressChange}
								value={patient.endereco.numero}
							/>
						</div>

						<div className="col-2">
							<label for="complemento" className="form-label fs-6">
								Complemento
							</label>
							<input
								type="text"
								className="form-control"
								name="complemento"
								onChange={handleAddressChange}
								value={patient.endereco.complemento}
							/>
						</div>

						<div className="col-2">
							<label for="endereco" className="form-label">
								Bairro
							</label>
							<input
								type="text"
								className="form-control"
								name="bairro"
								onChange={handleAddressChange}
								value={patient.endereco.bairro}
							/>
						</div>
						<div className="col-md-6">
							<label for="cidade" className="form-label">
								Cidade
							</label>
							<input
								type="text"
								className="form-control"
								name="cidade"
								onChange={handleAddressChange}
								value={patient.endereco.cidade}
							/>
						</div>
						<div className="col-md-3">
							<label for="cep" className="form-label">
								Estado
							</label>
							<input
								type="text"
								className="form-control"
								name="uf"
								onChange={handleAddressChange}
								value={patient.endereco.uf}
							/>
						</div>

						<div className="col-md-3">
							<label for="cep" className="form-label">
								CEP
							</label>
							<input
								type="text"
								className="form-control"
								name="cep"
								onChange={handleAddressChange}
								value={patient.endereco.cep}
							/>
						</div>

						<div className="col-12">
							<button type="submit" className="btn btn-primary">
								Salvar
							</button>
							<button type="" className="btn btn-secondary ms-2">
								Cancelar
							</button>
						</div>
					</form>

					{/* FIM -- Formulário Salvar Médicos */}

					{/* Início -- Tabela Listagem de Pacientes */}

					<div className="container-fluid mt-4">
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
