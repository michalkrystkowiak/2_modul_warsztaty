/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function() {

    var list1 = document.querySelector(".nav ul").children;
    

    var list2 = document.querySelectorAll(".nav ul li ul");
    

    var open = function () {

        for (var i = 0; i<this.children.length;i++) {

            if (this.children[i]!==null) {
                this.children[i].style.display = "block";
            }

        }
        

    };

    for (var i = 0; i<list1.length; i++) {
        list1[i].addEventListener("mouseover", open)
    };


    var close = function () {

        for (var i = 0; i<this.children.length;i++) {

            if (this.children[i]!==null) {
                this.children[i].style.display = "none";
            }

        }

    };

    for (var i = 0; i<list1.length; i++) {
        list1[i].addEventListener("mouseout", close)
    };


});

