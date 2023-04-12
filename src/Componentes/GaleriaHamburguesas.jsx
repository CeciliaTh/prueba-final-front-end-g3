import { useContext } from 'react';
import CardHamburguesa from './CardHamburguesa';
import MiContexto from "../Contexto/MiContexto";

const GaleriaHamburguesas = ({fav = false}) => {
    const { hamburguesas } = useContext(MiContexto);


  return (
      <div className="container-general">
          <div className=" d-flex mb-4 gap-4">
              <div className="menu-container">

                  {hamburguesas.filter((burger) => {
                    if(fav){
                        return burger.liked?burger:null;
                    }else {
                        return burger;
                    }
                  }).map((burger) => <div key={burger.id}>{<CardHamburguesa burger={burger}></CardHamburguesa>}</div>)}
              </div>
          </div>
      </div>
  )
}

export default GaleriaHamburguesas