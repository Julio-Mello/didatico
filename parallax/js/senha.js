let password = document.getElementById("password");
let alternar = document.getElementById("alternar");

alternar.onclick = function mostrarOcultar(){
    if(password.type === "password") {
        password.setAttribute("type","text");
        alternar.classList.add("hide")
    }
    else
    {
        password.setAttribute("type","password");
        alternar.classList.remove("hide")
    }
}