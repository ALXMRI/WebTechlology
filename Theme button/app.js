var btn = document.getElementById('btn');

btn.onmouseover = function(){
    document.body.style.background = "darkgrey";
    btn.style.color = "black";
}
btn.onmouseleave = function(){
    document.body.style.background = "black";
    btn.style.color = "black";
}


btn.onclick = function(){
    document.body.classList.remove('light')
    document.body.classList.remove('dark')
}
