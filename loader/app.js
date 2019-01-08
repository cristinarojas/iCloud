// Time to show the spinner
function hideLoader() {
  var loader = document.getElementById("loading");
  var appData = document.getElementById("app-data");
  loader.style.display = "none";
  appData.style.display = "block";
}

window.addEventListener('load', function () {
  setTimeout(hideLoader, 2000);
}, false);

// Show options to the user
var user = document.getElementById("user");

user.addEventListener('click', function() {
  var options = document.getElementById("options");

  console.log(options)
  if (options.classList.contains("show")) {
    options.classList.remove("show");
  } else {
    options.classList.add("show");
  }

})
