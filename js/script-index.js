$(document).ready( function(){

/*
* Etapa 1
*/
  $(".js-back").css("display", "none");

    $("#explore-recipes").click(function(e){
       e.preventDefault();
       window.location.href="recipe.html";
    })

/*
* Etapa 2
*/

  function printNews(){
    $("#printNews").html("NUEVAS RECETAS");
  };



  printNews();


    //La variable "recipesArray" esta declarada en el archivo "data/recipes.js" ¡LLAMADA DE FUNCIÓN!
  renderHighlightedRecipes(recipesArray);

  //Paso 5
  renderActivities(activitiesArray);

 });
/*
* Etapa 3
*/
 


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

  for(var i=0; i<recipesArray.length; i++){
    if(recipesArray[i].highlighted === true){
      renderRecipe(recipesArray[i]);
  }

}

};


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
    console.log('Voy a pintar la receta: ', recipe);

    var titleRecipe = recipe.title;
    var authorRecipe = recipe.source.name;
    var imgRecipe = recipe.img;

    console.log(titleRecipe);
    console.log(authorRecipe);

    $(".list-recipes").append("<a class='item-recipe' href='#'>"+
                             "<span class='attribution'>"+
                             "<span class='title-recipe'>"+titleRecipe+"</span>"+
                             "<span class='metadata-recipe'>"+
                             "<span class='author-recipe'>"+authorRecipe+"</span>"+
                             "<span class='bookmarks-recipe'>"+
                             "<span class='icon-bookmark'></span></span></span></span>"+
                                     "<img src='"+imgRecipe +"'/></a>");

}




/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);

    for(var i=0; i < activitiesArray.length;i++){
      renderActivity(activitiesArray[i]);
    }

    if(activitiesArray.length > 0){
      $(".wrapper-message").hide();
  }



}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activity) {
	console.log("Entre");
  var authorFirst = activity.userName;
  console.log(authorFirst);
  var recipeName = activity.recipeName;
  var textRecipe = activity.text;
  var userPlace = activity.place;
  var userAvatar = activity.userAvatar;
  var imagen = activity.image;

    $(".list-activities").append("<a href='#' class='item-activity'>"+
                              "<span class='attribution'>"+
                              "<span class='avatar'>"+ 
                              "<img src='"+userAvatar+"' class='image-avatar'>"+
                              "</span>"+"<span class='meta'>"+
                              "<span class='author'>"+ "&nbsp;" + authorFirst + "&nbsp;" +"</span> made"+
                              "<span class='recipe'>" + "&nbsp;" + recipeName + "&nbsp;" +"</span>:" + "&nbsp;" + textRecipe  + "&nbsp;"+
                              "<span class='location'>" + "&mdash;" + userPlace + "</span>"+
                              "</span>"+
                              "</span>" +
                              "<div class='bg-image' style='background-image: url(" + imagen + ");'></div>"+"</a>")




};





