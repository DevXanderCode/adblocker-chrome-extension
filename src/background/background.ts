chrome.webRequest.onBeforeRequest.addListener((details) => {
  console.log("logging detail", JSON.stringify(details, null, 2 ));
});
