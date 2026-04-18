# Rishav Explains Academy

Welcome to the **Rishav Explains Academy** website! This is a modern, single-page web application built to serve as a platform for digital education in Nepali. 

It features a premium, raw, editorial design aesthetic with smooth animations and fully responsive layouts.

## 🚀 Tech Stack

This project is built with the following technologies:

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Fonts (Google Fonts):** 
  - `Syne` (Headings)
  - `Noto Sans Devanagari` (Nepali Text)
  - `DM Sans` (Body Text)

## 🎨 Design System

- **Background:** `#0a0a0a`
- **Surface:** `#111111`
- **Card:** `#161616`
- **Primary Accent:** `#ff3c3c` (Red)
- **Secondary Accent:** `#00c9a7` (Teal)
- **Text:** `#f0ece4`
- **Muted Text:** `#888888`

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Ensure you have Node.js installed. We recommend using `npm` as your package manager.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## 📂 Project Structure

- `app/layout.tsx`: Root layout including metadata and Google Fonts configuration.
- `app/page.tsx`: The main landing page comprising all isolated sections (Hero, Platform Intro, Courses, About, Footer) and animations.
- `app/globals.css`: Global CSS containing the entire design system, custom utilities (like glowing text, gradients, and animated dots), and standard Tailwind imports.
- `tailwind.config.ts`: Tailwind configuration loaded with custom fonts, colors, and keyframe animations.

## 💡 Key Features

- **Dynamic Animations:** Staggered load-ins, scroll-triggered reveal elements, hover animations, and subtle floating background effects via Framer Motion & CSS Keyframes.
- **Glassmorphism & Blurs:** Modern sticky navigations and locked-course cards use backdrop blurs for a premium feel.
- **Bilingual Typgraphy Support:** Designed to handle both English (`DM Sans`, `Syne`) and Nepali (`Noto Sans Devanagari`) effortlessly.
- **Fully Responsive:** Perfectly optimized for mobile, tablet, and desktop screens with an integrated hamburger menu on mobile.

## 📝 License

© 2025 Rishav Explains Academy. All rights reserved. Built with ❤️ for Nepal.
