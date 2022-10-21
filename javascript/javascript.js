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
        let array = [form.usuario.value, form.psw.value, form.nombreapellidos.value, form.email.value, form.fechadenacimiento.value,form.fotodeperfil.value];
        var strForm = serializarArray(array);
        sessionStorage.setItem(form.email.value, strForm);
        sessionStorage.setItem("lista:"+ form.email.value,["Guardadas"]);
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
            sessionStorage.setItem("emailiniciado",email)
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
    var emailiniciado =sessionStorage.getItem("emailiniciado")
    let array = [form.usuariovariable.value, form.contraseñavariable.value, form.nombrevariable.value, emailiniciado,form.fechavariable.value];
    var strForm = serializarArray(array);
    sessionStorage.setItem(emailiniciado, strForm, 30);
    console.log(emailiniciado)
}
function getNombreUsuario(){
    var emailiniciado =sessionStorage.getItem("emailiniciado")
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    var usuario = array[0];
    return usuario
}

function getContraseña(){
    var emailiniciado =sessionStorage.getItem("emailiniciado")
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    var contraseña = array[1];
    return contraseña
}

function getFechaDeNacimiento(){
    var emailiniciado =sessionStorage.getItem("emailiniciado")
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    let fechadenacimiento = array[4];
    return fechadenacimiento
}

function getNombreApellidos(){
    var emailiniciado =sessionStorage.getItem("emailiniciado")
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    let nombreapellidos = array[2];
    return nombreapellidos
}

function getStringFotoInsertada(){
    var emailiniciado =sessionStorage.getItem("emailiniciado")
    let cookie = sessionStorage.getItem(emailiniciado);
    let array = cookie.split(",");
    let stringfoto = array[5];
    return stringfoto
} 
function abrirperfilartista(artista,url){
    window.location.href="perfil_artista.html"
    let array = [artista,url]
    var strForm=serializarArray(array)
    sessionStorage.setItem("cantante",array)
}
function perfil_artista(){
    let sesion = sessionStorage.getItem("cantante");
    let array = sesion.split(",")
    document.getElementById("titulo").innerHTML = array[0];
    document.getElementById("imagen").src = array[1];
    console.log(document.getElementById("imagen").src)

}
function fotoperfil(){
    var emailiniciado =sessionStorage.getItem("emailiniciado")
    let sesion = sessionStorage.getItem(emailiniciado);
    let array = sesion.split(",")
    document.getElementById("fotoperfil").src = array[5];
    console.log(document.getElementById("fotoperfil").src)
    alert("funciona")

}

function abrirListasGuardadas(){
    window.location.href="lista_canciones.html";

}
function crearListas(){
    var emailiniciado =sessionStorage.getItem("emailiniciado");
    window.location.href="crearListas.html";
    sessionStorage.setItem("listaactual","guardadas")

}
function storeSongs(form){
    var emailiniciado =sessionStorage.getItem("emailiniciado");
    let lista = sessionStorage.getItem("lista:"+ emailiniciado);
    var listanueva = lista +"," + form.usuario.value;
    sessionStorage.setItem("lista:" + emailiniciado, listanueva);
    sessionStorage.getItem(form.usuario.value,"canciones")
}
function buscadorCanciones(){
    var busqueda = document.getElementById("busqueda")
    var cancion = busqueda.value.toUpperCase()
    var lista = [callaita,sech,jbalvin,ozuna,nickyjam]
    for (i=0;i < lista.length;i++){
        if (lista[i]== cancion){
            var listaliniciada =sessionStorage.getItem("listaactual");
            var listanueva = lista2 +"," + listainiciada;
            sessionStorage.setItem(listainiciada, listanueva);


        }
    }
}