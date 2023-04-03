import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (

    <div className='login-box'>
        <h2>Iniciar sesión</h2>
        <form>
        <div className='user-box'>
          <input type='text' placeholder='nombre'></input>
        </div>
        <div className='user-box'>
          <input type='password' placeholder='contraseña'></input>
        </div>

        <div className='button-form'>
          <NavLink to="/" id='submit'><button variant="primary">Iniciar Sesión</button></NavLink>
          <div id='registrar'>
            No te has registrado? 
            <NavLink to="/" id='resgistrar'><button>Registrate</button></NavLink>
          </div>
        </div>

  </form>
    </div>

    // <div className='p-5 bg-light text-login'>
    //   <h1>Iniciar sesión en BurgerTown</h1>
    //   <h4 className='mt-4'>Nombre de usuario:</h4>
    //   <input type="text" placeholder='Escribe tu nombre de usuario' className='inputsz' />
    //   <h4 className='mt-4'>Conrtraseña</h4>
    //   <input type="text" placeholder='Escribe tu contraseña' className='inputsz' />
    //   <div className='mt-4'>
    //     <NavLink to="/"><Button variant="primary">Iniciar Sesión</Button></NavLink>
    //   </div>
    //   <p className='mt-4'>¿No estás registrado? <NavLink to="/registro">Registraté Aquí</NavLink></p>
    //  </div>
  )
}

export default Login

