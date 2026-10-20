import React, { useState } from 'react';
import { 
  FUV_INFLATION_MANDATE_DATA,
  INFLATION_COMPARATIVE_SERIES, 
  INFLATION_GROUPS_IPCA, 
  FOCUS_PROJECTIONS 
} from '../../data/macroData';

interface InflationViewProps {
  onOpenExport: () => void;
}

export const InflationView: React.FC<InflationViewProps> = ({ onOpenExport }) => {
  const [activeTab, setActiveTab] = useState<'mandatos' | 'mensal' | 'grupos'>('mandatos');
  const [activePointIndex, setActivePointIndex] = useState<number>(INFLATION_COMPARATIVE_SERIES.length - 1);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<'all' | 'livre' | 'administrado'>('all');

  const activePoint = INFLATION_COMPARATIVE_SERIES[activePointIndex];

  const filteredGroups = INFLATION_GROUPS_IPCA.filter((g) => {
    if (selectedGroupFilter === 'all') return true;
    return g.category === selectedGroupFilter || g.category === 'misto';
  });

  // SVG Chart Geometry Constants for monthly comparative chart
  const chartHeight = 300;
  const chartWidth = 950;
  const paddingX = 65;
  const stepX = (chartWidth - paddingX * 2) / (INFLATION_COMPARATIVE_SERIES.length - 1);

  const getYCoord = (val: number) => {
    const minVal = -8.0;
    const maxVal = 40.0;
    const ratio = (val - minVal) / (maxVal - minVal);
    return 260 - ratio * 230;
  };

  const cmnFloorY = getYCoord(1.50);
  const cmnTargetY = getYCoord(3.00);
  const cmnCeilY = getYCoord(4.50);

  const ipcaPoints = INFLATION_COMPARATIVE_SERIES.map((d, i) => `${paddingX + i * stepX},${getYCoord(d.ipca12M)}`);
  const ipcaPath = `M ${ipcaPoints.join(' L ')}`;

  const igpmPoints = INFLATION_COMPARATIVE_SERIES.map((d, i) => `${paddingX + i * stepX},${getYCoord(d.igpm12M)}`);
  const igpmPath = `M ${igpmPoints.join(' L ')}`;

  const nucleoPoints = INFLATION_COMPARATIVE_SERIES.map((d, i) => `${paddingX + i * stepX},${getYCoord(d.nucleoBacen)}`);
  const nucleoPath = `M ${nucleoPoints.join(' L ')}`;

  return (
    <div className="space-y-6">
      {/* View Header & Operational Navigation Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-outline mb-1">
            <span className="badge-source bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Base Consolidada
            </span>
            <span>•</span>
            <span>Sistema de Metas Contínuas do CMN (Resolução nº 5.101)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Inflação & Preços: Comparativo Consolidado de Mandatos Presidenciais
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Matriz comparativa de dinâmica de preços do 1º ao 4º ano de mandato (Bolsonaro vs. Lula), convergência à meta contínua do CMN e séries históricas.
          </p>
        </div>

        {/* Header Action Tools */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Navigation View Tabs */}
          <div className="inline-flex rounded-md border border-outline-variant p-0.5 bg-surface-container-low text-xs">
            <button
              onClick={() => setActiveTab('mandatos')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'mandatos'
                  ? 'bg-primary text-white font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
              <span>Comparativo de Mandatos</span>
            </button>
            <button
              onClick={() => setActiveTab('mensal')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'mensal'
                  ? 'bg-primary text-white font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">show_chart</span>
              <span>IPCA vs IGP-M Mensal</span>
            </button>
            <button
              onClick={() => setActiveTab('grupos')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === 'grupos'
                  ? 'bg-primary text-white font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">pie_chart</span>
              <span>9 Grupos de Consumo</span>
            </button>
          </div>

          <button
            onClick={onOpenExport}
            className="px-3.5 py-1.5 rounded-md bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">download</span>
            <span>Exportar Série</span>
          </button>
        </div>
      </div>

      {/* 4 Sovereign Mandatory KPI Cards (v2.0-FUV) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: LULA 3º ANO (2025) */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">LULA 3º ANO (2025)</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed font-mono">
                Dentro da Meta
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">IPCA Oficial 3º Ano</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums flex items-baseline gap-2">
              4,25%
              <span className="text-xs font-semibold text-secondary font-mono">Teto: 4,50%</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold flex items-center gap-0.5 font-mono">
              ▼ -0,25pp <span className="text-[10px] text-on-surface-variant font-normal">abaixo do teto CMN</span>
            </span>
            <span className="text-[11px] text-outline font-mono">Meta: 3,00%</span>
          </div>
        </div>

        {/* Card 2: LULA 4º ANO (2026 Proj.) */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">LULA 4º ANO (2026 Proj.)</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 font-mono">
                Centro da Meta
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Projeção de Convergência</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums flex items-baseline gap-2">
              3,11%
              <span className="text-xs font-semibold text-secondary font-mono">Centro CMN</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold flex items-center gap-0.5 font-mono">
              ▼ -1,28pp <span className="text-[10px] text-on-surface-variant font-normal">vs 4º ano anterior</span>
            </span>
            <span className="text-[11px] text-outline font-mono">CMN: 3,00% ± 1,5pp</span>
          </div>
        </div>

        {/* Card 3: BOLSONARO 3º ANO (2021) */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-error/40 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">BOLSONARO 3º ANO (2021)</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container font-mono">
                Estouro de Teto
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">Pico Histórico do Ciclo</div>
            <div className="text-2xl font-bold text-error mt-1 tabular-nums flex items-baseline gap-2">
              10,06%
              <span className="text-xs font-normal text-outline">Teto: 5,25%</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-error font-bold flex items-center gap-0.5 font-mono">
              ▲ +4,81pp <span className="text-[10px] text-on-surface-variant font-normal">acima do teto</span>
            </span>
            <span className="text-[11px] text-outline font-mono">Choque de Custos</span>
          </div>
        </div>

        {/* Card 4: DIFERENCIAL 3º ANO */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-secondary/40 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">DIFERENCIAL 3º ANO</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed font-mono">
                Spread Favorável
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1.5">4,25% vs 10,06%</div>
            <div className="text-2xl font-bold text-secondary mt-1 tabular-nums flex items-baseline gap-2">
              -5,81 pp
              <span className="text-xs font-medium text-secondary font-mono">Desinflação</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold flex items-center gap-0.5 font-mono">
              Lula -5,81pp <span className="text-[10px] text-on-surface-variant font-normal">menor inflação</span>
            </span>
            <span className="text-[11px] text-outline font-mono">FUV v2.0</span>
          </div>
        </div>
      </div>

      {/* Main Content Area based on Tab */}
      {activeTab === 'mandatos' && (
        <div className="space-y-6">
          {/* Side-by-side Module: Paired Horizontal Bar Chart & Official Ledger Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 6 Cols: Paired Horizontal Bar Chart */}
            <div className="lg:col-span-6 p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-outline-variant/60">
                <div>
                  <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">align_horizontal_left</span>
                    Comparativo Anual por Ano de Mandato
                  </h3>
                  <p className="text-xs text-outline mt-0.5">
                    Barras pareadas: Governo Bolsonaro (cinza/vermelho) vs Governo Lula (verde esmeralda).
                  </p>
                </div>

                {/* Legends */}
                <div className="flex items-center gap-3 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-xs bg-slate-500"></span>
                    <span className="text-on-surface-variant text-[11px]">Bolsonaro</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-xs bg-[#059669]"></span>
                    <span className="text-primary text-[11px] font-semibold">Lula</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-xs bg-[#dc2626]"></span>
                    <span className="text-error text-[11px]">Pico 3º Ano</span>
                  </div>
                </div>
              </div>

              {/* Bars container */}
              <div className="space-y-5 pt-2">
                {FUV_INFLATION_MANDATE_DATA.rows.map((row, idx) => {
                  const maxScale = 12.0; // scale up to 12% to fit 10.06%
                  const bolsonaroPct = (row.valBolsonaro / maxScale) * 100;
                  const lulaPct = (row.valLula / maxScale) * 100;
                  const isThirdYear = idx === 2;
                  const isFourthYear = idx === 3;

                  return (
                    <div key={row.period} className="p-3.5 rounded-md bg-surface-container-low/40 border border-outline-variant/60 space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary font-mono text-[12px]">{row.period}</span>
                          <span className="text-outline text-[11px]">
                            ({row.yearBolsonaro} vs {row.yearLula})
                          </span>
                          {isThirdYear && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-error-container text-on-error-container font-mono">
                              Card Destaque: -5,81 pp
                            </span>
                          )}
                          {isFourthYear && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 font-mono">
                              Convergência Meta CMN
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-xs font-bold">
                          <span className={row.diffPp < 0 ? 'text-secondary' : 'text-primary'}>
                            {row.diffPp > 0 ? `+${row.diffPp.toFixed(2)} pp` : `${row.diffPp.toFixed(2)} pp`}
                          </span>
                        </div>
                      </div>

                      {/* Bolsonaro Bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-outline">Gov. Bolsonaro ({row.yearBolsonaro}):</span>
                          <span className={`font-bold ${isThirdYear ? 'text-error' : 'text-slate-700'}`}>
                            {row.valBolsonaro.toFixed(2)}%
                            {isThirdYear && ' (Estouro)'}
                          </span>
                        </div>
                        <div className="w-full bg-surface-container rounded-full h-3 overflow-hidden">
                          <div
                            className="h-3 rounded-full transition-all duration-300"
                            style={{
                              width: `${bolsonaroPct}%`,
                              backgroundColor: isThirdYear ? '#dc2626' : '#64748b'
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Lula Bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-outline">Gov. Lula ({row.yearLula}):</span>
                          <span className="font-bold text-[#059669]">
                            {row.valLula.toFixed(2)}%
                            {row.isProjectedLula && ' (Proj.)'}
                          </span>
                        </div>
                        <div className="w-full bg-surface-container rounded-full h-3 overflow-hidden">
                          <div
                            className="h-3 rounded-full transition-all duration-300 bg-[#059669]"
                            style={{ width: `${lulaPct}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="text-[10px] text-outline pt-1 border-t border-outline-variant/40 flex items-center justify-between">
                        <span>{row.notes}</span>
                        <span className="font-mono text-secondary font-semibold">Série Consolidada</span>
                      </div>
                    </div>
                  );
                })}

                {/* CMN Meta Baseline Legend */}
                <div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[11px] text-outline">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>Meta Contínua CMN: <strong>3,00% ± 1,50pp</strong> (Banda: 1,50% a 4,50%)</span>
                  </span>
                  <span className="font-mono text-primary font-semibold">Resolução CMN nº 5.101</span>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Official Ledger Table */}
            <div className="lg:col-span-6 p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-outline-variant/60">
                  <div>
                    <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-outline text-[19px]">table_chart</span>
                      Tabela Oficial de Paridade Macroeconômica
                    </h3>
                    <p className="text-xs text-outline mt-0.5">
                      IPCA anual acumulado em cada exercício de mandato presidencial (FUV).
                    </p>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary-fixed text-on-secondary-fixed">
                    Base Auditada
                  </span>
                </div>

                {/* Official Table */}
                <div className="overflow-x-auto border border-outline-variant rounded-md">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-surface-container-low/80 border-b border-outline-variant text-[11px] uppercase tracking-wider text-outline font-mono">
                      <tr>
                        <th className="py-3 px-3 font-semibold">Período</th>
                        <th className="py-3 px-3 font-semibold text-right">Gov. Bolsonaro</th>
                        <th className="py-3 px-3 font-semibold text-right">Gov. Lula</th>
                        <th className="py-3 px-3 font-semibold text-right">Diferença (pp)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/50 font-metric-tabular" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {FUV_INFLATION_MANDATE_DATA.rows.map((row, i) => (
                        <tr key={row.period} className="hover:bg-surface-container-low/50 transition-colors">
                          <td className="py-3 px-3 font-bold text-primary font-mono">
                            {row.period}
                            <div className="text-[10px] text-outline font-normal">
                              {row.yearBolsonaro} vs {row.yearLula}
                            </div>
                          </td>
                          <td className="py-3 px-3 text-right font-bold font-mono text-on-surface tabular-nums">
                            <span className={i === 2 ? 'text-error font-extrabold' : 'text-slate-800'}>
                              {row.valBolsonaro.toFixed(2)}%
                            </span>
                            {i === 2 && (
                              <div className="text-[9.5px] text-error font-sans font-semibold">Pico/Estouro</div>
                            )}
                          </td>
                          <td className="py-3 px-3 text-right font-bold font-mono text-[#059669] tabular-nums">
                            {row.valLula.toFixed(2)}%
                            {row.isProjectedLula && (
                              <span className="text-[10px] text-outline font-normal"> (Proj.)</span>
                            )}
                            {i === 3 && (
                              <div className="text-[9.5px] text-[#059669] font-sans font-semibold">Centro Meta</div>
                            )}
                          </td>
                          <td
                            className={`py-3 px-3 text-right font-bold font-mono tabular-nums ${
                              row.diffPp < 0 ? 'text-secondary' : 'text-primary'
                            }`}
                          >
                            {row.diffPp > 0 ? `+${row.diffPp.toFixed(2)} pp` : `${row.diffPp.toFixed(2)} pp`}
                          </td>
                        </tr>
                      ))}
                    </tbody>

                    {/* Official Closing Row: Média Simples do Ciclo */}
                    <tfoot className="border-t-2 border-outline-variant bg-surface-container-low font-metric-tabular" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      <tr className="font-bold">
                        <td className="py-3 px-3 text-primary uppercase text-[11px] font-mono">
                          Média Simples do Ciclo
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-primary tabular-nums">
                          {FUV_INFLATION_MANDATE_DATA.averageCycle.bolsonaro.toFixed(2)}%
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-secondary tabular-nums">
                          {FUV_INFLATION_MANDATE_DATA.averageCycle.lula.toFixed(2)}%
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-secondary tabular-nums">
                          {FUV_INFLATION_MANDATE_DATA.averageCycle.diffPp.toFixed(2)} pp
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="p-3.5 rounded-md bg-surface-container-low/50 border border-outline-variant text-xs space-y-1.5">
                  <div className="font-semibold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[17px]">analytics</span>
                    <span>Análise do Ciclo Comparativo</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                    A média simples de inflação acumulada ao ano no ciclo do Governo Lula fecha em <strong>4,20%</strong> (dentro da banda de tolerância contínua do CMN), contra <strong>5,82%</strong> na média simples do ciclo do Governo Bolsonaro, gerando um spread de desinflação consolidado de <strong>-1,62 pp</strong>.
                  </p>
                </div>
              </div>

              {/* Table Footer */}
              <div className="pt-3 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-outline gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-secondary">verified</span>
                  <span>Série Consolidada & Expectativas Focus</span>
                </div>
                <button
                  onClick={onOpenExport}
                  className="text-primary hover:underline font-semibold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">file_download</span>
                  <span>Exportar Matriz CSV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Monthly Comparative Series Tab (Historical Context 2020-2025) */}
      {activeTab === 'mensal' && (
        <div className="space-y-6">
          <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-primary">
                    Série Histórica Mensal: IPCA vs IGP-M (Acumulado em 12 Meses, 2020 – 2025)
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-surface-container text-on-surface-variant">
                    Banda de Meta CMN
                  </span>
                </div>
                <p className="text-xs text-outline mt-0.5">
                  Contraste entre a estabilidade do índice de consumo oficial e a volatilidade cambial/atacado do IGP-M.
                </p>
              </div>

              {/* Interactive Chart Legends */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-secondary rounded-xs"></span>
                  <span className="text-primary font-semibold">IPCA (Consumidor)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-tertiary-container rounded-xs"></span>
                  <span className="text-primary font-semibold">IGP-M (Atacado)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 border-t-2 border-dashed border-primary/50"></span>
                  <span className="text-outline">Média Núcleos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-2 bg-secondary/15 border border-secondary/40 rounded-xs"></span>
                  <span className="text-outline text-[11px]">Banda CMN (1,5% – 4,5%)</span>
                </div>
              </div>
            </div>

            {/* SVG Comparative Chart */}
            <div className="relative overflow-x-auto bg-surface-container-low/20 rounded-md p-3 border border-outline-variant/50">
              <svg
                className="w-full h-auto min-w-[760px] overflow-visible select-none"
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal Gridlines */}
                {[40, 30, 20, 10, 4.5, 3.0, 1.5, 0, -5].map((val) => {
                  const y = getYCoord(val);
                  const isTarget = val === 3.0;
                  const isBand = val === 4.5 || val === 1.5;
                  const isZero = val === 0;

                  return (
                    <g key={val}>
                      <line
                        x1={paddingX}
                        y1={y}
                        x2={chartWidth - paddingX}
                        y2={y}
                        stroke={isTarget ? '#059669' : isBand ? '#10b981' : isZero ? '#0f2a4a' : '#cbd5e1'}
                        strokeWidth={isTarget ? '1.5' : isBand ? '1' : isZero ? '1.5' : '0.8'}
                        strokeDasharray={isBand ? '3 3' : isTarget ? '5 3' : isZero ? 'none' : '4 4'}
                        opacity={isBand ? '0.8' : '1'}
                      />
                      <text
                        x={paddingX - 10}
                        y={y + 3.5}
                        textAnchor="end"
                        fontSize="10"
                        fontFamily="Inter, monospace"
                        fontWeight={isTarget || isBand || isZero ? 'bold' : 'normal'}
                        fill={isTarget ? '#059669' : isBand ? '#059669' : isZero ? '#0f2a4a' : '#64748b'}
                      >
                        {val.toFixed(1)}%
                      </text>
                    </g>
                  );
                })}

                {/* CMN Tolerance Interval Shaded Band */}
                <rect
                  x={paddingX}
                  y={cmnCeilY}
                  width={chartWidth - paddingX * 2}
                  height={Math.abs(cmnFloorY - cmnCeilY)}
                  fill="#059669"
                  opacity="0.08"
                />

                {/* Central Target Line Annotation */}
                <text
                  x={chartWidth - paddingX + 6}
                  y={cmnTargetY + 3}
                  fontSize="9"
                  fontFamily="Inter, monospace"
                  fontWeight="bold"
                  fill="#059669"
                >
                  Meta 3,0%
                </text>

                {/* Trendlines */}
                <path
                  d={nucleoPath}
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                <path
                  d={igpmPath}
                  fill="none"
                  stroke="#ba880e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={ipcaPath}
                  fill="none"
                  stroke="#246a53"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Historical Peak Annotation: IGP-M Mai/21 37.04% */}
                <g transform={`translate(${paddingX + 3 * stepX}, ${getYCoord(37.04) - 18})`}>
                  <rect x="-42" y="-14" width="84" height="18" rx="3" fill="#ba880e" />
                  <text x="0" y="-1.5" textAnchor="middle" fontSize="10" fontFamily="Inter, monospace" fontWeight="bold" fill="#ffffff">
                    Pico: 37,04%
                  </text>
                </g>

                {/* Interactive Data Nodes */}
                {INFLATION_COMPARATIVE_SERIES.map((d, i) => {
                  const x = paddingX + i * stepX;
                  const yIpca = getYCoord(d.ipca12M);
                  const yIgpm = getYCoord(d.igpm12M);
                  const isSelected = activePointIndex === i;

                  return (
                    <g key={d.date} className="cursor-pointer" onClick={() => setActivePointIndex(i)}>
                      {isSelected && (
                        <line
                          x1={x}
                          y1="20"
                          x2={x}
                          y2="280"
                          stroke="#0f2a4a"
                          strokeWidth="1.2"
                          strokeDasharray="2 2"
                        />
                      )}
                      <circle
                        cx={x}
                        cy={yIgpm}
                        r={isSelected ? '5.5' : '3.5'}
                        fill="#ba880e"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx={x}
                        cy={yIpca}
                        r={isSelected ? '6.5' : '4.5'}
                        fill="#246a53"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <text
                        x={x}
                        y="285"
                        textAnchor="middle"
                        fontSize="10"
                        fontFamily="Inter, monospace"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        fill={isSelected ? '#0f2a4a' : '#64748b'}
                      >
                        {d.date}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Selected Point Telemetry Strip */}
            {activePoint && (
              <div className="p-4 rounded-md bg-surface-container-low/60 border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-primary text-white font-mono font-bold text-xs">
                    {activePoint.date}
                  </span>
                  <div className="flex items-center gap-4 text-xs font-metric-tabular">
                    <div>
                      <span className="text-outline text-[11px]">IPCA 12M: </span>
                      <span className="font-bold text-secondary text-sm">{activePoint.ipca12M.toFixed(2)}%</span>
                    </div>
                    <div>
                      <span className="text-outline text-[11px]">IGP-M 12M: </span>
                      <span className="font-bold text-tertiary-container text-sm">{activePoint.igpm12M.toFixed(2)}%</span>
                    </div>
                    <div>
                      <span className="text-outline text-[11px]">Núcleo de Preços: </span>
                      <span className="font-bold text-primary text-sm">{activePoint.nucleoBacen.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-outline text-[11px]">Banda Meta:</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-semibold border border-outline-variant">
                    {activePoint.pisoMeta.toFixed(2)}% a {activePoint.tetoMeta.toFixed(2)}%
                  </span>
                  <span className={`px-2 py-0.5 rounded font-semibold text-[10px] ${
                    activePoint.ipca12M <= activePoint.tetoMeta 
                      ? 'bg-secondary-fixed text-on-secondary-fixed' 
                      : 'bg-error-container text-on-error-container'
                  }`}>
                    {activePoint.ipca12M <= activePoint.tetoMeta ? 'Na Meta CMN' : 'Acima da Meta'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 9 Consumption Groups Tab */}
      {activeTab === 'grupos' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">category</span>
                  Decomposição por Grupos de Consumo (IPCA)
                </h3>
                <p className="text-xs text-outline mt-0.5">
                  Pesos relativos da cesta de consumo e impacto na variação acumulada de 12 meses.
                </p>
              </div>

              <div className="inline-flex rounded-md border border-outline-variant p-0.5 bg-surface-container-low text-xs">
                <button
                  onClick={() => setSelectedGroupFilter('all')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                    selectedGroupFilter === 'all' ? 'bg-primary text-white font-semibold' : 'text-outline hover:text-primary'
                  }`}
                >
                  Todos (9)
                </button>
                <button
                  onClick={() => setSelectedGroupFilter('livre')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                    selectedGroupFilter === 'livre' ? 'bg-primary text-white font-semibold' : 'text-outline hover:text-primary'
                  }`}
                >
                  Livres
                </button>
                <button
                  onClick={() => setSelectedGroupFilter('administrado')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                    selectedGroupFilter === 'administrado' ? 'bg-primary text-white font-semibold' : 'text-outline hover:text-primary'
                  }`}
                >
                  Administrados
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {filteredGroups.map((group) => (
                <div key={group.id} className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60 hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-semibold text-primary truncate">{group.name}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-surface-container text-outline">
                        Peso: {group.weight}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-outline text-[11px]">Impacto: +{group.impactPp.toFixed(2)}pp</span>
                      <span className={`font-bold text-xs ${group.variation12M > 5 ? 'text-error' : group.variation12M > 3 ? 'text-tertiary-container' : 'text-secondary'}`}>
                        +{group.variation12M.toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
                    <div
                      className={`h-1.5 rounded-full ${
                        group.variation12M > 5 ? 'bg-error' : group.variation12M > 3 ? 'bg-tertiary-container' : 'bg-secondary'
                      }`}
                      style={{ width: `${Math.min(100, group.variation12M * 10)}%` }}
                    ></div>
                  </div>

                  <div className="text-[10px] text-outline mt-1.5 leading-snug">{group.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Livres vs Administrados & Focus Projections */}
          <div className="space-y-6">
            <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                Preços Livres vs Administrados
              </h3>

              <div className="p-3 rounded-md bg-surface-container-low/50 border border-outline-variant/60 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-primary"></span>
                    Administrados (Monitorados)
                  </span>
                  <span className="font-mono font-bold text-primary">5,20% <span className="text-[10px] font-normal text-outline">(12M)</span></span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] text-outline">
                  <span>Peso: 25,3% da cesta</span>
                  <span className="text-error font-medium">Acima do teto</span>
                </div>
              </div>

              <div className="p-3 rounded-md bg-surface-container-low/50 border border-outline-variant/60 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-secondary flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-secondary"></span>
                    Preços Livres de Mercado
                  </span>
                  <span className="font-mono font-bold text-secondary">4,10% <span className="text-[10px] font-normal text-outline">(12M)</span></span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '51%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] text-outline">
                  <span>Peso: 74,7% da cesta</span>
                  <span className="text-secondary font-medium">Na meta</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline text-[19px]">query_stats</span>
                  Expectativas de Mercado (Focus)
                </h3>
                <span className="text-[10px] font-mono font-bold text-secondary bg-secondary-fixed px-1.5 py-0.5 rounded">
                  Mediana Focus
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-surface-container-low text-[10px] uppercase font-mono text-outline border-b border-outline-variant">
                    <tr>
                      <th className="py-2 px-2 text-left">Variável</th>
                      <th className="py-2 px-2 text-right">2025</th>
                      <th className="py-2 px-2 text-right">2026</th>
                      <th className="py-2 px-2 text-right">2027</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/40 font-metric-tabular">
                    {FOCUS_PROJECTIONS.slice(0, 4).map((foc, i) => (
                      <tr key={i} className="hover:bg-surface-container-low/50">
                        <td className="py-2 px-2 font-medium text-primary text-[11px]">{foc.indicator}</td>
                        <td className="py-2 px-2 text-right font-bold text-primary font-mono">{foc.exp2025}</td>
                        <td className="py-2 px-2 text-right text-on-surface-variant font-mono">{foc.exp2026}</td>
                        <td className="py-2 px-2 text-right text-outline font-mono">{foc.exp2027}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
