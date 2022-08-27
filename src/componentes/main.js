import react, { useState } from 'react';
import './main.css';

function Main() {

  const [Dolar, setDolar] = useState(0);
  const [Bcv, setBcv] = useState(0);
  const [Pago, setPago] = useState(0);
  const [Costo, setCosto] = useState(0);

  let handleChangeDolar = function (e) {
    setDolar(e.target.value);
  }
  let handleChangeBcv = function (e) {
    setBcv(e.target.value);
  }
  let handleChangePago = function (e) {
    setPago(e.target.value);
  }
  let handleChangeCosto = function (e) {
    setCosto(e.target.value);
    calcular();
  }

  let calcular = function () {
    let mano = Number(Pago) - ((Number(Costo) * Number(Dolar)) / Number(Bcv)) 
    let bolivares = mano;
    while (bolivares >= 1) {
      --bolivares;
    }
    mano = mano - bolivares;
    if (bolivares !== 0 && bolivares < 1) {
      bolivares = bolivares * Number(Bcv);
    }
    // return 'el monto es: ' + (mano >= 1 ? mano : 0) + '$ y ' + (bolivares < 0 ? 0 : bolivares) + ' bolivares';
    return (
      (mano >= 1 ? mano : 0) + '$ y ' + (isNaN(Number(bolivares)) ? 0 : (bolivares < 0 ? 0 : bolivares.toFixed(1))) + 'Bs'
    )
  }

  let bolos = function () {
    let total = Number(Costo) * Number(Dolar);
    let costito = Number(total) / Number(Bcv);
    let decimal = costito;
    while (decimal >= 1) {
      --decimal;
    }
    costito = costito - decimal;
    decimal = decimal * Number(Bcv);
    return total.toFixed(1) + 'Bs o ' + (isNaN(costito) ? 0 : costito) + '$ y ' + (isNaN(decimal) ? 0 : decimal.toFixed(1)) + 'Bs'
  }

  return (
    <div id="global">
      <div id="cajaDatos">
        <h1>¿Cuanto vuelto dar?</h1>
        <div id="datos">
          <span id="DolarBlock">
            <h2>Dolar $: </h2>
            <input id="Dolar" type="search" name="1" value={Dolar} onChange={handleChangeDolar} />
          </span>
          <span id="BcvBlock">
            <h2>BCV $: </h2>
            <input id="Bcv" type="search" name="1" value={Bcv} onChange={handleChangeBcv} />
          </span>
          <span id="PagoBlock">
            <h2>Pago: </h2>
            <input id="Pago" type="search" name="1" value={Pago} onChange={handleChangePago} />
          </span>
          <span id="CostoBlock">
            <h2>Costo: </h2>
            <input id="Costo" type="search" name="1" value={Costo} onChange={handleChangeCosto} />
          </span>
        </div>
      </div>
      <div>
        <h3>El costo es:</h3>
        <p>{bolos()}</p>
      </div>
      <hr />
      <div>
        <h3>El vuelto es:</h3>
        <p>{calcular()}</p>
      </div>
    </div>
  );
}

export default Main;