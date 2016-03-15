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


  // function streamerStatus(url) {
  //   $.getJSON(url, function(data) {
  //     console.log(data);
  //     //var statusChannel = "";
  //
  //     if (data.stream == null) {
  //       if (data.status == 422){
  //         console.log("error 422: " + data.status);
  //         var statusChannel = "Closed";
  //
  //       }else {
  //         console.log("There's no streaming, sorry!");
  //         var statusChannel = "Offline";
  //       }
  //     } else {
  //       console.log("NOW LIVE!!");
  //       var statusChannel = "Online";
  //     }
  //   });
  // };


  function displayData(channelsList) {
    var html = "";

    for (var i = 0; i < channels.length; i++){
      var name = channels[i];
      var urlDataAccount = getUrlData(name);
      var urlChannel = getUrlChannel(name);

      console.log("return of getUrlAccount: " + getUrlData(channels[i]));
      console.log("url get data Account: " + urlDataAccount);
      console.log("url channel: " + urlChannel);
      //console.log("status: " + statusChannel);
      console.log("==========");

      html += "<a href='" + urlChannel + "' target='_blank'>" +
        "<div class='results'> <p>" +
        "<br><b> name: " + name + "</b>" +
        //"<br> url account: " + urlDataAccount +
        //"<br> status: " + statusChannel +
        "<br> i: " + i +
        "</p></div></a>";
    };

    $(".resultsList").html(html);

  };

  displayData(channels);

});
