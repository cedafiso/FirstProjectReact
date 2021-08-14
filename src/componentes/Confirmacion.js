import React from 'react';
import ReactModal from 'react-modal';

const Confirmacion = (props) =>{
    return (
        <ReactModal
        isOpen={props.confirmacion}
        onRequestClose={props.clearModal}
        closeTimeoutMS ={200} 
        contentLabel="Confirmacion borrar datos"
        className='modal'
        >
            <h3 className='modal__title'>Desea eleminar todos los datos?</h3>
            <div className='button__container'>
                <button className='button button-modal' onClick={props.resetDataAll}>Confirmar</button>
                <button className='button button-modal' onClick={props.clearModal}>Cancelar</button>
            </div>
        </ReactModal>
    )
};

export default Confirmacion;