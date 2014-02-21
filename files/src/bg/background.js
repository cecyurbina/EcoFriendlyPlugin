var panel_active = false;
console.log("mm");
chrome.browserAction.onClicked.addListener(function(tab) {
  if (!panel_active) {
    chrome.browserAction.setIcon({tabId: tab.id, path: "icon3.png"});
    panel_active = true;
  }
  else {
    chrome.browserAction.setIcon({tabId: tab.id, path: "icon2.png"});
    panel_active = false;
  }
  chrome.tabs.executeScript(null, {file: "change_content.js"});
});
