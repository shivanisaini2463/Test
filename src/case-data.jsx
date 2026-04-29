// Loads case data from case-data.json and exposes it as window.CASE_DETAILS.
// Uses a synchronous XHR so dependent scripts can access it immediately.

(function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "src/case-data.json", false); // synchronous
  xhr.send();
  window.CASE_DETAILS = JSON.parse(xhr.responseText);
})();
