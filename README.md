# SEO Service Landing Page

A modern, interactive landing page for SEO services built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design**
- Stunning gradient backgrounds
- Smooth animations and transitions
- Interactive hover effects
- Responsive design for all devices

🎨 **Sections Included**
- Hero section with animated background
- Services showcase with interactive cards
- Animated statistics counter
- Pricing plans with hover effects
- Client testimonials
- FAQ section with smooth accordions
- Call-to-action section
- Comprehensive footer

🚀 **Technologies**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

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

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Colors
Edit the gradient colors in `tailwind.config.ts` to match your brand.

### Content
Update the text, pricing, and testimonials in the respective component files.

### Animations
Adjust animation timings and effects in individual components using Framer Motion props.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this for your projects!
