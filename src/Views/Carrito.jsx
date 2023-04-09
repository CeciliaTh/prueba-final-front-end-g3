import { useContext } from "react"
import MiContexto from "../Contexto/MiContexto";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { totalPago } from '../Funciones/TotalPago.jsx';

const Carrito = () => {

  const { burgerSeleccionada, totalSeleccionadas, setBurgerSeleccionada, setTotalSeleccionadas } = useContext(MiContexto);

  const quitarHamburguesa = (id) => {
    const indexMenos = burgerSeleccionada.findIndex((ps) => ps.id === id);
    if (indexMenos > -1) {
      if (burgerSeleccionada[indexMenos].cantidad > 0) {
        burgerSeleccionada[indexMenos].cantidad -= 1;
        if (burgerSeleccionada[indexMenos].cantidad === 0) {
          burgerSeleccionada.splice(indexMenos, 1);
        }
        setBurgerSeleccionada([...burgerSeleccionada])
      }
    }

    setTotalSeleccionadas(totalPago(burgerSeleccionada));

  }

  const sumarHamburguesa = (id) => {
    const indexMenos = burgerSeleccionada.findIndex((ps) => ps.id === id);
    if (indexMenos > -1) {
      burgerSeleccionada[indexMenos].cantidad += 1;
      setBurgerSeleccionada([...burgerSeleccionada])
    }
    setTotalSeleccionadas(totalPago(burgerSeleccionada));
  }

  const monedaCarrito = (totalSeleccionadas).toLocaleString({
    style: "currency",
    currency: "CPL"
  });

  return (
<div className='p-5'>
      <h1 className="text-center text-white p-4"> DETALLE DEL PEDIDO </h1>
      <div className=' text-white m-auto p-3 border border-warning justify-content-between'>
     
        <div className="row mb-2 pb-2" >
          <div className="col" >
            <h4><strong>IMAGEN</strong></h4>
          </div>
          <div className="col">
            <h4><strong>TIPO DE HAMBURGUESA</strong></h4>
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

      {
        burgerSeleccionada.map((bs, i) => {
          return (
<div key={i} className='text-white m-auto p-3 border border-warning'>
         <div className="row mb-2 pb-2" >
       <div className="col" >
       <img src={bs.imagen} alt={bs.nombre} width="75" />
       </div>
       <div className="col">
         <p><NavLink to={`/detalle/${bs.id}`}>{bs.nombre}</NavLink></p> 
       </div>
       <div className="col">
         <p>$ {bs.precio.toLocaleString({
           style: "currency",         
           currency: "CPL"
        })}.-</p>
       </div>
       <div className="col">
         <p>$ {(Number(bs.precio) * bs.cantidad).toLocaleString({
                style: "currency",
                currency: "CPL"
              })}.-</p>
       </div>
       <div className="col">
       <div className="d-flex justify-content-around">
                <Button variant="danger" onClick={() => quitarHamburguesa(bs.id)}>➖</Button><p className='px-2'>{bs.cantidad}</p><Button variant="primary" onClick={() => sumarHamburguesa(bs.id)}>➕</Button>
            </div>
       </div>

     </div>
   
   </div>
           )
        })
      }
      <h3 className=' text-white border border-warning'>Total Pedido: <strong>$ {monedaCarrito}.-</strong></h3>
      <Button variant="success" >Ir a pagar</Button>
    </div>
  
 
  )

}

export default Carrito