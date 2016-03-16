$(document).ready(function() {
  var channels = ["freecodecamp", "ESL_SC2", "OgamingHS", "storbeck", "terakilobyte", "habathcx","RobotCaleb",
  "thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404"]

  function getUrlData(channel){
    return "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
  };

  function getUrlChannel(channel){
    return "https://www.twitch.tv/" + channel;
  };

  function streamerStatus(name) {
    $.getJSON(getUrlData(name), function(data) {
      var statusChannel = "";
      var offlineBackground = "#DBCDE6";

      if (data.stream == null) {
        if (data.status == 422){
          statusChannel = "Account closed";

        }else {
          statusChannel = "Offline";
        }
      } else {
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
    };
  };

  function showChannel(urlChannel, name, status, offlineBackground){
    var html = "<a href='" + urlChannel + "' target='_blank'>" +
    "<div class='results row container-fluid' style='background-color:" + offlineBackground + "'>" +
    "<div class='col-xs-6 col-sm-4'>" + "<b>" + name + "</b>" + "</div>" +
    "<div class='col-xs-12 col-sm-8'>" + "<em>" + status + "</em></div>" +
    "</p></div></a>";

    $(".resultsList").append(html);
  };

  displayData(channels);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-75149386-1', 'auto');
  ga('send', 'pageview');
});
