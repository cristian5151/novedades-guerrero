
function iniciar(){

    codigo=document.getElementById("nombre");
    nombres=document.getElementById("direccion");
    apellidos=document.getElementById("miemail");
    telefono=document.getElementById("numero");
    correo=document.getElementById("asunto");
    correo=document.getElementById("mensaje");

    
    nombre.addEventListener("input", validacion, false);
    direccion.addEventListener("input", validacion,false);
    miemail.addEventListener("input",validacion,false);
    numero.addEventListener("input",validacion,false);
    asunto.addEventListener("input",validacion,false);
    mensaje.addEventListener("input",validacion,false);

    validacion();
}

function alerta(){
    alert("Gracias por tu mensaje, el administrador se contactara pronto");
}
function validacion(){
    //
    if(nombre.value==""){
        nombre.setCustomValidity('Ingrese nombre');
        nombre.style.background='#FFFFFF';
    }else{
        nombre.setCustomValidity('');
        nombre.style.background='#FFFFFF';
    }
    //
    if(direccion.value==""){
        direccion.setCustomValidity('Ingrese direccion');
        direccion.style.background='#FFFFFF';
    }else{
        direccion.setCustomValidity('');
        direccion.style.background='#FFFFFF';  
    }
    //
    if(miemail.value==""){
        miemail.setCustomValidity('Ingrese correo electronico');
        miemail.style.background='#FFFFFF';
    }else{
        miemail.setCustomValidity('');
        miemail.style.background='#FFFFFF'; 
    }
    //
    if(numero.value==""){
        numero.setCustomValidity('Ingrese telefono');
        numero.style.background='#FFFFFF'; 
    }else{
        numero.setCustomValidity('');
        numero.style.background='#FFFFFF'; 
    }
    //
    if(asunto.value==""){
        asunto.setCustomValidity('Ingrese asunto');
        mensaje.style.background='#FFFFFF'; 
    }else{
        asunto.setCustomValidity('');
        asunto.style.background='#FFFFFF'; 
    }
    
    if(mensaje.value==""){
        mensaje.setCustomValidity('Ingrese mensaje');
       mensaje.style.background='#FFFFFF';  
    }else{
        mensaje.setCustomValidity('');
        mensaje.style.background='#FFFFFF'; 
        
    }
 
}
window.addEventListener("load", iniciar, false);
