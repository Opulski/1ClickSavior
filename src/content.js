(() => {
  "use strict";

  let CheckForPaymentFinish = () => {
  let finishBtn = document.querySelector( '#button > input[ value="Jetzt bezahlen" ]' );
    if ( finishBtn ) {
    let donateDiv = document.createElement( 'div' );

    donateDiv.innerHTML = `
    <input id="whhDoDonate" type="checkbox"/> Anschließend <span id="whhDonationPreview"></span> Spenden
    <div id="content">
      <form style="display: none" id="donateFrm" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="sb-hegeo1056295@business.example.com" />
        <input type="hidden" name="item_name" value="For saving the world" />
        <input type="hidden" name="currency_code" value="EUR" />
        <input type="hidden" name="amount" id="whhDonationAmount" value="0" />
      </form>
    </div>`;
      
    finishBtn.parentElement.insertBefore( donateDiv, finishBtn );
    let donationField = document.querySelector("#whhDonationAmount"),
        donationLabel = document.querySelector("#whhDonationPreview"),
            amountTag = document.querySelector("format-currency > span");

    chrome.storage.sync.get(["savingsAmount"], function(result) {
      // regex magic to turn "4.000,50 USD" (eg: four thousand dollar and 50 cents) into "4000.50"
      // so that parseFloat can handle it. 
      let     amount = parseFloat(amountTag.innerText.replace(/\./,'').replace(/,/, '.'));
      let percentage = result.savingsAmount;
      let   donation = (amount * (percentage / 100)).toFixed(2);
      
      donationField.value = donation;
      donationLabel.innerHTML = percentage + '% (EUR ' + donation + ')';
    });

    finishBtn.addEventListener( 'click', ( e ) => {
      if ( document.querySelector("#whhDoDonate").checked === true ) {
        let donateForm = document.querySelector( '#donateFrm' );
				var w = window.open('about:blank','Popup_Window','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=' + window.outerWidth + ',height=' + window.outerHeight + ',left=' + window.screenLeft + ',top=' + window.screenTop);
				donateForm.target = 'Popup_Window';
				donateForm.submit();
				window.focus();
      }
    });
    } else {
      setTimeout( () => {
      CheckForPaymentFinish();
      }, 100 )
    }
  };

  let onLoad = () => {
  CheckForPaymentFinish();
  };

  window.addEventListener( 'DOMContentLoaded', onLoad );
} )();
