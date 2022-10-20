var btnHidden = document.getElementById('hidden');
var password = document.getElementById('pass');
var btnFigureOut = document.getElementById('figure-out');

btnHidden.addEventListener('click',(e)=>{
    btnHidden.style.display = "none";
    password.type = "password";
    btnFigureOut.style.display="inline";
})
btnFigureOut.addEventListener('click',(e)=>{
    btnFigureOut.style.display = "none";
    password.type = "text";
    btnHidden.style.display="inline";
})
/* */
var reBtnHidden = document.getElementById('re-hidden');
var rePassword = document.getElementById('re-pass');
var reBtnFigureOut = document.getElementById('re-figure-out');

reBtnHidden.addEventListener('click',(e)=>{
    reBtnHidden.style.display = "none";
    rePassword.type = "password";
    reBtnFigureOut.style.display="inline";
})
reBtnFigureOut.addEventListener('click',(e)=>{
    reBtnFigureOut.style.display = "none";
    rePassword.type = "text";
    reBtnHidden.style.display="inline";
})
