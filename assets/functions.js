$(document).ready(function() {

  $("#formSearch").submit(function(e) {	
    e.preventDefault();

    var action = $("#formSearch").attr('action');
    var method = $("#formSearch").attr('method');
    
    var params = {
      "title" : $("#title").val(),
      "date": $("#date").val(),
      "state": $("#state").val()
    };
        
    $.ajax({
      data: params,
      url: action,
      dataType: 'html',
      type: method,
      success: function(response) {
        $("#tablePosts").html(response);
      },
      error: function(error) {
        console.log('Error', error);
      }
    });
  });

});