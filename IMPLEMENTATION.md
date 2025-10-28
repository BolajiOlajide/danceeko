# Dance Eko 2025 - Implementation Guide

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0047FF` - Main brand color
- **Dark Blue**: `#001A66` - Dark accents
- **Light Blue**: `#3D7FFF` - Highlights
- **Purple**: `#8B5CF6` - Gradient accents
- **Pink**: `#EC4899` - Gradient accents
- **Orange**: `#F97316` - Location section

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font weight 900 (Black)
- **Body**: Font weight 400-600

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   └── button.tsx      # Reusable button component
│   ├── sections/
│   │   ├── hero.tsx        # Landing hero section
│   │   ├── tickets.tsx     # Tickets waitlist section
│   │   ├── lineup.tsx      # Artist lineup section
│   │   ├── location.tsx    # Location reveal section
│   │   ├── festival-guide.tsx  # Festival map/guide
│   │   └── newsletter.tsx  # Email signup
│   └── layout/
│       └── footer.tsx      # Site footer
└── lib/
    ├── constants.ts        # App constants & config
    └── utils.ts            # Utility functions
```

## 🖼️ Required Assets

### Videos
Place in `/public/videos/`:
- `hero-background.mp4` - Hero section background video (1920x1080, looping)

### Images
Place in `/public/artists/`:
- `skyla-tyla.jpg` - Skyla Tyla artist image
- Additional artist images as announced

### Background Images
- Lekki Link Bridge or Eyo masquerade for Location section
- Stage photos from previous edition for Lineup section

## 🎬 Animations

### Framer Motion Features
1. **Hero Section**
   - Staggered text animations
   - Floating gradient orbs
   - Smooth scroll indicator

2. **Tickets Section**
   - Card hover effects with scale & lift
   - Blur effect on "Coming Soon" cards
   - Gradient background animation

3. **Lineup Section**
   - 3D card rotation on hover
   - Pulsing question marks for unrevealed artists
   - Staggered grid animations

4. **Location Section**
   - Floating particles
   - Glowing text effect
   - Pulsing dots

5. **Newsletter Section**
   - Gradient orbs animation
   - Form submit success animation
   - Rotating mail icon

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Add your assets**:
   - Place hero video in `/public/videos/hero-background.mp4`
   - Add artist images to `/public/artists/`

3. **Update links** in `/src/lib/constants.ts`:
   ```typescript
   export const LINKS = {
     signup: 'YOUR_SIGNUP_LINK',
     watchVideo: 'YOUR_VIDEO_LINK',
     waitlist: 'YOUR_WAITLIST_LINK',
     instagram: 'YOUR_INSTAGRAM',
     youtube: 'YOUR_YOUTUBE',
     twitter: 'YOUR_TWITTER',
     email: 'YOUR_EMAIL',
   };
   ```

4. **Run development server**:
   ```bash
   pnpm dev
   ```

5. **Build for production**:
   ```bash
   pnpm build
   ```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions

### Performance
- Next.js 15 with Turbopack
- Optimized animations with Framer Motion
- Lazy loading for images
- Code splitting

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Screen reader friendly

## 🔧 Customization

### Adding New Ticket Tiers
Edit `/src/lib/constants.ts`:
```typescript
export const TICKET_TIERS = [
  { name: 'Your Tier', status: 'Coming Soon' },
  // Add more tiers...
];
```

### Adding Revealed Artists
Edit `/src/lib/constants.ts`:
```typescript
export const LINEUP_ARTISTS = [
  { name: 'Artist Name', revealed: true, image: '/artists/image.jpg' },
  // Add more artists...
];
```

### Changing Colors
Update color scheme in component files or add to Tailwind config.

## 📱 Sections

1. **Hero** - Full-screen video background with CTAs
2. **Tickets** - Waitlist signup with tier previews
3. **Lineup** - Artist cards (revealed & coming soon)
4. **Location** - TBA announcement
5. **Festival Guide** - Map placeholder & features
6. **Newsletter** - Email capture
7. **Footer** - Navigation & social links

## 🎨 Animation Tips

- All sections use `whileInView` for scroll-triggered animations
- Smooth easing: `[0.6, 0.05, 0.01, 0.9]`
- Stagger children for sequential animations
- Use `viewport={{ once: true }}` to animate only once

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Notes

- Video should be optimized (< 10MB) for web
- Use WebP format for images where possible
- Test animations on mobile devices
- Ensure video has fallback for unsupported browsers
