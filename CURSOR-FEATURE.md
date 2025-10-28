# 🎯 Interactive Cursor Feature

## ✨ What's New

Your Dance Eko 2025 website now has an **interactive cursor-following gradient glow**!

### 🌟 Features

1. **Cursor-Following Glow** (Desktop only)
   - Large gradient orb follows your mouse
   - Smooth spring physics for natural movement
   - Layered effect with 2 gradient orbs
   - Mix blend mode for beautiful color interactions

2. **Custom Cursor** (Desktop only)
   - Clean white ring and dot
   - Mix-blend-mode for visibility on any background
   - Hidden on mobile (normal cursor shown)

3. **Global Cursor Glow**
   - Works across entire site
   - Purple/Pink/Orange gradient
   - Adds interactive element to every page

### 🎨 How It Works

**In Hero Section:**
- **2 cursor-following orbs** in the hero background
  - Large orb (700px): Blue→Purple→Pink
  - Pulsing orb (400px): Cyan→Blue→Purple with scale animation
  
- **3 ambient orbs** (always animating)
  - Top-left: Cyan→Blue (drifting pattern)
  - Top-right: Purple→Pink (drifting pattern)
  - Bottom-left: Orange→Yellow (drifting pattern)

**Globally:**
- **Cursor trail effect** follows mouse across all pages
- **Custom cursor ring** (white, mix-blend-mode)

### 💡 Technical Details

```typescript
// Spring physics for smooth following
const springConfig = { damping: 25, stiffness: 150 };

// Motion values track cursor position
const cursorX = useMotionValue(0);
const cursorY = useMotionValue(0);

// Spring creates smooth lag effect
const cursorXSpring = useSpring(cursorX, springConfig);
const cursorYSpring = useSpring(cursorY, springConfig);
```

### 🎯 Visual Effects

1. **Layered Gradients**
   - Multiple orbs blend together
   - Creates dynamic color mixing
   - Changes as you move mouse

2. **Mix Blend Mode**
   - `mix-blend-screen` for glow effect
   - `mix-blend-difference` for cursor visibility

3. **Smooth Physics**
   - Spring animation creates natural lag
   - Feels fluid and responsive
   - 60fps performance

### 📱 Responsive Behavior

**Desktop (768px+):**
- ✅ Custom cursor visible
- ✅ Cursor glow follows mouse
- ✅ All interactive effects enabled

**Mobile (<768px):**
- ✅ Normal cursor (custom cursor hidden)
- ✅ No cursor glow (performance optimization)
- ✅ All other animations work perfectly

### 🎪 Festival Atmosphere

The cursor effect adds:
- **Interactivity** - Website feels alive
- **Playfulness** - Fun to move mouse around
- **Immersion** - Like you're in the festival lights
- **Engagement** - Users naturally explore more

### 🔧 Customization

Want to change the cursor colors? Edit `/src/components/ui/cursor-glow.tsx`:

```tsx
// Change gradient colors
from-purple-500 via-pink-500 to-orange-500

// Change opacity
opacity-30  // (0-100)

// Change size
w-[400px] h-[400px]

// Change blur amount
blur-3xl  // (sm, md, lg, xl, 2xl, 3xl)
```

### ⚡ Performance

- Uses GPU-accelerated transforms
- No layout recalculation
- Pointer-events: none (doesn't block clicks)
- Debounced on mobile for battery life

## 🎉 Result

Move your mouse around the hero section and watch the gradient follow you! It creates a magical, interactive festival atmosphere perfect for Dance Eko 2025.

Try it now:
```bash
pnpm dev
```

Then move your mouse across the screen! ✨
