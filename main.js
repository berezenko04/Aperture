'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuOpened = document.querySelector('.menu__opened');

    menu.addEventListener('click', () => {
        if (menuOpened.classList.contains('xs:hidden')) {
            menuOpened.classList.remove('xs:hidden');
            menuOpened.classList.add('xs:block');
        } else {
            menuOpened.classList.remove('xs:block');
            menuOpened.classList.add('xs:hidden');
        }
    })
})