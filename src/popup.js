(() => {
  "use strict";
  let paypalForm = document.getElementById("form");
  let amountField = document.getElementById("paypalFormValueAmount");
  chrome.storage.sync.get(["savingsAmount"], function(result) {
    amountField.value = result.savingsAmount;
  });
  console.log("running content.js");
})();
