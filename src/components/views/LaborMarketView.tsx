import React from 'react';

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
            <span className="font-semibold text-primary">IBGE • PNAD CONTÍNUA / NOVO CAGED</span>
            <span>•</span>
            <span>Pesquisa Nacional por Amostra de Domicílios</span>
            <span>•</span>
            <span className="text-secondary font-semibold">Tabela SIDRA 6318</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Mercado de Trabalho, Emprego Formal & Renda Real
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Monitoramento da taxa de desocupação estrutural, geração de empregos formais (Novo CAGED), massa salarial e rendimento médio habitual.
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

      {/* 4 Labor KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">PNAD CONTÍNUA</span>
            <span>Móvel 3M</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Taxa de Desocupação</div>
          <div className="text-2xl font-bold text-secondary mt-1 tabular-nums">
            6,4%
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-bold">▼ -0,4pp no trimestre</span>
            <span className="text-outline">Mínima desde 2012</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">NOVO CAGED</span>
            <span>Acumulado 12M</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Saldo Líquido com Carteira</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            +1.488.000 <span className="text-xs font-normal text-outline">vagas</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-bold">▲ Setor de Serviços lidera</span>
            <span className="text-outline">CLT Formal</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">IBGE-DPE</span>
            <span>Renda Média</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Rendimento Médio Habitual</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            R$ 3.250 <span className="text-xs font-normal text-outline">/ mês</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-bold">▲ +3,8% real a/a</span>
            <span className="text-outline">Ganho de poder compra</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">MASSA SALARIAL</span>
            <span>Mensal Real</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Massa de Rendimento Real</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            R$ 328,5 Bi
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-bold">▲ +6,2% a/a</span>
            <span className="text-outline">Driver do consumo</span>
          </div>
        </div>
      </div>

      {/* Structural Labor Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">group</span>
            População Ocupada e Composição do Emprego
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60 flex justify-between items-center text-xs">
              <div>
                <span className="font-semibold text-primary">Trabalhadores com Carteira (Setor Privado)</span>
                <div className="text-[10px] text-outline">38,7 milhões de pessoas</div>
              </div>
              <span className="font-mono font-bold text-secondary text-sm">+3,6% a/a</span>
            </div>
            <div className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60 flex justify-between items-center text-xs">
              <div>
                <span className="font-semibold text-primary">Trabalhadores por Conta Própria (PJ / Autônomos)</span>
                <div className="text-[10px] text-outline">25,8 milhões de pessoas</div>
              </div>
              <span className="font-mono font-bold text-primary text-sm">+1,2% a/a</span>
            </div>
            <div className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60 flex justify-between items-center text-xs">
              <div>
                <span className="font-semibold text-primary">Taxa de Informalidade Geral</span>
                <div className="text-[10px] text-outline">38,4% da população ocupada</div>
              </div>
              <span className="font-mono font-bold text-secondary text-sm">▼ -0,7pp</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
            Diagnóstico Macroeconômico do Emprego
          </h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            O mercado de trabalho brasileiro opera próximo ao pleno emprego estrutural, com a taxa de desocupação (6,4%) situando-se abaixo da taxa neutra (NAIRU estimada em ~7,5%). Essa condição sustenta a expansão contínua da massa salarial e do consumo das famílias, mas mantém a inflação de serviços subjacentes (4,60%) em patamar elevado, justificando o tom austero do Banco Central.
          </p>
          <div className="p-3 rounded-md bg-surface-container-low/50 border border-outline-variant text-[11px] text-outline flex items-center justify-between">
            <span>Fonte Primária: IBGE SIDRA 6318 & MTE Novo CAGED</span>
            <span className="text-primary font-semibold font-mono">D-0 Auditado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

