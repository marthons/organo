import { useState } from 'react';
import Banner from './componente/Banner/Banner';
import Formulario from './componente/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdcionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdcionado(colaborador)} />
    </div>
  );
}

export default App;
