
import React from 'react';
import { 
  Palette, 
  Cpu, 
  Video, 
  Code, 
  Search, 
  Bot, 
  Mic2, 
  Zap, 
  FlaskConical, 
  ImageIcon,
} from 'lucide-react';
import { CategoryType, GoogleTool } from './types';

export const CATEGORIES = [
  { type: CategoryType.DESIGN, icon: <Palette className="w-5 h-5" />, color: 'bg-gradient-to-br from-rose-500 to-pink-600', border: 'border-rose-500/30', shadow: 'shadow-rose-500/20' },
  { type: CategoryType.MODELS, icon: <Cpu className="w-5 h-5" />, color: 'bg-gradient-to-br from-blue-500 to-indigo-600', border: 'border-blue-500/30', shadow: 'shadow-blue-500/20' },
  { type: CategoryType.VIDEO, icon: <Video className="w-5 h-5" />, color: 'bg-gradient-to-br from-emerald-500 to-teal-600', border: 'border-emerald-500/30', shadow: 'shadow-emerald-500/20' },
  { type: CategoryType.IMAGES, icon: <ImageIcon className="w-5 h-5" />, color: 'bg-gradient-to-br from-orange-400 to-amber-600', border: 'border-orange-500/30', shadow: 'shadow-orange-500/20' },
  { type: CategoryType.CODING, icon: <Code className="w-5 h-5" />, color: 'bg-gradient-to-br from-amber-400 to-yellow-600', border: 'border-yellow-500/30', shadow: 'shadow-yellow-500/20' },
  { type: CategoryType.RESEARCH, icon: <Search className="w-5 h-5" />, color: 'bg-gradient-to-br from-sky-400 to-blue-600', border: 'border-sky-500/30', shadow: 'shadow-sky-500/20' },
  { type: CategoryType.AGENTS, icon: <Bot className="w-5 h-5" />, color: 'bg-gradient-to-br from-red-500 to-orange-600', border: 'border-red-500/30', shadow: 'shadow-red-500/20' },
  { type: CategoryType.VOICE, icon: <Mic2 className="w-5 h-5" />, color: 'bg-gradient-to-br from-green-500 to-emerald-600', border: 'border-green-500/30', shadow: 'shadow-green-500/20' },
  { type: CategoryType.LABS, icon: <FlaskConical className="w-5 h-5" />, color: 'bg-gradient-to-br from-fuchsia-500 to-purple-700', border: 'border-purple-500/30', shadow: 'shadow-purple-500/20' },
];

export const GOOGLE_TOOLS: GoogleTool[] = [
  // MODELS
  {
    id: 'gemini-3-flash',
    category: CategoryType.MODELS,
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    link: 'https://ai.google.dev',
    level: 'Advanced',
    relatedTools: ['gemini-3-pro', 'gemini-3-flash-lite']
  },
  {
    id: 'gemini-3-flash-lite',
    category: CategoryType.MODELS,
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    link: 'https://ai.google.dev',
    level: 'Intermediate',
    relatedTools: ['gemini-3-flash']
  },
  {
    id: 'gemini-3-pro',
    category: CategoryType.MODELS,
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    link: 'https://ai.google.dev',
    level: 'Advanced',
    relatedTools: ['gemini-deep-research', 'gemma']
  },
  {
    id: 'gemini-deep-research',
    category: CategoryType.MODELS,
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    link: 'https://deepmind.google',
    level: 'Advanced',
    relatedTools: ['gemini-3-pro', 'notebook-llm']
  },
  {
    id: 'gemma',
    category: CategoryType.MODELS,
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    link: 'https://ai.google.dev/gemma',
    level: 'Intermediate',
    relatedTools: ['gemini-3-pro', 'google-deepmind']
  },

  // VIDEO
  {
    id: 'veo-3-1',
    category: CategoryType.VIDEO,
    icon: 'https://www.gstatic.com/images/branding/product/2x/video_96dp.png',
    link: 'https://deepmind.google/technologies/veo/',
    level: 'Advanced',
    relatedTools: ['flow', 'google-vids', 'imagen-4']
  },
  {
    id: 'flow',
    category: CategoryType.VIDEO,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://labs.google/flow',
    level: 'Intermediate',
    relatedTools: ['veo-3-1', 'videofx']
  },
  {
    id: 'google-vids',
    category: CategoryType.VIDEO,
    icon: 'https://www.gstatic.com/images/branding/product/2x/video_96dp.png',
    link: 'https://workspace.google.com/products/vids/',
    level: 'Beginner',
    relatedTools: ['google-meet', 'flow']
  },
  {
    id: 'videofx',
    category: CategoryType.VIDEO,
    icon: 'https://www.gstatic.com/images/branding/product/2x/video_96dp.png',
    link: 'https://labs.google/videofx',
    level: 'Advanced',
    relatedTools: ['veo-3-1', 'imagefx']
  },

  // IMAGES
  {
    id: 'imagen-4',
    category: CategoryType.IMAGES,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://ai.google.dev/imagen',
    level: 'Advanced',
    relatedTools: ['imagefx', 'nanobanana', 'veo-3-1']
  },

  // DESIGN
  {
    id: 'stitch-design',
    category: CategoryType.DESIGN,
    icon: 'https://www.gstatic.com/images/branding/product/2x/video_96dp.png',
    link: 'https://labs.google/stitch',
    level: 'Advanced',
    relatedTools: ['whisk', 'nanobanana']
  },
  {
    id: 'whisk',
    category: CategoryType.DESIGN,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://labs.google/whisk',
    level: 'Intermediate',
    relatedTools: ['stitch-design', 'nanobanana']
  },
  {
    id: 'nanobanana',
    category: CategoryType.DESIGN,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://labs.google/nanobanana',
    level: 'Beginner',
    relatedTools: ['whisk', 'stitch-design', 'imagen-4']
  },

  // CODING
  {
    id: 'gemini-cli',
    category: CategoryType.CODING,
    icon: 'https://www.gstatic.com/images/branding/product/2x/chrome_96dp.png',
    link: 'https://github.com/google/generative-ai-cli',
    level: 'Intermediate',
    relatedTools: ['gemini-3-pro', 'antigravity']
  },
  {
    id: 'antigravity',
    category: CategoryType.CODING,
    icon: 'https://idx.dev/static/images/idx-logo.png',
    link: 'https://labs.google/antigravity',
    level: 'Advanced',
    relatedTools: ['gemini-cli', 'jules']
  },
  {
    id: 'jules',
    category: CategoryType.CODING,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://labs.google/jules',
    level: 'Advanced',
    relatedTools: ['antigravity', 'gemini-cli']
  },

  // AI AGENTS
  {
    id: 'google-adk',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://labs.google/adk',
    level: 'Advanced',
    relatedTools: ['google-a2a', 'filesearch-api']
  },
  {
    id: 'google-a2a',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://labs.google/a2a',
    level: 'Advanced',
    relatedTools: ['google-adk', 'ai-mode']
  },
  {
    id: 'creative-canvas',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://labs.google/cc',
    level: 'Beginner',
    relatedTools: ['google-meet', 'google-vids']
  },
  {
    id: 'google-meet',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/meet_96dp.png',
    link: 'https://meet.google.com',
    level: 'Beginner',
    relatedTools: ['google-vids', 'notebook-llm', 'illuminate', 'creative-canvas']
  },
  {
    id: 'filesearch-api',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/search_96dp.png',
    link: 'https://ai.google.dev/filesearch',
    level: 'Advanced',
    relatedTools: ['google-adk', 'notebook-llm']
  },
  {
    id: 'ai-mode',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/search_96dp.png',
    link: 'https://labs.google/aimode',
    level: 'Intermediate',
    relatedTools: ['google-a2a', 'gemini-3-pro']
  },

  // RESEARCH
  {
    id: 'notebook-llm',
    category: CategoryType.RESEARCH,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://notebooklm.google.com',
    level: 'Intermediate',
    relatedTools: ['pomelli', 'illuminate', 'google-meet']
  },
  {
    id: 'pomelli',
    category: CategoryType.RESEARCH,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://labs.google/pomelli',
    level: 'Intermediate',
    relatedTools: ['notebook-llm']
  },

  // LABS
  {
    id: 'mixboard',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/music_96dp.png',
    link: 'https://labs.google/mixboard',
    level: 'Intermediate',
    relatedTools: ['musicfx']
  },
  {
    id: 'musicfx',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/music_96dp.png',
    link: 'https://aitestkitchen.withgoogle.com/tools/music-fx',
    level: 'Beginner',
    relatedTools: ['mixboard', 'videofx']
  },
  {
    id: 'imagefx',
    category: CategoryType.IMAGES,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://aitestkitchen.withgoogle.com/tools/image-fx',
    level: 'Beginner',
    relatedTools: ['imagen-4', 'nanobanana']
  },
  {
    id: 'gentype',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://labs.google/gentype',
    level: 'Beginner',
    relatedTools: ['imagefx']
  },
  {
    id: 'textfx',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://textfx.withgoogle.com/',
    level: 'Intermediate',
    relatedTools: ['gemini-3-pro']
  },
  {
    id: 'illuminate',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://illuminate.withgoogle.com/',
    level: 'Intermediate',
    relatedTools: ['notebook-llm', 'google-meet']
  }
];
