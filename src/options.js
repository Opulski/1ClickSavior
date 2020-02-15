(() => {
  "use strict";

  const baseAmount = 10,
        PERC = 1,
        FIX = 2;

  var        step2a = document.getElementById("tostep2a"),
             step2b = document.getElementById("tostep2b"),
             actual = document.getElementById("actual"),
      currentAmount = 0,
        currentType = 0;

  let setKiller = (id) => {
    document.getElementById(id).onclick = function() { window.close(); };
  };

  chrome.storage.sync.get(["savingsAmount", "savingsType"], function(result) {
    currentAmount = result.savingsAmount;
      currentType = result.savingsType;

    if ( currentType === PERC ) {
      actual.innerHTML = currentAmount + '% vom Einkauf';
    } else {
      actual.innerHTML = '€ ' + currentAmount;
    }
  });

  step2a.onclick = function() {
    document.querySelector( '#step1' ).style.display = 'none';
    document.querySelector( '#step2a' ).style.display = 'block';
    setKiller("exit2a");

    // Update the current slider value (each time you drag the slider handle)
    var slider = document.getElementById("myRange");
    var output = document.getElementById("rangeValue");

    if ( currentType === PERC ) {
          slider.value = currentAmount;
      output.innerHTML = currentAmount;
    } else {
          slider.value = baseAmount;
      output.innerHTML = baseAmount;
    }

    slider.oninput = function() {
      output.innerHTML = slider.value;
    };

    slider.onmouseup = function() {
      chrome.storage.sync.set({ savingsAmount: parseInt(this.value), savingsType: PERC }, function() {
        return true;
      });
    };
  }

  step2b.onclick = function() {
    document.querySelector( '#step1' ).style.display = 'none';
    document.querySelector( '#step2b' ).style.display = 'block';

    var fixed  = document.getElementById("FestBetrag");
    if ( currentType === FIX ) {
      fixed.value = currentAmount;
    } else {
      fixed.value = baseAmount;
    }

    fixed.oninput = function() {
      let val = this.value;
      chrome.storage.sync.set({ savingsAmount: parseInt(val), savingsType: FIX }, function() {
        setKiller("exit2b");
        var e4b = document.querySelector("#exit2b");
        val !== '' ?
          e4b.removeAttribute("disabled") :
          e4b.setAttribute("disabled", true);
      });
    };
  }
})();
