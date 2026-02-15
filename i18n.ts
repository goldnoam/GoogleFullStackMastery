
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
    codeExamples: "Practical Code Examples",
    complete: "Mastered",
    visitDocs: "Official Resources",
    filterLevel: "Difficulty Level",
    filterRelated: "Related To",
    filterFeature: "Core Feature",
    filterAdvancedFeature: "Pro Capability",
    allLevels: "All Levels",
    allFeatures: "All Features",
    allAdvancedFeatures: "All Capabilities",
    exportResults: "Export Search",
    clearInput: "Clear Search",
    dir: "ltr",
    tools: {
      'gemini-3-flash': {
        name: 'Gemini 3 Flash',
        description: 'Frontier intelligence built for speed efficiency. Optimized for high-throughput, low-latency tasks across multimodal inputs.',
        features: ['Real-time responses', 'Cost-effective scaling', 'Native multimodality'],
        useCases: ['High-volume chat applications', 'Real-time content moderation', 'Fast data extraction'],
        advancedFeatures: ['Fine-tuned token throughput', 'Optimized quantization'],
        tutorial: [{ title: 'Initialization', description: 'Configure the Flash model for low-latency streaming.' }],
        codeExamples: [{ title: 'Fast Stream', language: 'typescript', code: `const response = await ai.models.generateContentStream({ model: 'gemini-3-flash-preview', contents: 'Summarize this log...' });` }]
      },
      'gemini-3-flash-lite': {
        name: 'Gemini 3 Flash Lite',
        description: 'Even faster intelligence built for extreme speed. The ultimate model for sub-second agentic reasoning loops.',
        features: ['Ultra-low latency', 'Minimal compute footprint', 'Rapid context processing'],
        useCases: ['Reactive UI elements', 'Micro-agentic loops', 'Edge-compatible AI'],
        advancedFeatures: ['Smallest token footprint', 'Zero-shot efficiency'],
        tutorial: [{ title: 'Direct Prompting', description: 'Trigger lightning-fast logic from user events.' }],
        codeExamples: [{ title: 'Instant Response', language: 'typescript', code: `const res = await ai.models.generateContent({ model: 'gemini-3-flash-lite-latest', contents: 'Action: Clear screen.' });` }]
      },
      'gemini-3-pro': {
        name: 'Gemini 3 Pro',
        description: 'Most advanced reasoning model from Google. Designed for complex problem-solving, deep analysis, and sophisticated coding tasks.',
        features: ['Complex reasoning', 'Large context window', 'State-of-the-art vision'],
        useCases: ['Complex code refactoring', 'Scientific hypothesis generation', 'Multi-step agent planning'],
        advancedFeatures: ['Extended thinking budget', 'High-fidelity tool use'],
        tutorial: [{ title: 'Logic Chain', description: 'Use Chain of Thought to solve multi-variable problems.' }],
        codeExamples: [{ title: 'Deep Logic', language: 'typescript', code: `const res = await ai.models.generateContent({ model: 'gemini-3-pro-preview', contents: 'Analyze the trade-offs of this architecture...', config: { thinkingConfig: { thinkingBudget: 24000 } } });` }]
      },
      'gemini-deep-research': {
        name: 'Gemini (Deep Research)',
        description: 'Deeper thinking model for agent-enabled deep research. Excels at long-horizon planning and autonomous web-scale information synthesis.',
        features: ['Recursive research loops', 'Multi-source grounding', 'Self-correcting queries'],
        useCases: ['Market analysis', 'Legal research', 'Technical documentation synthesis'],
        advancedFeatures: ['Search grounding integration', 'Autonomous source verification'],
        tutorial: [{ title: 'Research Goal', description: 'Define a research objective and watch the model navigate sources.' }],
        codeExamples: [{ title: 'Research Call', language: 'typescript', code: `const res = await ai.models.generateContent({ model: 'gemini-3-pro-preview', contents: 'Research the impact of solid-state batteries on the automotive market.', config: { tools: [{googleSearch: {}}] } });` }]
      },
      'gemma': {
        name: 'Gemma',
        description: 'Lightweight open models from DeepMind research. Built from the same technology used for Gemini, perfect for custom deployment.',
        features: ['Open-weight availability', 'Easy fine-tuning', 'Fast local execution'],
        useCases: ['Local AI privacy', 'Specific task fine-tuning', 'Educational AI research'],
        advancedFeatures: ['LoRA support', 'Cross-platform compatibility'],
        tutorial: [{ title: 'Local Setup', description: 'Initialize Gemma using Keras or PyTorch.' }],
        codeExamples: [{ title: 'Model Load', language: 'python', code: `import keras_nlp\ngemma_lm = keras_nlp.models.GemmaCausalLM.from_preset("gemma_2b_en")` }]
      },
      'veo-3-1': {
        name: 'Veo 3.1',
        description: 'Highest quality video generation from text. Achieves cinematic quality with consistency across long sequences.',
        features: ['1080p cinematic output', 'Temporal consistency', 'Advanced camera controls'],
        useCases: ['High-end advertising', 'Film pre-visualization', 'Creative social content'],
        advancedFeatures: ['Direct frame manipulation', 'Style consistency masking'],
        tutorial: [{ title: 'Director Script', description: 'Write a cinematic prompt with specific lighting and lens details.' }],
        codeExamples: [{ title: 'Veo Script', language: 'typescript', code: `const op = await ai.models.generateVideos({ model: 'veo-3.1-generate-preview', prompt: 'Tracking shot through a futuristic forest, bioluminescent plants, anamorphic lens flares.' });` }]
      },
      'flow': {
        name: 'Flow',
        description: 'Cinematic clips and scenes storytelling tool. Orchestrate multiple AI-generated segments into a cohesive narrative.',
        features: ['Scene sequencing', 'Character consistency', 'Automated transitions'],
        useCases: ['Educational explainers', 'Short film production', 'Interactive storytelling'],
        advancedFeatures: ['Timeline-based generation', 'Audio-visual syncing'],
        tutorial: [{ title: 'Scene Flow', description: 'Build a three-act structure using Flow\'s visual interface.' }],
        codeExamples: [{ title: 'Flow Metadata', language: 'json', code: `{"scenes": [{"prompt": "Close up on hero", "duration": "3s"}, {"prompt": "Wide shot city", "duration": "5s"}]}` }]
      },
      'google-vids': {
        name: 'Google Vids',
        description: 'AI powered video creation for work. Streamlines video production for presentations, training, and team updates.',
        features: ['Workspace integration', 'Automatic script generation', 'Voiceover synthesis'],
        useCases: ['Internal training videos', 'Project pitch summaries', 'Onboarding walkthroughs'],
        advancedFeatures: ['Drive asset syncing', 'Team collaboration tools'],
        tutorial: [{ title: 'Project Start', description: 'Convert a Google Slide deck into a professional video.' }]
      },
      'stitch-design': {
        name: 'Stitch',
        description: 'Turn prompts into complex UI designs. A powerful design-to-code tool that respects brand systems and accessibility.',
        features: ['Component-based output', 'Material Design 3 native', 'Design system syncing'],
        useCases: ['Rapid UI iteration', 'Design-to-code handoff', 'Automated wireframing'],
        advancedFeatures: ['Figma export integration', 'Tailwind CSS generation'],
        tutorial: [{ title: 'Design Prompt', description: 'Describe a complex feature and get a ready-to-style layout.' }],
        codeExamples: [{ title: 'UI Description', language: 'text', code: `Prompt: A crypto wallet dashboard with a dark glassmorphism theme, real-time chart, and transaction list component.` }]
      },
      'whisk': {
        name: 'Whisk',
        description: 'Images as prompts to visualize ideas. Merges visual concepts into new, high-fidelity designs through image-to-image reasoning.',
        features: ['Visual concept blending', 'Structural image prompts', 'Style transfer'],
        useCases: ['Moodboard visualization', 'Product design iteration', 'Artistic concept merging'],
        advancedFeatures: ['Structure preservation', 'Semantic style injection'],
        tutorial: [{ title: 'Blend Mode', description: 'Upload two images to synthesize a combined aesthetic.' }]
      },
      'nanobanana': {
        name: 'Nanobanana',
        description: 'Image generation using Gemini reasoning knowledge. Uses advanced reasoning to understand complex spatial and semantic descriptions.',
        features: ['High semantic accuracy', 'Fine-grained detail control', 'Logical spatial layout'],
        useCases: ['Technical illustrations', 'Complex scene composition', 'Brand accurate imagery'],
        advancedFeatures: ['4K resolution support', 'Aspect ratio flexibility'],
        tutorial: [{ title: 'Detail Prompting', description: 'Use descriptive reasoning to guide the generation of complex scenes.' }],
        codeExamples: [{ title: 'Reasoned Prompt', language: 'typescript', code: `const res = await ai.models.generateContent({ model: 'gemini-3-pro-image-preview', contents: 'A blueprint of a solar-powered drone with detailed callouts for the carbon fiber fuselage.' });` }]
      },
      'gemini-cli': {
        name: 'Gemini CLI',
        description: 'Open source agent bringing Gemini models to your terminal. Integrate AI directly into your command-line workflows.',
        features: ['Terminal-native AI', 'Pipe and Redirect support', 'Scripting integration'],
        useCases: ['Log file analysis', 'Automated code fixes via shell', 'Terminal-based research'],
        advancedFeatures: ['Support for system instructions', 'Custom environment variables'],
        tutorial: [{ title: 'CLI Usage', description: 'Install and query your first files from the terminal.' }],
        codeExamples: [{ title: 'Terminal Command', language: 'bash', code: `cat package.json | gemini ask "What are the core dependencies and their versions?"` }]
      },
      'antigravity': {
        name: 'Antigravity',
        description: 'AI powered IDE with autonomous agents. A revolutionary workspace where agents proactively build, test, and refactor code.',
        features: ['Autonomous PRs', 'Self-healing dev loops', 'Agentic debugging'],
        useCases: ['Massive repo refactoring', 'Legacy migration automation', 'Proactive security patching'],
        advancedFeatures: ['Multi-agent coordination', 'Remote cloud environments'],
        tutorial: [{ title: 'Auto-Task', description: 'Assign an agent to upgrade your codebase to the latest framework version.' }]
      },
      'jules': {
        name: 'Jules',
        description: 'Asynchronous coding assistant for repositories. Works in the background to analyze PRs, document code, and optimize architecture.',
        features: ['Background code review', 'Auto-documentation', 'Technical debt identification'],
        useCases: ['Large-scale repo maintenance', 'Ensuring code standards', 'Onboarding assistance'],
        advancedFeatures: ['Deep repository context', 'Historical logic analysis'],
        tutorial: [{ title: 'Repo Analysis', description: 'Let Jules index your entire repository to provide context-aware insights.' }]
      },
      'google-adk': {
        name: 'Google ADK',
        description: 'Framework for developing scalable AI agents. A standardized protocol for building agents that can communicate and solve tasks.',
        features: ['Agent orchestration', 'Tool standardized interface', 'Memory management'],
        useCases: ['Enterprise AI agents', 'Multi-tool workflows', 'Autonomous task execution'],
        advancedFeatures: ['Safety protocol enforcement', 'Stateful agent persistence'],
        tutorial: [{ title: 'Agent Build', description: 'Define the tools and goals for your first scalable agent.' }],
        codeExamples: [{ title: 'ADK Setup', language: 'javascript', code: `const myAgent = ADK.createAgent({ tools: [GoogleSearch, DriveAccess], goal: 'Plan the quarterly budget' });` }]
      },
      'google-a2a': {
        name: 'Google A2A',
        description: 'Multi-Agent communication protocol irrespective of frameworks. Enables diverse AI agents to collaborate seamlessly.',
        features: ['Inter-agent communication', 'Unified protocol', 'Decentralized task sharing'],
        useCases: ['Complex multi-agent systems', 'Cross-platform AI collaboration', 'Agent-to-agent negotiation'],
        advancedFeatures: ['Conflict resolution logic', 'Standardized payload schema'],
        tutorial: [{ title: 'Agent Protocol', description: 'Configure two agents to share data and goals using A2A.' }]
      },
      'filesearch-api': {
        name: 'FileSearch API',
        description: 'Use an entire pre-built configurable RAG pipeline simply from an API. Ground your AI in your own data without custom vector infra.',
        features: ['Managed vector indexing', 'Semantic retrieval', 'Document parsing'],
        useCases: ['Custom knowledge bases', 'Internal document Q&A', 'Enterprise research portals'],
        advancedFeatures: ['Metadata filtering', 'Hybrid retrieval logic'],
        tutorial: [{ title: 'RAG Setup', description: 'Upload your documents and query them instantly via API.' }],
        codeExamples: [{ title: 'Search API', language: 'bash', code: `curl /v1/filesearch/query -d '{"query": "Policy on remote work", "namespace": "hr-docs"}'` }]
      },
      'ai-mode': {
        name: 'AI Mode',
        description: 'Advanced reasoning multimodality for powerful search. Enhances search results with deep semantic understanding and visual reasoning.',
        features: ['Reasoned search results', 'Multimodal grounding', 'Deep research synthesis'],
        useCases: ['Professional research', 'Visual search engine', 'Knowledge discovery'],
        advancedFeatures: ['Source transparency', 'Complex query decomposition'],
        tutorial: [{ title: 'Smart Search', description: 'Use complex, reasoned queries to find precisely what you need.' }]
      },
      'notebook-llm': {
        name: 'NotebookLM',
        description: 'AI powered research assistant organizing ideas. Grounds knowledge in your specific documents to create an intelligent workspace.',
        features: ['Source grounding', 'Automatic citations', 'Audio overview generation'],
        useCases: ['Literature reviews', 'Product requirement analysis', 'Learning complex new fields'],
        advancedFeatures: ['Multiple source types (PDF, Web, YouTube)', 'Collaborative notebooks'],
        tutorial: [{ title: 'Personal Grounding', description: 'Upload your research papers and ask for a cross-source summary.' }]
      },
      'pomelli': {
        name: 'Pomelli',
        description: 'Generates ideas on brand social campaigns. Specialized research and creative agent for marketing and social strategy.',
        features: ['Trend analysis', 'Brand voice alignment', 'Creative ideation'],
        useCases: ['Social media campaign planning', 'Content strategy research', 'Brand expansion brainstorming'],
        advancedFeatures: ['Cultural trend monitoring', 'Platform-specific optimization'],
        tutorial: [{ title: 'Campaign Ideation', description: 'Define your brand voice and target audience for a tailored strategy.' }]
      },
      'mixboard': {
        name: 'Mixboard',
        description: 'AI-powered music composition and mixing lab. Blend genres, adjust stems, and create unique tracks through high-level AI controls.',
        features: ['Multi-stem mixing', 'Genre fusion', 'Real-time synthesis'],
        useCases: ['Original soundtrack creation', 'Creative audio prototyping', 'Musical experimentation'],
        advancedFeatures: ['Direct MIDI export', 'AI orchestration control'],
        tutorial: [{ title: 'Create a Mix', description: 'Drag stems onto the board to synthesize your first unique AI track.' }]
      },
      'musicfx': {
        name: 'MusicFX',
        description: 'Text-to-music generation tool. Transform descriptive prompts into high-fidelity audio tracks with variable duration and style.',
        features: ['Descriptive prompting', 'Variable loop lengths', 'Style consistency'],
        useCases: ['Background music generation', 'Sample creation for producers', 'Atmospheric soundscapes'],
        advancedFeatures: ['Instrumental isolation', 'Seed-based generation'],
        tutorial: [{ title: 'Prompt to Beat', description: 'Type "Lo-fi beats for a cozy spaceship" to hear the results.' }]
      },
      'imagefx': {
        name: 'ImageFX',
        description: 'Hyper-realistic image generation with expressive chips. Use a modular interface to refine every aspect of your generated visuals.',
        features: ['Expressive chips', 'Style refinement', 'Photo-realistic output'],
        useCases: ['Asset generation', 'Creative visual brainstorming', 'High-res photography simulation'],
        advancedFeatures: ['In-painting and Out-painting', 'Custom seed control'],
        tutorial: [{ title: 'Expressive Design', description: 'Click the descriptive chips to pivot the style of your image instantly.' }]
      },
      'videofx': {
        name: 'VideoFX',
        description: 'Direct AI video manipulation and generation. Apply complex cinematic effects or generate short clips from scratch.',
        features: ['Cinematic styling', 'Motion generation', 'Visual FX automation'],
        useCases: ['Social video enhancements', 'Rapid VFX prototyping', 'AI video generation'],
        advancedFeatures: ['Scene continuity tools', 'Advanced physics simulation'],
        tutorial: [{ title: 'First Render', description: 'Upload a base image and describe the motion you want to see.' }]
      },
      'gentype': {
        name: 'GenType',
        description: 'AI-powered creative typography generator. Generate custom alphabets based on any visual concept or descriptive theme.',
        features: ['Custom font generation', 'Concept-to-character mapping', 'Style transfer'],
        useCases: ['Branding and logo design', 'Creative title cards', 'Thematic typography'],
        advancedFeatures: ['Vector-ready export', 'Consistent style mapping'],
        tutorial: [{ title: 'Type Your Theme', description: 'Enter "Bioluminescent coral" to generate a complete ocean-themed alphabet.' }]
      },
      'textfx': {
        name: 'TextFX',
        description: 'AI-powered writing tools for rappers, writers, and creative thinkers. Explore language through unconventional AI-driven linguistic shifts.',
        features: ['Lyrical similes', 'Word chain generation', 'Scene descriptions'],
        useCases: ['Creative writing blocks', 'Songwriting inspiration', 'Vocabulary expansion'],
        advancedFeatures: ['Specialized Gemini writing models', 'Creative linguistic constraints'],
        tutorial: [{ title: 'Wordplay', description: 'Select the "Simile" tool and enter a word to see poetic AI connections.' }]
      },
      'illuminate': {
        name: 'Illuminate',
        description: 'Transform complex academic papers into engaging audio discussions. A research tool for making deep knowledge accessible.',
        features: ['Audio overview synthesis', 'Source deep-dives', 'Multi-speaker dialogues'],
        useCases: ['Paper summarization', 'Learning on the go', 'Research accessibility'],
        advancedFeatures: ['Context-aware Q&A', 'Citation tracking'],
        tutorial: [{ title: 'Audio Lab', description: 'Upload a PDF and generate a professional podcast-style summary.' }]
      },
      'creative-canvas': {
        name: 'Creative Canvas',
        description: 'Interactive AI design space. Collaborate with AI to sketch, refine, and finalize complex visual compositions.',
        features: ['Sketch-to-image', 'Collaborative canvas', 'Multi-model integration'],
        useCases: ['Concept art brainstorming', 'Iterative visual design', 'Graphic design prototyping'],
        advancedFeatures: ['Real-time canvas syncing', 'Cross-tool asset dragging'],
        tutorial: [{ title: 'Sketch & Prompt', description: 'Draw a rough outline and use AI to fill in the professional details.' }]
      }
    }
  },
  de: { 
    dir: "ltr", 
    title: "Google Full Stack Meisterschaft",
    subtitle: "Erleben Sie die Zukunft der Entwicklung",
    description: "Der ultimative, farbenfrohe Hub für Entwickler zur Erkundung des Google-Ökosystems.",
    allCategories: "Alle Tools",
    filterLevel: "Schwierigkeitsgrad",
    filterRelated: "Bezogen auf",
    filterFeature: "Hauptmerkmal",
    filterAdvancedFeature: "Pro-Funktion",
    tools: {} 
  },
  he: { dir: "rtl", tools: {} },
  zh: { dir: "ltr", tools: {} },
  hi: { dir: "ltr", tools: {} },
  es: { dir: "ltr", tools: {} },
  fr: { dir: "ltr", tools: {} }
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
