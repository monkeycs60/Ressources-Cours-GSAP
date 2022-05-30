const blocLoad = document.querySelector('.load-container');
const video = document.querySelector('video');

const imgContainer = document.querySelector('.images-container');

const image1 = document.querySelector('.flip-img1');
const image2 = document.querySelector('.flip-img2');

const titre1 = document.querySelector('.bloc-txt');
const titre2 = document.querySelector('.bloc-txt h2');

const bgRed = document.querySelector('.flip');

const tl = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: 'power1'
    }
});

tl
.to(imgContainer, {keyframes : [
    {height: '100%'},
    
    
]})
.to (titre1, {keyframes : [
    {translateY: '10%'},
    {height: '20%'},
]}, "-=0.8" )
.to (titre2, {keyframes : [
    {translateY: '10%'}, 
    
]}, "-=0.2")
.to (bgRed,  {translateY: '-100%', duration : 3})
.to (image1, {autoAlpha: 0}, '-=2.2')
.to (blocLoad, {autoAlpha: 0})
//play the video after that
.to (video, {autoAlpha: 1, onComplete: () => video.play()}, '-=0.5')

