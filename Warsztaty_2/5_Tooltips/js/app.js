/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */


document.addEventListener("DOMContentLoaded", function() {

    var tooltips = document.getElementsByClassName("tooltip");

    var tt1 = tooltips[0];
    var tt2 = tooltips[1];
    var tt3 = tooltips[2];

    var newText = document.createElement("span");
    

    var on = function() {

    
        newText.innerText = this.dataset.text;
        this.appendChild(newText);


    };

    tt1.addEventListener("mouseover",on);
    tt2.addEventListener("mouseover",on);
    tt3.addEventListener("mouseover",on);

    var off = function() {

        newText.parentElement.removeChild(newText);

    };

    tt1.addEventListener("mouseout",off);
    tt2.addEventListener("mouseout",off);
    tt3.addEventListener("mouseout",off);




});