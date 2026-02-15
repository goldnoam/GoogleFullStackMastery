import React, { useState, useEffect, useMemo } from 'react';
import { X, ExternalLink, ChevronRight, ChevronLeft, CheckCircle2, Terminal, Lightbulb, Link2 } from 'lucide-react';
import { GoogleTool, LanguageCode, GoogleToolContent } from '../types';
import { GOOGLE_TOOLS } from '../constants';
import { TRANSLATIONS, getLocalizedTool } from '../i18n';

interface ToolDetailsModalProps {
  tool: GoogleTool;
  onClose: () => void;
  onNavigateToTool?: (tool: GoogleTool) => void;
  lang: LanguageCode;
}

export const ToolDetailsModal: React.FC<ToolDetailsModalProps> = ({ tool, onClose, onNavigateToTool, lang }) => {
  const t = TRANSLATIONS[lang];
  const isRtl = t.dir === 'rtl';
  const [activeStep, setActiveStep] = useState(0);

  const content: GoogleToolContent = useMemo(() => getLocalizedTool(tool.id, lang), [tool.id, lang]);

  useEffect(() => {
    setActiveStep(0);
  }, [tool.id]);

  const nextStep = () => {
    if (activeStep < content.tutorial.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const getToolById = (id: string) => GOOGLE_TOOLS.find(t => t.id === id);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between p-6 md:p-8 border-b dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center p-2">
              <img src={tool.icon} alt="" className="w-full h-full object-contain" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-black dark:text-white">{content.name}</h2>
              <span className="text-sm text-google-blue font-bold uppercase tracking-wider">{tool.category}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors dark:text-slate-400"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto no-scrollbar p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Lightbulb className="text-google-yellow" size={20} /> {t.useCases}
                </h3>
                <ul className="space-y-3">
                  {content.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-google-blue flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Terminal className="text-google-red" size={20} /> {t.advancedFeatures}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.advancedFeatures.map((feat, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      {feat}
                    </span>
                  ))}
                </div>
              </section>

              {tool.relatedTools.length > 0 && (
                <section>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 dark:text-white">
                    <Link2 className="text-google-green" size={20} /> {t.relatedTools}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {tool.relatedTools.map((id) => {
                      const related = getToolById(id);
                      if (!related) return null;
                      const relatedContent = getLocalizedTool(id, lang);
                      return (
                        <button 
                          key={id}
                          onClick={() => onNavigateToTool?.(related)}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all text-sm font-medium dark:text-slate-300"
                        >
                          <img src={related.icon} alt="" className="w-5 h-5 object-contain" aria-hidden="true" />
                          {relatedContent.name}
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              <div className="pt-4">
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-google-blue text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20"
                >
                  {t.visitDocs} <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold dark:text-white">{t.miniTutorial}</h3>
                <div className="flex gap-1">
                  {content.tutorial.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all ${i === activeStep ? 'w-6 bg-google-blue' : 'w-2 bg-slate-200 dark:bg-slate-800'}`} 
                    />
                  ))}
                </div>
              </div>

              {content.tutorial.length > 0 && (
                <div className="flex-grow animate-in slide-in-from-right-4 duration-300" key={`${tool.id}-${activeStep}`}>
                  <h4 className="text-xl font-display font-bold mb-3 dark:text-slate-200">
                    {content.tutorial[activeStep].title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {content.tutorial[activeStep].description}
                  </p>

                  {content.tutorial[activeStep].codeSnippet && (
                    <div className="bg-slate-900 rounded-xl p-4 mb-6 font-mono text-xs overflow-x-auto">
                      <code className="text-blue-400">{content.tutorial[activeStep].codeSnippet}</code>
                    </div>
                  )}

                  {content.tutorial[activeStep].actionLabel && (
                    <button className="w-full py-3 border-2 border-google-blue text-google-blue rounded-xl font-bold hover:bg-google-blue hover:text-white transition-all">
                      {content.tutorial[activeStep].actionLabel}
                    </button>
                  )}
                </div>
              )}

              <div className="mt-8 flex justify-between items-center">
                <button 
                  onClick={prevStep}
                  disabled={activeStep === 0}
                  className={`p-2 rounded-xl transition-all ${activeStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white'}`}
                  aria-label="Previous Step"
                >
                  <ChevronLeft size={24} className={isRtl ? 'rotate-180' : ''} />
                </button>
                
                {activeStep === content.tutorial.length - 1 ? (
                  <button 
                    onClick={onClose}
                    className="flex items-center gap-2 text-google-green font-bold animate-pulse"
                  >
                    {t.complete} <CheckCircle2 size={20} />
                  </button>
                ) : (
                  <button 
                    onClick={nextStep}
                    className="p-2 bg-google-blue text-white rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
                    aria-label="Next Step"
                  >
                    <ChevronRight size={24} className={isRtl ? 'rotate-180' : ''} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};