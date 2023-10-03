import React from 'react';
import './Styles.css';
import { faSearch, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="wrapper"></div>
				<div className="container-fluid all-show">
					<a className="navbar-brand" href="#">
						VollMed <FontAwesomeIcon icon={faStethoscope} />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									About us
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Products
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Events
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									contact
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									<FontAwesomeIcon icon={faSearch} />
								</a>
							</li>
						</ul>
						<div className="d-flex flex-column sim">
							<span>1 item added to your quote</span>
							<small className="text-primary">view your quote</small>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
