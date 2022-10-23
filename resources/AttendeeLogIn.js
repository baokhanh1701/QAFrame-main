var btnDisabled = document.getElementById('anonymous');
var inpBox = document.getElementById('input-box');
btnDisabled.addEventListener('click',(e)=>{
    if(btnDisabled.checked){
        inpBox.value = "ANONYMOUS PERSON";
        inpBox.disabled = true;
    }
    else {
        inpBox.disabled = false;
        inpBox.value = "";
    }
})