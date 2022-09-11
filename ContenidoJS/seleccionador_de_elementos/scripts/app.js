'use strict';
//seleccionar elementos del DOM
let myTitles = document.getElementById('titulos');
//seleccionar por name
let tagName = document.getElementsByName('art1');
//seleccion de etiquetas
let etiqueta = document.getElementsByTagName('h1');
//console.log(etiqueta);

//QuerySelector id
let querymundiales = document.querySelector('#mundiales');

//QuerySelector class
let myMenu = document.querySelector('menu');
console.log(myMenu);

//QuerySelector all
let myol = document.querySelector('ol');
//all
let allArt = document.querySelector('article');
//console.log(allArt);

//crear elementos
let miParrafo = document.createElement('p');
miParrafo.id="Parrafo";
miParrafo.className="Parrafo";
miParrafo.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nulla, sed error officia accusamus beatae atque aspernatur a impedit nam placeat eius, libero sit minima, ratione fuga blanditiis magni perferendis Provident perferendis voluptate iste nihil assumenda amet ipsam eum, vel distinctio ut commodi corporis perspiciatis sunt, tempora deleniti libero nobis. Delectus, facilis sequi est quae accusamus molestiae quaerat maxime eligendi. Aliquam qui error assumenda excepturi perspiciatis. Dignissimos, fugiat amet neque veritatis minus culpa ullam voluptatem, sapiente quisquam voluptas earum. Ipsa molestias praesentium quis eos aliquam odit ratione quos modi blanditiis.";
miParrafo.innerHTML = "<h3>Esto es otro titulo </h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus dolorem itaque autem harum corporis. Ea, deserunt ipsum. Eum odio, quos sed fugiat ipsa ducimus? <strong> Optio saepe fugiat id dolores.  </strong>";
//instertar elemento en el DOM
//document.body.appendChild(miParrafo);
// seleccion de elemento
let section1 = document.getElementById(section1);
section1.appendChild(miParrafo);