import react, { useState } from 'react';
import './main.css';

function Main() {
  let pagar = 0;
  let bolivares = 0;

  const [dolar, setDolar] = useState(0);
  const [monto, setMonto] = useState(0);
  const [precioBar, setPrecioBar] = useState(0);

  let handleChangeDolar = function (e) {
    setDolar(e.target.value);
  }
  let handleChangeMonto = function (e) {
    setMonto(e.target.value);
  }
  let handleChangePrecioBar = function (e) {
    setPrecioBar(e.target.value);
    calcular();
 }

  let calcular = function () {
    let mano = Number(monto) - Number(precioBar);
    let bolivares = mano;
    while(bolivares >= 1) {
      --bolivares;
    }
    mano = mano - bolivares;
    if (bolivares != 0 && bolivares < 1) {
      bolivares = bolivares * Number(dolar);
    }
    return 'el monto es: ' + (mano >= 1 ? mano : 0) + '$ y ' + (bolivares < 0 ? 0 : bolivares) + ' bolivares';
  }
  return (
    <div>
      <h1>Conversor de precios</h1>
      <h2>Ingresa el precio del dolar: </h2>
      <input id="dolar" type="search" name="1" value={dolar} onChange={handleChangeDolar} />
      <br />
      <br />
      <h2>Ingresa cuanto dinero te dan: </h2>
      <input id="monto" type="search" name="1" value={monto} onChange={handleChangeMonto} />
      <br />
      <br />
      <h2>Ingresa el precio de los productos: </h2>
      <input id="precioBar" type="search" name="1" value={precioBar} onChange={handleChangePrecioBar} />
      <br />
      <br />
      <p>{calcular()}</p>
    </div>
  );
}

export default Main;