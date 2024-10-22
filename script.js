const showMenu = () => {

    const menuList = document.getElementById('menu-list');
    const menuOpen = menuList.classList.toggle('active');
    const menuIcon = document.getElementById('menu-icon');

    if (menuOpen) {
        menuIcon.classList.add('active');
    } else {
        menuIcon.classList.remove('active');
    }

}

const returnTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, 200)
}

const updateProgressBar = () => {
    const progressBar = document.getElementById('progressBar')

    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const progress = (scrollHeight / (documentHeight - windowHeight)) * 100;

    progressBar.style.width = progress + '%';
}

window.addEventListener('scroll', updateProgressBar);

document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault();

    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const checkbox = document.getElementById('checkbox');

    if (name.value.length < 2 || name.value.length > 100) {
        name.classList.add('error')
        valid = false;
    } else {
        name.classList.remove('error')
    }

    const emailvalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailvalid.test(email.value)) {
        email.classList.add('error');
        valid = false;
    } else {
        email.classList.remove('error')
    }

    if (!checkbox.checked) {
        checkbox.nextElementSibling.style.border = '1px solid red';
        valid = false;
    } else {
        checkbox.nextElementSibling.style.border = '';

    }

    if (valid) {
        console.log('formulario valido')

        const URL = 'https://jsonplaceholder.typicode.com/posts'
    }

})