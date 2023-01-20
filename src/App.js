import "./App.css";
import Boton from './componentes/Boton';
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {

const [numClics, setNumClics] = useState(0);

const manejarClic = () => {
  setNumClics(numClics + 1);
};

const reiniciarContador = () => {
  setNumClics(0);
};

  return (
    <div className="App">
      <div className="title"> <h1>¡Contador de clics con React!</h1>
      <p>Usando Hooks y Props</p>
      {/* <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src= {freecodecamp }
        alt='Logo de freeCodeCamp'
        /> */}
      <div className='contenedor-principal'>
        <Contador numClics={ numClics } />
      </div>
      <Boton
        texto="Click"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
      <Boton
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
        <div className="footer"><h2>Nicolás Minicucci - Front End developer</h2></div>
      </div>
    </div>
  );
}

export default App;
