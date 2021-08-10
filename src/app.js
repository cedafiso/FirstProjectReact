class Reto3 extends React.Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.resetData = this.resetData.bind(this);
        this.state = {
            datos : []
        };
    }
    resetData(){
        this.setState(() =>{
            return {
                datos :[]
            }
        });
    }
    fetchData(nombre, id, municipio, tipoCuerpo, tipo_agua, irca){
        this.setState((prevState) => {
            const newData = prevState.datos;
            newData.push([nombre, id, municipio, tipoCuerpo, tipo_agua, irca]);
            return {
                datos: newData
            };
        });
        console.log(this.state.datos);
    }
    render(){
        const title = 'Reto 3';
        const subtitle ='Mision TIC 2022';
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <AddDatos 
                fetchData={this.fetchData}
                resetData={this.resetData}
                />
                <Datos datos={this.state.datos}/>
            </div>
        );
    }
}
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}
class AddDatos extends React.Component {
    constructor (props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    fetchData (e) {
        e.preventDefault();
        const nombre = e.target.elements.nombre.value.trim();
        const id = e.target.elements.id.value.trim();
        const municipio = e.target.elements.municipio.value;
        const tipoCuerpo = e.target.elements.tipo_cuerpo.value;
        const tipoAgua = e.target.elements.tipo_agua.value;
        const irca = e.target.elements.irca.value;
    
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
                <button onClick={this.props.resetData}>Reset</button>
            </div>
        );
    }
}

class Datos extends React.Component{
    render() {
        return (
            <div>
                {this.props.datos.map((dato) =><Dato key={dato[0]} dato={dato}/>)}
            </div>
        );
    }
}
class Dato extends React.Component{
    render(){
        return(
            <div>
                {this.props.dato.join(" ")}
            </div>
        );
    }
}

ReactDOM.render(<Reto3 />, document.getElementById('app'))