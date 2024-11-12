const profile=document.getElementById('profile');
const toggle=document.getElementById('toggle');
const 
home=document.getElementById('home');
const image=document.querySelector('.image-card');

home.addEventListener('click',function () {
    toggle.style.display="none";
    image.style.display="none";
    home.style.transition="1s";
})

profile.addEventListener('click',function () {
    toggle.style.display="";
    image.style.display="";
    
})
