chrome.commands.onCommand.addListener(function(action) {
  if (action == "toggle-document-design-mode") {
    var executing = browser.tabs.executeScript({
      file: "content.js"
    });
  }
});
