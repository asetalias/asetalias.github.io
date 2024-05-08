# ALiAS Website Source

The ALiAS website is undergoing a rewrite using [shadcn/ui](https://ui.shadcn.com/). Meanwhile, this website serves as a temporary solution to maintain [asetalias.in](https://asetalias.in).

## Project Overview

Within this project, you'll find the following folders and files:

```kotlin
.
├── public
│   ├── assets
│   │   └── images
│   │       └── alumni
│   │       └── communities
│   │       └── members
│   │       └── posters
│   │   └── ...
│   └── data
│       ├── about.json
│       ├── alumni.json
│       ├── events.json
│       ├── volunteers.json
│       └── socials.json
```

1. `about.json` contains data related to the about section, like why and what ALiAS is and how ALiAS reaches its goals.

1. `alumni.json` stores:

   - PFP (Profile Picture) image path, which is stored in `assets/images/alumni`.
   - First name and last name of alumni.
   - Latest designation(s) of alumni.
   - Social links, namely Linkedin and Github.

1. `events.json` stores:

   - Poster image path, which is stored in `assets/images/events`.
   - Title, date, time, and venue of the event.
   - Description: a short description of the event.

1. `volunteers.json` stores:
   - PFP (Profile Picture) image path, which is stored in `assets/images/volunteers`.
   - Name of the volunteer.
   - Role of the volunteer: Faculty coordinator, Volunteer, Supporter (volunteers who are not from Amity University).
   - Social links, namely Linkedin and Github.

## Contribution and Local Development

To contribute to this project or run it locally, follow these instructions:

### Installation

> [!IMPORTANT]
> This project uses bun for package management and runtime. So please install it from [here](https://bun.sh/).

1. Fork this [repository](https://github.com/asetalias/asetalias.github.io/fork).
1. Clone your fork and navigate to the project's root directory.

   ```shell
   git clone https://github.com/<your_github_username>/asetalias.github.io.git
   cd asetalias.github.io
   ```

1. Install necessary dependencies:

   ```bash
   bun install
   ```

### Local Development

1. After installing the dependencies, start the local development server by running:

   ```bash
   bun dev
   ```

   This will launch the server, and you can access the site at [`localhost:5173`](https://localhost:5173) in your browser.

1. Make your desired changes to the project files.

1. Check for formatting errors.

   ```shell
   bun check
   ```

1. Format the codebase

   ```shell
   bun format
   ```

> [!TIP]
> Formatting is automatically done through git hooks ([husky](https://github.com/typicode/husky), [lint-staged](https://github.com/lint-staged/lint-staged)).

### Questions or Discussions

Join our [Discord server](https://discord.gg/bx9EWcAAVj) for any questions, discussions, or further assistance.

## Credits

This is based on the lovely [ALiAS Lucknow](https://lucknow.asetalias.in/).
