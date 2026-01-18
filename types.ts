
import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description?: string; 
  link?: string;
  tags?: string[];
  image?: string;
  role?: string;
  result?: string;
  techStack?: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'Tech' | 'Creative' | 'Platform';
}

export interface Tool {
  name: string;
  tag: string;
  icon: string;
  benefit: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}
