import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import MiContexto from "../Contexto/MiContexto.jsx";
import { FiHeart } from "react-icons/fi";


const CardHamburguesa = ({ burger, fav }) => {
  const { agregarHamburguesa, hamburguesas, setHamburguesas, conectado } = useContext(MiContexto);
  const navigate = useNavigate();


    
          const setFav = (id) => {

            const burgerIndex =  hamburguesas.findIndex((burg)=> burg.id === id)
            hamburguesas[burgerIndex].liked = !hamburguesas[burgerIndex].liked;
            setHamburguesas([...hamburguesas]);
            
           };

  const verDetalle = () => {
    navigate(`/detalle/${burger.id}`)
  }
 
  return (
    <div className="card-container" >
      <div className="cardimg">
        <img src={burger.img} alt="imagen-hamburguesa" className="imagen"></img>
        
        {conectado && !fav && <FiHeart className={burger.liked?'liked':'heart'} onClick={() => setFav(burger.id)}/>}
      
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

