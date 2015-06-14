$(document).foundation();

$(document).ready(function(){

  $('.my-slider').slick({
    //settings go here
    autoplay: true,
    dots: true,
  });

});

$('.button.next').click(function(){
  $('.my-slider').slick('slickNext');

});


 
