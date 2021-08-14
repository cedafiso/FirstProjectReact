import React from 'react';
import ReactModal from 'react-modal';

const Confirmacion = (props) =>{
    return (
        <ReactModal
        isOpen={props.confirmacion}
        onRequestClose={props.clearModal}
        contentLabel="Confirmacion borrar datos"
        >
            <h3>Desea eleminar todos los datos?</h3>
            <button onClick={props.resetDataAll}>Confirmar</button>
            <button onClick={props.clearModal}>Cancelar</button>
        </ReactModal>
    )
};

export default Confirmacion;