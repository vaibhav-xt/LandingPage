const sidebar = document.querySelector('.side-bar');
const bars = document.querySelector('.fa-bars');
const cross = document.querySelector('.cross');


bars.addEventListener('click', () => {
    sidebar.classList.toggle('show-bar');
    bars.style.display = 'none';
    cross.style.display = 'block';
})

cross.addEventListener('click', () => {
    sidebar.classList.toggle('show-bar');
    cross.style.display = 'none';
    bars.style.display = 'block'
})


const boxesShow = document.querySelectorAll('.boxes-show');

boxesShow.forEach((boxShow) => {
    const cards = boxShow.querySelector('.footer-card');
    const box = boxShow.querySelector('.footer-card-div');
    const plus = boxShow.querySelector('.fa-plus');
    var count = 0;

    cards.addEventListener('click', () => {
        box.classList.toggle('show-box');
        if (count == 1) {
            plus.style.transform = 'rotate(0deg)';
            count = 0;
        }
        else {
            plus.style.transform = 'rotate(45deg)';
            count++;
        }
    })
})

