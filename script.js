'use strict'
let palette = document.querySelector('#palette');
let canvas = document.querySelector('.canvas');

let currentColor = 'white';

palette.addEventListener('click', function(e){
    currentColor = getComputedStyle(e.target).backgroundColor;
    for(let child of this.children){
        if(child.hasAttribute('style'))
            child.removeAttribute('style')
    }
    e.target.style.borderColor = 'aqua';
    
});

canvas.addEventListener('click', function(e){
    e.target.style.backgroundColor = currentColor;
});

//--------------------------------------------------------------- Cards
let cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('click', function(){
        this.classList.toggle('flipped');
    });
}