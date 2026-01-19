# Web Agency — Modern Creative Studio Website

A bold, experimental web development agency website built with Next.js 15+, Tailwind CSS, and Framer Motion.

## Features

- **Experimental Navigation**: Floating navigation bar that hides/shows on scroll
- **Scroll-Driven Narrative**: Each section reveals progressively as you scroll
- **Immersive Landing**: Bold statement with animated gradients and floating orbs
- **Interactive Manifesto**: Why we exist, revealed through motion
- **Capabilities**: What we do, shown with hover effects and gradients
- **Selected Work**: Portfolio items with animated experiments
- **Visual Process**: How we work, explained through a timeline
- **Emotional CTA**: Call-to-action that feels personal, not salesy

## Tech Stack

- **Next.js 15+** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations and scroll effects)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
web-agen/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page (orchestrates all scenes)
│   └── globals.css         # Global styles
├── components/
│   ├── navigation/
│   │   └── FloatingNav.tsx # Experimental floating navigation
│   └── scenes/
│       ├── LandingScene.tsx    # Immersive landing experience
│       ├── ManifestoScene.tsx  # Why we exist
│       ├── CapabilitiesScene.tsx # What we do
│       ├── WorkScene.tsx        # Selected work
│       ├── ProcessScene.tsx     # How we work
│       └── CTAScene.tsx         # Call-to-action
└── package.json
```

## Design Philosophy

- **Bold & Minimal**: Striking visuals without clutter
- **Motion-First**: Animations reveal content progressively
- **No Traditional Layout**: No boring navbars or generic hero sections
- **Scroll-Driven**: Each section feels like a "scene" in a narrative
- **Premium Feel**: Inspired by award-winning agency websites

## Customization

All scenes are modular and can be easily customized:

- Update content in each scene component
- Modify colors in Tailwind config or component classes
- Adjust animations by tweaking Framer Motion props
- Add/remove sections by editing `app/page.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
