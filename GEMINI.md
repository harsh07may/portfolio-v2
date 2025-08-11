# Project Overview

This is a portfolio website built with Next.js, Tailwind CSS, and MDX. It's designed to be a clean, fast, and lightweight template for showcasing projects and writing blog posts. The project is configured for deployment on Vercel and includes features like light/dark mode, dynamic OG image generation, and SEO optimization.

## Key Technologies

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Content:** [MDX](https://mdxjs.com/) for blog posts
*   **Deployment:** [Vercel](https://vercel.com/)
*   **Analytics:** Vercel Web Analytics and Speed Insights

# Building and Running

This project uses `pnpm` as the package manager.

*   **Install dependencies:**
    ```bash
    pnpm install
    ```
*   **Run the development server:**
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:3000`.

*   **Build for production:**
    ```bash
    pnpm build
    ```

*   **Start the production server:**
    ```bash
    pnpm start
    ```

# Development Conventions

*   **Configuration:** The main configuration file is `app/lib/config.ts`. This file contains the site's metadata, including the base URL, title, name, and social links.
*   **Blog Posts:** Blog posts are written in MDX and stored in the `content` directory. Each post should include frontmatter with the following fields: `title`, `publishedAt`, `summary`, and `tags`.
*   **Styling:** The project uses Tailwind CSS for styling. Utility classes should be used whenever possible.
*   **Components:** Reusable components are located in the `app/components` directory.
*   **Layout:** The main layout for the application is in `app/layout.tsx`.
*   **Static Assets:** Static assets like images and fonts are stored in the `public` directory.
