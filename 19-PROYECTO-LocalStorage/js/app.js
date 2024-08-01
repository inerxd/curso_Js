
// variables
const formulario = document.querySelector('#formulario');
const listatwest = document.querySelector('#lista-tweets');
let tweets = [];

//event listener
eventListener();

function eventListener(){
    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet)
    
    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',() =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        
        crearHTML();
    });
}
  

//funciones
function agregarTweet(e){
    e.preventDefault();
//textarea en donde escribe el usario

const tweet = document.querySelector('#tweet').value;

if(tweet === ''){
    mostrarError("no puede estar vacio....");
return; }

const tweetObj = {
    id:Date.now(),
    tweet
}
// añair al arreglo de tweets
tweets = [...tweets,tweetObj];

// Crear html con los tweets

crearHTML();

formulario.reset();
}

//Mostrar mensaje de error;
function mostrarError(error){
const mensajeError = document.createElement('p');
mensajeError.textContent = error;
mensajeError.classList.add('error');

//insertado en el contenido
const contenido = document.querySelector('#contenido');
contenido.appendChild(mensajeError);

//elimar el mensaje de error
setTimeout(() => {
    mensajeError.remove();
}, 3000);

}

//Creacion del html
function crearHTML(){

    LimpiarHTML();
    
    if(tweets.length > 0){
        tweets.forEach( tweet =>{
            // agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'x';
           
           //Añadir la funcion de eliminar
           btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
           }
           
           
            //Crear el html
            const li = document.createElement('li');

            //Añadir el texto
            li.innerText = tweet.tweet;

            //Asignar el boton
            li.appendChild(btnEliminar);

            //insertarñp em eñ html
            listatwest.appendChild(li);
        });
    }
    sincronizarStorage();
}
// Agregar los Tweets actuales a Localstorage
function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));

}

//borrando tweeat
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}

//Limpiar el HTML
function LimpiarHTML(){
    while(listatwest.firstChild){
        listatwest.removeChild(listatwest.firstChild);
    }
}
