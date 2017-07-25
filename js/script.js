$(function(){
  $('.cardWrap').mouseover(function(){
     $(this).find($('.overlay')).removeClass('opacity');
  }) 
    $('.cardWrap').mouseout(function(){
     $('.overlay').addClass('opacity');
  }) 
   
  $('.cardWrap').click(function(){
    $('.team').css({"transform":"translateX(-400px)"})
    $('.modal').css('opacity', '1');
    $('.close').css('opacity', '1');
    
  })
  
  $('.close').click(function(){
    $('.team').css({"transform":"translateX(0)"})
    $(this).css("opacity", "0");
  })
  
})