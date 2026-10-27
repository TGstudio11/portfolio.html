import { PortfolioData } from '../types/portfolio';

/**
 * =======================================================================
 * TULIKA'S PORTFOLIO CONFIGURATION
 * =======================================================================
 * All portfolio content is centralized here. You can customize any field,
 * replace the avatar image in /public/avatar.jpg, add your college name,
 * and update your projects and social links easily.
 */

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tulika",
    title: "First-Year B.Tech Student",
    status: "Exploring Code, Design & Curiosity",
    // Replace with your own image in /public/avatar.jpg or any URL
    avatarUrl: "/avatar.jpg",
    tagline: "Curious mind. Creative ideas. Building things that matter.",
    customTagline: "Designing immersive digital experiences with code & imagination",
    shortBio: "Hi, I'm Tulika. I'm a first-year B.Tech student exploring the intersection of technology, creativity, and problem-solving. I enjoy learning new things, experimenting with ideas, and turning curiosity into projects. I'm at the beginning of my journey, and I'm excited to discover what I can build.",
    fullBio: [
      "I started my engineering journey driven by a fascination with how digital experiences can evoke emotion, simplify complexity, and bring people together.",
      "As a first-year undergraduate, my days are divided between mastering programming fundamentals, exploring web aesthetics, understanding algorithms, and building experimental micro-projects that test my creativity.",
      "I believe the best work happens when rigorous analytical logic meets human-centered artistic intuition."
    ],
    /* EDITABLE FIELDS */
    college: "[Your College / University Name]", // e.g., "National Institute of Technology"
    branch: "Computer Science & Engineering", // e.g., "B.Tech Computer Science & Engineering"
    startYear: "2024",
    location: "Bengaluru, India", // or [Your City]
    interests: [
      "Creative Web Development",
      "Human-Computer Interaction",
      "Generative AI & Visual Computing",
      "UI/UX Craft & Micro-interactions",
      "Algorithmic Thinking"
    ],
    learningGoals: [
      "Deepening mastery in React, TypeScript & WebGL",
      "Exploring Data Structures & Algorithms in C++ / Python",
      "Understanding neural network foundations & AI APIs",
      "Crafting high-performance web animations & micro-interactions"
    ],
    funFact: "I love curating dreamlike purple music playlists and obsessing over font pairings at 2 AM!"
  },

  socialLinks: {
    email: "tulika.connect@example.com", // [Your Email]
    linkedin: "https://linkedin.com/in/tulika", // [Your LinkedIn URL]
    github: "https://github.com/tulika", // [Your GitHub URL]
    instagram: "https://instagram.com/tulika", // [Your Instagram URL]
  },

  /**
   * PROJECTS SHOWCASE
   * Highlighting creative student projects with transparent tags and contributions.
   */
  projects: [
    {
      id: "project-01",
      name: "Aetheria — Ambient Canvas Generator",
      category: "Creative Tech",
      tagline: "Generative particle simulator & interactive soundscape canvas",
      description: "An experimental interactive web application generating harmonious visual waveforms and particle dynamics in response to cursor movements and ambient sound frequencies.",
      contribution: "Designed and coded the interactive canvas particle engine using HTML5 Canvas & Web Audio API, implemented glowing dark purple aesthetic, and optimized rendering loops.",
      technologies: ["React", "TypeScript", "HTML5 Canvas", "Web Audio API", "Tailwind CSS"],
      projectLink: "#",
      githubLink: "https://github.com/tulika/aetheria-canvas",
      featured: true,
      accentColor: "#a855f7",
      status: "Prototype",
      details: {
        overview: "Created as an exploration of creative coding and generative art, inspired by ambient audiovisual installations.",
        highlights: [
          "Physics-based particle attraction and repulsion fields",
          "Procedural color palettes tuned to deep purple and soft lavender gradients",
          "Real-time audio synthesis with Web Audio nodes"
        ],
        learnings: "Deepened understanding of requestAnimationFrame performance, spatial hashing for particle interactions, and browser audio context lifecycle."
      }
    },
    {
      id: "project-02",
      name: "Synapse — AI Thought Companion",
      category: "AI & Machine Learning",
      tagline: "Minimalist prompt-driven knowledge brainstormer for students",
      description: "A streamlined web companion designed to assist first-year college students in deconstructing complex engineering concepts into intuitive metaphors and flashcards.",
      contribution: "Built responsive frontend interface with fluid animations, integrated conversational API streaming, and designed structured markdown mind-map renderer.",
      technologies: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS", "Framer Motion"],
      projectLink: "#",
      githubLink: "https://github.com/tulika/synapse-ai",
      featured: true,
      accentColor: "#c084fc",
      status: "In Progress",
      details: {
        overview: "Developed to solve the problem of overwhelming academic jargon for freshmen entering technical subjects.",
        highlights: [
          "Adaptive complexity toggle: 'Explain like I'm 10' to 'Undergraduate Rigor'",
          "Interactive concept graph visualization using SVG",
          "Local storage bookmarking and study session exports"
        ],
        learnings: "Mastered prompt engineering patterns, asynchronous streaming UX, and clean state machine management."
      }
    },
    {
      id: "project-03",
      name: "Prism — Editorial Typography Showcase",
      category: "Web Development",
      tagline: "Interactive digital specimen exploring modern editorial typography",
      description: "A sensory web playground celebrating modern typography, kinetic text interactions, and fluid responsive layouts with smooth parallax scroll mechanics.",
      contribution: "Handcrafted typography pairings, custom cursor follower physics, responsive layouts across mobile and ultrawide viewports.",
      technologies: ["React", "Tailwind CSS", "CSS Keyframes", "Vite"],
      projectLink: "#",
      githubLink: "https://github.com/tulika/prism-typography",
      featured: false,
      accentColor: "#d8b4fe",
      status: "Live",
      details: {
        overview: "A study of experimental web design inspired by modern high-fashion design studios and creative magazines.",
        highlights: [
          "Dynamic variable font weight interpolation on cursor scroll",
          "Glassmorphic overlays and subtle chromatic aberration filters",
          "100% accessible contrast ratios verified"
        ],
        learnings: "Explored advanced CSS clamp calculations, variable typography axes, and performance optimization."
      }
    }
  ],

  /**
   * EXPERIENCE & LEARNING JOURNEY TIMELINE
   * Honest, authentic student milestones without fabricated corporate roles.
   */
  timeline: [
    {
      id: "time-01",
      type: "Education",
      title: "First-Year B.Tech in Computer Science",
      organization: "[Your College / University Name]",
      date: "2024 — Present",
      description: "Currently pursuing foundational coursework in Object-Oriented Programming, Discrete Mathematics, Digital Logic, and Engineering Principles. Maintaining active curiosity across tech communities.",
      tags: ["C++", "Data Structures", "Computer Architecture", "Mathematics"],
      current: true
    },
    {
      id: "time-02",
      type: "Club",
      title: "Active Member & Web Enthusiast",
      organization: "College Technical Club / Developer Student Club",
      date: "2024",
      description: "Participating in weekly peer coding sessions, internal hackathons, and design sprints. Collaborating with senior peers on open-source student initiatives.",
      tags: ["Collaboration", "Peer Mentorship", "Git Workflows"]
    },
    {
      id: "time-03",
      type: "Hackathon",
      title: "Participant — Freshers' Innovation Sprint",
      organization: "Inter-College Hackathon 2024",
      date: "October 2024",
      description: "Teamed up with 3 peers to prototype an interactive campus utility web app in 36 hours. Led the frontend development and user interface design.",
      tags: ["Fast Prototyping", "UI Design", "Teamwork", "Pitching"]
    },
    {
      id: "time-04",
      type: "Learning",
      title: "Self-Directed Modern Web & Creative Code Sprint",
      organization: "Independent Learning",
      date: "2024",
      description: "Completed intensive deep-dives into modern React 19, TypeScript fundamentals, responsive CSS architectures, and creative coding with HTML5 Canvas.",
      tags: ["React", "TypeScript", "Canvas API", "Design Systems"]
    }
  ],

  /**
   * SKILLS & TECHNOLOGIES
   * Authentically organized without fake percentage bars.
   */
  skills: [
    {
      category: "Programming Languages",
      iconName: "Code2",
      skills: [
        { name: "C / C++", description: "Academic coursework, DSA & memory fundamentals", isHighlighted: true },
        { name: "Python", description: "Problem solving, scripting, and exploratory AI", isHighlighted: true },
        { name: "JavaScript (ES6+)", description: "Modern asynchronous web programming", isHighlighted: true },
        { name: "TypeScript", description: "Type-safe robust web development", isHighlighted: true },
        { name: "HTML5 & Modern CSS3", description: "Semantic markup & accessible layouts" }
      ]
    },
    {
      category: "Web & Frontend",
      iconName: "Layout",
      skills: [
        { name: "React", description: "Hooks, component architecture, state", isHighlighted: true },
        { name: "Tailwind CSS", description: "Utility-first design systems & micro-styles", isHighlighted: true },
        { name: "HTML5 Canvas", description: "Interactive 2D animations & particles", isHighlighted: true },
        { name: "Vite / Next.js Basics", description: "Modern build tooling & page rendering" },
        { name: "Web Audio API", description: "Generative soundscapes & synth pads" }
      ]
    },
    {
      category: "AI & Machine Learning (Foundations)",
      iconName: "Sparkles",
      skills: [
        { name: "Gemini / OpenAI API", description: "Prompt engineering, function calling & agents", isHighlighted: true },
        { name: "Python NumPy & Pandas", description: "Data exploration and matrix operations" },
        { name: "AI Ethics & UX", description: "Human-centered explainable AI interfaces" }
      ]
    },
    {
      category: "Design & Creative Tools",
      iconName: "Palette",
      skills: [
        { name: "Figma", description: "Wireframing, UI prototyping & design tokens", isHighlighted: true },
        { name: "Canva & Digital Art Tools", description: "Asset curation & visual moodboards" },
        { name: "Typography & Color Theory", description: "High-contrast editorial palettes" }
      ]
    },
    {
      category: "Developer Tools",
      iconName: "Terminal",
      skills: [
        { name: "Git & GitHub", description: "Version control, branches & collaboration", isHighlighted: true },
        { name: "VS Code / Antigravity IDE", description: "Custom workflow, extensions & debugging" },
        { name: "Terminal / Bash / Zsh", description: "Command-line navigation & scripts" },
        { name: "Vercel / Netlify", description: "Modern frontend continuous deployment" }
      ]
    },
    {
      category: "Currently Learning & Exploring",
      iconName: "Compass",
      skills: [
        { name: "Data Structures & Algorithms", description: "Trees, Graphs, Dynamic Programming", isHighlighted: true },
        { name: "Three.js & WebGL Shaders", description: "3D scenes and lighting in browser", isHighlighted: true },
        { name: "Backend REST APIs", description: "Node.js and Express fundamentals" }
      ]
    },
    {
      category: "Soft & Collaborative Skills",
      iconName: "HeartHandshake",
      skills: [
        { name: "Curiosity & Rapid Learning", description: "Absorbing new libraries and paradigms eagerly" },
        { name: "Clear Communication", description: "Explaining technical concepts with empathy" },
        { name: "Creative Problem Solving", description: "Approaching bugs as design puzzles" },
        { name: "Attention to Detail", description: "Obsessing over polish, spacing & micro-interactions" }
      ]
    }
  ],

  /**
   * BEYOND THE SCREEN — PERSONAL INTERESTS & STORIES
   * Showing the human behind the code with warmth and individuality.
   */
  beyondScreen: [
    {
      title: "Night Owl Coding & Ambient Playlists",
      category: "Hobbies",
      description: "There's a special kind of magic in writing code late at night while a dreamy synthwave or lofi playlist plays softly in the background.",
      tag: "Vibes & Focus",
      icon: "Headphones"
    },
    {
      title: "Obsessed with Purple & Dream Aesthetics",
      category: "Things I Love",
      description: "From lavender journals and violet lighting to cosmic gradients, shades of purple inspire my creative energy like nothing else.",
      tag: "Aesthetic",
      icon: "Sparkles"
    },
    {
      title: "Interactive Storytellers & Digital Artists",
      category: "Inspirations",
      description: "Deeply inspired by creative developers and interactive studios like Nesil Noble, Bruno Simon, and Apple's tactile interface design.",
      tag: "Creative Role Models",
      icon: "Lightbulb"
    },
    {
      title: "Building Software That Sparks Wonder",
      category: "Future Goals",
      description: "My dream is to engineer software that isn't just functional, but genuinely delightful to touch, behold, and experience.",
      tag: "Aspiration",
      icon: "Target"
    },
    {
      title: "I Love Reading Sci-Fi & Speculative Fiction",
      category: "Fun Fact",
      description: "When not debugging code, you'll find me immersed in stories about future artificial intelligences, quantum universes, and futuristic cities.",
      tag: "Unexpected",
      icon: "BookOpen"
    }
  ]
};

