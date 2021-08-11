import React from 'react';

const Dato = (props) => {
    return (
        <div>
                {props.dato.join(" ")}
                <button onClick={(e) => props.removeIndividualData(props.dato)}>Eliminar</button>
        </div>
    );
}

export default Dato;