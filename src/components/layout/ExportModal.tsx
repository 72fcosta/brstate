import React, { useState } from 'react';
import { 
  PIB_ANNUAL_DATA, 
  FUV_INFLATION_MANDATE_DATA,
  FUV_DEBT_MANDATE_DATA,
  FUV_UNEMPLOYMENT_MANDATE_DATA,
  INFLATION_COMPARATIVE_SERIES, 
  INFLATION_GROUPS_IPCA, 
  FOCUS_PROJECTIONS 
} from '../../data/macroData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const downloadCSV = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(filename);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  // 1. Unified 4 Matrices Export (FUV v2.0)
  const handleExportUnifiedFuvCSV = () => {
    let content = '### BRSTATE v2.0 — FONTE UNICA DA VERDADE (FUV) — MATRIZES MACROECONOMICAS CONSOLIDADAS ###\n';
    content += `Data de Exportacao:;${new Date().toISOString()};Ambiente:;Producao / FUV v2.0\n\n`;

    // Matrix 1: PIB
    content += '--- MATRIZ 1: ATIVIDADE ECONOMICA / PIB (% REAL ANUAL) ---\n';
    content += 'Exercicio;Variacao Real (%);PIB Corrente (R$ Tri);Per Capita (R$);Driver Conjuntural;Status;Fonte\n';
    PIB_ANNUAL_DATA.forEach((r) => {
      content += `${r.year};${r.variationReal};${r.pibCorrenteTri};${r.pibPerCapita};"${r.driverDemanda}";"${r.status}";"${r.agency}"\n`;
    });
    content += 'Nota:;*Ate 2o tri vs mesmo periodo anterior;;;;;\n\n';

    // Matrix 2: IPCA Mandatos
    content += '--- MATRIZ 2: INFLACAO & PRECOS / IPCA (% ANUAL) - COMPARATIVO DE MANDATOS ---\n';
    content += 'Periodo;Ano Bolsonaro;Gov. Bolsonaro (%);Ano Lula;Gov. Lula (%);Diferenca (pp);Observacoes\n';
    FUV_INFLATION_MANDATE_DATA.rows.forEach((r) => {
      content += `"${r.period}";${r.yearBolsonaro};${r.valBolsonaro};${r.yearLula};${r.valLula};${r.diffPp};"${r.notes || ''}"\n`;
    });
    content += `Media Simples do Ciclo;;${FUV_INFLATION_MANDATE_DATA.averageCycle.bolsonaro};;${FUV_INFLATION_MANDATE_DATA.averageCycle.lula};${FUV_INFLATION_MANDATE_DATA.averageCycle.diffPp};"Spread favoravel Lula -1,62 pp"\n\n`;

    // Matrix 3: Divida Bruta
    content += '--- MATRIZ 3: DIVIDA BRUTA DO GOVERNO GERAL (DBGG % PIB) - COMPARATIVO DE MANDATOS ---\n';
    content += 'Periodo;Ano Bolsonaro;Gov. Bolsonaro (%);Ano Lula;Gov. Lula (%);Diferenca (pp)\n';
    FUV_DEBT_MANDATE_DATA.rows.forEach((r) => {
      content += `"${r.period}";${r.yearBolsonaro};${r.valBolsonaro};${r.yearLula};${r.valLula};${r.diffPp}\n`;
    });
    content += `Variacao Liquida do Ciclo;;${FUV_DEBT_MANDATE_DATA.netVariation.bolsonaro};;${FUV_DEBT_MANDATE_DATA.netVariation.lula};Spread FUV\n\n`;

    // Matrix 4: Desemprego
    content += '--- MATRIZ 4: MERCADO DE TRABALHO / TAXA DE DESOCUPACAO (%) - COMPARATIVO DE MANDATOS ---\n';
    content += 'Periodo;Ano Bolsonaro;Gov. Bolsonaro (%);Ano Lula;Gov. Lula (%);Diferenca (pp)\n';
    FUV_UNEMPLOYMENT_MANDATE_DATA.rows.forEach((r) => {
      content += `"${r.period}";${r.yearBolsonaro};${r.valBolsonaro};${r.yearLula};${r.valLula};${r.diffPp}\n`;
    });
    content += `Reducao Liquida da Taxa;;${FUV_UNEMPLOYMENT_MANDATE_DATA.netVariation.bolsonaro};;${FUV_UNEMPLOYMENT_MANDATE_DATA.netVariation.lula};"Patamar Menor em Lula"\n`;

    downloadCSV('brstate_fuv_matrizes_consolidadas_v2.0.csv', content);
  };

  // 2. Individual PIB CSV
  const handleExportPibCSV = () => {
    const headers = 'Ano;Variação Real (%);PIB Corrente (R$ Tri);PIB per Capita (R$);Driver Principal;Status;Fonte\n';
    const rows = PIB_ANNUAL_DATA.map((row) => 
      `${row.year};${row.variationReal};${row.pibCorrenteTri};${row.pibPerCapita};"${row.driverDemanda}";"${row.status}";"${row.agency}"`
    ).join('\n');
    downloadCSV('brstate_pib_serie_oficial_fuv_2019_2026.csv', headers + rows + '\nNota:;*Até 2º tri vs mesmo período anterior;;;;;');
  };

  // 3. Individual Inflation Mandates CSV
  const handleExportInflationMandatesCSV = () => {
    const headers = 'Período;Ano Bolsonaro;Gov. Bolsonaro (%);Ano Lula;Gov. Lula (%);Diferença (pp);Nota\n';
    const rows = FUV_INFLATION_MANDATE_DATA.rows.map((r) =>
      `"${r.period}";${r.yearBolsonaro};${r.valBolsonaro};${r.yearLula};${r.valLula};${r.diffPp};"${r.notes}"`
    ).join('\n');
    const footer = `\nMédia Simples do Ciclo;;${FUV_INFLATION_MANDATE_DATA.averageCycle.bolsonaro};;${FUV_INFLATION_MANDATE_DATA.averageCycle.lula};${FUV_INFLATION_MANDATE_DATA.averageCycle.diffPp};"Diferença -1,62 pp"`;
    downloadCSV('brstate_ipca_mandatos_bolsonaro_vs_lula_fuv.csv', headers + rows + footer);
  };

  // 4. Individual Inflation Monthly CSV
  const handleExportInflationCSV = () => {
    const headers = 'Data;IPCA 12M (%);IGP-M 12M (%);Meta CMN (%);Teto Meta (%);Piso Meta (%);Núcleo (%)\n';
    const rows = INFLATION_COMPARATIVE_SERIES.map((row) =>
      `${row.date};${row.ipca12M};${row.igpm12M};${row.metaCMN};${row.tetoMeta};${row.pisoMeta};${row.nucleoBacen}`
    ).join('\n');
    downloadCSV('brstate_inflacao_ipca_igpm_2020_2025.csv', headers + rows);
  };

  // 5. Individual Groups CSV
  const handleExportGroupsCSV = () => {
    const headers = 'Grupo de Consumo;Peso na Cesta (%);Variação 12M (%);Impacto (pp);Tipo de Preço;Observação\n';
    const rows = INFLATION_GROUPS_IPCA.map((row) =>
      `"${row.name}";${row.weight};${row.variation12M};${row.impactPp};"${row.category}";"${row.note}"`
    ).join('\n');
    downloadCSV('brstate_ipca_grupos_consumo.csv', headers + rows);
  };

  // 6. Individual Focus CSV
  const handleExportFocusCSV = () => {
    const headers = 'Indicador;Atual;Referência;Projeção 2025;Projeção 2026;Projeção 2027;Trajetória\n';
    const rows = FOCUS_PROJECTIONS.map((row) =>
      `"${row.indicator}";"${row.actual}";"${row.targetOrRef}";"${row.exp2025}";"${row.exp2026}";"${row.exp2027}";"${row.trend}"`
    ).join('\n');
    downloadCSV('brstate_expectativas_boletim_focus_bacen.csv', headers + rows);
  };

  const handlePrintDossier = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
      <div 
        className="w-full max-w-xl bg-surface-container-lowest rounded-lg border border-outline-variant shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant bg-surface-container-low/50">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[22px]">download</span>
            <div>
              <h3 className="text-sm font-bold text-primary">Exportar Dados & Relatório Executivo</h3>
              <p className="text-[11px] text-outline">Fonte Única da Verdade Consolidada (v2.0-FUV)</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded hover:bg-surface-container text-on-surface-variant text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-5 space-y-4 overflow-y-auto">
          {downloadSuccess && (
            <div className="p-3 rounded-md bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Download concluído: {downloadSuccess}</span>
            </div>
          )}

          {/* Master Unified 4-Matrix Export */}
          <div className="p-4 rounded-md border-2 border-emerald-300 bg-emerald-50/60 hover:bg-emerald-50 transition-colors shadow-xs">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="badge-source bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded">
                    Fonte Única da Verdade (v2.0)
                  </span>
                  <span className="text-[10px] text-emerald-700 font-mono font-semibold">4 Matrizes</span>
                </div>
                <h4 className="text-xs font-bold text-emerald-950 mt-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-emerald-700">dataset</span>
                  Download Unificado das 4 Matrizes (FUV Consolidada)
                </h4>
                <p className="text-[11px] text-emerald-800 mt-1 leading-snug">
                  Pacote consolidado client-side: PIB Real (2019-2026*), IPCA por Mandato, Dívida Bruta (DBGG) e Taxa de Desocupação.
                </p>
              </div>
              <button
                onClick={handleExportUnifiedFuvCSV}
                className="px-3.5 py-2 rounded bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors whitespace-nowrap shadow-xs flex items-center gap-1"
              >
                <span>Baixar Todas</span>
                <span className="material-symbols-outlined text-[16px]">file_download</span>
              </button>
            </div>
          </div>

          {/* PDF Dossier */}
          <div className="p-4 rounded-md border border-outline-variant bg-surface-container-low/30 hover:border-primary/40 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-error">picture_as_pdf</span>
                  Dossiê Executivo Macroeconômico (PDF)
                </h4>
                <p className="text-[11px] text-outline mt-1">
                  Gera versão executiva com diagramação editorial pronta para impressão oficial ou exportação PDF.
                </p>
              </div>
              <button
                onClick={handlePrintDossier}
                className="px-3 py-1.5 rounded bg-primary text-white text-xs font-semibold hover:bg-primary-container transition-colors whitespace-nowrap"
              >
                Imprimir / PDF
              </button>
            </div>
          </div>

          {/* Raw CSV Data Downloads */}
          <div className="space-y-2 pt-2">
            <div className="text-[11px] uppercase tracking-wider font-bold text-outline">
              Séries Específicas (.CSV)
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={handleExportPibCSV}
                className="flex items-center justify-between p-3 rounded-md border border-outline-variant hover:bg-surface-container-low hover:border-primary/40 transition-colors text-left"
              >
                <div>
                  <div className="text-xs font-semibold text-primary">PIB Real & Contas Nacionais (2019 – 2026*)</div>
                  <div className="text-[10px] text-outline">Valores consolidados (+3,4% 2024, +2,3% 2025, +1,9%* 4º ano)</div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-secondary flex items-center gap-1">
                  CSV <span className="material-symbols-outlined text-[16px]">file_download</span>
                </span>
              </button>

              <button
                onClick={handleExportInflationMandatesCSV}
                className="flex items-center justify-between p-3 rounded-md border border-outline-variant hover:bg-surface-container-low hover:border-primary/40 transition-colors text-left"
              >
                <div>
                  <div className="text-xs font-semibold text-primary">IPCA: Matriz Comparativa de Mandatos (FUV)</div>
                  <div className="text-[10px] text-outline">1º ao 4º ano (Bolsonaro vs Lula), pico de 10,06% e média de ciclo</div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-secondary flex items-center gap-1">
                  CSV <span className="material-symbols-outlined text-[16px]">file_download</span>
                </span>
              </button>

              <button
                onClick={handleExportInflationCSV}
                className="flex items-center justify-between p-3 rounded-md border border-outline-variant hover:bg-surface-container-low hover:border-primary/40 transition-colors text-left"
              >
                <div>
                  <div className="text-xs font-semibold text-primary">Preços: IPCA, IGP-M e Metas CMN (2020 – 2025)</div>
                  <div className="text-[10px] text-outline">Série mensal acumulada em 12 meses e núcleos de inflação</div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-secondary flex items-center gap-1">
                  CSV <span className="material-symbols-outlined text-[16px]">file_download</span>
                </span>
              </button>

              <button
                onClick={handleExportGroupsCSV}
                className="flex items-center justify-between p-3 rounded-md border border-outline-variant hover:bg-surface-container-low hover:border-primary/40 transition-colors text-left"
              >
                <div>
                  <div className="text-xs font-semibold text-primary">Decomposição IPCA: 9 Grupos de Consumo</div>
                  <div className="text-[10px] text-outline">Pesos ponderados, variações 12M e impacto em pontos percentuais</div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-secondary flex items-center gap-1">
                  CSV <span className="material-symbols-outlined text-[16px]">file_download</span>
                </span>
              </button>

              <button
                onClick={handleExportFocusCSV}
                className="flex items-center justify-between p-3 rounded-md border border-outline-variant hover:bg-surface-container-low hover:border-primary/40 transition-colors text-left"
              >
                <div>
                  <div className="text-xs font-semibold text-primary">Consenso de Mercado: Expectativas Focus</div>
                  <div className="text-[10px] text-outline">Projeções medianas 2025, 2026 e 2027</div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-secondary flex items-center gap-1">
                  CSV <span className="material-symbols-outlined text-[16px]">file_download</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-5 py-3 bg-surface-container-low/70 border-t border-outline-variant flex items-center justify-between text-[11px] text-outline">
          <span>Padrão delimitador: Ponto e vírgula (;) • UTF-8</span>
          <button onClick={onClose} className="hover:text-primary font-medium">
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
