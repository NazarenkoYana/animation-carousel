let selectedIndex = 0;
let theta = 360 / 9;

let carousel = document.querySelector('.carousel');
let cells = carousel.querySelectorAll('.carousel__cell');
let cellWidth = carousel.offsetWidth;
let cellHeight = carousel.offsetHeight;
let radius = Math.round((cellWidth / 2) / Math.tan(Math.PI / 9));

let cellCount; // cellCount set from cells-range input value

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function () {
    selectedIndex--;
    rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function () {
    theta
    selectedIndex++;
    rotateCarousel();
});

function rotateCarousel() {
    let angle = theta * selectedIndex * -1;
    carousel.style.transform = '' +
        'rotateY' + '(' + angle + 'deg)';
}
