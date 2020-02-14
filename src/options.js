(() => {
  "use strict";

  console.log("hello from setup.js");
  var slider = document.getElementById("myRange");
  var output = document.getElementById("rangeValue");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
    chrome.storage.sync.set({ savingsAmount: this.value }, function() {
      console.log("Data Saved");
    });
  };
})();
