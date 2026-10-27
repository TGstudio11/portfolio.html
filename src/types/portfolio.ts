export interface Project {
  id: string;
  name: string;
  category: 'Web Development' | 'AI & Machine Learning' | 'Creative Tech' | 'Design' | 'Explorations';
  tagline: string;
  description: string;
  contribution: string;
  technologies: string[];
  projectLink?: string;
  githubLink?: string;
  featured?: boolean;
  accentColor?: string;
  status?: 'Live' | 'In Progress' | 'Prototype';
  details?: {
    overview: string;
    highlights: string[];
    learnings: string;
  };
}

export interface TimelineEntry {
  id: string;
  type: 'Education' | 'Hackathon' | 'Club' | 'Learning' | 'Milestone';
  title: string;
  organization: string;
  date: string;
  description: string;
  tags?: string[];
  current?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    description?: string;
    isHighlighted?: boolean;
  }[];
}

export interface PersonalInterest {
  title: string;
  category: 'Hobbies' | 'Things I Love' | 'Inspirations' | 'Future Goals' | 'Fun Fact';
  description: string;
  tag: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    status: string;
    avatarUrl: string;
    tagline: string;
    customTagline: string;
    shortBio: string;
    fullBio: string[];
    college: string;
    branch: string;
    startYear: string;
    location: string;
    learningGoals: string[];
    funFact: string;
    interests: string[];
  };
  socialLinks: {
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
    twitter?: string;
  };
  projects: Project[];
  timeline: TimelineEntry[];
  skills: SkillCategory[];
  beyondScreen: PersonalInterest[];
}

