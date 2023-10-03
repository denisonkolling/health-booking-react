import React from 'react';
import profile from '../../assets/profile.png';
import {
	House,
	Speedometer,
	Table,
	Grid,
	People,
	Hospital,
	PersonBadge
} from 'react-bootstrap-icons';
import './styles.css'

const Navbar = () => {
	return (
		<div
			className="d-flex flex-column flex-shrink-0 p-3 text-dark bg-light"
			style={{ width: 200 }}>
			<span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
				<Hospital className="bi me-2" width="40" height="32">
					<use xlinkHref="#bootstrap"></use>
				</Hospital>
				<span className="fs-4">Voll Med</span>
			</span>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<a
						href="/home"
						className="nav-link text-dark"
						aria-current="page">
						<House className="bi me-2" width="16" height="16">
							<use xlinkHref="/home"></use>
						</House>
						Home
					</a>
				</li>
				<li>
					<a
						href="/medicos"
						className="nav-link text-dark">
						<PersonBadge className="bi me-2" width="16" height="16">
							<use href="/medicos"></use>
						</PersonBadge>
						Médicos
					</a>
				</li>
				<li>
					<a
						href="/pacientes#"
						className="nav-link text-dark">
						<People className="bi me-2" width="16" height="16">
							<use href="/pacientes"></use>
						</People>
						Pacientes
					</a>
				</li>

				<li>
					<a
						href="/consultas"
						className="nav-link text-dark">
						<Table className="bi me-2" width="16" height="16">
							<use href="consultas"></use>
						</Table>
						Consultas
					</a>
				</li>
				<li>
					<a
						href="/unidades"
						className="nav-link text-dark">
						<Grid className="bi me-2" width="16" height="16">
							<use href="/unidades"></use>
						</Grid>
						Unidades
					</a>
				</li>
				<li>
					<a
						href="/ocupacao"
						className="nav-link text-dark">
						<Speedometer className="bi me-2" width="16" height="16">
							<use href="/ocupacao"></use>
						</Speedometer>
						Ocupação
					</a>
				</li>
			</ul>

			<hr />
			
			<div className="dropdown">
				<a
					href="https://getbootstrap.com/docs/5.0/examples/sidebars/#"
					className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
					id="dropdownUser1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					<img
						src={profile}
						alt=""
						width="32"
						height="32"
						className="rounded-circle me-2"
					/>
					<strong>Usuário</strong>
				</a>
				<ul
					className="dropdown-menu dropdown-menu-dark text-small shadow"
					aria-labelledby="dropdownUser1">
					<li>
						<a
							className="dropdown-item"
							href="https://getbootstrap.com/docs/5.0/examples/sidebars/#">
							New project...
						</a>
					</li>
					<li>
						<a
							className="dropdown-item"
							href="https://getbootstrap.com/docs/5.0/examples/sidebars/#">
							Settings
						</a>
					</li>
					<li>
						<a
							className="dropdown-item"
							href="https://getbootstrap.com/docs/5.0/examples/sidebars/#">
							Profile
						</a>
					</li>
					<li>
						<hr className="dropdown-divider" />
					</li>
					<li>
						<a
							className="dropdown-item"
							href="https://getbootstrap.com/docs/5.0/examples/sidebars/#">
							Sign out
						</a>
					</li>
				</ul>
			</div>
			
		</div>
	);
};

export default Navbar;
