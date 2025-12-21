# Graphic Design Portfolio

A personal portfolio website showcasing creative graphic design work, built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

## Project Overview

This website serves as a digital gallery for various graphic design projects, organized into specific categories. It allows visitors to explore different facets of design work, view certifications, and get in touch.

### Key Sections

-   **Home**: Landing page with an overview of the portfolio.
-   **About**: Information about the designer.
-   **Certification**: Display of professional certifications.
-   **Portfolio**: The core gallery, subdivided into:
    -   **Brochures**: Collection of brochure designs.
    -   **Illustrations**: Digital and hand-drawn illustrations.
    -   **Logos**: Brand identity and logo designs.
    -   **Posters**: Various promotional and artistic posters.
    -   **Visiting Cards**: Business card designs.
-   **Contact**: Means to reach out for inquiries or collaborations.

## Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Library**: React 19
-   **Styling**: Tailwind CSS 4
-   **Language**: TypeScript

## Getting Started

To run this project locally:

1.  Clone the repository.
2.  Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3.  Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project uses the Next.js App Router structure:

```text
app/
├── about/           # About page
├── certification/   # Certifications page
├── contact/         # Contact page
├── portfolio/       # Main portfolio hub
│   ├── brochures/
│   ├── illustrations/
│   ├── logos/
│   ├── posters/
│   └── visiting-cards/
├── components/      # Reusable UI components (Navbar, Footer)
└── page.tsx         # Home page
```

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.