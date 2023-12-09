const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 5,
  spacebetween: 30,
  breakpoints: {
    320:{
        slidesPerView: 2,
        spacebetween:10,
    },
    480:{
        slidesPerView: 3,
        spacebetween:15,
    },
    640:{
        slidesPerView: 3,
        spacebetween:20,
    },
    760:{
        slidesPerView: 4,
        spacebetween:20,
    },
    1000:{
        slidesPerView: 5,
        spacebetween: 20,
    }
    
  },
  autoplay: {
    delay: 2000,
  },

});
