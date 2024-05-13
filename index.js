const ratingsArray = document.querySelectorAll('[data-rating]');

const submit = document.querySelector('button');

const thankYouDiv = document.querySelector('#backside-component');

const frontDiv =document.querySelector('#frontside-component');
const selectedRating = document.querySelector('#selected-rating');

let ratingInput = 0;

function clickNumber(rating) {
    ratingInput = rating;
//    console.log('numberInput: ', ratingInput);
    submit.style.backgroundColor ='hsl(25 97% 53%)';
    submit.removeAttribute('disabled');
}

function clickSubmit() {
    thankYouDiv.style.display = 'block';
    frontDiv.style.display  = 'none';
    selectedRating.textContent = ratingInput;

}

// ratingsArray[0].addEventListener('click', () => clickNumber(ratingsArray[0].dataset.rating));
// ratingsArray[1].addEventListener('click', () => clickNumber(ratingsArray[1].dataset.rating));
// ratingsArray[2].addEventListener('click', () => clickNumber(ratingsArray[2].dataset.rating));
// ratingsArray[3].addEventListener('click', () => clickNumber(ratingsArray[3].dataset.rating));
// ratingsArray[4].addEventListener('click', () => clickNumber(ratingsArray[4].dataset.rating));

ratingsArray.forEach(elem => {
    elem.addEventListener('click', (event) => {clickNumber(event.target.dataset.rating)});
});

submit.addEventListener('click', clickSubmit)

