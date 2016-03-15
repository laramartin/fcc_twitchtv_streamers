$(document).ready(function() {
  //streamer(urlAccount);



  var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb",
    "thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404"]

  //var urlAccount = "";

  function getUrlAccount(channel){
    return "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
  }

console.log("what getUrlAccount returns is: " + getUrlAccount(channels[0]));

  //getUrlAccount(channels[9]);
  //console.log("This is the url: "+ urlAccount);

  //var urlAccount = 'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?';

  function streamerStatus(url) {
    $.getJSON(url, function(data) {
      console.log(data);
      var statusChannel = "";

      if (data.stream == null) {
        if (data.status == 422){
          console.log("error 422: " + data.status);
          return "Closed";

        }else {
          console.log("There's no streaming, sorry!");
          return "Offline";
        }
      } else {
        console.log("NOW LIVE!!");
        return "Online";
      }
    });
  };

  function displayData(channelsList) {
    var html = "";

    for (var i = 0; i < channels.length; i++){
      var name = channels[i];
      var urlAccount = getUrlAccount(channels[i]);
      //console.log("url of account: " + urlAccount);
      console.log("return of getUrlAccount: " + getUrlAccount(channels[i]));
      console.log("urlAccount: " + urlAccount);
      //streamerStatus(urlAccount);
      html += //"<a href='" + "#" + "' target='_blank'>" +
        "<div class='results'> <p>" +
        "<br><b> name: " + name + "</b>" +
        "<br> url account: " + urlAccount +
        //"<br> status: " + statusChannel +
        "<br> i: " + i +
        "</p></div></a>";
    };

    $(".resultsList").html(html);

  };

  displayData(channels);

});
