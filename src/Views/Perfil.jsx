import React from 'react';
//import { useParams } from 'react-router-dom';
import { useContext } from "react";
import MiContexto from "../Contexto/MiContexto";


const Perfil = () => {
 
  const { listaUsuarios, usuarioActual, setUsuarioActual } = useContext(MiContexto);

  return (
    <div className='perfilcss-container'>

      <div>
        <h4>¡Bienvenido/a {usuarioActual.nombre}! </h4>
        <p>Email: {usuarioActual.email}</p>
      </div>

    </div>
  )
}

export default Perfil