$(document).ready(function() {
  // Eliminando Botón Menú.
  $('.js-menu').remove();
  //Etapa 7
  console.log('Holi, está listo el documento.');

  $(".js-show-recipe").click(function() {
    $("#pageRecipe").removeClass("make");
    $(this).addClass('active');
    $(".js-show-make").removeClass('active');
  });

  $(".js-show-make").click(function() {
    $("#pageRecipe").addClass("make");
    $(this).addClass('active');
    $(".js-show-recipe").removeClass('active');
  });

  $('.js-back').click(function(){
    window.location.href="index.html"
  })


});
