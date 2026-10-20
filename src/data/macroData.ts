import { 
  PibAnnualRecord, 
  InflationMandateRecord,
  DebtMandateRecord,
  UnemploymentMandateRecord,
  InflationGroup, 
  InflationMonthlyPoint, 
  FocusProjection, 
  DiCurvePoint 
} from '../types';

export const MACRO_TICKER_DATA = [
  { 
    id: 'pib',
    label: 'PIB 2024 (OFICIAL)', 
    value: '+3,4%', 
    delta: '+0.3pp', 
    isUp: true, 
    good: true, 
    agency: 'Fábio Ryan Meneses Costa', 
    note: 'PIB 2025 (PROJ.): +2,3%' 
  },
  { 
    id: 'ipca',
    label: 'IPCA 3º Ano (Lula)', 
    value: '4,25%', 
    delta: 'Na Meta', 
    isUp: false, 
    good: true, 
    agency: 'Fábio Ryan Meneses Costa', 
    note: 'Projeção 4º Ano: 3,11% ▼ Centro da Meta' 
  },
  { id: 'selic', label: 'Selic Meta', value: '13,25%', delta: '+0,50pp', isUp: true, good: false, agency: 'Fábio Ryan Meneses Costa' },
  { id: 'cambio', label: 'USD/BRL', value: 'R$ 5,74', delta: '+0,42%', isUp: true, good: false, agency: 'Fábio Ryan Meneses Costa' },
  { id: 'ibov', label: 'IBOVESPA', value: '128.450 pts', delta: '-0,18%', isUp: false, good: false, agency: 'Fábio Ryan Meneses Costa' },
  { id: 'desemprego', label: 'Desocupação FUV', value: '5,6%', delta: '5,3% Proj.', isUp: false, good: true, agency: 'Fábio Ryan Meneses Costa' },
  { id: 'divida', label: 'Dívida/PIB FUV', value: '78,64%', delta: '+2,37pp', isUp: true, good: false, agency: 'Fábio Ryan Meneses Costa' },
];

export const PIB_ANNUAL_DATA: PibAnnualRecord[] = [
  {
    year: '2019',
    variationReal: 1.2,
    pibCorrenteTri: 7.39,
    pibPerCapita: 35161,
    driverDemanda: '1º Ano Bolsonaro: Consumo das Famílias e Reformas Iniciais',
    status: 'Consolidado Oficial',
    agency: 'Fábio Ryan Meneses Costa'
  },
  {
    year: '2020',
    variationReal: -3.3,
    pibCorrenteTri: 7.61,
    pibPerCapita: 35936,
    driverDemanda: '2º Ano Bolsonaro: Choque Covid-19 / Auxílio Emergencial',
    status: 'Consolidado Oficial (Choque)',
    agency: 'Fábio Ryan Meneses Costa'
  },
  {
    year: '2021',
    variationReal: 4.8,
    pibCorrenteTri: 8.90,
    pibPerCapita: 41745,
    driverDemanda: '3º Ano Bolsonaro: Reabertura Econômica & Commodities',
    status: 'Consolidado Oficial',
    agency: 'Fábio Ryan Meneses Costa'
  },
  {
    year: '2022',
    variationReal: 3.0,
    pibCorrenteTri: 10.08,
    pibPerCapita: 49330,
    driverDemanda: '4º Ano Bolsonaro: Retomada de Serviços & Estímulo Fiscal',
    status: 'Consolidado Oficial',
    agency: 'Fábio Ryan Meneses Costa'
  },
  {
    year: '2023',
    variationReal: 3.2,
    pibCorrenteTri: 10.86,
    pibPerCapita: 52340,
    driverDemanda: '1º Ano Lula: Super Safra do Agronegócio',
    status: 'Consolidado Oficial',
    agency: 'Fábio Ryan Meneses Costa'
  },
  {
    year: '2024',
    variationReal: 3.4,
    pibCorrenteTri: 11.35,
    pibPerCapita: 54120,
    driverDemanda: '2º Ano Lula: Serviços e Consumo das Famílias',
    status: 'Consolidado 2024 (FUV)',
    agency: 'Fábio Ryan Meneses Costa'
  },
  {
    year: '2025 (P)',
    variationReal: 2.3,
    pibCorrenteTri: 12.02,
    pibPerCapita: 56800,
    driverDemanda: '3º Ano Lula: Investimento FBCF e Manufatura',
    status: 'Projeção 2025',
    agency: 'Fábio Ryan Meneses Costa',
    isProjected: true
  },
  {
    year: '4º Ano Lula (*)',
    variationReal: 1.9,
    pibCorrenteTri: 12.65,
    pibPerCapita: 59100,
    driverDemanda: '4º Ano Lula: Projeção de Médio Prazo (*Até 2º tri vs mesmo período anterior)',
    status: 'Projeção 4º Ano*',
    agency: 'Fábio Ryan Meneses Costa',
    isProjected: true,
    footnote: '*Até 2º tri vs mesmo período anterior'
  }
];

export const FUV_INFLATION_MANDATE_DATA: {
  rows: InflationMandateRecord[];
  averageCycle: {
    bolsonaro: number;
    lula: number;
    diffPp: number;
  };
} = {
  rows: [
    {
      period: '1º Ano',
      yearBolsonaro: '2019',
      valBolsonaro: 4.31,
      yearLula: '2023',
      valLula: 4.62,
      diffPp: 0.31,
      notes: '1º ano: Bol 4,31% vs Lula 4,62% (+0,31 pp)',
    },
    {
      period: '2º Ano',
      yearBolsonaro: '2020',
      valBolsonaro: 4.52,
      yearLula: '2024',
      valLula: 4.83,
      diffPp: 0.31,
      notes: '2º ano: Bol 4,52% vs Lula 4,83% (+0,31 pp)',
    },
    {
      period: '3º Ano',
      yearBolsonaro: '2021',
      valBolsonaro: 10.06,
      yearLula: '2025',
      valLula: 4.25,
      diffPp: -5.81,
      isProjectedLula: false,
      notes: 'Destaque: Bol 10,06% (Pico/Estouro) vs Lula 4,25% (Na Meta) [-5,81 pp]',
    },
    {
      period: '4º Ano',
      yearBolsonaro: '2022',
      valBolsonaro: 4.39,
      yearLula: '2026 (Proj.)',
      valLula: 3.11,
      diffPp: -1.28,
      isProjectedLula: true,
      notes: 'Convergência: Bol 4,39% vs Lula 3,11% (Centro da Meta CMN) [-1,28 pp]',
    },
  ],
  averageCycle: {
    bolsonaro: 5.82,
    lula: 4.20,
    diffPp: -1.62,
  },
};

export const FUV_DEBT_MANDATE_DATA: {
  rows: DebtMandateRecord[];
  netVariation: {
    bolsonaro: number;
    lula: number;
  };
} = {
  rows: [
    { period: '1º Ano', yearBolsonaro: '2019', valBolsonaro: 74.44, yearLula: '2023', valLula: 73.83, diffPp: -0.61 },
    { period: '2º Ano', yearBolsonaro: '2020', valBolsonaro: 86.94, yearLula: '2024', valLula: 76.27, diffPp: -10.67 },
    { period: '3º Ano', yearBolsonaro: '2021', valBolsonaro: 77.31, yearLula: '2025', valLula: 78.64, diffPp: 1.33 },
    { period: '4º Ano', yearBolsonaro: '2022', valBolsonaro: 71.68, yearLula: '2026 (Proj.)', valLula: 82.87, diffPp: 11.19, isProjectedLula: true },
  ],
  netVariation: {
    bolsonaro: -2.76, // 71.68% - 74.44%
    lula: 9.04,       // 82.87% - 73.83%
  },
};

export const FUV_UNEMPLOYMENT_MANDATE_DATA: {
  rows: UnemploymentMandateRecord[];
  netVariation: {
    bolsonaro: number;
    lula: number;
  };
} = {
  rows: [
    { period: '1º Ano', yearBolsonaro: '2019', valBolsonaro: 11.9, yearLula: '2023', valLula: 7.8, diffPp: -4.1 },
    { period: '2º Ano', yearBolsonaro: '2020', valBolsonaro: 13.5, yearLula: '2024', valLula: 6.6, diffPp: -6.9 },
    { period: '3º Ano', yearBolsonaro: '2021', valBolsonaro: 13.2, yearLula: '2025', valLula: 5.6, diffPp: -7.6 },
    { period: '4º Ano', yearBolsonaro: '2022', valBolsonaro: 9.3, yearLula: '2026 (Proj.)', valLula: 5.3, diffPp: -4.0, isProjectedLula: true },
  ],
  netVariation: {
    bolsonaro: -2.6, // 9.3% - 11.9%
    lula: -2.5,       // 5.3% - 7.8%
  },
};


export const PIB_SECTOR_BREAKDOWN = [
  { name: 'Serviços', percentage: 69.8, value: 'R$ 6,84 Tri', growth: '+3,4%', color: '#0f2a4a', note: 'Intermediação financeira, comércio varejista e transportes' },
  { name: 'Indústria', percentage: 23.1, value: 'R$ 2,26 Tri', growth: '+2,8%', color: '#246a53', note: 'Extrativa mineral (óleo/gás) e construção civil' },
  { name: 'Agropecuária', percentage: 7.1, value: 'R$ 0,70 Tri', growth: '-1,9%', color: '#ba880e', note: 'Base de comparação histórica recorde de 2023' }
];

export const PIB_DEMAND_DRIVERS = [
  { component: 'Consumo das Famílias', share: '64,2% do PIB', growth: '+3,8%', note: 'Aporte de transferências sociais, reajuste do salário mínimo e queda do desemprego' },
  { component: 'Formação Bruta de Capital Fixo (FBCF)', share: '16,8% do PIB', growth: '+5,2%', note: 'Importação de bens de capital e projetos em infraestrutura e energia' },
  { component: 'Consumo da Administração Pública', share: '18,4% do PIB', growth: '+1,9%', note: 'Execução orçamentária primária e despesas de custeio' },
  { component: 'Exportações Líquidas', share: '+0,6% contribuição', growth: '+1,8%', note: 'Manutenção de superávit comercial elevado com petróleo e soja' }
];

export const INFLATION_GROUPS_IPCA: InflationGroup[] = [
  { id: 1, name: 'Alimentação e Bebidas', weight: 21.5, variation12M: 7.25, impactPp: 1.56, category: 'livre', note: 'Pressão climática (seca/chuvas) sobre hortaliças, carnes e leite' },
  { id: 2, name: 'Transportes', weight: 20.8, variation12M: 4.95, impactPp: 1.03, category: 'misto', note: 'Combustíveis automotivos (gasolina e etanol) e passagens aéreas' },
  { id: 3, name: 'Habitação', weight: 15.1, variation12M: 3.85, impactPp: 0.58, category: 'administrado', note: 'Acionamento de bandeiras tarifárias de energia elétrica e aluguéis' },
  { id: 4, name: 'Saúde e Cuidados Pessoais', weight: 13.3, variation12M: 5.60, impactPp: 0.74, category: 'administrado', note: 'Reajustes autorizados de planos de saúde e produtos farmacêuticos' },
  { id: 5, name: 'Despesas Pessoais', weight: 10.1, variation12M: 4.15, impactPp: 0.42, category: 'livre', note: 'Serviços de recreação, cinema e serviços pessoais' },
  { id: 6, name: 'Educação', weight: 6.0, variation12M: 5.80, impactPp: 0.35, category: 'livre', note: 'Reajustes concentrados de mensalidades escolares de início de ano' },
  { id: 7, name: 'Comunicação', weight: 4.8, variation12M: 1.20, impactPp: 0.06, category: 'livre', note: 'Concorrência intensa em planos de internet banda larga e móvel' },
  { id: 8, name: 'Vestuário', weight: 4.6, variation12M: 2.40, impactPp: 0.11, category: 'livre', note: 'Arrefecimento de custos na cadeia têxtil' },
  { id: 9, name: 'Artigos de Residência', weight: 3.8, variation12M: 1.10, impactPp: 0.04, category: 'livre', note: 'Eletroeletrônicos e móveis com estabilidade de preços' },
];

export const INFLATION_COMPARATIVE_SERIES: InflationMonthlyPoint[] = [
  { date: 'Jan/20', ipca12M: 4.19, igpm12M: 7.81, metaCMN: 4.00, tetoMeta: 5.50, pisoMeta: 2.50, nucleoBacen: 3.20 },
  { date: 'Jun/20', ipca12M: 2.13, igpm12M: 7.31, metaCMN: 4.00, tetoMeta: 5.50, pisoMeta: 2.50, nucleoBacen: 2.10 },
  { date: 'Dez/20', ipca12M: 4.52, igpm12M: 23.14, metaCMN: 4.00, tetoMeta: 5.50, pisoMeta: 2.50, nucleoBacen: 3.50 },
  { date: 'Mai/21', ipca12M: 8.06, igpm12M: 37.04, metaCMN: 3.75, tetoMeta: 5.25, pisoMeta: 2.25, nucleoBacen: 5.20 },
  { date: 'Dez/21', ipca12M: 10.06, igpm12M: 17.78, metaCMN: 3.75, tetoMeta: 5.25, pisoMeta: 2.25, nucleoBacen: 8.45 },
  { date: 'Jun/22', ipca12M: 11.89, igpm12M: 10.70, metaCMN: 3.50, tetoMeta: 5.00, pisoMeta: 2.00, nucleoBacen: 9.80 },
  { date: 'Dez/22', ipca12M: 5.79, igpm12M: 5.45, metaCMN: 3.50, tetoMeta: 5.00, pisoMeta: 2.00, nucleoBacen: 5.60 },
  { date: 'Jun/23', ipca12M: 3.16, igpm12M: -6.86, metaCMN: 3.25, tetoMeta: 4.75, pisoMeta: 1.75, nucleoBacen: 4.40 },
  { date: 'Dez/23', ipca12M: 4.62, igpm12M: -3.18, metaCMN: 3.25, tetoMeta: 4.75, pisoMeta: 1.75, nucleoBacen: 4.00 },
  { date: 'Jun/24', ipca12M: 4.23, igpm12M: 2.45, metaCMN: 3.00, tetoMeta: 4.50, pisoMeta: 1.50, nucleoBacen: 3.85 },
  { date: 'Nov/24', ipca12M: 4.87, igpm12M: 6.54, metaCMN: 3.00, tetoMeta: 4.50, pisoMeta: 1.50, nucleoBacen: 4.15 },
  { date: 'Dez/24', ipca12M: 4.83, igpm12M: 6.10, metaCMN: 3.00, tetoMeta: 4.50, pisoMeta: 1.50, nucleoBacen: 4.10 },
  { date: 'Jan/25', ipca12M: 4.56, igpm12M: 5.65, metaCMN: 3.00, tetoMeta: 4.50, pisoMeta: 1.50, nucleoBacen: 4.02 },
  { date: 'Fev/25', ipca12M: 4.42, igpm12M: 5.12, metaCMN: 3.00, tetoMeta: 4.50, pisoMeta: 1.50, nucleoBacen: 3.95 },
];

export const FOCUS_PROJECTIONS: FocusProjection[] = [
  { indicator: 'IPCA (% a.a.)', actual: '4,25%', targetOrRef: '3,00% (Meta)', exp2025: '4,25%', exp2026: '3,11%', exp2027: '3,50%', trend: 'down' },
  { indicator: 'PIB Total (% a.a.)', actual: '+3,40%', targetOrRef: '+2,00% (Potencial)', exp2025: '2,30%', exp2026: '1,90%', exp2027: '2,00%', trend: 'stable' },
  { indicator: 'Taxa Selic (% fim período)', actual: '13,25%', targetOrRef: '9,50% (Neutra)', exp2025: '14,00%', exp2026: '12,50%', exp2027: '11,00%', trend: 'up' },
  { indicator: 'Câmbio USD/BRL (fim período)', actual: 'R$ 5,74', targetOrRef: 'R$ 5,50', exp2025: 'R$ 5,80', exp2026: 'R$ 5,85', exp2027: 'R$ 5,90%', trend: 'up' },
  { indicator: 'IGP-M (% a.a.)', actual: '5,12%', targetOrRef: '4,50%', exp2025: '5,25%', exp2026: '4,20%', exp2027: '4,00%', trend: 'down' },
  { indicator: 'Resultado Primário (% PIB)', actual: '-0,60%', targetOrRef: '0,00% (Meta)', exp2025: '-0,70%', exp2026: '-0,50%', exp2027: '-0,20%', trend: 'down' },
];

export const DI_FUTURES_CURVE: DiCurvePoint[] = [
  { maturity: 'Jan/26 (1A)', rate: 14.15, diffDay: +0.08 },
  { maturity: 'Jan/27 (2A)', rate: 13.98, diffDay: +0.05 },
  { maturity: 'Jan/28 (3A)', rate: 13.65, diffDay: -0.02 },
  { maturity: 'Jan/29 (4A)', rate: 13.40, diffDay: -0.04 },
  { maturity: 'Jan/31 (6A)', rate: 13.15, diffDay: -0.03 },
  { maturity: 'Jan/35 (10A)', rate: 13.00, diffDay: +0.01 },
];

export const SEARCH_INDEX = [
  { title: 'PIB Anual e Contas Nacionais', section: 'pib', code: 'PIB-BR', category: 'Atividade Econômica', keywords: 'pib produto interno bruto fbcf consumo investimento fabio ryan meneses costa' },
  { title: 'IPCA - Comparativo Consolidado de Mandatos Presidenciais', section: 'inflacao', code: 'IPCA-MANDATOS', category: 'Inflação & Preços', keywords: 'ipca mandatos lula bolsonaro comparativo inflacao precos cmn meta fabio ryan meneses costa' },
  { title: 'IGP-M - Índice Geral de Preços do Mercado', section: 'inflacao', code: 'IGPM-BR', category: 'Inflação & Preços', keywords: 'igpm atacado aluguel ipa precos' },
  { title: 'Taxa Selic Over / Meta Copom', section: 'selic', code: 'SELIC-BR', category: 'Política Monetária', keywords: 'selic juros copom taxa basica di futuro' },
  { title: 'Mercado de Trabalho - Taxa de Desocupação', section: 'trabalho', code: 'TRAB-BR', category: 'Emprego & Renda', keywords: 'desemprego desocupacao salario renda mandatos' },
  { title: 'Dívida Bruta do Governo Geral (DBGG)', section: 'fiscal', code: 'DBGG-BR', category: 'Fiscal', keywords: 'divida bruta dbgg pib fiscal primario tesouro mandatos' },
  { title: 'Balança Comercial & Reservas Internacionais', section: 'externo', code: 'EXT-BR', category: 'Setor Externo', keywords: 'exportacao importacao cambio dolar reservas' },
  { title: 'Expectativas Boletim de Mercado', section: 'inflacao', code: 'EXP-BR', category: 'Projeções de Mercado', keywords: 'projecoes consenso 2025 2026' },
  { title: 'Preços Livres vs Preços Administrados', section: 'inflacao', code: 'PRECOS-BR', category: 'Inflação & Preços', keywords: 'administrados tarifas energia combustiveis livres servicos' },
];

export const SYSTEM_NOTIFICATIONS = [
  { id: '1', title: 'Base Oficial Consolidada', time: 'Hoje, 09:00', body: 'Painéis macroeconômicos parametrizados e sincronizados com a matriz comparativa de mandatos presidenciais (Bolsonaro vs. Lula). Base Oficial Consolidada.', category: 'Governança', unread: true },
  { id: '2', title: 'PIB 2024 Consolidado a +3,4%', time: 'Ontem, 10:15', body: 'Contas agregadas fecham expansão de +3,4% no ano civil de 2024 com projeção 2025 a +2,3% e 4º ano a +1,9%*.', category: 'PIB', unread: true },
  { id: '3', title: 'IPCA 3º Ano Convergindo à Meta (4,25%)', time: '18/03, 08:30', body: 'Contraste favorável de -5,81 pp contra o 3º ano anterior (10,06%), apontando para 3,11% no 4º ano.', category: 'Inflação', unread: false },
  { id: '4', title: 'Ata de Política Monetária nº 267', time: '17/03, 08:25', body: 'Comitê reforça compromisso com convergência da inflação à meta em ambiente de atividade resiliente.', category: 'Monetária', unread: false }
];
