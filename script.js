const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const projectsContainer = document.querySelector("#projects");
const previousProjectsButton = document.querySelector("#prev-projects");
const nextProjectsButton = document.querySelector("#next-projects");
if (year) {
	year.textContent = new Date().getFullYear();
}

const projectsPerPage = 3;
let projectPage = 0;

const projects = [
	{
		name: "Personal Portfolio",
		description: "A thoughtful portfolio for showcasing selected work and experience.",
		language: "HTML / CSS / JavaScript",
		html_url: "https://github.com/Jideotetic/portfolio",
		image: "portfolio-preview.png",
	},
	{
		name: "Sorograph Dashboard",
		description: "A dashboard for exploring and visualising graph data.",
		language: "TypeScript",
		html_url: "https://github.com/Jideotetic/sorograph-dashboard",
	},
	{
		name: "ErrandGo",
		description: "A web application for organising and completing errands.",
		language: "TypeScript",
		html_url: "https://github.com/Jideotetic/errandgo-web-app",
	},
	{
		name: "Home Veer Realities",
		description: "A modern real-estate experience for discovering homes.",
		language: "TypeScript",
		html_url: "https://github.com/Jideotetic/home-veer-realities",
	},
	{
		name: "LiquidsFi Explorer",
		description: "An interface for exploring LiquidsFi data.",
		language: "JavaScript",
		html_url: "https://github.com/Jideotetic/liquidsfi-explorer",
	},
	{
		name: "CV Builder",
		description: "A focused tool for creating and updating a CV.",
		language: "TypeScript",
		html_url: "https://github.com/Jideotetic/cv-builder",
	},
	{
		name: "MathCollab",
		description: "A collaborative space for working through mathematics.",
		language: "TypeScript",
		html_url: "https://github.com/Jideotetic/MathCollab",
	},
];

const createProjectCard = (project, index) => {
	const card = document.createElement("article");
	card.className = `project-card github-project reveal visible${index === 0 ? " project-card-large" : ""}`;

	const visual = document.createElement("div");
	visual.className = `project-visual${project.image ? " project-visual-preview" : ""}`;
	if (project.image) {
		const preview = document.createElement("img");
		preview.className = "project-preview";
		preview.src = project.image;
		preview.alt = `${project.name} preview`;
		visual.append(preview);
	}
	const label = document.createElement("span");
	label.className = "visual-label";
	label.textContent = `${project.language || "Front-end"} / Project`;
	visual.append(label);
	if (!project.image) {
		const mark = document.createElement("span");
		mark.className = "repo-mark";
		mark.textContent = "</>";
		visual.append(mark);
	}

	const meta = document.createElement("div");
	meta.className = "project-meta";
	const info = document.createElement("div");
	const title = document.createElement("h3");
	title.textContent = project.name;
	const description = document.createElement("p");
	description.textContent =
		project.description || "A project built by Abdulbasit Yusuf.";
	info.append(title, description);
	const link = document.createElement("a");
	link.href = project.html_url;
	link.target = "_blank";
	link.rel = "noreferrer";
	link.setAttribute("aria-label", `View ${project.name} on GitHub`);
	link.textContent = "↗";
	meta.append(info, link);
	card.append(visual, meta);
	return card;
};

const renderProjectPage = () => {
	const start = projectPage * projectsPerPage;
	const visibleProjects = projects.slice(start, start + projectsPerPage);
	projectsContainer?.replaceChildren(...visibleProjects.map(createProjectCard));
	if (previousProjectsButton) {
		previousProjectsButton.disabled = projectPage === 0;
	}
	if (nextProjectsButton) {
		nextProjectsButton.disabled = start + projectsPerPage >= projects.length;
	}
};

previousProjectsButton?.addEventListener("click", () => {
	projectPage -= 1;
	renderProjectPage();
	document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
});

nextProjectsButton?.addEventListener("click", () => {
	projectPage += 1;
	renderProjectPage();
	document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
});

renderProjectPage();

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
	document
		.querySelectorAll(".reveal")
		.forEach((element) => element.classList.add("visible"));
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
