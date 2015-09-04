$(document).ready(function(){
	$(".dropdownbox2").toggle();
	$(".btn-large btn-green").toggle();
  $(".dropdownbox1").click(function(){
    $(".menu1").toggleClass("showMenu");
      $(".menu1 > li").click(function(){
        $(".dropdownbox1 > p").text($(this).text());
        $(".menu1").removeClass("showMenu");
      });
      $(".dropdownbox2").toggle(); 
  });
  $(".dropdownbox2").click(function(){
	    $(".menu2").toggleClass("showMenu");
	      $(".menu2 > li").click(function(){
	        $(".dropdownbox2 > p").text($(this).text());
	        $(".menu2").removeClass("showMenu");
	      });
	  });
  $(".btn-large btn-green").toggle();
});