import React from 'react';
import { FUV_UNEMPLOYMENT_MANDATE_DATA } from '../../data/macroData';

interface LaborMarketViewProps {
  onOpenExport: () => void;
}

export const LaborMarketView: React.FC<LaborMarketViewProps> = ({ onOpenExport }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-outline mb-1">
            <span className="badge-source bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Base Consolidada
            </span>
            <span>•</span>
            <span>Pesquisas de Emprego & Desocupação</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Mercado de Trabalho, Taxa de Desocupação & Emprego Formal
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Série comparativa por mandatos presidenciais (FUV): dinâmica da taxa de desocupação (Bolsonaro vs. Lula) e geração de postos com carteira.
          </p>
        </div>

        <button
          onClick={onOpenExport}
          className="px-3 py-1.5 rounded-md bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-xs"
        >
          <span className="material-symbols-outlined text-[16px] text-secondary-fixed">download</span>
          <span>Exportar Dados de Emprego</span>
        </button>
      </div>

      {/* 4 Labor KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">DESEMPREGO LULA (3º ANO)</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed font-mono">2025</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Taxa de Desocupação FUV</div>
          <div className="text-2xl font-bold text-secondary mt-1 tabular-nums">
            5,6%
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-bold">▼ Mínima em 12 anos</span>
            <span className="text-outline">2º Ano: 6,6%</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">PROJEÇÃO 4º ANO LULA</span>
            <span className="text-outline">2026 Proj.</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Convergência Estrutural</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            5,3%
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-bold">Mínima histórica projetada</span>
            <span className="text-outline">FUV Consolidada</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">DESEMPREGO BOLSONARO</span>
            <span>2019 → 2022</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Trajetória do Ciclo</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            11,9% → 9,3%
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-slate-700">Pico: 13,5% (2020)</span>
            <span className="text-outline">3º Ano: 13,2%</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">SALDO NOVO CAGED</span>
            <span>12 Meses</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Geração Líquida Formal</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            +1,48M <span className="text-xs font-normal text-outline">vagas</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-bold">▲ Serviços e Indústria</span>
            <span className="text-outline">MTE / CAGED</span>
          </div>
        </div>
      </div>

      {/* FUV Mandate Comparative Matrix for Unemployment */}
      <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-variant/60">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">badge</span>
                Taxa de Desocupação (% População Ativa) — Matriz Comparativa de Mandatos
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary-fixed text-on-secondary-fixed">
                Consolidado
              </span>
            </div>
            <p className="text-xs text-outline mt-0.5">
              Série decrescente de desemprego: Bolsonaro (11,9% → 9,3%) vs Lula (7,8% → 5,3% Proj.).
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-slate-500"></span>
              <span className="text-on-surface-variant text-[11px]">Bolsonaro (2019–2022)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-[#059669]"></span>
              <span className="text-primary text-[11px] font-semibold">Lula (2023–2026*)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Table */}
          <div className="lg:col-span-7 overflow-x-auto border border-outline-variant rounded-md">
            <table className="w-full text-xs text-left">
              <thead className="bg-surface-container-low/80 border-b border-outline-variant text-[11px] uppercase tracking-wider text-outline font-mono">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">Exercício de Mandato</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Gov. Bolsonaro</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Gov. Lula</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Diferença (pp)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/50 font-metric-tabular" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {FUV_UNEMPLOYMENT_MANDATE_DATA.rows.map((row) => (
                  <tr key={row.period} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-primary font-mono">
                      {row.period}
                      <span className="text-[10px] text-outline font-normal ml-1">
                        ({row.yearBolsonaro} vs {row.yearLula})
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-medium text-slate-800 tabular-nums">
                      {row.valBolsonaro.toFixed(1)}%
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-[#059669] tabular-nums">
                      {row.valLula.toFixed(1)}%
                      {row.isProjectedLula && <span className="text-[10px] text-outline font-normal"> (Proj.)</span>}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-secondary tabular-nums">
                      {row.diffPp > 0 ? `+${row.diffPp.toFixed(1)} pp` : `${row.diffPp.toFixed(1)} pp`}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-outline-variant bg-surface-container-low font-metric-tabular" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <tr className="font-bold">
                  <td className="py-2.5 px-3 text-primary uppercase text-[11px] font-mono">
                    Redução Líquida de Taxa
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-secondary tabular-nums">
                    {FUV_UNEMPLOYMENT_MANDATE_DATA.netVariation.bolsonaro.toFixed(1)} pp
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-secondary tabular-nums">
                    {FUV_UNEMPLOYMENT_MANDATE_DATA.netVariation.lula.toFixed(1)} pp
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-secondary tabular-nums">
                    Patamar Menor
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Visual Bar Comparison */}
          <div className="lg:col-span-5 p-4 rounded-md bg-surface-container-low/40 border border-outline-variant/60 space-y-4">
            <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">trending_down</span>
              Dinâmica Decrescente de Desocupação
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="text-outline">Bolsonaro: 11,9% (2019) → 9,3% (2022)</span>
                  <span className="font-bold text-slate-700">Média: 12,0%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                  <div className="bg-slate-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="text-[10px] text-outline mt-0.5">Pico de 13,5% durante 2020 com recuperação em 2022</div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="text-outline">Lula: 7,8% (2023) → 5,3% (2026*)</span>
                  <span className="font-bold text-[#059669]">Média: 6,3%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#059669] h-2.5 rounded-full" style={{ width: '38%' }}></div>
                </div>
                <div className="text-[10px] text-outline mt-0.5">Trajetória contínua em direção a mínimas históricas (5,3%)</div>
              </div>
            </div>

            <div className="pt-2 border-t border-outline-variant/60 text-[10px] text-outline">
              Matriz Comparativa de Dinâmica do Mercado de Trabalho.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
