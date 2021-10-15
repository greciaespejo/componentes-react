import './App.css';
import ComponenteDeClase from './ComponenteDeClase';
import ComponenteDeFuncion from './ComponenteDeFuncion';

function App() {
  return (
    <div className="App">
      <ComponenteDeFuncion nombre="Mundo" edad="26" />
      <ComponenteDeClase nombre="Universo"/>
    </div>
  );
}

export default App;
