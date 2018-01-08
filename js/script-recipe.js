$(document).ready(function(){

  $(".js-menu").css("display", "none");
  $(".js-back").css("display", "block");

console.log("Hola!")

  $(".js-back").click(function(){
      window.location.href="index.html";
    });

      

  
  $(".js-show-recipe").click(function(){
    $("#divMake").removeClass("make");
    $(this).addClass("active");
    $(".js-show-make").removeClass("active");

  });


  $(".js-show-make").click(function(){
    $("#divMake").addClass("make");
    $(this).addClass("active");
    $(".js-show-recipe").removeClass("active");
  });



});

