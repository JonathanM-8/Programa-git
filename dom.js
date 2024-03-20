function validarCampo(){
//Recibir datos del input del formulario
    let nomb=document.getElementById("nombre");
    let nomb1=nomb.value;

    let usuario=document.getElementById("usuario");
    let usuario1=usuario.value;
    
    let mail=document.getElementById("email");
    let email1=mail.value;

//Validar que sea texto
const nom=/^[a-zA-Z ]*$/;


//Validar campo vacio
if(nomb1.trim()==""){
    alert("Escriba en el campo nombre");
    nomb.focus;
    return false;

}
//Validar que sea texto
else if(!nomb1.match(nom)){
    alert("Solo texto en el campo nombre");
    nomb.focus();
    return false;
}    
//Validar campo vacio
    if(usuario1.trim()==""){
        alert("Escriba en el campo usuario");
        usuario.focus;
        return false;
    }

//Validar email
let email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!email.test(email1)){
    alert("Correo inválido");
    email.value="";
    email.focus();
    return false;
}
}