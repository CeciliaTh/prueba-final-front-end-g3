import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Estilos/Estilos.css";
import MiContexto from "./Contexto/MiContexto.jsx";
import Home from "./Views/Home.jsx";
import Barra from "./Componentes/Barra.jsx";
import Perfil from "./Views/Perfil.jsx";
import Login from "./Componentes/Login.jsx";
import Registro from "./Views/Registro.jsx";
import Footer from "./Componentes/Footer.jsx"
import MenuHamburguesas from "./Componentes/MenuHamburguesas.jsx";
import Detalle from "./Views/Detalle.jsx";
import Carrito from "./Views/Carrito";
import Favoritos from "./Views/Favoritos";
import NotFound from "./Views/NotFound";
import Barraprivada from "./Componentes/Barraprivada";
import Comentarios from "./Views/Comentarios.jsx";


function App() {
 // const endpoint2 = window.location.origin+'/burgers.json'
  const [hamburguesas, setHamburguesas] = useState([]);
  const [hamburguesasSort, setHamburguesasSort] = useState([]);
  const [burgerSeleccionada, setBurgerSeleccionada] = useState([]);
  const [totalSeleccionadas, setTotalSeleccionadas] = useState(0);
  const [conectado, setConectado] = useState(false);
  const [listaUsuarios, setListausuarios] = useState([]);
  const [orden, setOrden] = useState('0');
  const [usuarioActual, setUsuarioActual] = useState({});
  //const [comentarios, setcomentarios] = useState([]);
  //Compartir este estado en el contexto


  async function getHamburguesas() {
    const res = await fetch("/burgers.json");
    const data = await res.json();
    setHamburguesas(data);
    setHamburguesasSort(data);
  }


  async function getListaUsuarios() {
    const res = await fetch("/usuarios.json");
    const data = await res.json();
    setListausuarios(data);
  }

  const agregarHamburguesa = (burger) => {
    const indexNB = burgerSeleccionada.findIndex((bs) => bs.id === burger.id);


    if (indexNB > -1) {
      burgerSeleccionada[indexNB].cantidad += 1;
      setBurgerSeleccionada([...burgerSeleccionada])
      alert("Hamburguesa agregada")
    
    }
    else {
        const nuevaBurgerSeleccionada = {nombre: burger.nombre, 
                                        id: burger.id, 
                                        precio: burger.precio, 
                                        imagen: burger.img,
                                        cantidad: 1};
        setBurgerSeleccionada([...burgerSeleccionada, nuevaBurgerSeleccionada]);
        alert("Hamburguesa agregada")
      
    }
    setTotalSeleccionadas(totalSeleccionadas + burger.precio)
    
  }

  useEffect(() => {
    getHamburguesas();
    getListaUsuarios();
  }, [])


  return (
    <div >


