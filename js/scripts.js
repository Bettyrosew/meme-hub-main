//User Interface logic
$(document).ready(function(){
  $(".one").click(function(){
    $(".nav-link").removeClass("selected");
    $(".one").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".kenyan").fadeIn();
  });
  $(".two").click(function(){
    $(".nav-link").removeClass("selected");
    $(".two").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".football").fadeIn();
  });
  $(".three").click(function(){
    $(".nav-link").removeClass("selected");
    $(".three").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".childhood").fadeIn();
  });
  $(".four").click(function(){
    $(".nav-link").removeClass("selected");
    $(".four").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".nigerian").fadeIn();
  });
