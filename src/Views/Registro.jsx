import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Registro = () => {
  return (
      <div className='p-5 bg-light text-login'>
      <h1>Registro en BurgerTown</h1>
      <h4 className='mt-4'>Nombre y apellido</h4>
      <input type="text" placeholder='Escribe tu nombre y apellido' className='inputsz' />
      <h4 className='mt-4'>Nombre de usuario:</h4>
      <input type="text" placeholder='Elige tu nombre de usuario' className='inputsz' />
      <h4 className='mt-4'>Correo electrónico</h4>
      <input type="text" placeholder='Correo' className='inputsz' />
      <h4 className='mt-4'>Teléfono</h4>
      <input type="text" placeholder='+569 1234 5678' className='inputsz' />
      <h4 className='mt-4'>Conrtraseña</h4>
      <input type="text" placeholder='Crear tu contraseña' className='inputsz' />
      <h4 className='mt-4'>Repite tu contraseña</h4>
      <input type="text" placeholder='Crear tu contraseña' className='inputsz' />
      <div className='mt-4'>
      <NavLink to="/"><Button variant="primary">Registro</Button></NavLink>
      </div>
     </div>
  )
}

export default Registro