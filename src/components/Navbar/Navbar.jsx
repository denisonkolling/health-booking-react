import React from 'react';
import profile from '../../assets/profile.png'
import { Bootstrap, House, Speedometer, Table, Grid, People, Hospital  } from 'react-bootstrap-icons';

const Navbar = () => {
	return (
		<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280}}>
    <a href="https://getbootstrap.com/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <Hospital className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></Hospital>
      <span className="fs-4">Voll Med</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="https://getbootstrap.com/docs/5.0/examples/sidebars/#" className="nav-link active" aria-current="page">
          <House className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></House>
          Home
        </a>
      </li>
      <li>
        <a href="https://getbootstrap.com/docs/5.0/examples/sidebars/#" className="nav-link text-white">
          <Speedometer className="bi me-2" width="16" height="16"><use href="#speedometer2"></use></Speedometer>
          Dashboard
        </a>
      </li>
      <li>
        <a href="https://getbootstrap.com/docs/5.0/examples/sidebars/#" className="nav-link text-white">
          <Table className="bi me-2" width="16" height="16"><use href="#table"></use></Table>
          Orders
        </a>
      </li>
      <li>
        <a href="https://getbootstrap.com/docs/5.0/examples/sidebars/#" className="nav-link text-white">
          <Grid className="bi me-2" width="16" height="16"><use href="#grid"></use></Grid>
          Products
        </a>
      </li>
      <li>
        <a href="https://getbootstrap.com/docs/5.0/examples/sidebars/#" className="nav-link text-white">
          <People className="bi me-2" width="16" height="16"><use href="#people-circle"></use></People>
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="https://getbootstrap.com/docs/5.0/examples/sidebars/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={profile} alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="https://getbootstrap.com/docs/5.0/examples/sidebars/#">New project...</a></li>
        <li><a className="dropdown-item" href="https://getbootstrap.com/docs/5.0/examples/sidebars/#">Settings</a></li>
        <li><a className="dropdown-item" href="https://getbootstrap.com/docs/5.0/examples/sidebars/#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="https://getbootstrap.com/docs/5.0/examples/sidebars/#">Sign out</a></li>
      </ul>
    </div>
  </div>

	);
};

export default Navbar;
