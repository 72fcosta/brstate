import React from 'react';

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
            <span className="font-semibold text-primary">SECRETARIA DO TESOURO NACIONAL (STN) • BACEN</span>
            <span>•</span>
            <span>Estatísticas Fiscais e Novo Arcabouço Fiscal (LC 200/2023)</span>
            <span>•</span>
            <span className="text-secondary font-semibold">SGS 13762</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Fiscal, Resultado Primário & Dívida Pública Soberana
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Monitoramento da Dívida Bruta do Governo Geral (DBGG), superávit/déficit primário, despesas obrigatórias vs discricionárias e bandas do arcabouço.
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

      {/* 4 Fiscal KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">DBGG / PIB</span>
            <span>Governo Geral</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Dívida Bruta (% do PIB)</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            78,5% <span className="text-xs font-normal text-outline">R$ 8,9 Tri</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-error font-bold">▲ +0,2pp no mês</span>
            <span className="text-outline">Média Emergentes: 69%</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">DLSP / PIB</span>
            <span>Setor Público</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Dívida Líquida (% do PIB)</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            61,8% <span className="text-xs font-normal text-outline">R$ 7,0 Tri</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-bold">▼ Deduz reservas em US$</span>
            <span className="text-outline">Colchão cambial</span>
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

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">RIGIDEZ ORÇAMENTÁRIA</span>
            <span>LOA 2025</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Despesas Obrigatórias</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            91,5% <span className="text-xs font-normal text-outline">do total</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-outline">Discricionárias: 8,5%</span>
            <span className="text-error font-semibold">Espaço Investimento</span>
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
            A dinâmica da relação DBGG/PIB depende fundamentalmente do diferencial entre a taxa de juros real implícita na dívida e o crescimento do PIB potencial (\(r - g\)), somado ao esforço fiscal primário. Com o PIB crescendo a ~3,0% e a taxa Selic em patamar restritivo (13,25%), a estabilização da dívida pública exige convergência progressiva ao superávit primário de ~1,5% do PIB no médio prazo.
          </p>
          <div className="p-3 rounded-md bg-surface-container-low/50 border border-outline-variant text-[11px] text-outline flex items-center justify-between">
            <span>Fonte: Tesouro Transparente & Relatório de Estatísticas Fiscais BACEN</span>
            <span className="text-primary font-semibold font-mono">D-0 Oficial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

