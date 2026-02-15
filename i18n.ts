
import { LanguageCode, GoogleToolContent } from './types';

// Fixed missing properties for LanguageCode to satisfy Record type
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
    codeExamples: "Practical Code Examples",
    complete: "Mastered",
    visitDocs: "Official Resources",
    filterLevel: "Difficulty Level",
    filterRelated: "Related To",
    allLevels: "All Levels",
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
        ],
        codeExamples: [
          {
            title: 'Basic Generation',
            language: 'typescript',
            code: `import { GoogleGenAI } from "@google/genai";\n\nconst ai = new GoogleGenAI({ apiKey: process.env.API_KEY });\nconst response = await ai.models.generateContent({\n  model: 'gemini-3-flash-preview',\n  contents: 'Tell me a story about a brave dev.',\n});\nconsole.log(response.text);`
          },
          {
            title: 'Multimodal Input',
            language: 'typescript',
            code: `const imagePart = { inlineData: { data: base64Data, mimeType: 'image/png' } };\nconst response = await ai.models.generateContent({\n  model: 'gemini-3-flash-preview',\n  contents: { parts: [imagePart, { text: 'Describe this image' }] },\n});`
          }
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
        ],
        codeExamples: [
          {
            title: 'Initialize App',
            language: 'javascript',
            code: `import { initializeApp } from "firebase/app";\nimport { getFirestore } from "firebase/firestore";\n\nconst firebaseConfig = { /* config */ };\nconst app = initializeApp(firebaseConfig);\nconst db = getFirestore(app);`
          }
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
        ],
        codeExamples: [
          {
            title: 'Dev Configuration (dev.nix)',
            language: 'nix',
            code: `{\n  pkgs,\n  idx,\n  ...\n}: {\n  channel = "stable-23.11";\n  packages = [ pkgs.nodejs_20 ];\n  idx.extensions = [ "esbenp.prettier-vscode" ];\n}`
          }
        ]
      },
      'gemini-cli': {
        name: 'Gemini CLI',
        description: 'Supercharge your terminal with the Gemini CLI. A powerful tool to interact with Google\'s state-of-the-art models directly from your shell.',
        features: ['Shell-native AI prompting', 'Multimodal file support', 'Fast local execution', 'Custom environment integration'],
        useCases: ['Automated code reviews via script', 'Batch processing of documentation', 'Real-time terminal-based Q&A', 'CI/CD pipeline AI integration'],
        advancedFeatures: ['Support for system instructions', 'Pipe output directly to other tools', 'Configurable safety thresholds', 'Streaming response support'],
        tutorial: [
          { title: 'Installation', description: 'Install globally via npm to get the gemini command in your path.', codeSnippet: 'npm install -g @google/generative-ai-cli' },
          { title: 'API Configuration', description: 'Export your Gemini API Key as an environment variable for secure access.', codeSnippet: 'export GOOGLE_API_KEY="your_api_key_here"' },
          { title: 'Interactive Chat', description: 'Start an interactive session or send one-off prompts directly.', codeSnippet: 'gemini chat' },
          { title: 'File Analysis', description: 'Pass files to the CLI for instant analysis or code explanation.', codeSnippet: 'gemini ask "Explain this code" --file src/App.tsx' }
        ],
        codeExamples: [
          {
            title: 'Bash Integration',
            language: 'bash',
            code: `cat logs.txt | gemini ask "Summarize the errors found in these logs" > analysis.md`
          }
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
    relatedTools: "כלים משלימים",
    useCases: "כוח בעולם האמיתי",
    advancedFeatures: "יכולות מקצועיות",
    miniTutorial: "מסלול מהיר אינטראקטיבי",
    codeExamples: "דוגמאות קוד מעשיות",
    complete: "נשלם",
    visitDocs: "משאבים רשמיים",
    filterLevel: "רמת קושי",
    filterRelated: "קשור ל-",
    allLevels: "כל הרמות",
    dir: "rtl",
    tools: {}
  },
  zh: {
    title: "Google 全栈大师",
    subtitle: "体验开发的未来",
    description: "面向开发者的终极色彩中心。深入 AI、设计和可扩展性的互动之旅。",
    searchPlaceholder: "搜索工具、模型、文档...",
    allCategories: "所有工具",
    startTutorial: "启动模块",
    relatedTools: "协同工具",
    useCases: "实际应用",
    advancedFeatures: "高级功能",
    miniTutorial: "互动快速入门",
    codeExamples: "实用代码示例",
    complete: "已掌握",
    visitDocs: "官方资源",
    filterLevel: "难度等级",
    filterRelated: "相关于",
    allLevels: "所有级别",
    dir: "ltr",
    tools: {}
  },
  hi: {
    title: "Google फुल स्टैक मास्टरी",
    subtitle: "विकास के भविष्य का अनुभव करें",
    description: "डेवलपर्स के लिए अंतिम रंगीन केंद्र। AI, डिज़ाइन और स्केलेबिलिटी की इंटरैक्टिव यात्रा में गोता लगाएँ।",
    searchPlaceholder: "खोज उपकरण, मॉडल, दस्तावेज़...",
    allCategories: "सभी उपकरण",
    startTutorial: "लॉन्च मॉड्यूल",
    relatedTools: "सहक्रियात्मक उपकरण",
    useCases: "वास्तविक दुनिया की शक्ति",
    advancedFeatures: "प्रो क्षमताएं",
    miniTutorial: "इंटरैक्टिव फास्ट-ट्रैक",
    codeExamples: "व्यावहारिक कोड उदाहरण",
    complete: "महारत हासिल की",
    visitDocs: "आधिकारिक संसाधन",
    filterLevel: "कठिनाई स्तर",
    filterRelated: "से संबंधित",
    allLevels: "सभी स्तर",
    dir: "ltr",
    tools: {}
  },
  de: {
    title: "Google Full Stack Meisterschaft",
    subtitle: "Erleben Sie die Zukunft der Entwicklung",
    description: "Das ultimative Hub für Entwickler. Tauchen Sie ein in eine interaktive Reise durch KI, Design und Skalierbarkeit.",
    searchPlaceholder: "Suche Tools, Modelle, Dokumentation...",
    allCategories: "Alle Tools",
    startTutorial: "Modul starten",
    relatedTools: "Synergie-Tools",
    useCases: "Echtzeit-Power",
    advancedFeatures: "Pro-Funktionen",
    miniTutorial: "Interaktiver Schnellkurs",
    codeExamples: "Praktische Codebeispiele",
    complete: "Gelernt",
    visitDocs: "Offizielle Ressourcen",
    filterLevel: "Schwierigkeitsgrad",
    filterRelated: "Bezogen auf",
    allLevels: "Alle Ebenen",
    dir: "ltr",
    tools: {}
  },
  es: {
    title: "Maestría Full Stack de Google",
    subtitle: "Experimenta el futuro del desarrollo",
    description: "El centro definitivo para desarrolladores. Sumérgete en un viaje interactivo de IA, diseño y escalabilidad.",
    searchPlaceholder: "Buscar herramientas, modelos, documentación...",
    allCategories: "Todas las herramientas",
    startTutorial: "Lanzar módulo",
    relatedTools: "Herramientas sinérgicas",
    useCases: "Poder del mundo real",
    advancedFeatures: "Capacidades Pro",
    miniTutorial: "Vía rápida interactiva",
    codeExamples: "Ejemplos de código prácticos",
    complete: "Dominado",
    visitDocs: "Recursos oficiales",
    filterLevel: "Nivel de dificultad",
    filterRelated: "Relacionado con",
    allLevels: "Todos los niveles",
    dir: "ltr",
    tools: {}
  },
  fr: {
    title: "Maîtrise Full Stack Google",
    subtitle: "Découvrez l'avenir du développement",
    description: "Le centre ultime pour les développeurs. Plongez dans un voyage interactif d'IA, de design et de scalabilité.",
    searchPlaceholder: "Rechercher des outils, modèles, documentation...",
    allCategories: "Tous les outils",
    startTutorial: "Lancer le module",
    relatedTools: "Outils synergiques",
    useCases: "Puissance réelle",
    advancedFeatures: "Capacités Pro",
    miniTutorial: "Accès rapide interactif",
    codeExamples: "Exemples de code pratiques",
    complete: "Maîtrisé",
    visitDocs: "Ressources officielles",
    filterLevel: "Niveau de difficulté",
    filterRelated: "Lié à",
    allLevels: "Tous les niveaux",
    dir: "ltr",
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
