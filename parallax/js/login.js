const form = document.getElementsByClassName("container__formulario");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const alternar = document.getElementById("alternar");

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

form.addEventListerner("submit", (event) => {
    event.preventDefault();

    if (emailInput.value === "" || !emailValido(emailInput.value)) {
    alert ("Preencha o campo email");
    return;
    }
    form.submit();
})

function emailValido(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}