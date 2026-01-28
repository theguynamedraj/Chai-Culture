# Chai Culture - Coming Soon Landing Page

A premium coming soon landing page for a royal-inspired instant chai tea brand.

## 🎨 Design Choices

**Visual Direction**: I created a luxurious, royal aesthetic using rich dark browns and golds to evoke the warmth and elegance of royal Indian households. The design features ornamental corner borders, subtle animations, and a sophisticated color palette that balances tradition with modern minimalism.

**Typography**: Playfair Display for the main tagline provides editorial elegance, Cinzel adds a regal, classical touch for accents, and Cormorant Garamond ensures beautiful readability for body text. This combination creates a distinctive, premium feel that avoids generic web fonts.

**Interactivity**: Subtle parallax effects, hover animations, and a pulsing "Launching Soon" badge create engagement without overwhelming the elegant aesthetic. The floating chai leaf decorations add whimsical movement while staying thematically relevant.

## 🌐 Live Website
👉 Deployed Link:
https://chaiculturelive.vercel.app
## 📁 Project Structure

```
royal-chai-landing/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # React entry point
│   └── chai-landing.jsx   # Main landing page component
└── README.md              # This file
```

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📝 Customization

### Replace the Logo
In `chai-landing.jsx`, find the logo placeholder section and replace the emoji with your logo image:

```jsx
<div className="logo-placeholder">
  <img src="/path/to/your/logo.png" alt="Royal Chai Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
</div>
```

### Update Social Links
Replace the `#` in the social icon links with your actual social media URLs:

```jsx
<a href="https://instagram.com/yourhandle" className="social-icon" aria-label="Instagram">
```

### Email Integration
Currently, the form shows a success message. To integrate with an email service:
- Mailchimp: Add their API endpoint
- ConvertKit: Use their form embed
- Custom backend: Send POST request to your API

## 🎯 Features

✅ Fully responsive design  
✅ Mobile-optimized  
✅ Email signup form  
✅ Social media links  
✅ Smooth animations  
✅ Royal-themed aesthetics  
✅ SEO-optimized  
✅ Fast loading with Vite  

## 📦 Technologies Used

- React 18
- Vite
- Lucide React (icons)
- Custom CSS with animations
- Google Fonts (Playfair Display, Cinzel, Cormorant Garamond)
