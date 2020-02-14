(() => {
  "use strict";

  let baseAmount = 5;

  var slider = document.getElementById("myRange");
  var output = document.getElementById("rangeValue");
  var message = document.getElementById("message");

  chrome.storage.sync.set({ savingsAmount: baseAmount }, function() {
    slider.value = baseAmount;
    output.innerHTML = parseInt(slider.value); // Display the default slider value
  });

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = slider.value;
  };

  slider.onmouseup = function() {
    chrome.storage.sync.set({ savingsAmount: parseInt(this.value) }, function() {
      message.innerHTML = "<strong>Einstellungen gespeichert.</strong> " +
        "Die WHH dankt ihnen.<br/><br/>" +
        "Sie können diesen <a id='killme' href='#'>Tab schließen.</a>";

      var killme = document.getElementById("killme");
      killme.onclick = function() { window.close(); };
    });
  };

  slider.onmousedown = function() {
    message.innerHTML = "";
  };
})();
