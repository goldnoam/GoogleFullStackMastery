
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Sun, 
  Moon, 
  Search, 
  X,
  ChevronRight, 
  ExternalLink, 
  BookOpen, 
  Star,
  Mail,
  Zap,
  Globe,
  Type as FontIcon,
  Languages,
  Sparkles,
  Trophy,
  Filter,
  ArrowRight,
  ChevronDown,
  Palette,
  Layers,
  Link as LinkIcon,
  Download,
  Terminal,
  MousePointer2,
  Settings2,
  Cpu,
  Share2,
  Linkedin,
  Github,
  Rocket
} from 'lucide-react';
import { GOOGLE_TOOLS, CATEGORIES } from './constants';
import { CategoryType, GoogleTool, LanguageCode, GoogleToolContent } from './types';
import { AdSenseSlot } from './components/AdSense';
import { ToolDetailsModal } from './components/ToolDetailsModal';
import { TRANSLATIONS, getLocalizedTool } from './i18n';

// Using global css via standard import
import './index.css';

const FONT_SIZES = ['text-sm', 'text-base', 'text-lg'];
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

type Theme = 'light' | 'dark' | 'colorful';

const App: React.FC = () => {
  // Theme is 'dark' by default as requested
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<LanguageCode>('en');
  const [fontSizeIndex, setFontSizeIndex] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedRelatedToolId, setSelectedRelatedToolId] = useState<string>('All');
  const [selectedFeature, setSelectedFeature] = useState('All');
  const [selectedAdvancedFeature, setSelectedAdvancedFeature] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const t = TRANSLATIONS[lang];

  // Deep linking logic
  useEffect(() => {
    const hash = window.location.hash.replace('#tool-', '');
    if (hash && GOOGLE_TOOLS.some(tool => tool.id === hash)) {
      setSelectedToolId(hash);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark', 'theme-colorful');
    if (theme === 'dark') html.classList.add('dark');
    else if (theme === 'light') html.classList.add('light');
    else if (theme === 'colorful') html.classList.add('theme-colorful');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = t.dir || 'ltr';
    document.documentElement.lang = lang;

    // Programmatic SEO Meta Tags
    document.title = "Google Full Stack Mastery - Experience the Future of Development";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore the Google ecosystem, AI tools, design frameworks, and scalable cloud solutions for developers.");
    }

    // Programmatic Favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('href', 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png');
  }, [lang, t.dir]);

  const allAvailableFeatures = useMemo(() => {
    const features = new Set<string>();
    GOOGLE_TOOLS.forEach(tool => {
      const content = getLocalizedTool(tool.id, lang);
      content.features.forEach(f => features.add(f));
    });
    return ['All', ...Array.from(features).sort()];
  }, [lang]);

  const allAvailableAdvancedFeatures = useMemo(() => {
    const advFeatures = new Set<string>();
    GOOGLE_TOOLS.forEach(tool => {
      const content = getLocalizedTool(tool.id, lang);
      content.advancedFeatures.forEach(af => advFeatures.add(af));
    });
    return ['All', ...Array.from(advFeatures).sort()];
  }, [lang]);

  const filteredTools = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return GOOGLE_TOOLS.filter(tool => {
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || tool.level === selectedLevel;
      const matchesRelated = selectedRelatedToolId === 'All' || tool.relatedTools.includes(selectedRelatedToolId);
      
      const content = getLocalizedTool(tool.id, lang);
      const matchesFeature = selectedFeature === 'All' || content.features.includes(selectedFeature);
      const matchesAdvancedFeature = selectedAdvancedFeature === 'All' || content.advancedFeatures.includes(selectedAdvancedFeature);

      const matchesSearch = !query || 
        content.name.toLowerCase().includes(query) || 
        content.description.toLowerCase().includes(query) ||
        content.features.some(f => f.toLowerCase().includes(query)) ||
        content.advancedFeatures.some(af => af.toLowerCase().includes(query)) ||
        content.useCases.some(u => u.toLowerCase().includes(query));
        
      return matchesCategory && matchesLevel && matchesRelated && matchesSearch && matchesFeature && matchesAdvancedFeature;
    });
  }, [selectedCategory, selectedLevel, selectedRelatedToolId, selectedFeature, selectedAdvancedFeature, searchQuery, lang]);

  const handleShare = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#tool-${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filteredTools.map(tool => ({
      ...tool,
      ...getLocalizedTool(tool.id, lang)
    })), null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `google_mastery_search_${new Date().toISOString()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const text = e.dataTransfer.getData("text");
    if (text) setSearchQuery(prev => prev + text);
  };

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'colorful';
      return 'dark';
    });
  };

  const toggleFontSize = () => setFontSizeIndex((prev) => (prev + 1) % 3);

  const getCategoryTheme = (cat: CategoryType) => {
    return CATEGORIES.find(c => c.type === cat) || CATEGORIES[0];
  };

  const languageLabels: Record<LanguageCode, string> = {
    en: 'English (Global)',
    he: 'עברית (IL)',
    zh: '中文 (CN)',
    hi: 'हिन्दी (IN)',
    de: 'Deutsch (DE)',
    es: 'Español (ES)',
    fr: 'Français (FR)'
  };

  const selectedTool = useMemo(() => {
    if (!selectedToolId) return null;
    return GOOGLE_TOOLS.find(tool => tool.id === selectedToolId) || null;
  }, [selectedToolId]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedLevel('All');
    setSelectedRelatedToolId('All');
    setSelectedCategory('All');
    setSelectedFeature('All');
    setSelectedAdvancedFeature('All');
  };

  return (
    <div className={`min-h-screen transition-all duration-700 flex flex-col relative ${FONT_SIZES[fontSizeIndex]} selection:bg-google-blue selection:text-white`}>
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 dark:opacity-30 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] bg-rose-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[10%] w-[60%] h-[40%] bg-emerald-500/15 blur-[180px] rounded-full" />
      </div>

      <header className="sticky top-0 z-50 glass-morphism border-b dark:border-slate-800/60 px-4 md:px-12 py-5 flex flex-wrap gap-6 items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-google-blue via-google-red to-google-yellow rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all cursor-pointer">
            <Sparkles className="text-white w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-black tracking-tight dark:text-white theme-colorful:text-white bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-rose-500 to-emerald-500">
              {t.title}
            </h1>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-6 hidden lg:block relative">
          <div 
            className="relative group"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Search className="absolute ltr:left-5 rtl:right-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6 group-focus-within:text-google-blue group-focus-within:scale-110 transition-all" />
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder={t.searchPlaceholder}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="w-full ltr:pl-14 rtl:pr-14 ltr:pr-24 rtl:pl-24 py-4 rounded-[1.5rem] bg-slate-200/40 dark:bg-slate-900/60 theme-colorful:bg-white/20 border-2 border-transparent focus:border-google-blue focus:bg-white dark:focus:bg-slate-900 outline-none transition-all dark:text-white theme-colorful:text-white text-lg shadow-inner"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  title={t.clearInput}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-rose-500 transition-all"
                >
                  <X size={20} />
                </button>
              )}
              <button 
                onClick={handleExport}
                title={t.exportResults}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-google-blue transition-all"
              >
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-800 theme-colorful:hover:bg-white/20 transition-all border border-slate-200/60 dark:border-slate-800 theme-colorful:border-white/20 dark:text-slate-300 theme-colorful:text-white flex items-center gap-3 shadow-sm"
            >
              <Languages className="w-6 h-6" />
              <span className="hidden xl:inline text-xs font-black uppercase tracking-widest">{lang}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
                <div className="absolute ltr:right-0 rtl:left-0 mt-3 w-60 bg-white/95 dark:bg-slate-900/95 theme-colorful:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800 z-20 overflow-hidden">
                  <div className="p-3 flex flex-col gap-1.5">
                    {(Object.keys(TRANSLATIONS) as LanguageCode[]).map((l) => (
                      <button 
                        key={l}
                        onClick={() => { setLang(l); setIsLangOpen(false); }}
                        className={`px-5 py-4 text-left rtl:text-right rounded-2xl hover:bg-google-blue/10 transition-all flex items-center justify-between text-sm font-bold ${lang === l ? 'text-google-blue bg-google-blue/5' : 'dark:text-slate-300 theme-colorful:text-slate-300'}`}
                      >
                        {languageLabels[l]}
                        {lang === l && <div className="w-2.5 h-2.5 rounded-full bg-google-blue" />}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <button onClick={toggleFontSize} className="p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-800 theme-colorful:hover:bg-white/20 transition-all border border-slate-200/60 dark:border-slate-800 theme-colorful:border-white/20 dark:text-slate-300 theme-colorful:text-white shadow-sm">
            <FontIcon className="w-6 h-6" />
          </button>

          <button onClick={toggleTheme} className="p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-800 theme-colorful:hover:bg-white/20 transition-all border border-slate-200/60 dark:border-slate-800 theme-colorful:border-white/20 shadow-sm flex items-center justify-center min-w-[56px]">
            {theme === 'light' ? <Sun className="w-6 h-6 text-yellow-500" /> : 
             theme === 'dark' ? <Moon className="w-6 h-6 text-slate-700" /> : 
             <Palette className="w-6 h-6 text-purple-500" />}
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 lg:px-12 py-16">
        <div className="mb-24 text-center max-w-5xl mx-auto space-y-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-google-blue/10 text-google-blue text-[12px] font-black uppercase tracking-[0.2em] border border-google-blue/20 shadow-xl">
              <Zap size={16} className="fill-current" /> Quantum Mastery Hub
            </div>
          </div>
          <h2 className="text-6xl md:text-9xl font-display font-black tracking-tight dark:text-white theme-colorful:text-white leading-[1] bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-300 dark:to-slate-600 theme-colorful:from-white theme-colorful:to-purple-200">
            {t.subtitle}
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 theme-colorful:text-slate-100 leading-relaxed max-w-3xl mx-auto font-semibold">
            {t.description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x scroll-smooth items-center lg:justify-center md:flex-wrap px-4 mb-8">
          <button 
            onClick={() => setSelectedCategory('All')}
            className={`px-8 py-5 rounded-3xl font-black whitespace-nowrap transition-all snap-start flex items-center gap-3 border-2 shadow-xl ${
              selectedCategory === 'All' 
              ? 'bg-slate-900 dark:bg-white theme-colorful:bg-white border-slate-900 dark:border-white theme-colorful:border-white text-white dark:text-slate-900 theme-colorful:text-slate-900 scale-105 z-10' 
              : 'bg-white/60 dark:bg-slate-900/40 theme-colorful:bg-white/10 border-slate-200/50 dark:border-slate-800/50 theme-colorful:border-white/10 dark:text-slate-300 theme-colorful:text-white hover:border-google-blue/40'
            }`}
          >
            <Sparkles size={20} />
            {t.allCategories}
          </button>
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.type}
              onClick={() => setSelectedCategory(cat.type)}
              className={`px-8 py-5 rounded-3xl font-black flex items-center gap-3 whitespace-nowrap transition-all snap-start border-2 shadow-xl ${
                selectedCategory === cat.type 
                ? `${cat.color} border-transparent text-white scale-105 z-10 ${cat.shadow}` 
                : `bg-white/60 dark:bg-slate-900/40 theme-colorful:bg-white/10 border-slate-200/50 dark:border-slate-800/50 theme-colorful:border-white/10 dark:text-slate-300 theme-colorful:text-white hover:border-google-blue/40`
              }`}
            >
              <span className={`p-1.5 rounded-xl bg-white/20`}>{cat.icon}</span>
              {cat.type}
            </button>
          ))}
        </div>

        {/* Secondary Search Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20 animate-in fade-in duration-700">
           <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 border dark:border-slate-700 shadow-lg">
              <Layers size={18} className="text-slate-400" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 mr-2">{t.filterLevel}:</span>
              <div className="flex gap-2">
                 {LEVELS.map(l => (
                    <button 
                      key={l} 
                      onClick={() => setSelectedLevel(l)}
                      className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        selectedLevel === l 
                        ? 'bg-google-blue text-white shadow-lg shadow-google-blue/20' 
                        : 'text-slate-400 hover:text-google-blue'
                      }`}
                    >
                      {l === 'All' ? t.allLevels : l}
                    </button>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {filteredTools.map((tool) => {
            const content = getLocalizedTool(tool.id, lang);
            const themeInfo = getCategoryTheme(tool.category);
            return (
              <div 
                key={tool.id} 
                onClick={() => setSelectedToolId(tool.id)}
                className={`vibrant-hover group cursor-pointer bg-white dark:bg-slate-900/80 theme-colorful:bg-white/20 rounded-[3.5rem] p-10 shadow-2xl border-2 transition-all flex flex-col relative overflow-hidden backdrop-blur-3xl ${themeInfo.border} animate-in fade-in slide-in-from-bottom-12 duration-700`}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-20 h-20 rounded-[1.8rem] flex items-center justify-center overflow-hidden shadow-2xl p-4 bg-white dark:bg-slate-950 theme-colorful:bg-white border dark:border-slate-800 transform group-hover:rotate-12 transition-transform duration-500">
                    <img src={tool.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => handleShare(e, tool.id)}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-500 hover:bg-google-blue hover:text-white transition-all relative group/share"
                      >
                        <Share2 size={16} />
                        <span className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-google-blue text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover/share:opacity-100 transition-opacity pointer-events-none whitespace-nowrap`}>
                          {copiedId === tool.id ? t.copied : t.share}
                        </span>
                      </button>
                      <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm flex items-center ${
                        tool.level === 'Beginner' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                        tool.level === 'Intermediate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
                      }`}>
                        {tool.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-display font-black mb-4 dark:text-white theme-colorful:text-white group-hover:text-google-blue transition-colors duration-300">
                  {content.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 theme-colorful:text-slate-200 text-base leading-relaxed mb-10 flex-grow font-medium">
                  {content.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-8 border-t-2 border-slate-100 dark:border-slate-800/50 theme-colorful:border-white/10">
                  <span className="flex items-center gap-4 text-xs font-black text-google-blue group-hover:gap-6 transition-all uppercase tracking-[0.2em] theme-colorful:text-white">
                    {t.startTutorial} <ArrowRight size={20} className="rtl:rotate-180" />
                  </span>
                  <Star size={20} className="text-slate-200 dark:text-slate-700 theme-colorful:text-white/40 group-hover:text-google-yellow group-hover:fill-current transition-all transform group-hover:scale-125" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Website Creation Flow Section */}
        <section className="mb-40 space-y-20 animate-in fade-in duration-1000">
          <div className="text-center space-y-4">
             <h3 className="text-4xl font-display font-black dark:text-white theme-colorful:text-white tracking-tight">
                {t.deploymentFlowTitle}
             </h3>
             <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Architecting the future of the web</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            {/* Path 1: Standard AI Dev */}
            <div className="p-12 rounded-[3.5rem] bg-slate-100 dark:bg-slate-900/40 theme-colorful:bg-white/5 border-2 border-slate-200 dark:border-slate-800 theme-colorful:border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Path Alpha</div>
              <h4 className="text-2xl font-black mb-12 dark:text-white">{t.flowPath1}</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                <FlowItem icon={<Cpu className="text-google-blue" />} label="AI Studio" />
                <FlowArrow />
                <FlowItem icon={<Github className="text-slate-900 dark:text-white" />} label="GitHub" />
                <FlowArrow />
                <FlowItem icon={<Rocket className="text-google-green" />} label="Vercel" />
              </div>
              <div className="mt-12 p-6 rounded-3xl bg-google-blue/5 border border-google-blue/10">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                  Best for: Rapid prototyping of AI-native applications using prompt engineering and direct API deployment.
                </p>
              </div>
            </div>

            {/* Path 2: Advanced Design AI */}
            <div className="p-12 rounded-[3.5rem] bg-slate-100 dark:bg-slate-900/40 theme-colorful:bg-white/5 border-2 border-slate-200 dark:border-slate-800 theme-colorful:border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Path Omega</div>
              <h4 className="text-2xl font-black mb-12 dark:text-white">{t.flowPath2}</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                <FlowItem icon={<Palette className="text-rose-500" />} label="Stitch" />
                <FlowArrow />
                <FlowItem icon={<Cpu className="text-google-blue" />} label="AI Studio" />
                <FlowArrow />
                <FlowItem icon={<Github className="text-slate-900 dark:text-white" />} label="GitHub" />
                <FlowArrow />
                <FlowItem icon={<Rocket className="text-google-green" />} label="Vercel" />
              </div>
               <div className="mt-12 p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                  Best for: Professional-grade UI/UX with AI logic, leveraging Google Stitch for visual components and Gemini for logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdSenseSlot className="mb-24 h-40 shadow-inner" />
      </main>

      <footer className="bg-white/80 dark:bg-slate-950/90 theme-colorful:bg-slate-950/40 border-t dark:border-slate-900 theme-colorful:border-white/10 py-32 px-4 lg:px-12 mt-40 relative overflow-hidden backdrop-blur-2xl">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-24 relative z-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center gap-6">
              <Zap className="text-google-blue w-14 h-14 animate-pulse" />
              <span className="text-5xl font-display font-black dark:text-white theme-colorful:text-white tracking-tight">Google Mastery</span>
            </div>
            <p className="text-2xl text-slate-500 dark:text-slate-400 theme-colorful:text-slate-200 max-w-xl leading-relaxed font-semibold italic">
              "Mastering the tools of today to build the impossible of tomorrow."
            </p>
            <div className="flex gap-8">
              <a href="mailto:goldnoamai@gmail.com" className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-900 theme-colorful:bg-white/10 flex items-center justify-center hover:bg-google-red hover:text-white transition-all text-slate-500 dark:text-slate-400 theme-colorful:text-white shadow-xl"><Mail size={32} /></a>
              <a href="https://www.linkedin.com/in/noamgold/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-900 theme-colorful:bg-white/10 flex items-center justify-center hover:bg-google-blue hover:text-white transition-all text-slate-500 dark:text-slate-400 theme-colorful:text-white shadow-xl"><Linkedin size={32} /></a>
              <a href="#" className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-900 theme-colorful:bg-white/10 flex items-center justify-center hover:bg-google-blue hover:text-white transition-all text-slate-500 dark:text-slate-400 theme-colorful:text-white shadow-xl"><Globe size={32} /></a>
            </div>
          </div>
          
          <div className="space-y-10">
            <h4 className="text-3xl font-display font-black dark:text-white theme-colorful:text-white border-b-4 border-google-yellow w-fit pb-2">Learning Path</h4>
            <ul className="space-y-6 text-xl text-slate-500 dark:text-slate-400 theme-colorful:text-slate-200 font-bold">
              <li><a href="https://ai.google.dev" className="hover:text-google-blue inline-block transition-colors">AI Academy 2026</a></li>
              <li><a href="https://idx.dev" className="hover:text-google-red inline-block transition-colors">Project IDX Core</a></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-3xl font-display font-black dark:text-white theme-colorful:text-white border-b-4 border-google-red w-fit pb-2">Developer Hub</h4>
            <div className="p-10 rounded-[3rem] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 theme-colorful:from-white/10 theme-colorful:to-white/5 border border-slate-200 dark:border-slate-700 theme-colorful:border-white/20 shadow-2xl space-y-6">
              <p className="font-black text-slate-900 dark:text-white theme-colorful:text-white text-3xl tracking-tight">&copy; Noam Gold AI 2026</p>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 theme-colorful:text-slate-400 font-black">Direct Feedback</p>
                <a href="mailto:goldnoamai@gmail.com" className="text-google-blue theme-colorful:text-white hover:text-blue-600 transition-colors font-black block truncate text-lg">goldnoamai@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto mt-32 pt-16 border-t dark:border-slate-800 theme-colorful:border-white/10 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-600 theme-colorful:text-slate-400 font-mono tracking-[0.6em] uppercase font-black">
            (C) Noam Gold AI 2026 | BUILT FOR THE BOLD | SEND FEEDBACK: goldnoamai@gmail.com
          </p>
        </div>
      </footer>

      {selectedTool && (
        <ToolDetailsModal 
          tool={selectedTool} 
          onClose={() => {
            setSelectedToolId(null);
            window.location.hash = '';
          }} 
          onNavigateToTool={(tool) => setSelectedToolId(tool.id)}
          lang={lang}
        />
      )}
    </div>
  );
};

const FlowItem: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-4 group/item">
    <div className="w-20 h-20 rounded-[1.8rem] bg-white dark:bg-slate-950 flex items-center justify-center shadow-2xl border-2 border-slate-200 dark:border-slate-800 group-hover/item:scale-110 group-hover/item:border-google-blue transition-all duration-500 relative z-10">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{label}</span>
  </div>
);

const FlowArrow: React.FC = () => (
  <div className="hidden md:flex items-center justify-center w-12 h-12 text-slate-300 dark:text-slate-800 animate-pulse">
    <ChevronRight size={32} />
  </div>
);

export default App;
