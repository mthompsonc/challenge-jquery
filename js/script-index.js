$(document).ready( function(){
	//Eliminando botón back (Etapa1)
	$('.js-back').remove();


	// Función agregar título Nuevas Recetas (Etapa 2).
	printNews();


	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	renderActivities(activitiesArray);

});


//Función para escribir Nuevas Recetas (Etapa 2)
function printNews(){
	$('#titlenews').append("NUEVAS RECETAS");
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//Recorriendo el array
	for(var i = 0; i < recipesArray.length; i++){
		//Condición si highlighted es verdadero
		if (recipesArray[i].highlighted == true){
			//Pasándole los datos que cumplieron el if.
			renderRecipe(recipesArray[i]);
		}
	}

	console.log('Recipes: ', recipesArray);
}



/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

		$('.list-recipes').append('<a class="item-recipe" href="#"> <span class="attribution"> <span class="title-recipe"> TITULO: ' + recipe.title + '</span> <span class="metadata-recipe"><span class="author-recipe"> AUTOR: ' + recipe.source.name + '</span> <span class="bookmarks-recipe"> <span class="icon-bookmark"></span></span> </span> </span> <img src=img/recipes/320x350/' + recipe.name + '.jpg /></a>');
}



/*
* Función que se encarga de pintar todas las actividades
*/

function renderActivities(activitiesArray) {
    console.log('Activities: ', activitiesArray);

    for(var i = 0; i < activitiesArray.length; i++){
        renderActivity(activitiesArray[i]);
    }
        if(activitiesArray.length > 0){
            $(".wrapper-message").hide();
						console.log('holi9')
        }
    }

/*
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	for (var i = 0; i < activitiesArray.length; i++){
	}
	//Condición si la longitud del array es diferente a 0
	if (activitiesArray.length > 0){
		//Pasándole los datos que cumplieron el if.
		console.log('holi9');
		$('.​wrapper-message​').hide();
	}
}*/

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}
