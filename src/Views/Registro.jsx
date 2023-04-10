import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Registro = () => {
  return (
    <div className='registro-container'>
      <div className='registrocss'>
        <div className=' p-2 text-white text-login'>
          <h3>Registro en BurgerTown</h3>
          <h6 className='mt-4'>Nombre y apellido</h6>
          <input type="text" placeholder='Escribe tu nombre y apellido' className='inputsz' />
          <h6 className='mt-4'>Nombre de usuario:</h6>
          <input type="text" placeholder='Elige tu nombre de usuario' className='inputsz' />
          <h6 className='mt-4'>Correo electrónico</h6>
          <input type="text" placeholder='Correo' className='inputsz' />
          <h6 className='mt-4'>Teléfono</h6>
          <input type="text" placeholder='+569 1234 5678' className='inputsz' />
          <h6 className='mt-4'>Contraseña</h6>
          <input type="text" placeholder='Crear tu contraseña' className='inputsz' />
          <h6 className='mt-4'>Repite tu contraseña</h6>
          <input type="text" placeholder='Crear tu contraseña' className='inputsz' />
          <div className='mt-4'>
            <NavLink to="/"><Button variant="warning">Registro</Button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro