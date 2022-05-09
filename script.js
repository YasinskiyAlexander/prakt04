'use strict'
let palette = document.querySelector('#palette');
let canvas = document.querySelector('.canvas');

let currentColor = 'white';

palette.addEventListener('click', function(e){
    if(e.target.tagName === 'TD'){
        currentColor = getComputedStyle(e.target).backgroundColor;
        for(let row of this.rows){
            for (let cell of row.children) {
                if(cell.classList.contains('sellected'))
                    cell.classList.remove('sellected');
            }
        }
        e.target.classList.add('sellected');
    }
});

canvas.addEventListener('click', function(e){
    if(e.target.tagName === 'TD')
        e.target.style.backgroundColor = currentColor;
});

//--------------------------------------------------------------- Cards
let cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('click', function(){
        this.classList.toggle('flipped');
    });
}