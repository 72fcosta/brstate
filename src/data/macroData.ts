import { 
  PibAnnualRecord, 
  InflationGroup, 
  InflationMonthlyPoint, 
  FocusProjection, 
  DiCurvePoint 
} from '../types';

export const MACRO_TICKER_DATA = [
  { label: 'PIB Anual', value: '+3,1%', delta: '+0,1pp', isUp: true, good: true, agency: 'IBGE' },
  { label: 'IPCA 12M', value: '4,42%', delta: '+0,08pp', isUp: true, good: false, agency: 'IBGE', note: 'Teto 4,50%' },
  { label: 'IGP-M 12M', value: '5,12%', delta: '+0,34pp', isUp: true, good: false, agency: 'FGV' },
  { label: 'Selic Meta', value: '13,25%', delta: '+0,50pp', isUp: true, good: false, agency: 'BACEN' },
  { label: 'USD/BRL', value: 'R$ 5,74', delta: '+0,42%', isUp: true, good: false, agency: 'PTAX' },
  { label: 'IBOVESPA', value: '128.450 pts', delta: '-0,18%', isUp: false, good: false, agency: 'B3' },
  { label: 'Desocupação', value: '6,4%', delta: '-0,4pp', isUp: false, good: true, agency: 'PNAD' },
  { label: 'Dívida/PIB', value: '78,5%', delta: '+0,2pp', isUp: true, good: false, agency: 'STN' },
];

export const PIB_ANNUAL_DATA: PibAnnualRecord[] = [
  {
    year: '2019',
    variationReal: 1.4,
    pibCorrenteTri: 7.39,
    pibPerCapita: 35161,
    driverDemanda: 'Consumo das Famílias e Reformas Iniciais',
    status: 'Consolidado',
    agency: 'SCN-IBGE'
  },
  {
    year: '2020',
    variationReal: -3.3,
    pibCorrenteTri: 7.61,
    pibPerCapita: 35936,
    driverDemanda: 'Choque Covid-19 / Auxílio Emergencial',
    status: 'Consolidado',
    agency: 'SCN-IBGE'
  },
  {
    year: '2021',
    variationReal: 4.8,
    pibCorrenteTri: 8.90,
    pibPerCapita: 41745,
    driverDemanda: 'Reabertura Econômica & Commodities',
    status: 'Consolidado',
    agency: 'SCN-IBGE'
  },
  {
    year: '2022',
    variationReal: 3.0,
    pibCorrenteTri: 10.08,
    pibPerCapita: 49330,
    driverDemanda: 'Retomada de Serviços & Estímulo Fiscal',
    status: 'Consolidado',
    agency: 'SCN-IBGE'
  },
  {
    year: '2023',
    variationReal: 3.2,
    pibCorrenteTri: 10.86,
    pibPerCapita: 52340,
    driverDemanda: 'Safra Recorde do Agronegócio',
    status: 'Consolidado',
    agency: 'SCN-IBGE'
  },
  {
    year: '2024',
    variationReal: 3.1,
    pibCorrenteTri: 11.30,
    pibPerCapita: 54120,
    driverDemanda: 'Serviços e Consumo das Famílias',
    status: 'Preliminar Fechado',
    agency: 'SCN-IBGE'
  },
  {
    year: '2025 (P)',
    variationReal: 2.2,
    pibCorrenteTri: 11.94,
    pibPerCapita: 56800,
    driverDemanda: 'Investimento FBCF e Manufatura',
    status: 'Projeção Bacen Focus',
    agency: 'BACEN',
    isProjected: true
  }
];

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
  { indicator: 'IPCA (% a.a.)', actual: '4,42%', targetOrRef: '3,00% (Meta)', exp2025: '4,95%', exp2026: '4,00%', exp2027: '3,60%', trend: 'up' },
  { indicator: 'PIB Total (% a.a.)', actual: '+3,10%', targetOrRef: '+2,00% (Potencial)', exp2025: '2,20%', exp2026: '1,95%', exp2027: '2,00%', trend: 'stable' },
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
  { title: 'PIB Anual e Contas Nacionais', section: 'pib', code: 'SIDRA-1620', category: 'Atividade Econômica', keywords: 'pib produto interno bruto fbcf consumo investimento ibge' },
  { title: 'IPCA - Índice Nacional de Preços ao Consumidor Amplo', section: 'inflacao', code: 'BACEN-433', category: 'Inflação & Preços', keywords: 'ipca inflacao precos cmn meta ibge cesta' },
  { title: 'IGP-M - Índice Geral de Preços do Mercado', section: 'inflacao', code: 'BACEN-189', category: 'Inflação & Preços', keywords: 'igpm fgv ibre atacado aluguel ipa' },
  { title: 'Taxa Selic Over / Meta Copom', section: 'selic', code: 'BACEN-432', category: 'Política Monetária', keywords: 'selic juros copom taxa basica di futuro' },
  { title: 'Mercado de Trabalho (PNAD Contínua)', section: 'trabalho', code: 'SIDRA-6318', category: 'Emprego & Renda', keywords: 'desemprego desocupacao salario renda pnad caged' },
  { title: 'Dívida Bruta do Governo Geral (DBGG)', section: 'fiscal', code: 'BACEN-13762', category: 'Fiscal', keywords: 'divida bruta dbgg pib fiscal primario tesouro stn' },
  { title: 'Balança Comercial & Reservas Internacionais', section: 'externo', code: 'MDIC-BC', category: 'Setor Externo', keywords: 'exportacao importacao cambio dolar reservas ptax' },
  { title: 'Expectativas Boletim Focus', section: 'inflacao', code: 'BACEN-FOCUS', category: 'Projeções de Mercado', keywords: 'focus projecoes consenso analistas 2025 2026' },
  { title: 'Preços Livres vs Preços Administrados', section: 'inflacao', code: 'BACEN-4449', category: 'Inflação & Preços', keywords: 'administrados tarifas energia combustiveis livres servicos' },
];

export const SYSTEM_NOTIFICATIONS = [
  { id: '1', title: 'Ata do Copom nº 267', time: 'Hoje, 08:30', body: 'Comitê reforça compromisso com convergência da inflação à meta em ambiente de atividade resiliente.', category: 'Monetária', unread: true },
  { id: '2', title: 'Divulgação IPCA-15 Março', time: 'Ontem, 09:00', body: 'IPCA-15 registrou variação de +0,36%, influenciado por itens de alimentação e mensalidades escolares.', category: 'Inflação', unread: true },
  { id: '3', title: 'Revisão Contas Trimestrais IBGE', time: '18/03, 10:15', body: 'PIB do 4º trimestre consolida expansão de +3,1% no fechamento do ano civil de 2024.', category: 'PIB', unread: false },
  { id: '4', title: 'Boletim Focus Atualizado', time: '17/03, 08:25', body: 'Mediana para Selic 2025 mantida em 14,00% e IPCA 2025 estimado em 4,95%.', category: 'Focus', unread: false }
];
