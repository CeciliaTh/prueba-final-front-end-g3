
const CardHamburguesa = ({ objeto }) => {
  return (
      <div className="card-container">
      <div>
        <img src={objeto.img} alt="imagen-hamburguesa" className="imagen"></img>
      </div>
      <h4>
        {objeto.nombre}
      </h4>
      <p className="desc"> {objeto.desc}</p>
      <p> precio: $ {objeto.precio}</p>
      <button>Ver</button>
    </div>
  )
}

export default CardHamburguesa;