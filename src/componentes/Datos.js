import React from 'react';
import Dato from './Dato';

const Datos = (props) => {
    return(
        <div className='widget'>
            <div className='widget__header'>
                <h3 className='widget__title'>Datos ingresados:</h3>
            </div>
        {props.datos.map((dato , index) =><Dato 
                                    key={dato[0]} 
                                    dato={dato} 
                                    count={index+1}
                                    removeIndividualData={props.removeIndividualData}
                                    className='container'
                                    />)}
        <button onClick={props.resetData} className='big__button'>Borrar todo</button>
        </div>
    );
}

export default Datos;