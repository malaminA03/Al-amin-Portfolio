import { 
  Code2, 
  Smartphone, 
  Server, 
  Layout, 
  Palette, 
  Layers,
  Zap,
  Search,
  PenTool,
  Globe,
  Github,
  Linkedin,
  Facebook,
  Twitter,
  Database,
  BarChart,
  Instagram,
  Youtube,
  Music2, // TikTok fallback
  AtSign, // Threads fallback
  Pin     // Pinterest fallback
} from 'lucide-react';
import { Project, Skill, Stat, NavItem } from './types';

export const USER_INFO = {
  name: "Muhammad Al-amin",
  role: "Digital Solutions Architect",
  email: "mdalaminkhalifa2002@gmail.com",
  phone: "01778189644",
  tagline: "Transforming Complex Problems into Elegant Digital Solutions.",
  image: "https://i.ibb.co.com/4ZtpFT0b/IMG.png" 
};

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/malaminA03', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mdalamins20/', icon: Linkedin },
  { name: 'Facebook', url: 'https://www.facebook.com/mdalamins20', icon: Facebook },
  { name: 'X (Twitter)', url: 'https://x.com/mdalamins20', icon: Twitter },
  { name: 'Instagram', url: 'https://www.instagram.com/mdalamins20/', icon: Instagram },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mdalamins200', icon: Music2 },
  { name: 'Threads', url: 'https://www.threads.com/@mdalamins20', icon: AtSign },
  { name: 'YouTube', url: 'https://www.youtube.com/@MdalaminS20', icon: Youtube },
  { name: 'Pinterest', url: 'https://www.pinterest.com/mdalamins20/', icon: Pin },
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
    title: "Web Architecture",
    description: "Scalable, high-performance web applications built on modern stacks (React, Node, Next.js). Focused on speed and SEO.",
    icon: Globe
  },
  {
    title: "Mobile Ecosystems",
    description: "Cross-platform Flutter applications that deliver native performance on iOS and Android with a single codebase.",
    icon: Smartphone
  },
  {
    title: "UI/UX Strategy",
    description: "User-centric design systems that convert visitors into customers through intuitive interfaces and psychology-driven layouts.",
    icon: PenTool
  },
  {
    title: "Digital Growth",
    description: "Data-driven strategies to optimize brand identity, manage platforms, and increase engagement metrics.",
    icon: BarChart
  }
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into business goals, audience psychology, and technical requirements.",
    icon: Search
  },
  {
    step: "02",
    title: "Architecture",
    description: "Designing the blueprint. Wireframes, system architecture, and tech stack selection.",
    icon: Palette
  },
  {
    step: "03",
    title: "Development",
    description: "Writing clean, modular code with a focus on security, performance, and scalability.",
    icon: Code2
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launch strategies, analytics integration, and post-launch optimization.",
    icon: Layers
  }
];

export const TESTIMONIALS = [
  {
    name: "John Doe",
    role: "CEO, TechStart",
    content: "Al-amin transformed our clunky prototype into a sleek, high-performing product. His attention to detail in the UI is unmatched."
  },
  {
    name: "Sarah Smith",
    role: "Director, CreativeFlow",
    content: "Professional, communicative, and technically brilliant. He understood our brand voice immediately. Highly recommended."
  }
];

export const SKILLS: Skill[] = [
  { name: 'React.js', icon: Code2, category: 'Tech' },
  { name: 'Flutter', icon: Smartphone, category: 'Tech' },
  { name: 'Node.js', icon: Server, category: 'Tech' },
  { name: 'System Arch', icon: Database, category: 'Tech' },
  { name: 'UI Design', icon: Layout, category: 'Creative' },
  { name: 'Adobe Suite', icon: Palette, category: 'Creative' },
  { name: 'Strategy', icon: Zap, category: 'Platform' },
];

export const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Jarvis Assistant', 
    category: 'AI & ML', 
    link: "", 
    tags: ['Python', 'OpenAI', 'React'],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '2', 
    title: 'Auto Branding AI', 
    category: 'Automation', 
    link: "", 
    tags: ['Node.js', 'Puppeteer', 'AWS'],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '3', 
    title: 'Smart Wallet', 
    category: 'FinTech', 
    link: "", 
    tags: ['Flutter', 'Firebase', 'Stripe'],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '4', 
    title: 'Social Connect', 
    category: 'Social Media', 
    link: "", 
    tags: ['React', 'Redux', 'Socket.io'],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '5', 
    title: 'Amar Barishal', 
    category: 'App & UI', 
    link: "", 
    tags: ['Flutter', 'Google Maps API'],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '6', 
    title: 'ChronoFlow', 
    category: 'Productivity', 
    link: "", 
    tags: ['TypeScript', 'Next.js'],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '7', 
    title: 'Mess Manager', 
    category: 'Management', 
    link: "", 
    tags: ['React', 'PostgreSQL'],
    image: "https://images.unsplash.com/photo-1554774853-719586f8c277?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '8', 
    title: 'PixelHunter', 
    category: 'Game Dev', 
    link: "", 
    tags: ['Unity', 'C#'],
    image: "https://images.unsplash.com/photo-1556438050-bf8869af7860?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '9', 
    title: 'FocusLogger', 
    category: 'Wellness', 
    link: "", 
    tags: ['Vue.js', 'Tailwind'],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },
];

export const STATS: Stat[] = [
  { value: "3", suffix: "+", label: "Years Experience" },
  { value: "100", suffix: "%", label: "Job Success" },
  { value: "15", suffix: "+", label: "Projects Delivered" }, 
  { value: "17", suffix: "+", label: "Enterprise Clients" }, 
];