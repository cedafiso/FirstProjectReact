const datos = [];
const app= {
    titulo: 'Reto 3',
}
const fetchData = (e) =>{
    e.preventDefault();
    const nombre = e.target.elements.nombre.value;
    const id = e.target.elements.id.value;
    const municipio = e.target.elements.municipio.value;
    const tipoCuerpo = e.target.elements.tipo_cuerpo.value;
    const tipoAgua = e.target.elements.tipo_agua.value;
    const irca = e.target.elements.irca.value;

    if(nombre && id){
        datos.push([nombre,id,municipio,tipoCuerpo,tipoAgua,irca])
        e.target.elements.nombre.value = '';
        e.target.elements.id.value = '';
        e.target.elements.municipio.value = '';
        e.target.elements.tipo_cuerpo.value = '';
        e.target.elements.tipo_agua.value = '';
        e.target.elements.irca.value = '';
    }
    renderApp();
}

const processData = (e) => {
    e.preventDefault();
    
}

const appRoot = document.getElementById("app");
const renderApp= () => {
    const template = 
    <div>
        <form onSubmit={fetchData}>
            <h1>{app.titulo}</h1>
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
        <ol>
         {
             datos.map((dato) =><li key={dato[1]}>{dato.join(" ")}</li>)
         }   
        </ol>

    </div>;
    ReactDOM.render(template, appRoot);
};
renderApp();