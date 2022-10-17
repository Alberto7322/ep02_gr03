function openBotonOpciones(){
    document.getElementById('boton-opciones').style.display = "block";
}

function closeBotonOpciones(){
    document.getElementById('boton-opciones').style.display = "none";
}
function checkCookie(campo) {
    console.log(sessionStorage.getItem(campo))
    if (sessionStorage.getItem(campo) == null) {    
        return true;
    } else {
        return false;
    }
}

function storeValues(form){
    console.log(form.email.value)
    if (checkCookie(form.email.value)){
        let array = [form.usuario.value, form.psw.value, form.nombreapellidos.value, form.email.value, form.fechadenacimiento.value];
        var strForm = serializarArray(array);
        sessionStorage.setItem(form.email.value, strForm);
        return true;
    }else{
        alert("Ya existe una cookie asociada a este correo");
        return false;
    }
}
function serializarArray(formulario){
    var strFormulario = "";
    for (var i=0; i<formulario.length; i++){
        strFormulario += formulario[i]+",";
    }
    strFormulario = strFormulario.substr(0, strFormulario.length-1);
    return strFormulario;
}
var emailiniciado = "";
var expiniciado = "";

function validarDatos(form){
    var email = form.email.value;
    var psw = form.psw.value;

    if (checkCookie(email) == false){
        if (checkPassword(email, psw)){
            alert("Has iniciado sesión correctamente");
            window.location.href = "entrega3.html";
            console.log(window.location.href)
            
            
          
            return false;
        }else{
            alert("La password no es correcta");
            return false;
        }
    }else{
        alert("No existe ninguna cookie asociada a ese correo");
        return false;
    }
}
function checkPassword(email, psw){
    let cookie = sessionStorage.getItem(email);
    let array = cookie.split(",");
    if (array[2] == psw){
        return true;
    }else{
        return false;
    }
}
function abrirListaOpciones(){
    document.getElementById("opciones").style.display = "block";
}

function cerrarListaOpciones(){
    document.getElementById("opciones").style.display = "none";
}
function abrirOpcionesCerrarSesion(){
    document.getElementById("opciones").style.display = "none";
    document.getElementById("opciones-cerrar-sesión").style.display = "block";
}

function cerrarOpcionesCerrarSesion(){
    document.getElementById("opciones-cerrar-sesión").style.display = "none";
    document.getElementById("opciones").style.display = "block";
}
function actualizarValues(form){
    let array = [form.usuariovariable.value, getContraseña(), getNombreApellidos(), emailiniciado, getFechaDeNacimiento(), stringfotoinsertada];
    var strForm = serializarArray(array);
    sessionStorage.setItem(emailiniciado, strForm, 30);
}
function getNombreUsuario(){
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    var usuario = array[0];
    return usuario
}

function getContraseña(){
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    var contraseña = array[1];
    return contraseña
}

function getFechaDeNacimiento(){
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    let fechadenacimiento = array[4];
    return fechadenacimiento
}

function getNombreApellidos(){
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    let nombreapellidos = array[2];
    return nombreapellidos
}

function getStringFotoInsertada(){
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    let stringfoto = array[5];
    return stringfoto
} 
