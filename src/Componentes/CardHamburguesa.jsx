import { useNavigate } from 'react-router-dom';


const CardHamburguesa = ({ burger }) => {

  const id = Number(burger.id)
  const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/detalle/${burger.id}`)
  }
  console.log(typeof id)

  return (
      <div className="card-container">
      <div>
        <img src={burger.img} alt="imagen-hamburguesa" className="imagen"></img>
      </div>
      <h4>
        {burger.nombre}
      </h4>
      <p className="desc"> {burger.desc}</p>
      <p> Precio: $ {burger.precio.toLocaleString({
  style: "currency",
  currency: "CPL"
})}.-
  </p>
      <button onClick={() => verDetalle()}>Ver Detalle 👀</button>
    </div>
  )
}

export default CardHamburguesa;

