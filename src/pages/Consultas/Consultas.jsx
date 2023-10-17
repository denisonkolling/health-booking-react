import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import appointmentService from '../../service/appointment.service';

const Consultas = () => {
	const [appointmentList, setAppointmentList] = useState([]);
	const [msg, setMsg] = useState('');
	const [appointment, setAppointment] = useState({
		idPaciente: '',
		idMedico: '',
		especialidade: '',
		data: '',
	});

	useEffect(() => {
		init();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setAppointment({
			...appointment,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		appointmentService
			.saveAppointment(appointment)
			.then((res) => {
				setAppointment({
					idPaciente: '',
					idMedico: '',
					especialidade: '',
					data: '',
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const init = () => {
		appointmentService
			.getAllAppointment()
			.then((res) => {
				const extractedData = res.data.map((item) => ({
					id: item.id,
					medico: item.medico.nome,
					especialidade: item.medico.especialidade,
					paciente: item.paciente.nome,
					data: item.data,
				}));
				setAppointmentList(extractedData);
			})
			.catch((error) => {
				console.log(error);
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

				<div className="container-fluid mt-2">
					<h4>Cadastro de Consultas</h4>

					<form className="row g-3" onSubmit={handleSubmit}>
						<div className="col-md-3">
							<label for="idPaciente" className="form-label">
								ID Paciente
							</label>
							<input
								type="number"
								className="form-control"
								name="idPaciente"
								onChange={handleChange}
								value={appointment.idPaciente}></input>
						</div>

						<div className="col-md-3">
							<label for="idMedico" className="form-label">
								ID Médico
							</label>
							<input
								type="number"
								className="form-control"
								name="idMedico"
								onChange={handleChange}
								value={appointment.idMedico}></input>
						</div>

						<div className="col-md-3">
							<label for="data" className="form-label">
								Data
							</label>
							<input
								type="datetime-local"
								className="form-control"
								name="data"
								onChange={handleChange}
								value={appointment.data}></input>
						</div>

						<div className="col-md-3">
							<label for="especialidade" className="form-label">
								Especialidade
							</label>
							<select
								name="especialidade"
								className="form-select"
								onChange={handleChange}>
								<option defaultValue>Selecione...</option>
								<option value="CARDIOLOGIA">Cardiologia</option>
								<option value="DERMATOLOGIA">Dermatologia</option>
								<option value="GINECOLOGIA">Ginecologia</option>
								<option value="ORTOPEDIA">Ortopedia</option>
							</select>
						</div>
						<div className="col-12">
							<button type="submit" className="btn btn-primary">
								Salvar
							</button>
							<button className="btn btn-secondary ms-2">Cancelar</button>
						</div>
					</form>

					<div className="container-fluid mt-2">
						<h4>Listagem de Médicos</h4>
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Medico</th>
									<th scope="col">Especialidade</th>
									<th scope="col">Paciente</th>
									<th scope="col">Data</th>
								</tr>
							</thead>
							<tbody>
								{appointmentList.map((a) => (
									<tr key={a.id}>
										<td>{a.id}</td>
										<td>{a.medico}</td>
										<td>{a.especialidade}</td>
										<td>{a.paciente}</td>
										<td>{a.data}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Consultas;
