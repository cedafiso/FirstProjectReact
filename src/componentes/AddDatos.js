import React from 'react';

export default class AddDatos extends React.Component {
    constructor (props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    fetchData (e) {
        e.preventDefault();
        const nombre = e.target.elements.nombre.value.trim();
        const id = e.target.elements.id.value.trim();
        const municipio = e.target.elements.municipio.value.trim();
        const tipoCuerpo = e.target.elements.tipo_cuerpo.value.trim();
        const tipoAgua = e.target.elements.tipo_agua.value.trim();
        const irca = e.target.elements.irca.value.trim();
        if(nombre && id){
            this.props.fetchData(nombre, id, municipio, tipoCuerpo, tipoAgua, irca);
            e.target.elements.nombre.value = '';
            e.target.elements.id.value = '';
            e.target.elements.municipio.value = '';
            e.target.elements.tipo_cuerpo.value = '';
            e.target.elements.tipo_agua.value = '';
            e.target.elements.irca.value = '';
        }
    }
    render() {
        return (
            <div className ='addDatos'>
                <form 
                onSubmit={this.fetchData}
                >
                    <div className='form'>
                        <div className='addDatos__columna'>
                        <h4 id='label_datos'>Nombre:</h4>
                        <input type='text' name='nombre'></input>
                        <h4 id='label_datos'>ID:</h4>
                        <input type='text' name='id'></input>
                        <h4 id='label_datos'>Municipio:</h4>
                        <input type='text' name='municipio'></input>
                        </div>
                        <div className='addDatos__columna'>
                        <h4 id='label_datos'>Tipo cuerpo de agua:</h4>
                        <input type='text' name='tipo_cuerpo'></input>
                        <h4 id='label_datos'>Tipo agua:</h4>
                        <input type='text' name='tipo_agua'></input>
                        <h4 id='label_datos'>IRCA: </h4>
                        <input type='text' name='irca'></input>
                        </div>
                    </div>
                    <button className='button'>Ingresar</button>
                </form>
            </div>
        );
    }
}