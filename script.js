const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const projectsContainer = document.querySelector("#github-projects");
const nextProjectsButton = document.querySelector("#next-projects");
if (year) {
	year.textContent = new Date().getFullYear();
}

const githubUsername = "jideotetic";
const projectsPerPage = 3;
let githubProjects = [];
let projectPage = 0;

const createProjectCard = (repository, index) => {
	const card = document.createElement("article");
	card.className = `project-card github-project reveal visible${index === 0 ? " project-card-large" : ""}`;

	const visual = document.createElement("div");
	visual.className = "project-visual";
	const label = document.createElement("span");
	label.className = "visual-label";
	label.textContent = `${repository.language || "Front-end"} / GitHub`;
	const mark = document.createElement("span");
	mark.className = "repo-mark";
	mark.textContent = "</>";
	visual.append(label, mark);

	const meta = document.createElement("div");
	meta.className = "project-meta";
	const info = document.createElement("div");
	const title = document.createElement("h3");
	title.textContent = repository.name;
	const description = document.createElement("p");
	description.textContent =
		repository.description || "A project built by Abdulbasit Yusuf.";
	info.append(title, description);
	const link = document.createElement("a");
	link.href = repository.html_url;
	link.target = "_blank";
	link.rel = "noreferrer";
	link.setAttribute("aria-label", `View ${repository.name} on GitHub`);
	link.textContent = "↗";
	meta.append(info, link);
	card.append(visual, meta);
	return card;
};

const loadGithubProjects = async () => {
	if (!projectsContainer) return;
	try {
		const response = await fetch("/api/projects");
		if (!response.ok)
			throw new Error(`GitHub request failed with status ${response.status}`);
		const repositories = await response.json();

		githubProjects = repositories
			.filter((repository) => !repository.fork)
		if (!githubProjects.length) throw new Error("No public repositories found");
		renderProjectPage();
	} catch (error) {
		const status = document.createElement("p");
		status.className = "projects-status";
		status.textContent =
			"Projects are currently unavailable. View my work on GitHub instead.";
		const profileLink = document.createElement("a");
		profileLink.href = `https://github.com/${githubUsername}`;
		profileLink.target = "_blank";
		profileLink.rel = "noreferrer";
		profileLink.textContent = " Open GitHub profile ↗";
		status.append(profileLink);
		projectsContainer.replaceChildren(status);
		console.error("Unable to load GitHub projects.", error);
	}
};

const renderProjectPage = () => {
	const start = projectPage * projectsPerPage;
	const projects = githubProjects.slice(start, start + projectsPerPage);
	projectsContainer.replaceChildren(...projects.map(createProjectCard));
	if (nextProjectsButton) {
		nextProjectsButton.hidden = start + projectsPerPage >= githubProjects.length;
	}
};

nextProjectsButton?.addEventListener("click", () => {
	projectPage += 1;
	renderProjectPage();
	document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
});

loadGithubProjects();

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
