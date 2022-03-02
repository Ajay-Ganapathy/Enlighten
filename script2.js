$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });


  $(window).on('load scroll',function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
      
      $('section').each(function(){

          let top = $(window).scrollTop();
          let height = $(this).height();
          let id = $(this).attr('id');
          let offset = $(this).offset().top - 200;

          if(top > offset && top < offset + height){
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }


      });

  });

}); 

function displaycard(){
    var all_data = [["course-1","Python Programming","John","Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem a possimus voluptates repellendus harum nemo iusto expedita dolore libero, veniam eum sint."],["course-1","Python Programming","John","Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem a possimus voluptates repellendus harum nemo iusto expedita dolore libero, veniam eum sint."],["course-1","Python Programming","John","Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem a possimus voluptates repellendus harum nemo iusto expedita dolore libero, veniam eum sint."],["course-1","Python Programming","John","Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem a possimus voluptates repellendus harum nemo iusto expedita dolore libero, veniam eum sint."],["course-1","Python Programming","John","Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem a possimus voluptates repellendus harum nemo iusto expedita dolore libero, veniam eum sint."],["course-1","Python Programming","John","Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem a possimus voluptates repellendus harum nemo iusto expedita dolore libero, veniam eum sint."]];
    var divv='';
    for (let loop_card = 0; loop_card < all_data.length; loop_card++){
        divv+='<div class="card2">';
        divv+='<img src="./'+all_data[loop_card][0]+'.jpg" >';
        divv+='<div class="course-content">';
        divv+='<h1 style="margin-bottom: 1rem; font-weight: 700;">'+all_data[loop_card][1]+'</h1>';
        divv+='<h1 style="margin-bottom: 1rem; font-weight: 700;">'+all_data[loop_card][2]+'</h1>';
        divv+='<h3 style="font-weight: 700;">Course Description</h3>';
        divv+='<p>'+all_data[loop_card][3]+'</p>';
        divv+='</div>';
        divv+='</div>';
    }
    document.getElementById("course").innerHTML=divv;
}
displaycard();