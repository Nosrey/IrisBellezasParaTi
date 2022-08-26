import React, { useState } from 'react';

function Prueba() {
    const [baba, setBaba] = useState(1)
    const [daniela2, setDaniela2] = useState(1);
    const [final, setFinal] = useState();

    let daniela = document.getElementById('daniela');

    var handleChange = function(e) {
        setDaniela2(Number(e.target.value));
    }
    var handleChange2 = function(e) {
        setBaba(Number(e.target.value));
        pagar()
    }
    

    var pagar = () => {
        setFinal(daniela2 + baba)
    }

    return(
        <div>
            <p>{daniela2 + baba}</p>
            <p>{daniela2+ 'soy la dan'}</p>
            <button onClick={() => setBaba(baba => baba+= 1)}>PRESIONAME</button>
            <input id="daniela" type="text" placeholder='soy dan' value={daniela2} onChange={handleChange}/>
            <input type="text" onChange={handleChange2} value={baba}/>
    
        </div>
    )
}

export default Prueba;