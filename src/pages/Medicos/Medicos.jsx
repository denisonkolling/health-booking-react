import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import medicoService from '../../service/medico.service';

const Medicos = () => {

	const [medicList, setMedicList] = useState([]);

	const [msg, setMsg] = useState('');

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		medicoService
			.getAllMedic() 
			.then((res) => {
				const extractedData = res.data.content.map(item => ({
          id: item.id,
          nome: item.nome,
          email: item.email,
          crm: item.crm,
          especialidade: item.especialidade
        }));
				setMedicList(extractedData)
			})
			.catch((error) => {
				console.log(error)
			});
	};

	console.log(medicList);

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
					<h1>Médicos</h1>
					<h4>Listagem de Médicos</h4>

					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nome</th>
								<th scope="col">Email</th>
								<th scope="col">Telefone</th>
								<th scope="col">Especialidade</th>
							</tr>
						</thead>
						<tbody>
							{medicList.map((m) => (
								<tr key={m.id}>
									<td>{m.id}</td>
									<td>{m.nome}</td>
									<td>{m.email}</td>
									<td>{m.crm}</td>
									<td>{m.especialidade}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
};

export default Medicos;
