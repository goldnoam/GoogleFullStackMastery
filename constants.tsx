
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
  {
    id: 'gemini-api',
    category: CategoryType.MODELS,
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    link: 'https://ai.google.dev',
    level: 'Advanced',
    relatedTools: ['notebook-llm', 'vertex-ai', 'project-idx']
  },
  {
    id: 'notebook-llm',
    category: CategoryType.RESEARCH,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://notebooklm.google.com',
    level: 'Intermediate',
    relatedTools: ['illuminate', 'gemini-api', 'google-deepmind']
  },
  {
    id: 'gemini-pro-vision',
    category: CategoryType.MODELS,
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    link: 'https://ai.google.dev',
    level: 'Advanced',
    relatedTools: ['gemini-api', 'google-cloud-ai']
  },
  {
    id: 'flow',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://labs.google/flow',
    level: 'Intermediate',
    relatedTools: ['creative-canvas', 'gemini-api']
  },
  {
    id: 'portraits',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://labs.google/portraits',
    level: 'Beginner',
    relatedTools: ['imagefx', 'imagen-4']
  },
  {
    id: 'veo-3',
    category: CategoryType.VIDEO,
    icon: 'https://lh3.googleusercontent.com/F-C9pE0Z8_Y9Q0X4X7v3L9=w128',
    link: 'https://deepmind.google/technologies/veo/',
    level: 'Advanced',
    relatedTools: ['imagen-4', 'videofx']
  },
  {
    id: 'gentype',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://labs.google/gentype',
    level: 'Beginner',
    relatedTools: ['imagefx', 'imagen-4']
  },
  {
    id: 'mixboard',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/music_96dp.png',
    link: 'https://labs.google/mixboard',
    level: 'Intermediate',
    relatedTools: ['musicfx', 'gemini-tts']
  },
  {
    id: 'musicfx',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/music_96dp.png',
    link: 'https://aitestkitchen.withgoogle.com/tools/music-fx',
    level: 'Beginner',
    relatedTools: ['videofx', 'gemini-tts']
  },
  {
    id: 'project-genie',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://deepmind.google/technologies/genie/',
    level: 'Advanced',
    relatedTools: ['veo-3', 'mediapipe']
  },
  {
    id: 'opal',
    category: CategoryType.RESEARCH,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://labs.google/opal',
    level: 'Advanced',
    relatedTools: ['deep-think', 'notebook-llm']
  },
  {
    id: 'stitch',
    category: CategoryType.DESIGN,
    icon: 'https://www.gstatic.com/images/branding/product/2x/video_96dp.png',
    link: 'https://labs.google/stitch',
    level: 'Intermediate',
    relatedTools: ['project-idx', 'material-design']
  },
  {
    id: 'creative-canvas',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://labs.google/cc',
    level: 'Beginner',
    relatedTools: ['material-design', 'google-docs']
  },
  {
    id: 'gemini-live',
    category: CategoryType.VOICE,
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    link: 'https://ai.google.dev',
    level: 'Advanced',
    relatedTools: ['musicfx', 'google-duo']
  },
  {
    id: 'imagen-4',
    category: CategoryType.IMAGES,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://deepmind.google/technologies/imagen-3/',
    level: 'Advanced',
    relatedTools: ['imagefx', 'veo-3']
  },
  {
    id: 'illuminate',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://illuminate.withgoogle.com/',
    level: 'Intermediate',
    relatedTools: ['notebook-llm', 'deep-think']
  },
  {
    id: 'vertex-ai-agent-builder',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/vertex_ai_96dp.png',
    link: 'https://cloud.google.com/vertex-ai-agent-builder',
    level: 'Advanced',
    relatedTools: ['gemini-api', 'google-cloud-ai']
  },
  {
    id: 'imagefx',
    category: CategoryType.IMAGES,
    icon: 'https://www.gstatic.com/images/branding/product/2x/photos_96dp.png',
    link: 'https://aitestkitchen.withgoogle.com/tools/image-fx',
    level: 'Beginner',
    relatedTools: ['imagen-4', 'say-what-you-see']
  },
  {
    id: 'textfx',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://textfx.withgoogle.com/',
    level: 'Intermediate',
    relatedTools: ['notebook-llm', 'gemini-api']
  },
  {
    id: 'videofx',
    category: CategoryType.VIDEO,
    icon: 'https://www.gstatic.com/images/branding/product/2x/video_96dp.png',
    link: 'https://labs.google/videofx',
    level: 'Advanced',
    relatedTools: ['veo-3', 'imagefx']
  },
  {
    id: 'say-what-you-see',
    category: CategoryType.LABS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://artsandculture.google.com/experiment/say-what-you-see/',
    level: 'Beginner',
    relatedTools: ['imagefx', 'imagen-4']
  },
  {
    id: 'gemini-cli',
    category: CategoryType.CODING,
    icon: 'https://www.gstatic.com/images/branding/product/2x/chrome_96dp.png',
    link: 'https://github.com/google/generative-ai-cli',
    level: 'Intermediate',
    relatedTools: ['gemini-api', 'project-idx']
  },
  {
    id: 'firebase',
    category: CategoryType.CODING,
    icon: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_96dp.png',
    link: 'https://firebase.google.com',
    level: 'Intermediate',
    relatedTools: ['google-cloud-ai', 'android-studio']
  },
  {
    id: 'project-idx',
    category: CategoryType.CODING,
    icon: 'https://idx.dev/static/images/idx-logo.png',
    link: 'https://idx.dev',
    level: 'Intermediate',
    relatedTools: ['firebase', 'gemini-api']
  },
  {
    id: 'deep-think',
    category: CategoryType.RESEARCH,
    icon: 'https://www.gstatic.com/images/branding/product/2x/docs_96dp.png',
    link: 'https://deepmind.google',
    level: 'Advanced',
    relatedTools: ['gemini-api', 'notebook-llm']
  },
  {
    id: 'google-deepmind',
    category: CategoryType.RESEARCH,
    icon: 'https://deepmind.google/static/images/favicon.png',
    link: 'https://deepmind.google',
    level: 'Advanced',
    relatedTools: ['deep-think', 'gemini-api']
  },
  {
    id: 'mediapipe',
    category: CategoryType.AGENTS,
    icon: 'https://www.gstatic.com/images/branding/product/2x/assistant_96dp.png',
    link: 'https://mediapipe.dev',
    level: 'Advanced',
    relatedTools: ['android-studio', 'gemini-api']
  }
];
