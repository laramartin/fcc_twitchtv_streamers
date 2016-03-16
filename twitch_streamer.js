$(document).ready(function() {
  //streamer(urlAccount);


  var channels = ["freecodecamp", "ESL_SC2", "OgamingHS", "storbeck", "terakilobyte", "habathcx","RobotCaleb",
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
      var offlineBackground = "#DBCDE6";

      if (data.stream == null) {
        if (data.status == 422){
          console.log("error 422: " + data.status);
          statusChannel = "Account closed";

        }else {
          console.log("There's no streaming, sorry!");
          statusChannel = "Offline";
        }
      } else {
        console.log("NOW LIVE!!");
        statusChannel = data.stream.game;
        offlineBackground = "LightGreen";
      }
      showChannel(getUrlChannel(name), name, statusChannel, offlineBackground)
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

  function showChannel(urlChannel, name, status, offlineBackground){

    console.log("this is the color: " + offlineBackground);

    var html = "<a href='" + urlChannel + "' target='_blank'>" +
    "<div class='results row container-fluid' style='background-color:" + offlineBackground + "'>" +
    "<div class='col-xs-6 col-sm-4'>" + "<b>" + name + "</b>" + "</div>" +
    "<div class='col-xs-12 col-sm-8'>" + "<em>" + status + "</em></div>" +

    //"<br> url account: " + urlDataAccount +
    //"<br> status: " + statusChannel +
    "</p></div></a>";

    $(".resultsList").append(html);
  };

  displayData(channels);

});
