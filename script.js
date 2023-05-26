const textArea = document.querySelector(".TxtArea");
const mensaje = document.querySelector(".TxtMensaje");

function BtnEncriptar(){
    const TextoEncriptado = Encriptar(textArea.value);
    mensaje.value = TextoEncriptado;
    textArea,value = "";
    mensaje.style.backgroundImage = "none";
}

function BtnDesncriptar(){
    const TextoDesencriptado = Desencriptar(textArea.value);
    mensaje.value = TextoDesencriptado;
    textArea,value = "";
    mensaje.style.backgroundImage = "none";
}

function BtnCopy(){
    copyText();
}


function Encriptar(TMensaje){
    let matrizCodigo = [["e", "enter"], ["i", "imes",], ["o", "ober"], ["a", "ai"], ["u", "ufat"]];
    TMensaje = TMensaje.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(TMensaje.includes(matrizCodigo[i][0])){
            TMensaje = TMensaje.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 
    return TMensaje;
}

function Desencriptar(TMensaje){
    let matrizCodigo = [["e", "enter"], ["i", "imes",], ["o", "ober"], ["a", "ai"], ["u", "ufat"]];
    TMensaje = TMensaje.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(TMensaje.includes(matrizCodigo[i][1])){
            TMensaje = TMensaje.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 
    return TMensaje;
}

function copyText() {
    const copyText = document.querySelector(".TxtMensaje");
    copyText.select();
    document.execCommand("copy");
  }

