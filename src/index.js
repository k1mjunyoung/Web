const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})