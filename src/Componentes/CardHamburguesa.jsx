import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import MiContexto from "../Contexto/MiContexto.jsx";
import { FiHeart } from "react-icons/fi";


const CardHamburguesa = ({ burger, fav }) => {
  const { agregarHamburguesa, hamburguesas } = useContext(MiContexto);
  const navigate = useNavigate();

            // favoritos
            const misFavoritos = (id) => {
              console.log(id)
              const click = hamburguesas.findIndex((b) => b.id === id);
              hamburguesas[click].liked = !hamburguesas[click].liked;
              
            }
          // favoritos

  const verDetalle = () => {
    navigate(`/detalle/${burger.id}`)
  }
 
  return (
    <div className="card-container" >
      <div className="cardimg">
        <img src={burger.img} alt="imagen-hamburguesa" className="imagen"></img>
        
        {!fav && <FiHeart className={burger.liked?'liked':'heart'} onClick={() => misFavoritos(burger.id)}/>}
      
      </div>
      <h4>
        {burger.nombre}
      </h4>
      <p className="desc"> {burger.desc}</p>
      <p> Precio: $ {burger.precio.toLocaleString({
        style: "currency",
        currency: "CPL"
      })}
      </p>
      <div className='buttonsdiv'>
        <button onClick={() => verDetalle()}>Ver Detalle 👀</button>
        <button onClick={() => agregarHamburguesa(burger)}>Añadir al carrito 🍔</button>
      </div>

    </div>
  )
}

export default CardHamburguesa;

