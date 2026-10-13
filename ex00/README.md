# Noor Alshater — Cybersecurity Portfolio

A personal portfolio built from scratch with plain HTML, CSS and JavaScript (no frameworks or templates).

## Files
- `index.html` — page structure and sections
- `style.css` — colors (themes), layout with Flexbox, and media queries for mobile
- `script.js` — theme switcher, photo switcher, language switcher, mobile menu and contact form
- `assets/` — photos, CV, certificate and project reports

## Sections
Navbar, Home, About Me (with photo), Skills, Projects, Experience, Certificates, Hobbies, Contact form, Footer.

## JavaScript features
- **Theme switcher:** a click changes `data-theme` on `<body>`, and the CSS variables change the colors.
- **Photo switcher:** a click fades the image out, changes `src` and `alt`, then fades it back in (no page reload).
- **Language switcher:** a translation dictionary (English / Arabic); the page `lang` and `dir` change to `ar` / `rtl` or `en` / `ltr`.

## Event lifecycle
User clicks a button -> browser fires a `click` event -> the callback given to `addEventListener` runs -> the callback changes the DOM or CSS (attribute, text or class) and the page updates.

## Run
Open `index.html` in a browser. Keep the `assets` folder beside it.
The contact form opens the visitor's email app; it does not send messages through a server.
