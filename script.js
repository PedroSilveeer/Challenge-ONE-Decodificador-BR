const entradaTexto = document.querySelector (".entrada-texto");
const saidaTexto = document.querySelector (".saida-texto")



function btnEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value)
    saidaTexto.value = textoEncriptado
    saidaTexto.style.backgroundImage = "none"

}

function encriptar(stringEncriptada){
    
    let matrizBase = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for (let i = 0; i < matrizBase.length; i++){
        if (stringEncriptada.includes(matrizBase[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizBase[i][0], matrizBase[i][1]);

        }            
        
    }
    return stringEncriptada;
}


function btnDesencriptar(stringDesencriptada) {
    const textoDesencriptado = desencriptar(entradaTexto.value)
    saidaTexto.value = textoDesencriptado
    saidaTexto.style.backgroundImage = "none"

}



function desencriptar(stringDesencriptada){
    
    let matrizBase = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for (let i = 0; i < matrizBase.length; i++){
        if (stringDesencriptada.includes(matrizBase[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizBase[i][1], matrizBase[i][0]);

        }            
        
    }
    return stringDesencriptada;
}

function copiar(){
    const texto =  document.querySelector(".saida-texto");
    texto.select();
    navigator.clipboard.writeText(texto.value);
    texto.value = "";

}

function limpar(){
    const texto = document.querySelector(".saida-texto");
    texto.select();
    texto.value = ""
}



