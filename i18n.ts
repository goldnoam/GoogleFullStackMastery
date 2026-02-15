import { LanguageCode, GoogleToolContent } from './types';

export const TRANSLATIONS: Record<LanguageCode, any> = {
  en: {
    title: "Google Full Stack Mastery",
    subtitle: "Experience the Future of Development",
    description: "The ultimate hyper-colorful hub for developers to explore the Google ecosystem. Dive into an interactive journey of AI, Design, and Scalability.",
    searchPlaceholder: "Search tools, models, documentation...",
    allCategories: "All Tools",
    startTutorial: "Launch Module",
    footerText: "CRAFTED WITH HIGH-OCTANE CREATIVITY AND GEMINI AI",
    score: "XP",
    resume: "Continue Learning",
    collectNodes: "NAVIGATE THE AI KNOWLEDGE GRAPH",
    relatedTools: "Synergistic Tools",
    useCases: "Real-world Power",
    advancedFeatures: "Pro Capabilities",
    miniTutorial: "Interactive Fast-Track",
    complete: "Mastered",
    visitDocs: "Official Resources",
    dir: "ltr",
    tools: {
      'gemini-api': {
        name: 'Gemini API',
        description: 'The foundation for multimodal AI integration, enabling reasoning across text, images, and code.',
        features: ['1M+ Context Window', 'Function Calling', 'Multimodal Understanding'],
        useCases: ['Intelligent Agents', 'Automated Content Creation', 'Data Analysis'],
        advancedFeatures: ['System Instructions', 'Safety Settings Tuning', 'JSON Schema Output'],
        tutorial: [
          { title: 'Auth', description: 'Acquire your unique API Key from Google AI Studio.' },
          { title: 'Connect', description: 'Initialize the Generative AI client in your project.' },
          { title: 'Prompt', description: 'Send your first multimodal request to the Gemini model.' }
        ]
      },
      'notebook-llm': {
        name: 'NotebookLM',
        description: 'An AI-native research assistant that ground its knowledge in your personal documents.',
        features: ['Audio Overviews', 'Source Grounding', 'Multi-document Synthesis'],
        useCases: ['Research Summarization', 'Complex Project Planning', 'Learning New Domains'],
        advancedFeatures: ['YouTube & Web Source Support', 'Shared Notebooks', 'Citation Verification'],
        tutorial: [
          { title: 'Ingest', description: 'Upload PDFs, paste URLs, or link Google Drive files.' },
          { title: 'Explore', description: 'Ask questions that are answered strictly using your sources.' },
          { title: 'Listen', description: 'Generate a Deep Dive audio overview for hands-free learning.' }
        ]
      },
      'gemini-pro-vision': {
        name: 'Gemini Pro Vision',
        description: 'Specialized model for understanding visual inputs and providing descriptive reasoning.',
        features: ['Object Detection', 'Spatial Awareness', 'Image Content Labeling'],
        useCases: ['Visual Search', 'Digital Accessibility', 'Product Categorization'],
        advancedFeatures: ['Video Input Support', 'High-Res Image Reasoning'],
        tutorial: [
          { title: 'Prepare', description: 'Select an image or video frame for analysis.' },
          { title: 'Prompting', description: 'Use specific prompts for spatial or descriptive tasks.' },
          { title: 'Output', description: 'Process the multimodal response into your application UI.' }
        ]
      },
      'veo-3': {
        name: 'Veo',
        description: 'Google\'s most capable generative video model for high-quality cinematic clips.',
        features: ['1080p Resolution', 'Cinematic Fluidity', 'Temporal Consistency'],
        useCases: ['Creative Advertising', 'Social Content', 'Visual Storytelling'],
        advancedFeatures: ['Dynamic Camera Control', 'Stylistic Consistency'],
        tutorial: [
          { title: 'Prompt', description: 'Describe the motion, subject, and lighting in detail.' },
          { title: 'Generate', description: 'Initiate the video generation process via API.' },
          { title: 'Refine', description: 'Iterate on the prompt to achieve perfect cinematic flow.' }
        ]
      },
      'gentype': {
        name: 'GenType',
        description: 'Create unique, fully generative alphabet sets based on any visual concept or object.',
        features: ['Custom Glyphs', 'Style Persistence', 'Vector Export'],
        useCases: ['Logo Design', 'Unique Branding', 'Artistic Typography'],
        advancedFeatures: ['Material consistency', 'Batch character rendering'],
        tutorial: [
          { title: 'Concept', description: 'Choose a material or object (e.g., "Neon Tubes").' },
          { title: 'Render', description: 'Watch AI generate the full alphabet in that style.' },
          { title: 'Deploy', description: 'Use your custom typography in design projects.' }
        ]
      },
      'gemini-live': {
        name: 'Gemini Live',
        description: 'Seamless, high-speed voice-to-voice interaction for natural AI conversations.',
        features: ['Ultra-low Latency', 'Human-like Voice', 'Interruption Handling'],
        useCases: ['Voice Assistants', 'Interactive Tutoring', 'Language Practice'],
        advancedFeatures: ['Multiple Voice Personalities', 'Context Continuity'],
        tutorial: [
          { title: 'Session', description: 'Open a persistent voice connection to the Gemini endpoint.' },
          { title: 'Interact', description: 'Speak naturally; the model processes audio in real-time.' },
          { title: 'Close', description: 'Properly terminate the session to save resources.' }
        ]
      },
      'imagen-4': {
        name: 'Imagen 4',
        description: 'State-of-the-art text-to-image generation with unparalleled photorealism.',
        features: ['Photorealism', 'Complex Prompt Adherence', 'High Fidelity'],
        useCases: ['UI/UX Mockups', 'Marketing Assets', 'Conceptual Art'],
        advancedFeatures: ['In-painting', 'Out-painting', 'Style Reference Injection'],
        tutorial: [
          { title: 'Draft', description: 'Write a descriptive prompt including lighting and camera angles.' },
          { title: 'Scale', description: 'Adjust aspect ratios and quality settings.' },
          { title: 'Edit', description: 'Use AI editing tools to modify specific image parts.' }
        ]
      },
      'illuminate': {
        name: 'Illuminate',
        description: 'Transform dense academic papers and articles into engaging audio discussions.',
        features: ['AI Voice Synthesis', 'Content Distillation', 'Engaging Narratives'],
        useCases: ['Learning on the Go', 'Content Repurposing', 'Accessibility'],
        advancedFeatures: ['Speaker customization', 'Key takeaway highlighting'],
        tutorial: [
          { title: 'Source', description: 'Provide a link or upload a complex research paper.' },
          { title: 'Process', description: 'Wait for the AI to distill the content into a script.' },
          { title: 'Listen', description: 'Stream the generated audio discussion instantly.' }
        ]
      },
      'vertex-ai-agent-builder': {
        name: 'Vertex AI Agent Builder',
        description: 'A platform to build and deploy enterprise-ready AI agents at scale.',
        features: ['Low-code Interface', 'RAG Integration', 'Model Orchestration'],
        useCases: ['Customer Support Bots', 'Internal Tool Agents', 'Expert Systems'],
        advancedFeatures: ['Custom Tools', 'Enterprise Security Controls', 'Monitoring'],
        tutorial: [
          { title: 'Design', description: 'Map out the goals and capabilities of your agent.' },
          { title: 'Train', description: 'Connect your business data as a knowledge base.' },
          { title: 'Deploy', description: 'Expose the agent via API or web widget.' }
        ]
      },
      'imagefx': {
        name: 'ImageFX',
        description: 'A playground for creative image generation with intuitive chip-based prompting.',
        features: ['Creative Chips', 'Rapid Iteration', 'High Quality Rendering'],
        useCases: ['Exploratory Design', 'Moodboarding', 'Asset Creation'],
        advancedFeatures: ['Selective focus adjustment', 'Stylistic presets'],
        tutorial: [
          { title: 'Explore', description: 'Start with a simple prompt and use chips to vary it.' },
          { title: 'Compare', description: 'View multiple variations side-by-side.' },
          { title: 'Save', description: 'Download your high-res creative assets.' }
        ]
      },
      'textfx': {
        name: 'TextFX',
        description: 'AI tools for writers and wordsmiths to expand creative horizons and lyricism.',
        features: ['Simile Generator', 'Alliteration Tool', 'Explosion/Unfold'],
        useCases: ['Songwriting', 'Creative Writing', 'Branding & Slogans'],
        advancedFeatures: ['Semantic expansion', 'Style emulation'],
        tutorial: [
          { title: 'Select', description: 'Choose a tool like "Simile" or "Chain".' },
          { title: 'Input', description: 'Enter a keyword or a core idea.' },
          { title: 'Compose', description: 'Incorporate the AI variations into your writing.' }
        ]
      },
      'videofx': {
        name: 'VideoFX',
        description: 'Experimental tools for cinematic video generation and editing.',
        features: ['Text-to-Video', 'Style Transfer', 'Motion Control'],
        useCases: ['Film Prototyping', 'Artistic Visuals', 'Digital Art'],
        advancedFeatures: ['Frame interpolation', 'Loop generation'],
        tutorial: [
          { title: 'Theme', description: 'Select a visual style or artistic direction.' },
          { title: 'Prompt', description: 'Define the movement and key elements.' },
          { title: 'Export', description: 'Generate and download your creative video.' }
        ]
      },
      'say-what-you-see': {
        name: 'Say What You See',
        description: 'An interactive game to master the art of image prompting through AI feedback.',
        features: ['Prompt Feedback', 'Visual Puzzles', 'Skill Progression'],
        useCases: ['Prompt Engineering Training', 'Educational Games', 'AI Literacy'],
        advancedFeatures: ['Level difficulty scaling', 'Real-time image gen'],
        tutorial: [
          { title: 'Observe', description: 'Look at the target image provided.' },
          { title: 'Describe', description: 'Write a prompt to recreate that image.' },
          { title: 'Refine', description: 'Adjust your prompt based on the AI similarity score.' }
        ]
      },
      'gemini-cli': {
        name: 'Gemini CLI',
        description: 'Interacting with Gemini models directly from your terminal environment.',
        features: ['Fast Iteration', 'Shell Integration', 'Scriptable AI'],
        useCases: ['Dev Workflow Automation', 'Log Analysis', 'Quick AI Queries'],
        advancedFeatures: ['Pipe support', 'Configurable models'],
        tutorial: [
          { title: 'Install', description: 'Install the CLI tool via npm or your package manager.' },
          { title: 'Config', description: 'Set up your API Key environment variable.' },
          { title: 'Run', description: 'Execute "gemini ask" followed by your query.' }
        ]
      },
      'firebase': {
        name: 'Firebase AI',
        description: 'Accelerate app development with built-in AI extensions and serverless power.',
        features: ['AI Extensions', 'Real-time DB', 'Cloud Functions'],
        useCases: ['Mobile Apps', 'Modern Web Apps', 'Real-time Features'],
        advancedFeatures: ['Semantic Search with vector embeddings', 'Automated Content Moderation'],
        tutorial: [
          { title: 'Project', description: 'Create a new project in the Firebase Console.' },
          { title: 'Extend', description: 'Enable AI Extensions like "Multimodal Sentiment Analysis".' },
          { title: 'Code', description: 'Integrate the Firebase SDK into your frontend.' }
        ]
      },
      'project-idx': {
        name: 'Project IDX',
        description: 'A cloud-native, AI-powered developer environment for high-velocity coding.',
        features: ['AI Coding Assistant', 'Multiplatform Templates', 'Cloud Previews'],
        useCases: ['Full Stack Development', 'Rapid Prototyping', 'Remote Coding'],
        advancedFeatures: ['Firebase deployment integration', 'Android/iOS emulators in browser'],
        tutorial: [
          { title: 'Launch', description: 'Open idx.google.com and create a workspace.' },
          { title: 'Develop', description: 'Use built-in AI to explain or generate code blocks.' },
          { title: 'Preview', description: 'View your app running in a virtual mobile or web frame.' }
        ]
      },
      'deep-think': {
        name: 'Deep Think',
        description: 'Advanced reasoning models designed for complex logical and scientific challenges.',
        features: ['Chain of Thought Reasoning', 'Logical Verification', 'Complex Math Solving'],
        useCases: ['Scientific Research', 'Complex Coding Debugging', 'Decision Support'],
        advancedFeatures: ['Step-by-step transparency', 'High-confidence verification'],
        tutorial: [
          { title: 'Challenge', description: 'Submit a complex multi-step problem.' },
          { title: 'Analysis', description: 'Wait as the model explores multiple reasoning paths.' },
          { title: 'Solution', description: 'Review the detailed logical breakdown of the answer.' }
        ]
      },
      'google-deepmind': {
        name: 'Google DeepMind',
        description: 'The cutting-edge research arm driving general AI breakthroughs like AlphaFold.',
        features: ['Scientific Innovation', 'General AI Research', 'Breakthrough Models'],
        useCases: ['Bioinformatics', 'Climate Science', 'Fundamental AI Research'],
        advancedFeatures: ['Reinforcement Learning', 'Neural Architecture Search'],
        tutorial: [
          { title: 'Explore', description: 'Visit DeepMind technologies to find specialized models.' },
          { title: 'Integration', description: 'Use research-backed APIs in your specialized apps.' },
          { title: 'Stay Updated', description: 'Follow the blog for the latest in AGI progress.' }
        ]
      },
      'mediapipe': {
        name: 'MediaPipe',
        description: 'Cross-platform ML solutions for live and streaming media processing.',
        features: ['Hand Tracking', 'Face Mesh', 'Object Detection'],
        useCases: ['AR Filters', 'Gesture Control', 'Video Analytics'],
        advancedFeatures: ['On-device inference', 'Optimized for mobile/web'],
        tutorial: [
          { title: 'Library', description: 'Import MediaPipe tasks for your platform (Web, Android, iOS).' },
          { title: 'Pipeline', description: 'Connect a video stream as input to the model.' },
          { title: 'Render', description: 'Draw the ML results (landmarks) on a canvas overlay.' }
        ]
      },
      'flow': {
        name: 'Flow',
        description: 'Interactive node-based visual logic playground from Google Labs.',
        features: ['Visual Nodes', 'Real-time Execution', 'Logic Flow'],
        useCases: ['Creative Coding', 'Prototyping', 'Algorithm Viz'],
        advancedFeatures: ['Neural components', 'Export to JS'],
        tutorial: [
          { title: 'Nodes', description: 'Connect logical blocks to build a flow.' },
          { title: 'Input', description: 'Feed data or sensors into the start node.' },
          { title: 'Output', description: 'Watch the visual result update in real-time.' }
        ]
      },
      'portraits': {
        name: 'Portraits',
        description: 'Professional-grade stylistic portrait generation using AI depth analysis.',
        features: ['Style Transfer', 'AI Lighting', 'Professional Retouch'],
        useCases: ['Profile Pictures', 'Artistic Avatars', 'Visual Branding'],
        advancedFeatures: ['Face mesh alignment', 'Deep depth sensing'],
        tutorial: [
          { title: 'Subject', description: 'Upload or capture a clear face photo.' },
          { title: 'Style', description: 'Choose from a variety of AI-driven artistic styles.' },
          { title: 'Refine', description: 'Adjust lighting and contrast for the perfect finish.' }
        ]
      },
      'mixboard': {
        name: 'Mixboard',
        description: 'AI-driven music arrangement tool for blending genres and stems with studio precision.',
        features: ['Genre Mixing', 'AI Arrangement', 'Real-time Blending'],
        useCases: ['Soundtrack Creation', 'Remixing', 'Music Discovery'],
        advancedFeatures: ['Stem separation', 'Tempo matching'],
        tutorial: [
          { title: 'Select Genres', description: 'Pick your two base styles.' },
          { title: 'Adjust Mix', description: 'Use the slider to blend the influences.' },
          { title: 'Export', description: 'Generate a high-quality audio clip.' }
        ]
      },
      'musicfx': {
        name: 'MusicFX',
        description: 'Transform textual ideas into high-fidelity music loops and full tracks.',
        features: ['Text-to-Music', 'Genre Fusion', 'BPM control'],
        useCases: ['Background Music', 'Ad Scoring', 'Personal Mixes'],
        advancedFeatures: ['Instrumental isolation', 'Infinite loops'],
        tutorial: [
          { title: 'Prompt', description: 'Describe the mood or instruments.' },
          { title: 'Extend', description: 'Generate variations and extensions.' },
          { title: 'Download', description: 'Get your unique AI-generated track.' }
        ]
      },
      'creative-canvas': {
        name: 'Creative Canvas (CC)',
        description: 'AI-powered whiteboard with visual sketch refinement and Gmail drafting support.',
        features: ['AI Sketch Assist', 'Infinite Space', 'Gmail Integration'],
        useCases: ['UI Prototyping', 'Team Brainstorming', 'Direct Email Drafting'],
        advancedFeatures: ['Collaborative real-time', 'Asset export'],
        tutorial: [
          { title: 'Sketching', description: 'Draw basic shapes and let AI refine them.' },
          { title: 'Ideation', description: 'Generate sticky notes via prompt.' },
          { title: 'Gmail Export', description: 'Send your canvas directly to a Gmail draft.' }
        ]
      },
      'stitch': {
        name: 'Stitch',
        description: 'Turn simple prompts or images into intricate desktop/mobile UI designs and frontend code, then refine via AI-chat and export to Figma.',
        features: ['AI UI Design', 'Frontend Code Export', 'Figma Integration'],
        useCases: ['Rapid Prototyping', 'UI/UX Ideation', 'Frontend Development'],
        advancedFeatures: ['Responsive layouts', 'Component library generation', 'React/HTML export'],
        tutorial: [
          { title: 'Prompt', description: 'Describe your UI or upload a reference image.' },
          { title: 'Refine', description: 'Use AI chat to iterate on layout, colors, and components.' },
          { title: 'Export', description: 'Export as clean frontend code or send to Figma.' }
        ]
      },
      'opal': {
        name: 'Opal',
        description: 'Advanced scientific synthesis AI for researchers and data analysts.',
        features: ['Scientific Reasoning', 'Data Analysis', 'Literature Review'],
        useCases: ['Thesis Support', 'Market Analysis', 'Drug Discovery'],
        advancedFeatures: ['Citation tracking', 'Hypothesis testing'],
        tutorial: [
          { title: 'Ingestion', description: 'Upload your research papers.' },
          { title: 'Synthesis', description: 'Ask cross-document questions.' },
          { title: 'Report', description: 'Generate a comprehensive summary.' }
        ]
      },
      'project-genie': {
        name: 'Project Genie',
        description: 'A foundation model that creates interactive 2D environments from single images or descriptions.',
        features: ['Environment Generation', 'Playable Characters', 'Neural Physics'],
        useCases: ['Game Prototyping', 'Visual Storytelling', 'Physics Simulations'],
        advancedFeatures: ['Action-conditioned video generation', 'Procedural game mechanics'],
        tutorial: [
          { title: 'Base', description: 'Provide a starting image or a textual world description.' },
          { title: 'Animate', description: 'The model generates a consistent interactive video frame.' },
          { title: 'Control', description: 'Input actions (WASD) to see how the neural environment reacts.' }
        ]
      }
    }
  },
  he: {
    title: "מאסטרי גוגל פול-סטאק",
    subtitle: "לחוות את עתיד הפיתוח",
    description: "מרכז צבעוני ותוסס למפתחים לחקירת המערכת של גוגל. צלול למסע אינטראקטיבי של AI, עיצוב וסקיילביליות.",
    searchPlaceholder: "חפש כלים, מודלים, דוקומנטציה...",
    allCategories: "כל הכלים",
    startTutorial: "הפעל מודול",
    footerText: "נוצר ביצירתיות רבה ובעזרת Gemini AI",
    score: "XP",
    resume: "המשך למידה",
    collectNodes: "נווט בגרף הידע של ה-AI",
    relatedTools: "כלים סינרגטיים",
    useCases: "כוח בעולם האמיתי",
    advancedFeatures: "יכולות למקצוענים",
    miniTutorial: "מסלול מהיר אינטראקטיבי",
    complete: "נלמד",
    visitDocs: "משאבים רשמיים",
    dir: "rtl",
    tools: {
      'notebook-llm': {
        name: 'NotebookLM',
        description: 'עוזר המחקר מבוסס ה-AI שלך שחושב יחד איתך, עכשיו עם Audio Overviews מהפכניים וביסוס מולטימוודאלי.',
        features: ['סקירות אודיו', 'ביסוס מקורות', 'קלט מולטימוודאלי', 'סינתזה עמוקה'],
        useCases: ['ניתוח מסמכים מורכבים', 'יצירת פודקאסטים', 'ניהול מחקר', 'מדריכי למידה אישיים'],
        advancedFeatures: ['אינטגרציה עם YouTube ואתרים', 'אימות ציטוטים', 'מחברות שיתופיות', 'שאלות ותשובות מודעות להקשר'],
        tutorial: [
          { title: 'הזנת מקורות', description: 'העלה קבצי PDF, הדבק כתובות אתרים או קשר Google Docs וסרטוני YouTube.' },
          { title: 'סקירת אודיו', description: 'צור פודקאסט חי של שני אנשים המסכם את המקורות שלך.' },
          { title: 'שאילתה עמוקה', description: 'שאל שאלות מורכבות עם ציטוטים מלאים כדי למנוע הזיות.' },
          { title: 'שיתוף מחברת', description: 'שתף פעולה בזמן אמת עם הצוות שלך על תובנות מסונתזות.' }
        ]
      }
    }
  },
  zh: { 
    title: "谷歌全栈精通",
    subtitle: "体验开发的未来",
    description: "一个为开发者打造的高色彩枢纽，探索谷歌生态系统。",
    tools: {}
  },
  hi: { 
    title: "गूगल फुल स्टैक मास्टरी",
    subtitle: "विकास के भविष्य का अनुभव करें",
    description: "गूगल पारिस्थितिकी तंत्र का पता लगाने के लिए डेवलपर्स के लिए एक उच्च-רנגי केंद्र।",
    tools: {}
  },
  de: { 
    title: "Google Full Stack Meisterschaft",
    subtitle: "Erleben Sie die Zukunft der Entwicklung",
    description: "Der ultimative farbenfrohe Hub für Entwickler.",
    tools: {}
  },
  es: { 
    title: "Maestría en Google Full Stack",
    subtitle: "Experimenta el Futuro del Desarrollo",
    description: "El centro definitivo y colorido para desarrolladores.",
    tools: {}
  },
  fr: { 
    title: "Maîtrise Google Full Stack",
    subtitle: "Découvrez le futur du développement",
    description: "Le hub ultime et coloré pour les développeurs.",
    tools: {}
  }
};

export const getLocalizedTool = (id: string, lang: LanguageCode): GoogleToolContent => {
  const content = TRANSLATIONS[lang]?.tools?.[id] || TRANSLATIONS['en']?.tools?.[id];
  if (!content) {
    return {
      name: id,
      description: 'Localization missing',
      features: [],
      useCases: [],
      advancedFeatures: [],
      tutorial: []
    };
  }
  return content;
};