import React from 'react';
import { SectionId } from '../../types';
import { 
  PIB_ANNUAL_DATA, 
  SYSTEM_NOTIFICATIONS 
} from '../../data/macroData';

interface OverviewViewProps {
  onSelectSection: (section: SectionId) => void;
  onOpenExport: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onSelectSection, onOpenExport }) => {
  return (
    <div className="space-y-6">
      {/* Top Welcome & Executive Summary Banner */}
      <div className="p-5 rounded-lg bg-primary-container text-white border border-primary-fixed-dim/20 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-on-primary-container uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
            <span>Terminal Macroeconômico Soberano • Brasil</span>
            <span>•</span>
            <span className="badge-source bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-0.5 rounded-md inline-flex items-center gap-1 shadow-xs font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Base Consolidada
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Painel Executivo de Inteligência Macroeconômica
          </h1>
          <p className="text-xs sm:text-sm text-on-primary-container mt-1 max-w-3xl leading-relaxed">
            Consolidação analítica de atividade econômica (PIB a +3,4%), dinâmicas de inflação parametrizadas por mandato (Bolsonaro vs. Lula), política monetária e posicionamento das contas públicas.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onSelectSection('pib')}
            className="px-3.5 py-2 rounded-md bg-secondary text-white text-xs font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span className="material-symbols-outlined text-[17px]">trending_up</span>
            <span>Painel do PIB (+3,4%)</span>
          </button>
          <button
            onClick={() => onSelectSection('inflacao')}
            className="px-3.5 py-2 rounded-md bg-surface-container-lowest/15 text-white border border-white/20 text-xs font-semibold hover:bg-surface-container-lowest/25 transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[17px]">price_change</span>
            <span>Painel de Inflação</span>
          </button>
          <button
            onClick={onOpenExport}
            className="px-3 py-2 rounded-md bg-surface-container-lowest/10 text-white border border-white/20 text-xs font-semibold hover:bg-surface-container-lowest/20 transition-colors flex items-center gap-1.5"
            title="Exportar Relatório Consolidado"
          >
            <span className="material-symbols-outlined text-[17px] text-secondary-fixed">download</span>
            <span>Dossiê PDF</span>
          </button>
        </div>
      </div>

      {/* 6 Sovereign Pillar Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Pillar 1: Atividade Econômica */}
        <div
          onClick={() => onSelectSection('pib')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Atividade Econômica</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">PIB do Brasil (Consolidado 2024)</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              +3,4% <span className="text-sm font-normal text-on-surface-variant">real (R$ 11,35 Tri)</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold font-mono">▲ +0.3pp oficial</span>
            <span className="text-[11px] text-outline font-mono">2025P: +2,3% | 4ºA: +1,9%*</span>
          </div>
        </div>

        {/* Pillar 2: Preços e Inflação */}
        <div
          onClick={() => onSelectSection('inflacao')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Inflação & Preços</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">IPCA 3º Ano Lula (2025)</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              4,25% <span className="text-xs font-medium text-secondary font-mono">(Na Meta CMN)</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold font-mono">▼ -5,81 pp vs 3ºA Bol (10,06%)</span>
            <span className="text-[11px] text-outline font-mono">4ºA: 3,11%</span>
          </div>
        </div>

        {/* Pillar 3: Política Monetária */}
        <div
          onClick={() => onSelectSection('selic')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Política Monetária</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Taxa Básica Selic Meta</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              13,25% <span className="text-sm font-normal text-on-surface-variant">a.a.</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-primary font-bold font-mono">Ciclo Restritivo</span>
            <span className="text-[11px] text-outline font-mono">DI Jan/27: 13,95%</span>
          </div>
        </div>

        {/* Pillar 4: Mercado de Trabalho */}
        <div
          onClick={() => onSelectSection('trabalho')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Mercado de Trabalho</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Taxa de Desocupação (3º Ano)</div>
            <div className="text-2xl font-bold text-secondary mt-1 tabular-nums">
              5,6% <span className="text-xs font-medium text-outline font-mono">(Mínima histórica)</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold font-mono">Lula 7,8% → 5,3% Proj.</span>
            <span className="text-[11px] text-outline font-mono">Bol: 11,9% → 9,3%</span>
          </div>
        </div>

        {/* Pillar 5: Setor Externo & Câmbio */}
        <div
          onClick={() => onSelectSection('externo')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Setor Externo & Câmbio</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Câmbio USD / BRL</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              R$ 5,74 <span className="text-xs font-normal text-outline">comercial</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold font-mono">Superávit: +US$ 74 Bi</span>
            <span className="text-[11px] text-outline font-mono">Reservas: US$ 355 Bi</span>
          </div>
        </div>

        {/* Pillar 6: Fiscal & Dívida */}
        <div
          onClick={() => onSelectSection('fiscal')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Estatísticas Fiscais</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Dívida Bruta (DBGG 2025)</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              78,64% <span className="text-xs font-normal text-outline">do PIB</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-outline font-medium font-mono">Bol: -2,76pp | Lula: +9,04pp</span>
            <span className="text-[11px] text-secondary font-mono font-semibold">Consolidado</span>
          </div>
        </div>
      </div>

      {/* Comparative Trends Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PIB Snapshot Preview */}
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">bar_chart</span>
                Trajetória do PIB Anual (2019 – 2026*)
              </h3>
              <p className="text-[11px] text-outline">Variação Real % oficial e projeções (*até 2º tri vs mesmo período anterior)</p>
            </div>
            <button
              onClick={() => onSelectSection('pib')}
              className="text-xs text-primary font-semibold hover:underline flex items-center gap-0.5"
            >
              Ver Completo <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 pt-2">
            {PIB_ANNUAL_DATA.map((item) => (
              <div key={item.year} className="flex flex-col items-center gap-1.5">
                <div className="w-full bg-surface-container-low rounded-t flex flex-col justify-end h-24 p-1">
                  <div
                    className={`w-full rounded-xs transition-all ${
                      item.variationReal >= 0 ? 'bg-secondary' : 'bg-error'
                    }`}
                    style={{
                      height: `${Math.min(100, Math.abs(item.variationReal) * 16)}%`,
                    }}
                  ></div>
                </div>
                <span className="text-[10px] font-mono font-bold text-primary tabular-nums">
                  {item.variationReal > 0 ? `+${item.variationReal}%` : `${item.variationReal}%`}
                  {item.footnote ? '*' : ''}
                </span>
                <span className="text-[9px] font-mono text-outline truncate max-w-full text-center">
                  {item.year.includes('4º') ? '4ºA*' : item.year.replace(/[^\d]/g, '') || item.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Inflation & Mandates Snapshot Preview */}
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">compare_arrows</span>
                IPCA: Comparativo Consolidado de Mandatos
              </h3>
              <p className="text-[11px] text-outline">Dinâmica comparativa de inflação anual: Bolsonaro vs. Lula</p>
            </div>
            <button
              onClick={() => onSelectSection('inflacao')}
              className="text-xs text-primary font-semibold hover:underline flex items-center gap-0.5"
            >
              Ver Completo <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="space-y-2 pt-2">
            <div className="p-2.5 rounded bg-surface-container-low/50 border border-outline-variant/60 flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-primary">1º Ano (2019 vs 2023)</span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-slate-700">Bol: <strong>4,31%</strong></span>
                <span className="text-secondary">Lula: <strong>4,62%</strong></span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-primary font-bold">
                  +0,31 pp
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded bg-surface-container-low/50 border border-outline-variant/60 flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-primary">2º Ano (2020 vs 2024)</span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-slate-700">Bol: <strong>4,52%</strong></span>
                <span className="text-secondary">Lula: <strong>4,83%</strong></span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-primary font-bold">
                  +0,31 pp
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-emerald-950">3º Ano (2021 vs 2025)</span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-error font-bold">Bol: 10,06%</span>
                <span className="text-secondary font-bold">Lula: 4,25%</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">
                  -5,81 pp
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded bg-surface-container-low/50 border border-outline-variant/60 flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-primary">4º Ano (2022 vs 2026 Proj.)</span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-slate-700">Bol: <strong>4,39%</strong></span>
                <span className="text-secondary">Lula: <strong>3,11%</strong></span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-secondary-fixed text-on-secondary-fixed font-bold">
                  -1,28 pp
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Macro Releases Feed & Terminal Status */}
      <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">feed</span>
            Releases Oficiais e Comunicados Relevantes
          </h3>
          <span className="text-[11px] font-mono text-outline">Atualização Diária</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SYSTEM_NOTIFICATIONS.map((item) => (
            <div key={item.id} className="p-3.5 rounded-md bg-surface-container-low/40 border border-outline-variant hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between text-[10px] font-mono text-outline mb-1">
                <span className="font-semibold text-primary px-1.5 py-0.2 rounded bg-surface-container">
                  {item.category}
                </span>
                <span>{item.time}</span>
              </div>
              <h4 className="text-xs font-semibold text-primary">{item.title}</h4>
              <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
