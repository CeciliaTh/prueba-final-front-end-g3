import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MiContexto from '../Contexto/MiContexto';
import { useNavigate } from 'react-router-dom';

const Login = (usuario) => {

  const { listaUsuarios, setConectado } = useContext(MiContexto);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();


  
  const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/perfil/${usuario.id}`)
  }


  const validarUsuario = () => {
       
    

    const usuarioValido = listaUsuarios.find((usuario)=>  usuario.email === email && usuario.clave === password)
    if (usuarioValido) {
  
      setConectado(true)

            {/* <NavLink to="/login" id='submit'><button variant="primary" onClick={()=> validarUsuario()}>Iniciar Sesión</button></NavLink> */}
            <button variant="primary" id='submit' onClick={()=> validarUsuario()}>Iniciar Sesión</button>
            <div id='registrar'>
              ¿No te has registrado?
              <NavLink to="/registro" className='resgistrar'><button>Registrate</button></NavLink>
            </div>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Login

