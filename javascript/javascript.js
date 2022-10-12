function showBotonLogIn(){
    document.getElementById('login').style.display = "block";
}

function deleteBotonLogIn(){
    document.getElementById('login').style.display = "none";
}

function showBotonSignUp(){
    document.getElementById('signup').style.display = "block";
}

function deleteBotonSignUp(){
    document.getElementById('signup').style.display = "none";
}

function openFormLogIn(){
    document.getElementById('id02').style.display = "block";
}

function closeFormLogIn(){
    document.getElementById('id02').style.display = "none";
}

function openFormSignUp(){
    document.getElementById('id01').style.display = "block";
}

function closeFormSignUp(){
    document.getElementById("id01").style.display = "none";
}

function openFotoPerfil(){
    document.getElementById('fotoperfil').style.display = "block";
}

function closeFotoPerfil(){
    document.getElementById('fotoperfil').style.display = "none";
}

function openNombreUsuario(usuario){
    let element = document.querySelector("#nombreusuario");
    element.innerText = usuario;
    document.getElementById('nombreusuario').style.display = "block";
}

function closeNombreUsuario(){
    document.getElementById('nombreusuario').style.display = "none";
}

function openBotonOpciones(){
    document.getElementById('boton-opciones').style.display = "block";
}

function closeBotonOpciones(){
    document.getElementById('boton-opciones').style.display = "none";
}

function openFormMiPerfil(){
    cerrarListaOpciones();
    document.getElementById('mi-perfil').style.display = "block";
    let element = document.querySelector("#contraseñainvariable");
    let contraseña = getContraseña();
    element.innerText = contraseña;
    let element2 = document.querySelector("#emailinvariable");
    element2.innerText = emailiniciado;
    let element3 = document.querySelector("#fechadenacimientoinvariable");
    let fechadenacimiento = getFechaDeNacimiento();
    element3.innerText = fechadenacimiento;
    let element4 = document.querySelector("#nombreapellidosinvariable");
    let nombreapellidos = getNombreApellidos();
    element4.innerText = nombreapellidos;
    document.getElementById("usuariovariable").value = getNombreUsuario();
    let indice = getIndice();
    document.getElementById("desplegablevariable").selectedIndex = indice;
}

function closeFormMiPerfil(){
    document.getElementById('mi-perfil').style.display = "none";
}

function openFormMisExperiencias(){
    cerrarListaOpciones();
    let tabla = document.getElementById('tabla-mis-experiencias');
    if (! checkCookie(expiniciado))
    {
      let fila = document.createElement('tr');
      let tituloExp = document.createElement('td');
      tituloExp.innerText=getTituloExperiencia();
      let descripcionExp = document.createElement('td');
      descripcionExp.innerText=getDescripcionExperiencia();
      let lugarExp = document.createElement('td');
      lugarExp.innerText=getLugarExperiencia();
      fila.append(tituloExp, descripcionExp, lugarExp);
      tabla.append(fila);
    }
    document.getElementById('div-mis-experiencias').style.display = "block";
}

function closeFormMisExperiencias(){
    document.getElementById('div-mis-experiencias').style.display = "none";
}

var modal = document.getElementById('id01');

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function detectCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i=0; i<ca.length; i++){
        var c = ca[i];
        while (c.charAt(0) == '') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0 && (name.length != c.length)){
            return true;
        }
    }
    return false;
}

function removeCookie(cname){
    setCookie(cname,"",-1);
}

function checkCookie(campo) {
    let user = getCookie(campo);
    if (user != "") {    
        return false;
    } else {
        return true;
    }
}

function storeValues(form){
    if (checkCookie(form.email.value)){
        let array = [form.usuario.value, form.psw.value, form.nombreapellidos.value, form.email.value, form.fechadenacimiento.value, stringfotoinsertada, form.desplegable.value];
        var strForm = serializarArray(array);
        setCookie(form.email.value, strForm, 30);
        return true;
    }else{
        alert("Ya existe una cookie asociada a este correo");
        return false;
    }
}

function actualizarValues(form){
    let array = [form.usuariovariable.value, getContraseña(), getNombreApellidos(), emailiniciado, getFechaDeNacimiento(), stringfotoinsertada, form.desplegablevariable.value];
    var strForm = serializarArray(array);
    setCookie(expiniciado, strForm, 30);
}   

function guardarExperiencia(form){
    let array = [form.tituloExperiencia.value, form.descripcionExperiencia.value, form.lugarExperiencia.value];
    var strForm = serializarArray(array);
    setCookie(expiniciado, strForm, 30);
}   

function borrarTodasExperiencias(){
    removeCookie(expiniciado);
    closeFormMisExperiencias();
}

function serializarArray(formulario){
    var strFormulario = "";
    for (var i=0; i<formulario.length; i++){
        strFormulario += formulario[i]+",";
    }
    strFormulario = strFormulario.substr(0, strFormulario.length-1);
    return strFormulario;
}

function checkPassword(email, psw){
    let cookie = getCookie(email);
    let array = cookie.split(",");
    if (array[1] == psw){
        return true;
    }else{
        return false;
    }
}

var emailiniciado = "";
var expiniciado = "";

function validarDatos(form){
    var email = form.email.value;
    var psw = form.psw.value;

    if (checkCookie(email) == false){
        if (checkPassword(email, psw)){
            alert("Has iniciado sesión correctamente");
            emailiniciado = email;
            expiniciado = email + "exp";
            cargaSelectorFichero();
            closeFormLogIn();
            closeFormMisExperiencias();
            deleteBotonLogIn();
            deleteBotonSignUp();
            openFotoPerfil();
            stringfotoinsertada = getStringFotoInsertada();
            document.getElementById("fotoperfil").src = 'data:image/jpeg;base64,' + stringfotoinsertada;
            var usuario = getNombreUsuario();
            openNombreUsuario(usuario);
            openBotonOpciones();
          
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


function getNombreUsuario(){
    let cookie = getCookie(emailiniciado);
    let array = cookie.split(",");
    var usuario = array[0];
    return usuario
}

function getContraseña(){
    let cookie = getCookie(emailiniciado);
    let array = cookie.split(",");
    var contraseña = array[1];
    return contraseña
}

function getFechaDeNacimiento(){
    let cookie = getCookie(emailiniciado);
    let array = cookie.split(",");
    let fechadenacimiento = array[4];
    return fechadenacimiento
}

function getNombreApellidos(){
    let cookie = getCookie(emailiniciado);
    let array = cookie.split(",");
    let nombreapellidos = array[2];
    return nombreapellidos
}

function getStringFotoInsertada(){
    let cookie = getCookie(emailiniciado);
    let array = cookie.split(",");
    let stringfoto = array[5];
    return stringfoto
}

function getDesplegable(){
    let cookie = getCookie(emailiniciado);
    let array = cookie.split(",");
    let desplegable = array[6];
    return desplegable
}

function getIndice(){
    let desplegable = getDesplegable();
    if (desplegable == "turismofutbolístico"){
        return 1
    }else{
        if(desplegable == "turismoreligioso"){
            return 2
        }else{
            if (desplegable == "turismogastronómico"){
                return 3
            }else{
                if (desplegable == "turismocultural"){
                    return 4
                }else{
                    return 5
                }
            }
        }
    }
}

function getTituloExperiencia(){
    let cookie = getCookie(expiniciado);
    let array = cookie.split(",");
    let titulo = array[0];
    return titulo
}
function getDescripcionExperiencia(){
    let cookie = getCookie(expiniciado);
    let array = cookie.split(",");
    let desc = array[1];
    return desc
}
function getLugarExperiencia(){
    let cookie = getCookie(expiniciado);
    let array = cookie.split(",");
    let lugar = array[2];
    return lugar
}

function abrirListaOpciones(){
    document.getElementById("opciones").style.display = "block";
}

function cerrarListaOpciones(){
    document.getElementById("opciones").style.display = "none";
}

function cerrarSesion(){
    closeFotoPerfil();
    closeBotonOpciones();
    closeNombreUsuario();
    showBotonLogIn();
    showBotonSignUp();
    cerrarListaOpciones();
    cerrarOpcionesCerrarSesion();
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

var stringfotoinsertada = "";

function cargaSelectorFichero(){
    var handleFileSelect = function(evt) {
        var files = evt.target.files;
        var file = files[0];
    
        if (files && file) {
            var reader = new FileReader();
    
            reader.onload = function(readerEvt) {
                var binaryString = readerEvt.target.result;
                stringfotoinsertada = btoa(binaryString);
            };
    
            reader.readAsBinaryString(file);
        }
    }; 
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        document.getElementById('fotoinsertada').addEventListener('change', handleFileSelect, false);
        document.getElementById('fotodeperfilcambiada').addEventListener('change', handleFileSelect, false);
       // document.getElementById('foto-experiencia').addEventListener('change', handleFileSelect, false);
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}
function openFormSevilla(){
    document.getElementById('sevilla01').style.display = "block";
}

function closeFormSevilla(){
    document.getElementById("sevilla01").style.display = "none";
}

function openFormPlaza(){
    document.getElementById('plaza01').style.display = "block";
}

function closeFormPlaza(){
    document.getElementById("plaza01").style.display = "none";
}
function openFormGiralda(){
    document.getElementById('giralda01').style.display = "block";
}

function closeFormGiralda(){
    document.getElementById("giralda01").style.display = "none";
}
function openFormExp1(){
    document.getElementById('exp01').style.display = "block";
}

function closeFormExp1(){
    document.getElementById("exp01").style.display = "none";
}
function openFormExp2(){
    document.getElementById('exp02').style.display = "block";
}

function closeFormExp2(){
    document.getElementById("exp02").style.display = "none";
}
function openFormExp3(){
    document.getElementById('exp03').style.display = "block";
}

function closeFormExp3(){
    document.getElementById("exp03").style.display = "none";
}
function openFormExp4(){
    document.getElementById('exp04').style.display = "block";
}

function closeFormExp4(){
    document.getElementById("exp04").style.display = "none";
}
function openFormExp5(){
    document.getElementById('exp05').style.display = "block";
}

function closeFormExp5(){
    document.getElementById("exp05").style.display = "none";
}
function openFormExp6(){
    document.getElementById('exp06').style.display = "block";
}

function closeFormExp6(){
    document.getElementById("exp06").style.display = "none";
}
function openFormExp7(){
    document.getElementById('exp07').style.display = "block";
}

function closeFormExp7(){
    document.getElementById("exp07").style.display = "none";
}
function openFormExp8(){
    document.getElementById('exp08').style.display = "block";
}

function closeFormExp8(){
    document.getElementById("exp08").style.display = "none";
}
function openFormExp9(){
    document.getElementById('exp09').style.display = "block";
}

function closeFormExp9(){
    document.getElementById("exp09").style.display = "none";
}
function openFormExp1(){
    document.getElementById('exp01').style.display = "block";
}

function closeFormExp1(){
    document.getElementById("exp01").style.display = "none";
}
function buscador(){
    var input_string = document.getElementById('buscador').value;
    input_string = input_string.toLowerCase();
    var contenido = document.getElementsByClassName("experienciaTexto")
    var contador = 0
    for (var i = 0; i < contenido.length; i++, contador++) {
       
        if (contenido[i].innerHTML.toLowerCase().indexOf(input_string) == -1) 
        {
            alert("grid"+contador)
            document.getElementById("grid"+contador).style.display = "none"
        }
        
        else 
        {
            contenido[i].style.display="list-item";
        }
    }
    
}
