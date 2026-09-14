# Design System

<!-- impeccable:design-schema 1 -->

## Visual World

**Kinetic Obsidian** — Near-black charcoal ground with ember accent and electric cyan tertiary. Precision 1px hairlines, glass panels with backdrop-blur.

## Color Palette

### Surfaces
- `--color-surface`: #FAF7F2 (crema cálido)
- `--color-surface-dim`: #F5F0E8
- `--color-surface-bright`: #FFFFFF
- `--color-surface-container-lowest`: #FFFFFF
- `--color-surface-container-low`: #F5F0E8
- `--color-surface-container`: #EDE5D8
- `--color-surface-container-high`: #E0D5C4
- `--color-surface-container-highest`: #D4C5B0

### On-Surface
- `--color-on-surface`: #2D2926
- `--color-on-surface-variant`: #6B6560

### Primary
- `--color-primary`: #2B5EA7
- `--color-on-primary`: #FFFFFF
- `--color-primary-container`: #4A7CC9
- `--color-on-primary-container`: #FFFFFF

### Secondary
- `--color-secondary`: #C17849 (ember)
- `--color-on-secondary`: #FFFFFF
- `--color-secondary-container`: #D4956A
- `--color-on-secondary-container`: #FFFFFF

### Tertiary
- `--color-tertiary`: #7A9E7E
- `--color-on-tertiary`: #FFFFFF
- `--color-on-tertiary-container`: #5A7247

### Outline
- `--color-outline`: #B8A99A
- `--color-outline-variant`: #D4C5B0

### Error
- `--color-error`: #C44040
- `--color-on-error`: #FFFFFF

## Typography

### Display / Headlines
- **Font:** Plus Jakarta Sans
- **Hero:** 48px / 56px / -0.02em / 800
- **Hero Mobile:** 32px / 40px / -0.015em / 800
- **Headline LG:** 32px / 40px / -0.02em / 700
- **Headline MD:** 24px / 32px / -0.015em / 600
- **Headline SM:** 18px / 26px / -0.01em / 600

### Body
- **Font:** Inter
- **Body LG:** 18px / 28px / -0.005em / 400
- **Body MD:** 15px / 24px / 0 / 400
- **Body SM:** 14px / 22px / 0.005em / 400

### Labels
- **Font:** Plus Jakarta Sans
- **Label LG:** 14px / 20px / 0.02em / 600
- **Label SM:** 12px / 16px / 0.04em / 600

## Spacing Scale

Base unit: 4px
- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-5`: 20px
- `--space-6`: 24px
- `--space-8`: 32px
- `--space-10`: 40px
- `--space-12`: 48px
- `--space-16`: 64px
- `--space-20`: 80px

## Border Radius

- `--radius-sm`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 16px
- `--radius-xl`: 20px
- `--radius-2xl`: 24px
- `--radius-full`: 9999px

## Shadows

- `--shadow-sm`: 0 1px 2px rgba(0,0,0,0.05)
- `--shadow-md`: 0 4px 6px -1px rgba(0,0,0,0.1)
- `--shadow-lg`: 0 10px 15px -3px rgba(0,0,0,0.1)
- `--shadow-cta`: 0 4px 14px rgba(193,120,73,0.25)

## Components

### Navigation
- Fixed header, glass effect (backdrop-blur, 95% opacity)
- Height: 64px mobile, 72px desktop
- WhatsApp button: compact on mobile (icon only), full text on desktop

### Cards
- Rounded corners (2xl / 24px)
- Subtle borders (outline-variant)
- Hover states with shadow transitions

### Buttons
- Primary CTA: secondary color (ember), shadow-cta
- Secondary: surface-container, hover effect
- Min touch target: 44px

## Voice & Tone

- **Profesional pero cercana:** sin formalidad excesiva
- **Directa:** vai al grano, sin rodeos
- **Práctica:** enfocado en resultados
- **Local:** argentino, "vos", lenguaje cotidiano
