import {useContext} from "react"
import MiContexto from "../Contexto/MiContexto"
import CardHamburguesa from "../Componentes/CardHamburguesa.jsx"



const Home = () => {

  const {hamburguesas} = useContext(MiContexto);


  return (

    <div>
      <div className="menu-container">
        {hamburguesas.map((objeto)=>  <div>{<CardHamburguesa objeto={objeto}></CardHamburguesa>}</div>)}
      </div>
    </div>
  )
}

export default Home