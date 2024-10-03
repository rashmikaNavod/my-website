let marker = document.querySelector('#marker');
let item = document.querySelectorAll('.nav-list li a');
let logo = document.querySelector('.logo');

function indicator(e){
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth+'px';
}

item.forEach(link =>{
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
})

logo.addEventListener('click',()=>{
    marker.style.left = '0px';
    marker.style.width = '85px';
})