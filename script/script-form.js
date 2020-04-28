
const label = document.querySelectorAll('label');
const submit = document.querySelector('.btn-submit');
const input = document.querySelectorAll('input');

submit.addEventListener('click', function(){
    const invalidInput = document.querySelectorAll('input:invalid');
    const invalidTextarea = document.querySelector('textarea:invalid');
    invalidInput.forEach((inp,i)=> {
        inp.classList.add('invalid-input');
        inp.nextElementSibling.classList.add('invalid-label');
    });
    invalidTextarea.classList.add('invalid-input');
    invalidTextarea.nextElementSibling.classList.add('invalid-label');
});

input.forEach((inp,i)=> {
    inp.addEventListener('focusout', function(){
        //here check if input is valid now
    });
});
