/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Mi codigo empieza aqui

//Creo mi función y le asigno un nombre "generarCartas" dentro de mi función creo mis variables.

function generarCartas() {
  //construyo una variables nuevas con otro nombre y llamo a mis clases creada en Html.

  const simbolo01 = document.querySelector(".header");
  const numeros = document.querySelector(".body");
  const simbolo02 = document.querySelector(".footer");

  //contruyo mis variables les asigno el array con los sigbolo y los numeros.

  const cards = ["♦", "♥", "♠", "♣"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  //declaro otra variable nueva con otro nombre y la pongo igual a mi array.

  const simbologia = Array => {
    //dentro de mi array declaro otra variable nueva con otro nombre y la pongo.
    //igual a la funcion math.random.

    let value = Math.floor(Math.random() * Array.length);
    return Array[value];
  };

  //fuera del array declaro otra variable nueva y la pongo igual a la variable del array "simbologia"
  //le introduzco el parametro donde estan los iconos de cartas (cards).
  // le declaro la condicional "if" con una operacion logica.

  let colorState = 0;

  let raSimbolo = simbologia(cards);
  if (raSimbolo == "♦" || raSimbolo == "♥") {
    //Aqui dentro de la condicion llamo a mis variables que cree para llamar a las de Html. y les aplico style.
    //especial mente "heard y footer" a las que quiero cambiar el color de los dos icono a rojo.

    simbolo01.style.color = "red";
    simbolo02.style.color = "red";
  } else {
    simbolo01.style.color = "black";
    simbolo02.style.color = "black";
  }

  //declaro otra variable nueva y la pongo tambien igual a la variable del array "simbologia".
  //y le introduzco el parametros donde estan los numeros y las letras (values).

  let raNunero = simbologia(values);

  //aqui aplico la referencia de la API Web. element.innerHTML para que me devuelva. al establecerse se reemplaza la sintaxis HTML del elemento por la nueva creada.
  //las variables ultimas creadas que son igual a la variable del array y sus parametros.

  simbolo01.innerHTML = raSimbolo;
  numeros.innerHTML = raNunero;
  simbolo02.innerHTML = simbolo01.innerHTML;
}

//creo mi onload fuera de la funcion  para crear mis eventos tan pronto como la pagina haya cargado.

window.onload = function() {
  //dentro de onload creo una nueva variable y la pongo al id del boton del html y le aplico el evento click

  let boton = document.getElementById("centerButton");
  boton.addEventListener("click", generarCartas);

  //Dentro del onload llamo a la función de generarCartas() y tambien la función del temporizador setInterval() que genera carta automatica segun el tiempo que pongas.
  //Genera carta sin refrescar la pagina inmediatamente cada 5 segundos.

  generarCartas();
  setInterval(generarCartas, 5000);
};
