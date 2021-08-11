import React from 'react';
import ReactDOM from 'react';
class Reto3 extends React.Component{
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
// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.subtitle}</h3>
//             </div>
//         );
//     }
// }
class AddDatos extends React.Component {
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
            <div>
                <form onSubmit={this.fetchData}>
                    <h4 id='label_datos'>Nombre:</h4>
                    <input type='text' name='nombre'></input>
                    <h4 id='label_datos'>ID:</h4>
                    <input type='text' name='id'></input>
                    <h4 id='label_datos'>Municipio:</h4>
                    <input type='text' name='municipio'></input>
                    <h4 id='label_datos'>Tipo cuerpo de agua:</h4>
                    <input type='text' name='tipo_cuerpo'></input>
                    <h4 id='label_datos'>Tipo agua:</h4>
                    <input type='text' name='tipo_agua'></input>
                    <h4 id='label_datos'>IRCA: </h4>
                    <input type='text' name='irca'></input>
                    <button>Ingresar</button>
                </form>
            </div>
        );
    }
}

// class Datos extends React.Component{
//     render() {
//         return (
//             <div>
//                 {this.props.datos.map((dato) =><Dato key={dato[0]} dato={dato}/>)}
//             </div>
//         );
//     }
// }
// class Dato extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.dato.join(" ")}
//             </div>
//         );
//     }
// }
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
const Dato = (props) => {
    return (
        <div>
                {props.dato.join(" ")}
                <button onClick={(e) => props.removeIndividualData(props.dato)}>Eliminar</button>
        </div>
    );
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
}
ReactDOM.render(<Reto3 />, document.getElementById('app'))