const navLinks = document.querySelectorAll('nav a');
const navImgs = document.querySelectorAll('nav img');
const h1Section= document.querySelector('.home-content h1');
const imgSection= document.querySelector('.home-content img');
const buttonSection= document.querySelector('.home-content button');
const middleLine= document.querySelector('.home-content .middle-line');
console.log(navLinks);
console.log(navImgs);

const tl = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: 'slow(0.7, 0.7)'
    }
});
tl.
fromTo(h1Section, {}, { y: 0, autoAlpha: 1})
.fromTo(middleLine, {}, { y: 0, autoAlpha: 1, height: 200})
.fromTo(imgSection, {}, { y: 0, autoAlpha: 1}) 
.fromTo(buttonSection, {}, { y: 0, autoAlpha: 1})
.fromTo(navLinks, {}, { y: 0, autoAlpha: 1, stagger: 0.1})
.fromTo(navImgs, {}, { y: 0, autoAlpha: 1})

  