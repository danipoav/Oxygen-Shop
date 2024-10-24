const modal = document.getElementById('modal')


export function showModal() {

    let showed = false;

    if (!showed) {
        modal.classList.add('active')
        showed = true;
    }
}

export function closeModal() {
    modal.classList.remove('active')
}

export function showModalScroll() {
    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const progress = (scrollHeight / (documentHeight - windowHeight)) * 100;

    if (progress > 25) {
        showModal();
    }
}

export function closeModalWindow() {

}


