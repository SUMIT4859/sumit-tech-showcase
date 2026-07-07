'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show on first paint of this tab session - so navigation feels instant.
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('sp-loaded')) { setVisible(false); return; }
    const t = setTimeout(() => {
      sessionStorage.setItem('sp-loaded', '1');
      setVisible(false);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grid-pattern radial-fade opacity-30" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="h-16 w-16 rounded-2xl bg-foreground text-background flex items-center justify-center font-display font-bold text-2xl">SP</div>
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-foreground"
                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/30 animate-pulse" />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 animate-pulse" style={{ animationDelay: '120ms' }} />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" style={{ animationDelay: '240ms' }} />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Sumitkumar Pandit</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
