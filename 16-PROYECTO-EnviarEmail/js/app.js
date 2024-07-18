document.addEventListener('DOMContentLoaded', function(){

    // seleciona los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    inputEmail.addEventListener('blur',validar);
    inputAsunto.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);

    function validar(e){
        console.log(e.target.value.trim())

        if(e.target.value === ''){
            console.log("no hay string")
        }else{
            console.log(' hay string')
        }
    };



});