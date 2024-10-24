
import { menuDesplegable } from "./menu.js";
import { updateProgressBar } from "./progressBar.js";
import { returnTop, buttonAppearance } from "./buttonTop.js"
import { sendData } from "./dataForm.js";
import { currentCoin } from "./currentCoin.js";
import { showModalScroll, showModal, closeModal } from "./modal.js";

document.getElementById('menu-icon').addEventListener('click', menuDesplegable)
document.getElementById('return--top').addEventListener('click', returnTop)
window.addEventListener('scroll', buttonAppearance);
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('scroll', showModalScroll)
document.getElementById('form').addEventListener('submit', sendData)
document.getElementById('coin').addEventListener('change', currentCoin)
document.getElementById('crossModal').addEventListener('click', closeModal)
document.getElementById('modal').addEventListener('click',closeModal)
setTimeout(showModal, 5000)







