
sessionStorage.setItem('nombre','juan');

const producto = {
    nombre:"benito",
    precio:5,
    marca:"db"
}

const productoString = JSON.stringify( producto);


localStorage.setItem('producto', productoString);

let meses = ['enero','febrero','marzo'];

localStorage.setItem('meses',JSON.stringify(meses));
