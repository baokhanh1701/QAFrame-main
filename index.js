function signInAnonymous() {
    let isCheck = document.getElementById("anonymously").checked;
    if (isCheck === true) {
        let textbox = document.getElementById("nameInput");
        textbox.value = "Anonymous User";
        textbox.setAttribute("disabled", "true");
    } else if (isCheck === false) {
        let textbox = document.getElementById("nameInput");
        textbox.value = "";
        textbox.removeAttribute("disabled");
    }
}

setTimeout(() => {
    document.body.setAttribute("class","loaded");
}, 2500);