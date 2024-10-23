
import { menuDesplegable } from "./menu.js";
import { updateProgressBar } from "./progressBar.js";
import { returnTop, buttonAppearance } from "./buttonTop.js"
import { sendData } from "./dataForm.js";

document.getElementById('menu-icon').addEventListener('click', menuDesplegable)
document.getElementById('return--top').addEventListener('click', returnTop)
window.addEventListener('scroll',buttonAppearance);
window.addEventListener('scroll', updateProgressBar);
document.getElementById('form').addEventListener('submit', sendData)







