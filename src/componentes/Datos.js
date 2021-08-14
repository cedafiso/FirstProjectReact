import React from 'react';
import Dato from './Dato';

const Datos = (props) => {
    return(
        <div className='datos'>
            <div>
                <h3>Datos ingresados:</h3>
            </div>
        {props.datos.map((dato) =><Dato 
                                    key={dato[0]} 
                                    dato={dato} 
                                    removeIndividualData={props.removeIndividualData}
                                    className='container'
                                    />)}
        <button onClick={props.resetData} className='big__button'>Borrar todo</button>
        </div>
    );
}

export default Datos;