import React from 'react';
import Dato from './Dato';

const Datos = (props) => {
    return(
        <div>
        {props.datos.map((dato) =><Dato 
                                    key={dato[0]} 
                                    dato={dato} 
                                    removeIndividualData={props.removeIndividualData}
                                    />)}
        <button onClick={props.resetData}>Borrar todo</button>
    </div>
    );
}

export default Datos;