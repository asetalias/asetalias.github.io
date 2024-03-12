# ALiAS Website Source

The ALiAS website is undergoing a rewrite using [shadcn/ui](https://ui.shadcn.com/). Meanwhile, this website serves as a temporary solution to maintain [asetalias.in](https://asetalias.in).

## 🚀 Project Overview

Within this project, you'll find the following folders and files:

```bash
.
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── assets
│   │   ├── icons
│   │   └── images
│   └── data
│       ├── about.json
│       ├── alumni.json
│       ├── events.json
│       ├── members.json
│       └── socials.json
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── AboutUs
│   │   ├── Alumni
│   │   ├── Community
│   │   ├── Contact
│   │   ├── Events
│   │   ├── Hero
│   │   ├── Navbar
│   │   ├── Reusables
│   │   └── Team
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── Home
│   └── variables.css
└── vite.config.js
```

The public/data directory contains various JSON files for adding events, volunteers, and alumni.

## 🛠️ Contribution and Local Development

To contribute to this project or run it locally, follow these instructions:

### Installation

1. Navigate to the project's root directory using your terminal.

2. Run the following command to install the necessary dependencies:

   ```bash
   pnpm install
   ```

### Local Development

1. After installing the dependencies, start the local development server by running:

   ```bash
   pnpm dev
   ```

   This will launch the server, and you can access the site at [`localhost:5173`](https://localhost:5173) in your browser.

2. Make your desired changes to the project files.

3. If you want to contribute, please fork the repository, create a branch for your changes, and submit a pull request.

### Questions or Discussions

Join our [Discord server](https://discord.gg/bx9EWcAAVj) for any questions, discussions, or further assistance.

## Credit

This is based off of the lovely [ALiAS Lucknow](https://lucknow.asetalias.in/).
