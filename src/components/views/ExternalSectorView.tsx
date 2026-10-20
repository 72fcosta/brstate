import React from 'react';

interface ExternalSectorViewProps {
  onOpenExport: () => void;
}

export const ExternalSectorView: React.FC<ExternalSectorViewProps> = ({ onOpenExport }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-outline mb-1">
            <span className="font-semibold text-primary">MDIC • SECEX / BACEN</span>
            <span>•</span>
            <span>Setor Externo, Câmbio & Balanço de Pagamentos</span>
            <span>•</span>
            <span className="text-secondary font-semibold">PTAX SGS 1</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Setor Externo, Câmbio & Balança Comercial
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Fluxos de comércio exterior, superávit comercial estrutural, paridade USD/BRL e liquidez internacional soberana.
          </p>
        </div>

        <button
          onClick={onOpenExport}
          className="px-3 py-1.5 rounded-md bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px] text-secondary-fixed">download</span>
          <span>Exportar Dados</span>
        </button>
      </div>

      {/* 4 External KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">SECEX / MDIC</span>
            <span>12 Meses</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Superávit Comercial</div>
          <div className="text-2xl font-bold text-secondary mt-1 tabular-nums">
            +US$ 74,2 Bi
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-outline">Exp: US$ 338 Bi</span>
            <span className="text-outline">Imp: US$ 264 Bi</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">BACEN</span>
            <span>PTAX D-0</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Câmbio USD / BRL</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            R$ 5,74
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-error font-bold">▲ +0,42% d/d</span>
            <span className="text-outline">EUR/BRL: R$ 6,02</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">RESERVAS SOBERANAS</span>
            <span>Ativo BACEN</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Reservas Internacionais</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            US$ 355,4 Bi
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-semibold">Colchão de Liquidez</span>
            <span className="text-outline">~16% do PIB</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">INVESTIMENTO DIRETO</span>
            <span>IDP 12M</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Entrada Líquida de IDP</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            US$ 68,0 Bi
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-semibold">Cobre Déficit Corrente</span>
            <span className="text-outline">Déficit: US$ 42 Bi</span>
          </div>
        </div>
      </div>

      {/* Structural Trade Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">public</span>
            Pauta de Exportação Brasileira por Setor
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60 flex justify-between items-center text-xs">
              <div>
                <span className="font-semibold text-primary">Agropecuária & Grãos (Soja, Milho, Café, Carnes)</span>
                <div className="text-[10px] text-outline">US$ 148 Bilhões (43,8% da pauta)</div>
              </div>
              <span className="font-mono font-bold text-secondary text-sm">+2,1%</span>
            </div>
            <div className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60 flex justify-between items-center text-xs">
              <div>
                <span className="font-semibold text-primary">Indústria Extrativa (Petróleo Cru e Minério de Ferro)</span>
                <div className="text-[10px] text-outline">US$ 82 Bilhões (24,3% da pauta)</div>
              </div>
              <span className="font-mono font-bold text-primary text-sm">+4,5%</span>
            </div>
            <div className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60 flex justify-between items-center text-xs">
              <div>
                <span className="font-semibold text-primary">Indústria de Transformação (Manufaturados)</span>
                <div className="text-[10px] text-outline">US$ 108 Bilhões (31,9% da pauta)</div>
              </div>
              <span className="font-mono font-bold text-outline text-sm">-1,2%</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
            Vulnerabilidade Externa e Financiamento
          </h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            O balanço de pagamentos brasileiro exibe solidez estrutural: as reservas de liquidez em dólar (US$ 355 Bi) superam amplamente o passivo de dívida externa de curto prazo. O déficit em transações correntes (-1,9% do PIB) é integralmente financiado por Investimento Direto no País (IDP a 3,1% do PIB), afastando pressões de balanço de pagamentos.
          </p>
          <div className="p-3 rounded-md bg-surface-container-low/50 border border-outline-variant text-[11px] text-outline flex items-center justify-between">
            <span>Fontes: MDIC/SECEX Comex Stat & Banco Central do Brasil</span>
            <span className="text-primary font-semibold font-mono">Consolidado 2024/2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

