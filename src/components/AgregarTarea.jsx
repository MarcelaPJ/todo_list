import { useState } from 'react';

const AgregarTarea = (props) => {
    const { list, setList } = props;
    const [ agregar, setAgregar ] = useState("");

    const ingresarTarea = (e) => {
        setAgregar(e.target.value);
    }

    const enviarTarea = (e) => {
        e.preventDefault();

        let tarea = {
            name: agregar,
            isComplete: false
        };

        setList(
            [...list, tarea]
        ); e.target.value = "";

    }

    return (
        <div>
            <form onSubmit={enviarTarea}>
                <input type="text" name="tarea" placeholder="Ingresar tarea" value={agregar} onChange={ingresarTarea}/>
                <br/>
                <button> Add </button>
            </form>
            <hr/>
        </div>
    )

}

export default AgregarTarea;