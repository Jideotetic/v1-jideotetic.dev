# Abdulbasit Yusuf Portfolio

A static personal portfolio website built with HTML, CSS, and vanilla JavaScript.

## Features

- Responsive portfolio layout
- Fixed navigation header
- Light and dark theme toggle
- Curated projects list with pagination
- Portfolio preview image support
- Experience section with roles, dates, and technology stacks

## Project structure

- `index.html` - page structure and content
- `styles.css` - layout, responsive styles, and themes
- `script.js` - project pagination, theme toggle, navigation, and interactions
- `portfolio-preview.png` - portfolio project preview
- `profile-picture.png` - hero profile image

## Run locally

This is a static site, so no Node.js server or package installation is required. Open
`index.html` directly in a browser, or serve the directory with any static file server.

For example:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Customization

Edit the `projects` array in `script.js` to update the displayed projects. To add a
preview image, include an `image` property with the image path.

Update the experience entries in the Experience section of `index.html` with the
company, role, dates, and technology stack.
