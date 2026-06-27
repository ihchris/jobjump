export const MODULES = [
  {
    id: 1,
    title: 'CV que Passa pelos Filtros ATS',
    desc: 'Aprende a criar um CV que supera os sistemas automáticos e chega às mãos dos recrutadores.',
    duration: '3h 30min',
    icon: '📄',
    isPro: false,
    color: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', icon: 'bg-blue-500' },
    lessons: [
      {
        id: '1-1',
        title: 'O que é ATS e como funciona',
        duration: '20 min',
        content: `# O que é ATS e como funciona

## O que é um ATS?

ATS significa **Applicant Tracking System** (Sistema de Rastreamento de Candidatos). É um software utilizado por empresas e recrutadores para gerir e filtrar automaticamente as candidaturas recebidas.

Hoje em dia, mais de **75% das grandes empresas** e **98% das Fortune 500** usam ATS para processar as candidaturas. Isso significa que seu CV pode ser rejeitado antes de um humano sequer o ver.

## Como funciona o processo?

1. **Submetes o CV** → O ATS faz a leitura e extração de dados
2. **Parsing** → O sistema identifica secções (experiência, educação, competências)
3. **Indexação** → O conteúdo é indexado e pesquisável
4. **Scoring** → Seu CV recebe uma pontuação com base nas palavras-chave
5. **Ranking** → Os CVs são ordenados por relevância
6. **Revisão humana** → Apenas os melhores chegam ao recrutador

## Porque é que seu CV falha no ATS?

- **Formatação complexa**: tabelas, gráficos e colunas confundem o parser
- **Falta de palavras-chave**: o sistema não encontra os termos certos
- **Ficheiros incompatíveis**: PDFs com imagens ou texto não selecionável
- **Cabeçalhos não reconhecidos**: se o ATS não reconhece "Experiência Profissional", falha a extração
- **Fontes decorativas**: caracteres especiais podem não ser lidos corretamente

## O impacto real

De cada 100 CVs submetidos online, em média:
- **75** são rejeitados pelo ATS automaticamente
- **20** chegam ao recrutador
- **5** são chamados para entrevista

> **A boa notícia**: otimizando seu CV para ATS, passas a estar no grupo dos 20-25 que chegam ao recrutador.`,
      },
      {
        id: '1-2',
        title: 'Palavras-chave: encontrar e usar corretamente',
        duration: '25 min',
        content: `# Palavras-chave: encontrar e usar corretamente

## Porque são críticas?

O ATS funciona como um motor de pesquisa. O recrutador define critérios (palavras-chave) e o sistema filtra os CVs que as contêm. Sem as palavras certas, és invisível.

## Como encontrar as palavras-chave certas

### Método 1: Analisa a descrição da vaga
Lê a oferta de emprego e identifica:
- **Competências técnicas**: "Excel avançado", "Python", "Gestão de projetos"
- **Soft skills**: "trabalho em equipa", "comunicação", "liderança"
- **Certificações**: "PMP", "ITIL", "Google Analytics"

### Método 2: Analisa múltiplas ofertas similares
Recolhe 5-10 ofertas para a mesma função. As palavras que aparecem repetidamente são as mais importantes.

### Método 3: Ferramentas online
- **JobScan.co**: compara seu CV com a oferta de emprego
- **LinkedIn Job Insights**: mostra competências mais pedidas

## Como incorporar as palavras-chave

**✅ Correto:**
> Implementei estratégias de *gestão de projetos* usando metodologia *Agile/Scrum*, desenvolvendo dashboards em *Power BI* para análise de dados de vendas

**❌ Errado (keyword stuffing):**
> Competências: gestão, projetos, agile, scrum, power bi, excel, liderança, equipa...

## Regras de ouro

1. Usa as **mesmas palavras da oferta** — se a empresa usa "vendas B2B" usa exatamente isso
2. **Contextualiza** — as palavras devem aparecer em frases com sentido
3. **Não exageres** — 3-5 instâncias da mesma palavra-chave é suficiente
4. **Inclui variações** — "gestão de projetos" E "project management" quando relevante
5. **Prioriza a experiência profissional** — essa secção tem mais peso no ATS`,
      },
      {
        id: '1-3',
        title: 'Formatação ATS-friendly: o guia definitivo',
        duration: '30 min',
        content: `# Formatação ATS-friendly: o guia definitivo

## O problema da formatação criativa

Um CV visualmente impressionante pode ser um desastre para o ATS. O sistema lê texto, não design.

## Estrutura recomendada

### Cabeçalho (sempre no topo)
\`\`\`
NOME COMPLETO
Email | Telefone | LinkedIn | Cidade, País
\`\`\`

### Secções standard que o ATS reconhece
- **Resumo Profissional**
- **Experiência Profissional**
- **Educação**
- **Competências**
- **Certificações** (se aplicável)

## Regras de formatação

**✅ O que FAZER:**
- Formato de ficheiro: .docx ou PDF gerado de texto (não escaneado)
- Fonte: Arial, Calibri, Garamond (tamanho 10-12pt)
- Bullet points simples: • ou —
- Datas consistentes: Jan 2020 – Dez 2022

**❌ O que EVITAR:**
- Tabelas e colunas múltiplas
- Imagens e logótipos
- Gráficos de competências (barras de progresso)
- Cabeçalhos e rodapés com texto importante
- Fontes decorativas

## Exemplo prático

**❌ Mau:**
> "Trabalhei muitos anos na área de vendas onde fiz várias coisas importantes."

**✅ Bom:**
> "Aumentei as vendas da carteira de clientes em **32%** no primeiro ano. Conquistei **15 novos clientes B2B**, gerando **€240.000** em receita adicional."`,
      },
      {
        id: '1-4',
        title: 'Verbos de ação e quantificação de resultados',
        duration: '25 min',
        content: `# Verbos de ação e quantificação de resultados

## O poder dos verbos de ação

Verbos de ação no início de cada bullet point transformam descrições passivas em conquistas ativas. Mostram iniciativa e impacto.

## Lista de verbos por categoria

### Liderança e Gestão
Implementei · Gerenciei · Coordenei · Supervisionei · Liderei · Desenvolvi · Estabeleci · Dirigi · Otimizei

### Resultados e Crescimento
Aumentei · Reduzi · Melhorei · Expandi · Maximizei · Acelerei · Conquiste · Gerei

### Análise e Resolução
Analisei · Identifiquei · Investiguei · Avaliei · Diagnostiquei · Resolvi · Estruturei

### Criação e Inovação
Criei · Desenvolvi · Projetei · Inovei · Lancei · Construí · Elaborei · Concebi

### Comunicação e Colaboração
Apresentei · Negociei · Treinei · Formei · Colaborei · Faciliei · Orientei

## Como quantificar resultados

A regra de ouro: **todo o resultado deve ter um número**.

**Perguntas para extrair métricas:**
- Quantas pessoas estavam na sua equipa?
- Qual era o orçamento que geres?
- Em quantos % aumentaste/reduzes algo?
- Qual era o tamanho do portfólio de clientes?
- Quanto tempo poupaste no processo?
- Qual foi a receita gerada?

## Exemplos transformados

| ❌ Fraco | ✅ Com impacto |
|---|---|
| Geri a equipa de vendas | Geri equipa de 8 vendedores, atingindo 118% da meta anual |
| Melhorei o processo de onboarding | Reduzi o tempo de onboarding de 6 para 2 semanas, poupando 200h/mês |
| Trabalhei com clientes grandes | Gerenciei carteira de 35 clientes enterprise com ticket médio de R$80k |
| Fiz campanhas de marketing | Lancei 12 campanhas digitais com ROI médio de 340% e 2M de impressões |

## Fórmula de ouro

> **[Verbo de ação] + [O que fizeste] + [Resultado com número]**

Exemplo: "**Implementei** sistema de CRM para equipa de 15 comerciais, **aumentando** a taxa de conversão em **27%** e **reduzindo** o tempo de reporting em **5h/semana**."`,
      },
      {
        id: '1-5',
        title: 'Como adaptar o CV para cada candidatura',
        duration: '20 min',
        content: `# Como adaptar o CV para cada candidatura

## Porquê adaptar o CV?

Enviar o mesmo CV para todas as vagas é um dos erros mais comuns. Cada empresa e cada cargo tem exigências específicas — seu CV deve refletir isso.

## Os 3 elementos a adaptar por candidatura

### 1. O resumo profissional (3-4 linhas no topo)
É o único elemento que deves reescrever completamente. Incorpora:
- O título exato do cargo
- As 2-3 competências mais pedidas na oferta
- Um resultado relevante para aquela empresa

### 2. As palavras-chave na experiência
Não alteres os factos — adapta a linguagem. Se a empresa usa "growth hacking" e seu CV diz "marketing digital", adiciona a expressão deles.

### 3. A ordem das competências
Coloca primeiro as competências mais pedidas na vaga específica.

## Sistema de adaptação em 15 minutos

**Passo 1 (5 min):** Lê a oferta e sublinha as 10 palavras/frases mais importantes.

**Passo 2 (5 min):** Verifica quantas dessas palavras estão no seu CV. Para as que faltam, encontra onde pode inseri-las naturalmente.

**Passo 3 (5 min):** Reescreve o resumo profissional com foco nesta vaga específica.

## Organização prática

Cria uma pasta por candidatura:
\`\`\`
📁 Candidaturas/
  📁 Empresa_Alpha_Marketing_Manager/
    📄 CV_NomeApelido_Alpha.pdf
    📄 Carta_Alpha.pdf
    📝 notas.txt (data envio, contato, estado)
\`\`\`

Rastrear as candidaturas ajuda no follow-up e evita duplicações.`,
      },
      {
        id: '1-6',
        title: 'Erros fatais de CV: o que 95% dos candidatos fazem errado',
        duration: '25 min',
        content: `# Erros fatais de CV: o que 95% dos candidatos fazem errado

## Por que bons profissionais ficam invisíveis

Alguns dos candidatos mais qualificados que conheço ficam meses sem retorno. Não por falta de competência — mas por erros evitáveis no CV que geram rejeição automática, seja pelo ATS ou pelo recrutador.

Esta lição é um diagnóstico dos erros mais comuns — com a correção para cada um.

## Os 10 erros mais comuns e como corrigi-los

### Erro 1: Título genérico ou ausente

❌ "Profissional de Marketing com 8 anos de experiência"
❌ (sem título, começa direto com experiência profissional)

✅ "Gerente de Marketing Digital | E-commerce | SEO & Paid Media | 8 anos"

O título é a primeira coisa que um recrutador lê. Precisa comunicar cargo + especialidade em segundos.

### Erro 2: Objetivo profissional genérico

❌ "Busco oportunidade desafiadora onde possa agregar valor à empresa e crescer profissionalmente."

Ninguém escreve o oposto, então isso não diz nada.

✅ Substitua por um **Resumo profissional** de 3 linhas com suas 2 maiores realizações e o tipo de vaga que busca.

### Erro 3: Responsabilidades sem resultados

❌ "Responsável por gerenciar a equipe de marketing."
❌ "Trabalhei com campanhas de mídia paga."

✅ "Gerenciei equipe de 5 pessoas, entregando 3 campanhas simultâneas com 40% de redução de CPA."

**A fórmula:** verbo de ação + contexto + resultado mensurável.

### Erro 4: CV em PDF com texto como imagem

Quando você escaneia um CV físico ou exporta de certas ferramentas, o texto vira imagem. O ATS não consegue ler.

**Teste:** abra o PDF, tente selecionar o texto com o mouse. Se não der, o ATS não consegue ler — e você é descartado antes de qualquer humano ver.

**Solução:** sempre exporte como PDF com texto selecionável (não como imagem).

### Erro 5: Foto inadequada ou desnecessária (para vagas internacionais)

Para vagas no Brasil: foto profissional aumenta chances (21x mais visualizações no LinkedIn).
Para vagas internacionais (EUA, Europa): **não inclua foto** — questões legais anti-discriminação.

Se incluir foto no Brasil: fundo neutro (branco, cinza), expressão neutra ou leve sorriso, traje profissional.

### Erro 6: Habilidades óbvias ou desatualizadas

❌ "Microsoft Word, PowerPoint, Internet"
❌ "Pacote Office" (esperado de qualquer profissional)
❌ "Photoshop 2010"

✅ Liste competências relevantes e específicas: ferramentas, plataformas, metodologias. Atualize sempre.

### Erro 7: CV de 4+ páginas sem justificativa

Para a maioria dos cargos até gerência: máximo 2 páginas. Para cargos executivos: até 3.

Regra geral: se você tem menos de 10 anos de experiência, 1 página é suficiente (e impressiona mais).

### Erro 8: Idiomas superestimados

❌ "Inglês: avançado" (quando o nível real é intermediário)

Um recrutador vai descobrir na primeira chamada ou entrevista. Mentir sobre idioma é o erro mais fácil de detectar e o mais difícil de recuperar.

✅ Seja honesto: básico, intermediário, avançado, fluente, nativo.

### Erro 9: Informações pessoais irrelevantes

Não inclua no CV brasileiro moderno:
- Estado civil
- Número de filhos
- CPF (a menos que solicitado)
- Pretensão salarial (coloque quando solicitado explicitamente)

### Erro 10: Não salvar na versão correta

Nomes de arquivo ruins:
❌ "CV.pdf", "Currículo Final Final v3.pdf", "MeuCV_2019_atualizado.pdf"

✅ "CV_NomeSobrenome_[CargoDesejado].pdf"
✅ Exemplo: "CV_JoaoSilva_MarketingManager.pdf"

## Lista de verificação antes de enviar

Antes de enviar qualquer CV, confirme:
- [ ] Texto selecionável no PDF
- [ ] Sem erros ortográficos (leia em voz alta ou use Grammarly em inglês)
- [ ] Resultados quantificados em todas as experiências relevantes
- [ ] Palavras-chave da descrição da vaga incluídas
- [ ] Nome do arquivo profissional
- [ ] Informações de contato visíveis e corretas
- [ ] Versão personalizada para aquela vaga específica`,
      },
    ],
  },
  {
    id: 2,
    title: 'Carta de Motivação que Abre Portas',
    desc: 'Escreve cartas que captam a atenção dos recrutadores e te diferenciam de centenas de candidatos.',
    duration: '2h 30min',
    icon: '✉️',
    isPro: false,
    color: { bg: 'bg-indigo-50', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700', icon: 'bg-indigo-500' },
    lessons: [
      {
        id: '2-1',
        title: 'A estrutura perfeita da carta de motivação',
        duration: '25 min',
        content: `# A estrutura perfeita da carta de motivação

## Porque é que a maioria das cartas falha?

Recrutadores leem centenas de cartas que começam com *"Venho por este meio candidatar-me à vaga de..."* — é genérico e desperdiça as primeiras linhas, as mais importantes.

## A estrutura ABCD

### A — Abertura com impacto (2-3 linhas)

**❌ Genérico:**
> "Venho por este meio candidatar-me à vaga de Gestor de Marketing publicada no LinkedIn."

**✅ Com impacto:**
> "Nos últimos 3 anos, as campanhas que liderei geraram €2M em receita e crescimento de 45% na base de clientes. Quando vi a visão de crescimento da [Empresa] para 2025, percebi que quero fazer parte desta história."

### B — Porque eles (2 parágrafos)
- Menciona algo específico da empresa (produto, notícia recente, valores)
- Liga seus valores aos deles
- Evita elogios vazios ("é uma empresa fantástica")

### C — Porque tu (2 parágrafos)
Suas 2-3 conquistas mais relevantes para ESTE cargo, usando o método **PAR**: Problema → Ação → Resultado

### D — Chamada à ação (1 parágrafo)
> "Estaria muito disponível para uma conversa e acredito que posso contribuir diretamente para [objetivo]. Agradeço a oportunidade de o demonstrar pessoalmente."

## Regras de ouro

1. **Máximo 1 página** (400-500 palavras)
2. **Personalizada para cada empresa** — nunca genérica
3. **Zero erros de ortografia** — um erro destrói a credibilidade`,
      },
      {
        id: '2-2',
        title: 'Como personalizar para cada vaga',
        duration: '20 min',
        content: `# Como personalizar para cada vaga

## O erro mais comum

Candidatos enviam a mesma carta para 50 empresas. Os recrutadores percebem imediatamente.

## Sistema de personalização em 5 passos

### Passo 1: Pesquisa a empresa (10 min)
- Site institucional (missão, valores, produtos)
- LinkedIn da empresa (notícias recentes, crescimento)
- Glassdoor (cultura, reviews de colaboradores)
- Google (notícias dos últimos 3 meses)

### Passo 2: Analisa a vaga em detalhe (5 min)
- As 3 principais responsabilidades
- Os requisitos obrigatórios vs. desejáveis
- O "tom" da oferta (formal/informal)

### Passo 3: Cria um modelo base
Estrutura ABCD com suas conquistas principais e frases de transição polidas.

### Passo 4: Personaliza os elementos-chave
- **Abertura**: referência específica à empresa
- **Parágrafo B**: factos específicos da empresa
- **Conquistas**: as mais relevantes para esta vaga

### Passo 5: Revisão final
> "Um estranho conseguiria perceber para que empresa é esta carta?"

## Retorno do investimento

| Tipo de carta | Tempo extra | Taxa de resposta |
|---|---|---|
| Genérica | 0 min | ~2% |
| Semi-personalizada | 15 min | ~10% |
| Totalmente personalizada | 30 min | ~25% |`,
      },
      {
        id: '2-3',
        title: 'Frases de impacto e erros a evitar',
        duration: '20 min',
        content: `# Frases de impacto e erros a evitar

## Frases que os recrutadores adoram

### Aberturas fortes
- "Nos últimos X anos, especializei-me em [área] com foco em [resultado específico]."
- "Quando li a vossa missão de [missão específica], reconheci imediatamente a [ligação genuína]."

### Frases de conquista (método PAR)
- "Ao identificar [problema], implementei [solução], resultando em [resultado]."
- "Reduzi [métrica] em X% através de [ação específica], poupando [valor] à empresa."

## Os 10 erros mais comuns

1. Começar com *"Venho por este meio..."* — cliché que 95% usa
2. Repetir o CV — a carta é um argumento de venda, não um resumo
3. Focar-se em ti, não na empresa — fala do que pode **dar**
4. Usar adjetivos sem provas — "sou proativo" → prova com exemplos
5. Ser demasiado longo — se passa de 1 página, corta
6. Erros ortográficos — um erro pode custar a vaga
7. Não ter chamada à ação — "Aguardo resposta" é passivo
8. Não adaptar o nome do cargo ou empresa
9. Email de envio vazio — o corpo do email é a primeira impressão
10. Ficheiro mal nomeado — usa CartaMotivacao\_NomeSobrenome.pdf

## Checklist final

- ✅ Menos de 500 palavras?
- ✅ Abertura com impacto?
- ✅ Menção específica à empresa?
- ✅ Pelo menos uma conquista com número?
- ✅ Chamada à ação clara?
- ✅ Zero erros ortográficos?`,
      },
      {
        id: '2-4',
        title: 'O email de candidatura e o follow-up estratégico',
        duration: '20 min',
        content: `# O email de candidatura e o follow-up estratégico

## O email de candidatura: a primeira impressão real

Muitos candidatos dedicam horas ao CV e à carta, e depois enviam o email vazio ou com "Segue em anexo o meu CV". Esse é o primeiro texto que o recrutador lê.

## Estrutura do email perfeito

**Assunto:** [Candidatura] Cargo Específico – Nome Completo

**Corpo:**
> Olá [Nome do recrutador, se souber],
>
> Candidato-me à vaga de [Cargo] referência [REF se existir], que encontrei no [LinkedIn/site].
>
> Em 3 anos como [cargo atual], [conquista relevante de uma linha]. Acredito que esta experiência se alinha diretamente com [algo específico da oferta ou empresa].
>
> Seguem em anexo o meu CV e carta de motivação. Fico disponível para uma conversa quando for conveniente.
>
> Com os melhores cumprimentos,
> [Nome] | [Telefone] | [LinkedIn]

## O follow-up: a arma secreta

Apenas **18% dos candidatos** fazem follow-up. Quem o faz destaca-se significativamente.

### Quando fazer follow-up
- **Se não houve prazo indicado**: 7-10 dias após o envio
- **Se houve prazo indicado**: 2-3 dias após o prazo
- **Após entrevista**: 24-48 horas (obrigatório)

### Template de follow-up após candidatura
> "Olá [Nome], espero que esteja bem. Enviei a minha candidatura para a posição de [Cargo] há [X dias]. Queria confirmar que chegou e reiterar o meu interesse genuíno na oportunidade. Fico ao dispor para qualquer questão. Com os melhores cumprimentos, [Nome]"

### Template de follow-up após entrevista (24-48h)
> "Olá [Nome], obrigado pela reunião de ontem. Fiquei ainda mais entusiasmado com a [empresa] após perceber [algo específico]. Fico a aguardar novidades e estou disponível para qualquer informação adicional."

## Regras de follow-up
- **Máximo 2 follow-ups** — mais do que isso é intrusivo
- **Nunca pergunta "já decidiram?"** — pergunta se há algo mais que possas fornecer
- **Mantém um registo** de quando enviaste cada follow-up`,
      },
      {
        id: '2-5',
        title: 'Cartas de motivação por email e para diferentes situações',
        duration: '25 min',
        content: `# Cartas de motivação por email e para diferentes situações

## A candidatura por email ainda existe — e importa muito

Muitas vagas, especialmente em empresas menores, startups e candidaturas espontâneas, ainda são enviadas por email. A forma como você escreve esse email pode ser o fator decisivo.

## Anatomia do email de candidatura perfeito

### Assunto do email
É a primeira coisa que o recrutador lê. Precisa ser específico e profissional.

❌ "Candidatura para vaga"
❌ "CV em anexo"
✅ "Candidatura — Analista de Marketing Sênior | João Silva"
✅ "Candidatura espontânea — Desenvolvedor React | Ana Costa"

### Corpo do email
O email **é** a carta de motivação. Não escreva um email genérico com "segue em anexo meu CV".

Estrutura ideal (4 parágrafos, máximo 300 palavras):

**Parágrafo 1 — A conexão:**
> "Vi a vaga de [Cargo] no LinkedIn e aplico imediatamente, pois [motivo específico relacionado à empresa/produto/desafio]."

**Parágrafo 2 — O valor:**
> "Nos últimos [X anos], trabalhei em [empresa] onde [realização específica com números]. Essa experiência me preparou diretamente para os desafios que vi na descrição da vaga, especialmente [requisito específico da vaga]."

**Parágrafo 3 — O fit:**
> "[Algo específico sobre a empresa] foi o que me fez candidatar com entusiasmo genuíno — não como mais uma candidatura, mas como uma escolha deliberada."

**Parágrafo 4 — O CTA:**
> "Fico à disposição para uma conversa a qualquer momento. Tenho disponibilidade para [dias/horários] ou me adapto à sua agenda. Meu telefone é [número]."

### Assinatura profissional
\`\`\`
João Silva
LinkedIn: linkedin.com/in/joaosilva
Portfólio: joaosilva.dev (se aplicável)
(11) 99999-9999
\`\`\`

## Cartas para diferentes situações

### Candidatura espontânea (sem vaga aberta)

O tom é diferente — você está criando uma oportunidade, não respondendo a uma demanda.

Chave: mencione **por que aquela empresa especificamente** e **que tipo de contribuição você poderia trazer agora**.

> "Acompanho a [empresa] há [tempo] e tenho visto seu crescimento em [área]. Embora não haja vaga aberta no momento, gostaria de me apresentar porque acredito que posso contribuir com [competência específica] durante essa fase de expansão..."

### Candidatura por indicação

Quando alguém da empresa te indicou, mencione na primeira linha — isso muda completamente a prioridade de leitura.

> "A [Nome do indicado], [cargo] da [empresa], sugeriu que eu entrasse em contato. Segundo ela, há interesse em expandir a equipe de [área], e meu perfil em [especialidade] poderia ser relevante..."

### Mudança de área/carreira

Para quem está fazendo transição, a carta é crucial para contextualizar:
> "Venho do setor de [área anterior], onde desenvolvi competências em [habilidades transferíveis]. Estou em transição deliberada para [nova área] porque [razão genuína e fundamentada]. O que trago de diferente é [perspectiva cruzada entre as duas áreas]..."

### Candidatura para empresa menor que o seu nível atual

Alguns recrutadores se preocupam com "overqualification". Endereça isso diretamente:
> "Venho de empresas maiores, e reconheço que isso pode gerar dúvida sobre o fit. Escolhi candidatar porque [razão específica: estágio da empresa, impacto, setor] — e não por falta de opções."`,
      },
    ],
  },
  {
    id: 3,
    title: 'Perfil LinkedIn que Atrai Recrutadores',
    desc: 'Transforma seu LinkedIn numa máquina de oportunidades de emprego 24 horas por dia.',
    duration: '3h',
    icon: '💼',
    isPro: true,
    color: { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700', icon: 'bg-violet-500' },
    lessons: [
      {
        id: '3-1',
        title: 'Foto, título e resumo que atraem recrutadores',
        duration: '30 min',
        content: `# Foto, título e resumo que atraem recrutadores

## A foto de perfil

Um perfil com foto recebe **21x mais visitas** do que um sem foto.

**O que faz uma boa foto:**
- Fundo neutro (branco, cinza ou borrado)
- Enquadramento: ombros e cabeça
- Sorriso natural, olhar para a câmara
- Roupa adequada à sua área profissional

## O título profissional

**Fórmula eficaz:**
> [Cargo/Especialidade] | [Proposta de valor] | [Palavra-chave adicional]

**❌ Fraco:** "Marketing Manager na Empresa X"

**✅ Poderoso:** "Marketing Manager | Growth & Aquisição de Clientes B2B | 8 anos em SaaS"

## O resumo (About)

**Estrutura do resumo poderoso:**

1. **O gancho** (2-3 linhas) — afirmação forte sobre o impacto que crias
2. **Sua história** (3-4 linhas) — como chegaste aqui, o que te motiva
3. **O que oferece** (3-4 linhas) — suas 3 competências principais
4. **Chamada à ação** (1-2 linhas) — o que procuras e como entrar em contato

\`\`\`
Transformo equipas de vendas em máquinas de crescimento.
Nos últimos 8 anos, ajudei +20 empresas de SaaS a crescer
a receita entre 40% e 120%.

→ Pipeline management (Salesforce, HubSpot)
→ Team building e coaching de equipas de vendas
→ Negociação enterprise (tickets €50k–€500k)

Aberto a oportunidades como Sales Director em SaaS.
Contacto: [email] | [telefone]
\`\`\``,
      },
      {
        id: '3-2',
        title: 'Experiência e competências que se destacam',
        duration: '25 min',
        content: `# Experiência e competências que se destacam

## A secção de experiência no LinkedIn

### Fórmula para cada bullet
**Verbo de ação + O que fizeste + Resultado/Impacto**

✅ "Implementei processo de onboarding que reduziu churn em 23% e aumentou NPS de 45 para 72 pontos"

✅ "Gerenciei orçamento de €800k em campanhas de performance, com ROAS médio de 4.2x"

## A secção de competências

- Adiciona **máximo 50 competências**
- Pede **endorsements** a colegas e gestores
- As primeiras 3 aparecem no perfil — escolhe as mais estratégicas

## Recomendações

**Como pedir recomendações:**
1. Contacta a pessoa pessoalmente
2. Lembra-a de um projeto específico
3. Sugere os pontos que ela pode mencionar
4. Oferece fazer uma recomendação em troca

**A quem pedir:** gestores diretos, colegas de projetos relevantes, clientes

## Secções extra que fazem diferença

- **Projetos**: mostra trabalho prático, mesmo que pessoal
- **Publicações**: artigos no LinkedIn geram visibilidade enorme
- **Certificações**: aparecem bem e são verificáveis
- **Línguas**: sempre relevante para empresas internacionais`,
      },
      {
        id: '3-3',
        title: 'Como aparecer nas pesquisas dos recrutadores',
        duration: '25 min',
        content: `# Como aparecer nas pesquisas dos recrutadores

## Como os recrutadores pesquisam

Os recrutadores pesquisam por palavras-chave no título e resumo, localização, nível de experiência, setor e conexões de 1º e 2º grau.

## Otimização para pesquisas

### 1. Ativa "Open to Work"
Perfil → "Open to" → "Finding a new job"

### 2. Keywords estratégicas — inclui em:
- **Título** (maior peso no algoritmo)
- **Resumo** (segundo maior peso)
- **Experiência** (terceiro maior peso)

### 3. Completude All-Star
- ✅ Foto de perfil e capa
- ✅ Título otimizado e resumo completo
- ✅ Experiência (pelo menos 2 cargos)
- ✅ Competências (pelo menos 5)
- ✅ 1 recomendação e 50+ conexões

## Estratégia de conteúdo

**Tipos de publicações que funcionam:**
- Compartilhe de aprendizagens recentes
- Behind the scenes do seu trabalho
- Opiniões sobre tendências do setor

**Frequência recomendada:**
- Mínimo: 1 publicação por semana
- Ideal: 3 publicações + 5-10 comentários relevantes por dia`,
      },
      {
        id: '3-4',
        title: 'Criar conteúdo no LinkedIn que gera oportunidades',
        duration: '30 min',
        content: `# Criar conteúdo no LinkedIn que gera oportunidades

## Por que publicar atrai recrutadores?

Quando publica, apareces no feed dsuas conexões e das conexões delas. Recrutadores monitorizam pessoas ativas nas suas áreas. Conteúdo de qualidade é o currículo mais poderoso que existe.

## Os 5 tipos de publicação que funcionam

### 1. A lição aprendida
> "Cometi este erro num projeto de €500k. Aqui está o que aprendi."

Formato: Gancho → O contexto → O erro/aprendizagem → Takeaway prático

### 2. A desmistificação
> "Toda a gente diz que precisas de 5 anos de experiência para gerir uma equipa. Fiz-o com 2. Aqui está como."

### 3. O caso de estudo rápido
Situação → Problema → Solução → Resultado (com números)

### 4. A lista prática
> "7 perguntas que nunca fazes numa entrevista (mas devias)"

Listas simples têm engagement 3x maior que texto corrido.

### 5. A opinião controversa (com argumento)
> "O modelo de trabalho híbrido vai matar a cultura das empresas. Aqui está a evidência."

## Fórmula para o gancho perfeito

A primeira linha é tudo — 90% das pessoas não expandem o post.

**Fórmulas que funcionam:**
- "Há X anos cometi o maior erro da minha carreira."
- "Ninguém te conta isto sobre [tema da sua área]."
- "Fiz [resultado impressionante]. Aqui está exatamente como."
- "A maioria dos [profissionais] está a fazer isto errado."

## Plano de publicação semanal

| Dia | Tipo de conteúdo |
|---|---|
| Segunda | Dica prática da sua área |
| Quarta | História ou caso de estudo |
| Sexta | Opinião ou tendência |

5-10 comentários de qualidade por dia em posts de referências da sua área valem mais do que 1 post viral por semana.`,
      },
      {
        id: '3-5',
        title: 'LinkedIn Premium e ferramentas avançadas para candidatos',
        duration: '25 min',
        content: `# LinkedIn Premium e ferramentas avançadas para candidatos

## Vale a pena assinar o LinkedIn Premium?

Esta é uma das dúvidas mais frequentes. A resposta depende do seu momento de carreira — e há alternativas gratuitas para quase tudo.

## O que o LinkedIn Premium oferece

### Career (R$99-140/mês)
- **InMail:** enviar mensagens para quem não é sua conexão (5 créditos/mês)
- **Quem viu seu perfil:** histórico completo de 90 dias (plano grátis mostra apenas 5)
- **Como você se compara:** métricas vs. outros candidatos na mesma vaga
- **LinkedIn Learning:** acesso a cursos integrados
- **Open Profile:** qualquer pessoa pode te mandar mensagem grátis

### Recruiter Lite (R$350+/mês)
Para headhunters e recrutadores — não vale para candidatos.

## Quando o Premium faz sentido

✅ **Faz sentido se:**
- Está em busca ativa de emprego e precisa se candidatar a vagas sem conexão
- Quer ver quem visitou seu perfil para fazer follow-up estratégico
- Precisa de InMails para contatar recrutadores de empresas-alvo

❌ **Não faz sentido se:**
- Tem uma rede ativa que pode apresentar você (networking > InMail)
- Está em busca passiva e apenas quer otimizar o perfil
- Tem budget limitado (R$99 por mês soma R$1.188/ano)

**Dica:** muitos usuários não sabem, mas o LinkedIn oferece **1 mês grátis de Premium** para novas assinaturas. Aproveite durante o período mais intenso da sua busca e cancele depois.

## Ferramentas gratuitas que potencializam o LinkedIn

### LinkedIn Alumni Tool (gratuito)
Acesse linkedin.com/school/[sua-universidade]/people/
→ Filtre ex-alunos por empresa, cargo, localização
→ Contate diretamente com gancho natural: "Somos ex-alunos de [universidade]"

### LinkedIn Sales Navigator (plano individual)
Versão profissional do LinkedIn com busca avançada. Tem trial gratuito de 30 dias — use estrategicamente.

### Shield Analytics (para criadores de conteúdo)
Se você publica no LinkedIn regularmente, o Shield Analytics mostra métricas detalhadas de posts (o LinkedIn nativo mostra dados muito limitados).

## Otimizando sua presença para o algoritmo do LinkedIn

O algoritmo do LinkedIn prioriza:
1. **Conexões de 1º grau** veem mais seu conteúdo — conecte com quem importa
2. **Engajamento nas primeiras horas** é o sinal mais forte — publique quando seu público está online
3. **Comentários valem mais que curtidas** — incentive discussão com perguntas abertas
4. **Consistência de publicação** — 2-3 posts/semana por 3 meses bate 10 posts numa semana

## Como monitorar sua visibilidade

Métricas gratuitas que você pode acompanhar semanalmente:
- **Aparições em pesquisas** (quantas vezes seu perfil apareceu nos resultados)
- **Visualizações de perfil** (tendência vs. semana anterior)
- **Alcance dos posts** (quem está vendo)

Para encontrar no LinkedIn: Meu perfil → Analytics → Todos os dados analíticos

## LinkedIn como central de inteligência competitiva

Use o LinkedIn não apenas para buscar vagas, mas para:
- **Acompanhar movimentações** de pessoas que você admira (quando mudam de emprego, aparecem oportunidades na empresa que deixaram)
- **Rastrear empresas-alvo** (siga as páginas, ative notificações de novas vagas)
- **Mapear decisores** antes de candidaturas espontâneas (quem é o gestor direto da área?)
- **Entender a cultura** antes da entrevista (o que os funcionários compartilham? qual o tom da comunicação?)`,
      },
    ],
  },
  {
    id: 4,
    title: 'Preparação e Sucesso em Entrevistas',
    desc: 'Domina todas as fases da entrevista e transforma nervosismo em confiança e respostas memoráveis.',
    duration: '3h 45min',
    icon: '🎯',
    isPro: true,
    color: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700', icon: 'bg-orange-500' },
    lessons: [
      {
        id: '4-1',
        title: 'Os tipos de perguntas e como preparar respostas',
        duration: '35 min',
        content: `# Os tipos de perguntas e como preparar respostas

## As 6 categorias de perguntas

### 1. Perguntas sobre ti — "Fala-me de ti"
**Fórmula Presente → Passado → Futuro**

### 2. Perguntas comportamentais — "Fala-me de uma vez em que..."
**Usa o método STAR:**
- **S**ituação: o contexto
- **T**arefa: seu papel
- **A**ção: o que fizeste
- **R**esultado: o impacto

### 3. Perguntas situacionais — "O que faria se..."
Usa o mesmo método STAR mas no condicional.

### 4. Perguntas técnicas
Específicas da área. Prepara com exercícios práticos.

### 5. Perguntas de motivação — "Porque quer este cargo?"
Responde sempre de forma positiva. Nunca critiques empregadores anteriores.

### 6. Perguntas difíceis — "Qual é seu maior defeito?"
Defeito real + como estás a trabalhar nele.

## As 10 perguntas mais comuns

1. **"Fala-me de ti"** → Presente-Passado-Futuro em 2 min
2. **"Pontos fortes?"** → 3 pontos com exemplos concretos
3. **"Maior defeito?"** → Defeito real + plano de melhoria
4. **"Onde te vês daqui a 5 anos?"** → Alinhado com a empresa
5. **"Porque quer trabalhar aqui?"** → Pesquisa + valores
6. **"Porque saíste?"** → Sempre positivo, foca no futuro
7. **"Maior desafio?"** → STAR com resultado positivo
8. **"Trabalho em equipa?"** → STAR focado em colaboração
9. **"Como geres o stress?"** → Estratégias reais
10. **"Tem perguntas para nós?"** → SEMPRE tem perguntas`,
      },
      {
        id: '4-2',
        title: 'Linguagem corporal e comunicação não-verbal',
        duration: '25 min',
        content: `# Linguagem corporal e comunicação não-verbal

## Os números que importam

- **55%** da mensagem é transmitida pela linguagem corporal
- **38%** pelo tom de voz
- **7%** pelas palavras em si

## Fundamentos da linguagem corporal positiva

**Postura:** senta-te direito, ligeiramente inclinado para a frente, ombros relaxados.

**Contacto visual:** 60-70% do tempo, distribui por todos os entrevistadores.

**Gestos:** gesticula naturalmente, mantém as mãos visíveis, evita tocar no rosto.

## Entrevistas por videochamada

- **Câmara ao nível dos olhos** (não de baixo para cima)
- **Iluminação frontal** (luz atrás escurece o rosto)
- **Olha para a câmara**, não para o ecrã
- **Testa a tecnologia** 30 min antes
- **Silencia notificações** e avisa quem está em casa

## Voz e tom

- Fala devagar e claramente (nervosismo acelera a fala)
- Pausa antes de responder — é sinal de reflexão
- Varia o tom para não soares monótono
- Elimina "hm", "tipo", "sabes" do seu discurso`,
      },
      {
        id: '4-3',
        title: 'Perguntas a fazer e negociação salarial',
        duration: '30 min',
        content: `# Perguntas a fazer e negociação salarial

## Porque DEVES fazer perguntas

Responder "Não, está tudo claro" é um erro grave. Boas perguntas demonstram interesse genuíno, preparação e pensamento estratégico.

## As melhores perguntas

**Sobre a função:**
- "Quais são as principais prioridades para os primeiros 90 dias?"
- "Como seria o sucesso nesta função ao fim de 1 ano?"
- "Quais são os maiores desafios que a pessoa neste cargo vai enfrentar?"

**Sobre a empresa:**
- "Como descreveria a cultura da empresa?"
- "Como a empresa apoia o desenvolvimento profissional?"

## Negociação salarial

### O momento certo
Se perguntarem as expectativas antes de uma oferta:
> "Estou aberto a discutir compensação. Podem partilhar a banda salarial para este cargo?"

### Como negociar
1. Pesquisa o mercado (LinkedIn Salary, Glassdoor, Paylab)
2. Define seu piso e teto ideal
3. Pede mais do que quer (há margem para baixar)
4. Justifica com valor, não com necessidades pessoais

**❌ Fraco:** "Precisava de €30k porque tenho rendas a pagar"

**✅ Forte:** "Com base na minha experiência e o impacto demonstrado, acredito que €35k está alinhado com o mercado e o valor que vou criar."

5. Negocia o pacote completo: salário + bónus + flexibilidade + formação`,
      },
      {
        id: '4-4',
        title: 'Perguntas-armadilha e como responder com confiança',
        duration: '30 min',
        content: `# Perguntas-armadilha e como responder com confiança

## O que são perguntas-armadilha?

São perguntas desenhadas para revelar pontos fracos, inconsistências ou reações negativas. Conhecer as mais comuns permite preparar respostas que transformam a pergunta numa oportunidade.

## As 8 perguntas-armadilha mais comuns

### 1. "Porque saiu do último emprego?"
**Armadilha:** revelar conflitos, dificuldades ou negatividade.
**Resposta:** Foca sempre no que procuras, não do que foges.
> "Aprendi muito na [empresa anterior] e tenho gratidão pela experiência. Cheguei ao ponto em que quero [crescer numa área específica / assumir mais responsabilidade] e esta oportunidade alinha-se perfeitamente com esse objetivo."

### 2. "Qual é seu maior defeito?"
**Armadilha:** revelar fraqueza sem plano de melhoria.
**Resposta:** Defeito real + ação concreta para superá-lo.
> "Tendo a ser perfeccionista, o que às vezes me levava a dedicar mais tempo do que o necessário a detalhes. Aprendi a usar a regra 80/20 e a definir critérios claros de 'bom o suficiente' para cada tarefa."

### 3. "Onde te vês daqui a 5 anos?"
**Armadilha:** revelar planos incompatíveis com a empresa.
**Resposta:** Alinha a resposta com o crescimento possível dentro da empresa.
> "Quero ter crescido como especialista em [área], idealmente com responsabilidade de equipa. Esta empresa tem o tipo de crescimento e desafios que me permitem desenvolver nessa direção."

### 4. "Porque devemos contratar-te e não os outros candidatos?"
**Armadilha:** soar arrogante ou vago.
**Resposta:** 3 pontos específicos e relevantes para a função.
> "Três razões: primeiro, tenho experiência direta em [X]; segundo, já resolvi o tipo de desafios que esta função implica, como demonstrou [conquista concreta]; terceiro, a minha abordagem a [Y] está alinhada com a forma como a empresa opera."

### 5. "Que salário esperas?"
**Armadilha:** dar um número antes de ter a oferta formal.
**Resposta:** Pede informação primeiro.
> "Prefiro perceber melhor o âmbito da função antes de falar em números. Podem partilhar a banda salarial que têm em mente?"

### 6. "Como te descreveriam seus colegas?"
**Armadilha:** generalidades sem prova.
**Resposta:** Usa uma situação real com atributo verificável.
> "Recentemente um colega disse que sou a pessoa a quem recorre quando há um problema complexo para resolver — que sou direto e trago soluções, não problemas. Acho que reflete a forma como gosto de trabalhar."

### 7. "Há alguma lacuna na sua experiência para esta função?"
**Armadilha:** admitir fraquezas desnecessariamente.
**Resposta:** Reconhece o ponto, mas reframe como capacidade de aprendizagem.
> "Nunca trabalhei diretamente com [ferramenta X], mas aprendi sistemas equivalentes em [contexto] e normalmente fico operacional em semanas. Tenho já estudado [recurso específico]."

### 8. "Tem outras ofertas ou processos em curso?"
**Armadilha:** revelar urgência ou falta de interesse nesta empresa.
**Resposta:** Honesto mas estratégico.
> "Estou em processos com mais empresas, como é natural. Esta é a oportunidade que mais me interessa — o que é a razão pela qual estou aqui hoje."`,
      },
      {
        id: '4-5',
        title: 'Entrevistas técnicas e estudos de caso: como se preparar',
        duration: '30 min',
        content: `# Entrevistas técnicas e estudos de caso

## Além das perguntas comportamentais

Para muitas áreas, a entrevista não termina nas perguntas STAR. Você vai enfrentar uma avaliação técnica ou um estudo de caso. Entender o formato e se preparar adequadamente é o diferencial entre ir para a lista curta ou não.

## Tipos de entrevista técnica por área

### Tecnologia (Dev, Data, DevOps)
**Formato:** Coding challenge ao vivo + system design

**Coding challenge:**
- Plataformas usadas: HackerRank, CoderPad, LeetCode (compartilhado ao vivo)
- O que avaliam: raciocínio, comunicação enquanto resolve, clareza do código
- **Dica:** verbalize seu raciocínio em tempo real — "Estou pensando em usar uma hash map porque precisamos de busca O(1)..." Isso é mais importante do que acertar na primeira tentativa.

**System design:**
- Para sênior+: "Como você projetaria um sistema de notificações para 10M de usuários?"
- Framework para responder: Requisitos → Estimativas → Componentes → Trade-offs → Escalabilidade
- Recursos: livro "Designing Data-Intensive Applications", canal YouTube do NeetCode

### Produto (Product Manager)
**Formato:** Product sense + metrics + execution

Perguntas comuns:
- "Como você melhoraria o feed do Instagram?"
- "O DAU caiu 10%. O que você faria?"
- "Design um produto para ajudar agricultores no Brasil."

**Framework para product sense:**
1. Clarifica o objetivo (qual métrica importa?)
2. Define o usuário (quem usa? dores?)
3. Gera soluções (3-5 ideias)
4. Prioriza com critérios (impacto × esforço)
5. Define métricas de sucesso

### Marketing e Growth
**Formato:** Case de crescimento + análise de campanha

Perguntas comuns:
- "Como você aumentaria o número de cadastros em 20% em 3 meses?"
- "Analise esta campanha e o que você mudaria."
- "Qual canal priorizaria com budget de R$50k?"

**O que avaliam:** estrutura de pensamento, conhecimento de métricas (CPA, LTV, ROAS), experiência com ferramentas.

### Consultorias e Finanças
**Formato:** Case de negócio (case interview)

Estrutura geral:
1. **Entenda o problema** (faça perguntas antes de responder)
2. **Estruture sua abordagem** (framework: árvore de problemas, MECE)
3. **Analise** (faça cálculos em voz alta, mostre raciocínio)
4. **Conclua** (síntese + recomendação clara)

Frameworks clássicos: árvore de lucro (receita - custo), análise de mercado (TAM/SAM/SOM), 4Ps de marketing.

## Como se preparar em 2 semanas

### Semana 1: Entender o formato
- Pesquise no Glassdoor como são as entrevistas na empresa específica
- Identifique o tipo de avaliação técnica para seu cargo
- Pratique 2-3 exercícios do tipo mais comum

### Semana 2: Prática intensa
- Simule pelo menos 2 entrevistas completas (sozinho em voz alta ou com alguém)
- Para tech: resolva 10-15 problemas do nível esperado
- Para produto/consultoria: complete 5 cases com timer

## O que fazer se travar durante a avaliação

Travar é normal. O que diferencia candidatos é como você reage:

1. **Verbalize o bloqueio:** "Estou olhando para esse problema de um ângulo específico. Vou dar um passo atrás."
2. **Peça um minuto:** "Posso ter 60 segundos para organizar o raciocínio antes de responder?"
3. **Pense em voz alta:** mesmo que não saiba a resposta, mostrar o processo de raciocínio tem valor.

Entrevistadores experientes sabem que nervosismo afeta performance. Demonstrar capacidade de se recuperar de um travamento é um sinal positivo.`,
      },
    ],
  },
  {
    id: 5,
    title: 'Networking Estratégico que Gera Oportunidades',
    desc: 'Constrói uma rede profissional poderosa que te abre portas antes que as vagas sejam publicadas.',
    duration: '3h 15min',
    icon: '🤝',
    isPro: true,
    color: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', icon: 'bg-emerald-500' },
    lessons: [
      {
        id: '5-1',
        title: 'A mentalidade certa sobre networking',
        duration: '20 min',
        content: `# A mentalidade certa sobre networking

## O mito do networking

Muita gente pensa que networking é distribuir cartões em eventos ou adicionar pessoas aleatórias no LinkedIn. O resultado: relações superficiais que não geram nada.

## O que o networking realmente é

Networking é **construir relações genuínas** com pessoas que partilham interesses e objetivos profissionais. A regra de ouro: **dá antes de pedir**.

## Os números que surpreendem

- **70-80%** das vagas nunca são publicadas (mercado oculto de emprego)
- **85%** dos empregos são preenchidos através de networking
- Candidatos com referência interna têm **15x mais probabilidade** de ser contratados

## Mudança de mentalidade

**Mentalidade "Tomar" (ineficaz):**
> "Preciso de emprego. Vou entrar em contato pessoas que me possam ajudar."

**Mentalidade "Dar" (eficaz):**
> "Como posso ser útil para as pessoas na minha rede?"

## Formas práticas de dar valor

- Compartilhe artigos relevantes com contatos específicos
- Apresenta pessoas que beneficiam do contato mútuo
- Comenta e amplifica o trabalho de outros
- Recomenda candidatos para vagas que não são para ti`,
      },
      {
        id: '5-2',
        title: 'Como abordar pessoas no LinkedIn e em eventos',
        duration: '30 min',
        content: `# Como abordar pessoas no LinkedIn e em eventos

## Abordagem no LinkedIn

### A mensagem de conexão perfeita (até 300 caracteres)

**❌ Genérico:**
> "Olá, gostaria de adicionar-te à minha rede profissional."

**✅ Personalizado:**
> "Olá [Nome], li seu artigo sobre [tema] e concordo com [ponto específico]. Trabalho também em [área] e adoraria conectar. Cumprimentos, [Nome]"

### O follow-up após aceitar (2-3 dias depois)
> "Obrigado por aceitar, [Nome]! Tenho acompanhado seu trabalho em [empresa]. Estou a trabalhar em [seu projeto/área]. Há algum tema em que posso ser útil para ti?"

### Pedido de coffee chat
> "Olá [Nome], sou [Nome], [cargo] com foco em [especialidade]. Tenho acompanhado seu percurso em [empresa], especialmente o trabalho em [área]. Estaria disponível para uma conversa de 20 minutos sobre [tema específico]? Totalmente ao seu critério de disponibilidade."

## Abordagem em eventos

**A abertura perfeita** (não "Então, o que é que fazes?"):
- "O que te trouxe a este evento?"
- "Vi sua apresentação sobre [tema]. O ponto [X] foi muito interessante."

**A regra dos 20 minutos:** não fiques 2 horas com a mesma pessoa.

**O follow-up em 24-48h:**
> "Olá [Nome], foi ótimo conhecer-te no [Evento]. A conversa sobre [tema] foi muito enriquecedora!"`,
      },
      {
        id: '5-3',
        title: 'Manter e nutrir relações ao longo do tempo',
        duration: '25 min',
        content: `# Manter e nutrir relações ao longo do tempo

## O erro mais comum

Contactar pessoas apenas quando precisamos de algo. As pessoas sentem-se usadas.

## O sistema de manutenção

**Nível 1 — Rede próxima (contato mensal):**
- Café ou almoço trimestral
- Mensagem com artigo interessante ou check-in
- Compartilhe de oportunidades relevantes

**Nível 2 — Rede média (contato trimestral):**
- Reações e comentários nas publicações deles
- Mensagem de parabéns por promoção ou aniversário profissional

**Nível 3 — Rede alargada (via conteúdo):**
Seu conteúdo publicado mantém-te visível para toda a rede — sem contato direto necessário.

## Gatilhos de contato naturais

- "Vi que foste promovido, parabéns!"
- "Li este artigo e lembrei-me da nossa conversa sobre [tema]"
- "A empresa em que trabalhas foi notícia — interessante o projeto [X]"

## Como fazer um pedido corretamente

1. **Referencia a relação** (não começas com o pedido)
2. **Sê específico** (pedidos vagos não têm resposta)
3. **Facilita a vida** de quem pedes
4. **Aceita um "não"** com elegância

**Exemplo:**
> "Olá [Nome], espero que estejas bem. Vi que têm uma posição de [cargo] aberta. Seria possível fazer uma introdução ao responsável de recrutamento? Sem pressão, sei que estás ocupado!"`,
      },
      {
        id: '5-4',
        title: 'O mercado oculto de emprego: vagas não publicadas',
        duration: '25 min',
        content: `# O mercado oculto de emprego: vagas não publicadas

## O que é o mercado oculto?

Estudos mostram que **70-80% das vagas nunca são anunciadas** publicamente. São preenchidas por:
- Referências internas de colaboradores
- Candidatos que o recrutador já conhece
- Candidatos espontâneos que chegaram no momento certo
- Headhunters e recrutadores especializados

## Por que as empresas preferem esta via?

- **Custo**: contratar por referência é 3-4x mais barato que anúncios
- **Velocidade**: preencher uma vaga em dias, não semanas
- **Qualidade**: candidatos com referência têm melhor performance e menor rotatividade
- **Discrição**: para posições estratégicas ou substituição de alguém ainda na empresa

## Como aceder ao mercado oculto

### 1. Candidatura espontânea estratégica
Não é enviar CV a 200 empresas. É pesquisar 10-15 empresas onde quer trabalhar genuinamente, identificar o gestor de contratação ou diretor da área, e entrar em contato diretamente.

**Mensagem de candidatura espontânea eficaz:**
> "Olá [Nome], acompanho o crescimento da [Empresa] há algum tempo, especialmente o vosso trabalho em [área específica]. Como [profissional com X anos em Y], acredito que poderia contribuir para [objetivo específico da empresa]. Estaria disponível para uma conversa de 20 minutos sobre possíveis oportunidades?"

### 2. Activar a rede para referências internas
Mapeia suas conexões LinkedIn dentro das empresas-alvo. Uma mensagem directa pode resultar numa apresentação ao responsável de contratação.

### 3. Seguir as empresas e pessoas certas
- Segue os decisores da sua área no LinkedIn
- Comenta os posts deles com insights relevantes
- Compartilhe conteúdo que demonstre sua expertise

### 4. Trabalhar com recrutadores especializados
Identifica os headhunters especializados na sua área (não as agências generalistas). Cultiva relações antes de precisar.

## O plano de acção em 30 dias

| Semana | Acção |
|---|---|
| 1 | Lista 15 empresas-alvo, identifica decisores |
| 2 | Entra em contato com 5 pessoas da sua rede dentro dessas empresas |
| 3 | Envia 5 candidaturas espontâneas personalizadas |
| 4 | Follow-up + contacta 2 recrutadores especializados |`,
      },
      {
        id: '5-5',
        title: 'Networking para introvertidos: estratégias que funcionam sem extroversão',
        duration: '25 min',
        content: `# Networking para introvertidos: estratégias que funcionam

## O mito do networking extrovertido

"Não tenho jeito para networking" — isso é o que a maioria dos introvertidos pensa. Mas networking não é sobre ser a pessoa mais animada da sala. É sobre criar conexões genuínas e úteis.

E introvertidos têm vantagens reais nisso:
- **Escutam melhor** do que a média
- **Conversas 1:1 são mais fáceis** do que grupos grandes
- **Preferem profundidade** a superficialidade
- **São mais autênticos** — o que cria confiança

## Estratégias de networking para introvertidos

### 1. Prefira qualidade a quantidade
Em vez de tentar falar com 20 pessoas num evento, escolha 3-4 e tenha conversas reais. Uma conexão genuína vale mais do que 20 cartões de visita trocados na pressa.

### 2. Prepare-se mais do que os extrovertidos
Introvertidos prosperam com preparação:
- Pesquise os palestrantes e participantes antes do evento
- Prepare 3-4 perguntas que você genuinamente quer fazer
- Defina 1-2 objetivos concretos ("quero conectar com pelo menos 2 pessoas que trabalham com [X]")

### 3. Networking assíncrono — seu ponto forte
O ambiente digital é mais confortável para introvertidos:
- **LinkedIn:** escreva comentários bem elaborados nos posts de pessoas que admira. Isso abre conversas naturais sem a pressão do presencial.
- **Email:** um email bem escrito e personalizado é a abordagem ideal para introvertidos — você tem tempo para pensar.
- **Comunidades online:** Slack, Discord, fóruns da área — participe com consistência e profundidade.

### 4. "One-on-one meetings" em vez de grupos
Proponha cafés ou calls individuais em vez de tentar se destacar em grupos. A dinâmica 1:1 favorece naturalmente quem prefere conversa profunda.

Template de convite para café:
> "Olá [Nome], acompanho seu trabalho com [área] há algum tempo e admiro [algo específico]. Estaria disponível para um café ou call de 30 minutos? Quero aprender mais sobre [tópico específico] e acho que você seria a pessoa ideal para conversar."

### 5. Seja o organizador
Parece contra-intuitivo, mas organizar um evento pequeno (almoço com 4-5 pessoas da área, grupo de estudo, mastermind mensal) coloca você numa posição de anfitriã onde as interações são mais controladas e naturais.

## Recuperação pós-evento

Introvertidos precisam de tempo para recarregar depois de interações sociais intensas — e está tudo bem. Planeje:
- Após eventos grandes, reserve 1-2 horas sozinho para recarregar
- Não agende eventos importantes no dia seguinte a um networking intenso
- Faça o follow-up digital (LinkedIn, email) nas 24h após o evento — é onde introvertidos brilham

## Scripts para situações desconfortáveis

**Para iniciar conversa com desconhecido no evento:**
> "O que te trouxe a esse evento?" (simples, aberta, funciona sempre)

**Para sair de uma conversa sem ser rude:**
> "Foi muito bom conversar com você. Vou buscar um café/cumprimentar alguém, mas adoraria continuar isso no LinkedIn — posso te mandar uma solicitação?"

**Para quando você ficou em branco:**
> "Interessante. Como você chegou a essa conclusão?" (funciona para qualquer tema, mostra interesse genuíno)`,
      },
    ],
  },
  {
    id: 6,
    title: 'Negociação Salarial e Proposta de Valor',
    desc: 'Aprende a pesquisar o mercado, negociar com confiança e maximizar seu pacote de compensação no Brasil.',
    duration: '3h',
    icon: '💰',
    isPro: true,
    color: { bg: 'bg-yellow-50', border: 'border-yellow-200', badge: 'bg-yellow-100 text-yellow-700', icon: 'bg-yellow-500' },
    lessons: [
      {
        id: '6-1',
        title: 'Pesquisa de mercado: quanto valem suas competências no Brasil',
        duration: '30 min',
        content: `# Pesquisa de mercado: quanto valem suas competências no Brasil

## Porque a pesquisa é o alicerce da negociação

Negociar sem dados é negociar de olhos fechados. Os melhores negociadores entram na conversa com 3 a 5 referências de mercado que justificam o número que pedem.

## Fontes de pesquisa salarial no Brasil

### Plataformas especializadas
- **Glassdoor Brasil** (glassdoor.com.br) — salários reportados por colaboradores
- **LinkedIn Salary** — dados por cargo e localização
- **Vagas.com** — faixa salarial em anúncios de vagas
- **Catho** — pesquisa de salários por área e senioridade
- **Love Mondays** — cultura + salários por empresa

### Comunidades e grupos
- Grupos do LinkedIn na sua área (ex: Devs no Brasil, Marketing Digital BR)
- Slacks e Discords profissionais onde os salários são discutidos abertamente

## Referências salariais por área (CLT, São Paulo, 2024)

| Área | Júnior | Pleno | Sênior | Gerência |
|---|---|---|---|---|
| Tecnologia (Dev) | R$3-6k | R$7-14k | R$14-25k | R$25-45k |
| Marketing Digital | R$2-4k | R$4-8k | R$8-15k | R$15-30k |
| Finanças | R$3-5k | R$5-10k | R$10-20k | R$20-40k |
| RH | R$2-4k | R$4-7k | R$7-15k | R$15-25k |
| Vendas B2B | R$2-4k + comissão | R$4-8k + comissão | R$8-15k + comissão | R$15-30k + PLR |
| Design | R$2-4k | R$4-8k | R$8-14k | R$14-25k |

> **Nota:** faixas orientativas. Empresas multinacionais, startups com funding e big techs pagam tipicamente 30-80% acima.

## Como usar os dados na negociação

1. **Reúne 3 referências mínimas** com cargo, empresa (mesmo anonimizada) e valor
2. **Identifica a mediana** do mercado, não apenas a média
3. **Segmenta por tipo de empresa**: startup, PME, multinacional — os valores diferem muito
4. **Considera o pacote total**: salário + bónus + benefícios + stock options (se aplicável)

## Seu número-âncora

O número que pedes primeiro ancore a negociação. A regra: **pede 15-20% acima do seu alvo**, para ter espaço de negociação.

Se seu alvo é R$10.000, começa com R$11.500 — ainda dentro do razoável, mas com margem.`,
      },
      {
        id: '6-2',
        title: 'Como responder "Qual é a sua pretensão salarial?"',
        duration: '25 min',
        content: `# Como responder "Qual é a sua pretensão salarial?"

## A pergunta que assusta (mas não deveria)

Esta pergunta aparece em quase todos os processos. A maioria dos candidatos responde nervosamente com um número baixo, com medo de perder a oportunidade. Esse é o maior erro.

## As 3 situações e como lidar com cada uma

### Situação 1: A pergunta aparece no formulário online (antes da entrevista)
**Estratégia:** Deixa em branco se for opcional. Se obrigatório, usa "A combinar" ou seu número-âncora (15% acima do alvo).

### Situação 2: A pergunta aparece cedo na entrevista (ainda não tem a oferta)
**Estratégia:** Deflexão elegante para obter informação primeiro.

> "Tenho uma expectativa baseada na minha pesquisa de mercado e experiência, mas gostaria de perceber melhor o âmbito completo da função antes. Podem partilhar a banda salarial que têm prevista?"

Se insistirem:
> "Com base na minha experiência de [X anos] e no mercado para esta função em [cidade], estou a considerar algo na faixa de R$[âncora]. Mas estou aberto a conversar sobre o pacote completo."

### Situação 3: A proposta formal (tem a oferta na mão)
**Esta é a melhor posição** — já demonstraste valor, eles querem-te.

> "Agradeço muito a proposta. Estava a ver um valor de R$[âncora]. Há flexibilidade nesse sentido?"

## O que NUNCA fazer

- ❌ Dar um número antes de perceber o cargo a fundo
- ❌ Dizer "Aceito qualquer coisa" — transmite falta de auto-valor
- ❌ Dar uma gama muito larga ("entre R$5k e R$15k") — parece que não fizeste pesquisa
- ❌ Justificar com necessidades pessoais ("tenho hipoteca") — justifica sempre com valor profissional
- ❌ Aceitar a primeira proposta sem tentar negociar — 70% das empresas têm margem

## Script completo de negociação salarial

Quando receberes a proposta formal por escrito ou chamada:

**Passo 1 — Não respondas imediatamente**
> "Obrigado pela proposta! Pode dar-me 24-48 horas para analisar com cuidado?"

**Passo 2 — Pesquisa e decide seu alvo**
Confirma sua pesquisa de mercado. Define: aceitável, alvo, ideal.

**Passo 3 — A contra-proposta**
> "Após análise, estou muito entusiasmado com a oportunidade. A compensação que vos propunham é de R$[valor deles]. Com base na minha experiência em [X, Y, Z] e no impacto que posso gerar em [área específica], faria mais sentido um valor de R$[seu alvo]. Há possibilidade de nos aproximarmos?"`,
      },
      {
        id: '6-3',
        title: 'Scripts de negociação para cada cenário',
        duration: '25 min',
        content: `# Scripts de negociação para cada cenário

## Por que usar scripts?

Num momento de tensão emocional, ter frases preparadas evita hesitações, silêncios constrangedores ou concessões impulsivas. Pratica-os até soarem naturais.

## Script 1: Quando a proposta está muito abaixo do mercado

> "Agradeço muito a proposta e o interesse em tê-me na equipa. Preciso de ser transparente: com base na minha pesquisa de mercado e na minha experiência de [X anos em Y], esperava algo na faixa de R$[valor]. A diferença é significativa. Existe flexibilidade na banda salarial para este cargo?"

**Se disserem que não há margem:**
> "Compreendo. Há outras componentes do pacote que possam ser ajustadas — bónus, flexibilidade de horário, formação, ou revisão salarial antecipada?"

## Script 2: Quando a proposta é boa mas quer mais

> "Esta é uma proposta muito interessante e estou genuinamente entusiasmado. Estava a considerar algo ligeiramente acima, na faixa de R$[valor]. Há alguma flexibilidade para chegarmos a esse número?"

## Script 3: Quando tem outra oferta como alavanca

> "Quero ser transparente: estou em processo avançado com outra empresa, com uma proposta de R$[valor]. A [vossa empresa] é a minha preferência pela [razão genuína]. Seria possível aproximarmo-nos desse valor?"

## Script 4: Negociação de aumento interno

> "Gostaria de falar sobre a minha compensação. Nos últimos [X meses], contribuí para [conquistas específicas com números]. O mercado para esta função com a minha senioridade está entre R$[X] e R$[Y]. Estou a pedir uma revisão para R$[alvo]. O que precisaria de demonstrar para que isso fosse possível?"

## O poder do silêncio

Depois de fazer um pedido ou contra-proposta, **fica em silêncio**. Não preenches o silêncio com concessões. O desconforto do silêncio é partilhado — quem fala primeiro normalmente cede.

## Quando aceitar

- O valor está no seu piso ou acima
- O pacote completo compensa eventuais lacunas no salário base
- A empresa tem perspetivas de revisão salarial em 6 meses

## Quando recusar com elegância

> "Considerei cuidadosamente e, lamentavelmente, a compensação proposta não se alinha com as minhas expectativas de mercado neste momento. Espero que possamos colaborar no futuro em condições diferentes."`,
      },
      {
        id: '6-4',
        title: 'Pacote total: benefícios que valem dinheiro',
        duration: '20 min',
        content: `# Pacote total: benefícios que valem dinheiro

## O salário é apenas uma parte

Uma proposta de R$8.000 com benefícios robustos pode valer mais do que R$9.500 sem benefícios. Aprende a calcular o valor real do pacote completo.

## Benefícios com valor monetário real

### Benefícios obrigatórios (CLT) — já deves ter
- Vale-transporte (deduz até 6% do salário)
- Vale-refeição / vale-alimentação
- FGTS (8% do salário depositado pelo empregador)
- 13º salário
- Férias + 1/3

### Benefícios diferenciados — negocia estes

| Benefício | Valor estimado/mês |
|---|---|
| Plano de saúde familiar | R$500 – R$2.000 |
| Plano odontológico | R$50 – R$200 |
| PLR (Participação nos Lucros) | 1-4 salários/ano |
| Bónus anual | 10-30% do salário anual |
| Stock options / phantom shares | Variável (startup/multinacional) |
| Previdência privada | 3-6% do salário (match da empresa) |
| Subsídio de educação | R$500 – R$2.000/mês |
| Subsídio de home office | R$200 – R$500/mês |
| Gympass / WellHub | R$50 – R$200/mês |

## Como calcular o pacote total (exemplo)

| Componente | Valor mensal |
|---|---|
| Salário base | R$8.000 |
| Vale refeição | R$800 |
| Plano de saúde (familiar) | R$1.200 |
| Previdência privada (match 5%) | R$400 |
| PLR estimado (/12) | R$666 |
| **Total efetivo** | **R$11.066/mês** |

## O que negociar quando o salário não tem margem

Se a empresa não pode subir o salário base, negocia:
1. **Bónus por performance** — define métricas claras
2. **Revisão salarial em 6 meses** — em vez de 12
3. **Formação e certificações** — custeadas pela empresa
4. **Flexibilidade** — home office, horário flexível
5. **Equipamento** — notebook, smartphone, subsídio home office

> **Regra de ouro:** negocia o pacote completo, não apenas o salário. A empresa pode não ter margem no salário base mas ter orçamento em benefícios.`,
      },
      {
        id: '6-5',
        title: 'Contrapropostas e como gerenciar múltiplas ofertas',
        duration: '25 min',
        content: `# Contrapropostas e como gerenciar múltiplas ofertas

## A arte da contraproposta

Você negociou, a empresa voltou com uma proposta — mas ainda não é o que você queria. Agora é hora da contraproposta.

### A regra dos 3 rounds
A maioria das negociações termina em até 3 rodadas. Mais do que isso e você começa a criar atrito desnecessário. Planeje:
- **Round 1:** sua âncora inicial (módulo anterior)
- **Round 2:** contraproposta fundamentada
- **Round 3:** decisão final (aceitar ou definir dealbreaker)

### Como estruturar a contraproposta

Template:
> "Obrigado pela proposta atualizada. Agradeço o esforço da empresa em encontrar um valor mais próximo. Entendo que há limites, e ao mesmo tempo preciso ser honesto: minha pesquisa de mercado e o meu custo de vida atual indicam que R$X seria o ponto onde me sinto confortável para dar esse passo. Você tem espaço para chegarmos a esse número?"

Elementos essenciais:
1. ✅ Agradeça a movimentação (cria reciprocidade)
2. ✅ Reconheça os limites da empresa (empatia)
3. ✅ Fundamente com dados objetivos (não com necessidades pessoais)
4. ✅ Seja específico e direto no número que quer

### O que NÃO dizer na contraproposta
- ❌ "Preciso de mais porque meu aluguel subiu" (problema seu, não da empresa)
- ❌ "Um amigo meu ganha mais" (anedótico, não convincente)
- ❌ "Tenho que pagar X por mês" (revela necessidade, enfraquece posição)

## Gerenciando múltiplas ofertas simultaneamente

### Por que múltiplas ofertas transformam sua posição

Quando você tem mais de uma oferta em mãos, sua BATNA (melhor alternativa à negociação) é concreta — e isso muda tudo. Você negocia sem medo porque a outra opção existe de verdade.

### Como comunicar outras ofertas estrategicamente

Quando outra empresa faz uma oferta enquanto você está em processo:
> "Quero ser transparente: recebi uma oferta de outra empresa com prazo para amanhã. Vocês têm espaço para acelerar o processo? Minha preferência clara é [empresa atual], mas preciso tomar uma decisão."

Isso:
- Cria urgência genuína
- Não é mentira (você realmente tem outra oferta)
- Coloca o ônus de agir na empresa

### Prazo para decidir: o que é razoável

| Nível do cargo | Prazo razoável |
|---------------|----------------|
| Júnior/Pleno | 3-5 dias úteis |
| Sênior/Especialista | 5-7 dias úteis |
| Gestão/Liderança | 7-10 dias úteis |

Se a empresa pressiona por resposta imediata (hoje, agora), é sinal amarelo. Empresas sérias respeitam que você precisa avaliar uma decisão importante.

## Quando aceitar, quando declinar

### Aceite se:
- ✅ Chegou perto o suficiente do seu piso (dentro de 10%)
- ✅ O crescimento e cultura compensam a diferença salarial
- ✅ Você esgotou as rodadas de negociação
- ✅ Sua BATNA (outra oferta ou emprego atual) é pior

### Decline se:
- ❌ A oferta final ainda fica abaixo do seu mínimo não negociável
- ❌ O processo revelou red flags sobre a cultura ou gestão
- ❌ Você tem uma alternativa concretamente melhor

### Como declinar com elegância
> "Depois de refletir com cuidado, decidi não seguir em frente com esta oportunidade. Agradeço muito o tempo investido e o profissionalismo de toda a equipe ao longo do processo. Espero que possamos nos cruzar novamente no futuro."

Nunca queime pontes — o mercado é menor do que parece, e o recrutador de hoje pode ser seu cliente amanhã.`,
      },
    ],
  },
  {
    id: 7,
    title: 'Transição de Carreira com Estratégia',
    desc: 'Como mudar de área, reposicionar-te no mercado e construir credibilidade numa nova direção profissional.',
    duration: '3h 15min',
    icon: '🔄',
    isPro: true,
    color: { bg: 'bg-rose-50', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700', icon: 'bg-rose-500' },
    lessons: [
      {
        id: '7-1',
        title: 'Diagnóstico: estás pronto para mudar de área?',
        duration: '25 min',
        content: `# Diagnóstico: estás pronto para mudar de área?

## Porque a maioria das transições falha

As pessoas mudam de área impulsionadas por insatisfação, não por visão. A diferença entre "fugir de" e "ir em direção a" é fundamental para o sucesso da transição.

## Os 3 tipos de transição

### Tipo 1: Transição de função (mesma área)
**Exemplo:** de Analista de Dados para Gestora de Produto (ainda em tech)
**Dificuldade:** Baixa — há sobreposição de competências
**Prazo típico:** 3-6 meses

### Tipo 2: Transição de setor (mesma função)
**Exemplo:** de Marketing em Varejo para Marketing em SaaS
**Dificuldade:** Média — função similar, contexto diferente
**Prazo típico:** 3-9 meses

### Tipo 3: Transição completa (nova função + novo setor)
**Exemplo:** de Advogado para UX Designer
**Dificuldade:** Alta — requer construção de credibilidade nova
**Prazo típico:** 9-24 meses

## Autodiagnóstico: 5 perguntas essenciais

1. **Porquê mudar?** — insatisfação ou atração por algo novo?
2. **O que te falta agora que tem a nova área?** — o que imaginais no dia-a-dia?
3. **Já testaste esta nova área?** — freelance, projeto pessoal, voluntariado?
4. **Tem sustentabilidade financeira para a transição?** — quanto tempo tem?
5. **Qual é seu plano B?** — o que fazes se a transição demorar 2x mais?

## Competências transferíveis que muitos ignoram

Quase todas as áreas valorizam:
- **Comunicação** (oral e escrita)
- **Gestão de projetos e deadlines**
- **Análise de dados e pensamento crítico**
- **Gestão de stakeholders**
- **Resolução de problemas sob pressão**
- **Liderança informal** (sem título)

Faz o inventário dsuas competências transferíveis antes de assumires que começas do zero.`,
      },
      {
        id: '7-2',
        title: 'Construir credibilidade na nova área sem experiência formal',
        duration: '35 min',
        content: `# Construir credibilidade na nova área sem experiência formal

## O paradoxo da experiência

"Preciso de experiência para ter emprego, mas preciso de emprego para ter experiência." Quase toda a transição começa aqui. A solução: criar experiência real sem um emprego formal.

## 6 formas de criar portfólio do zero

### 1. Projetos pessoais
**Marketing:** lança um blog ou newsletter de nicho. Cresce a audiência. Os números são seu portfólio.
**Tech:** desenvolve uma app ou tool e publica no GitHub/Product Hunt.
**Design:** redesenha interfaces de apps reais, publica no Behance/Dribbble.
**Dados:** resolve análises públicas (Kaggle, datasets do governo) e publica no Medium/GitHub.

### 2. Freelance a preço reduzido
Oferece seu serviço a preço simbólico em troca de testemunho e portfólio real. Plataformas: 99Freelas, Workana, Upwork.

### 3. Voluntariado em organizações sem fins lucrativos
ONGs precisam de marketers, designers, gestores de projeto. É experiência real em CV.

### 4. Contribuições open source ou comunitárias
Em tech: contribui para projetos GitHub. Em outras áreas: escreve para publicações do setor.

### 5. Certificações estratégicas
Algumas certificações são reconhecidas como prova de conhecimento técnico:
- **Marketing Digital:** Google Digital Garage, Meta Blueprint, HubSpot
- **Gestão de Produto:** Product School, Reforge
- **Dados:** Google Data Analytics (Coursera), IBM Data Science
- **UX/Design:** Google UX Design, Interaction Design Foundation
- **Tech:** AWS, Azure, Google Cloud

### 6. Hackathons e competições
Resultado verificável, exposição a recrutadores e potencial networking com profissionais da área.

## O CV para transição de carreira

**Não uses o CV cronológico clássico.** Usa o formato **funcional ou híbrido**:
1. Resumo de transição (2-3 linhas explicando a mudança como ponto forte)
2. Competências transferíveis (section de topo)
3. Portfólio/projetos na nova área
4. Experiência anterior (mais curta, focada nas competências transferíveis)

## A narrativa da transição

Prepara uma resposta de 30-60 segundos para "Porquê esta mudança?". Deve soar como progressão, não como fuga:

> "Ao longo de [X anos] em [área anterior], desenvolvi competências fortes em [Y]. Nos últimos [Z meses], tenho investido ativamente em [nova área] — [projeto, curso, freelance concreto]. Percebo que a combinação de [competência anterior] com [nova área] cria uma perspectiva única que poucos profissionais têm."`,
      },
      {
        id: '7-3',
        title: 'Networking específico para transição de carreira',
        duration: '25 min',
        content: `# Networking específico para transição de carreira

## Porquê o networking é ainda mais crítico numa transição

Num processo standard, seu CV fala por si. Numa transição, seu CV tem lacunas na nova área — e quem te conhece pessoalmente sabe o que o CV não mostra. Uma recomendação interna pode ultrapassar 5 anos de "falta de experiência".

## Os 3 grupos de pessoas a cultivar

### Grupo 1: Pessoas que já fizeram esta transição
São seu recurso mais valioso. Sabem exatamente o que esperar, que recursos usar, que armadilhas evitar. Encontra-os no LinkedIn com pesquisa "ex-[área original] agora [nova área]".

**Mensagem de abordagem:**
> "Olá [Nome], vi seu percurso de [área A] para [área B] e admiro muito essa transição. Como alguém a fazer caminho semelhante, adoraria uma conversa de 20 minutos sobre sua experiência. O que te ajudou mais no início?"

### Grupo 2: Profissionais ativos na nova área
Não peças emprego — pede perspectiva.
> "O que define um bom [profissional nesta área] para ti? O que te surpreendeu quando começaste?"

### Grupo 3: Recrutadores especializados nesta área
Explica a transição proativamente. Um recrutador que entende seu caso pode ser um aliado poderoso.

## Eventos e comunidades

- **Meetups locais** da nova área (Meetup.com, Eventbrite)
- **Comunidades online** no LinkedIn, Discord, Slack por setor
- **Eventos de empresas-alvo** — webinars, open days, hackathons

## Informational interviews: o segredo da transição

Uma "informational interview" é uma conversa de 20-30 minutos com alguém na área-alvo, sem intenção explícita de pedir emprego. Serve para:
- Aprender sobre o dia-a-dia real da função
- Perceber o que os recrutadores valorizam
- Ficares na memória de alguém que pode recomendar-te mais tarde

**Taxa de aceitação:** 70-80% das pessoas aceitam quando o pedido é genuíno e específico.`,
      },
      {
        id: '7-4',
        title: 'Comunicar a transição para recrutadores e nas entrevistas',
        duration: '30 min',
        content: `# Comunicar a transição para recrutadores e nas entrevistas

## O medo da "candidatura fraca"

Candidatos em transição tendem a minimizar a sua experiência anterior ou a apologizar pela mudança. Isto é o oposto do que deves fazer. Sua experiência anterior é uma **vantagem diferenciadora** — não uma lacuna.

## Reframing: como transformar a narrativa

### ❌ Narrativa da fraqueza
> "Sei que não tenho experiência direta em [área nova], mas estou a aprender e quero tentar."

### ✅ Narrativa da força
> "A minha combinação de [X anos em área anterior] com [competências recém desenvolvidas em nova área] dá-me uma perspectiva que a maioria dos candidatos não tem. Enquanto profissionais nativos da área conhecem o 'como', eu trouxe o 'porquê' de outro ângulo — e isso muda a qualidade das decisões."

## O pitch de transição (30-60 segundos)

Quando perguntarem "Conta-me sobre ti" ou "Porque esta mudança?":

> "Nos últimos [X] anos, trabalhei em [área], onde me especializei em [competências transferíveis]. Nos últimos [Y meses], investi deliberadamente em [nova área] — [curso específico, projeto, freelance com resultado]. Percebi que a combinação de [competência anterior] com [nova área] cria oportunidades únicas para [tipo de empresa/setor]. É exatamente isso que estou a trazer para esta função."

## Como endereçar as objecções mais comuns

### "Não tem experiência direta em [área]"
> "Tem razão que não tenho 3 anos de título de [cargo]. Tenho [projetos, freelance, certificações] que demonstram competência prática. E trago algo raro: a perspectiva de [área anterior] aplicada a [nova área] — que tipicamente resulta em [valor específico]."

### "Porque não ficaste na sua área anterior?"
> "Tomei a decisão de forma deliberada e estratégica, não por insatisfação. [Área anterior] ensinou-me [X]. Percebi que posso criar muito mais impacto combinando isso com [nova área]. É uma progressão, não uma saída."

### "Como sabemos que não vai mudar novamente?"
> "Esta transição levou [X meses] de preparação, onde aprendi [cursos], desenvolvi [projetos] e fiz [freelance]. Não é uma decisão impulsiva — é a área onde quero investir os próximos anos da minha carreira."

## O momento da aceitação: celebra a diferença

Quando conseguir o emprego na nova área, documente o percurso. Publique no LinkedIn. Isso:
- Consolida sua nova identidade profissional
- Atrai outros em transição semelhante para sua rede
- Demonstra reflexão e coragem — qualidades valorizadas por qualquer empregador`,
      },
      {
        id: '7-5',
        title: 'Os primeiros 90 dias na nova área: acelerando a credibilidade',
        duration: '30 min',
        content: `# Os primeiros 90 dias na nova área

Os primeiros 90 dias no novo emprego são o período mais crítico para consolidar sua credibilidade — especialmente quando você vem de uma transição de carreira.

## A regra dos 90 dias em 3 fases

### Fase 1: Primeiros 30 dias — Aprenda e observe

**Objetivo:** entender antes de agir.

- ✅ Mapeie os stakeholders: quem tem influência? Quem decide? Quem pode ajudá-lo?
- ✅ Entenda o vocabulário interno: toda empresa tem jargões e siglas próprias
- ✅ Observe a cultura: horários, comunicação, hierarquia informal
- ✅ Faça perguntas — você ainda tem a vantagem do "recém-chegado"
- ✅ Documente tudo: processos, contatos, insights

**O que NÃO fazer:** propor mudanças drásticas, criticar o que existia antes, comparar com a empresa anterior.

> 💡 **Dica:** Agende reuniões de 30 min com cada pessoa-chave do seu time nas primeiras 2 semanas. Pergunte: "O que você esperaria de alguém nessa função para considerar os primeiros 3 meses um sucesso?"

### Fase 2: Dias 30-60 — Construa relações e mostre entrega incremental

**Objetivo:** ganhar confiança e mostrar que você executa.

- ✅ Identifique uma "quick win" — algo pequeno que você pode melhorar rapidamente
- ✅ Participe ativamente das reuniões com perspectiva da sua área anterior (o cruzamento de visões é seu diferencial)
- ✅ Construa alianças fora do seu time direto
- ✅ Solicite feedback ao gestor: "Estou seguindo na direção certa?"

### Fase 3: Dias 60-90 — Entregue valor, defina sua marca interna

**Objetivo:** consolidar resultados e projetar os próximos 6 meses.

- ✅ Apresente a "quick win" de forma visível (relatório, email ao gestor, breve apresentação)
- ✅ Proponha algo maior para os próximos 3 meses, baseado no que aprendeu
- ✅ Formalize metas com seu gestor para o semestre

## Como comunicar sua transição internamente

Você não precisa esconder que veio de outra área — isso é um ativo. Quando oportuno, use frases como:

> *"Na minha experiência anterior em [área], aprendemos que [insight]. Aqui, isso poderia se aplicar como [solução]."*

Essa frase:
- Destaca seu background diferenciado
- Mostra que você já integrou a nova realidade
- Cria valor com perspectiva externa

## Checklist dos 90 dias

| Semana | Ação prioritária |
|--------|-----------------|
| 1-2 | Reuniões 1:1 com todos do time |
| 3-4 | Mapeamento de stakeholders e processos |
| 5-6 | Identificar "quick win" e executar |
| 7-8 | Feedback formal do gestor |
| 9-10 | Entregar quick win e comunicar resultado |
| 11-12 | Apresentar plano para os próximos 90 dias |

## Síndrome do impostor na transição

É normal se sentir "menos qualificado" do que os colegas que têm anos naquela área. Estratégias para lidar:

1. **Liste suas conquistas dos primeiros 30 dias** toda semana — você está fazendo mais do que percebe
2. **Lembre que você foi contratado sabendo da transição** — a empresa aceitou o risco conscientemente
3. **Contribua com sua perspectiva única** — o que parece "óbvio" para você pode ser inovador para a equipe`,
      },
    ],
  },
  {
    id: 8,
    title: 'Marca Pessoal Digital',
    desc: 'Construa uma presença online que trabalha por você 24h, atraindo oportunidades mesmo quando não está buscando.',
    duration: '4h',
    icon: '🌟',
    isPro: true,
    color: { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700', icon: 'bg-purple-500' },
    lessons: [
      {
        id: '8-1',
        title: 'O que é marca pessoal e por que importa para sua carreira',
        duration: '25 min',
        content: `# O que é marca pessoal e por que importa

## A virada no mercado de trabalho

Profissionais com marca pessoal forte recebem **3x mais abordagens de recrutadores** e conseguem salários **20-30% acima da média** em suas áreas. Não é sobre ego — é sobre visibilidade estratégica.

## O que é marca pessoal profissional?

Sua marca pessoal é a resposta à pergunta: *"O que as pessoas pensam quando ouvem seu nome no contexto profissional?"*

Ela é formada por:
- **Competências** que você domina e é reconhecido por
- **Perspectiva única** que você traz sobre sua área
- **Presença** onde seu público está (online e offline)
- **Consistência** na forma como você se comunica

## Os 4 pilares da marca pessoal digital

### 1. Clareza: quem você é e para quem
Antes de construir qualquer coisa online, defina:
- **Seu nicho**: Marketing para SaaS B2B? Data Science para finanças? UX para e-commerce?
- **Seu público-alvo**: recrutadores de empresas de tecnologia? Gestores de startups?
- **Seu diferencial**: o que você tem que outros na mesma área não têm?

### 2. Conteúdo: o que você compartilha
Você não precisa ser um criador de conteúdo profissional. Basta ser consistente em compartilhar:
- Insights da sua área
- Lições de projetos e erros
- Opiniões sobre tendências
- Cases de problemas que resolveu

### 3. Plataforma: onde você está presente
Concentre-se em 1-2 plataformas inicialmente:
- **LinkedIn**: para a maioria das áreas corporativas (B2B, tech, finanças, RH)
- **GitHub**: para desenvolvedores
- **Behance/Dribbble**: para designers
- **Medium/Substack**: para quem escreve bem e quer audiência mais ampla
- **Instagram/TikTok**: para áreas criativas e B2C

### 4. Consistência: frequência que você sustenta
Uma publicação por semana consistente vale mais que 10 publicações seguidas de 3 meses de silêncio.

## O paradoxo da invisibilidade

Muitos profissionais talentosos ficam anos numa carreira estagnada porque são invisíveis. O mercado não premia necessariamente os mais competentes — premia os mais **visíveis e confiáveis**.

> "Sua reputação online trabalha para você mesmo quando você está dormindo." — Gary Vaynerchuk

## Por onde começar: o mínimo viável

Se você não sabe por onde começar, faça apenas isso esta semana:
1. Atualize a foto e o título do LinkedIn
2. Escreva um post de 3 parágrafos sobre algo que aprendeu no trabalho este mês
3. Comente com profundidade em 3 posts de referências da sua área

Isso leva 2 horas e já coloca você na frente de 90% dos profissionais da sua área.`,
      },
      {
        id: '8-2',
        title: 'Portfolio digital: vitrine profissional que converte',
        duration: '35 min',
        content: `# Portfolio digital: vitrine profissional que converte

## Por que um portfolio vale mais que o CV

O CV diz o que você fez. O portfolio **mostra como você pensa e o que você entrega**. Recrutadores que veem um bom portfolio tomam a decisão de chamar para entrevista em minutos.

## Portfolios por área profissional

### Tecnologia (Desenvolvimento)
**Plataforma:** GitHub + site pessoal opcional

O que deve ter no GitHub:
- ✅ **README.md** em cada repositório relevante (explique o problema, sua solução e o impacto)
- ✅ **Projetos pessoais reais** — não apenas exercícios de curso
- ✅ **Contribuições open source** — mesmo pequenas (documentação, bug fixes)
- ✅ **GitHub Pages** com 1-2 projetos ao vivo que qualquer pessoa pode testar

Estrutura do README perfeito:
\`\`\`markdown
## Nome do Projeto
**Problema que resolve:** [1 frase]
**Tecnologias:** React, Node.js, PostgreSQL
**Demo ao vivo:** [link]
**O que aprendi:** [2-3 aprendizados técnicos]
\`\`\`

### Design (UX/UI, Branding)
**Plataforma:** Behance, Dribbble, ou site próprio (Framer, Webflow)

O que incluir:
- Mínimo 3 cases completos com **antes/depois e processo**
- Para cada case: problema do usuário → pesquisa → wireframes → solução → resultados
- Métricas se possível (taxa de conversão aumentou X%, tempo na tarefa reduziu Y%)

### Marketing e Conteúdo
**Plataforma:** Medium, Notion público, ou site próprio

Mostre:
- Campanhas que você gerenciou (resultados de CTR, conversão, ROI)
- Artigos que escreveu (com número de leitores/shares)
- Estratégias que desenvolveu e seus resultados

### Finanças, Jurídico, Consultoria
**Plataforma:** LinkedIn + artigos publicados

Mostre:
- Artigos técnicos sobre casos ou tendências da área
- Apresentações publicadas no SlideShare
- Projetos de análise com dados públicos (Excel, Power BI, Tableau)

## Criando um site pessoal sem programar

Ferramentas gratuitas/baratas:
- **Notion + Super.so**: site simples a partir de uma página Notion
- **Framer**: drag-and-drop com animações profissionais
- **Webflow**: para designers que querem controle total
- **GitHub Pages + Jekyll**: para devs (gratuito)
- **Carrd**: para landing pages pessoais simples

Domínio: compre **seunoMe.com** (R$40-60/ano) para profissionalismo.

## Estrutura de um site pessoal eficaz

\`\`\`
/ → Hero: quem você é + CTA (LinkedIn/contato)
/sobre → Sua história + especialidades + valores
/trabalho → 3-5 cases ou projetos com resultados
/artigos → Conteúdo que você já escreveu
/contato → Email + LinkedIn + formulário simples
\`\`\`

## O portfolio em constante atualização

Erro comum: criar o portfolio e esquecer. Planeje:
- Adicionar 1 novo case a cada 3-4 meses
- Atualizar resultados de cases existentes
- Remover projetos antigos que não representam seu nível atual`,
      },
      {
        id: '8-3',
        title: 'Criando conteúdo que atrai oportunidades (sem ser influencer)',
        duration: '30 min',
        content: `# Criando conteúdo que atrai oportunidades

## Você não precisa ser influencer

A maioria das pessoas imagina que construir marca pessoal exige ter milhares de seguidores ou postar diariamente. Isso é mito.

Para atrair oportunidades profissionais, você precisa de:
- **50-200 conexões certas** (decisores e recrutadores da sua área)
- **1 post por semana** com conteúdo genuinamente útil
- **Consistência por 3-6 meses**

## Os 5 tipos de conteúdo que funcionam

### 1. Lição aprendida
*"Errei em um projeto esta semana e aprendi isso:"*
→ Autenticidade + utilidade. Funciona muito bem.

### 2. Desmistificação
*"Todo mundo fala em [conceito X], mas na prática funciona assim:"*
→ Você usa seu conhecimento prático para simplificar algo complexo.

### 3. Case pessoal com resultado
*"Implementamos [estratégia Y] e o resultado foi [Z]. Aqui está como:"*
→ Prova social + autoridade + utilidade.

### 4. Perspectiva sobre tendência
*"[Tendência da área] está crescendo. Minha visão sobre o impacto:"*
→ Posicionamento como pensador estratégico.

### 5. Dúvida genuína (engajamento)
*"Estou em dúvida sobre [X] e [Y]. O que você faria na minha situação?"*
→ Gera comentários e exposição ao algoritmo.

## Estrutura do post que performa

\`\`\`
LINHA 1: Gancho forte (pergunta, afirmação ousada, número surpreendente)

LINHA 2-3: Desenvolvimento (contexto, problema, tensão)

LINHA 4-8: Corpo principal (3-5 pontos numerados ou parágrafos curtos)

LINHA 9: CTA suave ("O que você acha?" / "Alguma vez aconteceu com você?")
\`\`\`

**Exemplo real:**

> Passei 6 meses enviando CV sem retorno. Então mudei 1 coisa e recebi 5 entrevistas em 2 semanas.
>
> Não mudei o cargo que buscava. Não fiz curso novo. Apenas parei de usar o mesmo CV para todas as vagas.
>
> Aqui estão os 3 ajustes que fiz em cada candidatura:
> 1. Copiei o título exato da vaga no meu CV (ATS trick)
> 2. Adicionei 2-3 palavras-chave da descrição nas minhas experiências
> 3. Reescrevi o resumo para mencionar o setor da empresa
>
> O ATS não é inimigo — é um sistema com regras. Quando você aprende as regras, passa por ele.
>
> Alguém passou por isso também?

## Calendário editorial mínimo

| Semana | Tipo de conteúdo |
|--------|-----------------|
| 1 | Lição aprendida recente |
| 2 | Case com resultado (mesmo pequeno) |
| 3 | Tendência da área + sua perspectiva |
| 4 | Dúvida ou pergunta para a rede |

## O que postar quando não tem ideia

Recursos de ideias:
- **Newsletter da sua área** → transforme um insight em post próprio
- **Reunião ou projeto da semana** → o que foi surpreendente?
- **Erros que cometeu** → lições são sempre interessantes
- **O que ensinou um colega** → se você explicou algo a alguém, pode postar`,
      },
      {
        id: '8-4',
        title: 'Eventos, palestras e podcasts: como se tornar referência',
        duration: '30 min',
        content: `# Eventos, palestras e podcasts: tornando-se referência

## O poder do offline na era digital

A presença em eventos multiplica a marca pessoal digital. Uma palestra de 20 minutos pode gerar mais conexões qualificadas do que 6 meses de posts no LinkedIn.

## Primeiros passos: começar pequeno e crescer

### Nível 1: Participante ativo (mês 1-3)
Antes de falar, apareça:
- Vá a meetups, conferências e eventos da sua área
- Faça perguntas no microfone — isso já te coloca no radar
- Conecte no LinkedIn com palestrantes e organizadores logo após o evento
- Escreva um post sobre o evento com seus principais aprendizados (marque os palestrantes)

### Nível 2: Facilitador e colaborador (mês 3-6)
- Proponha-se para apresentar um lightning talk (5-10 min) num meetup menor
- Organize ou coorganize um evento menor na sua cidade
- Escreva um artigo técnico que os organizadores podem compartilhar

### Nível 3: Palestrante recorrente (mês 6+)
- Submeta propostas para conferências maiores
- Crie um pitch de palestra (título + descrição de 200 palavras + o que o público aprende)
- Monte um "media kit" com sua bio, foto profissional e temas que domina

## Criando um pitch de palestra irresistível

Estrutura:
\`\`\`
TÍTULO: "[Resultado específico] em [tempo]: [método ou abordagem]"
Exemplo: "De 0 a 50k visitas orgânicas em 6 meses: a estratégia que ninguém conta"

DESCRIÇÃO:
- O problema que o público enfrenta (1 frase)
- O que você fez/descobriu/desenvolveu (1-2 frases)
- O que o público vai aprender (3 bullets)
- Por que VOCÊ é a pessoa certa para falar sobre isso (1 frase)
\`\`\`

## Podcasts: a oportunidade mais subestimada

Ser convidado de um podcast relevante coloca você na frente de centenas (às vezes milhares) de profissionais da área. E o conteúdo fica disponível para sempre.

**Como conseguir convites:**
1. Ouça os podcasts da sua área regularmente
2. Comente nos episódios com insights reais (não apenas "ótimo episódio!")
3. Conecte no LinkedIn com o host
4. Envie uma mensagem direta: *"Ouço seu podcast há X meses. Tenho uma perspectiva sobre [tema] que pode interessar seus ouvintes. Posso te enviar uma proposta de episódio de 2 parágrafos?"*

**O que propor:**
- Um caso concreto com resultados mensuráveis
- Uma perspectiva contrária a algo que todos aceitam na área
- Um método que você desenvolveu e testou

## Construindo a reputação de longo prazo

A consistência bate a intensidade. Um evento por mês durante 1 ano constrói uma rede muito mais sólida do que 10 eventos num mês só.

Defina seu ritmo sustentável:
- Eventos presenciais: 1-2 por mês
- Publicações online: 1-2 por semana
- Podcast/entrevista: 1 por trimestre (meta realista para começar)`,
      },
      {
        id: '8-5',
        title: 'Métricas de marca pessoal: o que medir e como acelerar',
        duration: '25 min',
        content: `# Métricas de marca pessoal: o que medir e como acelerar

## Por que medir a marca pessoal?

"O que não se mede, não se gerencia." Isso vale para a marca pessoal também. Sem métricas, você não sabe o que está funcionando e continua no escuro.

## As métricas que importam (e as que são vaidade)

### Métricas de vaidade (não se preocupe tanto)
- Número total de seguidores/conexões
- Curtidas nos posts
- Visualizações de perfil no total

### Métricas que importam
| Métrica | O que indica |
|---------|-------------|
| Taxa de resposta das mensagens | Qualidade das suas abordagens |
| Abordagens de recrutadores/mês | Visibilidade real no mercado |
| Convites para eventos/entrevistas | Autoridade percebida |
| Alcance médio dos últimos 5 posts | Saúde do conteúdo |
| Novas conexões qualificadas/semana | Crescimento da rede relevante |

## Diagnóstico atual: faça agora

Responda estas perguntas:
1. **Quantos recrutadores me abordaram nos últimos 3 meses?** (se zero, há problema de visibilidade)
2. **Quando alguém pesquisa meu nome no Google, o que aparece?** (LinkedIn? Nada? Algo negativo?)
3. **Meu LinkedIn aparece nas buscas para minha área?** (teste buscando "[sua cidade] + [seu cargo]")
4. **Nos últimos 6 meses, consegui oportunidades pela rede?** (freela, indicação, convite para processo)

## Plano de 90 dias para acelerar

### Dias 1-30: Fundação
- [ ] Perfil LinkedIn 100% completo e otimizado
- [ ] Primeiro post publicado
- [ ] 50 novas conexões qualificadas (recrutadores, líderes da área, pares)
- [ ] Portfolio básico online (mesmo que simples)

### Dias 30-60: Consistência
- [ ] 8 posts publicados (2/semana)
- [ ] 1 comentário profundo em post de referência/dia
- [ ] 1 evento presencial ou virtual participado
- [ ] 100 novas conexões qualificadas

### Dias 60-90: Alavancagem
- [ ] 16 posts publicados no total
- [ ] 1 artigo longo publicado (400+ palavras)
- [ ] 1 proposta de palestra ou participação em podcast enviada
- [ ] Mensurar: quantas abordagens de recrutadores vs. os primeiros 30 dias?

## Aceleradores que funcionam

**1. Colaboração com pares:**
Faça posts conjuntos ou menções cruzadas com 2-3 colegas. O alcance se multiplica.

**2. Consistência horária:**
Posts publicados sempre no mesmo horário performam melhor (terça-quinta, 7h-9h ou 12h-13h são os picos no LinkedIn BR).

**3. Responder TODOS os comentários:**
Nas primeiras horas após publicar, responda cada comentário. Isso sinaliza ao algoritmo que o post é relevante e aumenta o alcance organicamente.

**4. Newsletter como backup:**
Se construir uma newsletter (mesmo pequena), você tem uma audiência que depende de você, não de algoritmos.`,
      },
    ],
  },
  {
    id: 9,
    title: 'Organização e Mentalidade na Busca de Emprego',
    desc: 'Transforme sua busca de emprego num processo gerenciável com sistema, foco e resiliência emocional.',
    duration: '3h 30min',
    icon: '🧠',
    isPro: true,
    color: { bg: 'bg-teal-50', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-700', icon: 'bg-teal-500' },
    lessons: [
      {
        id: '9-1',
        title: 'CRM pessoal: organize suas candidaturas como um profissional',
        duration: '30 min',
        content: `# CRM pessoal: organize suas candidaturas como um profissional

## O problema da busca desorganizada

A maioria das pessoas busca emprego assim: abre o LinkedIn, acha uma vaga interessante, envia o CV, fecha o LinkedIn. Repete. Sem controle do que enviou, para quem, quando, qual foi a resposta.

Resultado: follow-up na hora errada, duplicação de candidaturas, oportunidades perdidas por esquecimento.

## O CRM pessoal: seu centro de controle

CRM (Customer Relationship Management) é o sistema que as empresas usam para gerenciar clientes. Na busca de emprego, **as empresas são seus "clientes" e as vagas são suas "oportunidades"**.

## Template de CRM no Notion/Planilha

| Campo | Descrição |
|-------|-----------|
| **Empresa** | Nome da empresa |
| **Cargo** | Título exato da vaga |
| **Fonte** | LinkedIn, Indeed, indicação, etc. |
| **Data de envio** | Quando você candidatou |
| **Status** | Em análise / Triagem / Entrevista / Oferta / Descartado |
| **Próxima ação** | Follow-up em DD/MM, preparar case, etc. |
| **Contato** | Nome do recrutador/gestor + LinkedIn |
| **Notas** | Impressões, o que pesquisou, detalhes da empresa |
| **Salário estimado** | Range da vaga ou do mercado |
| **Prioridade** | Alta / Média / Baixa |

## Configurando no Notion (gratuito)

1. Crie uma página "Busca de Emprego 2025"
2. Adicione uma database (tabela) com os campos acima
3. Crie visualizações por status (Kanban estilo "pipeline de vendas"):
   - **Para candidatar** → **Candidatura enviada** → **Triagem** → **Entrevista** → **Proposta** → **Aceito/Recusado**

## Configurando em planilha (Google Sheets)

Se preferir simplicidade, uma planilha com abas:
- Aba 1: Pipeline principal (todos os campos acima)
- Aba 2: Empresas-alvo (lista das que você quer trabalhar, mesmo sem vaga aberta)
- Aba 3: Contatos (nome, empresa, LinkedIn, última interação)

## Regras do CRM que funcionam

**Atualize em tempo real:** cada ação (envio, resposta, ligação) vai para o CRM imediatamente. Deixar para "depois" significa perder dados.

**Processe diariamente por 30 minutos:** bloco fixo no calendário (ex: 9h-9h30) só para a busca de emprego.

**Revisão semanal:** domingo de manhã, 15 minutos para revisar o pipeline e definir prioridades da semana.

## Follow-up estratégico com o CRM

Com o CRM, você sabe exatamente quando fazer follow-up:

- **3-5 dias** após candidatura: email ou mensagem LinkedIn
- **1 semana** após entrevista: agradecimento + lembrete suave
- **2 semanas** sem resposta após entrevista: follow-up final

Template de follow-up:
> *"Olá [Nome], candidatei-me para [cargo] em [data]. Continuo muito interessado na oportunidade e gostaria de saber se há novidades no processo. Fico à disposição para qualquer informação adicional. Obrigado!"*`,
      },
      {
        id: '9-2',
        title: 'Como lidar com rejeições e manter a energia na busca',
        duration: '35 min',
        content: `# Como lidar com rejeições e manter a energia na busca

## A realidade que ninguém conta

Numa busca de emprego ativa, você vai receber muito mais rejeições do que respostas positivas. Isso não é falha sua — é a matemática do processo.

Dados reais:
- Média de respostas a candidaturas online: **2-5%**
- Candidaturas necessárias para 1 entrevista: **15-30**
- Entrevistas necessárias para 1 oferta: **5-10**

Isso significa que você vai ouvir "não" dezenas de vezes antes do "sim". Quem entende isso chega ao "sim" muito mais rápido.

## Os 4 tipos de rejeição e o que fazer com cada

### Tipo 1: Silêncio total (a maioria dos casos)
O ATS filtrou automaticamente ou o recrutador não viu. **Não é pessoal.**

O que fazer:
- Revise seu CV para ATS (módulo 1)
- Ajuste as palavras-chave
- Tente outra via (LinkedIn, indicação)

### Tipo 2: "Não temos vagas no momento"
A empresa não está contratando para seu perfil agora. **É contextual, não definitivo.**

O que fazer:
- Registre a empresa no CRM para contato em 3-6 meses
- Peça para ser mantido na base de candidatos

### Tipo 3: "Avançamos com outro candidato"
Você chegou perto mas não foi escolhido. **É o tipo mais doloroso mas mais valioso.**

O que fazer:
- Agradeça e peça feedback: *"Você poderia compartilhar o que poderia ter sido diferente da minha parte? Seria muito valioso para meu desenvolvimento."*
- Nem sempre respondem, mas quando respondem, é ouro puro

### Tipo 4: Feedback negativo direto
O recrutador aponta algo específico. **É presente valioso — use-o.**

O que fazer:
- Ouça sem defensividade
- Analise se é algo que você pode e quer mudar
- Ajuste e melhore para as próximas

## A mentalidade dos atletas de alto rendimento

Atletas de elite treinam para aceitar a derrota como parte do processo. O corredor de maratona que desiste na primeira crise de maratona nunca chega ao km 42.

Estratégias práticas:
1. **Desvincule resultado de valor pessoal:** você não é o cargo. A rejeição é sobre o fit — não sobre seu valor como pessoa
2. **Comemore as ações, não os resultados:** "enviei 5 candidaturas hoje" é algo que você controla; "recebi resposta" não é
3. **Mantenha rituais de recuperação:** exercício, hobbies, conversas com pessoas próximas — não torne a busca a única coisa na sua vida
4. **Limite o tempo diário de busca ativa:** 2-3 horas focadas são mais eficazes (e menos desgastantes) do que 8 horas de rolagem ansiosa de vagas

## Semáforo emocional: autorregulação na busca

Toda semana, avalie seu estado:

🟢 **Verde:** energia boa, esperança presente, produtivo → continue com o ritmo atual

🟡 **Amarelo:** cansaço presente, motivação oscilando → reduza o volume, foque na qualidade, dedique 1 dia a atividades que recarregam

🔴 **Vermelho:** exaustão, desesperança, não consegue agir → pause a busca ativa por 3-5 dias, reconecte-se com sua rede social, considere conversar com alguém de confiança

## Journaling para processar a busca

Escrever sobre a busca ajuda a processar e manter perspectiva. Reserve 10 minutos antes de dormir para:
1. **O que funcionou hoje?** (sempre há algo)
2. **O que aprendi?** (mesmo que seja "aprendi o que não fazer")
3. **Qual é o próximo passo concreto?** (termina o dia com clareza)`,
      },
      {
        id: '9-3',
        title: 'Plano semanal estruturado: 15h para quem ainda trabalha, 30h para quem está disponível',
        duration: '25 min',
        content: `# Plano semanal estruturado para a busca de emprego

## O erro mais comum: buscar "quando der"

Quem busca emprego "quando der tempo" geralmente não sai do lugar. A busca eficaz requer **blocos fixos de tempo** com atividades específicas — como qualquer projeto profissional.

## Plano A: para quem ainda está empregado (15h/semana)

### Segunda e Quarta — Pesquisa e candidaturas (2h por dia)
- 1h: Pesquisa de vagas + análise de fit
- 30min: Personalizar CV e carta para 1-2 vagas
- 30min: Atualizar CRM e verificar follow-ups pendentes

### Terça e Quinta — Networking (1h por dia)
- 30min: Mensagens personalizadas no LinkedIn (4-5 por sessão)
- 30min: Responder mensagens + comentar em posts da área

### Sexta — Desenvolvimento e marca pessoal (2h)
- 1h: Escrever ou editar 1 post para LinkedIn
- 1h: Aprendizado (curso, artigo, podcast da área)

### Sábado — Revisão semanal (1h)
- Atualizar CRM com status de todas as candidaturas
- Definir 3 prioridades para a próxima semana
- Celebrar ações executadas (não resultados)

## Plano B: para quem está disponível em tempo integral (30h/semana)

### Segunda — Planejamento e pesquisa (6h)
- Manhã (3h): Revisão do CRM + pesquisa de 10-15 novas vagas + seleção das top 5
- Tarde (3h): Personalizar candidaturas para as top 5

### Terça — Candidaturas + networking ativo (6h)
- Manhã (2h): Finalizar e enviar candidaturas personalizadas
- Tarde (4h): Networking — LinkedIn, emails de contato, follow-ups

### Quarta — Desenvolvimento e preparação (5h)
- Manhã (2h): Preparação para entrevistas (pesquisar empresas no pipeline)
- Tarde (3h): Desenvolvimento: cursos, projetos para portfolio, certif.

### Quinta — Networking presencial + conteúdo (5h)
- Manhã (2h): Eventos, meetups, ligações para contatos da rede
- Tarde (3h): Criar 1 post para LinkedIn + engajamento na plataforma

### Sexta — Revisão, ajustes e autocuidado (4h)
- Manhã (2h): Revisão semanal do CRM, análise do que funcionou
- Tarde (2h): Atividade leve (leitura, reflexão, planejamento pessoal)

## Métricas semanais para acompanhar

| Métrica | Meta mínima (Plano A) | Meta mínima (Plano B) |
|---------|-----------------------|-----------------------|
| Candidaturas enviadas | 5-8 | 15-20 |
| Mensagens de networking | 10-15 | 25-35 |
| Follow-ups enviados | 3-5 | 8-12 |
| Horas de preparação | 2h | 5h |
| Posts publicados | 1 | 2 |`,
      },
      {
        id: '9-4',
        title: 'Armadilhas mentais que sabotam a busca de emprego',
        duration: '25 min',
        content: `# Armadilhas mentais que sabotam a busca de emprego

## O sabotador interno

A maior barreira na busca de emprego não é o mercado — é o que acontece dentro da nossa cabeça. Identificar e neutralizar as armadilhas mentais mais comuns pode transformar sua busca completamente.

## As 7 armadilhas mais comuns

### 1. "Não estou pronto ainda"
Manifestação: fica fazendo mais um curso, mais um certificado, esperando o momento perfeito para candidatar.

Realidade: você nunca vai sentir 100% pronto. As empresas contratam potencial, não perfeição. Se você atende 60-70% dos requisitos, candidate-se.

**Antídoto:** defina uma data limite para cada candidatura. Se a vaga fecha em 7 dias e você tem o CV, candidate-se hoje.

### 2. "Só quero vagas perfeitas"
Manifestação: passa horas pesquisando a vaga ideal, candidata-se para pouquíssimas vagas.

Realidade: a vaga perfeita raramente existe no papel. Muitas das melhores oportunidades surgem de vagas que "não eram bem o que eu queria".

**Antídoto:** mantenha um mix: 20% vagas dos sonhos (reach), 60% vagas bem alinhadas (target), 20% vagas de segurança (safe).

### 3. "Se fosse bom, já teriam me chamado"
Manifestação: começa a questionar sua competência após rejeições.

Realidade: a maioria das rejeições tem a ver com fit, timing, ou ATS — não com sua competência.

**Antídoto:** lista semanal de 5 realizações profissionais suas (não importa o tamanho). Mantém a perspectiva.

### 4. "Não gosto de pedir ajuda"
Manifestação: tem vergonha de dizer que está buscando emprego, evita acionar a rede.

Realidade: 70-85% dos empregos são preenchidos por networking. Recusar essa ferramenta é competir de mãos atadas.

**Antídoto:** reframing: você não está pedindo favor — está dando à sua rede a oportunidade de ajudá-lo. As pessoas gostam de ajudar. Dar a elas essa chance é um presente.

### 5. "O LinkedIn não funciona para minha área"
Manifestação: ignora o LinkedIn porque "minha área não usa" ou "ninguém contrata por lá".

Realidade: o LinkedIn é usado para verificar todo candidato, independente de como a candidatura chegou. Mesmo que não candidate por lá, o recrutador vai pesquisar seu perfil.

**Antídoto:** mesmo que não use o LinkedIn para candidatar, mantenha o perfil otimizado e ativo.

### 6. "Vou esperar o mercado melhorar"
Manifestação: adia a busca porque "está difícil agora", "as empresas estão em freeze de contratação", etc.

Realidade: sempre há vagas sendo preenchidas, mesmo em mercados difíceis. As empresas continuam crescendo, se reorganizando, perdendo funcionários.

**Antídoto:** concentre-se no que você controla (qualidade das candidaturas, networking) em vez do que não controla (o mercado).

### 7. "Não mereço pedir mais"
Manifestação: aceita a primeira oferta com medo de não ter outra, não negocia salário.

Realidade: a empresa faz oferta esperando negociação. Não negociar é deixar dinheiro na mesa — e sinalizar baixa confiança em si mesmo.

**Antídoto:** sempre negocie, mesmo que seja só uma vez. O pior que pode acontecer é receberem "não" — a oferta não vai desaparecer por isso.`,
      },
      {
        id: '9-5',
        title: 'Como avaliar e decidir entre ofertas de emprego',
        duration: '25 min',
        content: `# Como avaliar e decidir entre ofertas de emprego

## O momento que todos esperam — e ninguém prepara

A maioria das pessoas passa meses preparando o CV, as entrevistas, o networking. E quando a oferta finalmente chega, toma a decisão em 48 horas com base principalmente no salário.

Esse é um dos erros mais caros da carreira.

## O framework de avaliação em 5 dimensões

### 1. Compensação total (não só o salário)
Não avalie apenas o salário base. Calcule o **pacote total**:

| Item | Empresa A | Empresa B |
|------|-----------|-----------|
| Salário base | R$10.000 | R$8.500 |
| Bônus (estimado) | R$0 | R$1.500/trim. |
| Vale refeição/alimentação | R$600 | R$1.000 |
| Plano de saúde | Básico | Premium |
| Participação nos lucros | Não | 2 salários/ano |
| **Total estimado/ano** | **R$127.200** | **R$138.000** |

### 2. Crescimento profissional
- Qual é o plano de crescimento para o cargo?
- A empresa tem histórico de promoções internas?
- Quem ocupa esse cargo hoje daqui a 3 anos? (pesquise no LinkedIn)
- Há budget para cursos e conferências?

### 3. Qualidade de vida e cultura
Perguntas para fazer antes de aceitar:
- Qual é a política de trabalho remoto/híbrido?
- Como é a carga de trabalho na prática? (pergunte a alguém que trabalha ou trabalhou lá)
- O gestor imediato tem boa reputação? (pesquise no Glassdoor, LinkedIn, conhecidos)
- A empresa tem histórico de demissões em massa?

### 4. Alinhamento com seus objetivos de longo prazo
- Em 3 anos, esse cargo/empresa te coloca onde você quer estar?
- O setor está crescendo ou em declínio?
- Esse cargo adiciona algo que você ainda não tem no CV?

### 5. Riscos e estabilidade
- A empresa é lucrativa ou está em fase de queima de caixa?
- Há rumores de venda, fusão ou reestruturação?
- O cargo foi criado recentemente ou está substituindo alguém? Por quê saíram?

## Como pesquisar antes de decidir

- **Glassdoor**: avaliações de funcionários, salários, entrevistas
- **LinkedIn**: perfis de quem trabalha ou trabalhou lá, trajetórias de carreira
- **Seu network**: conhece alguém que trabalha lá? Um café de 30 minutos vale ouro
- **Notícias**: pesquise a empresa no Google Notícias nos últimos 12 meses

## Quando pedir mais tempo para decidir

É normal e profissional pedir 3-5 dias para avaliar uma oferta. Use: *"Estou muito animado com a oportunidade e quero ter a certeza de tomar a melhor decisão. Posso ter até [data] para dar minha resposta?"*

## Quando recusar uma oferta com elegância

Se decidir recusar, seja rápido e gentil. O mercado é menor do que parece.

Template:
> *"Muito obrigado pela oferta e pelo tempo investido no processo. Após muito refletir, decidi seguir em outra direção que está mais alinhada ao meu momento profissional atual. Tenho grande respeito pela [empresa] e pelo time que conheci. Espero que possamos nos cruzar profissionalmente no futuro."*

Nunca queime pontes — o gerente de hoje pode ser seu cliente amanhã.`,
      },
    ],
  },
  {
    id: 10,
    title: 'Vagas Internacionais e Trabalho Remoto',
    desc: 'Acesse o mercado global: encontre vagas remotas em empresas internacionais, adapte seu perfil e negocie em dólar.',
    duration: '4h 30min',
    icon: '🌍',
    isPro: true,
    color: { bg: 'bg-cyan-50', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700', icon: 'bg-cyan-500' },
    lessons: [
      {
        id: '10-1',
        title: 'Onde encontrar vagas remotas internacionais: as melhores plataformas',
        duration: '30 min',
        content: `# Onde encontrar vagas remotas internacionais

## O mercado global de trabalho remoto

A pandemia normalizou o trabalho remoto e abriu uma oportunidade histórica para profissionais brasileiros: trabalhar para empresas dos EUA, Europa e Ásia sem sair do Brasil — e ganhar em dólar ou euro.

Um desenvolvedor pleno brasileiro ganhando R$12.000/mês pode ganhar USD 4.000-6.000/mês (R$20.000-30.000+) trabalhando remotamente para uma empresa americana.

## As plataformas por tipo de perfil

### Para qualquer área (corporativo)
- **LinkedIn**: filtre vagas por "Remote" + "Worldwide" na localização
- **Indeed.com** (versão americana): busque "[cargo] remote worldwide"
- **Glassdoor.com**: vagas + cultura da empresa + faixa salarial
- **Wellfound (AngelList)**: foco em startups, muito remote-friendly

### Para tecnologia (dev, data, devops)
- **Remote.co** 🔥: curado, apenas vagas remotas globais
- **We Work Remotely** 🔥: o maior job board exclusivamente remoto do mundo
- **Remotive.io**: foco em tech e startups
- **BuiltIn.com**: vagas em tech com filtro remoto
- **Turing.com**: plataforma que conecta devs LatAm com empresas dos EUA
- **Toptal**: para os top 3% (processo seletivo rigoroso, salários premium)

### Para design (UX/UI, branding)
- **Dribbble Jobs**: foco em design
- **Behance Jobs**: da Adobe
- **Working Not Working**: para criativos
- **Contra.com**: para freelancers e contratos remotos

### Para marketing, conteúdo e growth
- **Growth Collective**: especializado em marketing
- **Contra.com**: contratos de marketing digital
- **ClearVoice**: conteúdo e redação
- **Hubstaff Talent**: diversas áreas, foco remote

### Para freelance e contratos internacionais
- **Upwork**: maior plataforma de freelance do mundo
- **Fiverr**: projetos menores, preço fixo
- **Toptal**: premium, seleção rigorosa
- **99designs**: para designers

## Estratégia de busca eficaz

### 1. Defina seu perfil de vaga remota
Antes de buscar, responda:
- **Você quer CLT ou PJ/contrato?** (vagas internacionais geralmente são PJ/contrato)
- **Qual fuso horário tolera?** (sobreposição com EUA é 3-6h, Europa é mais tranquila)
- **Inglês em que nível?** (B2-C1 para a maioria das vagas; C1-C2 para posições sênior)

### 2. Configure alertas nas plataformas
Em vez de buscar manualmente todo dia, configure alertas por email em 3-4 plataformas com os filtros certos.

### 3. Priorize empresas "remote-first"
Empresas que nasceram remotas (vs. empresas que adotaram o remoto como exceção) têm cultura, processos e ferramentas muito melhores para colaboradores remotos.

Lista de empresas remote-first conhecidas: GitLab, Automattic (WordPress), Basecamp, Buffer, Doist (Todoist), Zapier, GitHub, InVision.

### 4. Pesquise startups em crescimento
Startups Series A-C costumam estar contratando agressivamente e são mais abertas a candidatos internacionais do que grandes corporações.

Use:
- **Crunchbase**: filtre startups que levantaram rodada recentemente
- **ProductHunt**: veja produtos em alta (os times costumam estar contratando)
- **Layoffs.fyi** (paradoxalmente): quando grandes empresas demitem, surgem vagas nas menores que os absorvem`,
      },
      {
        id: '10-2',
        title: 'CV em inglês: adaptações essenciais para o mercado global',
        duration: '35 min',
        content: `# CV em inglês: adaptações essenciais para o mercado global

## CV brasileiro vs. CV internacional: as diferenças que importam

O formato de CV varia significativamente entre mercados. O que funciona no Brasil pode trabalhar contra você no mercado americano ou europeu.

## Diferenças fundamentais

| Aspecto | Brasil | EUA/Internacional |
|---------|--------|------------------|
| **Foto** | Comum/esperada | **NÃO inclua** (questões anti-discriminação) |
| **Data de nascimento** | Comum | **NÃO inclua** |
| **Estado civil** | Comum | **NÃO inclua** |
| **Objetivo profissional** | Comum | Substituído por **Summary** (mais rico) |
| **Tamanho** | 2 páginas OK | 1 página (júnior/pleno), 2 páginas (sênior) |
| **Referências** | "Disponíveis sob solicitação" | Desnecessário mencionar |
| **Formatação** | Mais flexível | Conservador, foco em texto |

## A estrutura do CV internacional

### 1. Header (cabeçalho)
\`\`\`
Your Full Name
Location: São Paulo, SP, Brazil (Remote)
Email: name@email.com | LinkedIn: linkedin.com/in/yourname
GitHub/Portfolio: github.com/yourname (se aplicável)
\`\`\`

**Nota:** "Remote" na localização é essencial para vagas globais.

### 2. Professional Summary (3-4 linhas)
O equivalente ao objetivo profissional, mas focado em valor entregue:

❌ "Seeking a challenging position to apply my skills in software development."

✅ "Full-Stack Developer with 5+ years building scalable SaaS applications for B2B companies. Proven track record of reducing load times by 60% and scaling systems to 1M+ users. Open to full-remote opportunities with US/European companies."

### 3. Work Experience
Formato: **STAR resumido** — o que você fez e qual foi o impacto.

❌ "Responsible for managing the marketing team."

✅ "Led a 5-person marketing team, increasing MQLs by 40% YoY through SEO and paid media optimization. Managed a $200k annual budget with 3x ROI."

Regras:
- Use **verbos no passado** (Led, Built, Increased, Reduced, Managed)
- **Quantifique tudo** que puder (%, $, volume, tempo)
- Foco em **impacto**, não em responsabilidades

### 4. Skills
Para tech: liste tecnologias agrupadas por categoria
\`\`\`
Languages: Python, JavaScript, TypeScript
Frameworks: React, FastAPI, Django
Cloud: AWS (EC2, S3, Lambda), Google Cloud
Tools: Docker, GitHub Actions, Terraform
\`\`\`

### 5. Education
\`\`\`
Bachelor's in Computer Science — University of São Paulo (USP), 2018
\`\`\`

## Traduzindo seu currículo brasileiro

Cuidados especiais:

- **Faculdades**: nomeie a universidade em inglês quando tiver nome oficial ("University of São Paulo" para USP, "Getúlio Vargas Foundation" para FGV)
- **Empresas**: inclua o setor entre parênteses se não for conhecida: "Grupo Boticário (Beauty & Retail, R$5B revenue)"
- **Cargos**: adapte para equivalentes internacionais ("Analista Sênior" → "Senior Analyst")

## O Cover Letter internacional

No mercado americano, o cover letter é esperado e importante (diferente do Brasil onde raramente é lido com atenção).

Estrutura em 3 parágrafos:
1. **Hook**: por que você e por que essa empresa especificamente
2. **Prova**: seu caso mais relevante para a vaga, em 3-4 linhas
3. **Call-to-action**: demonstre interesse e disponibilidade

Tamanho: máximo 250-300 palavras. Menos é mais.`,
      },
      {
        id: '10-3',
        title: 'Entrevistas em inglês: preparação, confiança e armadilhas',
        duration: '35 min',
        content: `# Entrevistas em inglês: preparação, confiança e armadilhas

## A barreira que não é o inglês

A maioria dos brasileiros subestima seu inglês e superestima o nível exigido nas entrevistas. Empresas internacionais que contratam LatAm sabem que inglês será o segundo (ou terceiro) idioma do candidato.

O que elas avaliam:
- ✅ Você consegue se comunicar com clareza?
- ✅ Você entende o que está sendo perguntado?
- ✅ Você consegue explicar conceitos técnicos e de negócio?
- ❌ Você tem sotaque perfeito? (não importa)
- ❌ Você fala como nativo? (não é esperado)

## Preparação antes da entrevista

### 1. Pesquise a empresa em profundidade
Para entrevistas internacionais, a barra de pesquisa é alta:
- Site oficial + página de "About" e "Culture"
- Crunchbase/LinkedIn (para startups: últimas rodadas de funding)
- Blog de engenharia/produto (se houver)
- Glassdoor: reviews de funcionários e perguntas de entrevistas
- Últimas notícias (Google: "[empresa] site:techcrunch.com")

### 2. Prepare seu "Self-Introduction" (2 minutos)
A entrevista quase sempre começa com "Tell me about yourself." Prepare uma resposta de 90-120 segundos:

\`\`\`
ESTRUTURA:
1. Cargo atual + empresa (10 seg)
2. Trajetória resumida (20 seg)
3. Conquista mais relevante para essa vaga (30 seg)
4. Por que você está buscando essa oportunidade (20 seg)
5. Por que essa empresa especificamente (20 seg)

EXEMPLO:
"I'm currently a Senior Product Manager at Nubank, where I've been
leading our credit product for 2 years. Before that, I spent 3 years
at iFood in growth and monetization.

My biggest win at Nubank was leading the redesign of our credit limit
increase flow, which improved conversion by 35% and generated $8M in
additional revenue in Q1 alone.

I'm looking for my next challenge at a company where I can have broader
ownership — ideally at an earlier stage. I've been following [Company]
for 18 months and your approach to [specific thing] is exactly the kind
of product thinking I want to be part of."
\`\`\`

### 3. Prepare respostas STAR em inglês
Selecione 5-7 situações da sua carreira e prepare respostas STAR em inglês para cada. Temas essenciais:
- Conflict resolution (resolução de conflito)
- Leadership / Influence without authority
- Biggest failure and what you learned
- Delivering under pressure / tight deadline
- Dealing with ambiguity

## Durante a entrevista

**Se não entender a pergunta:**
- "Could you please repeat that?" (Pode repetir?)
- "Just to make sure I understood correctly — you're asking about [X]?" (Confirmar entendimento)
- "That's a great question. Let me take a moment to think." (Não fale imediatamente se precisar organizar o pensamento)

**Se perder o fio:**
- "Let me get back to your original question..."
- "The key point here is..."

**Para ganhar tempo sem silêncio constrangedor:**
- "That's a really interesting question..."
- "I'd approach this by..."
- "From my experience..."

## Perguntas para fazer ao final

Empresas internacionais esperam que você faça perguntas inteligentes. Nunca diga "I have no questions."

Perguntas que impressionam:
- "What does success look like for this role in the first 90 days?"
- "What's the biggest challenge the team is facing right now?"
- "How does the company make decisions about [área relevante ao cargo]?"
- "What do you enjoy most about working here?" (para o entrevistador que é funcionário)

## Entrevistas técnicas (para tech)

Se você é dev/data/devops, prepare-se para:
- **Coding interview**: LeetCode (médio), foco em arrays, strings, trees
- **System design**: como projetar um sistema escalável
- **Behavioral**: STAR em inglês (veja acima)

Recursos gratuitos:
- **NeetCode.io**: melhor recurso para coding interviews
- **Exponent**: para PM e system design
- **Pramp**: prática com parceiro real`,
      },
      {
        id: '10-4',
        title: 'Salário em dólar: benchmarks, negociação e como receber',
        duration: '35 min',
        content: `# Salário em dólar: benchmarks, negociação e como receber

## O mercado de salários internacionais para brasileiros

O trabalho remoto internacional abriu uma assimetria de salário que raramente existiu antes: você vive no Brasil (com custo de vida local) mas recebe salários calibrados para economias de maior custo.

## Benchmarks por área (USD/mês, 2024-2025)

### Tecnologia
| Nível | Desenvolvedor | Data Scientist | DevOps/Cloud |
|-------|--------------|----------------|--------------|
| Júnior | $2.000-3.500 | $2.500-4.000 | $2.500-3.500 |
| Pleno | $4.000-7.000 | $5.000-8.000 | $5.000-9.000 |
| Sênior | $7.000-12.000 | $8.000-14.000 | $8.000-15.000 |
| Staff/Principal | $12.000-20.000+ | $12.000-18.000+ | $12.000-20.000+ |

### Produto e Design
| Nível | Product Manager | UX/UI Designer |
|-------|----------------|----------------|
| Júnior | $2.500-4.000 | $2.000-3.500 |
| Pleno | $5.000-9.000 | $4.000-7.000 |
| Sênior | $9.000-15.000 | $7.000-12.000 |

### Marketing
| Nível | Growth/Digital | Content/SEO |
|-------|---------------|-------------|
| Pleno | $3.000-5.000 | $2.500-4.000 |
| Sênior | $5.000-9.000 | $4.000-7.000 |

*Fontes de referência: Levels.fyi, Glassdoor, survey de comunidades como Programadores BR*

## Estratégia de negociação para contratos internacionais

### 1. Nunca dê o primeiro número
A empresa vai perguntar "What are your salary expectations?" Responda:
> "I'd love to understand the compensation range for this role first. Could you share the budget you have in mind?"

### 2. Se tiver que dar um número
Use a âncora alta:
> "Based on my research for this type of role and my experience level, I'm targeting USD 6,000-7,500/month. Is that aligned with your range?"

### 3. Depois da oferta, sempre negocie
Quando receber a oferta:
> "Thank you so much for the offer. I'm very excited about this opportunity. The base compensation is slightly below what I was targeting based on my research. Is there flexibility to come to $X?"

### 4. Além do salário
Para contratos internacionais, negocie também:
- **Equipment budget** (notebook, monitor, periféricos)
- **Home office allowance** (internet, cadeira)
- **Learning budget** (cursos, conferências)
- **Time off** (férias — negociável em contratos PJ)
- **Review cycle** (quando sua remuneração é revisada)

## Como receber em moeda estrangeira no Brasil

### Opção 1: Conta internacional (mais simples)
- **Wise (ex-TransferWise)**: conta em USD/EUR, cartão, conversão com taxa próxima ao câmbio real
- **Nomad**: conta em dólar feita para brasileiros, integrada com contas BR
- **Payoneer**: muito usado para Upwork e plataformas de freelance

### Opção 2: Abertura de empresa (PJ - mais vantajoso a partir de ~$3k/mês)
Estruturas comuns:
- **MEI + conta Wise**: para valores menores (limite MEI)
- **Simples Nacional**: para valores maiores, carga tributária ~6-15%

### Opção 3: Plataformas intermediárias
Turing, Toptal e similares pagam em Real via depósito bancário — eliminam a burocracia cambial, mas ficam com uma margem.

## Impostos sobre rendimentos internacionais

Rendimentos do exterior são tributáveis no Brasil. O regime mais comum para autônomos:
- **Carnê-leão** (pessoas físicas): tributação mensal progressiva até 27,5%
- **PJ (empresa)**: em geral mais vantajoso acima de R$6-8k/mês brutos

Recomendação: consulte um contador especializado em "rendimentos do exterior" antes de fechar o primeiro contrato.`,
      },
      {
        id: '10-5',
        title: 'Vistos, relocation e trabalhando para o exterior sem sair do Brasil',
        duration: '25 min',
        content: `# Vistos, relocation e trabalhando para o exterior

## Três modalidades de trabalho internacional

### Modalidade 1: Trabalho remoto do Brasil
A mais comum e acessível. Você trabalha de casa para uma empresa estrangeira, como PJ ou via plataforma.

**Vantagens:**
- Sem burocracia de visto
- Custo de vida brasileiro com salário internacional
- Mantém vínculos sociais no Brasil

**Desvantagens:**
- Dependência de câmbio
- Sem benefícios locais do país da empresa
- Fuso horário pode ser desafiador (especialmente EUA Costa Oeste)

### Modalidade 2: Visto de trabalho (relocation)
A empresa te patrocina para trabalhar legalmente no país dela.

**Países mais acessíveis para brasileiros:**

🇵🇹 **Portugal** — E-4 Visto de Trabalho
- Português, sem barreira de idioma
- Salários em EUR (menor diferença vs. BR do que USD)
- Processo acessível para quem tem oferta de emprego
- Caminho para cidadania europeia em 5 anos

🇬🇧 **Reino Unido** — Skilled Worker Visa
- Mercado tech e fintech forte (especialmente Londres)
- Salários altos em GBP
- Inglês obrigatório

🇨🇦 **Canadá** — Express Entry / Work Permit
- Processo mais longo mas caminho para Residência Permanente
- Forte demanda por tech

🇩🇪 🇳🇱 🇮🇪 **Europa Central/Norte** — Blue Card (EU)
- Alemanha, Holanda, Irlanda: forte mercado tech
- Exige inglês (B2+) ou idioma local

### Modalidade 3: Nomadismo digital
Trabalhar remotamente viajando entre países com vistos de nômade digital.

**Países com visto nômade digital para brasileiros:**
- Portugal (D8 Visto Nômade Digital)
- Espanha (visto de teletrabajador)
- Croácia, Grécia, Bahamas, Barbados (programas específicos)

## Como conseguir relocation patrocinado

As empresas pagam relocation para profissionais que realmente querem. Para ter chance:

1. **Seja muito bom no que faz** — empresas só pagam relocation para perfis que não conseguem contratar localmente
2. **Candidate-se diretamente para escritórios internacionais** (não apenas remoto)
3. **Mencione disponibilidade para relocation explicitamente** no processo

Frase para usar na entrevista:
> "I'm fully open to relocating to [city]. I've done research on the area and I'm genuinely excited about making that transition."

## Recursos para quem quer morar fora

- **Vagas Portugal BR** (grupo no Facebook): maior comunidade de brasileiros buscando vagas em Portugal
- **Glassdoor**: filtro por localização + "visa sponsorship available"
- **Linkedin**: "Open to relocation" no seu perfil + filtrar vagas com visa sponsorship
- **Blind**: app para profissionais de tech, forte em vagas EUA com sponsorship

## O planejamento financeiro antes de sair

Se você vai para um país com custo de vida maior, planeje:
- **Reserva**: 3-6 meses de despesas no país de destino
- **Documentos**: RNE (registro), CPF internacional, apostilamento de diplomas
- **Previdência**: o que acontece com seu INSS/previdência privada
- **Declaração de saída fiscal**: necessária se ficar mais de 183 dias fora/ano`,
      },
    ],
  },
  {
    id: 11,
    title: 'IA na Busca de Emprego',
    desc: 'Use ferramentas de inteligência artificial para escrever CVs, preparar entrevistas e encontrar vagas com muito mais eficiência.',
    duration: '3h',
    icon: '🤖',
    isPro: true,
    color: { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700', icon: 'bg-violet-500' },
    lessons: [
      {
        id: '11-1',
        title: 'Como usar o ChatGPT e o Claude para melhorar seu CV',
        duration: '25 min',
        content: `# Como usar IA para melhorar seu CV

## Por que a IA mudou o jogo do CV

Ferramentas como ChatGPT (OpenAI) e Claude (Anthropic) permitem que qualquer candidato tenha acesso ao mesmo nível de feedback que antes exigia contratar um coach de carreira.

Mas a maioria usa errado: pede para a IA "escrever meu CV" e recebe um texto genérico que parece igual ao de mil outros candidatos.

A IA funciona como acelerador, não como substituta. Você fornece os dados reais; a IA te ajuda a estruturar, revisar e melhorar.

## Os 5 melhores usos da IA no CV

### 1. Transformar responsabilidades em resultados

Cole um bullet point fraco e peça para a IA melhorar:

**Prompt:** *"Meu bullet point de CV está assim: 'Responsável pela gestão da equipe de marketing.' Reescreva em formato de resultado mensurável, usando verbo de ação no passado. Preciso de 3 versões diferentes. Tenho esses dados reais: a equipe tinha 5 pessoas, entregamos 3 campanhas simultâneas e a taxa de abertura dos emails subiu de 18% para 27%."*

O segredo: forneça os dados reais. A IA não inventa — ela estrutura o que você já tem.

### 2. Identificar palavras-chave de uma vaga

**Prompt:** *"Cole aqui a descrição da vaga. Quais são as 15 palavras-chave mais importantes que eu deveria incluir no meu CV para passar no filtro ATS? Liste em ordem de prioridade."*

### 3. Adaptar o CV para uma vaga específica

**Prompt:** *"Aqui está meu sumário profissional atual: [cole o texto]. E aqui está a descrição da vaga: [cole a vaga]. Reescreva meu sumário para que ele ressalte as competências mais relevantes para ESTA vaga, sem inventar nada que não esteja no original."*

### 4. Verificar erros e inconsistências

**Prompt:** *"Revise este CV por: 1) erros ortográficos, 2) inconsistências de tempo verbal, 3) bullets que não têm verbo de ação, 4) bullets sem resultado mensurável. Liste todos os problemas encontrados com sugestões de correção."*

### 5. Criar diferentes versões para diferentes vagas

**Prompt:** *"Tenho um CV base. Preciso de 2 versões: uma focada em [área A] e outra em [área B]. Quais seções devo ajustar em cada versão?"*

## Ferramentas de IA úteis para candidatos

| Ferramenta | Melhor para | Preço |
|-----------|-------------|-------|
| **Claude.ai** | Textos longos, revisão, raciocínio complexo | Grátis (limitado) / Pro |
| **ChatGPT** | Criatividade, versatilidade | Grátis / Plus |
| **Perplexity** | Pesquisa sobre empresas antes de entrevistas | Grátis |
| **Gamma.app** | Criar apresentações de portfolio | Grátis |
| **Kickresume** | CV com IA integrada | Freemium |

## O que NÃO pedir para a IA fazer

- ❌ Inventar experiências ou resultados que você não tem
- ❌ Escrever o CV do zero sem fornecer seus dados reais
- ❌ Gerar um CV "padrão" sem personalização para a vaga
- ❌ Confiar cegamente na saída sem revisar — a IA comete erros

## Prompt mestre para revisão completa do CV

\`\`\`
"Você é um especialista em recrutamento com 15 anos de experiência. Revise meu CV abaixo com foco em:

1. Os 3 pontos mais fracos que podem causar rejeição imediata
2. Os 3 maiores diferenciais que devo destacar mais
3. 5 bullets que poderiam ser melhorados (mostre o antes e depois)
4. O sumário profissional está adequado? Reescreva se necessário
5. Alguma informação que deveria ser removida ou adicionada?

Aqui está meu CV:
[cole seu CV aqui]

Aqui está a vaga para a qual estou me candidatando:
[cole a vaga aqui]"
\`\`\``,
      },
      {
        id: '11-2',
        title: 'IA para preparação de entrevistas: simulando o recrutador',
        duration: '30 min',
        content: `# IA para preparação de entrevistas

## Simule o recrutador antes da entrevista real

Uma das aplicações mais poderosas da IA é simular entrevistas. Em vez de ficar imaginando o que vão perguntar, você pode praticar com um "recrutador virtual" que usa a descrição real da vaga.

## Protocolo de preparação com IA em 3 etapas

### Etapa 1: Mapeamento de perguntas prováveis

**Prompt:**
> *"Você é recrutador da [empresa]. Estou me candidatando para [cargo]. Aqui está a descrição da vaga: [cole]. Com base nessa vaga e no meu CV abaixo, liste as 10 perguntas que você mais provavelmente me faria. Inclua perguntas comportamentais (STAR), situacionais e técnicas. [cole seu CV]"*

### Etapa 2: Prática com feedback

**Prompt:**
> *"Vamos simular uma entrevista. Você é o recrutador. Faça as perguntas uma de cada vez. Após eu responder, dê feedback honesto sobre: 1) estrutura da resposta (STAR?), 2) especificidade (há números?), 3) o que ficou forte, 4) o que poderia melhorar. Comece com a primeira pergunta."*

### Etapa 3: Preparação para perguntas difíceis

**Prompt:**
> *"Quais são as perguntas mais difíceis que um candidato para [cargo] pode receber? Liste 10 e, para cada uma, explique por que é difícil e como uma resposta forte seria estruturada."*

## Simulando diferentes tipos de entrevistadores

A IA pode simular diferentes personalidades de entrevistadores:

**Entrevistador técnico:**
> *"Simule um gestor técnico de [área] que está testando profundidade de conhecimento. Faça perguntas técnicas progressivamente mais difíceis."*

**Entrevistador de cultura:**
> *"Simule um entrevistador focado em valores e cultura da empresa. A cultura da [empresa] é [descreva]. Faça perguntas que avaliem fit cultural."*

**Painel de entrevistas:**
> *"Simule um painel com 3 entrevistadores: um técnico, um de RH e um usuário final do produto/serviço que eu vou gerir. Reveze entre as perspectivas."*

## Usando IA para pesquisar empresas antes da entrevista

Diferente do Google, a IA pode sintetizar informações e ajudar você a pensar em perguntas inteligentes:

**Prompt para pesquisa pré-entrevista:**
> *"Com base no que você sabe sobre [empresa], me ajude a:
> 1. Identificar os 3 principais desafios que a empresa enfrenta hoje
> 2. Sugerir 5 perguntas inteligentes que posso fazer ao entrevistador
> 3. Pontuar o que é único nessa empresa vs. concorrentes
> 4. Identificar possíveis red flags que devo investigar na entrevista"*

## Feedback pós-entrevista com IA

Após cada entrevista real, use a IA para aprender:

> *"Acabei de ter uma entrevista para [cargo]. Aqui estão as perguntas que me fizeram e minhas respostas aproximadas: [descreva]. Analise o que fiz bem e o que poderia melhorar. Como posso usar essas informações para me preparar melhor para a próxima etapa do processo?"*

## Cuidados no uso de IA para entrevistas

- ✅ Use para **praticar** — o treino antes da entrevista real
- ✅ Use para **pesquisar** — entender a empresa e o cargo
- ❌ Não use durante a entrevista — os recrutadores percebem respostas geradas por IA
- ❌ Não memorize scripts — internalize os pontos-chave e responda naturalmente`,
      },
      {
        id: '11-3',
        title: 'Encontrando vagas com IA e automação',
        duration: '25 min',
        content: `# Encontrando vagas com IA e automação

## O problema da busca manual de vagas

Passar horas rolando o feed do LinkedIn em busca de vagas é ineficiente. A IA e ferramentas de automação permitem que você encontre oportunidades relevantes mais rápido e com menos esforço.

## Estratégias com IA para encontrar vagas

### 1. Buscas avançadas no LinkedIn com operadores booleanos

A IA pode te ajudar a criar queries de busca sofisticadas:

**Prompt:**
> *"Crie uma busca booleana para o LinkedIn Jobs que encontre vagas de [cargo] em empresas de [setor] em [cidade], excluindo [tipo que não quer]. Use operadores AND, OR, NOT."*

Exemplo de resultado:
> ("Product Manager" OR "Gerente de Produto" OR "PM") AND ("SaaS" OR "tech" OR "software") NOT ("estágio" OR "júnior")

### 2. Analisar adequação antes de candidatar

Antes de gastar tempo adaptando CV e carta, use a IA para avaliar o fit:

**Prompt:**
> *"Aqui está a descrição da vaga: [cole]. Aqui está meu CV: [cole]. Em escala de 1-10, qual é meu fit com essa vaga? Quais são os 3 pontos mais fortes e os 3 maiores gaps? Vale a pena me candidatar?"*

### 3. Alertas automatizados

Configure alertas em múltiplas plataformas para receber vagas assim que publicadas:
- **LinkedIn Jobs**: salve a busca e ative notificações por email
- **Google Jobs**: busque no Google com "vagas [cargo] [cidade]" e ative alertas
- **Indeed**: crie conta e configure alertas de email
- **Glassdoor**: configure alertas por empresa-alvo

### 4. Usando a IA como pesquisador de empresas

**Prompt para identificar empresas-alvo:**
> *"Estou procurando empresas de tecnologia em São Paulo com 50-500 funcionários que estejam crescendo e provavelmente contratando para [área]. Me liste 15 empresas que se encaixam nesse perfil com uma frase sobre por que cada uma é interessante."*

Depois verifique cada empresa no LinkedIn/Glassdoor — a IA pode ter dados desatualizados.

## Ferramentas de automação para busca de vagas

| Ferramenta | Função | Grátis? |
|-----------|---------|---------|
| **LinkedIn Job Alerts** | Alertas de novas vagas | ✅ |
| **Google Alerts** | Notificações de menções de empresas | ✅ |
| **Huntr** | CRM de candidaturas + extensão LinkedIn | Freemium |
| **Teal** | Rastreador + análise de CVs | Freemium |
| **Notion AI** | Organizar pesquisa de empresas | Pago |

## Usando IA para candidaturas espontâneas inteligentes

Ao invés de esperar vagas abertas, a IA pode ajudar a identificar o momento certo para candidatura espontânea:

1. **Configure alertas de notícias** sobre as empresas-alvo (Google Alerts com nome da empresa)
2. **Quando uma empresa anuncia crescimento, nova rodada de investimento, ou expansão** → é o momento ideal para candidatura espontânea
3. **Use a IA para personalizar** a mensagem de acordo com a notícia:

**Prompt:**
> *"A empresa X acabou de anunciar [notícia]. Escreva uma abertura de email de candidatura espontânea que conecte essa notícia com minha experiência em [área]. Seja natural e não excessivamente adulador."*`,
      },
      {
        id: '11-4',
        title: 'Ferramentas de IA específicas para cada etapa da carreira',
        duration: '25 min',
        content: `# Ferramentas de IA específicas para cada etapa

## O ecossistema de IA para candidatos em 2025

O mercado de ferramentas de IA para carreira cresceu muito. Mas nem todas valem o tempo. Esta lição mapeia as melhores por categoria.

## Escrita e revisão de documentos

### Para CV
- **Enhancv** (enhancv.com): CV builder com sugestões de IA para cada seção. Grátis com limitações.
- **Kickresume**: templates profissionais + correção gramatical por IA. Freemium.
- **Resume.io**: simples, clean, com sugestões de IA. Freemium.
- **ChatGPT / Claude**: para revisar e melhorar qualquer versão do CV com prompts específicos (veja Lição 11-1).

### Para cartas de motivação
- **Teal**: gera rascunho de cover letter baseado na vaga e no seu perfil. Freemium.
- **ChatGPT**: com o prompt certo, produz resultado superior à maioria das ferramentas específicas.

## Preparação para entrevistas

### Simuladores com IA
- **Yoodli** (yoodli.ai): pratica entrevistas com feedback em vídeo sobre fala, ritmo, pausas e conteúdo.
- **Interview Warmup** (Google): perguntas de entrevista por área + análise de resposta. Gratuito.
- **Pramp**: pratica com parceiro real + IA. Bom para tech. Gratuito.
- **Huru** (huru.ai): simulador com feedback detalhado. Para inglês.

## Pesquisa e inteligência de mercado

### Pesquisa sobre empresas
- **Perplexity.ai**: motor de busca com IA que sintetiza informações de múltiplas fontes. Muito melhor que Google para perguntas complexas como "quais são os desafios atuais da empresa X?"
- **ChatGPT**: para análises de setor e tendências (com data de corte — confirme informações críticas)

### Benchmarks salariais
- **Glassdoor Salary Tool**: dados reais de funcionários
- **LinkedIn Salary Insights**: disponível com Premium
- **Levels.fyi**: específico para tech

## LinkedIn com IA

- **LinkedIn Premium + AI**: sugestões de candidatura, mensagens, e análise de compatibilidade
- **Shield Analytics**: métricas detalhadas de posts e perfil
- **Taplio**: agendamento e análise de posts no LinkedIn (para quem cria conteúdo)

## Organização e produtividade

- **Notion AI**: organize toda sua pesquisa de empresas, notas de entrevistas e follow-ups com IA para resumir e categorizar
- **Teal**: CRM de candidaturas + análise de fit com IA. Um dos mais completos.
- **Huntr**: extensão do Chrome para salvar vagas e rastrear candidaturas diretamente do LinkedIn

## Stack recomendado (gratuito)

Se você está com budget limitado, este stack gratuito cobre 90% das necessidades:

1. **Claude.ai** (plano gratuito): revisão de CV e preparação de entrevistas
2. **Perplexity.ai**: pesquisa de empresas antes de entrevistas
3. **Google Interview Warmup**: prática de entrevistas
4. **Teal** (freemium): rastreamento de candidaturas + análise de CV
5. **LinkedIn Jobs** (gratuito): alertas de vagas + pesquisa de empresas`,
      },
      {
        id: '11-5',
        title: 'Ética e limites no uso de IA na busca de emprego',
        duration: '20 min',
        content: `# Ética e limites no uso de IA

## A pergunta que todos estão fazendo

"Usar IA para escrever meu CV é trapacear?" Esta é uma das perguntas mais frequentes entre candidatos hoje.

A resposta curta: **não** — mas com condições.

## O que é ético vs. o que não é

### ✅ Ético e recomendado
- Usar IA para melhorar textos que você escreveu com seus dados reais
- Pedir à IA para identificar gaps no CV e sugerir como preenchê-los
- Praticar entrevistas com um simulador de IA
- Usar IA para pesquisar sobre empresas e preparar perguntas
- Revisar ortografia e gramática com IA
- Adaptar mensagens de email ou LinkedIn com ajuda de IA

### ❌ Problemático e arriscado
- Inventar experiências ou resultados que não existem
- Pedir que a IA escreva respostas de entrevista que você vai memorizar sem entender
- Usar IA durante entrevistas ao vivo para responder em tempo real (antiético e percebido)
- Submeter testes técnicos ou cases de estudo usando IA sem transparência

### 🔴 Fora dos limites (pode encerrar processos)
- Criar projetos de portfolio inteiramente por IA e apresentar como próprios sem declarar
- Mentir sobre qualificações depois que a IA "sugeriu" incluir algo que você não domina

## Por que transparência é a melhor estratégia

O mercado está ciente do uso de IA. Muitas empresas (especialmente em tech) testam exatamente o que o candidato declarou no CV. Se você incluiu uma habilidade sugerida pela IA que não domina, vai ficar evidente na primeira conversa técnica.

A longevidade na carreira depende de reputação. Um processo encerrado por desonestidade pode afetar sua rede profissional de formas que você não prevê.

## Declaração de uso de IA: quando e como

Não existe obrigação legal de declarar que usou IA para escrever um CV. Mas se perguntado diretamente, seja honesto:

> "Usei IA como ferramenta de revisão e para estruturar melhor as informações. Todos os dados e experiências são meus, a IA me ajudou a comunicar melhor."

Isso é honesto, profissional e cada vez mais normalizado.

## O futuro do recrutamento com IA

Empresas já estão usando IA para triagem de CVs. Em breve, haverá entrevistas iniciais conduzidas por IA. A linha entre "uso ético" e "uso excessivo" vai continuar evoluindo.

O que não muda: **autenticidade, competência real e reputação** continuam sendo os ativos mais duráveis na carreira. Use a IA para amplificar o que você já é — não para criar uma versão fabricada de si mesmo.`,
      },
    ],
  },
  {
    id: 12,
    title: 'Freelance e Carreira Independente',
    desc: 'Descubra como construir uma carreira como freelancer ou consultor independente — clientes, precificação, contratos e escala.',
    duration: '4h',
    icon: '⚡',
    isPro: true,
    color: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700', icon: 'bg-orange-500' },
    lessons: [
      {
        id: '12-1',
        title: 'Freelance vs. CLT vs. PJ: escolhendo o modelo certo para você',
        duration: '25 min',
        content: `# Freelance vs. CLT vs. PJ: qual modelo é o certo para você?

## Os 3 modelos principais de trabalho no Brasil

### CLT (Carteira Assinada)
**O que é:** relação empregatícia formal com empresa. A empresa é responsável pelos encargos trabalhistas.

**Vantagens:**
- FGTS (8% do salário mensalmente)
- Férias remuneradas (1/3 adicional)
- 13º salário
- Seguro-desemprego em caso de demissão sem justa causa
- Plano de saúde geralmente incluído
- Estabilidade de renda

**Desvantagens:**
- Salário fixo (geralmente menor que PJ equivalente)
- Menos autonomia sobre quando e como trabalha
- Progressão de carreira dependente da empresa

### PJ (Pessoa Jurídica — contrato de prestação de serviços)
**O que é:** você tem uma empresa (MEI ou Simples Nacional) e presta serviços para uma ou mais empresas contratantes.

**Vantagens:**
- Remuneração bruta maior (compensando ausência de benefícios CLT)
- Mais flexibilidade (em muitos casos)
- Possibilidade de trabalhar para múltiplos clientes
- Dedução de despesas como pessoa jurídica

**Desvantagens:**
- Sem FGTS, férias ou 13º automático
- Responsabilidade fiscal própria (contador é essencial)
- Instabilidade se o contrato é cancelado
- "Pejotização": quando é CLT disfarçado, sem vantagens de nenhum dos dois

### Freelance (autônomo por projeto)
**O que é:** você executa projetos pontuais para diferentes clientes, sem vínculo contínuo.

**Vantagens:**
- Máxima flexibilidade
- Diversificação de clientes = menor risco
- Potencial de renda maior por hora trabalhada
- Autonomia total sobre projetos aceitos

**Desvantagens:**
- Renda irregular (meses bons e ruins)
- Você é responsável por captação, contratos, cobrança, impostos
- Sem benefícios de nenhum tipo
- Requer autogestão e disciplina

## A calculadora de equivalência CLT ↔ PJ

Para comparar uma oferta CLT com uma proposta PJ, use esta fórmula simplificada:

**Valor CLT equivalente ≈ Salário PJ bruto × 0,65 a 0,70**

Exemplo:
- Proposta PJ: R$15.000/mês
- Equivalente CLT: R$15.000 × 0,67 = **~R$10.000/mês**

Isso considera: impostos PJ (~15%), INSS (~11%), provisão de férias e 13º, período sem contrato.

## Como decidir qual modelo faz mais sentido

**Escolha CLT se:**
- Você está no início da carreira (precisa de estabilidade para aprender)
- Quer benefícios concretos (plano de saúde, FGTS para casa própria)
- Prefere foco 100% no trabalho sem lidar com gestão do negócio
- Tem perfil de risco mais conservador

**Escolha PJ/Freelance se:**
- Você tem competência específica de alta demanda
- Quer maior remuneração imediata
- Tem apetite para gerir seu próprio negócio
- Tem reserva financeira para os meses de transição

## A transição gradual: o caminho mais seguro

Para quem está em CLT e quer testar o freelance:
1. **Comece freelancing nas horas vagas** (fins de semana, noites) sem largar o emprego
2. **Valide que consegue clientes** antes de pular
3. **Monte 6 meses de reserva** antes de fazer a transição
4. **Formalize o negócio** (MEI é o início mais simples — até R$81k/ano)`,
      },
      {
        id: '12-2',
        title: 'Como encontrar seus primeiros clientes como freelancer',
        duration: '30 min',
        content: `# Como encontrar seus primeiros clientes como freelancer

## O problema do frango e do ovo

Clientes querem freelancers com portfólio. Portfólio exige clientes. Como sair desse ciclo?

Esta é a barreira que a maioria não consegue superar no freelance. Mas existe uma sequência testada.

## A sequência de captação para iniciantes

### Fase 1: Rede próxima (semanas 1-4)

Antes de qualquer plataforma, comece pelas pessoas que já te conhecem:

1. **Ex-empregadores e colegas de trabalho**: eles já sabem o que você entrega. Avise que você agora oferece serviços como freelancer.

2. **Amigos e família em contexto de negócio**: se um amigo tem empresa ou conhece dono de empresa, peça uma indicação.

3. **Professores e mentores**: especialmente se você fez cursos técnicos ou MBA.

Template de mensagem para rede próxima:
> *"Olá [Nome], acabei de estruturar minha atuação como freelancer de [área]. Estou aceitando novos clientes e pensei em você (ou se você conhece alguém que precise de [serviço]). Posso te enviar mais detalhes? Qualquer indicação ajuda muito."*

### Fase 2: Portfólio com projetos pro bono ou below-market (semanas 4-8)

Estratégias para construir portfólio:
- **ONG ou causa que você apoia**: ofereça seu serviço gratuitamente em troca de depoimento e permissão para usar o caso como portfólio
- **Projeto pessoal**: crie você mesmo um projeto que demonstre sua competência
- **Rate reduzido para cliente real**: ofereça 50-60% do valor normal para 1-2 clientes iniciais em troca de depoimento e referências

### Fase 3: Plataformas de freelance (mês 2-3)

Melhores plataformas por área:

| Área | Plataformas recomendadas |
|------|-------------------------|
| Desenvolvimento | Upwork, Toptal, 99Freelas |
| Design | 99designs, Workana, Fiverr |
| Marketing | Workana, Freelancer.com |
| Redação | Textbroker, Workana |
| Consultoria | Clarity.fm, Upwork |
| Qualquer área | Upwork (maior), Workana (BR), Freelancer |

**Estratégia nas plataformas:**
- Primeiro projeto: aceite um preço menor para construir avaliações
- Foque em nicho específico — generalist tem menos tração inicial
- Invista no perfil: foto profissional, bio detalhada, portfólio completo

### Fase 4: Inbound via conteúdo (mês 3+)

Publicar conteúdo especializado no LinkedIn atrai clientes que procuram exatamente o que você faz. Uma estratégia simples:
- 1-2 posts/semana sobre sua área de especialidade
- Foco em ensinar algo útil (não em vender)
- Mencione no perfil que você aceita projetos

Resultado: em 3-6 meses de consistência, recrutadores e empresas começam a aparecer organicamente.

## A conversa de vendas: convertendo interesse em projeto

Quando alguém demonstra interesse, não envie imediatamente uma proposta. Faça primeiro uma reunião de descoberta:

Perguntas para a reunião de descoberta:
1. "O que está tentando resolver com este projeto?"
2. "Como está sendo feito hoje? Qual é o problema com a forma atual?"
3. "Qual seria o resultado ideal daqui a 3 meses?"
4. "Qual é o prazo e o orçamento que têm em mente?"

Só depois de entender isso você apresenta uma proposta. Isso diferencia um freelancer profissional de um commodity.`,
      },
      {
        id: '12-3',
        title: 'Precificação: quanto cobrar pelos seus serviços',
        duration: '30 min',
        content: `# Precificação: quanto cobrar como freelancer

## Por que a maioria dos freelancers cobra de menos

O erro mais comum: precificar baseado em "quanto o cliente vai aceitar pagar" em vez de "quanto vale meu trabalho e minha hora".

A consequência é trabalhar muito, ganhar pouco e ainda não conseguir atrair clientes de qualidade (clientes que buscam o mínimo preço raramente são os melhores parceiros).

## Os 3 modelos de precificação

### Modelo 1: Por hora (hora trabalhada)

**Quando usar:** projetos difíceis de escopo, consultoria, suporte contínuo.

**Como calcular sua hora:**

1. Defina quanto quer ganhar por mês (ex: R$10.000)
2. Estime horas trabalhadas por mês (ex: 120h produtivas — não 160h, há overhead)
3. Some impostos, provisões e despesas (~30-35%): R$10.000 / 0,70 = R$14.300
4. Divide: R$14.300 / 120h = **~R$120/hora mínima**

Para estar no mercado competitivo, pesquise o que outros freelancers da sua área cobram. Fontes: Workana, grupos no Facebook/Slack da área, pesquisa direta.

### Modelo 2: Por projeto (escopo fechado)

**Quando usar:** projetos com entrega clara e escopo bem definido.

**Vantagem:** se você for eficiente, ganha mais por hora do que o modelo horário.

**Como calcular:**
1. Estime horas necessárias
2. Multiplique pelo valor/hora desejado
3. Adicione 20-30% de buffer para imprevistos
4. Adicione margem de negociação (você pode ceder 10-15% na negociação)

Exemplo: projeto de design de identidade visual
- Estimativa: 30h × R$120/h = R$3.600
- Buffer 25%: R$4.500
- Proposta: R$4.800 a R$5.500 (espaço para negociar)

### Modelo 3: Retainer (contrato mensal)

**Quando usar:** clientes que precisam de você de forma recorrente.

**Vantagem:** previsibilidade de renda. Você pode cobrar ligeiramente menos que projetos pontuais em troca da segurança.

Exemplo: R$3.000/mês para até 20h de trabalho.

## Como aumentar preços sem perder clientes

**Com clientes novos:** simplesmente comece cobrando mais. Você não precisa justificar.

**Com clientes existentes:** avise com antecedência (pelo menos 30 dias) e apresente o novo preço como parte do seu desenvolvimento profissional:
> *"Estou revisando minha tabela de preços para os próximos contratos. A partir de [data], meus projetos de [tipo] passarão para [novo valor]. Quero manter nossa parceria e por isso aviso com antecedência para você planejar."*

A maioria dos bons clientes aceita — especialmente se você entrega valor consistente.

## Ancoragem de preço

Quando apresentar proposta, sempre apresente 3 opções:
- **Básico:** escopo mínimo, menor preço
- **Recomendado:** escopo ideal, preço médio (o que você realmente quer vender)
- **Premium:** escopo expandido, maior preço

Isso move a conversa de "vou contratar?" para "qual opção?" — e a maioria escolhe a do meio.`,
      },
      {
        id: '12-4',
        title: 'Contratos, impostos e proteção legal para freelancers',
        duration: '25 min',
        content: `# Contratos, impostos e proteção legal

## Por que o contrato é obrigatório (mesmo com amigos)

"Confiamos um no outro" não paga aluguel. Contratos não são sobre desconfiança — são sobre clareza. Quando as expectativas estão escritas, conflitos raramente chegam à disputa.

## O que deve ter em todo contrato de freelance

### Cláusulas essenciais

**1. Partes (quem são):**
- Nome completo e CPF/CNPJ de ambos
- Endereço e dados de contato

**2. Escopo do trabalho:**
- Descrição detalhada do que será entregue
- O que NÃO está incluído (importante!)
- Número de revisões incluídas

**3. Prazo:**
- Data de início
- Datas de entrega das etapas (milestones)
- Data final de entrega

**4. Preço e forma de pagamento:**
- Valor total ou por etapa/hora
- Forma de pagamento (PIX, transferência, boleto)
- Cronograma: quando cada parcela é paga
- Multa por atraso no pagamento (2% + juros de 1%/mês é padrão)

**5. Propriedade intelectual:**
- Após pagamento integral, o cliente tem direito ao uso
- Antes do pagamento, você mantém os arquivos
- Você pode ou não usar o projeto no portfolio (defina)

**6. Confidencialidade (NDA):**
- Se o projeto envolve informações sensíveis do cliente

**7. Cancelamento:**
- Se o cliente cancelar, o que acontece com o valor já pago?
- Geralmente: a parte trabalhada é cobrada e não reembolsada

## Modelo de contrato gratuito

Existem modelos gratuitos no:
- **ContratosOnline.com.br**
- **SEBRAE** (sebrae.com.br tem modelos para MEI)
- **Grupos de freelancers** da sua área (Slack, Facebook, Discord)

Para projetos acima de R$5.000, vale investir em revisão de um advogado.

## Estrutura fiscal: MEI vs. Simples Nacional

### MEI (Microempreendedor Individual)
- Limite: R$81.000/ano (2024)
- Imposto fixo: ~R$70/mês (INSS + ISS/ICMS)
- **Ideal para:** freelancers iniciando com faturamento menor
- **Limitação:** não pode ter sócio, não pode ser empregado CLT ao mesmo tempo (algumas exceções)

### Simples Nacional (ME — Microempresa)
- Limite: R$4,8M/ano
- Imposto: ~6-15% sobre faturamento (varia por setor e faixa)
- **Ideal para:** faturamento acima do limite do MEI
- **Exige:** contador (R$200-500/mês, mas economiza mais)

### Quando a tributação vale a pena vs. CLT?

Regra geral: se você ganha mais de R$6.000-7.000/mês como freelancer de forma consistente, a estrutura PJ geralmente compensa vs. CLT equivalente, mesmo após impostos e sem benefícios.

## Proteção contra inadimplência

Estratégias para minimizar risco de não receber:
1. **Adiantamento obrigatório:** peça 30-50% antes de começar
2. **Pagamentos por etapa:** não entregue a próxima etapa sem receber a anterior
3. **Arquivo final apenas após quitação total:** entregue preview/baixa qualidade antes; arquivo final só pós-pagamento
4. **Multa contratual:** prevista no contrato (2% + 1%/mês)
5. **Carta registrada/email formal:** se não pagar, documente tudo para eventual ação judicial (Juizado Especial Cível — valores até R$20k sem advogado)`,
      },
      {
        id: '12-5',
        title: 'Escalando do freelance para consultoria e agência',
        duration: '25 min',
        content: `# Escalando do freelance para consultoria e agência

## O teto do freelancer solo

Todo freelancer chega a um ponto onde não consegue crescer mais sem mudar de modelo:
- Tem mais demanda do que consegue atender
- Não consegue aumentar o preço além de um certo ponto
- Quer ter mais impacto e variedade de trabalho

Esse é o momento de decidir: consultoria especializada ou agência.

## Do freelance para consultoria de alto valor

Em vez de vender horas, você vende **resultados e expertise**.

### A transição na prática

**Freelancer:** "Cobro R$150/hora para desenvolver websites."

**Consultor:** "Ajudo e-commerces a aumentar a taxa de conversão. Meu projeto de diagnóstico + implementação custa R$15.000 e meus clientes em média aumentam o faturamento em 30% em 3 meses."

Mesmo conhecimento, posicionamento completamente diferente.

### Como se posicionar como consultor

1. **Escolha um nicho vertical:** não "designer web", mas "design para clínicas de saúde" ou "UX para fintechs"
2. **Documente resultados:** crie cases com dados reais dos seus clientes
3. **Publique conteúdo especializado:** LinkedIn, blog, newsletter
4. **Eleve o ticket:** consultoria de alto valor começa em R$5.000-10.000 por projeto

### O pacote de consultoria

Estruture ofertas em vez de propostas únicas:
- **Diagnóstico:** R$2.000-5.000 — análise da situação atual, relatório com recomendações
- **Implementação:** R$8.000-25.000 — você executa o que recomendou
- **Retainer estratégico:** R$3.000-8.000/mês — você é o "consultor da casa"

## Do freelance para agência/estúdio

Se você quer escala com equipe, a agência é o caminho.

### A sequência de escala

1. **Subcontrate o que você não gosta ou não domina:** um designer pode contratar redator, dev, etc.
2. **Comece com 1-2 colaboradores de confiança** (outros freelancers que você pode chamar conforme demanda)
3. **Só contrate CLT quando a demanda for consistente e previsível**

### Os erros mais comuns na transição

❌ Contratar antes de ter demanda suficiente (custo fixo que quebra)
❌ Subcontratar sem ter processos claros (resultado inconsistente)
❌ Não aumentar o preço para cobrir a margem de quem você contrata
❌ Continuar fazendo tudo você mesmo mesmo tendo equipe (gargalo no fundador)

### Gestão de uma equipe pequena de freelancers

Ferramentas essenciais:
- **Notion / ClickUp**: gestão de projetos e briefs
- **Slack / Discord**: comunicação da equipe
- **Toggl**: controle de horas (para projetos por hora)
- **Contratos padronizados**: tenha um contrato para seus subcontratados`,
      },
    ],
  },
  {
    id: 13,
    title: 'Liderança e Carreira em Gestão',
    desc: 'Faça a transição de especialista para gestor com confiança — lidere equipes, gerencie conflitos e avance para cargos executivos.',
    duration: '4h',
    icon: '🏆',
    isPro: true,
    color: { bg: 'bg-rose-50', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700', icon: 'bg-rose-500' },
    lessons: [
      {
        id: '13-1',
        title: 'A transição de especialista para gestor: o que muda de verdade',
        duration: '30 min',
        content: `# A transição de especialista para gestor

## A armadilha da promoção

Ser o melhor programador não te torna automaticamente um bom gestor de programadores. Ser a melhor vendedora não garante que você saberá liderar um time de vendas.

Esta é a armadilha mais comum nas carreiras: a empresa promove o melhor especialista a gestor porque parece lógico — mas as competências são fundamentalmente diferentes.

Entender essa mudança antes de acontecer é o que separa gestores que prosperam dos que regridem.

## O que realmente muda

### Do especialista para o gestor: a inversão

| Especialista | Gestor |
|--------------|--------|
| Sucesso = seu próprio desempenho | Sucesso = desempenho da equipe |
| Faz o trabalho | Habilita outros a fazerem o trabalho |
| Conhecimento técnico é o ativo | Comunicação e gestão de pessoas são os ativos |
| Feedback é algo que você recebe | Feedback é algo que você dá (constantemente) |
| Soluciona problemas diretamente | Desenvolve pessoas para solucionarem problemas |
| Horizonte de dias/semanas | Horizonte de meses/semestres |

### A síndrome do "eu faço mais rápido"

O maior vício do novo gestor: fazer ele mesmo em vez de delegar. É compreensível — você é melhor que seu time em muitas coisas, pelo menos inicialmente.

Mas cada vez que você faz o trabalho em vez de ensinar o time a fazer, você:
1. Cria dependência (time não se desenvolve)
2. Se esgota (você tem mais work do que antes)
3. Rouba crescimento do colaborador
4. Sinaliza desconfiança para a equipe

**A regra:** se alguém pode fazer 70% tão bem quanto você, delegue e invista no 30% restante via feedback e treinamento.

## Os primeiros 90 dias como novo gestor

### Mês 1: Escute mais do que fale

- Reuniões 1:1 com cada membro do time (30 min / semanal)
- Pergunte: "O que está funcionando? O que não está? O que você mudaria?"
- Entenda os processos como eles existem AGORA, antes de propor mudanças
- Mapeie quem são os influenciadores informais da equipe

### Mês 2: Construa confiança e estabeleça ritmo

- Defina cadência de reuniões (1:1 semanais, reunião de time quinzenal)
- Comunique seu estilo de gestão: como você prefere trabalhar, o que espera
- Faça sua primeira entrega visível como gestor (não como especialista)
- Começe a dar feedback — mesmo que desconfortável

### Mês 3: Defina metas e métricas com o time

- Alinhe objetivos do time com objetivos da empresa (OKRs ou equivalente)
- Crie accountability: quem é responsável por quê
- Faça revisão da primeira avaliação de desempenho informal
- Identifique quem precisa de mais desenvolvimento e crie plano

## Perguntas essenciais para 1:1s eficazes

Os melhores gestores se destacam pela qualidade de suas perguntas:

- "O que está te travando? O que posso fazer para remover esses obstáculos?"
- "Você se sente valorizado pelo que está entregando?"
- "O que você quer aprender nos próximos 6 meses?"
- "Como está sua relação com o resto da equipe?"
- "Tem algo que eu esteja fazendo (ou não fazendo) que afeta seu trabalho?"

O 1:1 semanal de 30 minutos é o investimento mais impactante que um gestor pode fazer.`,
      },
      {
        id: '13-2',
        title: 'Como dar e receber feedback de forma eficaz',
        duration: '25 min',
        content: `# Como dar e receber feedback de forma eficaz

## Por que o feedback é a ferramenta mais subutilizada na gestão

Pesquisas mostram que a maioria dos funcionários prefere feedback negativo honesto a não receber feedback algum. Mas a maioria dos gestores evita conversas difíceis.

O resultado: problemas que poderiam ser resolvidos em 5 minutos se tornam demissões ou crises de performance 6 meses depois.

## O framework SBI (Situação-Comportamento-Impacto)

O SBI é o modelo mais prático para dar feedback difícil sem gerar defensividade.

**S — Situação:** descreva o contexto específico. Não generalize.
> ❌ "Você sempre chega atrasado às reuniões."
> ✅ "Na reunião com o cliente X na terça-feira passada..."

**B — Comportamento:** descreva o comportamento observável. Não julgue intenções.
> ❌ "Você foi desrespeitoso."
> ✅ "...você interrompeu o cliente 3 vezes enquanto ele falava..."

**I — Impacto:** descreva o impacto concreto do comportamento.
> ✅ "...e o cliente ficou visivelmente incomodado. Após a reunião, ele ligou para mim preocupado com a parceria."

**Encerre com pergunta aberta:**
> "Você tem alguma perspectiva sobre o que aconteceu que eu não esteja vendo?"

## Feedback positivo: tão importante quanto o negativo

Muitos gestores só dão feedback quando algo vai mal. Isso cria um ambiente em que as pessoas só ouvem de você quando erraram.

**Feedback positivo eficaz não é "bom trabalho"** — é específico:
> "No relatório de ontem, você identificou o erro nos dados antes de mim e já apresentou a solução quando chegou na reunião. Isso poupou 2 horas de retrabalho. Esse tipo de proatividade é exatamente o que preciso desta equipe."

Feedback positivo específico:
1. Reforça o comportamento certo
2. Sinaliza que você presta atenção
3. Cria cultura de reconhecimento

## Recebendo feedback: o diferencial dos líderes de alto desempenho

Gestores que se desenvolvem mais rapidamente são os que buscam ativamente feedback sobre seu próprio desempenho.

Como pedir feedback ao seu time:
> "Quero melhorar como gestor. Você poderia me dar um exemplo de algo que faço bem e uma área onde poderia ser mais eficaz para você?"

Como responder quando receber crítica:
- Ouça completamente antes de responder
- Não se justifique imediatamente
- Agradeça genuinamente
- Esclareça se necessário: "Você pode me dar um exemplo específico?"
- Siga com ação: "O que você precisaria ver diferente?"

## Conversas difíceis: como abordar baixa performance

A pior coisa que um gestor pode fazer com um colaborador de baixa performance é esperar. O problema raramente se resolve sozinho.

### Estrutura para a conversa de performance

1. **Fatos, não julgamentos:** "Nas últimas 4 semanas, as entregas [X, Y, Z] foram com atraso médio de 3 dias."

2. **Impacto:** "Isso tem gerado [consequência concreta para o time/empresa/cliente]."

3. **Busca de causa raiz:** "Quero entender sua perspectiva. O que está acontecendo?"

4. **Expectativa clara:** "Vou precisar ver [comportamento/resultado específico] nas próximas 4 semanas."

5. **Suporte:** "O que posso fazer para te ajudar a chegar lá?"

6. **Consequência:** "Se não conseguirmos melhorar, vou precisar [escalar para RH / reavaliar sua posição no time]."

Documentar essa conversa por email após é uma boa prática: protege você e cria registro de que houve comunicação clara.`,
      },
      {
        id: '13-3',
        title: 'Gestão de conflitos na equipe: como e quando intervir',
        duration: '25 min',
        content: `# Gestão de conflitos na equipe

## O papel do gestor nos conflitos

Gestores inexperientes fazem um dos dois extremos: intervêm em tudo (microgestão de conflitos) ou evitam tudo ("resolvam entre vocês").

Nem uma coisa nem outra. O papel do gestor é discernir quando facilitar e quando deixar o time resolver — e ter as ferramentas para ambos.

## Os 3 tipos de conflito e como abordar cada um

### Tipo 1: Conflito de tarefas (sobre o trabalho)
**O que é:** divergência sobre como executar algo, qual direção tomar, como priorizar.
**O que fazer:** este tipo de conflito é SAUDÁVEL e você não deve apagar. Facilite a discussão; encoraje que cada lado apresente dados e argumentos; ajude a chegar a uma decisão se necessário.

### Tipo 2: Conflito de processo (sobre como trabalhar juntos)
**O que é:** atrito sobre responsabilidades, comunicação, formas de trabalho.
**O que fazer:** intervenha com clareza. Defina ou redefina papéis e processos. Muitas vezes o conflito existe porque as expectativas nunca foram formalizadas.

### Tipo 3: Conflito interpessoal (entre pessoas)
**O que é:** desentendimento pessoal, problemas de confiança, personalidades conflitantes.
**O que fazer:** intervenha cedo — esse tipo se deteriora rapidamente. Converse individualmente com cada parte, depois facilite uma conversa conjunta se necessário.

## Protocolo de intervenção em conflito interpessoal

**Passo 1: Converse individualmente com cada parte**
- "Quero entender sua perspectiva sobre o que está acontecendo."
- Ouça sem defender a outra parte ou tomar partido
- Identifique os interesses reais por baixo das posições declaradas

**Passo 2: Identifique o ponto de concordância mínima**
Muitas vezes há mais acordo do que parece. Encontre o terreno comum.

**Passo 3: Facilite a conversa conjunta (se necessário)**
- Você não é juiz — é facilitador
- Estabeleça regras: fale por si mesmo, não interrompa, foque em comportamentos não em personalidade
- Encerre com acordo concreto: quem vai fazer o quê de forma diferente

**Passo 4: Follow-up**
Acompanhe nas semanas seguintes se o acordo está sendo honrado.

## Quando o conflito não se resolve: escalada para RH

Se após intervenção direta o conflito persiste ou envolve comportamento grave (assédio, discriminação, violação de políticas), escale para RH. Isso não é fraqueza — é responsabilidade.

Documentação antes de escalar:
- Datas das conversas que você teve
- Comportamentos observados (com datas)
- Acordos que foram feitos e não cumpridos

## Prevenindo conflitos antes de acontecerem

A melhor gestão de conflito é a prevenção:
- **Clareza de papéis:** quem faz o quê, com qual autonomia
- **Processo de decisão explícito:** como as decisões são tomadas?
- **Reuniões regulares:** conflitos não resolvidos crescem no silêncio
- **Cultura de feedback direto:** equipes que falam abertamente têm menos conflitos latentes`,
      },
      {
        id: '13-4',
        title: 'Como se preparar para cargos executivos (C-Level, VP, Head)',
        duration: '30 min',
        content: `# Como se preparar para cargos executivos

## A diferença entre gestão e liderança executiva

Gerir é executar estratégia. Liderar executivamente é criar estratégia.

Em cargos de C-Level, VP ou Head, você não é mais responsável por uma equipe executando um processo bem definido. Você é responsável por definir o que a organização deve fazer e convencer todo mundo a ir nessa direção.

As competências adicionais que se tornam críticas:

### 1. Pensamento estratégico de longo prazo
- Capacidade de pensar 12-36 meses à frente
- Entender tendências de mercado antes da concorrência
- Tomar decisões com informações incompletas

### 2. Comunicação executiva
- Apresentar para Boards e investidores
- Simplificar o complexo para múltiplas audiências
- Influenciar sem autoridade hierárquica (você precisa convencer pares em outras áreas)

### 3. Gestão de P&L
- Entender receita, custo, margem e fluxo de caixa da área que você lidera
- Tomar decisões com perspectiva de impacto financeiro

### 4. Gestão de stakeholders
- Navegar a política organizacional
- Construir alianças internas
- Gerenciar expectativas de múltiplas partes

## Sinais de que você está pronto para o próximo nível

Você está pronto para o nível acima quando:
- ✅ Sua equipe performa bem mesmo quando você não está presente
- ✅ Você está resolvendo problemas do nível acima do seu cargo
- ✅ Líderes de outras áreas buscam sua opinião
- ✅ Você tem perspectiva de negócio, não só de área
- ✅ Você já influenciou decisões estratégicas (mesmo informalmente)

## Como acelerar a progressão para cargos executivos

### 1. Amplie sua visão do negócio
Pare de ser o expert só na sua área. Entenda finanças (mesmo que básico), operações, produto, marketing. Leia os relatórios de resultado da empresa.

### 2. Construa visibilidade executiva
- Voluntarie-se para projetos cross-funcionais de alto impacto
- Apresente resultados diretamente para a liderança sênior
- Publique conteúdo de liderança no LinkedIn

### 3. Encontre um patrocinador (diferente de mentor)
Um mentor te dá conselhos. Um patrocinador fala de você quando você não está na sala.

Como encontrar um patrocinador:
- Entregue resultados que tornem alguém orgulhoso de te defender
- Seja visível para as pessoas certas (não só seu gestor direto)
- Peça feedback diretamente: "O que você precisaria ver para me recomendar para o próximo nível?"

### 4. MBA executivo vs. experiência prática

O MBA vale mais pelo network do que pelo conteúdo em muitos casos. Antes de investir R$50-150k num MBA:
- Você conseguiria os mesmos projetos de alto nível sem o diploma?
- Sua empresa valoriza o MBA ou valoriza resultados?
- O network daquela escola específica é relevante para onde você quer chegar?

Se a resposta for "sim, o MBA abre portas que eu não consigo abrir sem ele" — então vale. Caso contrário, invista em resultados concretos e visibilidade.

## O plano de carreira executiva em 5 anos

**Ano 1-2:** Excelência como gestor de equipe. Entrega consistente. Visibilidade interna.

**Ano 2-3:** Liderança de projetos cross-funcionais. Exposição à liderança sênior. Primeiros pontos de contato com Board ou investidores (mesmo que indiretos).

**Ano 3-4:** Gestão de área ou business unit. P&L real. Decisões estratégicas com impacto mensurável.

**Ano 4-5:** Pronto para C-Level ou VP, dependendo do porte da empresa.

Em startups, esse timeline pode ser de 2-3 anos. Em grandes corporações, pode ser 7-10 anos. Startups em crescimento acelerado são o caminho mais rápido para cargos executivos.`,
      },
      {
        id: '13-5',
        title: 'Construindo um time de alto desempenho: contratação, desenvolvimento e cultura',
        duration: '30 min',
        content: `# Construindo um time de alto desempenho

## O maior impacto que um gestor pode ter

Um bom gestor pode fazer um time mediano performar bem. Um grande gestor monta um time de excelência que performa bem mesmo quando ele sai.

A capacidade de construir times é o ativo mais valorizado em líderes.

## Contratação: a decisão mais importante

A maioria dos gestores passa mais tempo corrigindo problemas de performance do que deveria investir na contratação.

### Como contratar pessoas melhores do que você

Gestores inseguros contratam pessoas "seguras" — menos ameaçadoras. Gestores seguros contratam as melhores pessoas disponíveis.

Jeff Bezos tinha uma regra: antes de contratar alguém, pergunte-se "Esse candidato eleva o nível médio do time?" Se não, não contrate.

### O que avaliar além do técnico

Competências técnicas você consegue treinar. Estes são difíceis de desenvolver:
- **Julgamento:** como a pessoa resolve dilemas onde não há resposta certa?
- **Ownership:** ela trata os problemas como seus ou espera alguém resolver?
- **Aprendizagem:** como ela lida com feedback e erro?
- **Colaboração:** ela amplifica ou diminui os outros?

### Perguntas de entrevista para avaliar essas competências

*Para julgamento:*
> "Descreva uma situação onde você não tinha dados suficientes para tomar uma decisão mas precisou decidir de qualquer forma. O que você fez?"

*Para ownership:*
> "Quando foi a última vez que você assumiu responsabilidade por algo que não era estritamente sua obrigação? O que motivou isso?"

*Para aprendizagem:*
> "Qual foi o feedback mais difícil que você recebeu e o que mudou depois disso?"

## Desenvolvimento: o investimento com maior ROI

Gestores que desenvolvem pessoas sistematicamente têm as melhores taxas de retenção e os times mais fortes.

### Individual Development Plan (IDP)

Para cada membro do time, trabalhe com eles para definir:
1. **Onde querem estar em 2-3 anos** (qual cargo, que tipo de trabalho)
2. **Competências que precisam desenvolver** para chegar lá
3. **3 ações concretas** para este semestre (projeto, curso, mentoria)

Revise o IDP a cada trimestre.

### O modelo 70-20-10

Pesquisas mostram que o desenvolvimento de adultos acontece assim:
- **70%** pela experiência prática (projetos desafiadores, novas responsabilidades)
- **20%** pelo aprendizado com outros (feedback, mentoria, observação)
- **10%** por treinamento formal (cursos, workshops, leituras)

Implicação: atribuir projetos desafiadores é sua principal ferramenta de desenvolvimento — não cursos.

## Cultura: o que acontece quando você não está na sala

Culture is what people do when no one is watching. A cultura do seu time é formada por:
- O que você celebra (quais comportamentos você reconhece?)
- O que você tolera (quais comportamentos você ignora?)
- O que você pune (quais comportamentos têm consequências?)

Se você celebra entregas individuais mas ignora comportamentos não colaborativos, sua cultura será de competição interna.

### Como mudar a cultura de um time

Não é com posters ou valores na parede. É com comportamento consistente do líder:
1. **Modelar** o comportamento que você quer ver
2. **Reconhecer publicamente** quando alguém demonstra o comportamento desejado
3. **Ter consequências** (conversas diretas) quando comportamentos contrários ocorrem
4. **Ser consistente** — uma exceção desfaz meses de construção

A cultura não muda em semanas. É um processo de 6-18 meses de sinais consistentes.`,
      },
    ],
  },
]
