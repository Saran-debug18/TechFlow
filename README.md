# TechFlow — Frontend Assessment

A fully responsive, multi-page website built for a fictional digital agency called TechFlow.
Built from scratch using only HTML, CSS, and vanilla JavaScript — no frameworks, no shortcuts.

---

## What I Built

Four pages, each with their own purpose:

- **Home** — Hero section, stats bar, service cards, testimonials, and a CTA
- **About** — Company story, mission, core values, and the team
- **Services** — Detailed service cards with a modal that reveals more info on click
- **Contact** — A contact form with client-side validation and a success message on submit

---

## Pages & Features

### Home
- Navbar with a hamburger menu on mobile
- Hero section with a gradient background and decorative blobs
- Stats bar (200+ projects, 98% satisfaction, etc.)
- 4 service preview cards
- 2 client testimonials with star ratings and author avatars
- CTA banner + footer

### About
- Company story in a two-column layout with a mission card
- Core values section (Innovation, Integrity, Impact)
- Team grid with 6 members — initials avatar as photo placeholder

### Services
- 4 detailed service cards in a 2×2 grid
- Each card has a feature checklist and a "Read More" button
- Clicking "Read More" opens a modal with more detail
- Modal closes via the X button, clicking outside, or pressing Escape
- "Why TechFlow" section with 3 reason cards

### Contact
- Two-column layout — contact info on the left, form on the right
- Form fields: Name, Email, Subject, Message
- Validation: no empty fields, proper email format required
- Errors appear in real time as you type
- On successful submit — form hides and a success message appears

---

## Tech Stack

| What | How |
|------|-----|
| Markup | HTML5  |
| Styling | Custom CSS variables|
| Interactivity | Vanilla JavaScript|
---

## Folder Structure

```
techflow/
├── index.html        # Home page
├── about.html        # About page
├── services.html     # Services page
├── contact.html      # Contact page
├── css/
│   └── style.css     # All styles in one file, clearly sectioned
├── js/
│   └── main.js       # All JS in one file — hamburger, modal, form validation
├── images/
│   └── hero.png
└── README.md
---

## Bonus Features Included

- Navbar shadow appears on scroll (JS)
- Hamburger icon swaps between ☰ and ✕ when toggled
- Hover animations on cards (lift effect), nav links (underline slide), social icons (lift + colour)
- CSS blob decorations on hero and CTA sections
- Form errors clear in real time as the user types

---

## Live Demo

[View Live Site](#) — *(link to be added after deployment)*

## Repository

[GitHub Repo](#) — *(link to be added)*
