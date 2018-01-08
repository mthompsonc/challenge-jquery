$(document).ready( function(){
	//Eliminando botón back (Etapa1)
	$('.js-back').remove();


	// Función agregar título Nuevas Recetas (Etapa 2).
	printNews();


	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

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
			//
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
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}
