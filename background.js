var pattern1 = "*://*.flightrising.com/static/layout/none/banner.jpg";
var pattern2 = "*://*.flightrising.com/images/layout/*/banner.jpg";
var pattern3 = "*://*.flightrising.com/content/battle/images/venues/*/_back_night.png";


function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://raw.githubusercontent.com/Piezoelectric/bg-blocker/master/bgblocker.png"
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern1, pattern2, pattern3], types:["image"]},
  ["blocking"]
); 
