const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
	const envFile = fs.readFileSync(envPath, "utf8");
	for (const line of envFile.split(/\r?\n/)) {
		const trimmedLine = line.trim();
		if (!trimmedLine || trimmedLine.startsWith("#")) continue;

		const separatorIndex = trimmedLine.indexOf("=");
		if (separatorIndex === -1) continue;

		const key = trimmedLine.slice(0, separatorIndex).trim();
		const value = trimmedLine
			.slice(separatorIndex + 1)
			.trim()
			.replace(/^(['"])(.*)\1$/, "$2");
		if (key && process.env[key] === undefined) process.env[key] = value;
	}
}

const port = Number(process.env.PORT) || 4173;
const root = __dirname;
const githubUsername = process.env.GITHUB_USERNAME || "jideotetic";
const githubToken = process.env.GITHUB_TOKEN;

const contentTypes = {
	".css": "text/css; charset=utf-8",
	".html": "text/html; charset=utf-8",
	".ico": "image/x-icon",
	".js": "text/javascript; charset=utf-8",
	".png": "image/png",
};

const server = http.createServer(async (request, response) => {
	const requestUrl = new URL(request.url, `http://${request.headers.host}`);

	if (requestUrl.pathname === "/api/projects") {
		try {
			const githubUrl = githubToken
				? "https://api.github.com/user/repos?affiliation=owner&visibility=all&sort=updated&per_page=100"
				: `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc&per_page=100`;
			const headers = {
				Accept: "application/vnd.github+json",
				"User-Agent": "Abdulbasit-Yusuf-Portfolio",
			};
			if (githubToken) headers.Authorization = `Bearer ${githubToken}`;

			const githubResponse = await fetch(githubUrl, { headers });
			if (!githubResponse.ok) {
				throw new Error(
					`GitHub request failed with status ${githubResponse.status}`,
				);
			}
			const repositories = await githubResponse.json();
			const projects = repositories
				.filter(
					(repository) =>
						!repository.fork &&
						repository.owner?.login.toLowerCase() ===
							githubUsername.toLowerCase(),
				)
				.map((repository) => ({
					name: repository.name,
					description: repository.description,
					language: repository.language,
					html_url: repository.html_url,
					stars: repository.stargazers_count,
				}));

			response.writeHead(200, {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "public, max-age=300",
			});
			response.end(JSON.stringify(projects));
		} catch (error) {
			console.error("Unable to load GitHub projects.", error);
			response.writeHead(502, {
				"Content-Type": "application/json; charset=utf-8",
			});
			response.end(
				JSON.stringify({ error: "Unable to load projects from GitHub." }),
			);
		}
		return;
	}

	const requestedPath =
		requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
	const filePath = path.resolve(root, `.${requestedPath}`);
	if (!filePath.startsWith(`${root}${path.sep}`)) {
		response.writeHead(403);
		response.end("Forbidden");
		return;
	}

	try {
		const file = await fs.promises.readFile(filePath);
		response.writeHead(200, {
			"Content-Type":
				contentTypes[path.extname(filePath)] || "application/octet-stream",
		});
		response.end(file);
	} catch {
		response.writeHead(404);
		response.end("Not found");
	}
});

server.listen(port, () => {
	console.log(`Portfolio server running at http://localhost:${port}`);
});
