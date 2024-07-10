/*
¡Bienvenidas y bienvenidos a nuestro primer desafío!

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
Por fin, en la columna Concluido estarán los elementos ya concluidos.
El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

Buen proyecto!
*/


function encriptarTexto(){
    let texto = document.getElementById("textoUsuario").value;
    let parrafo = document.getElementById("textoEncriptadoMensaje");
    let titulo = document.getElementById("tituloMensaje");
    let imagenHombre = document.getElementById("imagenLupa");
    let mostrarBoton = document.getElementById("botonCopiar");

    let textoCifrado = texto
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

        console.log(textoCifrado)

    
    if (texto.length != 0) {
        texto = textoCifrado;
        parrafo.textContent= texto;
        
    } else {
        alert("Debe ingresar un texto");
    }

    imagenHombre.style.display = "none";
    titulo.style.display = "none";
    mostrarBoton.style.display = "block";

}

function desencriptarTexto(){
    let texto = document.getElementById("textoUsuario").value;
    let parrafo = document.getElementById("textoEncriptadoMensaje");
    let titulo = document.getElementById("tituloMensaje");
    let imagenHombre = document.getElementById("imagenLupa");
    let mostrarBoton = document.getElementById("botonCopiar");

    let textoCifrado = texto
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');

        console.log(textoCifrado)

    
    if (texto.length != 0) {
        texto = textoCifrado;
        parrafo.textContent= texto;
        
    } else {
        alert("Debe ingresar un texto");
    }

    imagenHombre.style.display = "none";
    titulo.style.display = "none";
    mostrarBoton.style.display = "block";

}









