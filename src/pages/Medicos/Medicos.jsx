import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import medicoService from '../../service/medico.service';

const Medicos = () => {
	const [medicList, setMedicList] = useState([]);
	const [msg, setMsg] = useState('');
	const [medic, setMedic] = useState({
		nome: '',
		email: '',
		telefone: '',
		crm: '',
		especialidade: '',
		endereco: {
			logradouro: '',
			numero: '',
			complemento: '',
			bairro: '',
			cidade: '',
			uf: '',
			cep: '',
		},
	});

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		medicoService
			.getAllMedic()
			.then((res) => {
				const extractedData = res.data.content.map((item) => ({
					id: item.id,
					nome: item.nome,
					email: item.email,
					crm: item.crm,
					especialidade: item.especialidade,
				}));
				setMedicList(extractedData);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setMedic({
			...medic,
			[name]: value,
		});
	};

	const handleAddressChange = (e) => {
		const { name, value } = e.target;
		setMedic({
			...medic,
			endereco: {
				...medic.endereco,
				[name]: value,
			},
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		medicoService
			.saveMedic(medic)
			.then((res) => {
				setMedic({
					nome: '',
					email: '',
					telefone: '',
					crm: '',
					especialidade: '',
					endereco: {
						logradouro: '',
						numero: '',
						complemento: '',
						bairro: '',
						cidade: '',
						uf: '',
						cep: '',
					},
				});
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

				{/* INÍCIO -- Formulário Cadastro Médicos */}

				<div className="container mt-2">
					<h4>Cadastro Médico</h4>
					<form className="row g-3" onSubmit={handleSubmit}>
						<div className="col-md-6">
							<label for="nome" className="form-label">
								Nome
							</label>
							<input
								type="text"
								className="form-control"
								name="nome"
								onChange={handleChange}
								value={medic.nome}
							/>
						</div>

						<div className="col-md-6">
							<label for="inputEmail4" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								name="email"
								onChange={handleChange}
								value={medic.email}
							/>
						</div>

						<div className="col-md-4">
							<label for="telefone" className="form-label">
								Telefone
							</label>
							<input
								type="number"
								className="form-control"
								name="telefone"
								onChange={handleChange}
								value={medic.telefone}
							/>
						</div>
						{/* TODO: Implementar Select que carrega as opções do ENUM de Especilidades */}
						<div className="col-md-4">
							<label for="nome" className="form-label">
								Especialidade
							</label>
							<input
								type="text"
								className="form-control"
								name="especialidade"
								onChange={handleChange}
								value={medic.especialidade}
							/>
						</div>

						<div className="col-md-4">
							<label for="crm" className="form-label">
								CRM
							</label>
							<input
								type="number"
								className="form-control"
								name="crm"
								onChange={handleChange}
								value={medic.crm}
							/>
						</div>

						<div className="col-8">
							<label for="endereco" className="form-label">
								Endereço
							</label>
							<input
								type="text"
								className="form-control"
								name="logradouro"
								onChange={handleAddressChange}
								value={medic.endereco.logradouro}
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
								value={medic.endereco.numero}
							/>
						</div>

						<div className="col-2">
							<label for="complemento" className="form-label">
								Complemento
							</label>
							<input
								type="text"
								className="form-control"
								name="complemento"
								onChange={handleAddressChange}
								value={medic.endereco.complemento}
							/>
						</div>

						<div className="col-8">
							<label for="endereco" className="form-label">
								Bairro
							</label>
							<input
								type="text"
								className="form-control"
								name="bairro"
								onChange={handleAddressChange}
								value={medic.endereco.bairro}
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
								value={medic.endereco.cidade}
							/>
						</div>

						{/* //TODO: Alterar campo UF para Select dos estados onde existem unidades. */}
						{/* <div className="col-md-4">
							<label for="estado" className="form-label">
								Estado
							</label>
							<select name="estado" className="form-select" onChange={handleChange}>
								<option defaultValue>Selecione...</option>
								<option value="SC">SC</option>
								<option value="PR">PR</option>
								<option value="RS">RS</option>
							</select>
						</div> */}

						<div className="col-md-2">
							<label for="cep" className="form-label">
								Estado
							</label>
							<input
								type="text"
								className="form-control"
								name="uf"
								onChange={handleAddressChange}
								value={medic.endereco.uf}
							/>
						</div>

						<div className="col-md-2">
							<label for="cep" className="form-label">
								CEP
							</label>
							<input
								type="text"
								className="form-control"
								name="cep"
								onChange={handleAddressChange}
								value={medic.endereco.cep}
							/>
						</div>

						{/* //TODO: incluir mensagem de sucesso quando registro for inserido no Banco de Dados */}
						{/* <div className="col-12">
							<label>Mensagem: salvo com sucesso!</label>
						</div> */}

						<div className="col-12">
							<button type="submit" className="btn btn-primary">
								Salvar
							</button>
							<button type="" className="btn btn-secondary ms-2">
								Cancelar
							</button>
						</div>
					</form>
				</div>

				{/* FIM -- Formulário Cadastro Médicos */}

				{/* Início -- Tabela Listagem de Médicos */}

				<div className="container mt-2">
					<h4>Listagem de Médicos</h4>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nome</th>
								<th scope="col">Email</th>
								<th scope="col">CRM</th>
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

				{/* Fim -- Tabela Listagem de Médicos */}
			</div>
		</main>
	);
};

export default Medicos;
