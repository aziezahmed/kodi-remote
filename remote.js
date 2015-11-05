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

$(document).on("keydown", function(e) {
  var tag = e.target.tagName.toLowerCase();

  if(tag != 'input'){
    var code = e.which;

    var jsonrpc = {
      "jsonrpc": "2.0",
      "id": 1
    };

    var command = null;

    switch(code) {
      case 32:
        jsonrpc.method = "Player.PlayPause";
        jsonrpc.params = {"playerid": 1, play: "toggle"}
        break;
      case 37:
        jsonrpc.method = "Input.Left";
        break;
      case 38:
        jsonrpc.method = "Input.Up";
        break;
      case 39:
        jsonrpc.method = "Input.Right";
        break;
      case 40:
        jsonrpc.method = "Input.Down";
        break;
      case 13:
        jsonrpc.method = "Input.Select";
        break;
      case 17:
        jsonrpc.method = "Input.Info";
        break;
      case 27:
        jsonrpc.method = "Input.Back";
        break;
    }

    if(jsonrpc.method){
      JSON_RPC(jsonrpc);
    }
  }
});
