(function(){

$( document ).ready(function() {
  
  if ($(window).width() >= 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":"140px"});
    $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
  }
});
}
else if($(window).width() >= 768 && $(window).width() < 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":"140px"});
    $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
  }
});
}
else if($(window).width() < 768){
  $(window).scroll(function() {
  if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
  $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
  }
  else {
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
  }
  });
}

$(window).resize(function() {
  if ($(window).width() >= 1200) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":"140px"});
    $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
  }
});
}
else if($(window).width() >= 768 && $(window).width() < 1199) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":"140px"});
    $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
  }
});
}
else if($(window).width() < 768){
  $(window).scroll(function() {
  if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
  $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
  }
  else {
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
  }
  });
}
});

});

})();