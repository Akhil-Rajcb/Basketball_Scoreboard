let homeScoreEl=document.getElementById("homescore-el")
let awayScoreEl=document.getElementById("awayscore-el")

let awayCount=0
let homeCount=0

function plusOneH(){
    homeCount+=1
    homeScoreEl.textContent=homeCount
}

function plusTwoH(){
    homeCount+=2
    homeScoreEl.textContent=homeCount
}

function plusThreeH(){
    homeCount+=3
    homeScoreEl.textContent=homeCount
}

function plusOneA(){
    awayCount+=1
    awayScoreEl.textContent=awayCount
}

function plusTwoA(){
    awayCount+=2
    awayScoreEl.textContent=awayCount
}

function plusThreeA(){
    awayCount+=3
    awayScoreEl.textContent=awayCount
}
function reset(){
    awayScoreEl.textContent=0
    homeScoreEl.textContent=0
    homeCount=0
    awayCount=0
}