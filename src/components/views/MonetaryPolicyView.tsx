import React from 'react';
import { DI_FUTURES_CURVE } from '../../data/macroData';

interface MonetaryPolicyViewProps {
  onOpenExport: () => void;
}

export const MonetaryPolicyView: React.FC<MonetaryPolicyViewProps> = ({ onOpenExport }) => {
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
            <span>Política Monetária & Curva de Juros</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            Política Monetária, Taxa Selic & Curva de Juros
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Monitoramento das taxas básicas, comunicação oficial do Copom, expectativas Focus e estrutura a termo da curva DI B3.
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

      {/* 4 Monetary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">TAXA BÁSICA</span>
            <span>Decisão Vigente</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Taxa Selic Meta</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            13,25% <span className="text-sm font-normal text-outline">a.a.</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-error font-bold">▲ +50 bps</span>
            <span className="text-outline">Taxa CDI: 13,15%</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">JURO REAL EX-ANTE</span>
            <span>12 Meses</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Taxa de Juro Real Líquido</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            8,45% <span className="text-sm font-normal text-outline">a.a.</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-secondary font-semibold">Postura Contrativa</span>
            <span className="text-outline">Neutra: 4,75%</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">BOLETIM FOCUS</span>
            <span>Mediana 2025</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">Selic Projetada (Dez/25)</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            14,00% <span className="text-sm font-normal text-outline">a.a.</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-outline">Dez/26: 12,50%</span>
            <span className="text-outline">Dez/27: 11,00%</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs">
          <div className="text-[11px] text-outline font-mono flex justify-between">
            <span className="font-semibold text-primary">CURVA A TERMO</span>
            <span>DI1 B3</span>
          </div>
          <div className="text-xs font-semibold text-on-surface-variant mt-1">DI Futuro Jan/27 (2A)</div>
          <div className="text-2xl font-bold text-primary mt-1 tabular-nums">
            13,98% <span className="text-sm font-normal text-outline">a.a.</span>
          </div>
          <div className="mt-3 pt-2 border-t border-outline-variant/60 flex justify-between text-xs font-mono">
            <span className="text-error font-bold">▲ +5 bps d/d</span>
            <span className="text-outline">Prêmio de Risco</span>
          </div>
        </div>
      </div>

      {/* DI Futures Curve Table and Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Curva de Juros DI1 B3 */}
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">show_chart</span>
              Estrutura a Termo dos DIs Futuros (B3)
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">
              Curva Invertida
            </span>
          </div>

          <p className="text-xs text-outline leading-relaxed">
            A inclinação negativa entre o vértice de 1 ano (14,15%) e o vértice de 10 anos (13,00%) reflete a expectativa do mercado de um ciclo de aperto concentrado no curto prazo para ancorar as expectativas inflacionárias, com posterior alívio monetário.
          </p>

          <div className="space-y-2">
            {DI_FUTURES_CURVE.map((point) => (
              <div key={point.maturity} className="p-3 rounded-md bg-surface-container-low/40 border border-outline-variant/60 flex items-center justify-between text-xs">
                <span className="font-semibold text-primary font-mono">{point.maturity}</span>
                <div className="flex items-center gap-4 font-mono">
                  <span className="text-primary font-bold text-sm">{point.rate.toFixed(2)}%</span>
                  <span className={`text-[11px] font-semibold ${point.diffDay >= 0 ? 'text-error' : 'text-secondary'}`}>
                    {point.diffDay >= 0 ? `▲ +${point.diffDay.toFixed(2)}%` : `▼ ${point.diffDay.toFixed(2)}%`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copom Calendar & Communication Tone */}
        <div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
            Calendário & Posicionamento Oficial do Copom
          </h3>

          <div className="space-y-3">
            <div className="p-3 rounded-md bg-surface-container-low/50 border border-outline-variant text-xs space-y-1">
              <div className="flex justify-between font-mono font-bold text-primary">
                <span>Próxima Reunião Copom: 07 de Maio de 2025</span>
                <span className="text-secondary">D-17</span>
              </div>
              <p className="text-on-surface-variant text-[11px]">
                Precificação da curva DI embute 82% de probabilidade de manutenção ou ajuste residual de +25 bps.
              </p>
            </div>

            <div className="p-3 rounded-md bg-surface-container-low/50 border border-outline-variant text-xs space-y-1">
              <div className="font-semibold text-primary">Diretriz da Ata Oficial</div>
              <p className="text-on-surface-variant text-[11px] leading-relaxed">
                "O Comitê manterá a vigilância sobre a desancoragem das expectativas e a resiliência do setor de serviços, reiterando que a convergência da inflação à meta demanda política monetária restritiva por período suficientemente prolongado."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

