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