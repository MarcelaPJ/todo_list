import React from 'react';
import './VerLista.css';

const VerLista = (props) => {
    const { list, setList, index, tarea } = props;

    const eliminarTarea = (e) => {
        const nuevaLista= () => list.filter((tarea) => list.indexOf(tarea) !== index);
        setList(nuevaLista);
    };

    const completarTarea = (e) => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return (
        <div className="verlista">
            <h3>{tarea.name}</h3>
            <label>Completada</label>
            <input type="checkbox" name="" checked={tarea.isComplete} onChange={completarTarea}/>
            <button onClick={eliminarTarea}>Eliminar</button>
        </div>
    )
}

export default VerLista;