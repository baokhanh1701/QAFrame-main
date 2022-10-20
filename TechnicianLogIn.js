var btnHidden = document.getElementById('hidden');
var password = document.getElementById('pass');
var btnFigureOut = document.getElementById('figure-out');
btnFigureOut.addEventListener('click',(e)=>{
    btnFigureOut.style.display = "none";
    password.type = "text";
    btnHidden.style.display="inline";
})
btnHidden.addEventListener('click',(e)=>{
    btnHidden.style.display = "none";
    password.type = "password";
    btnFigureOut.style.display="inline";
})