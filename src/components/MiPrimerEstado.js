import React, { useState } from 'react';

export const MiPrimerEstado = () => {
  
    /*
    //Problematica
    let nombre = "Diego Andres";

    const cambiarNombre = e => {
        nombre = "Max Power";
    };
    */
    
    const [nombre, setNombre] = useState("Diego Andrés");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target)
    }
  
    return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}        
            </strong>
            &nbsp;
            <button onClick={ e => cambiarNombre (e, "Max Power") }>
            Cambiar nombre por Max
            </button>
            <input type="text" onKeyUp={ e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre' />
    </div>
  )
}
