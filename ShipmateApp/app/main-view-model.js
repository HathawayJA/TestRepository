var observable = require("data/observable");
var mapbox = require("nativescript-mapbox");
var dialogs = require("ui/dialogs");
var platform = require("platform");
var isIOS = platform.device.os === platform.platformNames.ios;

var DemoAppModel = (function (_super) {
  __extends(DemoAppModel, _super);
  function DemoAppModel() {
    _super.call(this);
  }

  var accessToken = 'sk.eyJ1IjoiZWRkeXZlcmJydWdnZW4iLCJhIjoia1JpRW82NCJ9.OgnvpsKzB3GJhzyofQNUBw';



