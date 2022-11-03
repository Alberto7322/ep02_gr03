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
        sessionStorage.setItem("cancionesfavoritas:"+form.email.value,"favoritas")
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
    if (array[1] == psw){
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
function abrirperfilartista(artista,url,mp3){
    window.location.href="perfil_artista.html"
    let array = [artista,url,mp3]
    var strForm=serializarArray(array)
    sessionStorage.setItem("cantante",array)
}
function perfil_artista(){
    let sesion = sessionStorage.getItem("cantante");
    let array = sesion.split(",")
    document.getElementById("titulo").innerHTML = array[0];
    const canciones = document.getElementById("canciones_cantante")
    const fragment = document.createDocumentFragment()
    for(i=0;i<5;i++){
        var div = document.createElement("DIV")
        div.id = "cancion"
        var imagen =document.createElement("DIV")
        imagen.id ="imagen_musica"
        var img =document.createElement("IMG")
        img.src=array[1]
        img.className="imagen_musica"
        imagen.appendChild(img)
        var musica =document.createElement("DIV")
        musica.id ="audio_musica"
        var audio = document.createElement("AUDIO")
        audio.setAttribute("src",array[2])
        audio.setAttribute("controls", "controls");
        audio.className="audio_musica"
        musica.appendChild(audio)
        div.appendChild(imagen)
        div.appendChild(musica)
        fragment.appendChild(div)

    }
    canciones.appendChild(fragment)

}

function abrirperfilusuario(usuario,url){
    window.location.href="perfil_usuario.html"
    let array = [artista,url]
    var strForm=serializarArray(array)
    sessionStorage.setItem("usuario",array)
}
function perfil_usuario(){
    let sesion = sessionStorage.getItem("usuario");
    let array = sesion.split(",")
    document.getElementById("titulo").innerHTML = array[0];
    document.getElementById("imagen").src = array[1];
    console.log(document.getElementById("imagen").src)

}

function perfil_nuestro(){
    var emailiniciado=sessionStorage.getItem("emailiniciado")
    var array1 = sessionStorage.getItem("lista:"+emailiniciado)
    var array2 = array1.split(",")

    const lista = document.getElementById("listas_creadas")
    const fragment = document.createDocumentFragment()

    for (i = 1; i < array2.length; i++) {
        const div = document.createElement("DIV")
        const imagen = document.createElement("DIV")
        var img = document.createElement("IMG")
        img.src="images/natos.jpg"
        img.className="imagen_musica"
        const texto = document.createElement("DIV")
        var p =document.createElement("P")
        p.innerHTML=array2[i]
        imagen.appendChild(img)
        texto.appendChild(p)
        div.appendChild(imagen)
        div.appendChild(texto)
        div.id=array2[i]
        div.onclick=function abrirlistas(){
            sessionStorage.setItem("listaabierta",div.id)
            window.location.href="canciones.html"
        }
        fragment.appendChild(div)
    }
    lista.appendChild(fragment)

    var favoritas = document.getElementById("favoritas")
    var fragment2 = document.createDocumentFragment()

    var lista_favoritas = sessionStorage.getItem("cancionesfavoritas:"+emailiniciado)
    var array_favoritas = lista_favoritas.split(",")

    for(i=1;i<array_favoritas.length;i=i+3){
        var div = document.createElement("DIV")
        div.id = "cancion"
        var imagen2 =document.createElement("DIV")
        imagen2.id ="imagen_musica"
        var img2 =document.createElement("IMG")
        img2.src=array_favoritas[i+1]
        img2.className="imagen_musica"
        imagen2.appendChild(img2)
        var musica =document.createElement("DIV")
        musica.id ="audio_musica"
        var audio = document.createElement("AUDIO")
        audio.setAttribute("src",array_favoritas[i+2])
        audio.setAttribute("controls", "controls");
        audio.className="audio_musica"
        musica.appendChild(audio)
        div.appendChild(imagen2)
        div.appendChild(musica)
        fragment2.appendChild(div)
    }
    favoritas.appendChild(fragment2)

}

function abrirListasGuardadas(){
    window.location.href="lista_canciones.html";

}
function crearListas(){
    window.location.href="crearListas.html";

}
function storeSongs(form){
    let cancionesposible = [{id:"bad bunny",info:"musica/badbunny.mp3,images/badbunny.jpg"},
        {id:"j balvin",info:"musica/balvin.mp3,images/balvin.jpg"}]
    var emailiniciado =sessionStorage.getItem("emailiniciado");
    var iniciado =false
    let listainiciados = sessionStorage.getItem("lista:"+emailiniciado)
    let lista2 = listainiciados.split(",")
    for(i=0;i< lista2.length;i++){
        console.log(form.usuario.value)
        if(form.usuario.value === lista2[i]){
            iniciado = true
        }
    }
    if (iniciado === false){
        var listanueva = listainiciados +"," + form.usuario.value;
        sessionStorage.setItem("lista:" + emailiniciado, listanueva);
        sessionStorage.setItem(form.usuario.value,"canciones")
    }


    var cancionelegida = form.canciones.value
    for(i=0;i<cancionesposible.length;i++){
        if(cancionelegida === cancionesposible[i].id){
            var c1 = sessionStorage.getItem(form.usuario.value)
            var c2 =c1 + "," + cancionesposible[i].info
            sessionStorage.setItem(form.usuario.value,c2)

        }
    }
}



function verlistascreadas() {

    const songsList = document.getElementById("dayslist")
    var emailiniciado = sessionStorage.getItem("emailiniciado");
    let listascreadas = sessionStorage.getItem("lista:" + emailiniciado)
    let listascreadas2 = listascreadas.split(",")
    
    const cuerpo = document.getElementById("cuerpo_derecha")
    const principal =document.createElement("DIV")
    principal.className ="reggaeton"
    const fragment = document.createDocumentFragment()
    console.log(listascreadas2)

    for (i = 1; i < listascreadas2.length; i++) {
        const div = document.createElement("DIV")
        const imagen = document.createElement("DIV")
        var img = document.createElement("IMG")
        img.src="images/natos.jpg"
        img.className="imagen_musica"
        const texto = document.createElement("DIV")
        var p =document.createElement("P")
        p.innerHTML=listascreadas2[i]
        imagen.appendChild(img)
        texto.appendChild(p)
        div.appendChild(imagen)
        div.appendChild(texto)
        var a=listascreadas2[i]
        div.id=listascreadas2[i]
        div.onclick=function abrirlistas(){
            sessionStorage.setItem("listaabierta",div.id)
            window.location.href="canciones.html"
        }
        fragment.appendChild(div)
    }
    principal.appendChild(fragment)
    cuerpo.appendChild(principal)

    
}

function vercancionescreadas(){
    var listaabierta = sessionStorage.getItem("listaabierta")
    var canciones = sessionStorage.getItem(listaabierta)
    let array = canciones.split(",")
    document.getElementById("nombre_lista").textContent = listaabierta

    const listacancion = document.getElementById("canciones")
    const fragment = document.createDocumentFragment()

    for(i=1;i<array.length;i=i+2){
        const itemList = document.createElement("DIV")
        const imagen = document.createElement("DIV")
        var img = document.createElement("IMG")
        img.src= array[i+1]
        imagen.id="imagen"
        img.className="imagen_musica"
        imagen.appendChild(img)
        itemList.appendChild(imagen)
        itemList.id = "cancion"
        itemList.className ="cancion"
        itemList.onclick=function reproductor2(){
            const pie = document.getElementById("reproductor1")
            if (document.getElementById("musica") !== null){
                console.log(document.getElementById("musica"))
                var musicaborrada = document.getElementById("musica")
                pie.removeChild(musicaborrada)
            }
            const musica = document.createElement("DIV")
            var audio = document.createElement("AUDIO")
            audio.setAttribute("src","musica/badbunny.mp3")
            audio.setAttribute("controls", "controls");
            audio.className="audio_musica_pie"
            musica.id="musica"
            musica.appendChild(audio)
            pie.appendChild(musica)
        }
        fragment.appendChild(itemList)
    }
    listacancion.appendChild(fragment)

}


function reproducircancion(form){
     let array = [{id:"Sech",imagen:"images/sech.jpg",musica:"musica/sech.mp3"},
         {id:"Bad Bunny",imagen:"images/badbunny.jpg",musica:"musica/badbunny.mp3"}]
    var cancion = form.canciones.value

    for(i=0;i<array.length;i++){
        var id = array[i].id
        if(id === cancion){
            musica = array[i].musica
            sessionStorage.setItem("cancioniniciada",array[i].id+","+array[i].imagen
                +","+musica)
        }
    }

}
function reproductor(link){
    console.log("funciona")
    const pie = document.getElementById("reproductor1")
    if (document.getElementById("musica") !== null){
        console.log(document.getElementById("musica"))
        var musicaborrada = document.getElementById("musica")
        pie.removeChild(musicaborrada)
    }
    const musica = document.createElement("DIV")
    var audio = document.createElement("AUDIO")
    audio.setAttribute("src",link)
    audio.setAttribute("controls", "controls");
    audio.className="audio_musica_pie"
    musica.id="musica"
    musica.appendChild(audio)
    pie.appendChild(musica)

}

function abrircancion(){
    var lista = sessionStorage.getItem("cancioniniciada")
    var lista2 = lista.split(",")

    var principal=document.getElementById("cuerpo_derecha")
    var fragment=document.createDocumentFragment()

    var titulo =document.createElement("H1")
    titulo.innerHTML=lista2[0]
    titulo.className="tipo_musica"
    fragment.appendChild(titulo)
    var imagen=document.createElement("DIV")
    var img = document.createElement("IMG")
    img.src=lista2[1]
    img.className="imagen"
    imagen.appendChild(img)

    imagen.onclick=function reproductor3(){
            const pie = document.getElementById("reproductor1")
            if (document.getElementById("musica") !== null){
                console.log(document.getElementById("musica"))
                var musicaborrada = document.getElementById("musica")
                pie.removeChild(musicaborrada)
            }
            const musica = document.createElement("DIV")
            var audio = document.createElement("AUDIO")
            audio.setAttribute("src","musica/badbunny.mp3")
            audio.setAttribute("controls", "controls");
            audio.className="audio_musica_pie"
            musica.id="musica"
            musica.appendChild(audio)
            pie.appendChild(musica)
        }

    var boton=document.createElement("DIV")
    var boton2=document.createElement("BUTTON")
    boton2.innerHTML = 'Me gusta';
    boton2.onclick = function(){
        var emailiniciado = sessionStorage.getItem("emailiniciado")
        var favoritas = sessionStorage.getItem("cancionesfavoritas:"+emailiniciado)
        var string = favoritas + "," +lista
        sessionStorage.setItem("cancionesfavoritas:"+emailiniciado,string)

    }
    boton.appendChild(boton2)

    fragment.appendChild(imagen)
    fragment.appendChild(boton)



    principal.appendChild(fragment)
}

function pincharcancion(titulo,url,musica){
    sessionStorage.setItem("cancioniniciada",titulo+","+url+","+musica)
    window.location.href="cancion.html"

}



function contador(){
    const DATE_TARGET = new Date('11/15/2022 0:00 AM');
    const DATE_TARGET2 = new Date('11/18/2022 0:00 AM');
    const DATE_TARGET3 = new Date('11/21/2022 0:00 AM');
    const DATE_TARGET4 = new Date('11/24/2022 0:00 AM');
    const DATE_TARGET5 = new Date('11/27/2022 0:00 AM');
    // DOM for render
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');

    const SPAN_DAYS2 = document.querySelector('span#days2');
    const SPAN_HOURS2 = document.querySelector('span#hours2');
    const SPAN_MINUTES2= document.querySelector('span#minutes2');
    const SPAN_SECONDS2 = document.querySelector('span#seconds2');

    const SPAN_DAYS3 = document.querySelector('span#days3');
    const SPAN_HOURS3 = document.querySelector('span#hours3');
    const SPAN_MINUTES3= document.querySelector('span#minutes3');
    const SPAN_SECONDS3 = document.querySelector('span#seconds3');

    const SPAN_DAYS4 = document.querySelector('span#days4');
    const SPAN_HOURS4 = document.querySelector('span#hours4');
    const SPAN_MINUTES4= document.querySelector('span#minutes4');
    const SPAN_SECONDS4 = document.querySelector('span#seconds4');

    const SPAN_DAYS5 = document.querySelector('span#days5');
    const SPAN_HOURS5 = document.querySelector('span#hours5');
    const SPAN_MINUTES5= document.querySelector('span#minutes5');
    const SPAN_SECONDS5 = document.querySelector('span#seconds5');

    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

    function updateCountdown() {
        // Calcs
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const DURATION2 = DATE_TARGET2 - NOW;
        const DURATION3 = DATE_TARGET3 - NOW;
        const DURATION4 = DATE_TARGET4 - NOW;
        const DURATION5 = DATE_TARGET5 - NOW;

        const dias = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const horas = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const minutos= Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const segundos = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        const dias2 = Math.floor(DURATION2 / MILLISECONDS_OF_A_DAY);
        const horas2 = Math.floor((DURATION2 % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const minutos2= Math.floor((DURATION2 % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const segundos2 = Math.floor((DURATION2 % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        const dias3 = Math.floor(DURATION3 / MILLISECONDS_OF_A_DAY);
        const horas3 = Math.floor((DURATION3 % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const minutos3= Math.floor((DURATION3 % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const segundos3 = Math.floor((DURATION3 % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        const dias4 = Math.floor(DURATION4 / MILLISECONDS_OF_A_DAY);
        const horas4 = Math.floor((DURATION4 % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const minutos4= Math.floor((DURATION4 % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const segundos4 = Math.floor((DURATION4 % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        const dias5 = Math.floor(DURATION5 / MILLISECONDS_OF_A_DAY);
        const horas5 = Math.floor((DURATION5 % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const minutos5= Math.floor((DURATION5 % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const segundos5 = Math.floor((DURATION5 % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        // Render
        SPAN_DAYS.textContent = dias;
        SPAN_HOURS.textContent = horas;
        SPAN_MINUTES.textContent = minutos;
        SPAN_SECONDS.textContent = segundos;

        SPAN_DAYS2.textContent = dias2;
        SPAN_HOURS2.textContent = horas2;
        SPAN_MINUTES2.textContent = minutos2;
        SPAN_SECONDS2.textContent = segundos2;

        SPAN_DAYS3.textContent = dias3;
        SPAN_HOURS3.textContent = horas3;
        SPAN_MINUTES3.textContent = minutos3;
        SPAN_SECONDS3.textContent = segundos3;

        SPAN_DAYS4.textContent = dias4;
        SPAN_HOURS4.textContent = horas4;
        SPAN_MINUTES4.textContent = minutos4;
        SPAN_SECONDS4.textContent = segundos4;

        SPAN_DAYS5.textContent = dias5;
        SPAN_HOURS5.textContent = horas5;
        SPAN_MINUTES5.textContent = minutos5;
        SPAN_SECONDS5.textContent = segundos5;
    }

    //===
    // INIT
    //===
    updateCountdown();
    // Refresh every second
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
}