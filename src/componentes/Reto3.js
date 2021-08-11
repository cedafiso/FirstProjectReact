import React from 'react';
import Header from './Header';
import AddDatos from './AddDatos';
import Datos from './Datos'

export default class Reto3 extends React.Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.resetData = this.resetData.bind(this);
        this.removeIndividualData = this.removeIndividualData.bind(this);
        this.state = {
            datos : []
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
        this.setState(() =>({datos :[]}));
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
                <AddDatos
                fetchData={this.fetchData}
                />
                <Datos 
                datos={this.state.datos}
                removeIndividualData={this.removeIndividualData}
                resetData={this.resetData}
                />
            </div>
        );
    }
}