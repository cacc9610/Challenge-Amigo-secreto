// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listamigos = []; // Establecer una lista donde se va a guardar los nombres de amigos
let entradamigo = document.getElementById('amigo'); // Obtener el valor que se ingresa por media de la ID "amigo" del index.html
let listadoamigos = document.getElementById('listaAmigos');
let sortear = document.getElementById('resultado');
let blanco = ''; // variable que permite verificar si el espacio del cuadro esta vacio para enviar nombres
let azar; // variable que da un numero azar dado por el tamaño de la lista o array teniendo en cuenta la cantidad de nombre ingresados
let azarnombre; // variable que teniendo en cuenta la operacion d

function agregarAmigo(){ // Funcion que por medio del boton del index añadir pueda capturar los nombre
    listamigos.push(entradamigo.value);
    console.log(listamigos);
hacerlistado();    

    if (entradamigo.value == blanco){  // condicion de alerta en caso de ingresa espacion en blanco
        alert('Por favor, inserte un nombre.');

    } /* else {
        if (typeof entradamigo == Number ){ // condicion de alerta en caso de ingresar un numero
        alert('Por favor, no ingreses numeros');
    }
    } */
limpiarcaja();      
}

function sortearAmigo(){ // funcion para realizar la operacion con el boton sortear amigo y obtener el nombre a partir de las herramientas math.random
   let azar = Math.floor((Math.random() *listamigos.length ));
   let azarnombre = listamigos[azar];
   console.log(azarnombre); 
   sortear.innerHTML = `<li>El amigo secreto es: ${azarnombre}</li>`;
   
}; 

function hacerlistado(){
    listadoamigos.innerHTML += `<li>${entradamigo.value}</li>`;
};

function limpiarcaja(){ // funcion para limpiar la caja al terminar de ingresar un nuevo nombre
    document.getElementById('amigo').value = '';
};



