'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reto3 = function (_React$Component) {
    _inherits(Reto3, _React$Component);

    function Reto3(props) {
        _classCallCheck(this, Reto3);

        var _this = _possibleConstructorReturn(this, (Reto3.__proto__ || Object.getPrototypeOf(Reto3)).call(this, props));

        _this.fetchData = _this.fetchData.bind(_this);
        _this.resetData = _this.resetData.bind(_this);
        _this.state = {
            datos: []
        };
        return _this;
    }

    _createClass(Reto3, [{
        key: 'resetData',
        value: function resetData() {
            this.setState(function () {
                return {
                    datos: []
                };
            });
        }
    }, {
        key: 'fetchData',
        value: function fetchData(nombre, id, municipio, tipoCuerpo, tipo_agua, irca) {
            this.setState(function (prevState) {
                var newData = prevState.datos;
                newData.push([nombre, id, municipio, tipoCuerpo, tipo_agua, irca]);
                return {
                    datos: newData
                };
            });
            console.log(this.state.datos);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Reto 3';
            var subtitle = 'Mision TIC 2022';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(AddDatos, {
                    fetchData: this.fetchData,
                    resetData: this.resetData
                }),
                React.createElement(Datos, { datos: this.state.datos })
            );
        }
    }]);

    return Reto3;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h3',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var AddDatos = function (_React$Component3) {
    _inherits(AddDatos, _React$Component3);

    function AddDatos(props) {
        _classCallCheck(this, AddDatos);

        var _this3 = _possibleConstructorReturn(this, (AddDatos.__proto__ || Object.getPrototypeOf(AddDatos)).call(this, props));

        _this3.fetchData = _this3.fetchData.bind(_this3);
        return _this3;
    }

    _createClass(AddDatos, [{
        key: 'fetchData',
        value: function fetchData(e) {
            e.preventDefault();
            var nombre = e.target.elements.nombre.value.trim();
            var id = e.target.elements.id.value.trim();
            var municipio = e.target.elements.municipio.value;
            var tipoCuerpo = e.target.elements.tipo_cuerpo.value;
            var tipoAgua = e.target.elements.tipo_agua.value;
            var irca = e.target.elements.irca.value;

            if (nombre && id) {
                this.props.fetchData(nombre, id, municipio, tipoCuerpo, tipoAgua, irca);
                e.target.elements.nombre.value = '';
                e.target.elements.id.value = '';
                e.target.elements.municipio.value = '';
                e.target.elements.tipo_cuerpo.value = '';
                e.target.elements.tipo_agua.value = '';
                e.target.elements.irca.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.fetchData },
                    React.createElement(
                        'h4',
                        { id: 'label_datos' },
                        'Nombre:'
                    ),
                    React.createElement('input', { type: 'text', name: 'nombre' }),
                    React.createElement(
                        'h4',
                        { id: 'label_datos' },
                        'ID:'
                    ),
                    React.createElement('input', { type: 'text', name: 'id' }),
                    React.createElement(
                        'h4',
                        { id: 'label_datos' },
                        'Municipio:'
                    ),
                    React.createElement('input', { type: 'text', name: 'municipio' }),
                    React.createElement(
                        'h4',
                        { id: 'label_datos' },
                        'Tipo cuerpo de agua:'
                    ),
                    React.createElement('input', { type: 'text', name: 'tipo_cuerpo' }),
                    React.createElement(
                        'h4',
                        { id: 'label_datos' },
                        'Tipo agua:'
                    ),
                    React.createElement('input', { type: 'text', name: 'tipo_agua' }),
                    React.createElement(
                        'h4',
                        { id: 'label_datos' },
                        'IRCA: '
                    ),
                    React.createElement('input', { type: 'text', name: 'irca' }),
                    React.createElement(
                        'button',
                        null,
                        'Ingresar'
                    )
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.resetData },
                    'Reset'
                )
            );
        }
    }]);

    return AddDatos;
}(React.Component);

var Datos = function (_React$Component4) {
    _inherits(Datos, _React$Component4);

    function Datos() {
        _classCallCheck(this, Datos);

        return _possibleConstructorReturn(this, (Datos.__proto__ || Object.getPrototypeOf(Datos)).apply(this, arguments));
    }

    _createClass(Datos, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.datos.map(function (dato) {
                    return React.createElement(Dato, { key: dato[0], dato: dato });
                })
            );
        }
    }]);

    return Datos;
}(React.Component);

var Dato = function (_React$Component5) {
    _inherits(Dato, _React$Component5);

    function Dato() {
        _classCallCheck(this, Dato);

        return _possibleConstructorReturn(this, (Dato.__proto__ || Object.getPrototypeOf(Dato)).apply(this, arguments));
    }

    _createClass(Dato, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.dato.join(" ")
            );
        }
    }]);

    return Dato;
}(React.Component);

ReactDOM.render(React.createElement(Reto3, null), document.getElementById('app'));
