
//gsap to

const containerScroll = document.querySelector('.container-scroll');
const bloc1 = document.querySelector('.bloc1');
const bloc2 = document.querySelector('.bloc2');
const bloc3 = document.querySelector('.bloc3');
const bloc4 = document.querySelector('.bloc4');

//const .bloc h2,.bloc p
const bloc1h2 = document.querySelectorAll('.bloc1 h2', '.bloc1 p');
const bloc2h2 = document.querySelectorAll('.bloc2 h2', '.bloc2 p');
const bloc3h2 = document.querySelectorAll('.bloc3 h2', '.bloc3 p');
console.log(bloc1h2);

//create const bloc2+bloc3+bloc4
const blocsFirstStep = [bloc2, bloc3, bloc4];

const blocsSecondStep = [bloc3, bloc4];
const blocsThirdStep = [bloc4];





destroyOpacity(bloc1h2, bloc1);
splashFusee(bloc2,20);
destroyOpacity(bloc2h2, bloc2, "200% bottom");
splashFusee(bloc3,20); 
destroyOpacity(bloc3h2, bloc3, "120% bottom"); 
splashFusee(bloc4,70);

//bloc2 offsetTop
const bloc3OffsetTop = bloc3.offsetTop;
console.log(bloc2OffsetTop);


//get the position of the bloc2



function splashFusee(block, distance) {
  gsap
.to(block, {
    duration: 2, 
    y: distance,
    opacity: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: containerScroll,
        start: "0% 50%",
        end: "bottom bottom",
        scrub: 1,
     


}

})}

function destroyOpacity(numberblock, blockscroll,end){
    gsap.to(numberblock, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            trigger: blockscroll,
            //trigger = blockscroll+100px

            start: "0% 80%",
            end: end,
            markers: true,
    
    
    }

        })};