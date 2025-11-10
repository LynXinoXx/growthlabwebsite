# Growth Lab Website

A modern, sleek website for Growth Lab - Film Videos & Paid Ads agency serving Montreal businesses.

## Features

- 🎨 Modern, futuristic design with blue color scheme
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 and React
- 💅 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 🎯 Service showcase (Video Production & Paid Ads)
- 📊 Results and stats sections
- 📝 Contact form for lead generation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

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

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
growthlabwebsite/
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main landing page
├── public/
│   └── logo.png         # Growth Lab logo
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Colors
The main blue color palette can be customized in `tailwind.config.js` under the `growth-blue` color scale.

### Content
All content can be edited directly in `app/page.tsx`.

### Contact Information
Update the email and phone number in the contact section of `app/page.tsx`.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React** - UI library

## License

© 2025 Growth Lab. All rights reserved.

