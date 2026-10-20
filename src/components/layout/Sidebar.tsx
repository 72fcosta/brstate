import React from 'react';
import { SectionId } from '../../types';

interface SidebarProps {
  currentSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onSelectSection,
  isOpenMobile,
  onCloseMobile,
}) => {
  const navItems = [
    {
      id: 'overview' as SectionId,
      label: 'Visão Geral',
      icon: 'dashboard',
      badge: '2025',
    },
    {
      id: 'pib' as SectionId,
      label: 'Atividade Econômica / PIB',
      icon: 'trending_up',
      badge: '+3,1%',
      badgeColor: 'bg-secondary-fixed text-on-secondary-fixed',
    },
    {
      id: 'inflacao' as SectionId,
      label: 'Inflação & Preços',
      icon: 'price_change',
      badge: '4,42%',
      badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    },
    {
      id: 'selic' as SectionId,
      label: 'Política Monetária & Juros',
      icon: 'account_balance',
      badge: '13,25%',
    },
    {
      id: 'trabalho' as SectionId,
      label: 'Mercado de Trabalho',
      icon: 'badge',
      badge: '6,4%',
    },
    {
      id: 'externo' as SectionId,
      label: 'Setor Externo & Câmbio',
      icon: 'currency_exchange',
    },
    {
      id: 'fiscal' as SectionId,
      label: 'Fiscal & Dívida Pública',
      icon: 'receipt_long',
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 lg:w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col justify-between transition-transform duration-200 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Header */}
          <div className="px-5 py-4 border-b border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Institutional Logo SVG */}
              <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center relative shadow-sm">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6L24 14L16 22L8 14Z" fill="#059669" opacity="0.4" />
                  <path
                    d="M9 20L13 15L18 18L23 10"
                    stroke="#10b981"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="23" cy="10" r="2" fill="#f59e0b" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-xl tracking-tight text-primary">
                    Br<span className="text-secondary">State</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] text-outline uppercase font-medium tracking-wider">
                  Inteligência Macroeconômica
                </span>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1 rounded hover:bg-surface-container text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Navigation Section */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
            <div>
              <div className="px-3 pb-2 text-[10px] uppercase tracking-wider font-semibold text-outline">
                Séries & Módulos
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const isActive = currentSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectSection(item.id);
                        onCloseMobile();
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-medium transition-colors text-left ${
                        isActive
                          ? 'bg-primary text-white shadow-sm font-semibold'
                          : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`material-symbols-outlined text-[19px] ${
                            isActive ? 'text-secondary-fixed' : 'text-outline'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`ml-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                            isActive
                              ? 'bg-primary-container text-white border border-primary-fixed-dim/30'
                              : item.badgeColor || 'bg-surface-container text-on-surface-variant'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div>
              <div className="px-3 pb-2 text-[10px] uppercase tracking-wider font-semibold text-outline">
                Sistema & Referência
              </div>
              <nav className="space-y-1">
                <button
                  onClick={() => {
                    onSelectSection('config');
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-xs font-medium transition-colors ${
                    currentSection === 'config'
                      ? 'bg-primary text-white font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[19px] text-outline">
                    settings
                  </span>
                  <span>Configurações</span>
                </button>
                <button
                  onClick={() => {
                    onSelectSection('metodologia');
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-xs font-medium transition-colors ${
                    currentSection === 'metodologia'
                      ? 'bg-primary text-white font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[19px] text-outline">
                    menu_book
                  </span>
                  <span>Metodologia & APIs</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Institutional Telemetry Footer */}
          <div className="p-3 border-t border-outline-variant bg-surface-container-low/50">
            <div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant text-[11px] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-outline font-medium">Conexão Oficial</span>
                <span className="inline-flex items-center gap-1 text-secondary font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Live (42ms)
                </span>
              </div>
              <div className="text-[10px] text-on-surface-variant flex items-center justify-between">
                <span>SIDRA • BACEN v2.4</span>
                <span className="font-mono text-outline">D-0</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

