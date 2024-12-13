const xBtn = document.getElementById('x-btn');
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');
menuBtn.addEventListener('click' , () => {
    nav.style = 'margin-right:initial';
})
xBtn.addEventListener('click' , () => {
    nav.style = 'margin-right:-500px';
})

var typed = new Typed('.input',{
    strings :['Front End Developer','Full Stack Developer','Back End Developer'] ,
    typeSpeed : 70,
    backSpeed  : 55,
    loop : true
})