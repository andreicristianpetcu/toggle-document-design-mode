function toggleDocumentDesignMode(){
  console.log("toggled");
    var executing = browser.tabs.executeScript({
      file: "content.js"
    });
}
chrome.commands.onCommand.addListener(function(action) {
  if (action == "toggle-document-design-mode") {
    toggleDocumentDesignMode();
 }
});
browser.browserAction.onClicked.addListener(toggleDocumentDesignMode);
