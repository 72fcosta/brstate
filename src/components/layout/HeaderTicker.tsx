import React from 'react';
import { MACRO_TICKER_DATA } from '../../data/macroData';

interface HeaderTickerProps {
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenExport: () => void;
  onToggleMobileMenu: () => void;
  unreadNotificationsCount: number;
}

export const HeaderTicker: React.FC<HeaderTickerProps> = ({
  onOpenSearch,
  onOpenNotifications,
  onOpenExport,
  onToggleMobileMenu,
  unreadNotificationsCount,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-surface-container-lowest border-b border-outline-variant shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Upper persistent macro ticker */}
      <div className="flex items-center justify-between px-3 lg:px-6 py-2 border-b border-outline-variant/60 bg-surface-container-low/40">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-0.5 text-xs">
          <div className="hidden sm:flex items-center gap-1.5 pr-3 border-r border-outline-variant text-[11px] font-bold text-primary tracking-wider uppercase whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>Macro Ticker</span>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 whitespace-nowrap text-[12px] font-metric-tabular">
            {/* Dedicated Ticker PIB */}
            <div className="ticker-pib inline-flex items-center gap-1.5 group font-medium">
              <span className="text-on-surface-variant text-[11px] font-bold">PIB 2024 (OFICIAL):</span>
              <span className="font-bold text-primary">+3,4%</span>
              <span className="inline-flex items-center text-[10px] font-bold text-secondary">
                ▲ +0.3pp
              </span>
              <span className="text-outline text-[11px]">|</span>
              <span className="text-on-surface-variant text-[11px] font-medium">PIB 2025 (PROJ.):</span>
              <span className="font-semibold text-primary">+2,3%</span>
            </div>

            {/* Dedicated Ticker IPCA */}
            <div className="ticker-ipca inline-flex items-center gap-1.5 group font-medium">
              <span className="text-on-surface-variant text-[11px] font-bold">IPCA 3º Ano (Lula):</span>
              <span className="font-bold text-primary">4,25%</span>
              <span className="inline-flex items-center text-[10px] font-bold text-secondary">
                ▼ Na Meta
              </span>
              <span className="text-outline text-[11px]">|</span>
              <span className="text-on-surface-variant text-[11px] font-medium">Projeção 4º Ano:</span>
              <span className="font-semibold text-primary">3,11%</span>
              <span className="inline-flex items-center text-[10px] font-bold text-secondary">
                ▼ Centro da Meta
              </span>
            </div>

            {/* Remaining financial & sovereign indicators */}
            {MACRO_TICKER_DATA.filter((item) => item.id !== 'pib' && item.id !== 'ipca').map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-1.5 group">
                <span className="text-on-surface-variant text-[11px] font-medium">{item.label}:</span>
                <span className="font-semibold text-primary">{item.value}</span>
                <span
                  className={`inline-flex items-center text-[10px] font-bold ${
                    item.isUp
                      ? item.good ? 'text-secondary' : 'text-error'
                      : item.good ? 'text-secondary' : 'text-error'
                  }`}
                >
                  {item.isUp ? '▲' : '▼'} {item.delta}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 pl-3 text-[11px] text-outline font-mono whitespace-nowrap">
          <span>BRT 15:30</span>
          <span>•</span>
          <span className="text-secondary font-medium">B3 Aberta</span>
        </div>
      </div>

      {/* Main Action Bar */}
      <div className="flex items-center justify-between px-4 lg:px-6 py-2.5 gap-4">
        <div className="flex items-center gap-3">
          {/* Mobile Menu Hamburger */}
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-1.5 rounded-md hover:bg-surface-container text-on-surface-variant"
            aria-label="Abrir Menu Lateral"
          >
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>

          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-surface-container-low border border-outline-variant text-on-surface-variant hover:border-primary/40 hover:bg-surface-container transition-colors text-xs text-left w-52 sm:w-72 lg:w-96"
          >
            <span className="material-symbols-outlined text-[18px] text-outline">search</span>
            <span className="flex-1 text-outline truncate">Buscar indicador, série macroeconômica...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-outline bg-surface-container-lowest border border-outline-variant rounded">
              Ctrl+K
            </kbd>
          </button>

          {/* Institutional Governance Badge */}
          <div className="badge-source hidden xl:flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Base Consolidada</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 action-buttons">
          {/* Notifications */}
          <button
            onClick={onOpenNotifications}
            className="relative p-2 rounded-md hover:bg-surface-container text-on-surface-variant transition-colors"
            title="Releases e Notificações Oficiais"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-white" />
            )}
          </button>

          {/* Export Report Action */}
          <button
            onClick={onOpenExport}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-all shadow-sm active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[17px] text-secondary-fixed">download</span>
            <span className="hidden sm:inline">Exportar Relatório</span>
            <span className="sm:hidden">Exportar</span>
          </button>
        </div>
      </div>
    </header>
  );
};

