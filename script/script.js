const openNavIcon = document.querySelector('#open-nav');
const closeNavIcon = document.querySelector('#close-nav');
const menu = document.querySelector('.nav__box');
const background = document.querySelector('.nav__background');

openNavIcon.addEventListener('click', function(){
    menu.style.right='0';
    background.style.zIndex='2';
    background.style.opacity='1';

})

closeNavIcon.addEventListener('click', function(){
    menu.style.right='-68%';
    background.style.zIndex='-1';
    background.style.opacity='0';
})