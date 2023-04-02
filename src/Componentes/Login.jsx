import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='p-5 bg-light text-login'>
      <h1>Iniciar sesión en BurgerTown</h1>
      <h4 className='mt-4'>Nombre de usuario:</h4>
      <input type="text" placeholder='Escribe tu nombre de usuario' className='inputsz' />
      <h4 className='mt-4'>Conrtraseña</h4>
      <input type="text" placeholder='Escribe tu contraseña' className='inputsz' />
      <div className='mt-4'>
        <Button variant="primary">Iniciar Sesión</Button>
      </div>
      <p className='mt-4'>¿No estás registrado? <NavLink to="/registro">Registraté Aquí</NavLink></p>
     </div>
  )
}

export default Login