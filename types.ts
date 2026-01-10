import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description?: string; 
  link?: string;
  tags?: string[]; // Tech stack tags
  image?: string; // New image property
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'Tech' | 'Creative' | 'Platform';
}

export interface Stat {
  value: string; // The number, e.g., "100"
  suffix?: string; // The symbol, e.g., "%" or "+"
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}