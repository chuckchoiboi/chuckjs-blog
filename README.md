# ChuckJS (Blog App)

[App Link](https://chuckjs-blog.vercel.app)

This is a blog application built with React, Next.js, GraphQL (Hygraph), Tailwind, and Sass. It allows users to read and interact with various blog posts. The application consists of three main pages: Home, Post Detail, and Category.

## Pages

### Home Page

The Home page serves as the main landing page for the blog app. It features the following sections:

-   **Featured Posts**: This section highlights selected blog posts that are deemed noteworthy or important.
-   **Category Sections**: Each category has its own section displaying four posts associated with that category.
-   **All Posts Carousel**: A carousel showcasing all available blog posts.

### Post Detail Page

The Post Detail page displays the complete content of a specific blog post. It includes the following information:

-   **Featured Image**: An eye-catching image representing the blog post.
-   **Title**: The title of the blog post.
-   **Content**: The main body of the blog post.
-   **Creation Date**: The date the blog post was created.
-   **Author Name**: The name of the author, along with their avatar and additional details.
-   **Comments**: Users can leave comments at the bottom of the blog post. These comments are submitted via a GraphQL post request. The author of the blog post has the option to accept or decline comments, and only accepted comments will be displayed.

The left side of the blog post contains two sidebars:

-   **Related Posts**: A component that shows other blog posts sharing the same tag, excluding the current post.
-   **Categories Sidebar**: A sidebar displaying a list of categories found in the blog. Clicking on a category links to the corresponding category page.

### Category Page

The Category page displays blog posts that belong to a specified category.

## Tech Stack

The blog app is built using the following technologies and frameworks:

-   **React**: A JavaScript library for building user interfaces.
-   **Next.js**: A React framework for server-side rendering and static site generation.
-   **GraphQL (Hygraph)**: A query language for APIs, used for fetching and managing data.
-   **Tailwind**: A utility-first CSS framework for rapid UI development.
-   **Sass**: A CSS preprocessor that enhances the capabilities of CSS.

## Getting Started

To run the blog app locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up the environment variables to connect to your Hygraph (Formerly known as Graph CMS):

    - Create a .env.local file in the root directory of the project.
    - Add the following environment variables to the .env.local file:
        - NEXT_PUBLIC_GRAPHCMS_ENDPOINT=`your-graphql-endpoint`
        - GRAPHCMS_TOKEN=`your-graphql-token`

4. Start the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:3000` to view the app.

Make sure you have Node.js and npm installed on your machine before running the above commands.
