//preloader javascript
var loader = document.getElementById("preloader");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})


//header change nav-list javascript
window.addEventListener('resize' , handleResize );

function handleResize() {
        const width = window.innerWidth;
        const ul = document.querySelector('.nav-list');
        const secondDiv = document.querySelector('.nav-center');
        const thirdDiv = document.querySelector('.nav-right');
    
        if (width >= 1024) {
            if (!secondDiv.contains(ul)) {
                secondDiv.appendChild(ul);
            }
        } else {
            if (!thirdDiv.contains(ul)) {
                thirdDiv.appendChild(ul);
            }
        }
}
document.addEventListener('DOMContentLoaded',handleResize);


const sideMenu = document.querySelector('#sideMenu');
const headerBar = document.querySelector('header')
const headerLinks = document.querySelector('header ul')



window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        headerBar.classList.add('bg-white');
        // headerLinks.classList.remove('nav-list2');
    }else{
        headerBar.classList.remove('bg-white');
        // headerLinks.classList.add('nav-list2');
    }
})


//skills-section

// const checkBox  = document.querySelector('#default');
// const mainSec = document.querySelector('.main-sec')
// const tSkill = document.querySelector('.technology-skills')
// const pSkill = document.querySelector('.personal-skills')

// checkBox.addEventListener('',)
document.getElementById('default').addEventListener('change', function () {
    const techSkills = document.querySelector('.technology-skills');
    const personalSkills = document.querySelector('.personal-skills');
    if (this.checked) {
        techSkills.style.display = 'none';
        personalSkills.style.display = 'block';
    } else {
        techSkills.style.display = 'block';
        personalSkills.style.display = 'none';
    }
});

// project-section
document.getElementById('project-graphic').addEventListener('change', function(){
    const project_software = document.querySelector('.project-card-container');
    const project_graphic = document.querySelector('.project-graphic-card-container');
    if (this.checked) {
        project_software.style.display = 'none';
        project_graphic.style.display = 'block';
    } else {
        project_software.style.display = 'grid';
        project_graphic.style.display = 'none';
    }
});



const logo = document.querySelector('.logo');

function openMenu(){
    sideMenu.style.transform = 'translateX(-100vw)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(100vw)';
    document.getElementById('toggle-menu').checked = false;
    logo.style.display = 'block';
}

document.getElementById('toggle-menu').addEventListener('change', function() {
    
    if(this.checked){
        openMenu();
        logo.style.display = 'none';
    }else{
        closeMenu();
        logo.style.display = 'block';
    }
});