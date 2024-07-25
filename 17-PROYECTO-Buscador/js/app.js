//variables
const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;



//eventos
document.addEventListener('DOMContentLoaded',() =>{
    mostrarAutos();
//llenar las opciones de  años
    llenarSelect();

});

//funciones

function mostrarAutos(){
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');
        
        autoHTML.textContent = `
        ${marca}, ${modelo} - ${year} - ${puertas} puertas - Transmision: ${transmision} -
        precio: ${precio}$ - color:${color}
       `;

        // insertar datas en el html
    resultado.appendChild(autoHTML);

    });
  
    
}
 
//general la funciones select de años
function llenarSelect(){
   
    for( let i = max;i >=min;i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega la selecion de años al select de años

    }
};
