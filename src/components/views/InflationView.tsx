import React, { useState } from 'react';
import { 
  INFLATION_COMPARATIVE_SERIES, 
  INFLATION_GROUPS_IPCA, 
  FOCUS_PROJECTIONS 
} from '../../data/macroData';

interface InflationViewProps {
  onOpenExport: () => void;
}

export const InflationView: React.FC<InflationViewProps> = ({ onOpenExport }) => {
  const [activePointIndex, setActivePointIndex] = useState<number>(INFLATION_COMPARATIVE_SERIES.length - 1);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<'all' | 'livre' | 'administrado'>('all');

  const activePoint = INFLATION_COMPARATIVE_SERIES[activePointIndex];

  const filteredGroups = INFLATION_GROUPS_IPCA.filter((g) => {
    if (selectedGroupFilter === 'all') return true;
    return g.category === selectedGroupFilter || g.category === 'misto';
  });

  // SVG Chart Geometry Constants
  // Y range: -8.0% to +40.0% (total span 48 units)
  // Height 320, padding top 20, padding bottom 40
  const chartHeight = 320;
  const chartWidth = 950;
  const paddingX = 65;
  const stepX = (chartWidth - paddingX * 2) / (INFLATION_COMPARATIVE_SERIES.length - 1);

  const getYCoord = (val: number) => {
    const minVal = -8.0;
    const maxVal = 40.0;
    const ratio = (val - minVal) / (maxVal - minVal);
    return 270 - ratio * 240;
  };

  const cmnFloorY = getYCoord(1.50);
  const cmnTargetY = getYCoord(3.00);
  const cmnCeilY = getYCoord(4.50);

  // Path generators
  const ipcaPoints = INFLATION_COMPARATIVE_SERIES.map((d, i) => `${paddingX + i * stepX},${getYCoord(d.ipca12M)}`);
  const ipcaPath = `M ${ipcaPoints.join(' L ')}`;

  const igpmPoints = INFLATION_COMPARATIVE_SERIES.map((d, i) => `${paddingX + i * stepX},${getYCoord(d.igpm12M)}`);
  const igpmPath = `M ${igpmPoints.join(' L ')}`;

  const nucleoPoints = INFLATION_COMPARATIVE_SERIES.map((d, i) => `${paddingX + i * stepX},${getYCoord(d.nucleoBacen)}`);
  const nucleoPath = `M ${nucleoPoints.join(' L ')}`;

  return (
    <div className="space-y-6">
      {/* Header & Subtitle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-outline mb-1">
            <span className="font-semibold text-primary">IBGE • FGV IBRE • BACEN</span>
            <span>•</span>
            <span>Sistema de Metas Contínuas do CMN (Resolução nº 5.101)</span>
            <span>•</span>
            <span className="text-secondary font-semibold">SGS 433 & 189</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Inflação & Preços: IPCA, IGP-M e Núcleos
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Monitoramento de índices oficiais de preços ao consumidor, atacado (IPA-M), dispersão dos 9 grupos de consumo e bandas de tolerância.
          </p>
        </div>

        {/* Header Action Tools */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-low border border-outline-variant text-xs">
            <span className="text-outline">Regime Atual:</span>
            <span className="font-bold text-primary font-mono">Meta Contínua (3,00% ± 1,5pp)</span>
          </div>
          <button
            onClick={onOpenExport}
            className="px-3 py-1.5 rounded-md bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">download</span>
            <span>Exportar Série</span>
          </button>
        </div>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: IPCA 12M */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">IBGE • IPCA</span>
              <span>Acumulado 12M</span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1">IPCA Oficial Fechado</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums flex items-baseline gap-2">
              4,42%
              <span className="text-xs font-semibold text-secondary font-mono">Dentro do teto</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-error font-bold flex items-center gap-0.5 font-mono">
              ▲ +0,08pp <span className="text-[10px] text-on-surface-variant font-normal">vs mês anterior</span>
            </span>
            <span className="text-[11px] text-outline font-mono">Teto: 4,50%</span>
          </div>
        </div>

        {/* Card 2: IGP-M 12M */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">FGV IBRE</span>
              <span>Aluguéis & Atacado</span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1">IGP-M Geral de Mercado</div>
            <div className="text-2xl font-bold text-tertiary-container mt-1 tabular-nums flex items-baseline gap-2">
              5,12%
              <span className="text-xs font-semibold text-error font-mono">Pressão IPA</span>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-error font-bold flex items-center gap-0.5 font-mono">
              ▲ +0,34pp <span className="text-[10px] text-on-surface-variant font-normal">IPA-M +5,88%</span>
            </span>
            <span className="text-[11px] text-outline font-mono">Dez/23: -3,18%</span>
          </div>
        </div>

        {/* Card 3: Meta CMN Contínua */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">Conselho Monetário</span>
              <span>2024–2025</span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1">Meta CMN Contínua</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              3,00% <span className="text-xs font-normal text-outline">± 1,50pp</span>
            </div>
          </div>
          {/* Visual ruler band representation */}
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-outline">
              <span>Piso 1,50%</span>
              <span className="font-bold text-primary">Centro 3,00%</span>
              <span>Teto 4,50%</span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-2 relative overflow-hidden">
              <div className="absolute left-[30%] right-[10%] bg-secondary/30 h-full"></div>
              {/* Actual IPCA position marker (4.42% -> 95% of 1.5-4.5) */}
              <div className="absolute left-[92%] top-0 bottom-0 w-1 bg-error rounded"></div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[10px] text-outline">
            <span>Margem de Tolerância</span>
            <span className="text-secondary font-semibold font-mono">Aderente</span>
          </div>
        </div>

        {/* Card 4: Núcleos BACEN */}
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-outline font-mono">
              <span className="font-semibold text-primary">BACEN Núcleos</span>
              <span>Média 5 Medidas</span>
            </div>
            <div className="text-xs font-semibold text-on-surface-variant mt-1">Média dos Núcleos IPCA</div>
            <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
              3,95%
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-secondary font-bold flex items-center gap-0.5 font-mono">
              ▼ -0,07pp <span className="text-[10px] text-on-surface-variant font-normal">desinflação</span>
            </span>
            <span className="text-[11px] text-outline font-mono">Serviços: 4,60%</span>
          </div>
        </div>
      </div>

      {/* Main Comparative Chart: IPCA vs IGP-M */}
      <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-primary">
                Evolução Comparativa: IPCA vs IGP-M (Acumulado em 12 Meses, 2020 – 2025)
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

            {/* Trendline: Média dos Núcleos (Dashed Gray) */}
            <path
              d={nucleoPath}
              fill="none"
              stroke="#64748b"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />

            {/* Trendline: IGP-M (Amber Gold) */}
            <path
              d={igpmPath}
              fill="none"
              stroke="#ba880e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Trendline: IPCA (Sovereign Emerald) */}
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
                  {/* Vertical inspector guide */}
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

                  {/* IGP-M Node */}
                  <circle
                    cx={x}
                    cy={yIgpm}
                    r={isSelected ? '5.5' : '3.5'}
                    fill="#ba880e"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />

                  {/* IPCA Node */}
                  <circle
                    cx={x}
                    cy={yIpca}
                    r={isSelected ? '6.5' : '4.5'}
                    fill="#246a53"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />

                  {/* Date X Label */}
                  <text
                    x={x}
                    y="298"
                    textAnchor="middle"
                    fontSize="11"
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

        {/* Selected Reading Telemetry Strip */}
        {activePoint && (
          <div className="p-4 rounded-md bg-surface-container-low/60 border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-3 animate-in fade-in duration-150">
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
                  <span className="text-outline text-[11px]">Núcleo BACEN: </span>
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

      {/* Structural Breakdown: 9 Grupos de Consumo IBGE & Preços Livres vs Administrados */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: 9 Consumption Groups */}
        <div className="lg:col-span-2 p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">category</span>
                Decomposição por Grupos de Consumo (IPCA)
              </h3>
              <p className="text-xs text-outline mt-0.5">
                Pesos relativos da POF/IBGE e impacto na variação acumulada de 12 meses.
              </p>
            </div>

            {/* Filter buttons */}
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

          {/* Groups list with progress bars */}
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

                {/* Progress bar representing weight & variation */}
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

        {/* Right Col: Preços Livres vs Administrados & Focus Table */}
        <div className="space-y-6">
          {/* Preços Livres vs Administrados Card */}
          <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
              Preços Livres vs Administrados
            </h3>

            {/* Administrados */}
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

            {/* Livres */}
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

            <div className="text-[11px] text-outline pt-2 border-t border-outline-variant/60 flex items-center justify-between">
              <span>Sensibilidade Selic: <strong>Alta em Livres</strong></span>
              <span className="font-mono text-primary">IBGE-SGS</span>
            </div>
          </div>

          {/* Expectativas Focus BACEN Card */}
          <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-[19px]">query_stats</span>
                Expectativas Focus (BACEN)
              </h3>
              <span className="text-[10px] font-mono font-bold text-secondary bg-secondary-fixed px-1.5 py-0.5 rounded">
                Mediana
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

            <div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between text-[10px] text-outline">
              <span>Fonte: Banco Central do Brasil • Boletim Semanal</span>
              <button onClick={onOpenExport} className="text-primary hover:underline font-semibold">
                Exportar CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
