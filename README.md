# BrState — Terminal de Inteligência Macroeconômica do Brasil

Plataforma analítica institucional e soberana para monitoramento estrutural de atividade econômica (**Contas Nacionais / PIB**), preços e inflação (**IPCA / IGP-M**), política monetária (**Taxa Selic / Curva DI**), **Mercado de Trabalho** e **Cenário Fiscal** do Brasil.

Construído com base no **Documento de Requisitos de Produto (PRD)** e nas diretrizes de design institucional (`DESIGN.md`).

---

## 🚀 Tecnologias

- **Framework:** React 18 + TypeScript + Vite
- **Estilização & Design Tokens:** Tailwind CSS (Paleta soberana: Deep Sovereign Navy `#0f2a4a`, Muted Viridian `#246a53`, Bullion Amber `#ba880e`)
- **Visualização de Dados:** Gráficos vetoriais SVG interativos com crosshair, tooltips de coordenadas e anotações conjunturais
- **Tipografia:** Família *Inter* com precisão numérica tabular (`tnum`, `cv05`, `cv10`)
- **Iconografia:** Google Material Symbols Outlined
- **Deploy:** Pronto para publicação contínua na **Vercel**

---

## 📊 Estrutura e Módulos Implementados

1. **Top Macro Ticker:** Faixa superior de cotações e taxas em tempo real (PIB +3,1%, IPCA 4,42%, IGP-M 5,12%, Selic 13,25%, USD/BRL R$ 5,74, IBOVESPA 128k pts).
2. **Visão Geral (Overview):** Dashboard executivo consolidado com matriz dos 6 pilares soberanos e releases oficiais.
3. **Atividade Econômica / PIB:**
   - 4 KPI Cards (Volume Total R$ 11,3 Tri, Per Capita R$ 54.120, Taxa de Investimento FBCF 16,8%, VAB Setorial).
   - Gráfico anual histórico interativo (2019 – 2025) com marcações de choques (Covid-19, safra recorde, reabertura) e projeção tracejada Focus.
   - Decomposição estrutural da demanda (Consumo das famílias, governo, investimento).
   - Tabela analítica completa com busca dinâmica e ordenação.
4. **Inflação & Preços:**
   - IPCA 12M (4,42%), IGP-M (5,12%), Meta CMN Contínua (3,00% ± 1,50pp), Média dos Núcleos (3,95%).
   - Gráfico comparativo IPCA vs IGP-M (2020 – 2025) com faixa contínua da banda CMN.
   - Decomposição detalhada dos 9 grupos de consumo da POF/IBGE.
   - Comparativo de Preços Livres vs Preços Administrados.
   - Projeções de Consenso do Boletim Focus (BACEN).
5. **Política Monetária & Juros:** Taxa Selic Meta, juro real ex-ante, decisões do COPOM e curva a termo dos DIs Futuros (B3) de 1A a 10A.
6. **Mercado de Trabalho:** Taxa de desocupação (PNAD Contínua 6,4%), saldo de empregos Novo CAGED (+1,48M) e massa salarial real.
7. **Setor Externo & Câmbio:** Superávit comercial recorde (US$ 74 Bi), paridade cambial PTAX e reservas soberanas (US$ 355 Bi).
8. **Fiscal & Dívida Pública:** Dívida Bruta DBGG (% do PIB), Resultado Primário e monitoramento do Novo Arcabouço Fiscal (LC 200/2023).
9. **Metodologia & APIs:** Dicionário completo de séries BACEN SGS, tabelas IBGE SIDRA e fórmulas estatísticas.
10. **Ferramentas Operacionais:**
    - **Busca Rápida Global (`Ctrl+K`):** Localização instantânea de indicadores, tabelas e módulos.
    - **Exportação Multiformato:** Download de bases de dados em `.CSV` e emissão de Dossiê Executivo em formato `.PDF`/Impressão.
    - **Configurações:** Frequência de atualização (D-0 vs EOD), convenção numérica e densidade de tela.

---

## 🛠️ Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build

# 4. Pré-visualizar o build de produção
npm run preview
```

---

## 🌐 Publicação na Vercel

O projeto já está configurado com `vercel.json` e otimizado para build estático instantâneo.

### Opção 1: Via GitHub (Recomendado)
1. Crie um repositório no GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: recriar BrState para publicacao na Vercel"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/brstate.git
   git push -u origin main
   ```
2. Acesse o painel da [Vercel](https://vercel.com).
3. Clique em **Add New Project** e selecione o repositório `brstate`.
4. A Vercel detectará automaticamente o framework como **Vite** e configurará:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**.

### Opção 2: Via Vercel CLI
```bash
# Faça login na Vercel (caso ainda não esteja logado)
npx vercel login

# Publique o projeto
npx vercel

# Para publicar direto em produção:
npx vercel --prod
```

