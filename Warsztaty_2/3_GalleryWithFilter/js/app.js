/**
 * Created by Jacek on 2015-12-16.
 */


document.addEventListener("DOMContentLoaded", function() {

    var imgList = document.getElementById("gallery").children;


    
   


    var show = document.getElementById("showButton");
    var hide = document.getElementById("hideButton");
    var input = document.getElementById("tagInput");
    //var tag = imgList[0].dataset.tag;
     
   

    var showImg = function () {
         
        

        for (var i = 0;i<imgList.length;i++) {


            imgList[i].classList.remove("invisible");
            var tag = imgList[i].dataset.tag;

            if (imgList[i].dataset.tag.indexOf(input.value)==-1) {
            
            imgList[i].classList.toggle("invisible");

            }
            
        }

         

    };

    show.addEventListener("click", showImg);

    var hideImg = function () {

        for (var i = 0;i<imgList.length;i++) {
            
            imgList[i].classList.remove("invisible");
            var tag = imgList[i].dataset.tag;

            if (imgList[i].dataset.tag.indexOf(input.value)!==-1) {
            
            imgList[i].classList.toggle("invisible");

            }
            
        }


    };

    hide.addEventListener("click", hideImg);

});
