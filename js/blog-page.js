window.addEventListener('scroll', function(){
    subHeader.classList.toggle('vanish', window.scrollY > 550);
    globalHeader.classList.toggle('sticky', window.scrollY > 550);
})