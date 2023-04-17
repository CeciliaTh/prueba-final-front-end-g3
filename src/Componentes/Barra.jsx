import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaHamburger } from "react-icons/fa";



const Barra = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  return (
    <div className='barra1'>
      <Navbar className='barra' expand="lg">
        <Container>
          <NavLink to="/"><Navbar.Brand className='logo2'>BurgerTown</Navbar.Brand></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='navtoggle navbar-dark navbarFiltro' />
          <Navbar.Collapse id="basic-navbar-nav" className='navtoggle navbarFiltro'>
            <Nav className="ms-auto">
           
              <OverlayTrigger overlay={<Tooltip className='fs-6' placement='bottom'>Menú Hamburguesas</Tooltip>}>
                <NavLink className={setActiveClass} id='letras' to="/menu">
                  <FaHamburger className='carrito fs-3'></FaHamburger>
                </NavLink>
              </OverlayTrigger>

              <OverlayTrigger overlay={<Tooltip className='fs-6' placement='bottom'>Carrito</Tooltip>}>
                <NavLink className={setActiveClass} id='letras' to="/carrito">
                <FaShoppingCart className='carrito fs-3'></FaShoppingCart>
                </NavLink>
              </OverlayTrigger>

              <OverlayTrigger overlay={<Tooltip className='fs-6' placement='bottom'>Inicia Sesión</Tooltip>}>
                <NavLink className={setActiveClass} id='letras' to="/login">
                  <FaSignInAlt className='carrito fs-3'></FaSignInAlt>
                </NavLink>
              </OverlayTrigger>
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