export enum CategoryType {
  DESIGN = 'Design',
  MODELS = 'Models',
  VIDEO = 'Video',
  CODING = 'Coding',
  RESEARCH = 'Research',
  AGENTS = 'Agents',
  VOICE = 'Voice',
  LABS = 'Labs',
  IMAGES = 'Images'
}

export type LanguageCode = 'en' | 'he' | 'zh' | 'hi' | 'de' | 'es' | 'fr';

export interface TutorialStep {
  title: string;
  description: string;
  codeSnippet?: string;
  actionLabel?: string;
}

export interface GoogleToolContent {
  name: string;
  description: string;
  features: string[];
  useCases: string[];
  advancedFeatures: string[];
  tutorial: TutorialStep[];
}

export interface GoogleTool {
  id: string;
  category: CategoryType;
  icon: string;
  link: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  relatedTools: string[];
  // Translatable content is handled via i18n lookup using the id
}

export interface CourseModule {
  id: string;
  title: string;
  category: CategoryType;
  tools: string[];
  estimatedTime: string;
}