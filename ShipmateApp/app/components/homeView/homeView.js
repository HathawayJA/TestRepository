var observable = require("data/observable");
var mapbox = require("nativescript-mapbox");
var geolocation = require("nativescript-geolocation");
var dialogs = require("ui/dialogs");
var platform = require("platform");
var application = require('application');
var isIOS = platform.device.os === platform.platformNames.ios;
var view = require("ui/core/view");

var page;
var map;

var accesstoken = 'sk.eyJ1IjoiZWRkeXZlcmJydWdnZW4iLCJhIjoia1JpRW82NCJ9.OgnvpsKzB3GJhzyofQNUBw'


function pageLoaded(args) {
    page = args.object;
    map = view.getViewById(page, "map");
    var testLabel = view.getViewById(page, "test");
    var requestButton = view.getViewById(page, "requestButton");
    var tabs = view.getViewById(page, "tabList");
    var loginButton = view.getViewById(page, "login_button");

    loginButton.on("tap", function() {
        buttonFirebaseLogin();
    });

    requestButton.on("tap", function() {
        var names = [];
        for(var i = 0; i < tabs.items.length; i++) {
            names[i] = tabs.items[i].title;
        }
        //testLabel.text = map;
        enableLocationTap();
        buttonGetLocationTap();
        tabs.selectedIndex = 2;
    });
}





function buttonFirebaseLogin(args) {

    var emailField = view.getViewById(page,"email_field");
    var passField = view.getViewById(page,"pass_field");

    firebase.login({
      // note that you need to enable Google auth in your firebase instance
    type: firebase.LoginType.GOOGLE,
    //email: <insert xml field get!!!!>,
    //password: <insert xml field get!!!!>
    }).then(
        function (result) {
          dialogs.alert({
            title: "Login OK",
            message: JSON.stringify(result),
            okButtonText: "Nice!"
          });
        },
        function (errorMessage) {
          dialogs.alert({
            title: "Login error",
            message: errorMessage,
            okButtonText: "OK, pity"
          });
        }
    );
  };



function enableLocationTap(args) {
    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }
}

function buttonGetLocationTap(args) {
    var locationLabel = view.getViewById(page, "locationLabel");
    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {
            //locationLabel.text = "Current location is: " + loc.latitude + " " + loc.longitude;
            map.addMarkers([
                {
                    id: 2,
                    lat: loc.latitude,
                    lng: loc.longitude,
                    title: 'MIDN X', // no popup unless set
                    subtitle: 'Pick me up!',
                    iconPath: 'res/markers/green_pin_marker.png',
                    onTap: function(){console.log("'Nice location' marker tapped");},
                    onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
                }]);
        }
    }, function(e){
        console.log("Error: " + e.message);
    });
}
exports.buttonGetLocationTap = buttonGetLocationTap;
exports.pageLoaded = pageLoaded;
exports.enableLocationTap = enableLocationTap;
exports.buttonFirebaseLogin = buttonFirebaseLogin;

// END_CUSTOM_CODE_homeView
//module.exports = ViewModel;