const globalHeader = document.querySelector('header');
window.addEventListener('scroll', function(){
    subHeader.classList.toggle('vanish', window.scrollY > 100);
    globalHeader.classList.toggle('sticky', window.scrollY > 100);
})