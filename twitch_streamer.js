$(document).ready(function() {
  //streamer(urlAccount);


  var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb",
  "thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404"]


  function getUrlData(channel){
    return "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
  }

  function getUrlChannel(channel){
    return "https://www.twitch.tv/" + channel;
  }


  function streamerStatus(name) {
    $.getJSON(getUrlData(name), function(data) {
      console.log(data);
      var statusChannel = "";
      var title = "";

      if (data.stream == null) {
        if (data.status == 422){
          console.log("error 422: " + data.status);
          statusChannel = "Closed";

        }else {
          console.log("There's no streaming, sorry!");
          statusChannel = "Offline";
        }
      } else {
        console.log("NOW LIVE!!");
        statusChannel = "Online";
        title = data.stream.game;
      }
      showChannel(getUrlChannel(name), name, statusChannel, title)
    });
  };


  function displayData(channelsList) {


    for (var i = 0; i < channelsList.length; i++){
      var name = channelsList[i];
      var urlDataAccount = getUrlData(name);
      streamerStatus(name);

      var urlChannel = getUrlChannel(name);

          console.log("return of getUrlAccount: " + getUrlData(channels[i]));
          console.log("url get data Account: " + urlDataAccount);
          console.log("url channel: " + urlChannel);
          //console.log("status: " + statusChannel);
          console.log("==========");
    };


  };

  function showChannel(urlChannel, name, status, title){


    var html = "<a href='" + urlChannel + "' target='_blank'>" +
    "<div class='results row container-fluid'>" +
    "<div class='col-xs-6 col-sm-4'>" + "<b>" + name + "</b>" + "</div>" +
    "<div class='col-xs-6 col-sm-4'>" + "<em>" + status + "</em></div>" +
    "<div class='col-xs-6 col-sm-4'>" + "<p> " + title + " </p></div>" +
    //"<br> url account: " + urlDataAccount +
    //"<br> status: " + statusChannel +
    "</p></div></a>";

    $(".resultsList").append(html);
  };

  displayData(channels);

});
