import React, { useState } from 'react';
import { useContext } from "react";
import MiContexto from "../Contexto/MiContexto";
import Smile from '../Animacion/Smile.json';
import Lottie from 'lottie-react';


const Perfil = () => {
 
  const { listaUsuarios, setListausuarios, usuarioActual, setUsuarioActual } = useContext(MiContexto);
  const [nombre, setNombre] = useState(usuarioActual.nombre);
  const [email, setEmail] = useState(usuarioActual.email);
  const [password, setPassword] = useState(usuarioActual.clave);
  const [telefono, SetTelefono] = useState(usuarioActual.telefono);
  const [direccion, SetDireccion] = useState(usuarioActual.direccion);


  

  const actualizarDatos = ()=> {

    const posicionUsuario = listaUsuarios.findIndex((obj)=> obj.id === usuarioActual.id)

    const usuarioActualizado = {

      id: usuarioActual.id,
      nombre: nombre,
      email: email,
      clave: password,
      telefono: telefono,
      direccion: direccion,
      comentarios: [],
      favoritos: []
  
    }
    setUsuarioActual(usuarioActualizado);
    listaUsuarios[posicionUsuario] = usuarioActualizado;
    setListausuarios([...listaUsuarios]);

  }

  return (
    <div className='perfilcss-container'>
        <Lottie animationData={Smile}/>
      <div className='perfilcss'>
        
        <h2>¡Bienvenido/a {usuarioActual.nombre}! </h2>
        <h5>Modifica tus datos</h5>
        <form className='form1'>
          <input type='text' onChange={(event) => setNombre(event.target.value)} placeholder='nombre' value={nombre}></input>
          <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='email' value={email}></input>
          <input type='password' onChange={(event) => setPassword(event.target.value)} placeholder='password' value={password}></input>
          <input type='text' onChange={(event) => SetTelefono(event.target.value)} placeholder='teléfono' value={telefono}></input>
          <input type='text' onChange={(event) => SetDireccion(event.target.value)} placeholder='dirección' value={direccion}></input>
        </form>
      </div>
      <div>
        <button onClick={()=>actualizarDatos()} className='mt-3 buttonLogin'>Guardar</button>
      </div>


    </div>
  )
}

export default Perfil

// cosas a instalar:
// npm i lottie-react --legacy-geer-deps