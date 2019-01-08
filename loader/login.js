// Time to show the spinner
function hideLoader() {
  var loader = document.getElementById("loading");
  var loginData = document.getElementById("login-data");
  loader.style.display = "none";
  loginData.style.display = "block";
}

window.addEventListener('load', function () {
  setTimeout(hideLoader, 2000);
}, false);
