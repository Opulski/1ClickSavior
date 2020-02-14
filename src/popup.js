<<<<<<< Updated upstream
(() => {
  "use strict";
  let paypalForm = document.getElementById("form");
  let amountField = document.getElementById("paypalFormValueAmount");
  chrome.storage.sync.get(["savingsAmount"], function(result) {
    amountField.value = result.savingsAmount;
  });
  console.log("running content.js");
})();
=======
( () => {
  'use strict';
  console = chrome.extension.getBackgroundPage().console;
  console.log("HELLO WHATSUP");
} )();
>>>>>>> Stashed changes
