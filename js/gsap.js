let autoCounter = document.getElementsByClassName("autoCounter")

let span1 = autoCounter[0];
let span2 = autoCounter[1];
let span3 = autoCounter[2];
let span4 = autoCounter[3];
function counter(el, limit) {
    let i = limit - 100;
    let element = el;
    let interval = setInterval(() => {
        el.innerText = i<=9 && i>=0 && i==0 ? "0"+Math.abs(i) +"+" : Math.abs(i) +"+";
        i >= limit ? clearInterval(interval) : i++;

    }, 16)
}

var checkCounter = true;

gsap.registerPlugin(ScrollTrigger);
gsap.from(".about-head", { x: -100, opacity: 0, duration: 1, ease: Power2.easeOut });
gsap.from(".about-para", { y: -100, opacity: 0, duration: 1, delay: 1, ease: Power2.easeOut });
gsap.from(".trigger", {
    scrollTrigger:
    {
        trigger: ".stats-div",
        onEnter: function counterdiv() {
            if(checkCounter){
            counter(span1, 17);
            counter(span2, 50);
            counter(span3, 35000);
            counter(span4, 8000);
            }
            checkCounter = false
            
        },
        start: `20px 80%`
        
       
    },
    x:"-20",
    duration: 0.5,
    stagger: 0.5
});
