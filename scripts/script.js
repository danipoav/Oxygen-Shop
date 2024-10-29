
import { menuDesplegable } from "./menu.js";
import { updateProgressBar } from "./progressBar.js";
import { returnTop, buttonAppearance } from "./buttonTop.js"
import { sendData } from "./dataForm.js";
import { currentCoin } from "./currentCoin.js";
import { showModalScroll, closeModal, showModalWindow, sendDataModal, notNumber } from "./modal.js";
import { Slider } from "../class/class-Slider.js";

//ShowMenu
document.getElementById('menu-icon').addEventListener('click', menuDesplegable)

//Button top
document.getElementById('return--top').addEventListener('click', returnTop)
window.addEventListener('scroll', buttonAppearance);

//Progress Bar
window.addEventListener('scroll', updateProgressBar);

//Get current coin
document.getElementById('coin').addEventListener('change', currentCoin)

//Send data form
document.getElementById('form').addEventListener('submit', sendData)

//Modal functions
window.addEventListener('scroll', showModalScroll)
document.getElementById('crossModal').addEventListener('click', closeModal)
document.getElementById('modal').addEventListener('click', closeModal)
document.getElementById('formModal').addEventListener('submit', sendDataModal)
window.addEventListener('keydown', closeModal)
document.getElementById('emailModal').addEventListener('keydown', notNumber)
document.getElementById('name').addEventListener('keydown', notNumber)
showModalWindow();

//calling Slider class 
new Slider('slider')

//localStorageitem remove when reload page

document.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('modalClosed')
})