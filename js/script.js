"use strict";
let body = document.querySelector('body');
let headerBurger = body.querySelector('.header__burger');
let headerMenu = body.querySelector('.navigation');

headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
});