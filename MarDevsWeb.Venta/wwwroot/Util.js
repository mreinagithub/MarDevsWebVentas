function setFooterText() {
    document.getElementsByClassName("app-footer")[0].removeAttribute("hidden")
    document.getElementById("footerId").innerText = "MarDevs® 2022 Todos los derechos reservados. Para consultas y comentarios enviar un e-mail a: infomardevs@gmail.com";    
}

function focusElement(id) {

    setTimeout(() => {
        const element = document.getElementById(id);
        element.focus()
    }, 200);
}