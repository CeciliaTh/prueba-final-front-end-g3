import { useContext } from "react"
import MiContexto from "../Contexto/MiContexto"

const Carrito = () => {

  const { hamburguesas } = useContext(MiContexto);

  return (
    <div className='carrito-container'>
      <div className="carrito-detalle" >
        <div className="carrito-img">
          <img src={hamburguesas[0].img} alt="imagen-hamburguesa" className="imagen"></img>
        </div>
        <p>
          {hamburguesas[0].nombre}
        </p>
        <p> Precio: $ {hamburguesas[0].precio}
        </p>
        <p>Cantidad:</p>
        <div className='carrito-buttons'>
          <button>+</button>
          <button>-</button>
        </div>
        <p>Total</p>
      </div>
    </div>

    /* Aquí va lo del carro con los datos */
    /* Código que está abajo y que hay que adaptar*/


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