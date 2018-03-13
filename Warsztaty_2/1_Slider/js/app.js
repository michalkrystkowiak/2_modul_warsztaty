/**
 * Created by Jacek on 2015-12-16.
 */


document.addEventListener("DOMContentLoaded", function() {

    var butt1 = document.getElementById("prevPicture");
    var butt2 = document.getElementById("nextPicture");
    var ul = document.getElementsByClassName("slider");
    var list = ul[0].children;
    var counter = 0;
   
    var array = [];
    for (var i = 0;i<list.length;i++) {
        array.push(list[i]);
    }


   array[counter].classList.add("visible");

   var prev = function () {
    
    

    array[counter].classList.toggle("visible");

    if (counter>0) {               
        counter--;                         
    } else {
        counter = array.length-1;
    }

    array[counter].classList.toggle("visible"); 
    

   };

   butt1.addEventListener("click", prev);


   var next = function () {

    array[counter].classList.toggle("visible"); // Wejscie na zerko

    if (counter<array.length-1) {               // Sprawdzam counter, jak jest w zakresie to, 
        counter++;                         //zwiekszamy counter o 1, jesli poza nastawiamy na 0
    } else {
        counter = 0;
    }

    array[counter].classList.toggle("visible");  // Zmieniamy klase na odpowiednim indexie countera
        
   };

   butt2.addEventListener("click", next);


    console.log(array);


});