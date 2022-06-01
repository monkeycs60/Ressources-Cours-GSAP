//const h1
 const h1 = document.querySelector('h1');
 //const mountains
  const mountains = document.querySelector('.home-mountains img');
  //const home-mountains
    const homeMountains = document.querySelector('.home-mountains');
 
    const tl = gsap.timeline({
    });
tl 
.to(h1, {
    duration: 1,
    y: 650,
    //scroll trigger
    scrollTrigger: {
        trigger: homeMountains,
        markers: true,
        start: '20% 20%',
        end: '200% bottom',
        toggleActions: 'play pause reverse reset',
        scrub: true
    }
})
.to(mountains, {
    duration: 1,
    y: -350,
    //scroll trigger
    scrollTrigger: {
        trigger: mountains,
        // markers: true,
        start: '20% 50%',
        end: '200% bottom',
        toggleActions: 'play pause reverse reset',
        scrub: true
    }
})
