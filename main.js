const mainCtn = document.querySelector('.main-container');
const xBtn = document.getElementById('x-btn');
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');
menuBtn.addEventListener('click' , () => {
    mainCtn.style = 'height:100vh;overflow-y:hidden';
    nav.style = 'margin-right:initial';
})
xBtn.addEventListener('click' , () => {
    nav.style = 'margin-right:-500px';
    mainCtn.style = 'height:initial;overflow-y:initial';

})

var typed = new Typed('.input',{
    strings :['Oualid Atiya','A Web Developer'] ,
    loop:true,
    typeSpeed : 55,
    backSpeed  : 55,
    startDelay: 500,
    backDelay: 2000,
})

const navlinks = document.querySelectorAll('.ctn-links a');
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.style = 'margin-right:-500px';
        mainCtn.style = 'height:initial;overflow-y:initial';
    })
})