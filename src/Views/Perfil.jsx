import React from 'react';
//import { useParams } from 'react-router-dom';
import { useContext } from "react";
import MiContexto from "../Contexto/MiContexto";
import Smile from '../Animacion/Smile.json';
import Lottie from 'lottie-react';


const Perfil = () => {
 
  const { listaUsuarios, usuarioActual, setUsuarioActual } = useContext(MiContexto);

  return (
    <div className='perfilcss-container'>
<Lottie animationData={Smile}/>
      <div>
        
        <h2>¡Bienvenido/a {usuarioActual.nombre}! </h2>
        <p>Email: {usuarioActual.email}</p>
      </div>

    </div>
  )
}

export default Perfil

// cosas a instalar:
// npm i lottie-react --legacy-geer-deps