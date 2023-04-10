const contentContainer = document.getElementById("content-container");
const loadingSpinner = document.getElementById("loading-spinner");
const navBar = document.getElementById("nav-bar");
const navLinks = navBar.getElementsByClassName("nav-link");
const toggle = document.getElementById("toggle");

// handleLoading() is called when the page is loaded
function handleLoading() {
  contentContainer.style.display = "block";
  loadingSpinner.style.display = "none";
}

// Collapse the navbar when a link is clicked
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (toggle.checked) {
      navBar.style.maxHeight = "0px";
      toggle.checked = false;
    }
  });
}

// Expand and collapse the navbar when the menu icon is clicked
toggle.addEventListener("click", function () {
  if (toggle.checked) {
    navBar.style.maxHeight = "100%";
  } else {
    navBar.style.maxHeight = "0px";
  }
});
