/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function() {

 
 var body = document.querySelector("body");
 var input = document.getElementById("taskInput");
 var add = document.getElementById("addTaskButton");
 var rem = document.getElementById("removeFinishedTasksButton");
 var list = document.getElementById("taskList");
 var listElements = list.children;
 var counter = document.createElement("div");
 counter.innerText = "Zadan do zrobienia:";
 body.insertBefore(counter, input);
 var countItems = 0;

 var increaseCounter = function () {
    countItems += 1;
 }

 var addTask = function () {
    
    var task = document.createElement("li");
    var taskName = document.createElement("p");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var error = document.createElement("div");
    error.innerText = "Zadanie musi miec minimum 5 znakow, jednak nie wiecej jak 100";
   
    if (input.value.length>5 && input.value.length<100 ) {

        increaseCounter();
        
        taskName.innerText = input.value;
        button1.innerText = "Completed";
        button2.innerText = "Delete";    
        counter.innerText = "Zadan do zrobienia:" + (countItems);

        task.appendChild(taskName);
        task.appendChild(button1);
        task.appendChild(button2);
        list.appendChild(task);

        var com = function () {

            if (taskName.style.color == "red") {
                taskName.style.color = "black";            
                // countItems = countItems + 1;
                increaseCounter();
                

            } else {
                taskName.style.color = "red";
                countItems = countItems - 1;                  
                
            }

            counter.innerText = "Zadan do zrobienia:" + (countItems);

        };

        button1.addEventListener("click",com);


        var del = function () {

        task.parentElement.removeChild(task);
        countItems = countItems - 1;
        counter.innerText = "Zadan do zrobienia:" + (countItems); 

        };

        button2.addEventListener("click",del);


        var remAll = function () {

            if (taskName.style.color == "red") {
                task.parentElement.removeChild(task);
            }
    
        };
    
        rem.addEventListener("click", remAll);


      

    } else {

        
        body.appendChild(error);

        setTimeout(function() {
            error.parentElement.removeChild(error);
       }, 3000);

        }
     

    input.value = "";
    


 };


 
 add.addEventListener("click",addTask);


});











