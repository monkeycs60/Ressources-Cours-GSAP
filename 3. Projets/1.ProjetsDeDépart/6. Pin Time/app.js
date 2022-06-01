const src = [
    "ressources/spartan.svg",
    "ressources/castle.svg",
    "ressources/da-vinci.svg",
    "ressources/airplane.svg",
  ];
  
  const dates = [
    "-3300 | 476",
    "476 | 1492",
    "1492 | 1792",
    "1792 | AJD",
  ]
  
const s1 = document.querySelector('.s1');
const s2 = document.querySelector('.s2');
const s3 = document.querySelector('.s3');
const s4 = document.querySelector('.s4');
const sections = document.querySelector('.sections');

const tooltip = document.querySelector('.tooltip');



gsap
.to(sections, {
    scrollTrigger: {
        trigger: sections,
        pin: tooltip,
        scrub: true,
        start: "0% 30%",
        end: "bottom bottom",
    }})
  

console.log(Array.from(sections.children));

const eachSection = Array.from(sections.children);
// foreach loop to change the tooltip image and text in  every section
// eachSection.forEach((section, index) => {
//     section.addEventListener('mouseenter', () => {
//         tooltip.innerHTML = `<img src="${src[index]}">
//         <p>${dates[index]}</p>`;
//     });
//     section.addEventListener('mouseleave', () => {
//       tooltip.innerHTML = `<img src="${src[index]}">
//       <p>${dates[index]}</p>`;
//     });
// });

//foreach loop to change the tooltip image and text in every onenter while scroll trigger
eachSection.forEach((section, index) => {
  console.log('.tooltip img'); 
  ScrollTrigger.create({
    trigger: section,
    markers: true,
    start: "0% center",
    end: "100% center",
    pin: tooltip,
    onEnter: () => {
      gsap.set('.tooltip-img', {
        attr: {src: src[index]}
      })
      gsap.set('.tooltip p', {
        innerText: dates[index]
      })
     
     
    },
    onEnterBack: () => {
      gsap.set('.tooltip-img', {
        attr: {src: src[index]}
      })
      gsap.set('.tooltip p', {
        innerText: dates[index]
      })
  
  }  });
});



