import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
  };

  const borders = {
    success: 'border-emerald-500/30 bg-emerald-950/80 text-emerald-100',
    error: 'border-rose-500/30 bg-rose-950/80 text-rose-100',
    info: 'border-cyan-500/30 bg-slate-900/90 text-cyan-100'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md pointer-events-auto">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-lg shadow-2xl shadow-black/80 ${
            borders[toast.type || 'info']
          }`}
          role="alert"
        >
          {icons[toast.type || 'info']}
          <div className="flex-1 text-sm font-medium pr-2">
            {toast.message}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-0.5 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-400"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
