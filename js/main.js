//Main.js


// Js for custom cursor
let cursor = document.querySelector('.cursor');
let cursorinner = document.querySelector('.cursor2');
let a = document.querySelectorAll('a');
let loadingDiv=document.querySelector(".loading-bar");

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// Js for loading bar
function getScrollPercent() {
  var h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}
window.addEventListener('scroll',()=>{
  let a=getScrollPercent();
  loadingDiv.style.width=`${a}%`;
})

let whatsapp = document.getElementById("whatsapp")

window.addEventListener('scroll',()=>{
  if(window.scrollY===0){
    whatsapp.style.display="none";
  }
  else{
    whatsapp.style.display="flex";
  }
})

let totop = document.getElementsByClassName("totop")[0]

totop.addEventListener('click',()=>{
  window.scrollTo(0, 0);
})


let body = document.getElementsByTagName("body")[0]
body.setAttribute("oncontextmenu", "return true")

