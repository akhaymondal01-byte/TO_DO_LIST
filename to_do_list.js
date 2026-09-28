$(document).ready(function(){
    $("#addBtn").click(function(){
        let task=$("#task").val();
        if(task==""){
            alert("Please enter a task");
            return;
        }
        let li=$("<li></li>");
        li.html(task+" <button>Done</button> <button>Delete</button>");
        $("#list").append(li);
        $("#task").val("");
    });
    $("#list").on("click","button",function(){
        if($(this).text()=="Done"){
            $(this).parent().toggleClass("completed");
        }
        if($(this).text()=="Delete"){
            $(this).parent().remove();
        }
    });
});