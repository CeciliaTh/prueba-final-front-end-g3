import { useNavigate } from 'react-router-dom';


const CardHamburguesa = ({ burger }) => {

  const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/detalle/${burger.id}`)
  }

  return (
    <div className="card-container" >
      <div className="cardimg">
        <img src={burger.img} alt="imagen-hamburguesa" className="imagen"></img>
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
        <button onClick={() => verDetalle()}>Añadir al carrito 🍔</button>
      </div>

    </div>
  )
}

export default CardHamburguesa;

