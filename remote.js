function JSON_RPC(jsonrpc){
  jQuery.ajax({
    type: 'POST',
    url: "./server",
    success: function (response) {
      console.info(response);
    },
    contentType: "application/json",
    data: JSON.stringify(jsonrpc),
    dataType: 'json',
    timeout: 1000
  });
}

$('#videoUrlSubmit').click(function(event){
  var url = $('#videoUrl').val();

  var jsonrpc = {
    "jsonrpc": "2.0",
    "method": "Player.Open",
    "params":
    {
      "item": 
      { 
        "file" : url
      }
    },
    "id": 1
  }

  JSON_RPC(jsonrpc);

});

$('#youtubeSubmit').click(function(event){
  var url = $('#youtubeUrl').val();

  var jsonrpc = {
    "jsonrpc": "2.0",
    "method": "Player.Open",
    "params": 
    {
      "item": 
      {
        "file" : "plugin://plugin.video.youtube/?action=play_video&videoid=" + url 
      }
    },
    "id" : "1"
  }

  JSON_RPC(jsonrpc);

});

$('#sendTextSubmit').click(function(event){
  var txt = $('#sendText').val();

  var jsonrpc = {
    "jsonrpc": "2.0",
    "method": "Input.SendText",
    "params":
    {
      "text": txt
    },
    "id": 1
  }

  JSON_RPC(jsonrpc);

});

