var btn = document.getElementById('btn');

btn.onmouseover = function(){
    document.body.style.background = "black";
    btn.style.color = "white";
}
btn.onmouseleave = function(){
    document.body.style.background = "white";
    btn.style.color = "black";
}