import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const clickMenos3 = () => {
    setNumClicks(nroClicks -3);
  }
  const clickmas3 = () => {
    setNumClicks(nroClicks + 3);
  }
  const clickmenos1 = () => {
    setNumClicks(nroClicks -1);
  }
  const clickmas1 = () => {
    setNumClicks(nroClicks + 1);
  }
  const reiniciar = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className="contendedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones-numeros '>
          <div className='contendedor-botones'>
              <Boton texto="+3" esBotonClick={true}
              funcionClick={clickmas3} />
              <Boton texto="-3" esBotonClick={true}
              funcionClick={clickMenos3} />
              <Boton texto="+1" esBotonClick={true}
              funcionClick={clickmas1} />
              <Boton texto="-1" esBotonClick={true}
              funcionClick={clickmenos1} />
            </div>
          <Boton texto="Reiniciar" esBotonClick={false}
          funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
  }

export default App;