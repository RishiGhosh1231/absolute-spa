// Navigation
const subHeader = document.querySelector('.sub-header');
const homeHeader = document.querySelector('.banner header');

const logo = document.querySelector('.navbar-brand');
    window.addEventListener('scroll', function(){
        subHeader.classList.toggle('vanish', window.scrollY > 500);
        homeHeader.classList.toggle('sticky', window.scrollY > 500);
        if(homeHeader.classList.contains('sticky')){
            logo.src = 'images/logo.png';
        } else{
            logo.src = 'images/logo-2.png';
        }
    });


// Team Section

const teamMemberPics = document.querySelectorAll('.team-member img');
const teamMemberDetail = document.querySelectorAll('.team-member-detail');

for(let i = 0; i < teamMemberPics.length; i++){
    teamMemberPics[i].addEventListener('click', function(){
        for(let j = 0; j < teamMemberPics.length; j++){
            teamMemberPics[j].classList.remove('active');
        }
        this.classList.add('active');
        const id = this.getAttribute('data-id');    
    for(let j = 0; j < teamMemberDetail.length; j++){
        teamMemberDetail[j].classList.remove('active');
    }
        teamMemberDetail[id].classList.add('active');
    });
}

// Testimonials Section
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  });

// Service Page We Work For You Section
const forYouList = document.querySelectorAll('.for-you-item ul li');

for(let i = 0; i < forYouList.length; i++){
    forYouList[i].addEventListener('click', function(){
        for(let j = 0; j < forYouList.length; j++){
            forYouList[j].classList.remove('active');
        }
        this.classList.add('active');
    })
}

// Service Page Category Section
const categories = document.querySelectorAll('.category-item');

for(let i = 0; i < categories.length; i++){
    categories[i].addEventListener('click', function(){
        for(let j = 0; j < categories.length; j++){
            categories[j].classList.remove('active');
        }
        this.classList.add('active');
    })
}

const categories2 = document.querySelectorAll('.each-category');
const categories3 = document.querySelectorAll('.category-3-item');
const toggleBtn = document.querySelectorAll('.toggle-btn');
const closeBtn = document.querySelector('.close-btn')
const categoryToggle = document.querySelector('.category-toggle.category-2-item');

for(let i = 0; i < categories2.length; i++){
    categories2[i].addEventListener('click',function(){
        for(let j = 0; j < categories2.length; j++){
            categories2[j].classList.remove('active');
        }
        this.classList.add('active');
        const id = this.getAttribute('data-id');
        for(let j = 0; j < categories3.length; j++){
            categories3[j].classList.remove('active');
        }
        categories3[id].classList.add('active');
    })
}
for(let i = 0; i < toggleBtn.length; i++){
    toggleBtn[i].addEventListener('click', function(){
        categoryToggle.classList.toggle('active')
    })
}
closeBtn.addEventListener('click', function(){
    categoryToggle.classList.remove('active');
})