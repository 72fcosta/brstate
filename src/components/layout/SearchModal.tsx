import React, { useState, useEffect, useRef } from 'react';
import { SEARCH_INDEX } from '../../data/macroData';
import { SectionId } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: SectionId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectSection,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onSelectSection('overview'); // or parent toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectSection]);

  if (!isOpen) return null;

  const filtered = SEARCH_INDEX.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-primary/40 backdrop-blur-sm">
      <div
        className="w-full max-w-2xl bg-surface-container-lowest rounded-lg border border-outline-variant shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-outline-variant gap-3 bg-surface-container-low/50">
          <span className="material-symbols-outlined text-outline text-[22px]">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite termos como PIB, IPCA, Selic, Câmbio, Dívida..."
            className="w-full bg-transparent text-sm text-primary placeholder:text-outline outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-outline hover:text-primary px-1.5 py-0.5 rounded"
            >
              Limpar
            </button>
          )}
          <kbd className="px-2 py-0.5 text-[10px] font-mono text-outline bg-surface-container border border-outline-variant rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-outline-variant/40">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-outline text-xs">
              Nenhuma série temporal ou indicador correspondente a "{query}".
            </div>
          ) : (
            filtered.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelectSection(item.section as SectionId);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3 rounded-md hover:bg-surface-container-low transition-colors text-left group"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-primary group-hover:text-secondary transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded font-mono font-medium bg-surface-container text-on-surface-variant">
                      {item.code}
                    </span>
                  </div>
                  <span className="text-[11px] text-outline">{item.category}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Acessar</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-surface-container-low/70 border-t border-outline-variant text-[11px] text-outline flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>Navegação instantânea</span>
            <span>•</span>
            <span>Índice Oficial de Séries</span>
          </div>
          <button onClick={onClose} className="hover:text-primary text-[11px] font-medium">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

