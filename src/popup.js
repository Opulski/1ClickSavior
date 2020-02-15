( () => {
  'use strict';

  document.querySelector( '#settings' ).addEventListener( 'click', ( e ) => {
    chrome.tabs.create({ url: "/options.html" } );
  } );
  
  // console = chrome.extension.getBackgroundPage().console;
  // console.log("HELLO WHATSUP");
} )();
