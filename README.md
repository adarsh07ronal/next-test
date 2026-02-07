🎬 Movie Browsing App (SAMANSA API)

This project is a movie browsing web application built with Next.js App Router and GraphQL, using the SAMANSA public API.

The goal of the project is to provide:

A top page showing movie categories and thumbnails

A category detail page

A movie detail page with comments

The implementation focuses on correctness, clarity, and maintainability, aligned with the assignment requirements.


🚀 Tech Stack

Next.js (App Router)

TypeScript

GraphQL

graphql-request

Tailwind CSS

next/font (Geist font)

app/
├─ layout.tsx                 # Global layout (fonts, styles)
├─ page.tsx                   # Top page
├─ category/
│  └─ [categoryId]/
│     └─ page.tsx             # Category detail page
├─ video/
│  └─ [videoId]/
│     └─ page.tsx             # Movie detail page
│
components/
├─ VideoThumbnail.tsx         # Movie thumbnail UI
├─ VideoComments.tsx          # Comment list (with pagination support)
│
lib/
├─ graphql/
│  ├─ client.ts               # GraphQL client
│  └─ query/
│     ├─ getHomeScreens.ts
│     ├─ getCategory.ts
│     ├─ getOriginalVideo.ts
│     └─ getVideoComments.ts
│
public/
├─ avatar-placeholder.svg     # Fallback avatar image


🖥 Pages Overview
1️⃣ Top Page (/)

Displays movie categories

Each category shows a row of movie thumbnails

Category title is clickable → navigates to category detail page

Movie thumbnails are clickable → navigate to movie detail page

GraphQL Query

getHomeScreens

2️⃣ Category Detail Page (/category/:categoryId)

Displays all movies belonging to a category

Shows category name and movie thumbnails

Clicking a movie navigates to the movie detail page

GraphQL Query

getCategory

3️⃣ Movie Detail Page (/video/:videoId)

Displays:

Movie title

Description

Like count

Shows comments in a right sidebar

GraphQL Queries

getOriginalVideo

getVideoComments

💬 Comments & Pagination

Comments are fetched with pagination parameters (first, after)

The initial page fetches the first set of comments

Pagination is supported by the API and can be extended easily

User avatars are displayed when available

A fallback placeholder image is used when avatar URLs are missing

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone <your-forked-repo-url>
cd <project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


Open:

http://localhost:3000

🧠 Design Decisions & Notes for Reviewers
✅ Layout & Page Separation

Global concerns (fonts, styles) are handled in app/layout.tsx

Page-specific UI and data fetching are handled in page.tsx

No unnecessary nested layouts were added to avoid over-engineering

✅ Use of next/font (Geist)

Geist is loaded globally via next/font

Fonts are automatically optimized and applied to all pages

No additional configuration is required

✅ GraphQL Usage

All queries provided in the assignment are respected

.graphql files are kept as reference/spec definitions

Runtime execution uses graphql-request for simplicity

No additional loaders or build configuration were introduced

✅ Pagination Decisions

The top page uses getHomeScreens, which represents a curated home snapshot and does not require pagination

Pagination is applied where it is meaningful (comments)

This matches typical real-world UX patterns (e.g., streaming service home pages)

✅ Error Handling / Logging

Explicit error handling and logging were intentionally not added

The application relies on Next.js’s built-in error handling

For a production system, error boundaries, logging, and monitoring would be added as a next step

✅ Practical Improvements (実践的な工夫)

The assignment suggests possible optimizations such as lazy-loading category movies

Since getHomeScreens is designed as a home snapshot and data volume is reasonable, a single-request approach was chosen for clarity

The architecture allows easy optimization if performance requirements change

🌱 Possible Improvements

Lazy-loading movie lists per category on the top page

Pagination or infinite scroll for category pages

Skeleton loading UI

Like button interaction

Route-level error boundaries

SEO metadata per page