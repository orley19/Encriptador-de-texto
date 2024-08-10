// Función para encriptar el texto
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para copiar el texto al portapapeles
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado al portapapeles!");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

// Función para mostrar el resultado en la pantalla
function mostrarResultado(resultado) {
    const areaResultado = document.getElementById("area-resultado");
    areaResultado.value = resultado;
    areaResultado.style.display = "block";  // Mostrar el área de resultado
    document.getElementById("boton-copiar").style.display = "block";  // Mostrar el botón de copiar
}

// Función para ocultar el mensaje de "Ningún mensaje fue encontrado"
function ocultarMensaje() {
    document.getElementById("mensaje-no-encontrado").style.display = "none";
}

// Evento para el botón de encriptar
document.querySelector(".boton--encriptar").addEventListener("click", () => {
    const texto = document.querySelector(".area--texto").value;
    const resultado = encriptar(texto);
    mostrarResultado(resultado);
    ocultarMensaje();
});

// Evento para el botón de desencriptar
document.querySelector(".boton--desencriptar").addEventListener("click", () => {
    const texto = document.querySelector(".area--texto").value;
    const resultado = desencriptar(texto);
    mostrarResultado(resultado);
    ocultarMensaje();
});

// Evento para el botón de copiar
document.getElementById("boton-copiar").addEventListener("click", () => {
    const texto = document.getElementById("area-resultado").value;
    copiarTexto(texto);
});

// Asegurarse que solo letras minúsculas sean ingresadas
document.querySelector(".area--texto").addEventListener("input", function() {
    this.value = this.value.toLowerCase().replace(/[^a-z\s]/g, '');
});
