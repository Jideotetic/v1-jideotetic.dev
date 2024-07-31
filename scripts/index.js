const themeToggler = document.getElementById("theme-icon");
const darkModeIcon = document.querySelector(".dark-mode-icon");
const lightModeIcon = document.querySelector(".light-mode-icon");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const mobileNavToggler = document.getElementById("hamburger-icon");
const navLinks = document.querySelector(".main-nav-links");
const navLink = document.querySelector(".main-nav-links").children;

console.log(navLink);

// Get user preferred theme from local storage for future visits
let theme = localStorage.getItem("theme");

// Load correct theme based on user OS preference
function loadTheme() {
	if (prefersDarkScheme.matches && theme === null) {
		theme = "dark";
		document.documentElement.setAttribute("data-theme", theme);
	} else if (!prefersDarkScheme.matches && theme === null) {
		theme = "light";
		document.documentElement.setAttribute("data-theme", theme);
	} else {
		document.documentElement.setAttribute("data-theme", theme);
	}
}

// Change theme on OS preference change
function changeThemeOnOSPreferenceChange(e) {
	theme = e.matches ? "dark" : "light";

	if (theme === "dark") {
		document.documentElement.setAttribute("data-theme", theme);
	} else {
		document.documentElement.setAttribute("data-theme", theme);
	}
	localStorage.setItem("theme", theme);
}

// Change theme on user preference change
function changeThemeOnToggle() {
	if (theme === "light") {
		theme = "dark";
		document.documentElement.setAttribute("data-theme", theme);
		lightModeIcon.style.display = "inline";
		darkModeIcon.style.display = "none";
		setTimeout(() => {
			lightModeIcon.style.opacity = "1";
			darkModeIcon.style.opacity = "0";
		}, 50);
	} else {
		theme = "light";
		document.documentElement.setAttribute("data-theme", theme);
		darkModeIcon.style.display = "inline";
		lightModeIcon.style.display = "none";
		setTimeout(() => {
			darkModeIcon.style.opacity = "1";
			lightModeIcon.style.opacity = "0";
		}, 50);
	}
	localStorage.setItem("theme", theme);
}

function expandMobileNav() {
	if (mobileNavToggler.checked) {
		navLinks.classList.add("mobile-nav");
	} else {
		navLinks.classList.remove("mobile-nav");
	}
}

function handleMobileNavOnResize() {
	if (window.innerWidth >= 768) {
		navBar.classList.remove("mobile-nav");
	} else if (window.innerWidth < 768 && mobileNavToggler.checked) {
		navBar.classList.add("mobile-nav");
	} else {
		navBar.classList.remove("mobile-nav");
	}
}

navLinks.addEventListener("click", () => {
	if (navLinks.classList.contains("mobile-nav")) {
		mobileNavToggler.checked = false;
		navLinks.classList.remove("mobile-nav");
	}
});

loadTheme();
prefersDarkScheme.addEventListener("change", changeThemeOnOSPreferenceChange);
themeToggler.addEventListener("click", changeThemeOnToggle);
mobileNavToggler.addEventListener("click", expandMobileNav);
window.addEventListener("resize", handleMobileNavOnResize);
