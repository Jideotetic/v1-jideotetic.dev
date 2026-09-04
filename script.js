const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
if (year) {
	year.textContent = new Date().getFullYear();
}

let savedTheme = null;
try {
	savedTheme = window.localStorage?.getItem("theme");
} catch {
	savedTheme = null;
}
if (savedTheme === "dark" || savedTheme === "light") {
	document.body.classList.add(`${savedTheme}-mode`);
}

const updateThemeToggle = () => {
	const prefersDark =
		typeof window.matchMedia === "function" &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;
	const isDark =
		document.body.classList.contains("dark-mode") ||
		(!document.body.classList.contains("light-mode") && prefersDark);
	themeToggle?.setAttribute("aria-pressed", String(isDark));
	themeToggle?.setAttribute(
		"aria-label",
		isDark ? "Switch to light mode" : "Switch to dark mode",
	);
	if (themeIcon) themeIcon.textContent = isDark ? "☀" : "☾";
};

updateThemeToggle();

themeToggle?.addEventListener("click", () => {
	const prefersDark =
		typeof window.matchMedia === "function" &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;
	const isDark =
		document.body.classList.contains("dark-mode") ||
		(!document.body.classList.contains("light-mode") && prefersDark);
	document.body.classList.toggle("dark-mode", !isDark);
	document.body.classList.toggle("light-mode", isDark);
	try {
		window.localStorage?.setItem("theme", isDark ? "light" : "dark");
	} catch {
		// Theme still applies for the current page when storage is unavailable.
	}
	updateThemeToggle();
});

menuToggle?.addEventListener("click", () => {
	const isOpen = siteNav.classList.toggle("open");
	menuToggle.setAttribute("aria-expanded", String(isOpen));
	menuToggle.classList.toggle("open", isOpen);
	document.body.classList.toggle("menu-open", isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		siteNav.classList.remove("open");
		menuToggle?.setAttribute("aria-expanded", "false");
		menuToggle?.classList.remove("open");
		document.body.classList.remove("menu-open");
	});
});

if (typeof window.IntersectionObserver !== "function") {
	document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
} else {
	const revealObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				revealObserver.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.12 },
	);

	const revealElements = document.querySelectorAll(".reveal");
	revealElements.forEach((element) => revealObserver.observe(element));
	document.documentElement.classList.add("reveal-ready");

}
