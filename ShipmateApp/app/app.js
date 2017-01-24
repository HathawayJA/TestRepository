var application = require('application'),
    mainModule = 'components/homeView/homeView';

// START_CUSTOM_CODE_nativeScriptApp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
var firebase = require("nativescript-plugin-firebase");

firebase.init({
    url: 'https://shipmateapp-66c8b.firebaseio.com/', // add your own endpoint
    persist: true // Persist data to disk. Default false.
  }).then(
      function (result) {
        console.log("firebase.init done");
      },
      function (error) {
        console.log("firebase.init error: " + error);
      }
  );

// END_CUSTOM_CODE_nativeScriptApp
application.start({
    moduleName: mainModule
});