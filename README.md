<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->







# Student Dashboard

## Overview

Student Dashboard is a learning management platform built with Next.js and Supabase. It allows students to browse courses, track lesson completion, watch video lessons, and monitor learning progress through analytics.

## Tech Stack

* Next.js 15 (App Router)
* React
* TypeScript
* Supabase

  * Database
  * Storage
* Tailwind CSS
* Lucide React Icons
* Vercel

---

## Architecture

The application follows the Next.js App Router architecture and is organized around route-based pages.

### Main Features

#### Courses Page

* Fetches course progress from Supabase.
* Calculates completion percentages dynamically.
* Displays available courses and learning statistics.
* Uses server-side data fetching for better performance.

#### Course Detail Pages

* Show course information, progress, lesson count, and learning statistics.
* Retrieve progress data from Supabase.
* Provide navigation to individual lessons.

#### Lesson System

* Video lessons are stored in Supabase Storage.
* Lesson pages generate public video URLs from Supabase Storage.
* Progress is automatically recorded when a lesson video finishes playing.

#### Analytics Dashboard

* Displays learning statistics such as:

  * Hours studied
  * Courses completed
  * Certificates earned
  * Learning streak
* Includes progress indicators and activity visualizations.

---

## Server and Client Component Split

A deliberate server/client component separation was used to optimize performance.

### Server Components

Most pages are implemented as Server Components.

Examples:

* Courses page
* Course detail pages
* Lesson page
* Analytics page

Responsibilities:

* Fetching data from Supabase
* Calculating progress percentages
* Generating lesson content
* Rendering initial UI

Benefits:

* Reduced client-side JavaScript
* Faster initial page load
* Improved performance and SEO

### Client Components

Interactive functionality is isolated into Client Components.

Example:

* `LessonVideo.tsx`

Responsibilities:

* Handling video playback events
* Recording lesson completion
* Triggering UI refreshes after progress updates

The component uses:

* `useRouter()`
* Client-side Supabase operations
* Browser event handlers (`onEnded`)

This keeps interactive logic on the client while data fetching remains on the server.

---

## Database Design

### courses

Stores course information.

### user_progress

Tracks lesson completion.

Fields used:

* course_id
* lesson_id
* completed
* completed_at

Progress percentages are calculated by comparing completed lessons against the total lesson count for each course.

---

## Supabase Integration

Supabase is used for:

### Database

* Course progress tracking
* Completion status storage

### Storage

* Hosting lesson videos
* Serving public lesson content

The application retrieves video URLs using Supabase Storage and updates learning progress in real time.

---

## Environment Variables

Create a `.env.local` file using the values from your Supabase project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

A sample configuration is provided in `.env.example`.

---

## Challenges Faced

### Server vs Client Boundaries

One challenge was deciding which logic should run on the server and which should run on the client.

Data fetching and progress calculations were moved to Server Components, while video-completion tracking was implemented in a Client Component because it depends on browser events.

### Progress Tracking

Ensuring accurate progress percentages required:

* Fetching completed lessons from Supabase
* Removing duplicates using JavaScript Sets
* Recalculating progress dynamically for each course

### Video-Based Completion

Progress updates are triggered only after a video finishes playing. This required integrating video events with Supabase updates and refreshing the UI afterward.

### Dynamic Lesson Loading

Lessons are loaded dynamically using query parameters and mapped to the corresponding video stored in Supabase Storage.

---

## Deployment

The application is deployed on Vercel and connected to GitHub for automatic deployments.

Any push to the main branch automatically triggers a new deployment.

