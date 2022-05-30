const texte = document.querySelector('.car');


const ensemble = document.querySelectorAll('.vertical-slider');
console.log(ensemble);
//gasp timeline
const timeline = gsap.timeline({repeat: -1});      


timeline
.to('.vertical-slider p', { y: 0, autoAlpha: 1, stagger: 1 })
.to('.vertical-slider p', { y: -100, autoAlpha: 0, stagger: 1 }, 1)






  


