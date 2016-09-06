window.addEventListener('load', function(){
    /*
        A NodeList of all your image containers (Or a single Node).
        The library will locate an <img /> within each
        container to create the gradient from.
     */
    //Grade(document.querySelectorAll('article'))
    var a = document.querySelectorAll('article');

    for(i = 0; i < a.length; i++){

      a[i].style.backgroundColor = getColor(a[i]);

    }
})

function getColor(item){

  var c = ps.color.getImageAverageColor(item.querySelector('img:first-of-type'));

  var darken = -80;

  var color = "rgb("+(c.channels.r+darken)+", "+(c.channels.g+darken)+", "+(c.channels.b+darken)+")";

  return color;
}
