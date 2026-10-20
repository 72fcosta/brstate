import React, { useState } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [refreshFrequency, setRefreshFrequency] = useState('d0');
  const [numberFormat, setNumberFormat] = useState('pt-BR');
  const [dataDensity, setDataDensity] = useState('compact');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
      <div 
        className="w-full max-w-md bg-surface-container-lowest rounded-lg border border-outline-variant shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant bg-surface-container-low/50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">settings</span>
            <h3 className="text-sm font-bold text-primary">Configurações do Terminal</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-surface-container text-outline">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Frequência de Atualização */}
          <div>
            <label className="text-xs font-semibold text-primary block mb-1.5">
              Frequência de Streaming de Dados
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRefreshFrequency('d0')}
                className={`p-2.5 rounded border text-left text-xs transition-colors ${
                  refreshFrequency === 'd0'
                    ? 'border-primary bg-primary text-white font-semibold'
                    : 'border-outline-variant hover:bg-surface-container-low text-on-surface-variant'
                }`}
              >
                <div className="font-semibold">D-0 Tempo Real</div>
                <div className={`text-[10px] ${refreshFrequency === 'd0' ? 'text-primary-fixed' : 'text-outline'}`}>
                  Latência &lt; 50ms (Recomendado)
                </div>
              </button>
              <button
                type="button"
                onClick={() => setRefreshFrequency('eod')}
                className={`p-2.5 rounded border text-left text-xs transition-colors ${
                  refreshFrequency === 'eod'
                    ? 'border-primary bg-primary text-white font-semibold'
                    : 'border-outline-variant hover:bg-surface-container-low text-on-surface-variant'
                }`}
              >
                <div className="font-semibold">Snapshot EOD</div>
                <div className={`text-[10px] ${refreshFrequency === 'eod' ? 'text-primary-fixed' : 'text-outline'}`}>
                  Consolidado diário
                </div>
              </button>
            </div>
          </div>

          {/* Formatação Numérica */}
          <div>
            <label className="text-xs font-semibold text-primary block mb-1.5">
              Convenção Numérica Tabular
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setNumberFormat('pt-BR')}
                className={`p-2.5 rounded border text-left text-xs transition-colors ${
                  numberFormat === 'pt-BR'
                    ? 'border-primary bg-primary text-white font-semibold'
                    : 'border-outline-variant hover:bg-surface-container-low text-on-surface-variant'
                }`}
              >
                <div className="font-semibold">Padrão Brasil (ABNT)</div>
                <div className={`text-[10px] ${numberFormat === 'pt-BR' ? 'text-primary-fixed' : 'text-outline'}`}>
                  R$ 11,3 Tri • 4,42%
                </div>
              </button>
              <button
                type="button"
                onClick={() => setNumberFormat('en-US')}
                className={`p-2.5 rounded border text-left text-xs transition-colors ${
                  numberFormat === 'en-US'
                    ? 'border-primary bg-primary text-white font-semibold'
                    : 'border-outline-variant hover:bg-surface-container-low text-on-surface-variant'
                }`}
              >
                <div className="font-semibold">Padrão Internacional</div>
                <div className={`text-[10px] ${numberFormat === 'en-US' ? 'text-primary-fixed' : 'text-outline'}`}>
                  $ 11.3 Trillion • 4.42%
                </div>
              </button>
            </div>
          </div>

          {/* Densidade de Interface */}
          <div>
            <label className="text-xs font-semibold text-primary block mb-1.5">
              Densidade de Informação
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setDataDensity('compact')}
                className={`p-2.5 rounded border text-left text-xs transition-colors ${
                  dataDensity === 'compact'
                    ? 'border-primary bg-primary text-white font-semibold'
                    : 'border-outline-variant hover:bg-surface-container-low text-on-surface-variant'
                }`}
              >
                <div className="font-semibold">Alta Densidade (Macro)</div>
                <div className={`text-[10px] ${dataDensity === 'compact' ? 'text-primary-fixed' : 'text-outline'}`}>
                  Visão institucional compacta
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDataDensity('relaxed')}
                className={`p-2.5 rounded border text-left text-xs transition-colors ${
                  dataDensity === 'relaxed'
                    ? 'border-primary bg-primary text-white font-semibold'
                    : 'border-outline-variant hover:bg-surface-container-low text-on-surface-variant'
                }`}
              >
                <div className="font-semibold">Espaçamento Amplo</div>
                <div className={`text-[10px] ${dataDensity === 'relaxed' ? 'text-primary-fixed' : 'text-outline'}`}>
                  Ideal para apresentações
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-5 py-3 bg-surface-container-low/70 border-t border-outline-variant flex items-center justify-between text-xs">
          <span className="text-outline text-[11px]">Configurações salvas localmente</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-primary text-white text-xs font-semibold hover:bg-primary-container"
          >
            Aplicar e Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
