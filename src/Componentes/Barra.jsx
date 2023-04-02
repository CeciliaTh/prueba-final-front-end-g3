import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';

const Barra = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <NavLink to="/"><Navbar.Brand className='logo'>BurgerTown</Navbar.Brand></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-between">
              <NavLink className={setActiveClass}  to="/">
                🍔 Inicio BurgerTown
              </NavLink>

              <NavLink className={setActiveClass} to="/menu">
                📝 Menú Hamburguesas
              </NavLink>

              <NavLink className={setActiveClass} to="/perfil">
                😀Mi Perfil
              </NavLink>

              <NavLink className={setActiveClass} to="/login">
                🔑 Iniciar Sesion / Registrarse
              </NavLink>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  )
}

export default Barra

// Para cuando haya que mostrar esta opción dependiendo si el usuario está logueado o no
// usuarioLogueado ?
// <NavLink className={setActiveClass} to="/perfil">
//   😀Mi Perfil
// </NavLink>
// : null 