import { 
  Code2, 
  Smartphone, 
  Server, 
  Layout, 
  Palette, 
  Layers,
  Zap,
  BarChart,
  Github,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Music2,
  Cpu,
  Terminal,
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

export const ABOUT_ME = `I am a multi-disciplinary developer and strategist who bridges the gap between high-performance engineering and human-centric design. With over 3 years of craftsmanship, I specialize in building scalable MERN stack ecosystems, intelligent automation tools, and professional creative assets. Whether it's architecting complex software automation scripts in Python or crafting high-impact UI/UX systems, my focus is always on delivering strategic value through technical precision. From system administration in Kali Linux to business optimization using Google AppSheet, I provide full-spectrum digital solutions for modern enterprises.`;

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
    id: '1', 
    title: 'Mess Manager', 
    category: 'Web Ecosystem', 
    description: 'A comprehensive MERN stack application designed to digitize dining logistics. Features include real-time inventory management and automated budget tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '2', 
    title: 'ChronoFlow', 
    category: 'AI Integration', 
    description: 'An intelligent desktop application utilizing AI to analyze daily activity logs and provide data-driven productivity insights for professionals.',
    tags: ['Python', 'AI/ML', 'PyQt', 'Automation'],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '3', 
    title: 'Smart Wallet', 
    category: 'FinTech', 
    description: 'A sleek financial tracking platform focused on personal expense management and visual data analytics through a minimalist user interface.',
    tags: ['Next.js', 'Tailwind', 'Firebase'],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '4', 
    title: 'Social Automation', 
    category: 'Automation', 
    description: 'A custom tool for multi-platform content synchronization. Post simultaneously to LinkedIn, X, Instagram, and Facebook with advanced scheduling.',
    tags: ['Python', 'Selenium', 'API Integration'],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '5', 
    title: 'Payroll Solution', 
    category: 'Business Systems', 
    description: 'An enterprise-grade payroll system bridging Google Sheets and AppSheet. Streamlines attendance, tax reporting, and employee compensation.',
    tags: ['Google AppSheet', 'Apps Script'],
    image: "https://images.unsplash.com/photo-1454165833767-02a698d5874c?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: '6', 
    title: 'Desktop Monitor', 
    category: 'System Utility', 
    description: 'A Python-based utility for hardware-level monitoring. Provides real-time visibility into CPU/GPU thermals and system resource utilization.',
    tags: ['Python', 'System Ops'],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
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
    description: "Analyzing your business bottlenecks to define a technical roadmap that actually moves the needle."
  },
  {
    step: "02",
    title: "Interface Architecture",
    description: "Crafting professional UI/UX frameworks that balance brand aesthetics with functional precision."
  },
  {
    step: "03",
    title: "Engineering Sprint",
    description: "Developing robust, scalable codebases using the MERN stack or automation scripts in Python."
  },
  {
    step: "04",
    title: "System Deployment",
    description: "Rigorous testing and environment optimization followed by a seamless launch and scaling plan."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dewan Furniture",
    role: "Brand Client",
    content: "Muhammad delivered high-impact visual designs that transformed our online presence. His attention to detail is remarkable."
  },
  {
    name: "TechInnovate",
    role: "System Admin Client",
    content: "The custom automation tools developed saved us hundreds of hours in manual data entry. A true strategic partner."
  }
];