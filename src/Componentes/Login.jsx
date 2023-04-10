import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (

    <div className='login-view'>
      <div className='login-box'>
        <h4>Iniciar sesión</h4>
        <form>
          <div className='user-box'>
            <input type='text' placeholder='Nombre'></input>
          </div>
          <div className='user-box'>
            <input type='password' placeholder='Contraseña'></input>
          </div>

          <div className='button-form'>
            <NavLink to="/perfil" id='submit'><button variant="primary">Iniciar Sesión</button></NavLink>
            <div id='registrar'>
              ¿No te has registrado?
              <NavLink to="/registro" id='resgistrar'><button>Registrate</button></NavLink>
            </div>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Login

