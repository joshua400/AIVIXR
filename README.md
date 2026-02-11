# Avixr Landing Page

Landing page built to match Figma design exactly.

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## 📐 Figma Design Integration

### ⚠️ Important: We Need the Standard Figma File URL

The Figma Make URL you provided (`figma.com/make/...`) cannot be accessed via the API. We need the **standard file URL**.

### How to Get the Standard URL:

1. **Click your Figma Make link** to open it
2. **Look for "Open in Figma" button** at the top
3. **Click it** - this opens the file in Figma
4. **Copy the URL** from your browser's address bar
5. **The URL should look like:**
   - `https://www.figma.com/file/XXXXXXXXXXXXXXX/File-Name`
   - OR `https://www.figma.com/design/XXXXXXXXXXXXXXX/File-Name`

📖 **See `EXTRACT_FIGMA_URL_STEPS.md` for detailed step-by-step instructions.**

### Once We Have the File URL:

The design will be automatically updated to match Figma exactly:
- ✅ Exact colors and color palette
- ✅ Exact typography (fonts, sizes, weights, line heights)
- ✅ Exact spacing and padding values
- ✅ Exact layout and positioning
- ✅ Exact border radius, shadows, and effects
- ✅ All images, icons, and assets downloaded and integrated

## 📁 Project Structure

```
avixr/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
└── lib/
    └── figma-config.ts   # Figma design tokens (auto-updated)
```

## 🎨 Current Status

✅ Project structure created  
✅ All components scaffolded  
✅ Tailwind CSS configured  
⏳ Waiting for Figma file URL to fetch design specifications  
⏳ Ready to download and integrate assets

The landing page is **ready and waiting** - just need the Figma file URL to make it match exactly!

