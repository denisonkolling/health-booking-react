import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import appointmentService from '../../service/appointment.service';
import { App, Calendar, PersonSquare, CardChecklist, ArrowDownLeftSquare } from 'react-bootstrap-icons';

const Atendimentos = () => {
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

				<div className="container-fluid" style={{ border: '' }}>
					<div className="d-flex">
						<div className="card col-3 m-3 p-3 px-4 flex-grow-1">
							<div>
							<PersonSquare className="bi me-2 mb-2 fs-3"></PersonSquare>
								<span className="text-start fw-bold">
									Dr. Edward Scheckelton
								</span>
								<br />
								<span className="text-start fw-light">
									Clínica Santa Helena
								</span>
							</div>
						</div>
						<div className="card col-3 m-3 py-3 px-4 flex-grow-1">
							<Calendar className="bi me-2 fs-3"></Calendar>
							<span className="text-start fw-bold">Hoje</span>
							<span className="text-start">02 NOV 2023</span>
						</div>
						<div className="card col-2 m-3 p-3 fw-bold">
							<CardChecklist className="bi me-2 fs-3"/>
							<span className="text-start my-2">Agendamentos</span>
						</div>
						<div className="card col-2 m-3 p-3 fw-bold">
						<ArrowDownLeftSquare className="bi me-2 fs-3"/>
							<span className="text-start my-2">Encaixes</span>
						</div>
					</div>

					<div class="card text-center flex-grow-1 m-3">
						<div class="card-header">
							<ul class="nav nav-tabs card-header-tabs">
								<li class="nav-item">
									<span class="nav-link active">
										Fila<br/>
										{/* <span className='fw-bold'>05</span> */}
									</span>
								</li>
								<li class="nav-item">
									<a
										class="nav-link text-black"
										href="#"
										tabindex="-1"
										aria-disabled="true">
										Antecipados
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link text-black"
										href="#"
										tabindex="-2"
										aria-disabled="true">
										Aguardando
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link text-black"
										href="#"
										tabindex="-3"
										aria-disabled="true">
										Cancelamentos
									</a>
								</li>
							</ul>
						</div>
						<div class="card-body">
							<div className="container-fluid mt-2">
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
								</table>
							</div>

							<a href="#" class="btn btn-primary m-2">
								Chamar
							</a>
							<a href="#" class="btn btn-secondary m-2">
								Cancelar
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Atendimentos;
