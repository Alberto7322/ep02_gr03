function crearSesion(){
    const userInput=document.querySelector("#username");
    const passInput=document.querySelector("#password");
    const nameInput=document.querySelector("#name");
    const mailInput=document.querySelector("#email");
    const dateInput=document.querySelector("#date");
    const urlInput=document.querySelector("#url");
    const checkInput=document.querySelector("#check");

    alert(userInput.value)

    var data =JSON.stringify({'user': userInput.value, 
    'password': passInput.value, 'name': nameInput.value, 
    'email': mailInput.value, 'date': dateInput.value, 
    'url':urlInput.value, 'check': checkInput.checked
    });

    sessionStorage.setItem("user",data)
 
}