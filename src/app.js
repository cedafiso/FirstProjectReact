class Header extends React.Component {
    render(){
        return <p>This is from header</p>;
    }
}

const jsx = (
    <div>
    <Header />
    </div>
)
ReactDOM.render(jsx, document.getElementById('app'))