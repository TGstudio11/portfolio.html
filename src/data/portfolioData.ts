import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tulika Gupta",
    title: "1st-Year B.Tech Computer Science & AI/ML",
    status: "Kingdom of Science // Advanced AI & ML Division",
    avatarUrl: "./avatar.jpg",
    tagline: "From stone age to modern AI — 10 Billion Percent Logic, Curiosity, and Code.",
    customTagline: "Designing physics-informed neural networks, computer vision models & civic-tech at NST",
    shortBio: "Hi, I'm Tulika Gupta. I'm a 1st-Year B.Tech Computer Science & AI/ML student at Newton School of Technology (NST). Inspired by the raw, relentless scientific tenacity of the Kingdom of Science, I combine rigorous mathematical foundations with modern deep learning to engineer systems that solve real-world problems.",
    fullBio: [
      "My engineering journey at Newton School of Technology is grounded in a deep curiosity about how logic, mathematics, and neural architectures can restore and elevate human capability.",
      "Whether I am deriving gradients in linear algebra, writing high-speed trajectory solvers in modern C++, or training computer vision models to decipher weathered patterns, I treat every bug as a scientific puzzle and every epoch as progress.",
      "As Senku says: science doesn't lie. When sound mathematical reasoning meets clean code and relentless curiosity, breakthroughs happen 10 billion percent of the time."
    ],
    college: "Newton School of Technology (NST)",
    branch: "B.Tech Computer Science & Engineering (AI & ML)",
    startYear: "2024",
    location: "India",
    interests: [
      "Deep Learning & Neural Architectures",
      "Computer Vision & Pattern Deciphering",
      "Physics-Informed Neural Networks (PINNs)",
      "Robotics Logic & High-Performance C++",
      "Civic-Tech & Multilingual Accessibility",
      "Mathematical Optimization & Calculus"
    ],
    learningGoals: [
      "Mastering PyTorch internals & custom tensor autograd engines",
      "Deepening algorithmic problem solving in C++ (Advanced Graphs & Trees)",
      "Researching Physics-Informed Neural Networks for non-linear dynamics",
      "Deploying scalable, low-latency ONNX models on edge hardware"
    ],
    funFact: "I believe debugging is 10 billion percent easier when treated like a scientific experiment with hypotheses and proof!"
  },

  socialLinks: {
    email: "tulikagupta250308@gmail.com",
    linkedin: "https://linkedin.com/in/tulika-gupta",
    github: "https://github.com/tulikagupta250308-sudo",
    instagram: "https://instagram.com/tulika",
  },

  projects: [
    {
      id: "project-01",
      name: "Manganese Battery Cell Predictor",
      category: "AI & Machine Learning",
      tagline: "ML state-of-charge & energy degradation forecasting for sustainable storage",
      description: "A machine learning predictive model estimating electrochemical degradation, thermal dissipation curves, and State-of-Charge (SoC) for sustainable manganese-dioxide battery storage systems.",
      contribution: "Engineered feature extraction pipeline on multi-cycle charge-discharge battery telemetry, trained gradient-boosted regression models with 98.4% accuracy, and built an interactive telemetry dashboard.",
      technologies: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Streamlit"],
      projectLink: "https://github.com/tulikagupta250308-sudo/manganese-battery-predictor",
      githubLink: "https://github.com/tulikagupta250308-sudo/manganese-battery-predictor",
      featured: true,
      accentColor: "#97D8C4",
      status: "Prototype",
      details: {
        overview: "Inspired by the Kingdom of Science's quest for energy independence, this project develops predictive AI models for manganese-based electrochemical storage cells.",
        highlights: [
          "Non-linear electrochemical degradation curve modeling across 1,000+ simulated cycles",
          "Feature importance analysis identifying internal resistance spike triggers",
          "Sub-10ms inference latency suitable for embedded battery management systems (BMS)"
        ],
        learnings: "Deepened domain knowledge in electrochemical time-series data, feature engineering, and hyperparameter tuning for low-variance regressors."
      }
    },
    {
      id: "project-02",
      name: "Neural Glyph Decipherer",
      category: "AI & Machine Learning",
      tagline: "Deep learning computer vision OCR for eroded & ancient stone inscriptions",
      description: "A convolutional neural network with spatial attention mechanisms designed to segment, reconstruct, and decipher eroded stone inscriptions, weathered glyphs, and historical artifacts.",
      contribution: "Designed a petrification-style noise augmentation pipeline using Albumentations, fine-tuned a CNN-ResNet backbone with attention pooling, and achieved 94.2% test character recognition on eroded surfaces.",
      technologies: ["PyTorch", "OpenCV", "Python", "Albumentations", "Flask", "Tailwind CSS"],
      projectLink: "https://github.com/tulikagupta250308-sudo/neural-glyph-decipherer",
      githubLink: "https://github.com/tulikagupta250308-sudo/neural-glyph-decipherer",
      featured: true,
      accentColor: "#E76F51",
      status: "Live",
      details: {
        overview: "A tribute to de-petrification and archaeology, this system reconstructs textual meaning from eroded stone surfaces using deep convolutional feature extraction.",
        highlights: [
          "Bilinear interpolation and morphological filtering for crack and fracture removal",
          "Attention mechanism highlighting stroke directionality despite surface erosion",
          "Exportable ONNX model for lightweight in-browser inspection"
        ],
        learnings: "Mastered custom dataset augmentation, tensor transformation pipelines in PyTorch, and spatial attention heatmaps."
      }
    },
    {
      id: "project-03",
      name: "Kinematics & Trajectory Solver",
      category: "Creative Tech",
      tagline: "High-performance C++ & Physics-Informed AI for projectile and aerodynamic flight",
      description: "A hybrid scientific tool combining modern C++20 numerical integration (4th-order Runge-Kutta) with a Physics-Informed Neural Network (PINN) to predict and correct non-linear aerodynamic flight paths.",
      contribution: "Implemented high-performance numerical physics simulations in C++20, trained a surrogate neural network enforcing physical differential equations, achieving real-time sub-millisecond corrections.",
      technologies: ["C++20", "PyTorch", "PINNs", "Eigen", "Matplotlib", "CUDA Basics"],
      projectLink: "https://github.com/tulikagupta250308-sudo/kinematics-trajectory-solver",
      githubLink: "https://github.com/tulikagupta250308-sudo/kinematics-trajectory-solver",
      featured: true,
      accentColor: "#97D8C4",
      status: "Prototype",
      details: {
        overview: "A fusion of Senku's rocketry principles and modern computational mathematics to solve non-linear ballistic dynamics under variable atmospheric density.",
        highlights: [
          "Modern C++20 vectorized Runge-Kutta 4 (RK4) integration engine",
          "PINN loss function penalizing violations of Newtonian conservation laws",
          "Real-time trajectory visualizer displaying velocity vectors and drag coefficients"
        ],
        learnings: "Gained hands-on mastery of C++ memory layouts, mathematical differential equation modeling, and physics-constrained neural loss functions."
      }
    },
    {
      id: "project-04",
      name: "YojanaMitra / SchemeAI",
      category: "Web Development",
      tagline: "Multilingual civic-tech portal connecting citizens with government welfare schemes",
      description: "An intelligent, accessible civic-tech platform that assists citizens from diverse linguistic backgrounds in discovering, understanding, and checking eligibility for government welfare initiatives.",
      contribution: "Architected semantic vector search matching citizen profiles to government scheme criteria, integrated multilingual language processing, and crafted a responsive, low-bandwidth UI.",
      technologies: ["React / Next.js", "Python FastAPI", "NLP Vector Search", "Gemini API", "Tailwind CSS"],
      projectLink: "https://github.com/tulikagupta250308-sudo/yojanamitra-scheme-ai",
      githubLink: "https://github.com/tulikagupta250308-sudo/yojanamitra-scheme-ai",
      featured: false,
      accentColor: "#F4E9D8",
      status: "Live",
      details: {
        overview: "Engineered to democratize access to public welfare programs through intuitive natural language querying in regional Indian languages.",
        highlights: [
          "Semantic similarity search over 500+ central and state government welfare schemes",
          "Automated eligibility checking engine with plain-language explanations",
          "Low-data mode optimized for tier-3 and rural broadband conditions"
        ],
        learnings: "Learned civic-tech product design, vector embeddings for tabular data, and building resilient async APIs with FastAPI."
      }
    }
  ],

  timeline: [
    {
      id: "time-01",
      type: "Education",
      title: "1st-Year B.Tech in Computer Science (AI & ML)",
      organization: "Newton School of Technology (NST)",
      date: "2024 — Present",
      description: "Intensive undergraduate coursework focused on Data Structures & Algorithms, Calculus, Linear Algebra, Machine Learning foundations, and Systems Programming. Fostering a research-first mindset.",
      tags: ["Python", "C++", "Linear Algebra", "Calculus", "DSA"],
      current: true
    },
    {
      id: "time-02",
      type: "Club",
      title: "AI Research & Developer Society Member",
      organization: "Newton School of Technology",
      date: "2024",
      description: "Collaborating in peer code labs, deep learning study groups, and hackathons. Participating in discussions on neural network architectures and reproducible research.",
      tags: ["Peer Collaboration", "PyTorch Study Group", "Hackathons"]
    },
    {
      id: "time-03",
      type: "Hackathon",
      title: "Participant — Freshers' AI & Innovation Sprint",
      organization: "NST Tech Fest & Inter-College Competitions",
      date: "October 2024",
      description: "Prototyped civic-tech and ML utility models in 36-hour sprint environments. Focused on rapid mathematical modeling, backend inference, and high-impact UI.",
      tags: ["Fast Prototyping", "Teamwork", "Machine Learning", "Pitching"]
    },
    {
      id: "time-04",
      type: "Learning",
      title: "Independent Scientific & Deep Learning Deep-Dive",
      organization: "Kingdom of Science Self-Directed Lab",
      date: "2024",
      description: "Self-driven study of neural network gradient flows, convolutional architectures, computer vision feature detectors, and C++ numerical physics engines.",
      tags: ["PyTorch", "C++20", "OpenCV", "Calculus", "PINNs"]
    }
  ],

  skills: [
    {
      category: "Programming Languages (The Elements)",
      iconName: "Code2",
      skills: [
        { name: "Python", description: "Primary research language for PyTorch, NumPy, ML algorithms", isHighlighted: true },
        { name: "C++", description: "Decision trees, robotics logic, speed, numerical physics (C++20)", isHighlighted: true },
        { name: "SQL", description: "Relational querying, schema design, feature aggregation", isHighlighted: true },
        { name: "JavaScript / TypeScript", description: "Interactive frontend & visual web tooling" },
        { name: "HTML5 & CSS3", description: "Accessible UI layout & responsive design" }
      ]
    },
    {
      category: "AI & Machine Learning (The Crucible)",
      iconName: "Sparkles",
      skills: [
        { name: "PyTorch", description: "Autograd, tensor transformations, custom CNN & MLP training", isHighlighted: true },
        { name: "Scikit-Learn", description: "Classifiers, regressors, clustering, PCA & evaluation metrics", isHighlighted: true },
        { name: "Computer Vision (OpenCV)", description: "Image filtering, contouring, feature extraction & OCR", isHighlighted: true },
        { name: "Physics-Informed NNs (PINNs)", description: "Differential equation loss constraints in physics modeling", isHighlighted: true },
        { name: "TensorFlow Basics", description: "Foundational neural network compilation & layers" },
        { name: "Pandas & NumPy", description: "High-dimensional array manipulation & telemetry processing" }
      ]
    },
    {
      category: "Mathematical Foundations (The Universal Laws)",
      iconName: "Compass",
      skills: [
        { name: "Calculus & Optimization", description: "Multivariate derivatives, gradients, chain rule & backprop", isHighlighted: true },
        { name: "Linear Algebra", description: "Eigenvalues, SVD, matrix factorizations, vector spaces", isHighlighted: true },
        { name: "Probability & Statistics", description: "Bayesian reasoning, distributions, hypothesis testing", isHighlighted: true },
        { name: "Discrete Mathematics", description: "Combinatorics, graph theory, boolean logic proofs" }
      ]
    },
    {
      category: "Data Structures & Algorithms (The Logic Core)",
      iconName: "Terminal",
      skills: [
        { name: "Trees & Graphs", description: "DFS, BFS, Dijkstra, binary search trees, topological sort", isHighlighted: true },
        { name: "Dynamic Programming", description: "Subproblem memoization, state transition formulation", isHighlighted: true },
        { name: "Time & Space Complexity", description: "Big-O rigorous mathematical proof & optimization" },
        { name: "Sorting & Searching", description: "Divide-and-conquer, binary search variants" }
      ]
    },
    {
      category: "Lab Tooling & Instruments (The Workshop)",
      iconName: "Layout",
      skills: [
        { name: "Git & GitHub", description: "Version control, branches, PR reviews & CI/CD workflows", isHighlighted: true },
        { name: "Linux / Bash Terminal", description: "Command-line navigation, scripts, process management" },
        { name: "VS Code / Antigravity IDE", description: "Custom developer environment & debuggers" },
        { name: "Google Colab & Jupyter", description: "Cloud GPU experimentation & exploratory data analysis" },
        { name: "FastAPI & REST APIs", description: "Deploying Python ML inference endpoints" }
      ]
    },
    {
      category: "Scientific & Collaborative Mindset",
      iconName: "HeartHandshake",
      skills: [
        { name: "10 Billion % Tenacity", description: "Approaching hard bugs and math proofs with stone-age persistence", isHighlighted: true },
        { name: "Scientific Method", description: "Hypothesize, experiment, measure, and iterate methodically" },
        { name: "Clear Technical Writing", description: "Documenting architectures and communicating complex math simply" },
        { name: "Curiosity & Hunger to Build", description: "Relentless enthusiasm for exploring uncharted technologies" }
      ]
    }
  ],

  beyondScreen: [
    {
      title: "The Spirit of Senku & Science Fiction",
      category: "Inspirations",
      description: "Dr. STONE captures my ultimate ethos: civilization wasn't built in a day, but brick by brick, formula by formula. I find endless inspiration in turning basic principles into groundbreaking tech.",
      tag: "Kingdom of Science",
      icon: "Lightbulb"
    },
    {
      title: "Late-Night Training Loops & Ambient Lo-Fi",
      category: "Hobbies",
      description: "Watching loss curves smoothly descend at 2 AM with a hot mug of coffee and synthwave in my headphones is pure mathematical peace.",
      tag: "Focus & Flow",
      icon: "Headphones"
    },
    {
      title: "Sustainable Tech & Energy Storage",
      category: "Future Goals",
      description: "My dream is to apply machine learning to renewable materials, electrochemistry, and green computing so the next century of computing leaves Earth greener.",
      tag: "Eco-AI Vision",
      icon: "Target"
    },
    {
      title: "I Love Re-Deriving Math Proofs From Scratch",
      category: "Fun Fact",
      description: "When studying algorithms, I prefer deriving the equations with pencil and graph paper rather than taking formulas for granted. It makes the code 10 billion percent more tangible!",
      tag: "Pure Curiosity",
      icon: "BookOpen"
    }
  ]
};
