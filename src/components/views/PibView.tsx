import React, { useState } from 'react';
import { PIB_ANNUAL_DATA, PIB_SECTOR_BREAKDOWN, PIB_DEMAND_DRIVERS } from '../../data/macroData';

interface PibViewProps {
  onOpenExport: () => void;
}

export const PibView: React.FC<PibViewProps> = ({ onOpenExport }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'1A' | '3A' | '2019-2026' | 'MAX'>('2019-2026');
  const [metricMode, setMetricMode] = useState<'real' | 'current'>('real');
  const [activeDataIndex, setActiveDataIndex] = useState<number | null>(5); // 2024 default active (+3,4%)
  const [searchTableQuery, setSearchTableQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(false);

  // Filtered annual data based on period selection
  const filteredData = PIB_ANNUAL_DATA.filter((item) => {
    if (selectedPeriod === '1A') return item.year.includes('2024') || item.year.includes('2025') || item.year.includes('4º');
    if (selectedPeriod === '3A') return ['2023', '2024', '2025 (P)', '4º Ano Lula (*)'].some((y) => item.year.includes(y));
    return true; // '2019-2026' or 'MAX'
  });

  const tableData = [...filteredData]
    .filter((row) => {
      const q = searchTableQuery.toLowerCase();
      if (!q) return true;
      return (
        row.year.toLowerCase().includes(q) ||
        row.driverDemanda.toLowerCase().includes(q) ||
        row.status.toLowerCase().includes(q) ||
        row.agency.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      const aVal = parseFloat(a.year.replace(/[^\d.]/g, '')) || 2026;
      const bVal = parseFloat(b.year.replace(/[^\d.]/g, '')) || 2026;
      return sortAsc ? aVal - bVal : bVal - aVal;
    });

  // Active highlighted record
  const currentRecord = activeDataIndex !== null ? PIB_ANNUAL_DATA[activeDataIndex] : PIB_ANNUAL_DATA[5];

  // SVG Chart Geometry Constants
  // Y range: -4.0% to +6.0% (total span 10 units)
  // Height 280, top padding 20, bottom padding 40 => usable height 220
  const chartHeight = 280;
  const chartWidth = 900;
  const paddingX = 65;
  const stepX = (chartWidth - paddingX * 2) / (PIB_ANNUAL_DATA.length - 1);

  const getYCoord = (val: number) => {
    const minVal = -4.0;
    const maxVal = 6.0;
    const ratio = (val - minVal) / (maxVal - minVal);
    // invert because SVG y=0 is top
    return 240 - ratio * 190;
  };

  const zeroY = getYCoord(0);

  // Generate SVG polyline coordinate points
  // Solid points: 2019 to 2024 (indices 0 to 5)
  const solidPoints = PIB_ANNUAL_DATA.slice(0, 6).map((d, i) => `${paddingX + i * stepX},${getYCoord(d.variationReal)}`);
  // Projected points: 2024 (index 5) to 2025 (index 6) to 4º Ano (index 7)
  const projectedPoints = [5, 6, 7].map((i) => `${paddingX + i * stepX},${getYCoord(PIB_ANNUAL_DATA[i].variationReal)}`);

  return (
    <div className="space-y-6">
      {/* View Header & Operational Filter Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-outline mb-1">
            <span className="font-semibold text-primary">Contas Nacionais</span>
            <span>•</span>
            <span className="badge-source bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Base Consolidada
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Atividade Econômica & Produto Interno Bruto (PIB) do Brasil
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Série histórica consolidada: 2019 a 2024 e projeções 2025/4º Ano.
          </p>
        </div>

        {/* Filters Toolbar */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Time range selector */}
          <div className="inline-flex rounded-md border border-outline-variant p-0.5 bg-surface-container-low text-xs">
            {(['1A', '3A', '2019-2026', 'MAX'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  selectedPeriod === period
                    ? 'bg-primary text-white font-semibold shadow-xs'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {period === '2019-2026' ? '2019–2026*' : period}
              </button>
            ))}
          </div>

          {/* Metric mode toggle */}
          <div className="inline-flex rounded-md border border-outline-variant p-0.5 bg-surface-container-low text-xs">
            <button
              onClick={() => setMetricMode('real')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                metricMode === 'real'
                  ? 'bg-primary text-white font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              % Variação Real
            </button>
            <button
              onClick={() => setMetricMode('current')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                metricMode === 'current'
                  ? 'bg-primary text-white font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              R$ Valor Corrente
            </button>
          </div>
        </div>
      </div>

      {/* 4 Sovereign Indicator KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: PIB BRASIL (ANUAL) */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Série Histórica</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed font-mono">
                Consolidado 2024
              </span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1">PIB BRASIL (ANUAL)</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums flex items-baseline gap-2">
              +3,4%
              <span className="text-xs font-normal text-on-surface-variant font-sans">
                {metricMode === 'real' ? '(R$ 11,35 Tri)' : '(R$ 11.350 Bi)'}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex flex-col gap-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-secondary font-bold font-mono">▲ +0.3pp vs est. anterior</span>
              <span className="text-[11px] text-outline font-mono">2023: +3,2%</span>
            </div>
            <div className="text-[10px] text-outline font-mono pt-1 border-t border-outline-variant/40 leading-tight">
              Projeção 2025 (3º Ano): <strong className="text-primary">+2,3%</strong> | Proj. 4º Ano (*até 2º tri): <strong className="text-primary">+1,9%*</strong>
            </div>
          </div>
        </div>

        {/* Card 2: PIB per Capita */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Renda Per Capita</span>
              <span>Pop: 212,6M</span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1">PIB per Capita</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              R$ 54.120
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold flex items-center gap-0.5 font-mono">
              ▲ +1,8% <span className="text-[10px] text-on-surface-variant font-normal">ganho real</span>
            </span>
            <span className="text-[11px] text-outline font-mono">2023: R$ 52.340</span>
          </div>
        </div>

        {/* Card 3: Taxa de Investimento (FBCF) */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">FBCF / PIB</span>
              <span>Investimento</span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1">Taxa de Investimento</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              16,8% <span className="text-sm font-normal text-on-surface-variant">do PIB</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold flex items-center gap-0.5 font-mono">
              ▲ +0,3pp <span className="text-[10px] text-on-surface-variant font-normal">vs 2023</span>
            </span>
            <span className="text-[11px] text-outline font-mono">Média 10A: 17,4%</span>
          </div>
        </div>

        {/* Card 4: Composição Setorial VAB */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">VAB Setorial</span>
              <span>100% Total</span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1">Estrutura Produtiva</div>
            <div className="text-xs font-bold text-primary mt-2 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Serviços:</span>
                <span className="font-mono text-primary font-bold">69,8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Indústria:</span>
                <span className="font-mono text-secondary font-bold">23,1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Agropecuária:</span>
                <span className="font-mono text-tertiary-container font-bold">7,1%</span>
              </div>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[10px] text-outline">
            <span>Base: Contas 2024</span>
            <span className="text-secondary font-semibold">Agro recorde em 23</span>
          </div>
        </div>
      </div>

      {/* Main Chart Section: Evolução do PIB Anual */}
      <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-primary">
                Evolução do PIB Brasileiro: Variação Percentual Anual (2019 – 2026*)
              </h2>
            </div>
            <p className="text-xs text-outline mt-0.5">
              Trajetória oficial (Bolsonaro 2019–2022 vs Lula 2023–2026*). Projeção 4º ano (*até 2º tri vs mesmo período anterior).
            </p>
          </div>

          {/* Legend and Active Point Callout */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-primary"></span>
              <span className="text-on-surface-variant">Dado Oficial (2019–2024)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 border-t-2 border-dashed border-primary/70"></span>
              <span className="text-outline">Projeções (2025 / 4º Ano*)</span>
            </div>
            <div className="text-[11px] text-outline font-mono">
              *Até 2º tri vs mesmo período anterior
            </div>
          </div>
        </div>

        {/* SVG Chart Container with .pib-chart-container */}
        <div className="pib-chart-container relative overflow-x-auto bg-surface-container-low/20 rounded-md p-3 border border-outline-variant/50">
          <svg
            className="w-full h-auto min-w-[750px] overflow-visible select-none"
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gridlines */}
            {[6.0, 4.0, 2.0, 0.0, -2.0, -4.0].map((val) => {
              const y = getYCoord(val);
              const isZero = val === 0.0;
              return (
                <g key={val}>
                  <line
                    x1={paddingX}
                    y1={y}
                    x2={chartWidth - paddingX}
                    y2={y}
                    stroke={isZero ? '#0f2a4a' : '#cbd5e1'}
                    strokeWidth={isZero ? '1.5' : '1'}
                    strokeDasharray={isZero ? 'none' : '4 4'}
                  />
                  <text
                    x={paddingX - 12}
                    y={y + 4}
                    textAnchor="end"
                    fontSize="11"
                    fontFamily="Inter, monospace"
                    fontWeight={isZero ? 'bold' : 'normal'}
                    fill={isZero ? '#0f2a4a' : '#64748b'}
                  >
                    {val > 0 ? `+${val.toFixed(1)}%` : `${val.toFixed(1)}%`}
                  </text>
                </g>
              );
            })}

            {/* Zero Axis highlighted line */}
            <line
              x1={paddingX}
              y1={zeroY}
              x2={chartWidth - paddingX}
              y2={zeroY}
              stroke="#0f2a4a"
              strokeWidth="1.5"
            />

            {/* SVG Polylines: Solid Historical Trendline (2019-2024) */}
            <polyline
              points={solidPoints.join(' ')}
              fill="none"
              stroke="#0f2a4a"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* SVG Polylines: Dashed Projection Trendline (2024 to 2025 to 4º Ano) */}
            <polyline
              points={projectedPoints.join(' ')}
              fill="none"
              stroke="#0f2a4a"
              strokeWidth="2.5"
              strokeDasharray="4,4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Bars and Circles for magnitude and point interaction */}
            {PIB_ANNUAL_DATA.map((d, i) => {
              const x = paddingX + i * stepX;
              const y = getYCoord(d.variationReal);
              const barHeight = Math.abs(y - zeroY);
              const barY = d.variationReal >= 0 ? y : zeroY;
              const isPositive = d.variationReal >= 0;
              const isSelected = activeDataIndex === i;
              const isProjected = d.isProjected;

              return (
                <g key={d.year} className="cursor-pointer" onClick={() => setActiveDataIndex(i)}>
                  {/* Magnitude indicator bar */}
                  <rect
                    x={x - 14}
                    y={barY}
                    width="28"
                    height={barHeight}
                    rx="2"
                    fill={isPositive ? (isProjected ? '#059669' : '#059669') : '#dc2626'}
                    opacity={isSelected ? '0.38' : isProjected ? '0.12' : '0.18'}
                    stroke={isProjected ? '#059669' : 'none'}
                    strokeWidth={isProjected ? '1' : '0'}
                    strokeDasharray={isProjected ? '2 2' : 'none'}
                    className="transition-opacity hover:opacity-40"
                  />

                  {/* Vertical hover guideline */}
                  {isSelected && (
                    <line
                      x1={x}
                      y1="20"
                      x2={x}
                      y2="240"
                      stroke="#0f2a4a"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity="0.5"
                    />
                  )}

                  {/* Year point circle (SVG circle in .pib-chart-container) */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? '6.5' : isProjected ? '5' : '4.5'}
                    fill={isSelected ? '#059669' : isProjected ? '#ecfdf5' : '#ffffff'}
                    stroke={isSelected ? '#0f2a4a' : isProjected ? '#059669' : '#0f2a4a'}
                    strokeWidth={isProjected ? '2.5' : '2.5'}
                    strokeDasharray={isProjected ? '2 1' : 'none'}
                    className="transition-all"
                  />

                  {/* Value tag badge */}
                  <rect
                    x={x - 24}
                    y={isPositive ? y - 24 : y + 10}
                    width="48"
                    height="18"
                    rx="3"
                    fill={isSelected ? '#0f2a4a' : isProjected ? '#ecfdf5' : '#f8f9ff'}
                    stroke={isSelected ? '#0f2a4a' : isProjected ? '#a7f3d0' : '#cbd5e1'}
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={isPositive ? y - 11 : y + 23}
                    textAnchor="middle"
                    fontSize="10.5"
                    fontFamily="Inter, monospace"
                    fontWeight="bold"
                    fill={isSelected ? '#ffffff' : isPositive ? '#059669' : '#dc2626'}
                  >
                    {d.variationReal > 0 ? `+${d.variationReal.toFixed(1)}%` : `${d.variationReal.toFixed(1)}%`}
                    {d.footnote ? '*' : ''}
                  </text>

                  {/* Year X label */}
                  <text
                    x={x}
                    y="262"
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="Inter, monospace"
                    fontWeight={isSelected ? 'bold' : '500'}
                    fill={isSelected ? '#0f2a4a' : '#475569'}
                  >
                    {d.year}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Data Point Contextual Panel */}
        {currentRecord && (
          <div className="p-4 rounded-md bg-surface-container-low/60 border border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-150">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded bg-surface-container border border-outline-variant">
                  Exercício: {currentRecord.year}
                </span>
                <span className="text-xs font-bold text-secondary font-mono">
                  {currentRecord.variationReal > 0 ? `+${currentRecord.variationReal}% real` : `${currentRecord.variationReal}% real`}
                </span>
                <span className="text-xs font-mono text-outline">
                  | PIB: R$ {currentRecord.pibCorrenteTri} Tri | Per Capita: R$ {currentRecord.pibPerCapita.toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="text-xs text-on-surface">
                <strong>Driver Conjuntural:</strong> {currentRecord.driverDemanda}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-medium border border-outline-variant">
                {currentRecord.status}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Structural Demand & Sectoral Decomposition */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Demand Drivers Card */}
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">insights</span>
              Drivers de Demanda Agregada (2024 Fechado)
            </h3>
            <span className="text-[11px] font-mono text-outline">Ótica do Gasto</span>
          </div>
          <div className="space-y-3">
            {PIB_DEMAND_DRIVERS.map((item, idx) => (
              <div key={idx} className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-primary">{item.component}</span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-outline text-[11px]">{item.share}</span>
                    <span className="text-secondary font-bold">{item.growth}</span>
                  </div>
                </div>
                <div className="text-[11px] text-on-surface-variant mt-1 leading-snug">
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectoral Breakdown Card */}
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">pie_chart</span>
              Composição de Valor Adicionado (Ótica da Produção)
            </h3>
            <span className="text-[11px] font-mono text-outline">VAB Total</span>
          </div>
          <div className="space-y-4">
            {PIB_SECTOR_BREAKDOWN.map((sec, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: sec.color }}></span>
                    <span className="text-primary">{sec.name}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-outline font-normal">{sec.value}</span>
                    <span className="text-primary font-bold">{sec.percentage}%</span>
                    <span className={`text-[11px] ${sec.growth.startsWith('+') ? 'text-secondary' : 'text-error'}`}>
                      {sec.growth}
                    </span>
                  </div>
                </div>
                {/* Horizontal progress bar */}
                <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${sec.percentage}%`, backgroundColor: sec.color }}
                  ></div>
                </div>
                <div className="text-[10px] text-outline leading-tight">{sec.note}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-outline-variant/60 text-[11px] text-outline flex items-center justify-between">
            <span>Metodologia: Valor Adicionado a Preços Básicos</span>
            <span className="font-mono text-secondary font-semibold">Série Consolidada</span>
          </div>
        </div>
      </div>

      {/* Historical Data Ledger Table */}
      <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-outline text-[19px]">table_rows</span>
              Demonstrativo Comparativo Anual do PIB (2019 – 2026*)
            </h3>
            <p className="text-xs text-outline mt-0.5">
              Valores nominais e reais auditados. *Até 2º tri vs mesmo período anterior.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Table Search */}
            <div className="relative">
              <input
                type="text"
                value={searchTableQuery}
                onChange={(e) => setSearchTableQuery(e.target.value)}
                placeholder="Filtrar ano ou status..."
                className="pl-7 pr-3 py-1 rounded border border-outline-variant bg-surface-container-low text-xs text-primary placeholder:text-outline outline-none focus:border-primary"
              />
              <span className="material-symbols-outlined text-[15px] text-outline absolute left-1.5 top-1.5">search</span>
            </div>

            {/* Sort order toggle */}
            <button
              onClick={() => setSortAsc(!sortAsc)}
              className="px-2.5 py-1 rounded border border-outline-variant bg-surface-container-low hover:bg-surface-container text-xs text-on-surface-variant font-medium flex items-center gap-1"
            >
              <span>{sortAsc ? 'Mais antigos' : 'Mais recentes'}</span>
              <span className="material-symbols-outlined text-[14px]">swap_vert</span>
            </button>

            {/* Export CSV trigger */}
            <button
              onClick={onOpenExport}
              className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-xs font-semibold text-primary flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[15px] text-secondary">file_download</span>
              <span>CSV</span>
            </button>
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto border border-outline-variant rounded-md">
          <table className="w-full text-xs text-left">
            <thead className="bg-surface-container-low/80 border-b border-outline-variant text-[11px] uppercase tracking-wider text-outline font-mono">
              <tr>
                <th className="py-2.5 px-3 font-semibold">Exercício</th>
                <th className="py-2.5 px-3 font-semibold text-right">Variação Real</th>
                <th className="py-2.5 px-3 font-semibold text-right">PIB Corrente</th>
                <th className="py-2.5 px-3 font-semibold text-right">Per Capita</th>
                <th className="py-2.5 px-3 font-semibold">Driver Principal de Demanda</th>
                <th className="py-2.5 px-3 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/50 font-metric-tabular" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {tableData.map((row) => (
                <tr
                  key={row.year}
                  className={`hover:bg-surface-container-low/50 transition-colors ${
                    row.isProjected ? 'bg-surface-container/30' : ''
                  }`}
                >
                  <td className="py-2.5 px-3 font-bold text-primary font-mono">{row.year}</td>
                  <td
                    className={`py-2.5 px-3 text-right font-bold font-mono tabular-nums ${
                      row.variationReal >= 0 ? 'text-secondary' : 'text-error'
                    }`}
                  >
                    {row.variationReal > 0 ? `+${row.variationReal.toFixed(1)}%` : `${row.variationReal.toFixed(1)}%`}
                    {row.footnote ? '*' : ''}
                  </td>
                  <td className="py-2.5 px-3 text-right font-medium text-primary tabular-nums">
                    R$ {row.pibCorrenteTri.toFixed(2)} Tri
                  </td>
                  <td className="py-2.5 px-3 text-right font-medium text-on-surface tabular-nums">
                    R$ {row.pibPerCapita.toLocaleString('pt-BR')}
                  </td>
                  <td className="py-2.5 px-3 text-on-surface-variant">{row.driverDemanda}</td>
                  <td className="py-2.5 px-3 text-center">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                        row.status.includes('Projeção')
                          ? 'bg-primary-container text-white border-primary-fixed-dim/40'
                          : row.status.includes('Consolidado 2024')
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold'
                          : row.status.includes('Preliminar')
                          ? 'bg-secondary-fixed text-on-secondary-fixed border-secondary'
                          : 'bg-surface-container text-on-surface-variant border-outline-variant'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Methodology Footnote */}
        <div className="pt-3 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-outline gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="material-symbols-outlined text-[15px] text-secondary">verified</span>
            <span><strong>*Nota Oficial de Rodapé:</strong> *Até 2º tri vs mesmo período anterior.</span>
          </div>
          <span className="text-on-surface-variant font-mono">Sistema de Contas Nacionais</span>
        </div>
      </div>
    </div>
  );
};
