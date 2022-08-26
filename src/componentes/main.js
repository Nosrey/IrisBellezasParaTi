import react, { useState } from 'react';
import './main.css';

function Main() {

  const [dolar, setDolar] = useState(0);
  const [montoCliente, setmontoCliente] = useState(0);
  const [precioProducto, setprecioProducto] = useState(0);

  let handleChangeDolar = function (e) {
    setDolar(e.target.value);
  }
  let handleChangemontoCliente = function (e) {
    setmontoCliente(e.target.value);
  }
  let handleChangeprecioProducto = function (e) {
    setprecioProducto(e.target.value);
    calcular();
  }

  let calcular = function () {
    let mano = Number(montoCliente) - Number(precioProducto);
    let bolivares = mano;
    while (bolivares >= 1) {
      --bolivares;
    }
    mano = mano - bolivares;
    if (bolivares != 0 && bolivares < 1) {
      bolivares = bolivares * Number(dolar);
    }
    // return 'el monto es: ' + (mano >= 1 ? mano : 0) + '$ y ' + (bolivares < 0 ? 0 : bolivares) + ' bolivares';
    return (mano >= 1 ? mano : 0) + '$ y ' + (bolivares < 0 ? 0 : bolivares.toFixed(1)) + 'Bs';
  }

  return (
    <div id="global">
      <div id="cajaDatos">
        <h1>¿Cuanto vuelto dar?</h1>
        <div id="datos">
          <span id="dolarBlock">
            <h2>Dolar: </h2>
            <input id="dolar" type="search" name="1" value={dolar} onChange={handleChangeDolar} />
          </span>
          <span id="montoClienteBlock">
            <h2>Cliente: </h2>
            <input id="montoCliente" type="search" name="1" value={montoCliente} onChange={handleChangemontoCliente} />
          </span>
          <span id="precioProductoBlock">
            <h2>Productos: </h2>
            <input id="precioProducto" type="search" name="1" value={precioProducto} onChange={handleChangeprecioProducto} />
          </span>
        </div>
      </div>

      <p>{calcular()}</p>
    </div>
  );
}

export default Main;