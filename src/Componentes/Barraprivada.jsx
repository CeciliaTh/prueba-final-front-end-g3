import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import MiContexto from '../Contexto/MiContexto';
import { FaUserCircle, FaShoppingCart, FaHeart, FaComments, FaSignOutAlt, FaHamburger } from "react-icons/fa";


const Barraprivada = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
    const {setConectado, usuarioActual} = useContext(MiContexto);

    const cerrarsesion = ()=> {
      setConectado(false)
    }

    return (
      <div className='barra1'>
        <header className='bg-dark w-100 py-2 px-3 d-flex justify-content-end'><span className="text-light font-monospace">¡Hola, <b className="text-light font-monospace">{usuarioActual.nombre}!</b> </span></header>
        <Navbar className='barra' expand="lg">
          <Container>
            <NavLink to="/"><Navbar.Brand className='logo2'>BurgerTown</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='navtoggle navbar-dark navbarFiltro' />

            <Navbar.Collapse id="basic-navbar-nav" className='navtoggle navbarFiltro'>
              <Nav className="ms-auto">

                <OverlayTrigger overlay={<Tooltip className='fs-6'>Menú Hamburguesas</Tooltip>}>
                  <NavLink className={setActiveClass} id='letras' to="/menu">
                    <FaHamburger className='carrito'></FaHamburger>
                  </NavLink>
                </OverlayTrigger>

                <OverlayTrigger overlay={<Tooltip className='fs-6'>Carrito</Tooltip>}>
                  <NavLink className={setActiveClass} id='letras' to="/carrito">
                    <FaShoppingCart className='carrito'></FaShoppingCart>
                  </NavLink>
                </OverlayTrigger>

                <OverlayTrigger overlay={<Tooltip className='fs-6'>Mi Perfil</Tooltip>}>
                <NavLink className={setActiveClass} id='letras' to="/perfil">
                  <FaUserCircle className='carrito'></FaUserCircle>
                </NavLink>
                </OverlayTrigger>

                <OverlayTrigger overlay={<Tooltip className='fs-6'>Favoritos</Tooltip>}>
                <NavLink className={setActiveClass} id='letras' to="/favoritos">
                  <FaHeart className='carrito'></FaHeart>
                </NavLink>
                </OverlayTrigger>

                <OverlayTrigger overlay={<Tooltip className='fs-6'>Comentarios</Tooltip>}>
                <NavLink className={setActiveClass} id='letras' to="/comentarios">
                  <FaComments className='carrito'></FaComments>
                </NavLink>
                </OverlayTrigger>

                <OverlayTrigger overlay={<Tooltip className='fs-6'>Cierra Sesión</Tooltip>}>
                <NavLink className={setActiveClass} id='letras' to="/" onClick={()=>cerrarsesion()}>
                  <FaSignOutAlt className='carrito'></FaSignOutAlt>
                </NavLink>
                </OverlayTrigger>
              </Nav>
            </Navbar.Collapse>
  
          </Container>
        </Navbar>
      </div>
    )
  }

export default Barraprivada