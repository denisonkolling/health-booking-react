import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import appointmentService from '../../service/appointment.service';

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

				<div className="container-fluid" style={{border: '1px solid red'}}>
					<h4>Fila de Atendimentos</h4>
				</div>
			</div>
		</main>
	);
};

export default Atendimentos;
