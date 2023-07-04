document.getElementById("green").onclick=Green
document.getElementById("purple").onclick=Purple
document.getElementById("yellow").onclick=Yellow

function Green(){
    document.querySelector('body').style.background='rgba(0, 255, 0,0.4)'
    document.querySelector('body').style.color='white'
}

function Purple(){
    document.querySelector('body').style.background='rgba(128,0,128,0.6)'
    document.querySelector('body').style.color='white'
}

function Yellow(){
    document.querySelector('body').style.background='rgba(255,255,0,1)'
    document.querySelector('body').style.color='white'
}