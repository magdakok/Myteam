const btns = document.querySelectorAll('.btn-about');
const frontSide = document.querySelectorAll('.director__side--front');
const backSide = document.querySelectorAll('.director__side--back');

btns.forEach((btn,i)=>{
    btn.addEventListener('click', function(){
        btn.classList.toggle('btn--back');
        btn.classList.toggle('btn--more');
        frontSide[i].classList.toggle('show-front');
        frontSide[i].classList.toggle('hide-front');
        backSide[i].classList.toggle('show-back');
        backSide[i].classList.toggle('hide-back');
    });
});





