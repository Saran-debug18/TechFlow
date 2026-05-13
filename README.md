# TechFlow — Frontend Developer Assessment

A fully responsive, multi-page website for a fictional digital agency called TechFlow.
Built entirely from scratch using HTML, CSS, and vanilla JavaScript — no frameworks, no libraries, no shortcuts.

---

## What I Built

Four pages, each serving a clear purpose:

| Page | What's on it |
|------|-------------|
| Home | Navbar, hero, stats bar, service cards, testimonials, CTA, footer |
| About | Company story, mission card, core values, team members |
| Services | 4 detailed service cards with modals, "Why TechFlow" section |
| Contact | Contact info, form with full client-side validation and success message |

---

## Features Breakdown

### Navigation
- Sticky navbar that gains a shadow when you scroll down
- Active link highlighted on each page
- Animated underline on hover
- Mobile hamburger menu — icon swaps between ☰ and ✕ on toggle

### Home Page
- Hero section with a dark gradient background and decorative blurred blobs
- Stats bar showing 4 key numbers with vertical dividers
- 4 service preview cards — lift on hover, blue top border appears
- 2 testimonials with star ratings, quotes, and author avatars
- CTA banner with the same gradient as the hero

### About Page
- Two-column layout — story text on the left, mission card on the right
- 3 core value cards with circular icons
- Team grid with 6 members — gradient initials circle as photo placeholder

### Services Page
- 4 detailed cards in a 2×2 grid with feature checklists
- Each card has a "Read More" button that opens a modal
- One reusable modal — JS fills in the title, icon, and body text dynamically
- Modal closes via X button, clicking the overlay, or pressing Escape
- "Why TechFlow" section with 3 reason cards

### Contact Page
- Two-column layout — info cards on the left, form on the right
- Fields: Name, Email, Subject, Message
- Validation: no empty fields, email format checked with regex
- Errors shown in real time as the user types
- On valid submit — form hides, green success message appears

---

## Bonus Features

| Feature | How it works |
|---------|-------------|
| Loading screen | Animated dots + logo on page load, fades out after 800ms |
| Dark / Light mode | Toggle button in navbar, CSS variables swap, preference saved in localStorage |
| Scroll reveal | `IntersectionObserver` watches elements, adds `visible` class when they enter the viewport |
| Navbar scroll shadow | `window.addEventListener('scroll')` adds a class that triggers a CSS box-shadow |

---

## Tech Stack

| Layer | Detail |
|-------|--------|
| HTML | Semantic HTML5 — `header`, `nav`, `main`, `section`, `footer`, `article`, `blockquote` |
| CSS | Custom properties (variables), Flexbox, CSS Grid, media queries, transitions |
| JavaScript | Vanilla JS — DOM manipulation, IntersectionObserver, localStorage, event listeners |
| Fonts | Google Fonts |
| Icons | Font Awesome 6 |


## Folder Structure

```
techflow/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styles — variables, layout, components, responsive
├── js/
│   └── main.js         # All JS — hamburger, scroll, modal, form validation, dark mode, reveal
├── images/
│   └── hero.png
└── README.md
```
## Time Spent

Overall I spent around 10–11 hours on this across the two days.

Most of the time went into the home page and services page — the home page has the most sections and the services page needed the modal logic to work cleanly. The about and contact pages came together faster since the patterns were already established.

The bonus features (dark mode, loading screen, scroll reveal) took about an hour and a half combined. Dark mode was the most interesting to implement — getting the CSS variables to swap correctly without breaking the hero and CTA sections (which always need white text) took a bit of back and forth.

Responsive design and final polish — making sure everything looked right on mobile, tablet, and desktop — was the last thing I worked on, probably another hour of tweaking breakpoints and spacing.

---

## Live Demo

View Live Site — https://techflowsample.netlify.app/

## Repository

GitHub Repo — https://github.com/Saran-debug18/TechFlow
