import React from 'react'
import { useContext } from "react"
import MiContexto from "../Contexto/MiContexto";

const Comentarios = () => {
  const { usuarioActual} = useContext(MiContexto);

  return (
    <div className="py-2 h-100 w-100 text-light min-vh-100">
      <div><h1 className='text-center text-warning'>Comentarios de {usuarioActual.nombre} </h1>
        {usuarioActual.comentarios.map((c) => (
          <div key={c.id} className='px-4 h-100 w-100'>
            <p className='fs-5 text text-break text-warning'><b>Comentario:</b> {c.comentario}</p>
            <p><b>Realizado el:</b> {c.date} <span><b>Sobre:</b> {c.burgerName}</span></p>
            <hr />
            
            </div>
        ))}
      </div>
      </div>
    

  )
}

export default Comentarios