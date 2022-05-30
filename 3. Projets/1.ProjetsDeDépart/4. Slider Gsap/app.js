
let compteur = 0;

//const slider-container
const slider = document.querySelector('.slider-container');
//const first child of counter
const firstChildCounter = document.querySelector('.counter').firstElementChild;


//const button previous
const previous = document.querySelector('.btn-prev');
//const button next
const next = document.querySelector('.btn-next');


const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');
const s3 = document.querySelector('.s3');

//addeventlistener to previous button, if click, call function
previous.addEventListener('click', () => {
    
    if (compteur === 0) {
        gsap.to (slider, {keyframes: [ 
            {x: 10},
            {x: 0},
            {x: -10},
            {x: 0},
            {x: 10},
            {x: 0},
            {x: -10},
            {x: 0}
            
        ], duration: 0.5, ease: 'power1.inOut'});
    }
    if (compteur === 1) {
        gsap.to (s1, {opacity: 1});
        gsap.to (s2, {translateX: "-100%"});
        firstChildCounter.innerHTML = "1";
        
        compteur--;
    }
    if (compteur === 2) {
        gsap.to (s2, {opacity: 1});
        gsap.to (s3, {translateX: "-100%"});
        firstChildCounter.innerHTML = "2";
      
       compteur--;
    }
        
    }
    );

function defilementPrev() {
   
}

console.log(compteur);

next.addEventListener('click', () => {
     //z-index of s1 to -1
     if (compteur === 2) {
         //animation gasp s3
         gsap.to (slider, {keyframes: [ 
            {x: 10},
            {x: 0},
            {x: -10},
            {x: 0},
            {x: 10},
            {x: 0},
            {x: -10},
            {x: 0}

            ], duration: 0.5, ease: 'power1.inOut'});
 
     }
     if (compteur === 1) {
         
            gsap.to (s2, {opacity: 0});
            gsap.to (s3, {translateX: 0, opacity: 1});
            firstChildCounter.innerHTML = "3";
         compteur += 1;
     }
     if (compteur === 0) {
     
        gsap.to (s1, {opacity: 0});
        gsap.to (s2, {translateX: 0, opacity: 1});
        firstChildCounter.innerHTML = "2";
         compteur += 1;
     }
} );
