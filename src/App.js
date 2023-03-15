import './App.css';
import { useState } from 'react';
import AgregarTarea from './components/AgregarTarea';
import VerLista from './components/VerLista';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <AgregarTarea list={list} setList={setList}/>
      {list.map((tarea, index) => (
        <VerLista key={tarea} tarea={tarea} list={list} setList={setList} index={index}/>
      ))}
    </div>
  );
}

export default App;
