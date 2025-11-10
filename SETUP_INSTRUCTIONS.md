# Setup Instructions for Growth Lab Website

## 📋 Quick Start Steps

### 1. Add Your Logo
**IMPORTANT:** Save your Growth Lab logo as `logo.png` in the `public/` directory.

```bash
# Your logo should be placed at:
# /Users/tomtom/Repos/growthlabwebsite/public/logo.png
```

The logo is referenced in the website and needs to be in PNG format. Recommended size: 500x500px or similar square aspect ratio.

### 2. Install Dependencies

```bash
cd /Users/tomtom/Repos/growthlabwebsite
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Then open your browser to [http://localhost:3000](http://localhost:3000)

### 4. Customize Content (Optional)

You can customize the following in `app/page.tsx`:

- **Contact Information**: Update email and phone number in the contact section
- **Stats/Numbers**: Modify the statistics shown (500+ videos, 3M+ views, etc.)
- **Services Details**: Edit the service descriptions and feature lists
- **Company Information**: Update any company-specific details

### 5. Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## 🎨 Design Features Included

✅ Modern, futuristic blue design  
✅ Animated hero section with floating elements  
✅ Service showcase (Film Videos & Paid Ads)  
✅ Process/workflow section  
✅ Results & statistics display  
✅ Contact form for lead generation  
✅ Fully responsive (mobile, tablet, desktop)  
✅ Smooth animations with Framer Motion  
✅ Glass-morphism effects  
✅ Gradient text effects  

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🚀 Deployment Options

You can deploy this website to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting service**

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## 📞 Support

If you need any modifications or have questions about the website, refer to the README.md file for more details.

