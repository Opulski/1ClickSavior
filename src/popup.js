(() => {
  "use strict";

  document.querySelector("#settings").addEventListener("click", e => {
    chrome.tabs.create({ url: "/options.html" });
  });

  chrome.storage.sync.get(["savingsAmount", "savingsType"], function(result) {
    var curAmnt = result.savingsAmount,
      curType = result.savingsType;
    let finalAmount = 0;
    if (curType === 2) {
      finalAmount = result.savingsAmount;
    } else {
      finalAmount = 10;
    }
    document.getElementById("paypalFormValueAmount").value = finalAmount;
  });

  chrome.storage.sync.get(["overAllDonations"], result => {
    let overAllDonations = (result.overAllDonations || 0).toFixed(2);
    let progressValue = Number(overAllDonations) % 100;
    let numberOfChildsSavedNumber = Math.floor(Number(overAllDonations) / 100);
    document.getElementById("childProgressBar").value = progressValue;
    changeImages(numberOfChildsSavedNumber);
    createTexts(numberOfChildsSavedNumber, progressValue);
  });

  function changeImages(numberOfChildsSavedNumber) {
    let kidImages = document.getElementById("hungryKidsImage");
    if (numberOfChildsSavedNumber < 2) {
      kidImages.src = "img/hungryKid.jpg";
    } else if (numberOfChildsSavedNumber < 5) {
      kidImages.src = "img/hungryKidsSome.jpg";
      kidImages.alt = "Photo by Victor Nnakwe on Unsplash";
    } else {
      kidImages.src = "img/hungryKidsVillage.jpg";
    }
  }

  function createTexts(numberOfChildsSavedNumber, progressValue) {
    document.querySelector("#numberOfChildsSaved").innerText =
      numberOfChildsSavedNumber +
      " Kind" +
      (numberOfChildsSavedNumber === 1 ? "" : "er") +
      " gerettet";
    document.querySelector("#overallDonations").innerHTML =
      "Nur noch " +
      (100 - progressValue).toFixed(2) +
      "€<br>" +
      "Bis zur nächsten Rettung";
  }

  // console = chrome.extension.getBackgroundPage().console;
  // console.log("HELLO WHATSUP");
})();
