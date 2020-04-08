'use strict';
let
    adv = document.getElementsByClassName('adv')[0],
    title = document.getElementById('title'),
    menuItem = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu')[0],
    promptforApple = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);



let five = document.createElement('li');
five.classList.add('menu-item');
five.textContent = 'Пятый пунк';
menu.appendChild(five);


adv.remove();

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

title.textContent = 'Мы продаем только подлинную технику Apple?';

let yourOpinion = prompt("Что вы думаете про технику Apple?"); 
promptforApple.textContent = yourOpinion;