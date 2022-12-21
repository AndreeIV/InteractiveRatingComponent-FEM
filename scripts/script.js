const numbers = document.querySelectorAll('.number');
const selected = document.getElementById('selected');
const btnSubmit = document.getElementById('btn-submit');
const ratingState = document.querySelector('.container__rating-state-start');
const thankYouState = document.querySelector('.container__thankYou-state-start');

numbers.forEach( number => {
    number.addEventListener('click', () => {

        btnSubmit.addEventListener('click', () => {
            
            selected.innerText = number.innerText;
            ratingState.style.display = 'none'
            thankYouState.style.display = 'flex'
        });
    })
})



