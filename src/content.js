(() => {
  "use strict";

  let CheckForPaymentFinish = () => {
  	let finishBtn = document.querySelector( '#button > input[ value="Jetzt bezahlen" ]' );
  	if ( finishBtn ) {
  		let donateDiv = document.createElement( 'div' );

	  	donateDiv.innerHTML = `
	  	  <input type="checkbox"/> Anschließend Spenden
	  	  <div id="content">
	  	    <form style="display: none" id="donateFrm" action="https://www.sandbox.paypal.com/cgi-bin/webscr"
	  	        method="post" target="_blank">
		        <input type="hidden" name="cmd" value="_donations" />
		        <input type="hidden" name="business" value="sb-hegeo1056295@business.example.com" />
		        <input type="hidden" name="item_name" value="For saving the world" />
		        <input type="hidden" name="currency_code" value="EUR" />
		        <input type="hidden" name="amount" id="paypalFormValueAmount" value="5" />
	        </form>
	      </div>`;
	  	
	  	finishBtn.parentElement.insertBefore( donateDiv, finishBtn );

			finishBtn.addEventListener( 'click', ( e ) => {
				let donateForm = document.querySelector( '#donateFrm' );
				var w = window.open('about:blank','Popup_Window','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=' + window.outerWidth + ',height=' + window.outerHeight + ',left=' + window.screenLeft + ',top=' + window.screenTop);
				donateForm.target = 'Popup_Window';
				donateForm.submit();
				window.focus();
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
