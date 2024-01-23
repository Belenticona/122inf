import React from 'react';

function Boton({onClick,usuario,contraseña}){
    
    const handleClick =()=>{
        onClick (usuario,contraseña);
    };
    return(
        <button onClick={handleClick}>
            Registrar
        </button>
    );
}
export default Boton;