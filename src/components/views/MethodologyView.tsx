import React from 'react';

export const MethodologyView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-outline-variant">
        <div className="flex items-center gap-2 text-xs font-mono text-outline mb-1">
          <span className="font-semibold text-primary">MANUAL TÉCNICO & DOCUMENTAÇÃO</span>
          <span>•</span>
          <span>SNA 2008 / CMN 5.101</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          Metodologia Institucional, Dicionário de Dados & APIs
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
          Critérios de consolidação estatística, fontes primárias homologadas, fórmulas de cálculo e especificações técnicas de integração.
        </p>
      </div>

      {/* Primary Data Providers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary font-mono">IBGE SIDRA</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-secondary-fixed text-on-secondary-fixed font-mono font-bold">Oficial</span>
          </div>
          <div className="text-xs font-semibold text-primary">Instituto Brasileiro de Geografia e Estatística</div>
          <p className="text-[11px] text-outline leading-relaxed">
            Responsável pelas Contas Nacionais Trimestrais e Anuais (Tabela 1620), Sistema Nacional de Índices de Preços ao Consumidor (IPCA Tabela 7060) e PNAD Contínua (Tabela 6318).
          </p>
          <div className="text-[10px] font-mono text-primary pt-2 border-t border-outline-variant/60">
            Endpoint: api.sidra.ibge.gov.br/values/...
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary font-mono">BACEN SGS</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-secondary-fixed text-on-secondary-fixed font-mono font-bold">Oficial</span>
          </div>
          <div className="text-xs font-semibold text-primary">Banco Central do Brasil</div>
          <p className="text-[11px] text-outline leading-relaxed">
            Sistema Gerenciador de Séries Temporais (SGS), Boletim Semanal Focus, taxa de câmbio PTAX, Balanço de Pagamentos e Estatísticas de Crédito e Finanças Públicas.
          </p>
          <div className="text-[10px] font-mono text-primary pt-2 border-t border-outline-variant/60">
            Endpoint: api.bcb.gov.br/dados/serie/bcdata.sgs.{'{id}'}/dados
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary font-mono">FGV IBRE & STN</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-secondary-fixed text-on-secondary-fixed font-mono font-bold">Oficial</span>
          </div>
          <div className="text-xs font-semibold text-primary">FGV IBRE & Secretaria do Tesouro Nacional</div>
          <p className="text-[11px] text-outline leading-relaxed">
            Cálculo do Índice Geral de Preços do Mercado (IGP-M, IPA-M, IPC-M e INCC-M), execução orçamentária da União e Dívida Pública Federal (DPF/DBGG).
          </p>
          <div className="text-[10px] font-mono text-primary pt-2 border-t border-outline-variant/60">
            Padrão: Manual de Finanças Públicas do FMI (GFSM 2014)
          </div>
        </div>
      </div>

      {/* Mathematical Formulas & Calculation Standards */}
      <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">functions</span>
          Fórmulas e Padrões Estatísticos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-md bg-surface-container-low/40 border border-outline-variant/60 space-y-1.5">
            <div className="font-bold text-primary">Acumulação de 12 Meses de Inflação (IPCA / IGP-M)</div>
            <p className="text-[11px] text-outline font-mono bg-surface-container p-2 rounded">
              I_{`{12M}`} = \left[ \prod_{`{t=1}`}^{`{12}`} \left( 1 + \frac{`{i_t}`}{`{100}`} \right) - 1 \right] \times 100
            </p>
            <p className="text-[11px] text-on-surface-variant">
              Composição geométrica mensal dos 12 índices divulgados, não sendo admitida a soma aritmética linear.
            </p>
          </div>

          <div className="p-3.5 rounded-md bg-surface-container-low/40 border border-outline-variant/60 space-y-1.5">
            <div className="font-bold text-primary">Taxa de Juro Real Líquido Ex-Ante (Equação de Fisher)</div>
            <p className="text-[11px] text-outline font-mono bg-surface-container p-2 rounded">
              r = \frac{`{1 + i_{swap12M}}`}{`{1 + E[IPCA_{12M}]}`} - 1
            </p>
            <p className="text-[11px] text-on-surface-variant">
              Diferencial entre a taxa DI pré-fixada de 1 ano (B3) e a expectativa mediana de inflação Focus para os próximos 12 meses à frente.
            </p>
          </div>
        </div>
      </div>

      {/* Series Code Dictionary */}
      <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">list_alt</span>
          Dicionário de Códigos Oficiais SGS / SIDRA
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-surface-container-low text-[10px] uppercase font-mono text-outline border-b border-outline-variant">
              <tr>
                <th className="py-2.5 px-3">Identificador</th>
                <th className="py-2.5 px-3">Série / Tabela</th>
                <th className="py-2.5 px-3">Frequência</th>
                <th className="py-2.5 px-3">Fonte Primária</th>
                <th className="py-2.5 px-3">Unidade de Medida</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/50 font-metric-tabular">
              <tr>
                <td className="py-2 px-3 font-mono font-bold text-primary">SGS 433</td>
                <td className="py-2 px-3">IPCA - Índice Nacional de Preços ao Consumidor Amplo</td>
                <td className="py-2 px-3">Mensal</td>
                <td className="py-2 px-3">IBGE</td>
                <td className="py-2 px-3 text-secondary font-semibold">% mensal e 12M</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono font-bold text-primary">SGS 189</td>
                <td className="py-2 px-3">IGP-M - Índice Geral de Preços do Mercado</td>
                <td className="py-2 px-3">Mensal</td>
                <td className="py-2 px-3">FGV IBRE</td>
                <td className="py-2 px-3 text-secondary font-semibold">% mensal e 12M</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono font-bold text-primary">SGS 432</td>
                <td className="py-2 px-3">Taxa de Juros - Selic Meta Fixada pelo Copom</td>
                <td className="py-2 px-3">Reunião (45 dias)</td>
                <td className="py-2 px-3">BACEN</td>
                <td className="py-2 px-3 text-secondary font-semibold">% a.a.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono font-bold text-primary">SIDRA 1620</td>
                <td className="py-2 px-3">Série do PIB a Preços de Mercado e Valor Adicionado</td>
                <td className="py-2 px-3">Trimestral / Anual</td>
                <td className="py-2 px-3">SCN-IBGE</td>
                <td className="py-2 px-3 text-secondary font-semibold">R$ Milhões e % real</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono font-bold text-primary">SGS 13762</td>
                <td className="py-2 px-3">Dívida Bruta do Governo Geral (DBGG / PIB)</td>
                <td className="py-2 px-3">Mensal</td>
                <td className="py-2 px-3">BACEN / STN</td>
                <td className="py-2 px-3 text-secondary font-semibold">% do PIB nominal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

