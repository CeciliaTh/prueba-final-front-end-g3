import React from 'react'
// import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Carrito = () => {

return (
    <div className='p-5'>
      <h1 className="text-center p-4"> DETALLE DEL PEDIDO </h1>
      <div className='bg-light m-auto p-3 border border-success justify-content-between'>
     
        <div className="row mb-2 pb-2" >
          <div className="col" >
            <h4><strong>IMAGEN</strong></h4>
          </div>
          <div className="col">
            <h4><strong>NOMBRE PIZZA</strong></h4>
          </div>
          <div className="col">
            <h4><strong>PRECIO UNITARIO</strong></h4>
          </div>
          <div className="col">
            <h4><strong>SUBTOTAL</strong></h4>
          </div><div className="col">
            <h4><strong>CANTIDAD</strong></h4>
          </div>

        </div>
      
      </div>

{/* Aquí va lo del carro con los datos */}
{/* Código que está abajo y que hay que adaptar*/}
      <h3 className='border border-success'>Total Pedido: <strong>$ Precio.-</strong></h3>
      <Button variant="success" >Ir a pagar</Button>
    </div>
  
 
  )

}

export default Carrito


// {
//     pizzaSeleccionada.map((ps, i) => {
//      return (
// <div key={i} className='bg-light m-auto p-3 border border-success'>
//     <div className="row mb-2 pb-2" >
//   <div className="col" >
//   <img src={ps.img} alt={ps.nombre} width="50" />
//   </div>
//   <div className="col">
//     <p><NavLink to={`/detalle/${ps.id}`}>{((ps.nombre).charAt(0).toUpperCase() + (ps.nombre).slice(1))}</NavLink></p> 
//   </div>
//   <div className="col">
//     <p>$ {ps.precio}.-</p>
//   </div>
//   <div className="col">
//     <p>$ {(Number(ps.precio) * ps.cantidad).toLocaleString({
//            style: "currency",
//            currency: "CPL"
//          })}.-</p>
//   </div>
//   <div className="col">
//   <div className="d-flex justify-content-around">
//            {/* <Button variant="danger" onClick={() => quitarPizza(ps.id)}>➖</Button><p className='px-2'>{ps.cantidad}</p><Button variant="primary" onClick={() => sumarPizza(ps.id)}>➕</Button> */}
//          </div>
//   </div>

// </div>

// </div>
//       )
//    })
//  }