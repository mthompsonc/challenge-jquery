$(document).ready(function(){
    // Eliminando Botón Menú.
    $('.js-menu').remove();
    //Etapa 7
    console.log('Holi, está listo el documento.');


    $(".js-show-recipe").click(function() {
   $("#pageRecipe").removeClass("make");
 });

 $(".js-show-make").click(function() {
   $("#pageRecipe").addClass("make");
 });


});
