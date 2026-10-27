# ✦ Tulika — Personal Interactive Portfolio

An immersive, experience-driven personal portfolio website crafted for **Tulika**, a First-Year B.Tech student exploring the intersection of technology, creative code, and design.

Inspired by the storytelling, atmospheric depth, and motion of [nesilnoble.com](https://nesilnoble.com/), built with a **purple, dreamy, futuristic, creative aesthetic**.

---

## ✨ Key Features & Aesthetic Elements

1. **Dreamy Purple Palette & Ambient Atmosphere**
   - Deep violet, lavender, soft lilac, and glowing neon purple highlights.
   - Interactive cosmic starfield & nebula canvas with particle cursor attraction.
   - Glassmorphic translucent surfaces with soft rim lighting.

2. **The Hero Centerpiece**
   - **Central Character**: High-resolution stylized digital art illustration of Tulika with glasses and flowing hair at the exact center of the screen.
   - Subtle floating/breathing animation with neon violet backlight halo.
   - Surrounding floating UI orbital pills: *Curious Mind (01)*, *First-Year B.Tech*, *Creative Tech*, *Bengaluru, India*.
   - Prominent text: *"Inside the mind of"*, **Tulika**, *"First-Year B.Tech Student"*, *"Curious mind. Creative ideas. Building things that matter."*, and customizable tagline badge.
   - Animated scroll indicator inviting visitors into her digital universe.

3. **Floating Navigation & Sensory Experience**
   - Glass floating navigation bar with active scroll section tracking.
   - **Ambient Audio Engine**: Generative Web Audio API dreamy synth chime/pad (OFF by default, toggled on demand).
   - **Accessibility**: One-click Reduced-Motion toggle to pause or soften animations.
   - Custom trailing lilac aura cursor for desktop.

4. **Conversational About Me & Bento Matrix**
   - Conversational first-person narrative introducing Tulika honestly as a first-year student.
   - Bento matrix displaying College, Branch, Location, Current Learning Roadmap, and Fun Facts.

5. **Projects Showcase & Case Study Views**
   - Category filtering (`Creative Tech`, `AI & Machine Learning`, `Web Development`).
   - Detailed project cards with title, tagline, description, tech stack tags, and dedicated **"My Contribution"** highlight box.
   - Interactive glassmorphic modal with in-depth case study, technical highlights, and personal learnings.
   - Dedicated **"Currently building something new"** teaser card for upcoming work.

6. **Authentic Journey & Milestones**
   - Prominently showcases current undergraduate status: **First-Year B.Tech Student**.
   - Milestone trajectory with glowing timeline markers covering Coursework, Hackathons, Tech Clubs, and Self-Directed Learning without fabricated corporate titles.

7. **Skills Galaxy**
   - Categorized badges for Programming, Frontend, AI/ML, Design Tools, Dev Tools, and Soft Skills.
   - Interactive search bar to quickly locate skills.
   - Grounded in genuine practice without arbitrary percentage bars.

8. **Beyond the Screen**
   - *"A little more about me."*
   - Playful editorial cards covering night owl coding playlists, purple aesthetic obsessions, sci-fi reading, and creative inspirations.

9. **Contact & Transmit Channel**
   - *"Have an idea? Let's make something interesting."*
   - Interactive contact form with input validation, dispatch animation, and confetti celebration.
   - Quick one-click email copy button and links to GitHub, LinkedIn, and Instagram.
   - Minimalist footer: *"Designed with curiosity by Tulika."* + Back-to-Top interaction.

---

## 🛠️ Quick Start & Development

```bash
# Install dependencies
npm install

# Run Vite development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

Server runs by default at `http://localhost:3000/`.

---

## 📝 How to Personalize & Edit Content

All portfolio content is centralized in a single, well-documented file:

👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

### 1. Update College, Branch & Personal Bio
Open `src/data/portfolioData.ts` and edit the `personal` object:
```ts
college: "Your College / University Name",
branch: "B.Tech in Computer Science & Engineering",
startYear: "2024",
location: "Your City, Country",
tagline: "Curious mind. Creative ideas. Building things that matter.",
customTagline: "Designing immersive digital experiences with code & imagination",
```

### 2. Replace the Central Avatar
The avatar image is located at:
👉 **[`public/avatar.jpg`](./public/avatar.jpg)**

To replace it with your own photograph or a new digital illustration:
- Save your image as `avatar.jpg` in the `public/` folder.
- Or update `avatarUrl` in `src/data/portfolioData.ts` to point to any image file or URL.

### 3. Add or Modify Projects
In `src/data/portfolioData.ts`, add items to the `projects` array with your project name, category, description, your personal contribution, and links.

### 4. Update Social Links & Contact
Update `socialLinks` in `src/data/portfolioData.ts`:
```ts
socialLinks: {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourhandle",
  github: "https://github.com/yourhandle",
  instagram: "https://instagram.com/yourhandle",
}
```

---

## 💜 Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS** with custom purple/lavender color system & glow utilities
- **HTML5 Canvas** (starfield & cosmic nebula particles)
- **Web Audio API** (ethereal ambient sound synthesis)
- **Lucide Icons**
- **Canvas Confetti**
- **Vite 6**

