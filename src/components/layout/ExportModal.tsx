import React, { useState } from 'react';
import { 
  PIB_ANNUAL_DATA, 
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

  const handleExportPibCSV = () => {
    const headers = 'Ano;Variação Real (%);PIB Corrente (R$ Tri);PIB per Capita (R$);Driver Principal;Status;Fonte\n';
    const rows = PIB_ANNUAL_DATA.map((row) => 
      `${row.year};${row.variationReal};${row.pibCorrenteTri};${row.pibPerCapita};"${row.driverDemanda}";"${row.status}";"${row.agency}"`
    ).join('\n');
    downloadCSV('brstate_pib_serie_historica_2019_2025.csv', headers + rows);
  };

  const handleExportInflationCSV = () => {
    const headers = 'Data;IPCA 12M (%);IGP-M 12M (%);Meta CMN (%);Teto Meta (%);Piso Meta (%);Núcleo BACEN (%)\n';
    const rows = INFLATION_COMPARATIVE_SERIES.map((row) =>
      `${row.date};${row.ipca12M};${row.igpm12M};${row.metaCMN};${row.tetoMeta};${row.pisoMeta};${row.nucleoBacen}`
    ).join('\n');
    downloadCSV('brstate_inflacao_ipca_igpm_2020_2025.csv', headers + rows);
  };

  const handleExportGroupsCSV = () => {
    const headers = 'Grupo IBGE;Peso na Cesta (%);Variação 12M (%);Impacto (pp);Tipo de Preço;Observação\n';
    const rows = INFLATION_GROUPS_IPCA.map((row) =>
      `"${row.name}";${row.weight};${row.variation12M};${row.impactPp};"${row.category}";"${row.note}"`
    ).join('\n');
    downloadCSV('brstate_ipca_grupos_consumo_ibge.csv', headers + rows);
  };

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
        className="w-full max-w-lg bg-surface-container-lowest rounded-lg border border-outline-variant shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant bg-surface-container-low/50">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[22px]">download</span>
            <h3 className="text-sm font-bold text-primary">Exportar Dados & Relatório Executivo</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded hover:bg-surface-container text-on-surface-variant text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-5 space-y-4">
          {downloadSuccess && (
            <div className="p-3 rounded-md bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Download concluído: {downloadSuccess}</span>
            </div>
          )}

          {/* PDF Dossier */}
          <div className="p-4 rounded-md border border-outline-variant bg-surface-container-low/30 hover:border-primary/40 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-error">picture_as_pdf</span>
                  Dossiê Executivo Macroeconômico (PDF)
                </h4>
                <p className="text-[11px] text-outline mt-1">
                  Gera uma versão consolidada com formatação editorial de alta resolução para impressão institucional ou salvamento em PDF.
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
              Bases de Dados Tabulares (.CSV)
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={handleExportPibCSV}
                className="flex items-center justify-between p-3 rounded-md border border-outline-variant hover:bg-surface-container-low hover:border-primary/40 transition-colors text-left"
              >
                <div>
                  <div className="text-xs font-semibold text-primary">Contas Nacionais: Série do PIB (2019 – 2025)</div>
                  <div className="text-[10px] text-outline">Variação Real, PIB Corrente, Per Capita e Demanda (IBGE)</div>
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
                  <div className="text-[10px] text-outline">Série mensal acumulada em 12 meses e núcleos BACEN</div>
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
                  <div className="text-xs font-semibold text-primary">Decomposição IPCA: 9 Grupos de Consumo IBGE</div>
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
                  <div className="text-xs font-semibold text-primary">Consenso de Mercado: Expectativas Focus BACEN</div>
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

