# HRnet

> [!CAUTION]
> This repository hosts a project completed as part of my [OpenClassrooms](https://openclassrooms.com) training program. Having successfully completed the program, the project has now been archived and will no longer be actively maintained. Please be aware that while the repository will remain accessible for reference, some links or features may no longer function as intended.

![Preview](./.github/assets/preview.png)

## Table of Contents

- [HRnet](#hrnet)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
    - [Project Goals](#project-goals)
    - [Improvements](#improvements)
    - [Useful Links](#useful-links)
  - [Prerequisites](#prerequisites)
  - [Technology Stack](#technology-stack)
    - [Primary Stack](#primary-stack)
    - [Code Quality](#code-quality)
  - [Local Setup](#local-setup)
    - [Frontend](#frontend)
  - [License](#license)

## Project Overview

For this project, I was challenged to transform an HR management application with legacy code into a React application. The original application was developed using jQuery. You can find the original repository [here](https://github.com/OpenClassrooms-Student-Center/P12_Front-end).

### Project Goals

- [x] Convert the application to React.
- [x] Migrate one of the used plugins to React (I created a [React Dialog](https://github.com/alexperronnet/oc-14-react-dialog)).

### Improvements

As this is the concluding project of my training program, I aimed to surpass the basic project requirements. I developed this project as a full-stack application using [Next.js](https://nextjs.org/) and [Supabase](https://supabase.io/). My ambition was to craft a maintainable, accessible, and scalable application. To achieve this, I employed [TypeScript](https://www.typescriptlang.org/) for type safety.

### Useful Links

- [Live Demo](https://oc-14-hrnet-admin.vercel.app/)
- [Original Repository](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)
- [Custom React Dialog](https://github.com/alexperronnet/oc-14-react-dialog)

To access the application, you can use the following credentials:

- Email: `hr@wealth-health.com`
- Password: `Password123`

## Prerequisites

- [Node.js](https://nodejs.org/en/)

> If using a node version manager like [FNM](https://github.com/Schniz/fnm) or [NVM](https://github.com/nvm-sh/nvm), run `fnm use` or `nvm use` to switch to the recommended node version.

## Technology Stack

Here's an overview of the main technologies I've used in this project. For detailed dependencies, check the [package.json](./package.json) file.

### Primary Stack

| Technology                                           | Purpose                                       |
| ---------------------------------------------------- | --------------------------------------------- |
| [Next.js](https://nextjs.org/)                       | Server-side rendering with the new app router |
| [Supabase](https://supabase.io/)                     | Database and authentication                   |
| [TypeScript](https://www.typescriptlang.org/)        | Type safety                                   |
| [Tailwind CSS](https://tailwindcss.com/)             | Styling                                       |
| [Radix](https://www.radix-ui.com/primitives)         | Building accessible components                |
| [TanStack Table](https://tanstack.com/table/v8)      | Headless table component for data display     |
| [React Day Picker](https://react-day-picker.js.org/) | Date picker                                   |
| [date-fns](https://date-fns.org/)                    | Date formatting                               |
| [React Hook Form](https://react-hook-form.com/)      | Form handling                                 |
| [zod](https://zod.dev/)                              | Form validation                               |

### Code Quality

| Tool                                                 | Purpose                           |
| ---------------------------------------------------- | --------------------------------- |
| [ESLint](https://eslint.org/)                        | Linting JavaScript and TypeScript |
| [Prettier](https://prettier.io/)                     | Code formatting                   |
| [Husky](https://typicode.github.io/husky/#/)         | Running scripts on Git hooks      |
| [lint-staged](https://github.com/okonet/lint-staged) | Running scripts on staged files   |
| [Commitlint](https://commitlint.js.org/#/)           | Commit message linting            |

## Local Setup

### Frontend

> This project uses [PNPM](https://pnpm.io/) as its package manager. However, [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) can be used as alternatives.

1. Clone the repository:

   ```bash
   git clone https://github.com/alexperronnet/oc-14-hrnet-admin.git
   ```

2. Navigate to the project directory:

   ```bash
   cd oc-14-hrnet-admin
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
    pnpm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## License

This is an OpenClassrooms project. While the code is freely reusable, the assets are not mine and thus not available for reuse. If you're an OpenClassrooms student, you may use my work as inspiration, but copying and pasting parts or whole sections is discouraged.
