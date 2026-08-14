<h1 align=center>Web-Seite Malermeister Kringelis</h1>

<p align=center>Erstellt auf Basis des <a href="https://astro.build/">Astro-Frameworks</a> inklusive TailwindCSS, TypeScript und React.</p>

<p align=center>Made by <a href="https://alpinedata.de">Alpine Data Ventures</a></p>

<p align=center>
  <a href="https://github.com/withastro/astro/releases/tag/astro%404.3.2" alt="Contributors">
    <img src="https://img.shields.io/static/v1?label=ASTRO&message=4.3&color=000&logo=astro" />
  </a>

  <a href="https://github.com/zeon-studio/astroplate/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/zeon-studio/astroplate" alt="license"></a>

  <img src="https://img.shields.io/github/languages/code-size/zeon-studio/astroplate" alt="code size">

  <a href="https://github.com/zeon-studio/astroplate/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/zeon-studio/astroplate" alt="contributors"></a>
</p>

## 📌 Key Features

- 👥 Multi-Authors
- 🌐 Multilingual
- 🎯 Similar Posts Suggestion
- 🔍 Search Functionality
- 🌑 Dark Mode
- 🏷️ Tags & Categories
- 🔗 Netlify setting pre-configured
- 📞 Support contact form
- 📱 Fully responsive
- 📝 Write and update content in Markdown / MDX
- 🤖 LLM-ready docs generation (`llms.txt`, `llms-full.txt`, and per-page `.md`)
- 📎 Google Tag Manager
- 💬 Disqus Comment
- 🔳 Syntax Highlighting

### 📄 15+ Pre-designed Pages

- 🏠 Homepage
- 👤 About
- 📞 Contact
- 👥 Authors
- 👤 Author Single
- 📝 Blog
- 📝 Blog Single
- 🚫 Custom 404
- 💡 Elements
- 📄 Privacy Policy
- 🏷️ Tags
- 🏷️ Tag Single
- 🗂️ Categories
- 🗂️ Category Single
- 🔍 Search

## 🔗 Integrations

- astro/react
- astro/sitemap
- astro/tailwind
- Cloudflare Workers (optional deployment)

## 🚀 Getting Started

### 📦 Dependencies

- astro v7.0.0
- node v22.12.0+
- tailwind v4+

### 👉 Install Dependencies

```bash
npm install
```

### 👉 Development Command

```bash
npm run dev
```

### 👉 Build Command

```bash
npm run build
```

### 👉 Generate LLM Files

After build, this project can generate LLM-friendly files from your `dist` HTML:

- `llms.txt` (index of pages)
- `llms-full.txt` (full combined content)
- optional per-page Markdown files

Use one of these ways:

```bash
# included in build
npm run build

# or run manually after build
npm run generate-llms
```

Configuration is in `src/config/config.json` under `llms`:

- `generate_llms_txt`: create `llms.txt`
- `generate_llms_full_txt`: create `llms-full.txt`
- `generate_individual_md`: create individual `.md` files
- `include`: include only selected routes/globs (empty = all files). Examples: `/about`, `/blog/**` (all files in blog folder)
- `exclude`: exclude routes/globs on top of defaults. Example: `/blog/index.html`

### 👉 Preview on Cloudflare Workers

```bash
npm run preview:cf-workers
```

### 👉 Deploy to Cloudflare Workers

```bash
npm run deploy:cf-workers
```

### 👉 Build and Run With Docker

```bash
docker build -t astroplate .
# or
# docker build --build-arg INSTALLER=npm -t astroplate .
# or
# docker build --build-arg INSTALLER=pnpm -t astroplate .

docker run -p 3000:80 astroplate
# or
# docker run --rm -p 3000:80 astroplate
```

To access the shell within the container:

```bash
docker run -it --rm astroplate ash
```

<!-- edit with sitepins -->

## 📝 Edit Content with CMS

This template comes pre-configured with [**Sitepins**](https://sitepins.com?aff=astroplate), a Git-based Headless CMS designed for seamless content management. You can update your website’s text, images, and configuration without touching a single line of code.

**How to get started:**

Click the Edit with Sitepins button below and follow the on-screen instructions to start editing your content visually.

  <a target="_blank" href="https://app.sitepins.com/new/clone?name=Astroplate&repository=https://github.com/zeon-studio/astroplate?aff=astroplate">
    <img src="https://sitepins.com/button.svg" alt="Edit with Sitepins">
  </a>

<!-- licence -->
## 📝 License

Copyright (c) 2024 - Present, Alpine Data Ventures

**Code License:**

Part of the code is developed by [Zeon Studio](https://zeon.studio/) and released under the [MIT](https://github.comzeon-studio/astroplate/blob/main/LICENSE) license.
