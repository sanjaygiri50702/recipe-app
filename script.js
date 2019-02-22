var recipe = new XMLHttpRequest();
document.querySelector('form').onsubmit = function(event){
    event.preventDefault();
    recipe.open('GET','http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3');
    recipe.send();
}
recipe.onreadystatechange=function(){
    console.log('data',this.status)
}