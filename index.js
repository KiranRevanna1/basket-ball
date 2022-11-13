numEl = document.getElementById('num-el')
numberEl = document.getElementById('number-el1')
let data = 0;
function button1(){
    data += 1; 
    numEl.textContent = data;
}

function button2(){
    data += 2; 
    numEl.textContent = data;
}

function button3(){
    data += 3; 
    numEl.textContent = data;
}
let add = 0;
function buttonR1(){
    add += 1; 
    numberEl.textContent = add;
}

function buttonR2(){
    add += 2; 
    numberEl.textContent = add;
}

function buttonR3(){
    add += 3; 
    numberEl.textContent = add;
}