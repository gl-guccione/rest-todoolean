// api - port 3023
// http://157.230.17.132:3023/todos


// functions

function displayData(date) {

  var source = $("#todo-list-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < date.length; i++) {
    
    var html = template(date[i]);

    $("#todo-list").append(html);
  }
}


function getData() {
  $.ajax(
    {
      "url": "http://157.230.17.132:3023/todos",
      "method": "GET",
      "success": function(date, state) {
        displayData(date);
      },
      "error": function() {
        alert("error");
      },
    }
  );
}


// script
$(document).ready(function() {

  getData();

});
