const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
const openModalBtns = document.querySelectorAll('.price__body-btn');
const openModalBtn = document.querySelector(".header__btn");
const closeModalBtn = document.querySelector(".modal__buttons-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
};

openModalBtns .forEach(function(btn) {
    btn.addEventListener("click", openModal);
});

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

overlay.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);