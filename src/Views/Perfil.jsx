import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import MiContexto from "../Contexto/MiContexto";


const Perfil = () => {
  const { iduser } = useParams();
  const iduser2 = Number(iduser);
  const { listaUsuarios, usuarioActual, setUsuarioActual } = useContext(MiContexto);

  const inxUser = listaUsuarios.findIndex((i) => i.id === iduser2);
  const usuarioDetalle = listaUsuarios[inxUser];
  console.log(typeof iduser + "iduser")
  console.log(typeof listaUsuarios + "lista")
  console.log(usuarioDetalle)

  //setUsuario([...usuarioDetalle])

  return (
    <div className='perfilcss-container'>

      <div>
        <h4>Vista Perfil</h4>
      </div>

    </div>
  )
}

export default Perfil