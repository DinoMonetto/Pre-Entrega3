// Array para almacenar usuarios y contraseñas
let usuario = [{
    "username": "rulo19",
    "password": "123"
}  
];
// Con esto hago que el form Register no se vea hasta que haga clic en crear nuevo usuario
document.getElementById('showRegisterForm').addEventListener('click', () => {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'block';
});
// Función inicio de sesión
document.querySelector(".login").addEventListener("submit", (e) => {
    e.preventDefault();
    
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    
    // Limpia el campo 
    document.querySelector(".username").value = "";
    document.querySelector(".password").value = "";
    
    // Busca el usuario en el array
    let user = usuario.find(user => user.username === username && user.password === password);
    
    user ? ( alert("Inicio de sesión exitoso!"), window.location.href = "./pages/cards.html") 
    : alert("Usuario o contraseña incorrectas. Intenta de nuevo.");

    // Use el operador ternario para probarlo mas que nada
    // se que al tener 2 lineas la primer condicion es mejor utilizar el If Else

    // Mostrar contenido del array en consola
    console.log("Contenido:", JSON.stringify(usuario, null, 2));
});

// Función de registro de nuevos usuarios
document.querySelector(".register").addEventListener("submit", (event) => {
    event.preventDefault();
    let newUser = document.querySelector(".newUser").value;
    let newPass = document.querySelector(".newPass").value;
    let repeatPass = document.querySelector(".repeatPass").value;

    // Limpia el campo
    document.querySelector(".newUser").value = "";
    document.querySelector(".newPass").value = "";
    document.querySelector(".repeatPass").value = "";

    // Verifica si el usuario ya existe
    let existing = usuario.find(user => user.username === newUser);

    // Verificar contraseñas (si son iguales)
    if (newPass !== repeatPass) {
        alert("Las contraseñas no coinciden. Intente de nuevo.");
    } else if (existing) {
        alert("El usuario ya existe. Pobra con otro.");
    } else {
        usuario.push({ username: newUser, password: newPass });
        alert("Usuario registrado con exito!");
        document.querySelector('.login').style.display = 'block';  // Mostrar 
        document.querySelector('.register').style.display = 'none';  // Ocultar
    }
    
    // Mostrar contenido en la consola
    console.log("Contenido:", JSON.stringify(usuario, null, 2));
});


let frutas = [
    {nombre: "Anana", precio: 1600, img: ".img/assets/Anana"},
    {nombre: "Manzana", precio: 900, img: ".img/assets/Manzana"},
    {nombre: "Durazno", precio: 1500, img: ".img/assets/Durazno"}
];



let conteinerCards = document.querySelector("#containerCards")

frutas.forEach((fruta)=> {
    clon = document-querySelector(".Template)").content.cloneNode(true)
    clon.querySelector("h5").innerText = `${fruta.nombre}`
    clon.querySelector("p").innerText = `${fruta.precio}`
    clon.querySelector("img").src = `${fruta.img}`
    })


