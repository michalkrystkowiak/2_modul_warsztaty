/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function() {

  var ul = document.getElementsByClassName("gallery");
  var list = ul[0].children;
  var body = document.querySelector("body");
 
  var array = [];
  for (var i = 0;i<list.length;i++) {
      array.push(list[i]);
  }

  console.log(list);

  var clickTest = function () {

    var div = document.createElement("div");
    var img = document.createElement("img");
    var butt = document.createElement("button");
    butt.classList.add("close");
    butt.innerHTML = "Close";
    
      for (var i = 0;i<list.length;i++) {

      div.classList.add("fullScreen");
      img.setAttribute("src", this.firstChild.src);

      }

    body.appendChild(div);
    div.appendChild(img);
    div.appendChild(butt);
    
    var butt_rem = document.getElementsByClassName("close"); 
    


    var removeDiv = function () {
      
      div.parentElement.removeChild(div);
  
    };
  
    butt_rem[0].addEventListener("click",removeDiv);
    
  };
  

  for (var i=0;i<list.length;i++) {
    list[i].addEventListener("click",clickTest);
  }

  


});
