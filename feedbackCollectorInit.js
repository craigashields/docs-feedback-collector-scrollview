document.addEventListener("DOMContentLoaded", function () {
  // Function to dynamically load CSS files
  function loadCSS(href) {
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = href;
    document.head.appendChild(cssLink);
  }

  // Function to dynamically load JavaScript files
  function loadJavaScript(src) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script); // Optionally use document.head if needed
  }

  // URLs of the CSS files
  const cssFiles = ["css/aptitude-custom.css", "css/feedback.css"];

  // URLs of the JavaScript files
  const jsFiles = ["js/feedbackCollector.js"];

  // Load all CSS files
  cssFiles.forEach((file) => loadCSS(file));

  // Load all JavaScript files
  jsFiles.forEach((file) => loadJavaScript(file));
});
