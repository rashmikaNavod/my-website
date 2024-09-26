const sideMenu = document.querySelector('#sideMenu');

function openMenu(){
    sideMenu.style.transform = 'translateX(-100vw)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(100vw)';
}