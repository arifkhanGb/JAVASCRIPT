// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'meet.google.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'filterScreens') {
    // Logic to filter screen sharing options
    const allowedWindows = ['allowed-app-1', 'allowed-app-2'];
    // Code to manipulate the screen sharing options
    sendResponse({status: 'filtered'});
  }
});
