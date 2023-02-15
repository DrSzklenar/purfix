let menu = document.getElementById("menu");
let button = document.getElementById("hamburger-lines");
let material = document.getElementById('material');
let message = document.getElementById("tajekoztato");

window.onscroll = function() {
    closeMenu();
    ClosePopup();
};



function openmenu() {
    menu.classList.toggle("menushown");
    button.classList.toggle("menushown");
}

function closeMenu() {
    menu.classList.remove("menushown");
    button.classList.remove("menushown");
}

function ClosePopup(){
    message.classList.remove("animation");
}


function scrollDown() {
    if (document.documentElement.scrollTop % document.documentElement.clientHeight == 0 || document.documentElement.scrollTop == 0) {
        window.scrollTo(0, document.documentElement.scrollTop + document.documentElement.clientHeight)
    }
    else {
        window.scrollTo(0, Math.ceil(document.documentElement.scrollTop / document.documentElement.clientHeight) * document.documentElement.clientHeight - document.querySelector('nav').clientHeight);
    }
}



document.querySelector('.menupoint').addEventListener('click', () => {
    scrollDown();       
});

document.querySelector('#intro').addEventListener('click', () => {
    scrollDown();       
});

document.querySelectorAll('.menupoint').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.menupoint').forEach(i => {
            i.classList.remove('active');
            
        });
        item.classList.add('active');
        closeMenu();
    });
});


let inputs = [];
document.querySelectorAll('input').forEach(element => {
    inputs.push(element);
});



function CalcAndUnhide(){
    Calc();
    Unhide();
}


function Calc() {
    let anyag = material.options[material.selectedIndex].value.split(";");

    console.log(parseFloat(anyag[1]));
    inputs.forEach(element => {
        console.log(element);
    });

    let osszeg = inputs[0].value * inputs[1].value * anyag[0];
    console.log(osszeg);
    inputs[inputs.length - 2].value = inputs[0].value * inputs[1].value * anyag[0] + " Ft";
    inputs[inputs.length - 3].value = (inputs[1].value *  parseInt(anyag[1])) / 100  + " λ [W/mK]";


}

function Unhide(){
    
    message.classList.add("animation");
}