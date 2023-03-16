import React from "react";

function SecondsCounter(props){
    let texto = props.seconds.toString();
    let unidades = texto [texto.length-1];
    let decenas = texto [texto.length-2];
    let centenas = texto [texto.length-3];
    let mil = texto [texto.length-4];
   
    return <div>
<button type="button" class="btn btn-dark">
  <i class="fas fa-clock"></i>
</button>
     <button id="diez" className="btn btn-dark">0</button>
     <button id="mil" className="btn btn-dark">{mil==undefined? 0:mil}</button>
     <button id="centenas" className="btn btn-dark">{centenas==undefined? 0:centenas}</button>
     <button id="decenas" className="btn btn-dark">{decenas== undefined? 0:decena}</button>
     <button id="unidades" className="btn btn-dark">{unidades}</button>

    </div>
}
export default SecondsCounter;