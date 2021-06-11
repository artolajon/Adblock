
chrome.webRequest.onBeforeRequest.addListener(
    () => {cancel: true },
    { urls: blacklist },
    ["blocking"]
)