(() => {
  "use strict";
  let iframeTemplate = `
    <iframe
      title="Top 10 RICHEST Video Game Publishers!"
      src="https://www.youtube.com/embed/lNj99a_Cm48?feature=oembed"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen=""
      id="fitvid0"
      class="clickableIframe"
    ></iframe>
  `;
  for (let i = 0; i < 5; i++) {
    document.getElementById("fillMeWithFrames").innerHTML =
      document.getElementById("fillMeWithFrames").innerHTML + iframeTemplate;
  }
})();
