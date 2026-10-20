export type SectionId = 
  | 'overview' 
  | 'pib' 
  | 'inflacao' 
  | 'selic' 
  | 'trabalho' 
  | 'externo' 
  | 'fiscal' 
  | 'config' 
  | 'metodologia';

export interface MacroIndicator {
  code: string;
  name: string;
  shortName: string;
  source: string;
  value: string;
  numericValue: number;
  unit: string;
  variation: string;
  isPositiveDirectionGood: boolean;
  trend: 'up' | 'down' | 'neutral';
  timeHorizon: string;
  statusText?: string;
  statusType?: 'success' | 'warning' | 'error' | 'info';
  sparklineData: number[];
}

export interface PibAnnualRecord {
  year: string;
  variationReal: number; // %
  pibCorrenteTri: number; // R$ Tri
  pibPerCapita: number; // R$
  driverDemanda: string;
  status: string;
  agency: string;
  isProjected?: boolean;
  footnote?: string;
}

export interface InflationMandateRecord {
  period: string; // '1º Ano', '2º Ano', '3º Ano', '4º Ano'
  yearBolsonaro: string;
  valBolsonaro: number;
  yearLula: string;
  valLula: number;
  diffPp: number;
  isProjectedLula?: boolean;
  notes?: string;
}

export interface DebtMandateRecord {
  period: string;
  yearBolsonaro: string;
  valBolsonaro: number;
  yearLula: string;
  valLula: number;
  diffPp: number;
  isProjectedLula?: boolean;
}

export interface UnemploymentMandateRecord {
  period: string;
  yearBolsonaro: string;
  valBolsonaro: number;
  yearLula: string;
  valLula: number;
  diffPp: number;
  isProjectedLula?: boolean;
}

export interface InflationGroup {
  id: number;
  name: string;
  weight: number; // % da cesta
  variation12M: number; // %
  impactPp: number; // pontos percentuais
  category: 'livre' | 'administrado' | 'misto';
  note: string;
}

export interface InflationMonthlyPoint {
  date: string;
  ipca12M: number;
  igpm12M: number;
  metaCMN: number;
  tetoMeta: number;
  pisoMeta: number;
  nucleoBacen: number;
}

export interface FocusProjection {
  indicator: string;
  actual: string;
  targetOrRef: string;
  exp2025: string;
  exp2026: string;
  exp2027: string;
  trend: 'up' | 'down' | 'stable';
}

export interface DiCurvePoint {
  maturity: string;
  rate: number;
  diffDay: number;
}


