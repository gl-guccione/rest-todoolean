// api - port 3023
// http://157.230.17.132:3023/todos


// functions

function deleteContent(elm) {
  console.log(elm);
  var id = elm.attr("id");
  $.ajax(
    {
      "url": "http://157.230.17.132:3023/todos/" + id,
      "method": "DELETE",
      "success": function(date, state) {
        elm.remove();
      },
      "error": function() {
        alert("error");
      },
    }
  );
}

function addContent(string) {
  if (string != "") {
    $.ajax(
      {
        "url": "http://157.230.17.132:3023/todos",
        "data": {
          "text": string
        },
        "method": "POST",
        "success": function(date, state) {
          displayData(date);
          $("#submit__text").val("");
        },
        "error": function() {
          alert("error");
        },
      }
    );
  }
}

function displayData(date) {

  var source = $("#todo-list-template").html();
  var template = Handlebars.compile(source);

  if (date.length != undefined) {

    for (var i = 0; i < date.length; i++) {
      var html = template(date[i]);

      $("#todo-list").append(html);
    }

  } else {
    var html = template(date);

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

  $("#submit__text").val("");

  getData();


  $("#submit__button").click(function() {
    var inputValue = $("#submit__text").val();
    addContent(inputValue);
  });


  $("#todo-list").on("click", ".list__delete", function() {
    deleteContent($(this).parent());
  });

});
