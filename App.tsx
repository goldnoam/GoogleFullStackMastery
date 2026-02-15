
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sun, 
  Moon, 
  Search, 
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
  Palette
} from 'lucide-react';
import { GOOGLE_TOOLS, CATEGORIES } from './constants';
import { CategoryType, GoogleTool, LanguageCode, GoogleToolContent } from './types';
import { AdSenseSlot } from './components/AdSense';
import { ToolDetailsModal } from './components/ToolDetailsModal';
import { TRANSLATIONS, getLocalizedTool } from './i18n';

const FONT_SIZES = ['text-sm', 'text-base', 'text-lg'];

type Theme = 'light' | 'dark' | 'colorful';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<LanguageCode>('en');
  const [fontSizeIndex, setFontSizeIndex] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark', 'theme-colorful');
    if (theme === 'dark') html.classList.add('dark');
    else if (theme === 'light') html.classList.add('light');
    else if (theme === 'colorful') html.classList.add('theme-colorful');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  useEffect(() => {
    document.title = `${t.title} | AI Ecosystem Course 2026`;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.description);

    let favicon = document.querySelector("link[rel*='icon']");
    if (!favicon) {
      favicon = document.createElement('link');
      (favicon as HTMLLinkElement).rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('href', 'https://fonts.gstatic.com/s/i/short-term/release/googleg/assistant/default/24px.svg');
  }, [t.title, t.description]);

  const filteredTools = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return GOOGLE_TOOLS.filter(tool => {
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const content = getLocalizedTool(tool.id, lang);
      const matchesSearch = !query || 
        content.name.toLowerCase().includes(query) || 
        content.description.toLowerCase().includes(query) ||
        content.features.some(f => f.toLowerCase().includes(query)) ||
        content.advancedFeatures.some(af => af.toLowerCase().includes(query)) ||
        content.useCases.some(u => u.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

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

  return (
    <div className={`min-h-screen transition-all duration-700 flex flex-col relative ${FONT_SIZES[fontSizeIndex]} selection:bg-google-blue selection:text-white`}>
      {/* Dynamic Background Blurs */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 dark:opacity-30 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] bg-rose-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[10%] w-[60%] h-[40%] bg-emerald-500/15 blur-[180px] rounded-full" />
        <div className="absolute center w-[30%] h-[30%] bg-amber-500/10 blur-[140px] rounded-full" />
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

        <div className="flex-1 max-w-xl mx-6 hidden lg:block">
          <div className="relative group">
            <Search className="absolute ltr:left-5 rtl:right-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6 group-focus-within:text-google-blue group-focus-within:scale-110 transition-all" />
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              className="w-full ltr:pl-14 rtl:pr-14 ltr:pr-6 rtl:pl-6 py-4 rounded-[1.5rem] bg-slate-200/40 dark:bg-slate-900/60 theme-colorful:bg-white/20 border-2 border-transparent focus:border-google-blue focus:bg-white dark:focus:bg-slate-900 outline-none transition-all dark:text-white theme-colorful:text-white text-lg shadow-inner"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
                <div className="absolute ltr:right-0 rtl:left-0 mt-3 w-60 bg-white/95 dark:bg-slate-900/95 theme-colorful:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800 z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-3 flex flex-col gap-1.5">
                    {(Object.keys(TRANSLATIONS) as LanguageCode[]).map((l) => (
                      <button 
                        key={l}
                        onClick={() => { setLang(l); setIsLangOpen(false); }}
                        className={`px-5 py-4 text-left rtl:text-right rounded-2xl hover:bg-google-blue/10 transition-all flex items-center justify-between text-sm font-bold ${lang === l ? 'text-google-blue bg-google-blue/5' : 'dark:text-slate-300 theme-colorful:text-slate-300'}`}
                      >
                        {languageLabels[l]}
                        {lang === l && <div className="w-2.5 h-2.5 rounded-full bg-google-blue shadow-[0_0_10px_rgba(66,133,244,0.5)]" />}
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
        <div className="mb-24 text-center max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="flex flex-wrap items-center justify-center gap-6">
             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-google-blue/10 text-google-blue text-[12px] font-black uppercase tracking-[0.2em] border border-google-blue/20 shadow-xl shadow-google-blue/5">
              <Zap size={16} className="fill-current" /> Quantum Mastery Hub
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 text-emerald-500 text-[12px] font-black uppercase tracking-[0.2em] border border-emerald-500/20 shadow-xl shadow-emerald-500/5">
              <Trophy size={16} className="fill-current" /> {GOOGLE_TOOLS.length} Active Modules
            </div>
          </div>
          <h2 className="text-6xl md:text-9xl font-display font-black tracking-tight dark:text-white theme-colorful:text-white leading-[1] bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-300 dark:to-slate-600 theme-colorful:from-white theme-colorful:to-purple-200">
            {t.subtitle}
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 theme-colorful:text-slate-100 leading-relaxed max-w-3xl mx-auto font-semibold">
            {t.description}
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x scroll-smooth items-center lg:justify-center md:flex-wrap px-4 mb-20">
          <button 
            onClick={() => setSelectedCategory('All')}
            className={`px-12 py-6 rounded-[2.5rem] font-black whitespace-nowrap transition-all snap-start flex items-center gap-4 border-2 shadow-xl ${
              selectedCategory === 'All' 
              ? 'bg-slate-900 dark:bg-white theme-colorful:bg-white border-slate-900 dark:border-white theme-colorful:border-white text-white dark:text-slate-900 theme-colorful:text-slate-900 scale-110 z-10' 
              : 'bg-white/60 dark:bg-slate-900/40 theme-colorful:bg-white/10 border-slate-200/50 dark:border-slate-800/50 theme-colorful:border-white/10 dark:text-slate-300 theme-colorful:text-white hover:border-google-blue/40'
            }`}
          >
            <Sparkles size={24} />
            {t.allCategories}
          </button>
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.type}
              onClick={() => setSelectedCategory(cat.type)}
              className={`px-12 py-6 rounded-[2.5rem] font-black flex items-center gap-4 whitespace-nowrap transition-all snap-start border-2 shadow-xl ${
                selectedCategory === cat.type 
                ? `${cat.color} border-transparent text-white scale-110 z-10 ${cat.shadow}` 
                : `bg-white/60 dark:bg-slate-900/40 theme-colorful:bg-white/10 border-slate-200/50 dark:border-slate-800/50 theme-colorful:border-white/10 dark:text-slate-300 theme-colorful:text-white hover:border-google-blue/40`
              }`}
            >
              <span className={`p-2.5 rounded-2xl bg-white/20 backdrop-blur-md`}>{cat.icon}</span>
              {cat.type}
            </button>
          ))}
        </div>

        <AdSenseSlot className="mb-24 h-40 shadow-inner" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, idx) => {
              const content = getLocalizedTool(tool.id, lang);
              const themeInfo = getCategoryTheme(tool.category);
              return (
                <div 
                  key={tool.id} 
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`vibrant-hover group cursor-pointer bg-white dark:bg-slate-900/80 theme-colorful:bg-white/20 rounded-[3.5rem] p-12 shadow-2xl border-2 transition-all flex flex-col relative overflow-hidden backdrop-blur-3xl ${themeInfo.border} animate-in fade-in slide-in-from-bottom-12 duration-700 delay-[${idx * 40}ms]`}
                >
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-24 h-24 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-2xl p-5 bg-white dark:bg-slate-950 theme-colorful:bg-white border dark:border-slate-800 transform group-hover:rotate-12 transition-transform duration-500">
                      <img src={tool.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-sm ${
                        tool.level === 'Beginner' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                        tool.level === 'Intermediate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                        'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
                      }`}>
                        {tool.level}
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 theme-colorful:text-slate-200">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-display font-black mb-6 dark:text-white theme-colorful:text-white group-hover:text-google-blue transition-colors duration-300">
                    {content.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 theme-colorful:text-slate-200 text-lg leading-relaxed mb-12 flex-grow font-medium">
                    {content.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {content.features.slice(0, 3).map(f => (
                      <span key={f} className="text-[11px] uppercase tracking-widest font-black bg-slate-100 dark:bg-slate-800/60 theme-colorful:bg-white/20 text-slate-600 dark:text-slate-300 theme-colorful:text-white px-5 py-2.5 rounded-2xl border border-slate-200/50 dark:border-slate-800 theme-colorful:border-white/20 shadow-sm">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-10 border-t-2 border-slate-100 dark:border-slate-800/50 theme-colorful:border-white/10">
                    <span className="flex items-center gap-4 text-md font-black text-google-blue group-hover:gap-7 transition-all uppercase tracking-[0.2em] theme-colorful:text-white">
                      {t.startTutorial} <ArrowRight size={24} className="rtl:rotate-180" />
                    </span>
                    <Star size={24} className="text-slate-200 dark:text-slate-700 theme-colorful:text-white/40 group-hover:text-google-yellow group-hover:fill-current transition-all transform group-hover:scale-125" />
                  </div>

                  {/* Aesthetic Corner Gradient */}
                  <div className={`absolute bottom-[-10%] right-[-10%] w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${themeInfo.color}`} />
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-40 text-center">
               <div className="mb-10 flex justify-center">
                 <Filter size={80} className="text-slate-300 dark:text-slate-700 theme-colorful:text-white/40 animate-bounce" />
               </div>
               <p className="text-4xl font-display font-black dark:text-white theme-colorful:text-white mb-6">Oops! No tools matching "{searchQuery}"</p>
               <button onClick={() => setSearchQuery('')} className="px-12 py-5 bg-gradient-to-r from-google-blue to-indigo-600 text-white rounded-3xl font-black text-lg uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Clear Filters</button>
            </div>
          )}
        </div>
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
              <a href="#" className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-900 theme-colorful:bg-white/10 flex items-center justify-center hover:bg-google-blue hover:text-white transition-all text-slate-500 dark:text-slate-400 theme-colorful:text-white shadow-xl"><Globe size={32} /></a>
            </div>
          </div>
          
          <div className="space-y-10">
            <h4 className="text-3xl font-display font-black dark:text-white theme-colorful:text-white border-b-4 border-google-yellow w-fit pb-2">Learning Path</h4>
            <ul className="space-y-6 text-xl text-slate-500 dark:text-slate-400 theme-colorful:text-slate-200 font-bold">
              <li><a href="https://ai.google.dev" className="hover:text-google-blue hover:ltr:translate-x-2 inline-block transition-transform transition-colors">AI Academy 2026</a></li>
              <li><a href="https://idx.dev" className="hover:text-google-red hover:ltr:translate-x-2 inline-block transition-transform transition-colors">Project IDX Core</a></li>
              <li><a href="https://firebase.google.com" className="hover:text-google-yellow hover:ltr:translate-x-2 inline-block transition-transform transition-colors">Cloud Functions</a></li>
              <li><a href="https://notebooklm.google.com" className="hover:text-google-green hover:ltr:translate-x-2 inline-block transition-transform transition-colors">NotebookLM Insights</a></li>
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

        {/* Footer Mesh Ornament */}
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-google-blue/5 blur-[100px] rounded-full pointer-events-none" />
      </footer>

      {selectedTool && (
        <ToolDetailsModal 
          tool={selectedTool} 
          onClose={() => setSelectedToolId(null)} 
          onNavigateToTool={(tool) => setSelectedToolId(tool.id)}
          lang={lang}
        />
      )}
    </div>
  );
};

export default App;
