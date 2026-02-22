# dk.tsk Website — Project Plan

## Overview

**Project:** Website for dk.tsk music production studio and creative collective  
**Location:** Yerevan, Armenia (Teryan 91)  
**Founded:** 2019  
**Tech Stack:** React (Vite), React Router, CSS Modules or Styled Components

---

## Site Structure

```
dk.tsk/
├── / (Landing)
├── /about
├── /artists
│   ├── /artists/innersha
│   └── /artists/hov
├── /events
│   └── /events/:eventId
├── /studio
├── /podcasts
└── /contact
```

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0a` | Main background |
| `--bg-secondary` | `#141414` | Cards, sections |
| `--bg-tertiary` | `#1a1a1a` | Hover states, borders |
| `--text-primary` | `#f5f5f5` | Headings, primary text |
| `--text-secondary` | `#a0a0a0` | Body text, descriptions |
| `--text-muted` | `#666666` | Captions, metadata |
| `--accent` | `#e85a4f` | CTAs, highlights (adjust based on logo) |
| `--accent-muted` | `#c44d44` | Hover states |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Space Grotesk | 64px / 4rem | 700 |
| H2 | Space Grotesk | 40px / 2.5rem | 600 |
| H3 | Space Grotesk | 24px / 1.5rem | 600 |
| Body | Inter | 16px / 1rem | 400 |
| Small | Inter | 14px / 0.875rem | 400 |
| Caption | Inter | 12px / 0.75rem | 400 |

### Spacing Scale

```
4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Breakpoints

| Name | Width |
|------|-------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

---

## Page Specifications

### 1. Landing Page (`/`)

**Purpose:** First impression, navigation hub, vibe setter

**Sections:**
1. **Hero**
   - Full viewport height
   - dk.tsk logo centered
   - Tagline: "Sound. Space. Freedom."
   - Subtle cursor-following light beam effect on dark background
   - Scroll indicator at bottom

2. **Intro Block**
   - Short paragraph (2-3 sentences about dk.tsk)
   - "Learn More" link to /about

3. **Section Cards** (2x2 grid on desktop, stack on mobile)
   - Artists → /artists
   - Studio → /studio
   - Events → /events
   - Podcasts → /podcasts
   - Each card: background image, title, short description, hover effect

4. **Latest/Featured** (optional)
   - Latest event or release highlight
   - Could be a horizontal card with image + text

5. **Footer**
   - Logo (small)
   - Navigation links
   - Social icons (Instagram, Soundcloud, Bandcamp)
   - Location: Yerevan, Armenia
   - © 2024 dk.tsk

---

### 2. About Page (`/about`)

**Purpose:** Tell the full story

**Sections:**
1. **Hero**
   - Page title: "About"
   - Subtitle or quote

2. **Story** (alternating text/image blocks)
   - Block 1: Founding in 2019, open-air raves, early days
   - Block 2: Evolution — workshops, gatherings, community
   - Block 3: 2024 grant, Teryan 91 studio space
   - Block 4: Mission — freedom, experimentation, collective energy

3. **Values/Manifesto** (optional)
   - 3 pillars or principles
   - Could be typographic treatment

4. **Image Gallery**
   - Grid of key moments (placeholder images for now)

---

### 3. Artists Page (`/artists`)

**Purpose:** Showcase collective members

**Layout:**
- Grid of artist cards (2 columns desktop, 1 mobile)
- Each card:
  - Artist photo
  - Name
  - Short tagline or genre
  - Click → individual page

---

### 3a. Artist Detail Page (`/artists/:slug`)

**Sections:**
1. **Hero**
   - Large artist photo
   - Name
   - Tagline/genre

2. **Bio**
   - 2-3 paragraphs about the artist

3. **Releases** (Bandcamp)
   - Embedded Bandcamp player
   - Or list of releases with links

4. **Live Recordings** (Soundcloud)
   - Embedded Soundcloud playlist/tracks

5. **Links**
   - Social media, Bandcamp, Soundcloud links

---

### 4. Events Archive (`/events`)

**Purpose:** Document history, show activity

**Layout:**
- Filter bar (optional): Year filter
- Grid of event cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card:
  - Event poster image
  - Date
  - Title
  - Location
  - Click → detail page

**Sorting:** Newest first

---

### 4a. Event Detail Page (`/events/:id`)

**Sections:**
1. **Header**
   - Title
   - Date, time, location
   - Poster image (large)

2. **Description**
   - Event writeup

3. **Lineup** (if applicable)
   - List of artists/performers

4. **Gallery**
   - Photo grid
   - Video embeds if available

---

### 5. Studio Page (`/studio`)

**Purpose:** Attract bookings, explain the space

**Sections:**
1. **Hero**
   - Title: "Studio"
   - Tagline: "A space for creation"
   - Hero image of the studio

2. **About the Space**
   - Description of the studio
   - What it offers (production, mixing, rehearsal, etc.)
   - Location context (historic publishing house, Teryan 91)

3. **Gallery**
   - Photo grid of the space, equipment

4. **Equipment List** (optional)
   - Gear available

5. **Pricing**
   - Table or cards with rates
   - Hourly / half-day / full-day
   - Any package deals

6. **Booking**
   - Embedded Cal.com widget OR
   - "Book Now" button linking to Cal.com
   - Contact email for custom inquiries

---

### 6. Podcasts/Mixes Page (`/podcasts`)

**Purpose:** Showcase recorded sets and mixes

**Layout:**
- Header with page title
- Soundcloud playlist embed (main)
- OR grid of individual mix cards:
  - Cover image
  - Title
  - Artist
  - Date
  - Duration
  - Play button / Soundcloud link

---

### 7. Contact Page (`/contact`)

**Purpose:** Enable communication

**Sections:**
1. **Header**
   - Title: "Contact"
   - Subtitle: "Get in touch"

2. **Contact Methods**
   - Email: hello@dktsk.am (or similar)
   - Instagram DM
   - Location: Teryan 91, Yerevan, Armenia

3. **Contact Form** (optional, can be placeholder)
   - Name
   - Email
   - Message
   - Submit button
   - (For now, can just be mailto: link)

4. **Map** (optional)
   - Static map image or subtle embedded map

---

## Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── Navigation.jsx
│   │
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── ImageGallery.jsx
│   │   └── EmbedPlayer.jsx (Soundcloud/Bandcamp)
│   │
│   ├── home/
│   │   ├── Hero.jsx (with light beam effect)
│   │   ├── IntroBlock.jsx
│   │   └── SectionCards.jsx
│   │
│   ├── artists/
│   │   ├── ArtistCard.jsx
│   │   └── ArtistGrid.jsx
│   │
│   ├── events/
│   │   ├── EventCard.jsx
│   │   ├── EventGrid.jsx
│   │   └── EventGallery.jsx
│   │
│   └── studio/
│       ├── PricingTable.jsx
│       └── BookingWidget.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Artists.jsx
│   ├── ArtistDetail.jsx
│   ├── Events.jsx
│   ├── EventDetail.jsx
│   ├── Studio.jsx
│   ├── Podcasts.jsx
│   └── Contact.jsx
│
├── data/
│   ├── artists.js
│   ├── events.js
│   └── podcasts.js
│
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── [component].module.css
│
├── assets/
│   ├── images/
│   └── logo/
│
├── App.jsx
└── main.jsx
```

---

## Data Structures

### Artist

```javascript
{
  id: "innersha",
  name: "Innersha",
  tagline: "Deep, hypnotic soundscapes",
  bio: "Lorem ipsum...",
  image: "/main/artists/innersha.jpg",
  bandcamp: "https://innersha.bandcamp.com",
  soundcloud: "https://soundcloud.com/innersha",
  instagram: "https://instagram.com/innersha",
  releases: [
    {
      title: "Release Name",
      bandcampEmbed: "<iframe>...</iframe>"
    }
  ],
  liveSets: [
    {
      title: "Live at dk.tsk",
      soundcloudEmbed: "<iframe>...</iframe>"
    }
  ]
}
```

### Event

```javascript
{
  id: "event-001",
  title: "Mountain Frequencies",
  date: "2023-08-15",
  location: "Dilijan, Armenia",
  description: "Lorem ipsum...",
  poster: "/main/events/mountain-frequencies.jpg",
  gallery: [
    "/main/events/mf-01.jpg",
    "/main/events/mf-02.jpg"
  ],
  videos: [
    "https://youtube.com/..."
  ],
  lineup: ["Innersha", "HOV", "Guest"]
}
```

### Podcast/Mix

```javascript
{
  id: "mix-001",
  title: "dk.tsk Podcast 001",
  artist: "Innersha",
  date: "2024-01-15",
  duration: "1:32:00",
  cover: "/main/podcasts/podcast-001.jpg",
  soundcloudUrl: "https://soundcloud.com/...",
  soundcloudEmbed: "<iframe>...</iframe>"
}
```

---

## Build Phases

### Phase 1: Project Setup
- [ ] Initialize Vite + React project
- [ ] Install dependencies (react-router-dom)
- [ ] Set up folder structure
- [ ] Create CSS variables and global styles
- [ ] Import fonts (Space Grotesk, Inter)
- [ ] Create Layout component with Header/Footer
- [ ] Set up React Router with all routes

### Phase 2: Core Components
- [ ] Button component
- [ ] Card component
- [ ] SectionTitle component
- [ ] Navigation component
- [ ] Responsive header with mobile menu

### Phase 3: Landing Page
- [ ] Hero section with logo
- [ ] Cursor-following light beam effect
- [ ] Intro block
- [ ] Section cards grid
- [ ] Footer

### Phase 4: Static Pages
- [ ] About page (story blocks, placeholder images)
- [ ] Contact page (info + mailto link)

### Phase 5: Artists Section
- [ ] Create artists data file
- [ ] Artist card component
- [ ] Artists grid page
- [ ] Artist detail page template
- [ ] Bandcamp embed component
- [ ] Soundcloud embed component

### Phase 6: Events Section
- [ ] Create events data file
- [ ] Event card component
- [ ] Events grid page
- [ ] Event detail page
- [ ] Image gallery component

### Phase 7: Studio Page
- [ ] Studio hero and description
- [ ] Photo gallery
- [ ] Pricing table component
- [ ] Cal.com embed or booking button

### Phase 8: Podcasts Page
- [ ] Create podcasts data file
- [ ] Podcast/mix card component
- [ ] Podcasts grid
- [ ] Soundcloud embeds

### Phase 9: Polish
- [ ] Page transitions / animations
- [ ] Scroll animations (fade in on scroll)
- [ ] Responsive testing and fixes
- [ ] Image optimization
- [ ] Meta tags and SEO
- [ ] Favicon

### Phase 10: Content
- [ ] Replace placeholder images with real assets
- [ ] Replace lorem ipsum with real copy
- [ ] Add real Bandcamp/Soundcloud embeds
- [ ] Final review and adjustments

---

## Light Beam Effect (Hero)

Implementation approach for the cursor-following light effect:

```javascript
// Concept: radial gradient that follows cursor position
// Applied as a pseudo-element or overlay on the hero

const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

// CSS: radial-gradient centered at mousePosition
// Soft, large radius, very subtle opacity (0.05-0.1)
// Color: white or accent color
```

---

## External Integrations

| Service | Purpose | Implementation |
|---------|---------|----------------|
| Cal.com | Studio booking | Embed widget or link |
| Soundcloud | Mixes, live sets | iframe embeds |
| Bandcamp | Releases | iframe embeds |
| Google Fonts | Typography | CSS import |

---

## Assets Needed

### From You:
- [ ] dk.tsk logo (SVG preferred, PNG fallback)
- [ ] Artist photos (Innersha, HOV)
- [ ] Event posters (as many as available)
- [ ] Event photos (galleries)
- [ ] Studio photos
- [ ] Any existing brand colors from flyers

### Placeholder:
- [ ] Generate placeholder images for missing assets
- [ ] Lorem ipsum for text content
- [ ] Placeholder podcast covers

---

## Next Steps

1. **Confirm this plan** — any adjustments?
2. **Gather assets** — logo, photos, colors
3. **Start Phase 1** — project setup with Claude Code
4. **Build incrementally** — one phase at a time

---

*Document created: January 2025*  
*Project: dk.tsk website*
