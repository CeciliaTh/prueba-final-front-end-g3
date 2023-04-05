import {useContext} from "react"
import MiContexto from "../Contexto/MiContexto"
import CardHamburguesa from "../Componentes/CardHamburguesa.jsx"



const Home = () => {

  const {hamburguesas} = useContext(MiContexto);


  return (

    <div>
      <div className="menu-container">
        {hamburguesas.map((burger)=>  <div key={burger.id}>{<CardHamburguesa burger={burger}></CardHamburguesa>}</div>)}
      </div>
    </div>
  )
}

export default Home