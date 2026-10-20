import React from 'react';
import { SectionId } from '../../types';
import { 
  PIB_ANNUAL_DATA, 
  INFLATION_COMPARATIVE_SERIES, 
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
            <span>Edição 2025</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Painel Executivo de Inteligência Macroeconômica
          </h1>
          <p className="text-xs sm:text-sm text-on-primary-container mt-1 max-w-3xl leading-relaxed">
            Consolidação analítica de atividade econômica (PIB), dinâmicas de preços e inflação (IPCA/IGP-M), política monetária e posicionamento das contas públicas.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onSelectSection('pib')}
            className="px-3.5 py-2 rounded-md bg-secondary text-white text-xs font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span className="material-symbols-outlined text-[17px]">trending_up</span>
            <span>Painel do PIB</span>
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
              <span className="font-semibold text-primary">SCN • IBGE</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">PIB do Brasil (2024 Fechado)</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              +3,1% <span className="text-sm font-normal text-on-surface-variant">real (R$ 11,3 Tri)</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold font-mono">▲ Serviços & Consumo</span>
            <span className="text-[11px] text-outline font-mono">2025P: +2,2% Focus</span>
          </div>
        </div>

        {/* Pillar 2: Preços e Inflação */}
        <div
          onClick={() => onSelectSection('inflacao')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">IBGE • IPCA</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Inflação Oficial (12 Meses)</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              4,42% <span className="text-xs font-medium text-secondary font-mono">(Teto 4,50%)</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-error font-bold font-mono">▲ IGP-M: 5,12%</span>
            <span className="text-[11px] text-outline font-mono">Núcleo: 3,95%</span>
          </div>
        </div>

        {/* Pillar 3: Política Monetária */}
        <div
          onClick={() => onSelectSection('selic')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">BACEN • COPOM</span>
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
              <span className="font-semibold text-primary">PNAD CONTÍNUA</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Taxa de Desocupação</div>
            <div className="text-2xl font-bold text-secondary mt-1 tabular-nums">
              6,4% <span className="text-xs font-medium text-outline font-mono">(Mínima histórica)</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold font-mono">▼ -0,4pp no trimestre</span>
            <span className="text-[11px] text-outline font-mono">102,8M Ocupados</span>
          </div>
        </div>

        {/* Pillar 5: Setor Externo & Câmbio */}
        <div
          onClick={() => onSelectSection('externo')}
          className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/40 hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">BACEN • PTAX / MDIC</span>
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
              <span className="font-semibold text-primary">STN • BACEN</span>
              <span className="group-hover:text-primary transition-colors flex items-center gap-0.5">
                Detalhes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Dívida Bruta (DBGG / PIB)</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              78,5% <span className="text-xs font-normal text-outline">do PIB</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-outline font-medium font-mono">Resultado Primário: -0,6%</span>
            <span className="text-[11px] text-secondary font-mono font-semibold">No Arcabouço</span>
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
                Trajetória do PIB Anual (2019 – 2025)
              </h3>
              <p className="text-[11px] text-outline">Variação Real % das Contas Nacionais</p>
            </div>
            <button
              onClick={() => onSelectSection('pib')}
              className="text-xs text-primary font-semibold hover:underline flex items-center gap-0.5"
            >
              Ver Completo <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 pt-2">
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
                <span className="text-[10px] font-mono font-bold text-primary">
                  {item.variationReal > 0 ? `+${item.variationReal}%` : `${item.variationReal}%`}
                </span>
                <span className="text-[9px] font-mono text-outline">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inflation & Target Snapshot Preview */}
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container text-[20px]">show_chart</span>
                IPCA vs Banda Contínua CMN (2024 – 2025)
              </h3>
              <p className="text-[11px] text-outline">Convergência do índice acumulado em 12 meses</p>
            </div>
            <button
              onClick={() => onSelectSection('inflacao')}
              className="text-xs text-primary font-semibold hover:underline flex items-center gap-0.5"
            >
              Ver Completo <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>

          <div className="space-y-2 pt-2">
            {INFLATION_COMPARATIVE_SERIES.slice(-5).map((point) => (
              <div key={point.date} className="p-2.5 rounded bg-surface-container-low/50 border border-outline-variant/60 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-primary">{point.date}</span>
                <div className="flex items-center gap-4 font-mono">
                  <span>IPCA: <strong className="text-secondary">{point.ipca12M}%</strong></span>
                  <span>IGP-M: <strong className="text-tertiary-container">{point.igpm12M}%</strong></span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">
                    Dentro da Meta (3,0% ± 1,5pp)
                  </span>
                </div>
              </div>
            ))}
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
