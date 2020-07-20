chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log(details);
    const newUrl = details.url.replace("en.wikipedia", "en.m.wikipedia");
    return { redirectUrl: newUrl };
  },
  { urls: ["*://en.wikipedia.org/*"] },
  ["blocking"]
);
