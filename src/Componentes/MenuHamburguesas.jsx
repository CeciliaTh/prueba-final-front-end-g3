import { useContext } from "react";
import MiContexto from "../Contexto/MiContexto";
import CardHamburguesa from "../Componentes/CardHamburguesa.jsx";



const MenuHamburguesas = () => {

  const { hamburguesas, hamburguesasSort, setHamburguesasSort } = useContext(MiContexto);

  const ordenarHamburguesas = (orden) => {

    if (orden !== '') {
      switch (orden) {
  
        case "precioAsc":
          const ordenPreciosAsc = [...hamburguesas] 
          setHamburguesasSort(ordenPreciosAsc.sort(function (a, b) { return a.precio - b.precio }))
          console.log(ordenPreciosAsc)
          break;
  
        case "precioDesc":
          const ordenPreciosDesc = [...hamburguesas] 
          setHamburguesasSort(ordenPreciosDesc.sort(function (a, b) { return b.precio - a.precio }))
          console.log(ordenPreciosDesc)
          break;
  
        case "original":
          setHamburguesasSort([...hamburguesas])
          console.log("pasé por original")
          break;
  
        default:
          console.log("nada")
          break;
      }
  
    } else {
      console.log(orden + "orden")
  
    }
  }
  
const buscador = (valor) => {
const hamburguesaFiltrada = hamburguesas.filter((e) => {
  return e ? e.nombre.toLowerCase().includes(valor.toLowerCase()) : hamburguesas
})
setHamburguesasSort([...hamburguesaFiltrada])
}
  return (
    
    <div className="container-general">
      <div className=" d-flex mb-4 gap-4">
        <select name="select-orden" className="form-control" onChange={(e) => ordenarHamburguesas(e.target.value)}>
          <option value="op">Selecciona una opción</option>
          <option value="precioAsc">Ordenar por precio (menor a mayor)</option>
          <option value="precioDesc">Ordenar por precio (mayor a menor)</option>
          <option value="original">Listado Inicial</option>
        </select>
      

      <input type="text" className="form-control" placeholder="Buscar por nombre" onChange={(e) => buscador(e.target.value)}/>
      </div>

      <div className="menu-container">

        {hamburguesasSort.map((burger) => <div key={burger.id}>{<CardHamburguesa burger={burger}></CardHamburguesa>}</div>)}
      </div>
    </div>
  )
}

export default MenuHamburguesas