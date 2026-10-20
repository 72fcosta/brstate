import React from 'react';
import { FUV_DEBT_MANDATE_DATA } from '../../data/macroData';

interface FiscalViewProps {
  onOpenExport: () => void;
}

export const FiscalView: React.FC<FiscalViewProps> = ({ onOpenExport }) => {
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
            <span>Estatísticas Fiscais & Dívida Soberana</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Fiscal, Resultado Primário & Dívida Pública Soberana
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Monitoramento da Dívida Bruta do Governo Geral (DBGG), matriz comparativa de mandatos (FUV), superávit/déficit primário e bandas do arcabouço.
          </p>
        </div>

        <button
          onClick={onOpenExport}
          className="px-3 py-1.5 rounded-md bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-xs"
        >
          <span className="material-symbols-outlined text-[16px] text-secondary-fixed">download</span>
          <span>Exportar Dados Fiscais</span>
        </button>
      </div>

      {/* 4 Fiscal KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">DBGG / PIB (LULA 3º ANO)</span>
            <span className="px-1.5 py-0.2 rounded text-[10px] bg-secondary-fixed font-bold text-on-secondary-fixed font-mono">FUV</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Dívida Bruta 2025 (FUV)</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            78,64% <span className="text-xs font-normal text-outline">do PIB</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-primary font-bold">2024: 76,27%</span>
            <span className="text-outline">4º Ano Proj: 82,87%</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">DBGG BOLSONARO (CICLO)</span>
            <span className="text-outline">2019–2022</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Variação Líquida Mandato</div>
          <div className="text-2xl font-bold text-secondary mt-1 tabular-nums">
            -2,76 pp
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-slate-700">74,44% → 71,68%</span>
            <span className="text-outline font-semibold">Pico: 86,94%</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">DBGG LULA (CICLO)</span>
            <span className="text-outline">2023–2026*</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Variação Líquida Mandato</div>
          <div className="text-2xl font-bold text-error mt-1 tabular-nums">
            +9,04 pp
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-slate-700">73,83% → 82,87%</span>
            <span className="text-outline font-semibold">Projeção FUV</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">RESULTADO PRIMÁRIO</span>
            <span>12 Meses</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Déficit Primário Acumulado</div>
          <div className="text-2xl font-bold text-tertiary-container mt-1 tabular-nums">
            -0,60% <span className="text-xs font-normal text-outline">do PIB</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-semibold">Dentro da banda</span>
            <span className="text-outline">Banda: 0,0% ± 0,25pp</span>
          </div>
        </div>
      </div>

      {/* FUV Mandate Comparative Matrix for DBGG (% PIB) */}
      <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-variant/60">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">account_balance</span>
                Dívida Bruta do Governo Geral (DBGG % PIB) — Matriz Comparativa de Mandatos
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary-fixed text-on-secondary-fixed">
                Consolidado
              </span>
            </div>
            <p className="text-xs text-outline mt-0.5">
              Comparativo ano a ano do endividamento bruto soberano: Bolsonaro (2019–2022) vs Lula (2023–2026*).
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-slate-500"></span>
              <span className="text-on-surface-variant text-[11px]">Bolsonaro: <strong>-2,76 pp</strong> líq.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-[#059669]"></span>
              <span className="text-primary text-[11px] font-semibold">Lula: <strong>+9,04 pp</strong> líq.</span>
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
                {FUV_DEBT_MANDATE_DATA.rows.map((row) => (
                  <tr key={row.period} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-primary font-mono">
                      {row.period}
                      <span className="text-[10px] text-outline font-normal ml-1">
                        ({row.yearBolsonaro} vs {row.yearLula})
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-medium text-slate-800 tabular-nums">
                      {row.valBolsonaro.toFixed(2)}%
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-primary tabular-nums">
                      {row.valLula.toFixed(2)}%
                      {row.isProjectedLula && <span className="text-[10px] text-outline font-normal"> (Proj.)</span>}
                    </td>
                    <td className={`py-2.5 px-3 text-right font-mono font-bold tabular-nums ${row.diffPp < 0 ? 'text-secondary' : 'text-error'}`}>
                      {row.diffPp > 0 ? `+${row.diffPp.toFixed(2)} pp` : `${row.diffPp.toFixed(2)} pp`}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-outline-variant bg-surface-container-low font-metric-tabular" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <tr className="font-bold">
                  <td className="py-2.5 px-3 text-primary uppercase text-[11px] font-mono">
                    Variação Líquida do Ciclo
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-secondary tabular-nums">
                    {FUV_DEBT_MANDATE_DATA.netVariation.bolsonaro.toFixed(2)} pp
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-error tabular-nums">
                    +{FUV_DEBT_MANDATE_DATA.netVariation.lula.toFixed(2)} pp
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-outline tabular-nums">
                    Spread FUV
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Visual Progression Comparison */}
          <div className="lg:col-span-5 p-4 rounded-md bg-surface-container-low/40 border border-outline-variant/60 space-y-4">
            <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
              Trajetória do Endividamento Soberano
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="text-outline">Bolsonaro (2019 → 2022):</span>
                  <span className="font-bold text-secondary">-2,76 pp líq. (74,44% → 71,68%)</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                  <div className="bg-slate-500 h-2.5 rounded-full" style={{ width: '71.68%' }}></div>
                </div>
                <div className="text-[10px] text-outline mt-0.5">Pico em 2020 (86,94% Covid) com descompressão até 71,68%</div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="text-outline">Lula (2023 → 2026*):</span>
                  <span className="font-bold text-error">+9,04 pp líq. (73,83% → 82,87%)</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#0f2a4a] h-2.5 rounded-full" style={{ width: '82.87%' }}></div>
                </div>
                <div className="text-[10px] text-outline mt-0.5">Elevação gradual de 73,83% para 82,87% projetada para o 4º ano</div>
              </div>
            </div>

            <div className="pt-2 border-t border-outline-variant/60 text-[10px] text-outline">
              Matriz Comparativa de Endividamento Bruto Soberano.
            </div>
          </div>
        </div>
      </div>

      {/* Arcabouço Compliance & Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
            Monitor de Cumprimento do Arcabouço Fiscal (LC 200/2023)
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-primary">Regra de Crescimento Real de Despesas</span>
                <span className="font-mono text-secondary font-bold">+2,5% a.a.</span>
              </div>
              <p className="text-[11px] text-outline mt-1">
                Limitado a 70% do crescimento real das receitas nos 12 meses anteriores, dentro da banda de +0,6% a +2,5%.
              </p>
            </div>

            <div className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-primary">Margem de Tolerância do Resultado Primário</span>
                <span className="font-mono text-primary font-bold">R$ -28,8 Bi a R$ +28,8 Bi</span>
              </div>
              <p className="text-[11px] text-outline mt-1">
                Intervalo de ±0,25% do PIB nominal projetado pela LDO para o exercício corrente.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
            Avaliação de Sustentabilidade da Dívida Soberana
          </h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            A dinâmica da relação DBGG/PIB depende fundamentalmente do diferencial entre a taxa de juros real implícita na dívida e o crescimento do PIB potencial (\(r - g\)), somado ao esforço fiscal primário. Com o PIB 2024 consolidado a +3,4% e a taxa Selic em patamar restritivo (13,25%), a estabilização da dívida pública exige convergência progressiva ao superávit primário no médio prazo.
          </p>
          <div className="p-3 rounded-md bg-surface-container-low/50 border border-outline-variant text-[11px] text-outline flex items-center justify-between">
            <span>Estatísticas Fiscais & Sustentabilidade da Dívida</span>
            <span className="text-primary font-semibold font-mono">D-0 Oficial</span>
          </div>
        </div>
      </div>
    </div>
  );
};
