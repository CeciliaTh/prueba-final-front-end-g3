import React from 'react';
import GaleriaHamburguesas from '../Componentes/GaleriaHamburguesas.jsx';

const Favoritos = () => {
  return (
    <div className='favoritos-container'>
      <div className='favoritosview'>
        
        <GaleriaHamburguesas fav={true} ></GaleriaHamburguesas>
      </div>
    </div>
  )
}

export default Favoritos