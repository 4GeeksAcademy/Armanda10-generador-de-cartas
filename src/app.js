/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Mi codigo empieza aqui
//contruyo mi funcion igual a window.onload para que se ejecute cuando cargue mi pagina.
//dentro de mi funcion.
//construyo una variables nuevas con otro nombre y llamo a mis clases creada en Html.

window.onload = function() {
  const numeros = document.querySelector(".header");
  const simbolo01 = document.querySelector(".body");
  const simbolo02 = document.querySelector(".footer");

  //contruyo mis variables aqui les asigno el array con los sigbolo y los numeros
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
    "J,",
    "Q",
    "K"
  ];

  //declaro otra variable nueva con notro nombre y la pongo igual a mi array que voy a crear

  const simbologia = Array => {
    //dentro de mi array declaro otra variable nueva con otro nombre y la pongo
    //igual a la funcion math.random.

    let value = Math.floor(Math.random() * Array.length);

    return Array[value];
  };

  //fuera del array declaro otra variable nueva y la pongo igual a la variable del array "simbologia"
  //le introduzco el parametro donde estan los dibujos de cartas.
  //A esta variable creada le declaro la condicional "if" con una operacion logica.

  let raSimbolo = simbologia(cards);
  if (raSimbolo == "♦" || raSimbolo == "♥") {
    //Aqui dentro de la condicion llamo a mis variables.
    //donde he creado a las clases y cambio el color de los dibujos.

    simbolo01.style.color = "red";
    simbolo02.style.color = "red";
  }

  //declaro otra variable nueva y la pongo tambien igual a la variable del array "simbologia".
  //y le introduzco el parametros donde estan los numeros y las letras.

  let raNunero = simbologia(values);

  //aqui llamo a mis clases creadas en Html que habia llamado antes y les asigno los valores igual a
  //a las variables ultimas creadas que son igual a la variable del array y sus parametros.

  numeros.innerHTML = raSimbolo;
  simbolo01.innerHTML = raNunero;
  simbolo02.innerHTML = simbolo01.innerHTML;
};
