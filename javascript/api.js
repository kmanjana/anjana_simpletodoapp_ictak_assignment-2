// to print the todo list from API with title and status in the form of table
var index = 1;
var compl_status=0;
var notcompl_status=0;
function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for(var i=0; i<response.length ; i++){
                if(response[i].completed == true){
                    output += "<tr  style='background-color: #c3e6cb'>"+
                              "<td>"+ index +"</td>"+
                              "<td class=topic>"+ response[i].title +"</td>"+
                              "<td>&nbsp;<input type=checkbox class=form-input checked disabled>"+ "&nbsp;&nbsp;<h7 id=text>Completed</h7>" +"</td>"+
                              "<td><button class=delete ondblclick=delete_todo(this) title='Double-Click to delete'><i class='fa fa-trash'></i></button></td>"
                              +"</tr>";
                              
                }
                else if(response[i].completed == false){
                    output += "<tr class='ids' style='background-color: #f5c6cb'>"+
                              "<td>"+ index +"</td>"+
                              "<td class=topic>"+ response[i].title +"</td>"+
                              "<td>&nbsp;<input type=checkbox class=check  onclick=funcheck(),validate(),fullstatus()>"+ "&nbsp;&nbsp;<h7 class=text>Not Completed</h7>" +"</td>"+
                              "<td><button class=delete ondblclick=delete_todo(this) title='Double-Click to delete'><i class='fa fa-trash'></i></button></td>"
                              +"</tr>";
                              
                }index++;
                
            }
        }
        document.getElementById("demo").innerHTML = output;
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

//to show the status while checking and unchecking the checkboxes
function funcheck(){
    var ids = document.querySelectorAll(".ids");
    var check = document.querySelectorAll(".check");
    var text = document.querySelectorAll(".text");
    for (i = 0; i < check.length; i++) {
        if (check[i].checked == true){
            text[i].innerHTML = "Completed";
            ids[i].style.backgroundColor = "#c3e6cb";
        } 
        else{
            text[i].innerHTML = "Not Completed";
            ids[i].style.backgroundColor = "#f5c6cb";
        }
    }
}

//to delete the tasks
function delete_todo(r){
    var table = document.getElementById("demo");
        var i = r.parentNode.parentNode.rowIndex;
        table.deleteRow(i-1);
        for (var i = 0; i< table.rows.length; i++){
            table.rows[i].cells[0].innerHTML = i+1;
          }
     
}

//to delete all rows i.e,tasks
function deleteall(){
    var Table = document.getElementById("demo");
    Table.innerHTML = "";
}
//for validation of 5 complete todo lists
function validate(){
    var promise = new Promise (function(resolve,reject){
        setTimeout(function(){
            var checked = 0;
            var table = document.getElementById("demo");
            var chks = table.getElementsByTagName("INPUT");

            for (var i = 0; i < chks.length; i++) {
                if (chks[i].checked) {
                    checked++;
                }
            }
            var ans = checked-90;

            if (ans == 5) {
                resolve("Congrats!! 5 Tasks have been Successfully Completed");
            }
        },100);
    });
    promise 
    .then(function(s){
        alert(s);
    })
}

var index2= 0;

//to add rows into the table
function add() {
    var table = document.getElementById("demo");
    var title = document.getElementById("title");
    var error1 = document.getElementById("error1");

    var total= table.rows.length;
    // console.log(total);
    
    
    if(title.value!=""){
        if(table.innerHTML == ""){
            index=1;
        }
        
        var row = table.insertRow(total);
        row.classList.add("ids");
        row.style.backgroundColor = "#f5c6cb";
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell2.classList.add("topic");
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        cell1.innerHTML = index;
        cell2.innerHTML = title.value;
        cell3.innerHTML = "&nbsp;<input type=checkbox class=check  onclick=funcheck(),validate()>"+ "&nbsp;&nbsp;<h7 class=text>Not Completed</h7>";
        cell4.innerHTML = "<td><button class=delete ondblclick=delete_todo(this) title='Double-Click to delete'><i class='fa fa-trash'></i></button></td>";
        alert("Task have been successfully added");
        
    }
    else{
        error1.innerHTML= "Please enter valid title";
        error1.style.color = "red";
        
    }
    index++;index2++;
}

//to show error in textfield in modal
function titles(){
    var title = document.getElementById("title");
    var error1 = document.getElementById("error1");
    console.log(title.value);
    if(title.value !=""){
        error1.innerHTML= "";  
    }
    else{
        error1.innerHTML= "Please enter valid title";
        error1.style.color = "red";
    }
    
}
