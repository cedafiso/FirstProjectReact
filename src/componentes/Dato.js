import React from 'react';

const Dato = (props) => {
    return (
        <div>
                <div className='dato'>
                    {props.count+'. '+props.dato.join(" ")}
                    <button onClick={(e) => props.removeIndividualData(props.dato)} className='buttton_option'>Eliminar</button>
                </div>
        </div>
    );
}

export default Dato;