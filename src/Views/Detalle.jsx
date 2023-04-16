import React from 'react'
import { useContext } from "react"
import { useParams } from 'react-router-dom';
import MiContexto from "../Contexto/MiContexto";
import { useState } from 'react';

const Detalle = () => {

  const { id } = useParams();
  //const id2 = Number(id);

  const { hamburguesas, agregarHamburguesa, comentarios, setComentarios, usuarioActual, setUsuarioActual, conectado } = useContext(MiContexto);

  const indBurger = hamburguesas.findIndex((indBurger) => indBurger.id === Number(id));
  const burgerDetalle = hamburguesas[indBurger];



  const [comentario, setComentario] = useState('');

  // const limpiar = () => {
  //   const text = document.querySelector('#textareacomentario').value
  //   console.log(text)

  // }

  const comentar = e => {
     e.preventDefault()
     const date = new Date()
    const objetComent = {
      comentario: comentario,
      id: Date.now(),
      idBurger: Number(id),
      burgerName: burgerDetalle.nombre,
      idUser: usuarioActual.id,
      date: date.getDay() + '-' + Number(date.getMonth()+1) + '-' + date.getFullYear() + ' | ' + date.getHours() + ':' + date.getMinutes().toPrecision(),
      userName: usuarioActual.nombre 
    }
    usuarioActual.comentarios.push(objetComent)
    setUsuarioActual({...usuarioActual})
    setComentarios([objetComent, ...comentarios])
    console.log(comentarios)
    document.querySelector('#textareacomentario').value = '';
  }

  return (
    <div>
    <div className='detalle-container'>
      <div className="card-detalle" >
        <div className="cardimg-detalle">
          <img src={burgerDetalle.img} alt="imagen-hamburguesa" className="imagen"></img>
        </div>
        <h4>
          {burgerDetalle.nombre}
        </h4>
        <p className="desc"> {burgerDetalle.desc}</p>
        <p> Precio: $ {burgerDetalle.precio.toLocaleString({
          style: "currency",
          currency: "CPL"
        })}
        </p>
        <div className='buttondetalle'>
          <button onClick={() => agregarHamburguesa(burgerDetalle)}>Añadir al carrito 🍔</button>
        </div>

      </div>
      </div>

      <h3 className='text-center text-warning'>COMENTARIOS</h3>
      
      {
        
        conectado ? 
        <form onSubmit={comentar} className='d-flex flex-column justify-content-center align-items-center p-5 w-100'>
        <textarea className='w-50' id="textareacomentario" onKeyUp={e => setComentario(e.target.value)} required name="comentario" placeholder='Escribe aquí tu comentario' rows={4}></textarea>
        <div className='p-4'>
        <button className='btn btn-warning'>Comentar</button>
        </div>
           </form> 
           : null
      }
     

      <div className='text-light d-flex justify-content-center flex-column align-items-center py-2 h-100 w-80'>
      {comentarios.filter((c) => c.idBurger === Number(id)).map((coment) => (
                                                                      <div key={coment.id} className='h-100 w-100 px-5'>
                                                                        <p className='fs-5 text-break text-warning'><b>Comentario:</b> {coment.comentario}</p>
                                                                        <p><b>Escrito por:</b> {coment.userName} || <span><b>Realizado el:</b> {coment.date}</span></p>
                                                                        <hr />
                                                                        </div>
                                                                      ))}
       
      </div>
     
    </div>

  )
}

export default Detalle

//<button className='btn btn-danger' onClick={() => limpiar()}>Limpiar</button>