//открытие формы для связи

var writeUs = document.querySelector(".contacts-button");
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".close-button");
var nameInput = modal.querySelector("[name=name]");

//импровизированный слайдер 

var firstBtn = document.querySelector(".button--1");
var secondBtn = document.querySelector(".button--2");
var thirdBtn = document.querySelector(".button--3");
var firstSlide = document.querySelector(".slide--1");
var secondSlide = document.querySelector(".slide--2");
var thirdSlide = document.querySelector(".slide--3");

//открытие окна формы

writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  nameInput.focus();
});

//закрытие окна формы 

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});

//закрытие окна формы клавишей Esc

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
    }
  }
});

//попытки скастовать слайдер и не сломать всё
//нажатие на первую кнопку слайдера

firstBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstBtn.classList.add("active");
  firstSlide.classList.add("slide--show");
  secondBtn.classList.remove("active");
  secondSlide.classList.remove("slide--show");
  thirdBtn.classList.remove("active");
  thirdSlide.classList.remove("slide--show");
});

//нажатие на вторую кнопку слайдера 

secondBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstBtn.classList.remove("active");
  firstSlide.classList.remove("slide--show");
  secondBtn.classList.add("active");
  secondSlide.classList.add("slide--show");
  thirdBtn.classList.remove("active");
  thirdSlide.classList.remove("slide--show");
});

//нажатие на третью кнопку слайдера

thirdBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstBtn.classList.remove("active");
  firstSlide.classList.remove("slide--show");
  secondBtn.classList.remove("active");
  secondSlide.classList.remove("slide--show");
  thirdBtn.classList.add("active");
  thirdSlide.classList.add("slide--show");
});
