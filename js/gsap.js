let krutik = "krutik"
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

// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".about", {
//     scrollTrigger:
//     {
//         trigger: ".stats-div",
//         onEnter: function ,
//         markers:true,
//         start: `-50% 80%`
        
       
//     },
   
//     duration: 0.5,
//     stagger: 0.5
// });


function counterdiv() {
    if(checkCounter){
    counter(span1, 17);
    counter(span2, 50);
    counter(span3, 35000);
    counter(span4, 8000);
    }
    checkCounter = false
    
}

showScrollTop = () => {
    const currentScrollPosition = window.pageYOffset;
    let elementID = 'about'
    const elementOffsetTop = document.getElementById(elementID).offsetTop

    if (currentScrollPosition > elementOffsetTop - 300) {
        counterdiv()
    } else {
    //  document.getElementById('campusAmb').style.color = "white";
    }
  }

  window.addEventListener('scroll', showScrollTop)