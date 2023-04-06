import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Estilos/Estilos.css";
import Home from "./Views/Home.jsx";
import Barra from "./Componentes/Barra.jsx";
import Perfil from "./Views/Perfil.jsx";
import Login from "./Componentes/Login.jsx";
import Registro from "./Views/Registro.jsx";
import Footer from "./Componentes/Footer.jsx"
import MenuHamburguesas from "./Componentes/MenuHamburguesas.jsx";
import Detalle from "./Views/Detalle.jsx";
import Carrito from "./Views/Carrito";
import NotFound from "./Views/NotFound";
import MiContexto from "./Contexto/MiContexto.jsx";

function App() {
 // const endpoint2 = window.location.origin+'/burgers.json'
  const [hamburguesas, setHamburguesas] = useState([]);
  //-----------------------
  //Con este estado pretendo mostrar u ocultar elementos de la barra de navegación
  //Habrá que pasar este estado en el contexto global, pero que cambie de valor despues del login
  //const [usuarioConectado, setUsuarioConectado] = useState(false);
  //-----------------------

  async function getHamburguesas() {
    const res = await fetch("/burgers.json");
    const data = await res.json();
    setHamburguesas(data);
  }

  useEffect(() => {
    getHamburguesas();
  }, [])

  return (
    <div >
      <MiContexto.Provider value={{hamburguesas}}>
      <BrowserRouter>
      <Barra></Barra>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/perfil" element={<Perfil></Perfil>}></Route>
        <Route path="/menu" element={<MenuHamburguesas></MenuHamburguesas>}></Route>
        <Route path="/detalle/:id" element={<Detalle></Detalle>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registro" element={<Registro></Registro>}></Route>
        <Route path="/carrito" element={<Carrito></Carrito>}></Route>
        <Route path="*" element= {<NotFound></NotFound>}> </Route>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
      </MiContexto.Provider>
    </div>
  );
}

export default App;

