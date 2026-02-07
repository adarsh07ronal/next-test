🎬 Movie Browsing App (SAMANSA API)

This project is a movie browsing web application built with Next.js App Router and GraphQL, using the SAMANSA public API.

The goal of the project is to provide:

A top page showing curated movie categories and thumbnails

A category detail page listing movies per category

A movie detail page with comments and pagination

The implementation focuses on correctness, clarity, maintainability, and extensibility, aligned with the assignment requirements.

🚀 Tech Stack

Next.js (App Router)

TypeScript

GraphQL

graphql-request

Tailwind CSS

next/font (Geist font)


📁 Project Structure
app/
├─ layout.tsx                # Global layout (fonts, styles, providers)
├─ page.tsx                  # Top page (home screen)
├─ loading.tsx               # Route-level loading UI (home)
├─ category/
│  └─ [categoryId]/
│     ├─ page.tsx            # Category detail page
│     └─ loading.tsx         # Category skeleton UI
├─ video/
│  └─ [videoId]/
│     ├─ page.tsx            # Video detail page
│     └─ loading.tsx         # Video skeleton UI
├─ providers.tsx             # App-wide providers

components/
├─ VideoThumbnail.tsx        # Movie thumbnail card
├─ VideoComments.tsx         # Comment list (client component)
├─ SkeletonThumbnail.tsx     # Thumbnail skeleton
├─ CommentsSkeleton.tsx      # Comment skeleton

lib/
├─ graphql/
│  ├─ client.ts              # GraphQL client (graphql-request)
│  └─ query/
│     ├─ getHomeScreens.ts
│     ├─ getCategory.ts
│     ├─ getOriginalVideo.ts
│     └─ getVideoComments.ts

public/
├─ avatar-placeholder.svg    # Fallback avatar image


🖥 Pages Overview
1️⃣ Top Page (/)

Displays curated movie categories

Each category shows a row of movie thumbnails

Category title is clickable → navigates to category detail page

Movie thumbnails are clickable → navigate to movie detail page

GraphQL Query

getHomeScreens

Design Note

The home screen represents a curated snapshot, similar to streaming services

Pagination is intentionally omitted for clarity and UX consistency

2️⃣ Category Detail Page (/category/:categoryId)

Displays all movies belonging to a category

Shows category name and movie thumbnails

Clicking a movie navigates to the movie detail page

Uses route-level loading skeletons for better UX

GraphQL Query

getCategory

3️⃣ Movie Detail Page (/video/:videoId)

Displays:

Movie title

Description

Like count

Comment section in a right sidebar

GraphQL Queries

getOriginalVideo

getVideoComments


💬 Comments & Pagination

Comments use cursor-based pagination (first, after)

The first page of comments is fetched on the server

Additional comments are fetched on the client using a “Load more” button

This provides:

Fast initial render

SEO-friendly content

Interactive pagination without full page reloads

Implementation Details

VideoPage fetches initial comment data (Server Component)

VideoComments manages pagination state (Client Component)

User avatars are displayed when available

A fallback placeholder image is used when avatar URLs are missing

⏳ Loading & Skeleton UI

Route-level loading.tsx files are used for:

Home page

Category page

Video page

Skeleton components provide visual feedback during data fetching

Improves perceived performance and user experience


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

Global concerns (fonts, styles, providers) are handled in app/layout.tsx

Page-specific UI and data fetching are handled in each page.tsx

Nested layouts were avoided to prevent unnecessary complexity

✅ Use of next/font (Geist)

Geist is loaded globally via next/font

Fonts are automatically optimized and applied across all pages

No manual font loading or CSS configuration is required

✅ GraphQL Usage

All queries provided in the assignment are respected

.graphql files are kept as reference/spec definitions

Runtime execution uses graphql-request for simplicity

No additional build tooling or code generation was introduced

✅ Server vs Client Component Strategy

Server Components are used for:

Page-level data fetching

Initial render performance

Client Components are used for:

Interactive features (comment pagination)

Stateful UI logic

This separation improves performance and keeps responsibilities clear.

✅ Pagination Decisions

Home screen does not use pagination by design (curated snapshot)

Pagination is applied where it provides real UX value (comments)

Category pagination can be added easily if requirements change

✅ Error Handling / Logging

Explicit error handling and logging were intentionally omitted

The app relies on Next.js built-in error handling

In a production system, the following would be added:

Route-level error boundaries

Centralized logging

Monitoring and alerting

✅ Practical Improvements (実践的な工夫)

Server + client split for comments to balance performance and interactivity

Skeleton UI for better perceived performance

Cursor-based pagination aligned with API design

Architecture allows future optimizations without refactoring


🌱 Possible Improvements

Lazy-loading movie lists per category on the top page

Pagination or infinite scroll for category pages

Interactive like button

Route-level error boundaries

SEO metadata per page

Caching strategies (ISR / revalidation)