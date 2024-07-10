const carrito = document.querySelector('#carrito');
const ContenedorCarrito = document.querySelector('#lista-carrito tbody');
const lista_Curso = document.querySelector('#lista-cursos');
const VaciarBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    //cuando le den click a agragar al carrito 
    lista_Curso.addEventListener('click',agregarCurso);

    carrito.addEventListener('click',EliminarCurso);

    VaciarBtn.addEventListener('click', () => {
        articulosCarrito = []; // reseteamos el carrito

        limpiarHTML(); // eliminamos todo  el html
    })
}

//funciones
function agregarCurso(e){
    e.preventDefault();
   if(e.target.classList.contains('agregar-carrito')){
    const CursoSeleacionado = e.target.parentElement.parentElement
    LeerDatosCurso(CursoSeleacionado);
   }
}

// eliminar curso del carrito
function EliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoid  = e.target.getAttribute('data-id');
    //eliminar  delarregloarticulosCarrito por eldata-id
    articulosCarrito = articulosCarrito.filter (curso => curso.id !==  cursoid);
        
        carritoHTML(); // itera sobre el carrito y mostrar el html

}
}

//lee el documento html al momento que le demos click extraera los  tag y la informacion

function LeerDatosCurso(Curso){
    //console.log(Curso);

    //crear un objeto del del curso actual
    const infocurso = {
        imagen: Curso.querySelector('img').src,
        titulo: Curso.querySelector('h4').textContent,
        precio: Curso.querySelector('.precio span').textContent,
        id:Curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }

    // Revisa si un elemento ya existe
    const existe = articulosCarrito.some(curso => curso.id === infocurso.id)
    if(existe){
        //actualiza la cantidad 
        const Cursos = articulosCarrito.map(
            curso =>{//retorna el objeto actualizado
                if(curso.id === infocurso.id){
                    curso.cantidad++;
                    return curso;
                }else{
                    //retorno los objetos no duplicados
                    return curso;
                }
            } );
            articulosCarrito = [...Cursos];
    }else{
        //regresa del objeto actual no duplicado
        articulosCarrito = [...articulosCarrito,infocurso];
    }

   //agregar elemento del carrtio al array
    
    
   console.log(articulosCarrito);
   carritoHTML();
}

//  muestra el carrito de compras del html 
function carritoHTML(){
    //limpiarlelhtml
    limpiarHTML();
    // recorreelcarrito y general el html
    articulosCarrito.forEach(curso => {
       const{ imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>
            ${titulo}
        </td>
         <td>
            ${precio}
        </td>
         <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;
        //agregar el html tbody
        ContenedorCarrito.appendChild(row);
    }

    );
}

//Eliminaloscurso del tbody
function limpiarHTML(){
    //   forma de limpiar lenta
    //ContenedorCarrito.innerHTML = '';
    while(ContenedorCarrito.firstChild){
        ContenedorCarrito.removeChild(ContenedorCarrito.firstChild)
    }
}