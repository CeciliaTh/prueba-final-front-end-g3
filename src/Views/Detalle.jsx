import React from 'react'
import { useContext } from "react"
import { useParams } from 'react-router-dom';
import MiContexto from "../Contexto/MiContexto";

const Detalle = () => {

  const { id } = useParams();

  const id2 = Number(id);

  const { hamburguesas } = useContext(MiContexto);

  const indBurger = hamburguesas.findIndex((indBurger) => indBurger.id === id2);
  const burgerDetalle = hamburguesas[indBurger];

  return (
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
          <button>Añadir al carrito 🍔</button>
        </div>

      </div>
    </div>
  )
}

export default Detalle

//<Button variant="danger" onClick={() => agregarPizza(pizzaDetalle)}>Añadir al carrito 🛒</Button> 