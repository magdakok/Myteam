const openNavIcon = document.querySelector('#open-nav');
const closeNavIcon = document.querySelector('#close-nav');
const menu = document.querySelector('.nav__box');

openNavIcon.addEventListener('click', function(){
    menu.style.right='0';
})

closeNavIcon.addEventListener('click', function(){
    menu.style.right='-68%';
})