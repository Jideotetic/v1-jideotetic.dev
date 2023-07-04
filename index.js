// const contentContainer = document.getElementById("content-container");
// const loadingSpinner = document.getElementById("loading-spinner");
// const body = document.querySelector("body");
// const navBar = document.querySelector("nav");
// const navLinks = document.getElementsByClassName("nav-link");
// const toggle = document.getElementById("toggle");
// const theme = document.getElementById("theme");
// const bars = document.querySelectorAll(".bar");
// const darkModeIcon = document.querySelector(".dark-mode-icon");
// const lightModeIcon = document.querySelector(".light-mode-icon");
// const projectDescription = document.querySelectorAll(".project-description");

// // handleLoading() is called when the page is loaded
// function handleLoading() {
//   contentContainer.style.display = "block";
//   loadingSpinner.style.display = "none";
// }

// // change from light mode to dark mode and vice versa
// theme.addEventListener("click", function () {
//   body.classList.toggle("dark-mode");
//   for (let i = 0; i < bars.length; i++) {
//     bars[i].classList.toggle("bar-dark-mode");
//   }
//   for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].classList.toggle("link-dark-mode");
//   }
//   for (let i = 0; i < projectDescription.length; i++) {
//     projectDescription[i].classList.toggle("project-title-dark-mode");
//   }
// });

// // Expand and collapse the navbar when the menu icon is clicked
// toggle.addEventListener("click", function () {
//   if (theme.checked && toggle.checked) {
//     navBar.classList.toggle("mobile-nav");
//   } else if (theme.checked && !toggle.checked) {
//     navBar.classList.toggle("mobile-nav");
//   } else if (toggle.checked) {
//     navBar.classList.toggle("mobile-nav");
//     for (let i = 0; i < bars.length; i++) {
//       bars[i].classList.toggle("bar-dark-mode");
//     }
//     for (let i = 0; i < navLinks.length; i++) {
//       navLinks[i].classList.toggle("link-dark-mode");
//     }
//   } else if (!toggle.checked) {
//     navBar.classList.toggle("mobile-nav");
//     for (let i = 0; i < bars.length; i++) {
//       bars[i].classList.toggle("bar-dark-mode");
//     }
//     for (let i = 0; i < navLinks.length; i++) {
//       navLinks[i].classList.toggle("link-dark-mode");
//     }
//   } else {
//     navBar.classList.toggle("mobile-nav");
//   }
// });

// // Expand and collapse the navbar when the window is resized
// window.addEventListener("resize", function () {
//   if (window.innerWidth >= 768 && toggle.checked && theme.checked) {
//     navBar.classList.remove("mobile-nav");
//   } else if (window.innerWidth >= 768 && toggle.checked && !theme.checked) {
//     navBar.classList.remove("mobile-nav");
//     for (let i = 0; i < navLinks.length; i++) {
//       navLinks[i].classList.remove("link-dark-mode");
//     }
//   } else if (window.innerWidth < 768 && toggle.checked && !theme.checked) {
//     navBar.classList.add("mobile-nav");
//     for (let i = 0; i < navLinks.length; i++) {
//       navLinks[i].classList.add("link-dark-mode");
//     }
//   } else if (window.innerWidth < 768 && toggle.checked) {
//     navBar.classList.add("mobile-nav");
//   }
// });

// // Collapse the navbar when a link is clicked
// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", function () {
//     if (toggle.checked && theme.checked) {
//       navBar.classList.toggle("mobile-nav");
//       toggle.checked = false;
//     } else if (toggle.checked) {
//       navBar.classList.toggle("mobile-nav");
//       for (let i = 0; i < bars.length; i++) {
//         bars[i].classList.toggle("bar-dark-mode");
//       }
//       for (let i = 0; i < navLinks.length; i++) {
//         navLinks[i].classList.toggle("link-dark-mode");
//       }
//       toggle.checked = false;
//     }
//   });
// }

// // Call the handleLoading() function when the page is loaded
// window.addEventListener("load", handleLoading);

const themeToggler = document.getElementById('theme-icon');
const darkModeIcon = document.querySelector('.dark-mode-icon');
const lightModeIcon = document.querySelector('.light-mode-icon');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const mobileNavToggler = document.getElementById('hamburger-icon');
const navBar = document.querySelector('.main-nav-bar');

// Get user preferred theme from local storage for future visits
let theme = localStorage.getItem('theme');

// Load correct theme based on user OS preference
function loadTheme() {
  if (prefersDarkScheme.matches && theme === null) {
    theme = 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } else if (!prefersDarkScheme.matches && theme === null) {
    theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

// Change theme on OS preference change
function changeThemeOnOSPreferenceChange(e) {
  theme = e.matches ? 'dark' : 'light';

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  // localStorage.setItem('theme', theme);
}

// Change theme on user preference change
function changeThemeOnToggle() {
  if (theme === 'light') {
    theme = 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    lightModeIcon.style.display = 'inline';
    darkModeIcon.style.display = 'none';
    setTimeout(() => {
      lightModeIcon.style.opacity = '1';
      darkModeIcon.style.opacity = '0';
    }, 50);
  } else {
    theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
    darkModeIcon.style.display = 'inline';
    lightModeIcon.style.display = 'none';
    setTimeout(() => {
      darkModeIcon.style.opacity = '1';
      lightModeIcon.style.opacity = '0';
    }, 50);
  }
  // localStorage.setItem('theme', theme);
}

function expandMobileNav() {
  if (mobileNavToggler.checked) {
    navBar.classList.add('mobile-nav');
  } else {
    navBar.classList.remove('mobile-nav');
  }
}

loadTheme();
prefersDarkScheme.addEventListener('change', changeThemeOnOSPreferenceChange);
themeToggler.addEventListener('click', changeThemeOnToggle);
mobileNavToggler.addEventListener('click', expandMobileNav);
