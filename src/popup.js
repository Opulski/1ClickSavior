(() => {
  "use strict";

  document.querySelector("#settings").addEventListener("click", e => {
    chrome.tabs.create({ url: "/options.html" });
  });

  chrome.storage.sync.get(["overAllDonations"], result => {
    let overAllDonations = result.overAllDonations || 0;
    var childProgressBar = document.getElementById("childProgressBar");
    childProgressBar.value = 80;
    document.querySelector("#overallDonations").innerText =
      overAllDonations + " EUR";
  });

  // console = chrome.extension.getBackgroundPage().console;
  // console.log("HELLO WHATSUP");
})();
