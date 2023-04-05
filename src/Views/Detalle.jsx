import React from 'react'
import { useContext } from "react"
import { useParams } from 'react-router-dom';
import MiContexto from "../Contexto/MiContexto";
import { Card, Button } from 'react-bootstrap';

const Detalle = () => {
 
const { id } = useParams();

const id2 = Number(id);
console.log (typeof id + "id")

const { hamburguesas } = useContext(MiContexto);

const indBurger = hamburguesas.findIndex((indBurger) => indBurger.id === id2);
console.log("index "+ indBurger)
const burgerDetalle = hamburguesas[indBurger];

return (
    <div >
       <Card  border="info" className="flex-row" style={{ width: '100%', marginTop: "1em" }}>
       <Card.Img variant="top"  src={burgerDetalle.img} style={{ width: '80%'}}/>
  
    <Card.Body>
          <Card.Title><strong>{burgerDetalle.nombre}</strong></Card.Title>
          
          <Card.Text>
          {burgerDetalle.desc} 
          </Card.Text>
                   
          <Card.Text> Precio: $ {(burgerDetalle.precio).toLocaleString({
            style: "currency",
             currency: "CPL"
        })}.-
        </Card.Text>
          
          <hr></hr>
          <div className="d-flex justify-content-end">
          <Button variant="danger" >Añadir al carrito 🛒</Button>
          </div>
         
        </Card.Body>
      </Card>
    </div>
  )
}

export default Detalle

//<Button variant="danger" onClick={() => agregarPizza(pizzaDetalle)}>Añadir al carrito 🛒</Button> 