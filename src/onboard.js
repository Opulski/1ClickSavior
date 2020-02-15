(() => {
  "use strict";

  const baseAmount = 10,
              PERC = 1,
               FIX = 2;

  var  slider = document.getElementById("myRange");
  var  output = document.getElementById("rangeValue");
  var message = document.getElementById("message");
  var   later = document.getElementById("later");
  var   step2 = document.getElementById("toStep2");
  var   step3 = document.getElementById("toStep3");
  var  step4a = document.getElementById("toStep4a");
  var  step4b = document.getElementById("toStep4b");

  let setKiller = (id) => {
    document.getElementById(id).onclick = function() { window.close(); };
  };

  chrome.storage.sync.set({ savingsAmount: baseAmount, savingsType: PERC }, function() {
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
    setKiller("exit4a");
  }

  step4b.onclick = function() {
    document.querySelector( '#step3' ).style.display = 'none';
    document.querySelector( '#step4b' ).style.display = 'block';

    var fixed  = document.getElementById("FestBetrag");
    fixed.value = baseAmount;

    fixed.oninput = function() {
      let val = this.value;
      chrome.storage.sync.set({ savingsAmount: parseInt(val), savingsType: FIX }, function() {
        setKiller("exit4b");
        var e4b = document.querySelector("#exit4b");
        val !== '' ?
          e4b.removeAttribute("disabled") :
          e4b.setAttribute("disabled", true);
      });
    };
  }

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = slider.value;
  };

  slider.onmouseup = function() {
    chrome.storage.sync.set({ savingsAmount: parseInt(this.value), savingsType: PERC }, function() {
      return true;
    });
  };

})();
