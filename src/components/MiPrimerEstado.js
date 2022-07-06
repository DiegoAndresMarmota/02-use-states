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

    const cambiarNombre = e => {
        setNombre("Max Powers");
    }
  
    return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}        
            </strong>
            &nbsp;
            <button onClick={ cambiarNombre }>
            Cambiar
            </button>
    </div>
  )
}
