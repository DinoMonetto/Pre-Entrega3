let frutas = [
    {nombre: "Anana", precio: 1600, img: "img/assets/Anana"},
    {nombre: "Manzana", precio: 900, img: "img/assets/Manzana"},
    {nombre: "Durazno", precio: 1500, img: "img/assets/Durazno"},
    {nombre: "Papa", precio: 950, img: "img/assets/Papa"},
    {nombre: "Zanahoria", precio: 1200, img: "img/assets/Zanahoria"},
    {nombre: "Tomate", precio: 1000, img: "img/assets/Tomate"},
    {nombre: "Anana", precio: 1600, img: ".img/assets/Anana"},
    {nombre: "Manzana", precio: 900, img: ".img/assets/Manzana"},
    {nombre: "Durazno", precio: 1500, img: "img/assets/Durazno"},
    {nombre: "Papa", precio: 950, img: "img/assets/Papa"},
    {nombre: "Zanahoria", precio: 1200, img: "img/assets/Zanahoria"},
    {nombre: "Tomate", precio: 1000, img: "img/assets/Tomate"},
    
];

let conteinerCards = document.querySelector("#container");

frutas.forEach((fruta)=> {
    clon = document.querySelector(".cardTemplate").content.cloneNode(true)
    clon.querySelector("h5").innerText = `${fruta.nombre}`
    clon.querySelector("p").innerText = `Precio $${fruta.precio}`
    clon.querySelector("img").scr = `${fruta.img}`
    clon.querySelector("img").alt = `${fruta.nombre}`;


    conteinerCards.appendChild(clon)
    })


    document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll('.custom-card button');
        buttons.forEach((button) => {
            button.addEventListener('click', function() {
                alert('Agregado al carrito');
            });
        });
    });
    