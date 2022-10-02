$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu, .header').toggleClass('active');
       $('body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header__burger, .menu,  .header').removeClass('active');
       $('body').removeClass('lock');
   });  

   $('.carousel__slider').slick({
      arrows: true,
      dots: false,
      autoplay:false,
      infinite:true,
      swipe:true,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 1434,
          settings: {
            slidesToShow:4,
          }
        },
        {
          breakpoint: 1101,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint: 664,
          settings: {
            slidesToShow:1,
          }
        },

      ]         
   });

 
});    


