# 🏗️ Shree Sai Construction — Website

**श्री साई कंस्ट्रक्शन** | Indore, Madhya Pradesh

Official marketing website for Shree Sai Construction — a premium home construction company in Indore, M.P. offering fixed per sq.ft packages.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Frontend framework + build tool |
| TailwindCSS v3 | Styling |
| Framer Motion | Scroll animations |
| react-i18next | English / Hindi language toggle |
| React Icons | Icon library |
| Vercel | Deployment |

---

## 📁 Project Structure

```
Sai_construction_web/
├── index.html                  # SEO meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                 # Vercel SPA config
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── i18n.js                 # Language setup
    ├── index.css               # Tailwind + custom styles
    ├── locales/
    │   ├── en.json             # English translations
    │   └── hi.json             # Hindi translations
    └── components/
        ├── Navbar.jsx          # Sticky navbar + lang toggle
        ├── Hero.jsx            # Hero section + stats
        ├── Packages.jsx        # 3 pricing cards
        ├── Comparison.jsx      # 7-tab comparison table
        ├── Materials.jsx       # Construction materials
        ├── WhyUs.jsx           # 6 USP cards
        ├── Gallery.jsx         # Project photo gallery
        ├── Contact.jsx         # Contact + WhatsApp CTA
        └── Footer.jsx          # Footer
```

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Opens at `http://localhost:5173`

### 3. Production build
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 🌐 Deployment (Vercel)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**

`vercel.json` already handles SPA routing — no extra config needed.

---

## 🏠 Packages

| Package | Price | Concrete | Floor Height |
|---|---|---|---|
| Happiness | ₹1,499/sqft | M-20 | 10'6" |
| Premium | ₹1,599/sqft | M-20 | 11' |
| Luxury | ₹1,699/sqft | M-25 | 11' |

---

## 🌍 Language Support

- **English** (default)
- **Hindi (हिंदी)**

Toggle button in navbar — choice saved in `localStorage`.  
To change default language, edit `src/i18n.js`:
```js
lng: localStorage.getItem('ssc_lang') || 'en',  // change 'en' to 'hi'
```

---

## 📞 Contact Info

| | |
|---|---|
| Email | sajansmardana@gmail.com |
| Address | Patel Market, Mirzapur Road, Indore (M.P.) |

---

## 📝 Adding Real Gallery Photos

Replace placeholders in `src/components/Gallery.jsx`:
1. Add images to `public/gallery/` folder
2. Replace the placeholder `div` with an `<img>` tag
```jsx
<img src="/gallery/project1.jpg" alt="Project 1" className="w-full h-full object-cover rounded-2xl" />
```

---

## ✅ Build Status

```
✓ 426 modules transformed
✓ Built in ~5.5s
✓ Zero errors
```

---

*© 2025 Shree Sai Construction, Indore (M.P.) — All rights reserved.*
