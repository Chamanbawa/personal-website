'use strict';
/*

JavaScript Basics
Preet

*/


function onEvent (event, selector, callback) {
    return selector.addEventListener(event,callback);
}
function  select(selector, parent = document){
    return parent.querySelector(selector);
    }

            
            const modal = select('.section');
            const delay = select('.delay');
            const text = select('.text');
             
            let n = 0;
            const content = ['I wanna let the world know I am here', 'I love exploring ','Go down for More.', 'Good Luck!'];
    
            function lets()  {
            modal.classList.add('lessdelay');
            }
           function lets2(){
        delay.classList.add('is-visible');
    }

    window.addEventListener('load', () =>{

lets();
lets2();

    });

       onEvent('click', delay, function () {
        delay.innerText = (n === 2) ? 'Again?' : 'More'; 
        if ( n === 3) {
         text.innerHTML = content[ n = 0 ];
        return;
}

text.innerHTML = content[ ++n ];

    }); 