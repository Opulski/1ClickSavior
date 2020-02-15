(() => {
  "use strict";

  let baseAmount = 10;

  var slider = document.getElementById("myRange");
  var output = document.getElementById("rangeValue");
  var message = document.getElementById("message");
  var later = document.getElementById("later");
  var step2 = document.getElementById("toStep2");
  var step3 = document.getElementById("toStep3");
  var step4a = document.getElementById("toStep4a");
  var step4b = document.getElementById("toStep4b");
 

  chrome.storage.sync.set({ savingsAmount: baseAmount }, function() {
    slider.value = baseAmount;
    output.innerHTML = parseInt(slider.value); // Display the default slider value
  });

  later.onclick = function() { window.close() }

  step2.onclick = function() {
    document.querySelector( '#step1' ).style.display = 'none';
    document.querySelector( '#step2' ).style.display = 'block';
  }

  step3.onclick = function() {
    document.querySelector( '#step2' ).style.display = 'none';
    document.querySelector( '#step3' ).style.display = 'block';
  }

  step4a.onclick = function() {
    document.querySelector( '#step3' ).style.display = 'none';
    document.querySelector( '#step4a' ).style.display = 'block';
  }

  step4b.onclick = function() {
    document.querySelector( '#step3' ).style.display = 'none';
    document.querySelector( '#step4b' ).style.display = 'block';
  }

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = slider.value;
  };

  slider.onmouseup = function() {
    chrome.storage.sync.set({ savingsAmount: parseInt(this.value) }, function() {
      message.innerHTML = "<strong>Einstellungen gespeichert.</strong> " +
        "Du kannst diesen Tab jetzt <a id='killme' href='#'>schließen.</a>";

      var killme = document.getElementById("killme");
      killme.onclick = function() { window.close(); };
    });
  };

})();
