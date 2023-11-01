import React, { useState } from 'react';
import './App.css';
import Encuestas from './components/Encuestas';



function App() {

  const [encuestas] = useState ( [
    { id: 1, pregunta: '¿Cual es tu color favorito?', opciones:
  ['Rojo ' ,'Azul ' ,'Verde'] },
    { id: 2, pregunta: '¿Cual es tu comida favorita?', opciones:
  ['Pizza ' ,'Hamburguesa ' ,'Sushi'] },
   ]);


  return (
    <div className="App">
      <h1>Aplicacion de Encuestas</h1>
      
      <Encuestas encuestas={encuestas} />
    </div>
  );
}

export default App;
