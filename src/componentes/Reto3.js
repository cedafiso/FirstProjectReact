import React from 'react';
import Header from './Header';
import AddDatos from './AddDatos';
import Datos from './Datos'
import Confirmacion from './Confirmacion';

export default class Reto3 extends React.Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.resetData = this.resetData.bind(this);
        this.removeIndividualData = this.removeIndividualData.bind(this);
        this.resetDataAll = this.resetDataAll.bind(this);
        this.clearModal = this.clearModal.bind(this);
        this.state = {
            datos : [],
            confirmacion: false
        };
    }
    removeIndividualData(datoToRemove){
        this.setState((prevState)=> {
            return {
                datos: prevState.datos.filter((dato) => dato !== datoToRemove)
            }
        });

    }
    resetData(){
        this.setState(()=> {
            return {
                confirmacion: true
            }
        });
    }
    resetDataAll(){
        this.setState(() =>({datos :[], confirmacion: false}));
    }
    clearModal(){
        this.setState(()=> {
            return {
                confirmacion: false
            }
        });
    }
    fetchData(nombre, id, municipio ="NN", tipoCuerpo="NN", tipo_agua="NN", irca="0.0"){
        this.setState((prevState) => {
            const newData = prevState.datos;
            newData.push([nombre, id, municipio, tipoCuerpo, tipo_agua, irca]);
            return {
                datos: newData
            };
        });
    }
    render(){
        const title = 'Reto 3';
        const subtitle ='Mision TIC 2022';
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className='container'>
                    <AddDatos
                    fetchData={this.fetchData}
                    />
                    <Datos 
                    datos={this.state.datos}
                    removeIndividualData={this.removeIndividualData}
                    resetData={this.resetData}
                    />
                </div>
                <Confirmacion
                    resetDataAll={this.resetDataAll}
                    confirmacion={this.state.confirmacion}
                    clearModal={this.clearModal}
                />
            </div>
        );
    }
}