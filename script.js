function openmenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("menushown");
    let button = document.getElementById("hamburger-lines");
    button.classList.toggle("menushown");
}

function scrollDown() {
    if (document.documentElement.scrollTop % document.documentElement.clientHeight == 0 || document.documentElement.scrollTop == 0) {
        window.scrollTo(0, document.documentElement.scrollTop + document.documentElement.clientHeight - document.querySelector('nav').clientHeight)
    }
    else {
        window.scrollTo(0, Math.ceil(document.documentElement.scrollTop / document.documentElement.clientHeight) * document.documentElement.clientHeight - document.querySelector('nav').clientHeight);
    }
}


document.querySelector('#intro').addEventListener('click', () => {
    scrollDown();       
});

document.querySelectorAll('.menupoint').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.menupoint').forEach(i => {
            i.classList.remove('active');
            
        });
        item.classList.add('active');
    });
});


let inputs = [];
document.querySelectorAll('input').forEach(element => {
    inputs.push(element);
});
let material = document.getElementById('material');

function Calc() {
    let anyag = material.options[material.selectedIndex].value;

    inputs.forEach(element => {
        console.log(element);
    });

    let osszeg = inputs[0].value * inputs[1].value * anyag;
    console.log(osszeg);
    inputs[inputs.length - 2].value = inputs[0].value * inputs[1].value * anyag;


}
