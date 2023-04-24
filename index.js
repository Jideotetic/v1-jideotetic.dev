const contentContainer = document.getElementById("content-container");
const loadingSpinner = document.getElementById("loading-spinner");
const body = document.querySelector("body");
const navBar = document.querySelector("nav");
const navLinks = document.getElementsByClassName("nav-link");
const toggle = document.getElementById("toggle");
const theme = document.getElementById("theme");
const bars = document.querySelectorAll(".bar");
const darkModeIcon = document.querySelector(".dark-mode-icon");
const lightModeIcon = document.querySelector(".light-mode-icon");
const projectDescription = document.querySelectorAll(".project-description");

// handleLoading() is called when the page is loaded
function handleLoading() {
  contentContainer.style.display = "block";
  loadingSpinner.style.display = "none";
}

// change from light mode to dark mode and vice versa
theme.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.toggle("bar-dark-mode");
  }
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle("link-dark-mode");
  }
  for (let i = 0; i < projectDescription.length; i++) {
    projectDescription[i].classList.toggle("project-title-dark-mode");
  }
});

// Expand and collapse the navbar when the menu icon is clicked
toggle.addEventListener("click", function () {
  if (theme.checked && toggle.checked) {
    navBar.classList.toggle("mobile-nav");
  } else if (theme.checked && !toggle.checked) {
    navBar.classList.toggle("mobile-nav");
  } else if (toggle.checked) {
    navBar.classList.toggle("mobile-nav");
    for (let i = 0; i < bars.length; i++) {
      bars[i].classList.toggle("bar-dark-mode");
    }
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.toggle("link-dark-mode");
    }
  } else if (!toggle.checked) {
    navBar.classList.toggle("mobile-nav");
    for (let i = 0; i < bars.length; i++) {
      bars[i].classList.toggle("bar-dark-mode");
    }
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.toggle("link-dark-mode");
    }
  } else {
    navBar.classList.toggle("mobile-nav");
  }
});

// Expand and collapse the navbar when the window is resized
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768 && toggle.checked && theme.checked) {
    navBar.classList.remove("mobile-nav");
  } else if (window.innerWidth >= 768 && toggle.checked && !theme.checked) {
    navBar.classList.remove("mobile-nav");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("link-dark-mode");
    }
  } else if (window.innerWidth < 768 && toggle.checked && !theme.checked) {
    navBar.classList.add("mobile-nav");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.add("link-dark-mode");
    }
  } else if (window.innerWidth < 768 && toggle.checked) {
    navBar.classList.add("mobile-nav");
  }
});

// Collapse the navbar when a link is clicked
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (toggle.checked && theme.checked) {
      navBar.classList.toggle("mobile-nav");
      toggle.checked = false;
    } else if (toggle.checked) {
      navBar.classList.toggle("mobile-nav");
      for (let i = 0; i < bars.length; i++) {
        bars[i].classList.toggle("bar-dark-mode");
      }
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle("link-dark-mode");
      }
      toggle.checked = false;
    }
  });
}

// Call the handleLoading() function when the page is loaded
window.addEventListener("load", handleLoading);
