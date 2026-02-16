
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
    share: "Share",
    copied: "Copied!",
    deploymentFlowTitle: "Modern Deployment Pipelines",
    flowPath1: "Standard Developer Path",
    flowPath2: "Design-First Path",
    dir: "ltr",
    tools: {
      'gemini-3-flash': {
        name: 'Gemini 3 Flash',
        description: 'Frontier intelligence built for speed efficiency. Optimized for high-throughput, low-latency tasks across multimodal inputs.',
        features: ['Real-time responses', 'Cost-effective scaling', 'Native multimodality'],
        useCases: ['High-volume chat applications', 'Real-time content moderation', 'Fast data extraction'],
        advancedFeatures: ['Fine-tuned token throughput', 'Optimized quantization'],
        tutorial: [{ title: 'Initialization', description: 'Configure the Flash model for low-latency streaming.' }],
        codeExamples: [{ title: 'Fast Stream', language: 'typescript', code: `const response = await ai.models.generateContentStream({\n  model: 'gemini-3-flash-preview',\n  contents: 'Summarize this log in 3 bullets...'\n});` }]
      },
      'gemini-3-flash-lite': {
        name: 'Gemini 3 Flash Lite',
        description: 'Even faster intelligence built for extreme speed. The ultimate model for sub-second agentic reasoning loops.',
        features: ['Ultra-low latency', 'Minimal compute footprint', 'Rapid context processing'],
        useCases: ['Reactive UI elements', 'Micro-agentic loops', 'Edge-compatible AI'],
        advancedFeatures: ['Smallest token footprint', 'Zero-shot efficiency'],
        tutorial: [{ title: 'Direct Prompting', description: 'Trigger lightning-fast logic from user events.' }],
        codeExamples: [{ title: 'Instant Logic', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-3-flash-lite-latest',\n  contents: 'Analyze sentiment: "This is amazing!"'\n});` }]
      },
      'gemini-3-pro': {
        name: 'Gemini 3 Pro',
        description: 'Most advanced reasoning model from Google. Designed for complex problem-solving, deep analysis, and sophisticated coding tasks.',
        features: ['Complex reasoning', 'Large context window', 'State-of-the-art vision'],
        useCases: ['Complex code refactoring', 'Scientific hypothesis generation', 'Multi-step agent planning'],
        advancedFeatures: ['Extended thinking budget', 'High-fidelity tool use'],
        tutorial: [{ title: 'Logic Chain', description: 'Use Chain of Thought to solve multi-variable problems.' }],
        codeExamples: [{ title: 'Reasoning Call', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-3-pro-preview',\n  contents: 'Debug this memory leak in Node.js...',\n  config: { thinkingConfig: { thinkingBudget: 24000 } }\n});` }]
      },
      'gemini-deep-research': {
        name: 'Gemini (Deep Research)',
        description: 'Deeper thinking model for agent-enabled deep research. Excels at long-horizon planning and autonomous web-scale information synthesis.',
        features: ['Recursive research loops', 'Multi-source grounding', 'Self-correcting queries'],
        useCases: ['Market analysis', 'Legal research', 'Technical documentation synthesis'],
        advancedFeatures: ['Search grounding integration', 'Autonomous source verification'],
        tutorial: [{ title: 'Research Goal', description: 'Define a research objective and watch the model navigate sources.' }],
        codeExamples: [{ title: 'Search Tool', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-3-pro-preview',\n  contents: 'What are the top 5 AI startups in Tel Aviv today?',\n  config: { tools: [{ googleSearch: {} }] }\n});` }]
      },
      'gemma': {
        name: 'Gemma',
        description: 'Lightweight open models from DeepMind research. Built from the same technology used for Gemini, perfect for custom deployment.',
        features: ['Open-weight availability', 'Easy fine-tuning', 'Fast local execution'],
        useCases: ['Local AI privacy', 'Specific task fine-tuning', 'Educational AI research'],
        advancedFeatures: ['LoRA support', 'Cross-platform compatibility'],
        tutorial: [{ title: 'Local Setup', description: 'Initialize Gemma using Keras or PyTorch.' }],
        codeExamples: [{ title: 'Python Usage', language: 'python', code: `import keras_nlp\ngemma_lm = keras_nlp.models.GemmaCausalLM.from_preset("gemma_2b_en")\ngemma_lm.generate("The future of AI is...", max_length=64)` }]
      },
      'veo-3-1': {
        name: 'Veo 3.1',
        description: 'Highest quality video generation from text. Achieves cinematic quality with consistency across long sequences.',
        features: ['1080p cinematic output', 'Temporal consistency', 'Advanced camera controls'],
        useCases: ['High-end advertising', 'Film pre-visualization', 'Creative social content'],
        advancedFeatures: ['Direct frame manipulation', 'Style consistency masking'],
        tutorial: [{ title: 'Director Script', description: 'Write a cinematic prompt with specific lighting and lens details.' }],
        codeExamples: [{ title: 'Generate Video', language: 'typescript', code: `const op = await ai.models.generateVideos({\n  model: 'veo-3.1-generate-preview',\n  prompt: 'A drone shot of a volcanic island at sunrise',\n  config: { resolution: '1080p', aspectRatio: '16:9' }\n});` }]
      },
      'flow': {
        name: 'Flow',
        description: 'Cinematic clips and scenes storytelling tool. Orchestrate multiple AI-generated segments into a cohesive narrative.',
        features: ['Scene sequencing', 'Character consistency', 'Automated transitions'],
        useCases: ['Educational explainers', 'Short film production', 'Interactive storytelling'],
        advancedFeatures: ['Timeline-based generation', 'Audio-visual syncing'],
        tutorial: [{ title: 'Scene Flow', description: 'Build a three-act structure using Flow\'s visual interface.' }],
        codeExamples: [{ title: 'Scene Metadata', language: 'json', code: `{\n  "timeline": [\n    { "id": "intro", "prompt": "Wide shot forest", "dur": 3 },\n    { "id": "action", "prompt": "Hero runs", "dur": 5 }\n  ]\n}` }]
      },
      'google-vids': {
        name: 'Google Vids',
        description: 'AI powered video creation for work. Streamlines video production for presentations, training, and team updates.',
        features: ['Workspace integration', 'Automatic script generation', 'Voiceover synthesis'],
        useCases: ['Internal training videos', 'Project pitch summaries', 'Onboarding walkthroughs'],
        advancedFeatures: ['Drive asset syncing', 'Team collaboration tools'],
        tutorial: [{ title: 'Project Start', description: 'Convert a Google Slide deck into a professional video.' }],
        codeExamples: [{ title: 'Asset API', language: 'javascript', code: `const project = await Vids.create({\n  source: 'docs/slides/project-q3',\n  template: 'professional_summary'\n});` }]
      },
      'videofx': {
        name: 'VideoFX',
        description: 'Direct AI video manipulation and generation. Apply complex cinematic effects or generate short clips from scratch.',
        features: ['Cinematic styling', 'Motion generation', 'Visual FX automation'],
        useCases: ['Social video enhancements', 'Rapid VFX prototyping', 'AI video generation'],
        advancedFeatures: ['Scene continuity tools', 'Advanced physics simulation'],
        tutorial: [{ title: 'First Render', description: 'Upload a base image and describe the motion you want to see.' }],
        codeExamples: [{ title: 'FX Chain', language: 'json', code: `{\n  "effect": "cinematic_blur",\n  "motion": "slow_pan_left",\n  "intensity": 0.8\n}` }]
      },
      'stitch-design': {
        name: 'Stitch',
        description: 'Turn prompts into complex UI designs. A powerful design-to-code tool that respects brand systems and accessibility.',
        features: ['Component-based output', 'Material Design 3 native', 'Design system syncing'],
        useCases: ['Rapid UI iteration', 'Design-to-code handoff', 'Automated wireframing'],
        advancedFeatures: ['Figma export integration', 'Tailwind CSS generation'],
        tutorial: [{ title: 'Design Prompt', description: 'Describe a complex feature and get a ready-to-style layout.' }],
        codeExamples: [{ title: 'Prompt Example', language: 'text', code: `Prompt: Generate a crypto dashboard with Material 3 dark theme, 24h price charts, and a glassmorphism sidebar.` }]
      },
      'whisk': {
        name: 'Whisk',
        description: 'Images as prompts to visualize ideas. Merges visual concepts into new, high-fidelity designs through image-to-image reasoning.',
        features: ['Visual concept blending', 'Structural image prompts', 'Style transfer'],
        useCases: ['Moodboard visualization', 'Product design iteration', 'Artistic concept merging'],
        advancedFeatures: ['Structure preservation', 'Semantic style injection'],
        tutorial: [{ title: 'Blend Mode', description: 'Upload two images to synthesize a combined aesthetic.' }],
        codeExamples: [{ title: 'Blend Params', language: 'json', code: `{\n  "base_image": "asset_id_1",\n  "style_ref": "asset_id_2",\n  "preserve_geometry": true\n}` }]
      },
      'nanobanana': {
        name: 'Nanobanana',
        description: 'Image generation using Gemini reasoning knowledge. Uses advanced reasoning to understand complex spatial and semantic descriptions.',
        features: ['High semantic accuracy', 'Fine-grained detail control', 'Logical spatial layout'],
        useCases: ['Technical illustrations', 'Complex scene composition', 'Brand accurate imagery'],
        advancedFeatures: ['4K resolution support', 'Aspect ratio flexibility'],
        tutorial: [{ title: 'Detail Prompting', description: 'Use descriptive reasoning to guide the generation of complex scenes.' }],
        codeExamples: [{ title: 'Reasoned Prompt', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-3-pro-image-preview',\n  contents: 'A cross-section of a futuristic jet engine showing the fuel intake valves in blue.'\n});` }]
      },
      'imagen-4': {
        name: 'Imagen 4',
        description: 'Highest fidelity image generation model from Google. Delivers unprecedented realism, complex text rendering, and deep compositional understanding.',
        features: ['Photorealistic rendering', 'Advanced text-in-image', 'Spatial consistency'],
        useCases: ['Professional visual assets', 'High-quality concept art', 'Technical visual prototyping'],
        advancedFeatures: ['Structural guidance control', 'Aspect-ratio awareness'],
        tutorial: [
          { title: 'Base Call', description: 'Initiate a high-res generation using the latest Imagen model.' },
          { title: 'Text Rendering', description: 'Prompt for specific text labels and observe accurate font rendering.' }
        ],
        codeExamples: [{ title: 'Imagen API', language: 'typescript', code: `const response = await ai.models.generateImages({\n  model: 'imagen-4.0-generate-001',\n  prompt: 'A glass sculpture of a phoenix with internal gold leaf detail',\n  config: { aspectRatio: '16:9' }\n});` }]
      },
      'gemini-2-5-flash-image': {
        name: 'Gemini 2.5 Flash Image',
        description: 'High-speed image reasoning and generation. Perfect for real-time visual editing and responsive creative workflows.',
        features: ['Real-time editing', 'Vision-aware reasoning', 'Multimodal context'],
        useCases: ['Interactive design assistants', 'Contextual image modification', 'Fast visual prototyping'],
        advancedFeatures: ['Low-latency inference', 'Precise in-painting'],
        tutorial: [{ title: 'Image Generation', description: 'Prompt for a fast, high-quality image generation using 2.5 series.' }],
        codeExamples: [{ title: 'Image Gen', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-2.5-flash-image',\n  contents: 'A neon blue parrot wearing sunglasses'\n});` }]
      },
      'gemini-cli': {
        name: 'Gemini CLI',
        description: 'Frontier intelligence in your terminal. The official command-line interface for Google Gemini models, enabling seamless script integration and local AI automation.',
        features: ['Terminal-native', 'Pipe & Redirect support', 'Scriptable workflows'],
        useCases: ['Automated code review', 'Large-scale log analysis', 'Batch text processing'],
        advancedFeatures: ['Custom system instructions', '2M token context support'],
        tutorial: [
          { title: 'Installation', description: 'Install the CLI tool and configure your API key environment variable.' },
          { title: 'First Query', description: 'Run a direct prompt from your terminal using standard input.' },
          { title: 'Processing Files', description: 'Pipe file contents into Gemini for instant summarization or analysis.' }
        ],
        codeExamples: [{ title: 'Terminal Usage', language: 'bash', code: `cat main.py | gemini ask "Refactor this code for performance" > refactored_main.py` }]
      },
      'antigravity': {
        name: 'Antigravity',
        description: 'AI powered IDE with autonomous agents. A revolutionary workspace where agents proactively build, test, and refactor code.',
        features: ['Autonomous PRs', 'Self-healing dev loops', 'Agentic debugging'],
        useCases: ['Massive repo refactoring', 'Legacy migration automation', 'Proactive security patching'],
        advancedFeatures: ['Multi-agent coordination', 'Remote cloud environments'],
        tutorial: [{ title: 'Auto-Task', description: 'Assign an agent to upgrade your codebase to the latest framework version.' }],
        codeExamples: [{ title: 'Agent Prompt', language: 'text', code: `/refactor @all-components Update to React 19 forwardRef patterns and add exhaustive unit tests.` }]
      },
      'jules': {
        name: 'Jules',
        description: 'Asynchronous coding assistant for repositories. Works in the background to analyze PRs, document code, and optimize architecture.',
        features: ['Background code review', 'Auto-documentation', 'Technical debt identification'],
        useCases: ['Large-scale repo maintenance', 'Ensuring code standards', 'Onboarding assistance'],
        advancedFeatures: ['Deep repository context', 'Historical logic analysis'],
        tutorial: [{ title: 'Repo Analysis', description: 'Let Jules index your entire repository to provide context-aware insights.' }],
        codeExamples: [{ title: 'Jules Scan', language: 'bash', code: `jules scan --repo . --rule "Ensure all API endpoints have JSDoc and validation checks"` }]
      },
      'google-adk': {
        name: 'Google ADK',
        description: 'Framework for developing scalable AI agents. A standardized protocol for building agents that can communicate and solve tasks.',
        features: ['Agent orchestration', 'Tool standardized interface', 'Memory management'],
        useCases: ['Enterprise AI agents', 'Multi-tool workflows', 'Autonomous task execution'],
        advancedFeatures: ['Safety protocol enforcement', 'Stateful agent persistence'],
        tutorial: [{ title: 'Agent Build', description: 'Define the tools and goals for your first scalable agent.' }],
        codeExamples: [{ title: 'ADK Setup', language: 'typescript', code: `const agent = ADK.createAgent({\n  role: 'Technical Writer',\n  tools: [GoogleSearch, GithubAPI],\n  memory: 'stateful'\n});` }]
      },
      'google-a2a': {
        name: 'Google A2A',
        description: 'Multi-Agent communication protocol irrespective of frameworks. Enables diverse AI agents to collaborate seamlessly.',
        features: ['Inter-agent communication', 'Unified protocol', 'Decentralized task sharing'],
        useCases: ['Complex multi-agent systems', 'Cross-platform AI collaboration', 'Agent-to-agent negotiation'],
        advancedFeatures: ['Conflict resolution logic', 'Standardized payload schema'],
        tutorial: [{ title: 'Agent Protocol', description: 'Configure two agents to share data and goals using A2A.' }],
        codeExamples: [{ title: 'A2A Message', language: 'json', code: `{\n  "from": "agent_a",\n  "to": "agent_b",\n  "intent": "request_data",\n  "payload": { "field": "q3_revenue" }\n}` }]
      },
      'google-meet': {
        name: 'Google Meet',
        description: 'AI-enhanced communication platform. Leverages Gemini to automate meeting summaries, provide real-time translations, and optimize audio-visual quality for a seamless workspace experience.',
        features: ['AI Meeting Notes', 'Real-time Translation', 'Studio Look & Sound'],
        useCases: ['Automated team documentation', 'Global cross-language calls', 'Professional video presence'],
        advancedFeatures: ['Gemini Sidekick integration', 'Automatic action item tracking'],
        tutorial: [
          { title: 'AI Notes', description: 'Enable "Take notes for me" to get an automated summary after the call.' },
          { title: 'Live Captioning', description: 'Switch on real-time translations to bridge language gaps instantly.' }
        ],
        codeExamples: [{ title: 'Workspace Add-on', language: 'javascript', code: `// Google Apps Script for Meet Events\nfunction onMeetingStart(e) {\n  const summaryAgent = WorkspaceAI.getAgent('meeting_notes');\n  summaryAgent.startListening();\n}` }]
      },
      'filesearch-api': {
        name: 'FileSearch API',
        description: 'Use an entire pre-built configurable RAG pipeline simply from an API. Ground your AI in your own data without custom vector infra.',
        features: ['Managed vector indexing', 'Semantic retrieval', 'Document parsing'],
        useCases: ['Custom knowledge bases', 'Internal document Q&A', 'Enterprise research portals'],
        advancedFeatures: ['Metadata filtering', 'Hybrid retrieval logic'],
        tutorial: [{ title: 'RAG Setup', description: 'Upload your documents and query them instantly via API.' }],
        codeExamples: [{ title: 'Query API', language: 'bash', code: `curl -X POST /api/search \\\n  -d '{"query": "How do I reset my password?", "collection": "hr_docs"}'` }]
      },
      'ai-mode': {
        name: 'AI Mode',
        description: 'Advanced reasoning multimodality for powerful search. Enhances search results with deep semantic understanding and visual reasoning.',
        features: ['Reasoned search results', 'Multimodal grounding', 'Deep research synthesis'],
        useCases: ['Professional research', 'Visual search engine', 'Knowledge discovery'],
        advancedFeatures: ['Source transparency', 'Complex query decomposition'],
        tutorial: [{ title: 'Smart Search', description: 'Use complex, reasoned queries to find precisely what you need.' }],
        codeExamples: [{ title: 'Mode Config', language: 'json', code: `{\n  "mode": "reasoned_search",\n  "multimodal": true,\n  "grounding": ["maps", "search"]\n}` }]
      },
      'google-search-grounding': {
        name: 'Google Search Grounding',
        description: 'Connect Gemini to real-time world knowledge via Google Search. Essential for accuracy and up-to-date information retrieval.',
        features: ['Real-time web access', 'Source verification', 'Fact-based grounding'],
        useCases: ['News analysis', 'Real-time competitive research', 'Technical verification'],
        advancedFeatures: ['Grounding chunks extraction', 'Source transparency'],
        tutorial: [{ title: 'Search Tooling', description: 'Integrate the googleSearch tool into your generateContent calls.' }],
        codeExamples: [{ title: 'Search Ground', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-3-pro-preview',\n  contents: 'What is the current stock price of Google?',\n  config: { tools: [{ googleSearch: {} }] }\n});` }]
      },
      'google-maps-grounding': {
        name: 'Google Maps Grounding',
        description: 'Ground AI responses in real-world location data. Provides place-based intelligence, navigation, and local discovery features.',
        features: ['Location-aware responses', 'Place recommendations', 'POI verification'],
        useCases: ['Travel assistants', 'Local business discovery', 'Geospatial AI agents'],
        advancedFeatures: ['Latitude/Longitude precision', 'Place ID integration'],
        tutorial: [{ title: 'Maps Tooling', description: 'Configure the googleMaps tool with user location for precise results.' }],
        codeExamples: [{ title: 'Maps Ground', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-2.5-flash-latest',\n  contents: 'Find the best coffee shops near me',\n  config: { tools: [{ googleMaps: {} }] }\n});` }]
      },
      'gemini-2-5-flash-native-audio': {
        name: 'Gemini 2.5 Flash Native Audio',
        description: 'Process and understand raw audio data natively. No intermediate transcription needed for deep acoustic reasoning.',
        features: ['Native audio reasoning', 'Emotion detection', 'Acoustic scene analysis'],
        useCases: ['Audio sentiment analysis', 'Automated sound classification', 'Direct voice interface'],
        advancedFeatures: ['Low-latency processing', 'Raw PCM understanding'],
        tutorial: [{ title: 'Audio Pipeline', description: 'Stream audio data directly into the model for native processing.' }],
        codeExamples: [{ title: 'Audio Call', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-2.5-flash-native-audio-preview',\n  contents: { parts: [{ inlineData: { mimeType: 'audio/pcm', data: base64Audio } }] }\n});` }]
      },
      'gemini-2-5-flash-tts': {
        name: 'Gemini 2.5 Flash TTS',
        description: 'State-of-the-art text-to-speech generation. Deliver natural, human-like voice experiences across multiple languages.',
        features: ['Neural voice synthesis', 'Multi-speaker support', 'Prosody control'],
        useCases: ['Narrative agents', 'Dynamic content voicing', 'Interactive voice response'],
        advancedFeatures: ['Prebuilt voice configs', 'Emotional tone scaling'],
        tutorial: [{ title: 'TTS Setup', description: 'Configure high-quality speech output for your application.' }],
        codeExamples: [{ title: 'Voice Out', language: 'typescript', code: `const res = await ai.models.generateContent({\n  model: 'gemini-2.5-flash-preview-tts',\n  contents: 'Welcome to the future.',\n  config: { responseModalities: ['AUDIO'] }\n});` }]
      },
      'gemini-live': {
        name: 'Gemini Live',
        description: 'Real-time, low-latency multimodal interaction API. Enables seamless voice and vision conversations with Gemini.',
        features: ['Sub-second latency', 'Bimodal interaction', 'Continuous session'],
        useCases: ['Real-time tutors', 'Voice assistants', 'Live visual analysis'],
        advancedFeatures: ['Session state management', 'Direct audio streaming'],
        tutorial: [{ title: 'Live Connect', description: 'Establish a websocket connection for continuous interaction.' }],
        codeExamples: [{ title: 'Live Stream', language: 'typescript', code: `const session = await ai.live.connect({\n  model: 'gemini-2.5-flash-native-audio-preview-12-2025',\n  config: { responseModalities: ['AUDIO'] }\n});` }]
      },
      'notebook-llm': {
        name: 'NotebookLM',
        description: 'AI powered research assistant organizing ideas. Grounds knowledge in your specific documents to create an intelligent workspace.',
        features: ['Source grounding', 'Automatic citations', 'Audio overview generation'],
        useCases: ['Literature reviews', 'Product requirement analysis', 'Learning complex new fields'],
        advancedFeatures: ['Multiple source types (PDF, Web, YouTube)', 'Collaborative notebooks'],
        tutorial: [{ title: 'Personal Grounding', description: 'Upload your research papers and ask for a cross-source summary.' }],
        codeExamples: [{ title: 'Source Query', language: 'text', code: `Question: Based on the 3 PDFs I uploaded, what is the main risk factor for the project?` }]
      },
      'pomelli': {
        name: 'Pomelli',
        description: 'Generates ideas on brand social campaigns. Specialized research and creative agent for marketing and social strategy.',
        features: ['Trend analysis', 'Brand voice alignment', 'Creative ideation'],
        useCases: ['Social media campaign planning', 'Content strategy research', 'Brand expansion brainstorming'],
        advancedFeatures: ['Cultural trend monitoring', 'Platform-specific optimization'],
        tutorial: [{ title: 'Campaign Ideation', description: 'Define your brand voice and target audience for a tailored strategy.' }],
        codeExamples: [{ title: 'Strategy Prompt', language: 'text', code: `Generate a 7-day TikTok campaign strategy for a sustainable fashion brand targeting Gen Z in Berlin.` }]
      },
      'mixboard': {
        name: 'Mixboard',
        description: 'Mixboard is an AI-powered concepting board that helps you explore, expand, and refine your ideas.',
        features: ['Multi-stem mixing', 'Genre fusion', 'Real-time synthesis'],
        useCases: ['Original soundtrack creation', 'Creative audio prototyping', 'Musical experimentation'],
        advancedFeatures: ['Direct MIDI export', 'AI orchestration control'],
        tutorial: [{ title: 'Create a Mix', description: 'Drag stems onto the board to synthesize your first unique AI track.' }],
        codeExamples: [{ title: 'Mix Config', language: 'json', code: `{\n  "stems": ["jazz_drums", "synth_wave_bass", "lofi_piano"],\n  "tempo": 95,\n  "key": "Cm"\n}` }]
      },
      'musicfx': {
        name: 'MusicFX',
        description: 'Text-to-music generation tool. Transform descriptive prompts into high-fidelity audio tracks with variable duration and style.',
        features: ['Descriptive prompting', 'Variable loop lengths', 'Style consistency'],
        useCases: ['Background music generation', 'Sample creation for producers', 'Atmospheric soundscapes'],
        advancedFeatures: ['Instrumental isolation', 'Seed-based generation'],
        tutorial: [{ title: 'Prompt to Beat', description: 'Type "Lo-fi beats for a cozy spaceship" to hear the results.' }],
        codeExamples: [{ title: 'Music Prompt', language: 'text', code: `Prompt: Orchestral epic hybrid with heavy cinematic brass and futuristic synths, 120bpm.` }]
      },
      'imagefx': {
        name: 'ImageFX',
        description: 'Hyper-realistic image generation with expressive chips. Use a modular interface to refine every aspect of your generated visuals.',
        features: ['Expressive chips', 'Style refinement', 'Photo-realistic output'],
        useCases: ['Asset generation', 'Creative visual brainstorming', 'High-res photography simulation'],
        advancedFeatures: ['In-painting and Out-painting', 'Custom seed control'],
        tutorial: [{ title: 'Expressive Design', description: 'Click the descriptive chips to pivot the style of your image instantly.' }],
        codeExamples: [{ title: 'Generation', language: 'typescript', code: `const img = await ai.models.generateImages({\n  model: 'imagen-4.0-generate-001',\n  prompt: 'A cyberpunk tea shop in old Kyoto, neon lights'\n});` }]
      },
      'gentype': {
        name: 'GenType',
        description: 'AI-powered creative typography generator. Generate custom alphabets based on any visual concept or descriptive theme.',
        features: ['Custom font generation', 'Concept-to-character mapping', 'Style transfer'],
        useCases: ['Branding and logo design', 'Creative title cards', 'Thematic typography'],
        advancedFeatures: ['Vector-ready export', 'Consistent style mapping'],
        tutorial: [{ title: 'Type Your Theme', description: 'Enter "Bioluminescent coral" to generate a complete ocean-themed alphabet.' }],
        codeExamples: [{ title: 'Type Prompt', language: 'text', code: `Theme: Molten gold drips and metallic textures for a luxury brand logo alphabet.` }]
      },
      'textfx': {
        name: 'TextFX',
        description: 'AI-powered writing tools for rappers, writers, and creative thinkers. Explore language through unconventional AI-driven linguistic shifts.',
        features: ['Lyrical similes', 'Word chain generation', 'Scene descriptions'],
        useCases: ['Creative writing blocks', 'Songwriting inspiration', 'Vocabulary expansion'],
        advancedFeatures: ['Specialized Gemini writing models', 'Creative linguistic constraints'],
        tutorial: [{ title: 'Wordplay', description: 'Select the "Simile" tool and enter a word to see poetic AI connections.' }],
        codeExamples: [{ title: 'Simile Call', language: 'text', code: `Word: Time. Result: Like a river that flows but never returns to the same shore.` }]
      },
      'illuminate': {
        name: 'Illuminate',
        description: 'Transform complex academic papers into engaging audio discussions. A research tool for making deep knowledge accessible.',
        features: ['Audio overview synthesis', 'Source deep-dives', 'Multi-speaker dialogues'],
        useCases: ['Paper summarization', 'Learning on the go', 'Research accessibility'],
        advancedFeatures: ['Context-aware Q&A', 'Citation tracking'],
        tutorial: [{ title: 'Audio Lab', description: 'Upload a PDF and generate a professional podcast-style summary.' }],
        codeExamples: [{ title: 'Audio Config', language: 'json', code: `{\n  "speakers": ["Alex", "Jordan"],\n  "tone": "academic_discussion",\n  "duration": "5m"\n}` }]
      },
      'creative-canvas': {
        name: 'CC',
        description: 'a new AI productivity agent that connects your Gmail, Calendar and Drive to deliver a personalized briefing every morning',
        features: ['Sketch-to-image', 'Collaborative canvas', 'Multi-model integration'],
        useCases: ['Concept art brainstorming', 'Iterative visual design', 'Graphic design prototyping'],
        advancedFeatures: ['Real-time canvas syncing', 'Cross-tool asset dragging'],
        tutorial: [{ title: 'Sketch & Prompt', description: 'Draw a rough outline and use AI to fill in the professional details.' }],
        codeExamples: [{ title: 'Canvas State', language: 'json', code: `{\n  "layers": ["sketch_01", "ai_fill_01"],\n  "model": "gemini-3-pro-image",\n  "prompt_strength": 0.75\n}` }]
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
