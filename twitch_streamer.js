$(document).ready(function() {
  streamer(urlAccount);
});


var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb",
  "thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404"]

var urlAccount = "";

function getUrlAccount(channel){
  urlAccount = "https://api.twitch.tv/kraken/streams/" + channel + "?callback=?";
}

getUrlAccount(channels[9]);
console.log("This is the url: "+ urlAccount);

//var urlAccount = 'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?';

function streamer(url) {
  $.getJSON(url, function(data) {
    console.log(data);

    if (data.stream == null) {
      if (data.status == 422){
        console.log("error 422: " + data.status);
        var statusChannel = "Closed";

      }else {
        console.log("There's no streaming, sorry!");
        var statusChannel = "Offline";
      }
    } else {
      console.log("NOW LIVE!!");
      var statusChannel = "Online";
    }
  });
};
