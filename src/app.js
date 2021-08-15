import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './estilos/base/_setting.scss';
import '../node_modules/normalize.css/normalize.css'
import './estilos/estilo.scss';


ReactDOM.render(<AppRouter />, document.getElementById('app'))