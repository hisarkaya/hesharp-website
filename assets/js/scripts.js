function toggleMenu() {
    var menu = document.getElementById('mainMenu');
    if (menu.className === 'main-menu') {
        menu.className += ' toggle';
    } else {
        menu.className = 'main-menu'
    }
}