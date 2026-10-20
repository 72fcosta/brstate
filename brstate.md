# Documento de Requisitos de Produto (PRD) — BrState

---

## 1. Visão Geral do Produto

### 1.1 Resumo Executivo
O **BrState** é uma plataforma analítica para desktop voltada à inteligência macroeconômica brasileira. O terminal consolida, visualiza e contextualiza indicadores estruturais de atividade econômica (PIB), preços e inflação (IPCA, IGP-M), mercado financeiro, política monetária, câmbio e finanças públicas. A plataforma opera inicialmente em modo de alta fidelidade com dados históricos e projeções de consenso hardcoded (estruturados para fácil consumo e posterior acoplamento via APIs do BACEN, IBGE e FGV).

### 1.2 Proposta de Valor
- **Centralização:** Elimina a dispersão entre bases analíticas públicas (SIDRA/IBGE, SGS/BACEN, FGV IBRE).
- **Leitura Executiva Rápida:** Gráficos intuitivos com contexto histórico (choques, desinflação, safras, metas contínuas) sem necessidade de planilhas complexas.
- **Experiência Desktop de Alta Densidade:** Layout institucional e clean, padrão Bloomberg/TradingView corporativo com paleta sóbria e navegação lateral instantânea.

### 1.3 Público-Alvo
- Gestores de fundos e analistas de Research / Equity / Macro.
- CFOs, tesoureiros e analistas de planejamento financeiro corporativo (FP&A).
- Jornalistas econômicos, economistas independentes e consultores de negócios.
- Formuladores de políticas públicas e acadêmicos.

---

## 2. Identidade Visual & Design System

- **Nome da Marca:** BrState (Inteligência Macroeconômica)
- **Paleta de Cores Institucional:**
  - **Primária:** Azul Marinho Profundo (`#0f2a4a` / `#1e3a5f`) — solidez, autoridade institucional e precisão estatística.
  - **Secundária / Positivo:** Verde Esmeralda (`#059669` / `#10b981`) — crescimento, cumprimento de metas e indicadores em expansão.
  - **Destaque / Alerta:** Âmbar / Ouro (`#d97706` / `#f59e0b`) — pressões inflacionárias, volatilidade cambial e IGP-M.
  - **Negativo / Risco:** Vermelho Carmim (`#dc2626`) — retração econômica e deflação acentuada.
  - **Fundo / Superfícies:** Superfície clara e neutra (`#f8f9ff` a `#ffffff`) com bordas sutis (`#e2e8f0`).
- **Tipografia:** Família *Inter* com pesos estruturados (Regular, Medium, Semibold, Bold) e tipografia numérica tabular monospaçada para métricas e cotações.
- **Iconografia:** Material Symbols (minimalistas, lineares, corporativos).
- **Form Factor:** Exclusivamente **Desktop** (resoluções mínimas recomendadas: 1366x768 até 1920x1080 e monitores ultrawide).

---

## 3. Arquitetura de Informação & Estrutura de Navegação

### 3.1 Componentes de Shell Persistentes
1. **TopNavBar (Macro Ticker):**
   - Faixa superior persistente com cotações e índices de referência em tempo real:
     - `PIB Anual: +3,1% ▲`
     - `IPCA 12M: 4,42% ▲`
     - `IGP-M 12M: 5,12% ▲`
     - `Selic Meta: 13,25% ▲`
     - `USD/BRL: R$ 5,74 ▲`
     - `IBOVESPA: 128.450 pts`
   - Campo de busca global de séries temporais (códigos BACEN, tabelas SIDRA).
   - Ações rápidas: Notificações de releases, preferências de exibição e botão de exportação executiva (`Exportar Relatório`).

2. **SideNavBar (Navegação Temática):**
   - Brasão e logotipo vetorial institucional **BrState**.
   - Seções principais:
     1. `Visão Geral` (Dashboard consolidado macro)
     2. `Atividade Econômica / PIB` (Contas Nacionais, FBCF, consumo, setores)
     3. `Inflação & Preços` (IPCA, IGP-M, núcleos, grupos de consumo, meta CMN)
     4. `Política Monetária & Juros` (Selic, curva de juros DI, balanço do BACEN)
     5. `Mercado de Trabalho` (PNAD Contínua, CAGED, taxa de desocupação, renda real)
     6. `Setor Externo` (Balança Comercial, transações correntes, reservas internacionais)
     7. `Fiscal` (Resultado Primário, Dívida Bruta/PIB, teto/arcabouço fiscal)
   - Rodapé da navegação: Status da base oficial (`SIDRA / BACEN v2.4 Live`), `Configurações` e `Ajuda & Documentação`.

---

## 4. Telas Mapeadas & Requisitos Funcionais

### 4.1 Tela 1: Atividade Econômica & PIB do Brasil
- **Objetivo:** Monitorar o ritmo de crescimento da economia brasileira, a dinâmica de investimentos e a contribuição setorial.
- **Módulos & Elementos:**
  - **Filtros Temporais:** Seletores rápidos de período (`1A`, `3A`, `2019–2025`, `MAX`) e modo de visualização (`% Variação Real` vs `R$ Valor Corrente`).
  - **KPI Cards:**
    - Volume Total do PIB (R$ 11,3 Tri, consolidado 2024 e projeção Focus 2025).
    - PIB per capita (R$ 54.120 com ganho real anual de +1,8%).
    - Taxa de Investimento / FBCF (16,8% do PIB com comparativo histórico).
    - Composição Setorial de Valor Adicionado Bruto (Serviços 69,8%, Indústria 23,1%, Agropecuária 7,1%).
  - **Gráfico Principal:** Curva temporal anual com anotações de conjuntura (2019: `+1,4%`, 2020: `-3,3%` Choque Covid, 2021: `+4,8%`, 2022: `+3,0%`, 2023: `+3,2%`, 2024: `+3,1%`, 2025P: `+2,2%` projeção tracejada).
  - **Leitura Macroeconômica:** Caixa explicativa sintetizando os drivers de demanda (consumo das famílias, mercado de trabalho aquecido e exportações agrícolas).

### 4.2 Tela 2: Inflação & Preços (IPCA e IGP-M)
- **Objetivo:** Rastrear a dinâmica de preços ao consumidor e atacado, monitorar os núcleos de inflação e o cumprimento da meta contínua do Banco Central.
- **Módulos & Elementos:**
  - **KPI Cards de Preços:**
    - IPCA 12 Meses (`4,42%`, dentro do teto da meta contínua de 4,50%).
    - IGP-M 12 Meses (`5,12%`, com alerta de pressão de custos no atacado / IPA-M `+5,88%`).
    - Meta CMN 2024-2025 (`3,00% ± 1,50pp` com régua visual da banda contínua de 1,50% a 4,50%).
    - Média dos Núcleos do BACEN (`3,95%` com monitoramento de serviços subjacentes `4,60%`).
  - **Gráfico Comparativo IPCA vs IGP-M (2020–2025):**
    - Contraste visual entre a estabilidade relativa do IPCA e a volatilidade do IGP-M (pico histórico de 37,04% em 2021 e deflação de -4,5% em 2023).
    - Faixa contínua da banda do Conselho Monetário Nacional (CMN).
    - Tooltip fixo de referência mensal.
  - **Decomposição do IPCA por Grupos:** Tabela discriminando os 9 grupos do IBGE (Alimentação e Bebidas, Habitação, Transportes, Saúde, etc.) e comparativo de Preços Livres vs Administrados.

---

## 5. Próximas Telas & Roadmap de Evolução

| Fase | Módulo / Tela | Principais Métricas & Visualizações | Prioridade |
|---|---|---|---|
| **Fase 2** | `Política Monetária & Juros` | Histórico da taxa Selic, expectativas Focus (trajetória de cortes/altas), curva a termo dos DIs futuros (1A, 2A, 5A, 10A). | **Alta** |
| **Fase 2** | `Mercado de Trabalho` | Taxa de desocupação (PNAD Contínua), saldo líquido de empregos com carteira (Novo CAGED), massa salarial real e rendimento médio habitual. | **Alta** |
| **Fase 3** | `Setor Externo & Câmbio` | Balança Comercial (exportações por commodity vs importações), fluxo cambial líquido, reservas internacionais em USD e paridade USD/BRL e EUR/BRL. | **Média** |
| **Fase 3** | `Fiscal & Dívida Pública` | Dívida Bruta do Governo Geral (DBGG % PIB), Superávit/Déficit Primário, despesas obrigatórias vs discricionárias e regras do Arcabouço Fiscal. | **Média** |
| **Fase 4** | `Integração de APIs` | Conexão aos endpoints REST do BACEN (SGS API), IBGE (SIDRA API) e IpeaData para atualização dinâmica automática. | **Futuro** |

---

## 6. Requisitos Técnicos & Arquitetura Frontend

- **Arquitetura de Apresentação:** Single Page Application (SPA) desktop responsiva em largura (1280px a 2560px), estritamente adaptada para visualização em telas de trabalho.
- **Renderização Gráfica:** Gráficos vetoriais fluidos com suporte a tooltips, linhas de meta horizontais, faixas sombreadas de tolerância e linhas projetadas tracejadas.
- **Exportação:** Suporte a download de dados tabulares em formatos padrão de mercado (`.CSV`, `.XLSX`) e exportação de relatórios executivos em `.PDF`.
- **Desempenho:** Carregamento instantâneo de dados pré-compilados com suporte offline/cached.
