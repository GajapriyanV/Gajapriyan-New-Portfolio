# Gajapriyan Portfolio 2026

A modern, dark-themed developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark Futuristic UI** - Glassmorphism cards with neon glow borders
- ✨ **Smooth Animations** - Framer Motion transitions on hover, load, and scroll
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🎯 **Component-Based** - Clean, maintainable code structure
- ⚡ **Performance Optimized** - Built with Next.js 14 App Router

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

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
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── ProfileCard.tsx
│   ├── LocalTimeWidget.tsx
│   ├── SocialLinks.tsx
│   ├── FavoriteTools.tsx
│   ├── ProjectsGrid.tsx
│   ├── ContactCard.tsx
│   ├── ExperiencePanel.tsx
│   ├── Goals.tsx
│   ├── AchievementsMetrics.tsx
│   ├── SkillsPanel.tsx
│   └── Certificates.tsx
└── ...
```

## Customization

All components are fully customizable. Update the data in each component file to match your information:

- **ProfileCard**: Update name, avatar, and bio
- **SocialLinks**: Update social media links
- **ProjectsGrid**: Add your project images and links
- **ExperiencePanel**: Update work experience
- **SkillsPanel**: Update your skills
- **AchievementsMetrics**: Update your achievements
- **Certificates**: Update certificates

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
