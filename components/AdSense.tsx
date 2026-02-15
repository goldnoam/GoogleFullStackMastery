
import React from 'react';

export const AdSenseSlot: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 min-h-[100px] text-xs text-slate-400 font-mono uppercase tracking-widest ${className}`}>
      <span>Advertisement Slot</span>
    </div>
  );
};
