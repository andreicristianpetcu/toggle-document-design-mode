(function(){
  var designModeToggles = {
    "on": "off",
    "off": "on"
  };
  var toggled = designModeToggles[document.designMode];
  document.designMode = toggled;
})();
