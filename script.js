const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".caixa-texto");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
    aparece()
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
     
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
   }
} 

   return stringEncriptada;
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"  
    aparece()
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i =0; i < matrizCodigo.length; i++) {
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptar;
}

 function btnCopiar() {
    const mensagem = document.querySelector(".caixa-texto")
    mensagem.select();
      navigator.clipboard.writeText(mensagem.value);
      mensagem.value = "";
 }

function aparece() {
    document.getElementById("naoexibir").style.display = 'none';
    document.getElementById("naoexibir2").style.display = 'none';
}


