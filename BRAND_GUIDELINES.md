# AVIXR Brand Guidelines

(Based on `brand-guidelines` skill format)

## Overview

This document defines the official visual identity for AVIXR Technologies. Use these guidelines to maintain consistency across all digital artifacts.

**Keywords**: luxury, minimal, saas, clean, organic, sophisticated

## Brand Guidelines

### Colors

**Primary Colors:**

- **Luxury White**: `#ffffff` - Main background
- **Sand**: `#f5f5f5` - Secondary background
- **Charcoal**: `#1a1a1a` - Primary Text

**Accent Colors:**

- **Gold**: `#d4af37` - Interactive elements, highlights
- **Mist**: `rgba(26, 26, 26, 0.05)` - Subtle borders

### Typography

- **Display**: Syne (Bold/ExtraBold) - Used for Headlines H1-H3
- **Body**: Manrope (Light/Regular/Medium) - Used for paragraphs and UI text
- **Button/Nav**: Manrope (Bold/Uppercase/Tracking-Widest)

### Visual Elements

- **Corner Radius**: 0px (Sharp, crisp edges) or full pill shape (Buttons/Nav). No intermediate rounded corners.
- **Shadows**: Soft, diffuse shadows (`shadow-xl`) only on floating elements.
- **Borders**: Razor thin (`1px`), low opacity (`border-charcoal/5`).
- **Motion**: Slow, fluid transitions (700ms+ ease-out). No jerky/fast movements.

## Technical Implementation

### Tailwind Configuration

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      display: ['Syne', 'sans-serif'],
    },
    colors: {
      charcoal: '#1a1a1a',
      sand: '#f5f5f5',
      'accent-gold': '#d4af37',
    }
  }
}

```
