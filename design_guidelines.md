# Design Guidelines: Learning Notes Website

## Design Approach
**System**: Clean, utility-focused design inspired by Notion's clarity and Medium's reading experience  
**Rationale**: Educational content requires excellent readability, clear hierarchy, and minimal distraction. Focus on content over decoration.

## Core Design Principles
1. **Content First**: Maximize readability with generous whitespace
2. **Intuitive Navigation**: Clear pathways to notes, profile, and message board
3. **Comfortable Reading**: Optimized typography for long-form content
4. **Minimal Distraction**: Clean, uncluttered interface

## Typography
- **Primary Font**: Inter or Source Sans Pro (Google Fonts)
- **Headings**: Font-semibold to font-bold, sizes: text-3xl (main), text-2xl (sections), text-xl (subsections)
- **Body Text**: text-base (16px), leading-relaxed for comfortable reading
- **Code/Technical**: font-mono for code snippets if needed
- **Max Width**: max-w-3xl for note content (optimal reading)

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 24
- Consistent padding: p-6 to p-8 for cards
- Section spacing: mb-8 to mb-16
- Tight spacing for related items: gap-4
- Generous spacing between sections: gap-12

## Component Library

### Navigation
- Fixed top navigation bar with logo/name, links to Notes, About, Message Board
- Simple horizontal layout, subtle border-b
- Mobile: Hamburger menu that slides in

### Profile Section (About Page)
- Single column layout, centered with max-w-3xl
- Profile photo: rounded-full, w-32 h-32
- Name: text-3xl font-bold
- Self-introduction: prose format, leading-relaxed

### Notes List
- Card-based grid: grid-cols-1 md:grid-cols-2 gap-6
- Each card: rounded-lg border, p-6, hover:shadow-md transition
- Card content: Title (text-xl font-semibold), excerpt, date, tags
- Tags: Small pills with rounded-full, text-sm

### Note Detail Page
- Single column: max-w-3xl mx-auto
- Title: text-4xl font-bold, mb-4
- Metadata bar: date, category, reading time
- Content: prose prose-lg class for optimal reading
- Images: Full-width within content, rounded-lg, mb-6
- Videos: 16:9 aspect ratio container, rounded-lg

### Message Board
- Two-section layout:
  - Comment form at top: textarea, rounded-lg border, p-4
  - Comment list below: Stack of comment cards
- Each comment: border-l-4 accent, pl-4, mb-4
- Comment metadata: name, timestamp (text-sm text-gray-600)

### Buttons & CTAs
- Primary: px-6 py-2.5, rounded-lg, font-medium
- Secondary: border variant of primary
- On images: backdrop-blur-sm bg-white/80

## Images

### Profile Photo
- **Location**: About/Profile section, centered above name
- **Description**: Professional or casual student portrait, circular crop
- **Size**: 128px × 128px (w-32 h-32)

### Note Content Images
- **Location**: Embedded within note articles
- **Description**: Diagrams, screenshots, infographics related to study topics
- **Treatment**: Full-width within prose container, rounded corners, subtle shadow

### Note Preview Thumbnails (Optional)
- **Location**: Note list cards
- **Description**: Representative image for each note topic
- **Size**: Aspect ratio 16:9, fills card width

**Hero Image**: No large hero section - this is a utility-focused application, not a marketing site

## Accessibility
- Semantic HTML throughout
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Sufficient color contrast
- Focus states on interactive elements

## Layout Structure
- **Header**: Fixed navigation, h-16
- **Main Container**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Content Areas**: py-12 for vertical breathing room
- **Footer**: Simple, centered, text-sm with links