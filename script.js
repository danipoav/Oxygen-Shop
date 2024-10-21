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

const updateProgressBar = () => {
    const progressBar = document.getElementById('progressBar')

    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const progress = (scrollHeight / (documentHeight - windowHeight)) * 100;
    console.log(progress);


    progressBar.style.width = progress + '%';
}

window.addEventListener('scroll', updateProgressBar)