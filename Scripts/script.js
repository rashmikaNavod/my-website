var loader = document.getElementById("preloader");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})


const sideMenu = document.querySelector('#sideMenu');
const headerBar = document.querySelector('header')
const headerLinks = document.querySelector('header ul')

function openMenu(){
    sideMenu.style.transform = 'translateX(-100vw)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(100vw)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        headerBar.classList.add('bg-white');
        headerLinks.classList.remove('nav-list2');
    }else{
        headerBar.classList.remove('bg-white');
        headerLinks.classList.add('nav-list2');
    }
})