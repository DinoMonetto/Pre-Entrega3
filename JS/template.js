let frutas = [
    {nombre: "Anana", precio: 1600, img: "img/assets/anana"},
    {nombre: "Manzana", precio: 900, img: "img/assets/manzana"},
    {nombre: "Durazno", precio: 1500, img: "img/assets/durazno"},
    {nombre: "Papa", precio: 950, img: "img/assets/papa"},
    {nombre: "Zanahoria", precio: 1200, img: "img/assets/zanahoria"},
    {nombre: "Tomate", precio: 1000, img: "img/assets/tomate"},
    {nombre: "Espinaca", precio: 1100, img: "img/assets/espinaca"},
    {nombre: "Brócoli", precio: 1300, img: "img/assets/brocoli"}, 
    {nombre: "Naranja", precio: 800, img: "img/assets/naranja"},  
    {nombre: "Uva", precio: 1700, img: "img/assets/uva"},         
    {nombre: "Lechuga", precio: 850, img: "img/assets/lechuga"},  
    {nombre: "Cebolla", precio: 900, img: "img/assets/cebolla"}   
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
    