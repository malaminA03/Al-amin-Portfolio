
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
import { Project, Stat, NavItem, Tool } from './types';

export const USER_INFO = {
  name: "Muhammad Al-amin",
  firstName: "Muhammad",
  lastName: "Al-amin",
  role: "Digital Solutions Architect",
  email: "mdalaminkhalifa2002@gmail.com",
  phone: "+8801778189644",
  tagline: "Transforming Complex Problems into Elegant Digital Solutions.",
  image: "https://i.ibb.co.com/4ZtpFT0b/IMG.png",
  supportingLine: "I help startups and businesses build fast, modern, conversion-focused websites that scale effortlessly."
};

// Custom Translator Language List
export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', flag: '🇺🇸' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', flag: '🇧🇩' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ur', label: 'Urdu', native: 'اردو', flag: '🇵🇰' },
  { code: 'ar', label: 'Arabic', native: 'العربية', flag: '🇸🇦' },
  { code: 'es', label: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Portuguese', native: 'Português', flag: '🇵🇹' },
  { code: 'fr', label: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'German', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'Russian', native: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', label: 'Chinese', native: '简体中文', flag: '🇨🇳' },
  { code: 'ja', label: 'Japanese', native: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: 'Korean', native: '한국어', flag: '🇰🇷' },
  { code: 'mi', label: 'Maori', native: 'Te Reo Māori', flag: '🇳🇿' },
  { code: 'tpi', label: 'Tok Pisin', native: 'Tok Pisin', flag: '🇵🇬' }
];

export const ABOUT_ME = `I am a multi-disciplinary developer and strategist who bridges the gap between high-performance engineering and human-centric design. With over 3 years of craftsmanship, I specialize in building scalable MERN stack ecosystems, intelligent automation tools, and professional creative assets. Whether it's architecting complex software automation scripts in Python or crafting high-impact UI/UX systems, my focus is always on delivering strategic value through technical precision.`;

export const STRATEGIC_ABOUT = {
  whoIHelp: "Startups, established businesses, and personal brands looking to modernize their digital presence.",
  problemsSolved: "High bounce rates, slow performance, poor user engagement, and inefficient manual workflows.",
  trustFactor: "Transparent communication, agile delivery cycles, and a result-oriented mindset that prioritizes your business growth."
};

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
  { label: 'Contact', href: '#contact' },
  { label: 'View CV', href: '#cv', isAction: true },
];

export const SERVICES = [
  {
    title: "Business Web Development",
    description: "Architecting high-performance MERN stack ecosystems focused on speed, SEO, and user conversion.",
    icon: Code2,
    benefit: "Drives organic traffic and improves lead retention."
  },
  {
    title: "Intelligent Automation",
    description: "Building Python-based tools and AI integrations to automate repetitive tasks and optimize workflows.",
    icon: Zap,
    benefit: "Saves hundreds of hours in manual labor."
  },
  {
    title: "UI/UX & Creative Design",
    description: "Designing high-impact visual systems and cinematic video content that build immediate brand trust.",
    icon: Palette,
    benefit: "Position your brand as a premium leader in your industry."
  },
  {
    title: "Digital Growth Strategy",
    description: "Hardware solutions, Kali Linux administration, and strategic technical consulting for long-term scaling.",
    icon: Settings,
    benefit: "Ensures your infrastructure stays secure and future-proof."
  }
];

export const PROJECTS: Project[] = [
  { 
    id: '01', 
    title: 'AI Auto Branding Tool', 
    category: 'Automation', 
    description: 'Autonomous branding engine for digital assets.',
    role: 'Lead Full-Stack Developer',
    result: 'Reduced manual design time by 65%.',
    techStack: ['Python', 'AI Integration', 'Node.js'],
    link: '#project-01'
  },
  { 
    id: '02', 
    title: 'Smart Wallet', 
    category: 'FinTech', 
    description: 'Next-gen financial tracker for modern users.',
    role: 'Product Designer & Developer',
    result: 'Improved user retention by 30% via intuitive UX.',
    techStack: ['React Native', 'Firebase', 'Redux'],
    link: '#project-02'
  },
  { 
    id: '03', 
    title: 'Amar Barishal', 
    category: 'App & UI', 
    description: 'City-wide digital ecosystem for community services.',
    role: 'Full-Stack Architect',
    result: 'Scaled to 10k+ local users within 6 months.',
    techStack: ['Flutter', 'MongoDB', 'Express'],
    link: '#project-03'
  },
  { 
    id: '04', 
    title: 'ChronoFlow', 
    category: 'Productivity', 
    description: 'AI activity logger for enterprise teams.',
    role: 'System Designer',
    result: 'Eliminated task tracking overhead for teams of 50+.',
    techStack: ['React', 'PostgreSQL', 'Python'],
    link: '#project-04'
  },
  { 
    id: '05', 
    title: 'E-Commerce Elite', 
    category: 'Web Application', 
    description: 'Scalable multivendor marketplace with headless architecture.',
    role: 'Lead Architect',
    result: 'Achieved <1s page load speed for 5k+ SKU catalog.',
    techStack: ['Next.js', 'Tailwind', 'Stripe'],
    link: '#project-05'
  },
  { 
    id: '06', 
    title: 'SecureNet Admin', 
    category: 'Security', 
    description: 'Custom Kali-based server management dashboard.',
    role: 'Security Engineer',
    result: 'Blocked 99.9% of brute-force attempts on private networks.',
    techStack: ['Linux Bash', 'Python', 'WebSockets'],
    link: '#project-06'
  }
];

export const TOOLS: Tool[] = [
  { 
    name: 'React.js', 
    tag: 'ENTERPRISE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    benefit: 'Building scalable, lightning-fast interfaces.'
  },
  { 
    name: 'Node.js', 
    tag: 'SCALABLE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    benefit: 'Efficient server-side performance for high traffic.'
  },
  { 
    name: 'Python', 
    tag: 'AUTOMATION', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    benefit: 'Automating complex business logic and AI.'
  },
  { 
    name: 'Flutter', 
    tag: 'MOBILE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    benefit: 'Native-feeling apps for iOS and Android.'
  },
  { 
    name: 'Photoshop', 
    tag: 'CREATIVE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
    benefit: 'Crafting high-end visual brand assets.'
  }
];

export const STATS: Stat[] = [
  { value: "3", suffix: "+", label: "Years Experience" },
  { value: "25", suffix: "+", label: "Projects Delivered" },
  { value: "100", suffix: "%", label: "Client Satisfaction" }, 
  { value: "24", suffix: "/7", label: "Strategic Support" }, 
];

export const PROCESS = [
  {
    step: "01",
    title: "Strategic Discovery",
    description: "I analyze your business bottlenecks to define a clear technical roadmap that ensures ROI."
  },
  {
    step: "02",
    title: "Interface Architecture",
    description: "Crafting professional UI/UX frameworks designed specifically for your target audience."
  },
  {
    step: "03",
    title: "Engineering Sprint",
    description: "Developing robust, scalable codebases using modern, secure industry standards."
  },
  {
    step: "04",
    title: "Optimization & Launch",
    description: "Rigorous testing and environment setup for a flawless, high-performance launch."
  }
];

export const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "CEO, TechSphere India",
    content: "Al-amin transformed our digital presence with a design that truly speaks to our premium customers. Highly professional and efficient."
  },
  {
    name: "Lee Wei",
    role: "Product Lead, SG Solutions",
    content: "The automation tools Al-amin built saved our team hours every week. His technical depth in Python and Node.js is impressive."
  },
  {
    name: "Ahmad Firdaus",
    role: "Marketing Director, KL Creatives",
    content: "Extraordinary attention to detail. He delivered a high-conversion landing page that doubled our lead generation in just a month."
  },
  {
    name: "Kenji Tanaka",
    role: "CTO, Tokyo Web Labs",
    content: "World-class engineering standards. The code is clean, documented, and extremely performant. Highly recommended."
  },
  {
    name: "Fatima Al-Sayed",
    role: "Founder, Dubai Startups",
    content: "Working with Al-amin was seamless. He understands the business goal behind every technical decision. A true partner."
  },
  {
    name: "Min-ji Kim",
    role: "UX Manager, Seoul Interactive",
    content: "His ability to bridge the gap between design and development is rare. The UI/UX systems he crafts are top-tier."
  },
  {
    name: "Siddharth Gupta",
    role: "Managing Director, Bangalore FinTech",
    content: "Strategic, fast, and reliable. Al-amin is our go-to expert for any complex web application development."
  },
  {
    name: "Linh Nguyen",
    role: "E-commerce Head, Hanoi Retail",
    content: "Our online sales skyrocketed after the redesign. The site is lightning fast and mobile experience is flawless."
  },
  {
    name: "Priya Sharma",
    role: "Creative Head, Mumbai Media",
    content: "Cinematic quality in every frame. His video editing and branding skills helped us launch our YouTube channel successfully."
  },
  {
    name: "Wei Chen",
    role: "IT Consultant, Shanghai Tech",
    content: "Technical mastery at its best. He solved our server security issues with professional Kali Linux administration."
  },
  {
    name: "Anjali Rao",
    role: "COO, Hyderabad Logistics",
    content: "Simple and transparent process. We always knew exactly where the project stood. Delivered on time and within budget."
  },
  {
    name: "Hassan Sheikh",
    role: "Startup Mentor, Karachi Ventures",
    content: "Al-amin brings global standards to local projects. His vision for digital growth is exactly what startups need."
  },
  {
    name: "Zainab Al-Mulla",
    role: "Director, Kuwait Digital",
    content: "Impressive MERN stack expertise. Our complex dashboard works perfectly across all devices thanks to his architecture."
  },
  {
    name: "Somchai Sukhum",
    role: "Owner, Bangkok Hospitality",
    content: "The best developer we've worked with. He is responsive, polite, and most importantly, produces high-quality work."
  },
  {
    name: "Kartik Iyer",
    role: "Lead Designer, Pune Graphics",
    content: "His UI design skills are exceptional. He turned our vision into a stunning reality with perfect typography and layout."
  }
];
