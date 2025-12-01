# Jaboo - Ride-Hailing Landing Page

A modern, single-page marketing landing page for Jaboo, an on-demand ride-hailing app for Bangladesh.

## Features

- 🚀 **Next.js 14** with App Router and TypeScript
- 🎨 **Tailwind CSS** for styling
- 🧩 **ShadCN UI** components
- 📱 **Mobile-first** responsive design
- ✨ **Smooth scrolling** navigation
- 🎯 **Single-page layout** with all sections

## Sections

1. **Sticky Navigation** - Smooth scroll to sections
2. **Hero Section** - Bold headline with CTAs
3. **Features** - Key value propositions
4. **How It Works** - 4-step process
5. **Ride Options** - Bike, Car, Microbus, CNG
6. **Safety** - Safety features and trust indicators
7. **FAQ** - Accordion-style questions
8. **Download** - App store links
9. **Footer** - Quick links and company info

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **ShadCN UI** - Component library
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives

## Customization

### Colors

Primary color (green) is defined in `app/globals.css`:
```css
--primary: 142 71% 45%;
```

You can modify this to change the brand color throughout the site.

### Content

All content is in `app/page.tsx`. Edit the sections to update text, features, and other content.

## License

MIT

