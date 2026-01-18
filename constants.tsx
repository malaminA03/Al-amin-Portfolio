import { 
  Code2, 
  Smartphone, 
  Palette, 
  Zap, 
  Github, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Music2, 
  Settings 
} from 'lucide-react';
import { Project, Stat, NavItem } from './types';

export const USER_INFO = {
  name: "Muhammad Al-amin",
  firstName: "Muhammad",
  lastName: "Al-amin",
  role: "Digital Solutions Architect",
  email: "mdalaminkhalifa2002@gmail.com",
  phone: "+8801778189644",
  tagline: "Transforming Complex Problems into Elegant Digital Solutions.",
  image: "https://i.ibb.co.com/4ZtpFT0b/IMG.png" 
};

export const ABOUT_ME = `I am a multi-disciplinary developer and strategist who bridges the gap between high-performance engineering and human-centric design. With over 3 years of craftsmanship, I specialize in building scalable MERN stack ecosystems, intelligent automation tools, and professional creative assets. Whether it's architecting complex software automation scripts in Python or crafting high-impact UI/UX systems, my focus is always on delivering strategic value through technical precision.`;

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/malaminA03', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mdalamins20/', icon: Linkedin },
  { name: 'Facebook', url: 'https://www.facebook.com/mdalamins20', icon: Facebook },
  { name: 'X', url: 'https://x.com/mdalamins20', icon: Twitter },
  { name: 'Instagram', url: 'https://www.instagram.com/mdalamins20/', icon: Instagram },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mdalamins200', icon: Music2 },
  { name: 'YouTube', url: 'https://www.youtube.com/@MdalaminS20', icon: Youtube },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Why Me', href: '#advantage' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    title: "Web & App Dev",
    description: "Architecting high-performance MERN stack ecosystems and native-feeling Flutter applications.",
    icon: Code2
  },
  {
    title: "Automation & AI",
    description: "Building intelligent Python-based automation and AI-integrated tools to optimize your workflow.",
    icon: Zap
  },
  {
    title: "Creative Design",
    description: "Designing professional UI/UX systems, high-impact graphics, and cinematic video edits.",
    icon: Palette
  },
  {
    title: "Systems & Strategy",
    description: "Enterprise-level Kali Linux administration, hardware solutions, and digital growth strategies.",
    icon: Settings
  }
];

export const PROJECTS: Project[] = [
  { 
    id: '01', 
    title: 'AI Auto Branding Tool', 
    category: 'Automation', 
    description: 'Autonomous branding engine.',
    link: '#project-01' // To be set by user
  },
  { 
    id: '02', 
    title: 'Smart Wallet', 
    category: 'FinTech', 
    description: 'Next-gen financial tracker.',
    link: '#project-02'
  },
  { 
    id: '03', 
    title: 'Amar Barishal', 
    category: 'App & UI', 
    description: 'City-wide digital ecosystem.',
    link: '#project-03'
  },
  { 
    id: '04', 
    title: 'ChronoFlow', 
    category: 'Productivity', 
    description: 'AI activity logger.',
    link: '#project-04'
  },
  { 
    id: '05', 
    title: 'Activity Logger', 
    category: 'Utility', 
    description: 'System-level monitoring tool.',
    link: '#project-05'
  },
  { 
    id: '06', 
    title: 'Mess Manager', 
    category: 'Management', 
    description: 'Dining logistics platform.',
    link: '#project-06'
  },
  { 
    id: '07', 
    title: 'PixelHunter', 
    category: 'Game Dev', 
    description: 'Arcade experience.',
    link: '#project-07'
  }
];

export const STATS: Stat[] = [
  { value: "3", suffix: "+", label: "Years Exp." },
  { value: "25", suffix: "+", label: "Solutions Built" },
  { value: "100", suffix: "%", label: "Client Privacy" }, 
  { value: "24", suffix: "/7", label: "Strategic Support" }, 
];

export const PROCESS = [
  {
    step: "01",
    title: "Strategic Discovery",
    description: "Analyzing business bottlenecks to define a technical roadmap."
  },
  {
    step: "02",
    title: "Interface Architecture",
    description: "Crafting professional UI/UX frameworks."
  },
  {
    step: "03",
    title: "Engineering Sprint",
    description: "Developing robust, scalable codebases."
  },
  {
    step: "04",
    title: "System Deployment",
    description: "Rigorous testing and environment optimization."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dewan Furniture",
    role: "Brand Client",
    content: "Muhammad delivered high-impact visual designs that transformed our online presence."
  },
  {
    name: "TechInnovate",
    role: "System Admin Client",
    content: "The custom automation tools developed saved us hundreds of hours."
  }
];