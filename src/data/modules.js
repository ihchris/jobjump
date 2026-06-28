export const MODULES = [
  {
    id: 1,
    title: 'CV que Passa pelos Filtros ATS',
    desc: 'Aprenda a criar um CV que supera os sistemas automáticos e chega às mãos dos recrutadores.',
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
2. **Parsing** → O sistema identifica seções (experiência, educação, competências)
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

O ATS funciona como um motor de pesquisa. O recrutador defina critérios (palavras-chave) e o sistema filtra os CVs que as contêm. Sem as palavras certas, és invisível.

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
5. **Prioriza a experiência profissional** — essa seção tem mais peso no ATS`,
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

Ninguém escreva o oposto, então isso não diz nada.

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
    desc: 'Escreva cartas que captam a atenção dos recrutadores e te diferenciam de centenas de candidatos.',
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

Muitas vagas, especialmente em empresas menores, startups e candidaturas espontâneas, ainda são enviadas por email. A forma como você escreva esse email pode ser o fator decisivo.

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
    isPro: false,
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
Contato: [email] | [telefone]
\`\`\``,
      },
      {
        id: '3-2',
        title: 'Experiência e competências que se destacam',
        duration: '25 min',
        content: `# Experiência e competências que se destacam

## A seção de experiência no LinkedIn

### Fórmula para cada bullet
**Verbo de ação + O que fizeste + Resultado/Impacto**

✅ "Implementei processo de onboarding que reduziu churn em 23% e aumentou NPS de 45 para 72 pontos"

✅ "Gerenciei orçamento de €800k em campanhas de performance, com ROAS médio de 4.2x"

## A seção de competências

- Adiciona **máximo 50 competências**
- Pede **endorsements** a colegas e gestores
- As primeiras 3 aparecem no perfil — escolha as mais estratégicas

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

✅ **Faça sentido se:**
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

**Contato visual:** 60-70% do tempo, distribui por todos os entrevistadores.

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
> "Estou aberto a discutir compensação. Podem compartilhar a banda salarial para este cargo?"

### Como negociar
1. Pesquisa o mercado (LinkedIn Salary, Glassdoor, Paylab)
2. Defina seu piso e teto ideal
3. Pede mais do que quer (há margem para baixar)
4. Justifica com valor, não com necessidades pessoais

**❌ Fraco:** "Precisava de €30k porque tenho rendas a pagar"

**✅ Forte:** "Com base na minha experiência e o impacto demonstrado, acredito que €35k está alinhado com o mercado e o valor que vou criar."

5. Negocia o pacote completo: salário + bônus + flexibilidade + formação`,
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
> "Prefiro perceber melhor o âmbito da função antes de falar em números. Podem compartilhar a banda salarial que têm em mente?"

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
2. Defina o usuário (quem usa? dores?)
3. Gera soluções (3-5 ideias)
4. Prioriza com critérios (impacto × esforço)
5. Defina métricas de sucesso

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

Networking é **construir relações genuínas** com pessoas que compartilham interesses e objetivos profissionais. A regra de ouro: **dá antes de pedir**.

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

Contatar pessoas apenas quando precisamos de algo. As pessoas sentem-se usadas.

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

### 2. Ativar a rede para referências internas
Mapeia suas conexões LinkedIn dentro das empresas-alvo. Uma mensagem direta pode resultar numa apresentação ao responsável de contratação.

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
    desc: 'Aprenda a pesquisar o mercado, negociar com confiança e maximizar seu pacote de compensação no Brasil.',
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
4. **Considere o pacote total**: salário + bônus + benefícios + stock options (se aplicável)

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

> "Tenho uma expectativa baseada na minha pesquisa de mercado e experiência, mas gostaria de perceber melhor o âmbito completo da função antes. Podem compartilhar a banda salarial que têm prevista?"

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
Confirma sua pesquisa de mercado. Defina: aceitável, alvo, ideal.

**Passo 3 — A contra-proposta**
> "Após análise, estou muito entusiasmado com a oportunidade. A compensação que vos propunham é de R$[valor deles]. Com base na minha experiência em [X, Y, Z] e no impacto que posso gerar em [área específica], faria mais sentido um valor de R$[seu alvo]. Há possibilidade de nos aproximarmos?"`,
      },
      {
        id: '6-3',
        title: 'Scripts de negociação para cada cenário',
        duration: '25 min',
        content: `# Scripts de negociação para cada cenário

## Por que usar scripts?

Num momento de tensão emocional, ter frases preparadas evita hesitações, silêncios constrangedores ou concessões impulsivas. Pratique-os até soarem naturais.

## Script 1: Quando a proposta está muito abaixo do mercado

> "Agradeço muito a proposta e o interesse em tê-me na equipa. Preciso de ser transparente: com base na minha pesquisa de mercado e na minha experiência de [X anos em Y], esperava algo na faixa de R$[valor]. A diferença é significativa. Existe flexibilidade na banda salarial para este cargo?"

**Se disserem que não há margem:**
> "Compreendo. Há outras componentes do pacote que possam ser ajustadas — bônus, flexibilidade de horário, formação, ou revisão salarial antecipada?"

## Script 2: Quando a proposta é boa mas quer mais

> "Esta é uma proposta muito interessante e estou genuinamente entusiasmado. Estava a considerar algo ligeiramente acima, na faixa de R$[valor]. Há alguma flexibilidade para chegarmos a esse número?"

## Script 3: Quando tem outra oferta como alavanca

> "Quero ser transparente: estou em processo avançado com outra empresa, com uma proposta de R$[valor]. A [vossa empresa] é a minha preferência pela [razão genuína]. Seria possível aproximarmo-nos desse valor?"

## Script 4: Negociação de aumento interno

> "Gostaria de falar sobre a minha compensação. Nos últimos [X meses], contribuí para [conquistas específicas com números]. O mercado para esta função com a minha senioridade está entre R$[X] e R$[Y]. Estou a pedir uma revisão para R$[alvo]. O que precisaria de demonstrar para que isso fosse possível?"

## O poder do silêncio

Depois de fazer um pedido ou contra-proposta, **fica em silêncio**. Não preenches o silêncio com concessões. O desconforto do silêncio é compartilhado — quem fala primeiro normalmente cede.

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

Uma proposta de R$8.000 com benefícios robustos pode valer mais do que R$9.500 sem benefícios. Aprenda a calcular o valor real do pacote completo.

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
1. **Bónus por performance** — defina métricas claras
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

Faça o inventário dsuas competências transferíveis antes de assumires que começas do zero.`,
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
Em tech: contribui para projetos GitHub. Em outras áreas: escreva para publicações do setor.

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
São seu recurso mais valioso. Sabem exatamente o que esperar, que recursos usar, que armadilhas evitar. Encontre-os no LinkedIn com pesquisa "ex-[área original] agora [nova área]".

**Mensagem de abordagem:**
> "Olá [Nome], vi seu percurso de [área A] para [área B] e admiro muito essa transição. Como alguém a fazer caminho semelhante, adoraria uma conversa de 20 minutos sobre sua experiência. O que te ajudou mais no início?"

### Grupo 2: Profissionais ativos na nova área
Não peças emprego — pede perspectiva.
> "O que defina um bom [profissional nesta área] para ti? O que te surpreendeu quando começaste?"

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
- **Medium/Substack**: para quem escreva bem e quer audiência mais ampla
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
> O ATS não é inimigo — é um sistema com regras. Quando você aprenda as regras, passa por ele.
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
- Crie um pitch de palestra (título + descrição de 200 palavras + o que o público aprenda)
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
    isPro: false,
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
- **Yoodli** (yoodli.ai): pratique entrevistas com feedback em vídeo sobre fala, ritmo, pausas e conteúdo.
- **Interview Warmup** (Google): perguntas de entrevista por área + análise de resposta. Gratuito.
- **Pramp**: pratique com parceiro real + IA. Bom para tech. Gratuito.
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

Isso considere: impostos PJ (~15%), INSS (~11%), provisão de férias e 13º, período sem contrato.

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

Isso move a conversa de "vou contratar?" para "qual opção?" — e a maioria escolha a do meio.`,
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
| Faça o trabalho | Habilita outros a fazerem o trabalho |
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
  {
    id: 14,
    title: 'Psicologia da Busca de Emprego',
    desc: 'Mantém a motivação, lida com rejeições e constrói resiliência durante o processo de recolocação.',
    duration: '2h 30min',
    icon: '🧠',
    isPro: false,
    color: { bg: 'bg-teal-50', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-700', icon: 'bg-teal-500' },
    lessons: [
      {
        id: '14-1',
        title: 'A síndrome do impostor na busca de emprego',
        duration: '25 min',
        content: `# A síndrome do impostor na busca de emprego

## O que é a síndrome do impostor?

A síndrome do impostor é a sensação persistente de não merecer o lugar onde se está — de ser uma "fraude" que será descoberta a qualquer momento. É extremamente comum: estudos mostram que **70% das pessoas** experienciam isso em algum momento da carreira.

Na busca de emprego, manifesta-se de formas específicas:
- "Não estou qualificado o suficiente para me candidatar"
- "Vão descobrir que sou menos capaz do que pareço no CV"
- "Os outros candidatos são muito melhores do que eu"
- "Só consegui aquela entrevista por sorte"

## Por que acontece especialmente durante a busca?

A busca de emprego é uma fase de **alta exposição e incerteza**. Você está constantemente sendo avaliado, comparado e (frequentemente) rejeitado. Isso ativa o sistema de ameaça do cérebro.

Agravantes comuns:
- Período de desemprego prolongado (questiona sua autoestima)
- Transição de carreira (falta de histórico na nova área)
- Mercado competitivo (sente que há sempre alguém "melhor")
- Redes sociais (todo mundo parece bem-sucedido)

## 5 estratégias para combater o impostor

### 1. Evidências, não emoções
Quando o pensamento "não sou bom o suficiente" aparecer, peça evidências ao cérebro:
> "O que prova que não sou qualificado?" → Na maioria dos casos, não há prova real.
> "O que prova que sou qualificado?" → Liste conquistas concretas com números.

### 2. Separe sentimento de facto
"Sinto que sou fraude" ≠ "Sou fraude"
Sentimentos são dados sobre o seu estado interno — não são factos sobre a realidade.

### 3. Normaliza a incompletude
**Ninguém cumpre 100% dos requisitos.** Estudos mostram que homens candidatam quando cumprem 60% dos requisitos; mulheres, quando cumprem 100%. Aplique para vagas onde cumpre 60-70% — é o suficiente.

### 4. Regista conquistas em tempo real
Crie um "arquivo de orgulho": documento onde registas resultados positivos assim que acontecem. Feedback positivo de um colega, meta batida, projeto entregue. Consulte este arquivo quando a síndrome atacar.

### 5. Fala com outras pessoas sobre isso
A síndrome prospera no silêncio. Quando você descobre que um colega que admiras também sente isso, o poder da crença diminui drasticamente.

## O paradoxo do impostor

Há um dado curioso: **pessoas com síndrome do impostor tendem a ser mais competentes**, não menos. Por quê? Porque são mais conscientes das suas limitações, mais abertas ao feedback e mais rigorosas consigo mesmas.

A síndrome do impostor não é sinal de fraqueza — é frequentemente sinal de inteligência e autoconsciência.`,
      },
      {
        id: '14-2',
        title: 'Lidar com rejeições e silêncio dos recrutadores',
        duration: '30 min',
        content: `# Lidar com rejeições e silêncio dos recrutadores

## A realidade das rejeições

Se você está em busca ativa de emprego, vai ser rejeitado. Muitas vezes. Isso não é falha — é o processo.

Os números reais:
- Taxa de resposta média para candidaturas online: **2-5%**
- Taxa de conversão de entrevista para oferta: **20-30%**
- Média de candidaturas antes de conseguir emprego: **50-200**

Matematicamente, rejeições são garantidas e esperadas. A questão não é se vai ser rejeitado — é como vai responder quando acontecer.

## Os 3 tipos de "não" na busca de emprego

### Tipo 1: O silêncio (ghosting)
A empresa não responde. Nunca.

**Porquê acontece:** Volume de candidaturas, sistemas de ATS que filtram sem aviso, reorganizações internas, vagas canceladas.

**O que fazer:** Espera 1 semana → envia follow-up educado → espera mais 1 semana → esquece e avança. Não é pessoal.

### Tipo 2: A rejeição automática (pré-entrevista)
Email genérico: "Não seguiremos com a sua candidatura."

**Porquê acontece:** ATS filtrou palavras-chave, perfil não correspondeu a critério eliminatório, vaga preenchida internamente.

**O que fazer:** Pede feedback (raramente respondem, mas vale tentar). Revise se o CV estava otimizado para ATS. Avança.

### Tipo 3: A rejeição após entrevista
Depois de uma ou mais entrevistas, um "não" chega.

**Porquê acontece:** Outro candidato com perfil mais específico, decisão interna de não contratar, fit cultural que não funcionou.

**O que fazer:** Pede feedback específico — após entrevistas, há probabilidade maior de resposta. Aprenda. Avança.

## O protocolo de processamento emocional

Rejeições doem. Tentar suprimir a emoção não funciona. O que funciona:

**Passo 1 — Sente (20 minutos)**
Permite-te estar frustrado, desapontado ou chateado. Sem julgamento. É uma resposta humana normal.

**Passo 2 — Separa (1 hora depois)**
Escreva: "Esta rejeição diz o quê sobre mim especificamente?" Se a resposta for vaga ("não sou bom"), questiona a evidência. Se for específica ("preciso melhorar X"), transforma em plano.

**Passo 3 — Extraia (no dia seguinte)**
Pergunta: "O que posso aprender daqui que me ajuda na próxima candidatura?"

**Passo 4 — Avança (72 horas depois)**
Envia 3 novas candidaturas. A acção é o melhor antídoto contra a ruminação.

## O que as rejeições NÃO significam

- ❌ Que você não é qualificado
- ❌ Que nunca vai conseguir emprego
- ❌ Que há algo fundamentalmente errado consigo
- ❌ Que os outros candidatos eram claramente melhores

O que geralmente significam:
- ✅ Outro candidato tinha um fit mais específico naquele momento
- ✅ A vaga foi cancelada ou preenchida internamente
- ✅ Havia critério eliminatório que não estava na descrição
- ✅ Simplesmente foi má sorte de timing

## Estratégia de dessensibilização

Uma técnica usada em psicologia comportamental: **exposição gradual**.

Se as rejeições são muito dolorosas, comece a candidatar-se a vagas que não quer muito. Pratique o processo sem investimento emocional alto. Com o tempo, o sistema nervoso aprenda que rejeição é temporária e tolerável.`,
      },
      {
        id: '14-3',
        title: 'Rotina e produtividade: buscando com consistência',
        duration: '25 min',
        content: `# Rotina e produtividade: buscando com consistência

## O problema da busca sem estrutura

A busca de emprego sem rotina parece "trabalho constante mas sem progresso". Você passa o dia a ver LinkedIn, candidata-se aleatoriamente, sente-se ocupado mas sem direcção.

A solução é tratar a busca como um trabalho — com horários, métricas e pausas programadas.

## O sistema de blocos de tempo

Divide o dia de busca em 4 tipos de atividade:

### Bloco 1: Candidaturas (2-3h pela manhã)
- Revise vagas identificadas no dia anterior
- Adapta CV e carta para 2-3 vagas seleccionadas
- Envia candidaturas

### Bloco 2: Networking (1h no final da manhã)
- Envia 2-3 mensagens personalizadas no LinkedIn
- Responde a mensagens pendentes
- Agenda coffee chats

### Bloco 3: Aprendizagem (1h à tarde)
- Módulo do JobJump
- Artigo da área
- Preparação para entrevista pendente

### Bloco 4: Revisão e planeamento (30min no final do dia)
- Actualiza o rastreador de candidaturas
- Lista as 3 candidaturas prioritárias de amanhã
- Celebra uma pequena vitória do dia

## Métricas semanais que importam

Acompanha estas 4 métricas toda semana:

| Métrica | Meta mínima | Meta ideal |
|---|---|---|
| Candidaturas enviadas | 5 | 10-15 |
| Mensagens de networking | 5 | 10 |
| Entrevistas agendadas | 1 | 3+ |
| Follow-ups enviados | 100% dos pendentes | — |

## O problema da "busca contínua"

Trabalhar 12 horas por dia na busca de emprego não é produtivo — é contraproducente. Pesquisas mostram que a qualidade das candidaturas cai drasticamente após 4-5 horas de trabalho focado.

**Regras de higiene mental:**
- Defina um horário de início e de fim
- Não verifica emails de recrutadores fora do horário
- Reserva pelo menos 1 tarde por semana para algo que não seja a busca
- Dorme 7-8 horas — decisões sob fadiga são piores

## Mantendo o impulso em semanas difíceis

Há semanas em que tudo parece estagnado. Nesses momentos:

1. **Revisita as métricas** — às vezes você está produzindo mais do que sente
2. **Muda o canal** — se candidaturas online estão frias, foca em networking esta semana
3. **Conversa com alguém** — um mentor, coach ou amigo que entende o processo
4. **Reduz o objetivo** — em vez de 10 candidaturas, compromete com 3. Feito é melhor que perfeito.
5. **Celebra o processo** — cada candidatura enviada é uma vitória, independente do resultado`,
      },
      {
        id: '14-4',
        title: 'Resiliência de longo prazo: quando a busca demora meses',
        duration: '30 min',
        content: `# Resiliência de longo prazo: quando a busca demora meses

## A realidade que ninguém conta

Buscas de emprego longas são normais. Para cargos de gestão e sênior, 3-6 meses é típico. Para transições de carreira, 6-12 meses é razoável. Para mercados saturados ou contextos económicos difíceis, pode ser mais.

Mas ninguém posta no LinkedIn "estou há 8 meses buscando e ainda não encontrei". O silêncio dos que estão no processo cria a ilusão de que todos os outros conseguem rápido — e você é o único a demorar.

Não é verdade.

## Os estágios emocionais da busca prolongada

Reconhecer onde você está ajuda a saber o que precisa:

### Estágio 1: Optimismo (semanas 1-4)
Energia alta, CV actualizado, candidaturas enviadas. "Vai correr bem."

### Estágio 2: Ajuste (semanas 4-8)
Primeiras rejeições. Ajuste de expectativas. "Isto vai levar mais tempo do que pensei."

### Estágio 3: Frustração (semanas 8-16)
Padrão de rejeições sem feedback claro. Questionamento: "O que estou a fazer de errado?"

### Estágio 4: Dúvida (semanas 16+)
Questionar a estratégia, a área, o mercado. Risco de isolamento e perda de motivação.

### Estágio 5: Recalibração
Revisão profunda da estratégia. Muitas vezes é aqui que a virada acontece.

## Estratégias de sustentabilidade para buscas longas

### 1. Estrutura financeira primeiro
O stress financeiro amplifica tudo. Se possível, defina quanto tempo pode buscar sem pressão extrema e faz um plano B claro para o cenário de extensão.

### 2. Identidade além do cargo
Quando a busca se prolonga, é fácil que toda a identidade se torne "alguém que está buscando emprego". Isso é psicologicamente desgastante.

Mantém atividades que te dão sentido independente da busca: voluntariado, um projeto pessoal, esporte, família, criatividade.

### 3. Revisão estratégica a cada 30 dias
Em vez de mudar tudo em pânico, faz revisões estruturadas mensais:
- O que candidatei este mês?
- O que gerou respostas? O que não gerou?
- Devo ajustar o canal, o CV, a área alvo ou o nível do cargo?

### 4. Mentoria e suporte
Pessoas que passaram pelo processo e conseguiram são os melhores recursos. Encontre mentores na sua área no LinkedIn, grupos de recolocação, ou comunidades online.

### 5. Celebra marcos intermédios
Não só o emprego conta como vitória. Celebra:
- Primeira entrevista de empresa de topo
- Chegar à fase final de um processo
- CV actualizado e melhorado
- Nova conexão estratégica

## A virada que muitos não percebem

Muitas buscas que parecem fracassar nos últimos dias antes da virada resultam em sucesso. O problema: muita gente desiste exatamente quando estava prestes a conseguir.

Os dados de recrutamento mostram que o tempo médio para contratar aumentou nos últimos anos — não porque os candidatos são piores, mas porque os processos são mais longos. A busca exige mais resiliência do que nunca.

> **A pergunta certa não é "Porque ainda não consegui?" — é "O que posso aprender este mês para estar mais perto de conseguir?"**`,
      },
      {
        id: '14-5',
        title: 'Apoio, rede de suporte e saúde mental na busca',
        duration: '20 min',
        content: `# Apoio, rede de suporte e saúde mental na busca

## Quando a busca afecta a saúde mental

A busca de emprego prolongada é um factor de stress reconhecido que pode levar a ansiedade, depressão e isolamento. Reconhecer os sinais cedo é fundamental.

**Sinais de alerta:**
- Dificuldade para sair da cama ou iniciar o dia
- Perda de interesse em atividades que antes davam prazer
- Isolamento social crescente
- Pensamentos repetitivos e negativos sobre si mesmo
- Dificuldade de concentração ou sono alterado

Se reconhece 3 ou mais destes sinais de forma persistente (2+ semanas), considere procurar apoio profissional — psicólogo, coach ou médico de família.

## A importância da rede de suporte

Pesquisas mostram que pessoas em busca de emprego com suporte social ativo conseguem emprego **mais rapidamente** e com menos impacto na saúde mental do que as que buscam isoladas.

**Tipos de suporte que ajudam:**

### Suporte emocional
Família, amigos próximos — pessoas que te ouvem sem julgamento. Não precisam entender de mercado de trabalho. Precisam estar presentes.

### Suporte prático
Mentores, ex-colegas, pessoas na área — quem pode rever o CV, fazer introduções, dar feedback sobre entrevistas.

### Suporte de pares
Outros em busca de emprego — compartilha experiências, valida que é normal, compara estratégias. Grupos de LinkedIn, comunidades online, fóruns.

## Como pedir ajuda sem parecer desesperado

Muitas pessoas não pedem ajuda por medo de parecer vulneráveis ou sobrecarregar os outros. Mas a maioria das pessoas quer ajudar — simplesmente não sabe que você precisa.

**Pedidos eficazes:**
> "Estou em busca ativa de novas oportunidades em [área]. Se souberes de alguma vaga ou quiser fazer uma introdução, ficaria muito grato."

> "Estou a preparar-me para entrevistas em [tipo de empresa]. Teria 20 minutos para me dar feedback sobre como estou a apresentar minha experiência?"

> "Passei por um processo difícil esta semana. Não preciso de soluções — precisava compartilhar com alguém de confiança."

## Cuidados de bem-estar durante a busca

Parece básico, mas é o que mais é descurado quando a pressão aumenta:

**Exercício físico:** 30 minutos diários de atividade física reduzem cortisol e melhoram humor. Não precisa ser academia — uma caminhada conta.

**Exposição social:** Mesmo que não seja networking "útil" para a busca — almoço com amigos, atividade de grupo, esporte coletivo. O isolamento amplifica o stress.

**Limites de ecrã:** Passar 8 horas a ver LinkedIn gera mais ansiedade do que candidaturas. Defina blocos de tempo limitados para redes sociais.

**Sono consistente:** A privação de sono piora a tomada de decisão, a criatividade e a regulação emocional — tudo que você precisa numa busca de emprego.`,
      },
    ],
  },
  {
    id: 15,
    title: 'Entrevistas em Inglês',
    desc: 'Prepara-se para processos seletivos em inglês com vocabulário, scripts e simulações para posições internacionais.',
    duration: '3h',
    icon: '🇬🇧',
    isPro: true,
    color: { bg: 'bg-cyan-50', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700', icon: 'bg-cyan-500' },
    lessons: [
      {
        id: '15-1',
        title: 'Preparação para entrevistas em inglês: por onde começar',
        duration: '25 min',
        content: `# Preparação para entrevistas em inglês: por onde começar

## Porque as entrevistas em inglês são diferentes

Não é apenas traduzir as respostas que usas em português. Há diferenças culturais, expectativas comunicativas e convenções específicas que mudam dependendo da empresa ser americana, britânica, europeia ou asiática.

## Diferenças culturais por origem da empresa

### Empresas americanas (EUA)
- Tom direto e confident — dizer "I don't know" é melhor do que enrolar
- Storytelling valorizado — as respostas STAR devem ter arc narrativo claro
- Entusiasmo é esperado — "I'm really excited about this opportunity" é natural
- Small talk antes de começar é comum e importante

### Empresas britânicas
- Tom mais reservado e formal no início
- Understatement — "I performed reasonably well" pode significar "I excelled"
- Humor discreto pode aparecer — não te sintas obrigado a corresponder se não é natural
- Pontualidade e preparação são sinais de respeito muito valorizados

### Empresas europeias (França, Alemanha, Holanda)
- Directas sobre competências técnicas
- Menos small talk, mais foco na substância
- Humildade é valorizada — não sobre-vender sem evidências
- Expectativa de perguntas inteligentes sobre a empresa

### Empresas de tecnologia global (remote-first)
- Comunicação assíncrona valorizada — escrita clara e precisa
- Autonomia e iniciativa como valores centrais
- Diversidade de backgrounds aceite — não é necessário ter sotaque perfeito

## Avaliação do seu nível actual de inglês

Antes de te preparares, honestidade sobre o nível actual:

| Nível | Descrição | O que consegues fazer |
|---|---|---|
| A2-B1 | Básico-intermediário | Perguntas simples, frases curtas |
| B2 | Intermediário-avançado | Conversação fluida com alguma hesitação |
| C1 | Avançado | Expressão de nuances e argumentos complexos |
| C2/Nativo | Fluente | Sem limitações práticas |

Para uma entrevista profissional eficaz, o mínimo é **B2**. Abaixo disso, o conteúdo da resposta fica comprometido pelo esforço de construir as frases.

## Plano de preparação em 4 semanas

### Semana 1: Diagnóstico e vocabulário
- Faça um mock interview consigo mesmo (grava em vídeo)
- Identifica as principais lacunas (vocabulário, fluência, gramática)
- Aprenda 20 palavras/expressões específicas da sua área em inglês

### Semana 2: Estrutura das respostas
- Pratique o método STAR em inglês (situação → task → action → result)
- Grava 3 respostas STAR e revê o vocabulário

### Semana 3: Mock interviews
- Usa recursos como Pramp (gratuito) ou Big Interview para simular
- Pede a um falante de inglês para te fazer perguntas
- Foca em fluência, não em perfeição gramatical

### Semana 4: Refinamento e confiança
- Pratique o "Tell me about yourself" até fluir naturalmente
- Aprenda perguntas específicas para fazer ao entrevistador
- Prepara a resposta para "Why do you want to work here?" com pesquisa real sobre a empresa

## O maior erro: tentar traduzir em tempo real

Candidatos que traduzem do português para o inglês na hora da entrevista ficam lentos, usam construções estranhas e perdem confiança. A solução é **pensar directamente em inglês** — o que vem com prática.

Exercício: durante 2 semanas, muda o idioma do celular, computador e redes sociais para inglês. Ouça podcasts em inglês da sua área. Assista séries sem legendas em português.`,
      },
      {
        id: '15-2',
        title: 'Tell me about yourself: o script perfeito em inglês',
        duration: '30 min',
        content: `# Tell me about yourself: o script perfeito em inglês

## A pergunta mais importante da entrevista

"Tell me about yourself" (ou "Walk me through your background") é quase sempre a primeira pergunta. É a oportunidade de:
- Controlar a narrativa da entrevista
- Destacar o que é mais relevante para aquela vaga
- Estabelecer confiança desde o início

## A estrutura Past → Present → Future

Esta estrutura é universalmente eficaz e funciona em qualquer cultura empresarial.

**Template:**
> "I've spent the last [X years] working in [field/industry], primarily focused on [main specialization]. Most recently, at [company], I [key achievement]. Before that, at [previous company], I [another key achievement]. Now, I'm looking to [next step], which is why this role at [company] caught my attention — particularly [specific thing about the role/company]."

## Exemplos por área

### Marketing
> "I've spent the last 7 years in digital marketing, with a focus on growth and customer acquisition for B2B SaaS companies. Most recently at TechCorp, I led a team of 5 and grew organic traffic by 180% in 18 months, which directly contributed to a 40% increase in qualified leads. Before that, at StartupXY, I built the paid acquisition strategy from scratch with a budget of $500k, achieving a 3.2x ROAS. I'm now looking to step into a Head of Marketing role where I can combine strategic leadership with hands-on execution — which is exactly what you're building here."

### Technology (Developer)
> "I'm a backend engineer with 6 years of experience building scalable systems, primarily with Python and AWS. In my current role at FinTech Inc., I architected a payment processing service handling 2 million transactions per day with 99.99% uptime. Previously, I worked at a Series B startup where I reduced API response time by 60% through caching optimization. I'm now interested in joining a team where I can work on higher-complexity distributed systems problems — the infrastructure challenges you mentioned in the job description are exactly the kind of thing I want to go deeper on."

### Finance
> "My background is in corporate finance, specifically FP&A and financial modelling. I've spent the last 5 years at mid-size companies, most recently leading the annual budgeting cycle for a €150M revenue business — which involved coordinating with 8 business units and presenting to the CFO and board. I'm now looking to move into a more complex, international environment where financial analysis directly feeds into strategic decisions at the executive level."

## Frases de transição úteis

- "Building on that experience..." (construindo nessa experiência)
- "Which led me to..." (o que me levou a)
- "At that point, I realized..." (nesse ponto, percebi)
- "That's what drew me to..." (foi isso que me atraiu para)
- "More recently, I've been focused on..." (mais recentemente, tenho me focado em)

## O que evitar

- ❌ Recitar o CV cronologicamente sem narrativa
- ❌ Incluir informações pessoais irrelevantes ("I'm married with 2 kids")
- ❌ Exceder 2 minutos — a atenção cai depois disso
- ❌ Ser vago: "I have experience in marketing" (sem números ou conquistas)
- ❌ Começar com "Well..." ou "Um..." (pausa, respira, começa direto)

## Prática recomendada

1. Escreva o seu script personalizado usando o template
2. Grava-te a dizer em voz alta
3. Revise o vídeo: fluência, postura, contato visual (com câmara)
4. Pratique até não precisar ler — deve soar natural, não memorizado`,
      },
      {
        id: '15-3',
        title: 'Vocabulário e frases de alto impacto para entrevistas',
        duration: '25 min',
        content: `# Vocabulário e frases de alto impacto para entrevistas

## Por que o vocabulário importa tanto

Dois candidatos com a mesma experiência podem causar impressões muito diferentes dependendo de como articulam essa experiência. Vocabulário preciso comunica competência e confiança.

## Verbos de acção de alto impacto (Action Verbs)

### Liderança e gestão
- **Led** (liderança direta): "I led a cross-functional team of 12"
- **Spearheaded** (iniciativa pioneira): "I spearheaded the digital transformation initiative"
- **Orchestrated** (coordenação complexa): "I orchestrated the launch across 5 markets"
- **Championed** (defesa de causa): "I championed the move to agile methodology"
- **Mentored** (desenvolvimento): "I mentored 3 junior developers"

### Resultados e crescimento
- **Drove** (impulsionou): "I drove a 45% increase in sales"
- **Delivered** (entregou): "I delivered the project 2 weeks ahead of schedule"
- **Achieved** (alcançou): "I achieved 118% of annual quota"
- **Exceeded** (superou): "I exceeded targets by 30% for 3 consecutive quarters"
- **Generated** (gerou): "I generated $2M in new revenue"

### Resolução de problemas
- **Identified** (identificou): "I identified the root cause of the performance bottleneck"
- **Resolved** (resolveu): "I resolved a critical client escalation within 48 hours"
- **Streamlined** (optimizou): "I streamlined the onboarding process"
- **Revamped** (reformulou): "I revamped the reporting structure"
- **Implemented** (implementou): "I implemented a new CRM system"

### Análise e estratégia
- **Analysed** (analisou): "I analysed customer churn patterns across 3 years of data"
- **Developed** (desenvolveu): "I developed the go-to-market strategy"
- **Designed** (desenhou): "I designed the A/B testing framework"
- **Established** (estabeleceu): "I established KPIs for the entire team"

## Expressões para falar de conquistas

### Quantificar impacto
- "...resulting in a X% improvement in..."
- "...which translated to $X in savings/revenue"
- "...reducing [metric] from X to Y"
- "...increasing [metric] by X percentage points"
- "...ahead of schedule / under budget"

### Falar de colaboração
- "I worked closely with..." (trabalhei de perto com)
- "In collaboration with the [team/department]..."
- "I partnered with [team] to..."
- "Cross-functionally, I..."
- "I liaised between [team A] and [team B]"

### Contextualizar o ambiente
- "In a fast-paced environment..." (ambiente acelerado)
- "With limited resources..." (recursos limitados)
- "Under tight deadlines..." (prazos apertados)
- "Despite [challenge], we managed to..."
- "At a time when [context]..."

## Frases para gerir perguntas difíceis

### Quando não sabes a resposta
- "That's a great question. Let me think about that for a moment."
- "I haven't encountered that exact scenario, but I'd approach it by..."
- "I'm not familiar with that specific tool, but I've worked with similar solutions like X, and I pick up new technologies quickly."

### Quando precisas de tempo
- "Could you give me a moment to structure my thoughts?"
- "Just to make sure I'm addressing what you're asking..."
- "Let me be specific here — can I share a concrete example?"

### Quando não entendeste
- "I want to make sure I answer your question correctly — could you clarify...?"
- "I'm sorry, I didn't catch that last part. Could you repeat?"
- "Do you mean [interpretation A] or [interpretation B]?"

## Expressões a evitar

| ❌ Evitar | ✅ Melhor |
|---|---|
| "I think I can..." | "I have demonstrated ability to..." |
| "I just..." | (omite — minimiza o impacto) |
| "I did some work on..." | "I led / delivered / managed..." |
| "We did..." (sempre "we") | "I was responsible for... the team..." |
| "I'm not sure but..." | "Based on my experience..." |`,
      },
      {
        id: '15-4',
        title: 'Perguntas comportamentais em inglês: método STAR aplicado',
        duration: '35 min',
        content: `# Perguntas comportamentais em inglês: método STAR aplicado

## Behavioral Questions: o formato padrão internacional

Em entrevistas anglófonas, as perguntas comportamentais são iniciadas com:
- "Tell me about a time when..."
- "Give me an example of..."
- "Describe a situation where..."
- "Walk me through a time when..."
- "Can you share an experience where..."

A resposta esperada segue a estrutura **STAR**:
- **S**ituation: the context
- **T**ask: your role and responsibility
- **A**ction: what you specifically did
- **R**esult: the measurable outcome

## 10 perguntas comportamentais mais comuns com respostas modelo

### 1. Tell me about a time you had to deal with a difficult team member.

**Template de resposta:**
> "In my previous role at [company], I had a situation where [S: brief context]. My responsibility was to [T: your role]. I approached it by [A: specific actions taken — include having a direct conversation, empathising, setting clear expectations]. As a result, [R: specific outcome — improved relationship, project delivered, atmosphere changed]."

**Frases úteis:**
- "I scheduled a one-on-one to understand their perspective..."
- "I approached the conversation with curiosity rather than judgement..."
- "We established clear expectations going forward..."

### 2. Describe a time when you failed. What did you learn?

**Template de resposta:**
> "[S: context of the failure]. My responsibility was [T]. I [A: what you did that led to or during the failure]. The outcome was [R: honest about what went wrong]. What I learned was [lesson] — and since then, I've [applied lesson: specific change in behaviour]."

**Frases úteis:**
- "In retrospect, I should have..."
- "The key lesson for me was..."
- "That experience changed how I approach..."
- "I've since built a habit of..."

### 3. Give me an example of when you had to manage competing priorities.

**Frases úteis:**
- "I prioritised based on business impact..."
- "I communicated proactively to manage expectations..."
- "I used a framework to triage the tasks — urgent vs. important..."
- "I escalated early rather than waiting until it became a crisis..."

### 4. Tell me about a time you had to influence someone without direct authority.

**Frases úteis:**
- "I built the business case with data..."
- "I aligned incentives — showing how it benefited them..."
- "I listened first to understand their objections..."
- "I found a small win to demonstrate proof of concept..."

### 5. Describe a time when you had to adapt quickly to change.

**Frases úteis:**
- "When the situation shifted, I quickly reassessed..."
- "I stayed flexible while keeping the end goal in sight..."
- "I focused on what I could control..."
- "I communicated the change clearly to the team..."

## Gestão de nervosismo em inglês

O nervosismo é amplificado quando entrevistamos numa segunda língua. Estratégias:

**1. Fala mais devagar do que pareces precisar**
Quando nervoso, a tendência é acelerar. Mentalmente, diz a ti mesmo "fala mais devagar" — o ritmo que parece demasiado lento para ti é provavelmente perfeito para o entrevistador.

**2. Pausa antes de responder**
> "That's a great question — let me take a moment to think of the best example."

Esta frase está 100% normalizada em entrevistas anglófonas. Usá-la mostra ponderação, não fraqueza.

**3. Pede esclarecimento sem vergonha**
> "Just to make sure I'm answering correctly — are you asking about [X] or [Y]?"

**4. Aceita o sotaque como parte de quem és**
Sotaque não é problema — falta de clareza é. Articula bem, fala com ritmo moderado e o sotaque deixa de ser barreira.`,
      },
      {
        id: '15-5',
        title: 'Perguntas para fazer e negociação em inglês',
        duration: '25 min',
        content: `# Perguntas para fazer e negociação em inglês

## Questions to ask the interviewer

Fazer boas perguntas no final da entrevista é tão importante quanto responder bem. Em contextos anglófonos, é esperado e valorizado.

### Sobre a função
- "What would success look like in the first 90 days?"
- "What are the biggest challenges the person in this role will face?"
- "How does this role interact with other teams?"
- "What does a typical day/week look like in this position?"

### Sobre a equipa
- "Can you tell me about the team I'd be working with?"
- "What's the team's biggest strength? And what's an area you're actively working to improve?"
- "How long have the team members been in their current roles?"

### Sobre a empresa e cultura
- "How would you describe the company culture in 3 words?"
- "What do you enjoy most about working here?"
- "How has the company changed in the last 2 years?"
- "Where do you see the company in 3 years?"

### Sobre o processo
- "What are the next steps in the process?"
- "When can I expect to hear back?"
- "Is there anything you'd like me to clarify about my background?"

## Frases de fecho que deixam boa impressão

**Reafirma o interesse:**
> "Based on everything we've discussed today, I'm even more excited about this opportunity. I believe my experience in [X] aligns well with what you're looking for, and I'd love the chance to contribute to [specific company goal]."

**Agradecimento:**
> "Thank you so much for your time today. I really enjoyed our conversation, especially the discussion about [specific topic]. I'm looking forward to the next steps."

**Email de follow-up (24-48h depois):**
> "Hi [Name], thank you for the interview yesterday. I enjoyed learning more about [role] and was particularly excited about [something specific]. I remain very interested in the opportunity and look forward to hearing about the next steps. Best regards, [Name]"

## Negociação salarial em inglês

### Quando perguntam sobre expectativas
> "I'd love to learn more about the full scope of the role before discussing numbers. Could you share the budgeted range for this position?"

Se insistirem:
> "Based on my research and experience, I'm targeting something in the range of $[X] to $[Y]. But I'm flexible depending on the full compensation package."

### Quando recebes uma oferta
> "Thank you so much — I'm genuinely excited about this opportunity. I'd like to take a day or two to review the details carefully. Is that okay?"

### A contra-proposta
> "I've reviewed the offer and I'm very enthusiastic about joining the team. I was hoping we could discuss the base salary — based on my research and the value I bring in [specific areas], I was targeting something closer to $[amount]. Is there any flexibility there?"

### Se não há margem no salário
> "I understand. Is there flexibility in any other part of the package — such as a signing bonus, additional vacation days, or an earlier performance review?"`,
      },
    ],
  },
  {
    id: 16,
    title: 'Assessment Centers e Dinâmicas de Grupo',
    desc: 'Domina as avaliações coletivas usadas por grandes empresas: dinâmicas, role plays, apresentações e in-tray exercises.',
    duration: '2h 45min',
    icon: '🎭',
    isPro: true,
    color: { bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', badge: 'bg-fuchsia-100 text-fuchsia-700', icon: 'bg-fuchsia-500' },
    lessons: [
      {
        id: '16-1',
        title: 'O que é um Assessment Center e por que existe',
        duration: '20 min',
        content: `# O que é um Assessment Center e por que existe

## O que é

Um Assessment Center (AC) é uma metodologia de avaliação que usa múltiplos exercícios e observadores para avaliar candidatos em situações simuladas. É diferente de uma entrevista: em vez de perguntar "o que você faria se...", o AC coloca você para fazer.

Empresas que mais usam: multinacionais, consultorias, bancos, grandes varejistas, programas de trainee e estágios de alto nível.

## Por que as empresas usam

- **Validade preditiva** maior que entrevistas tradicionais — o comportamento observado prediz melhor o desempenho real
- **Reduz viés** do entrevistador — múltiplos avaliadores, critérios padronizados
- **Avalia soft skills** que não aparecem no CV: liderança, colaboração, gestão de pressão

## Estrutura típica de um AC de 1 dia

| Horário | Atividade |
|---|---|
| 09h00 | Boas-vindas e apresentação |
| 09h30 | Dinâmica de grupo (caso empresarial) |
| 11h00 | Entrevista individual por competências |
| 12h00 | Almoço (também é observado!) |
| 13h30 | In-tray exercise ou estudo de caso individual |
| 15h30 | Role play (cliente difícil, feedback, negociação) |
| 16h30 | Apresentação individual |
| 17h30 | Encerramento |

## O que os avaliadores observam

Em todos os exercícios, avaliadores anotam comportamentos específicos mapeados a competências:

- **Orientação para resultados** — foca no objetivo mesmo sob pressão?
- **Trabalho em equipa** — contribui e deixa os outros contribuírem?
- **Liderança** — influencia sem impor, facilita o grupo?
- **Comunicação** — clara, assertiva, adaptada ao interlocutor?
- **Resolução de problemas** — estruturado, criativo, baseado em dados?
- **Resiliência** — mantém a qualidade quando o tempo aperta?

## O que ninguém te conta

O almoço e os intervalos também são momentos de observação. Comportamento com a equipa de apoio, naturalidade nas conversas, curiosidade genuína sobre a empresa — tudo conta.

Não significa ser artificial. Significa estar presente e ser você mesmo de forma consistente.`,
      },
      {
        id: '16-2',
        title: 'Dinâmicas de grupo: como se destacar sem atropelar',
        duration: '35 min',
        content: `# Dinâmicas de grupo: como se destacar sem atropelar

## O erro mais comum

A maioria dos candidatos acha que precisa falar mais para se destacar. O resultado: todos falam ao mesmo tempo, ninguém ouça, o grupo não chega a lugar nenhum — e os avaliadores anotam exatamente isso.

Os candidatos que passam são os que **facilitam o grupo a chegar a uma boa decisão**, não os que dominam a conversa.

## Tipos de dinâmica de grupo

### Caso empresarial coletivo
O grupo recebe um problema de negócio e tem 45-60 minutos para chegar a uma recomendação.

### Discussão sem líder definido
Cada candidato defende uma posição (sorteada ou escolhida). O grupo deve chegar a consenso.

### Simulação de reunião
O grupo assume papéis numa empresa fictícia e precisa tomar decisões em conjunto.

### Exercício de recursos limitados
Distribuir orçamento, priorizar projetos, alocar pessoas — com recursos insuficientes para tudo.

## A estratégia dos 5 papéis valorizados

Em qualquer dinâmica, há papéis que os avaliadores querem ver. Você não precisa fazer todos — mas garanta pelo menos 2-3:

**1. O estruturador**
> "Antes de começarmos, que tal definirmos como vamos organizar o tempo? Temos 45 minutos..."

Estabelece o processo. Extremamente valorizado — mostra liderança de processo.

**2. O sintetizador**
> "Então, se eu entendi bem, estamos de acordo em A e B. A divergência é sobre C, certo?"

Resume o estado da discussão. Mantém o grupo no trilho.

**3. O incluidor**
> "João, você ainda não se posicionou sobre isso — qual é sua visão?"

Puxa quem está em silêncio. Mostra consciência coletiva.

**4. O questionador de premissas**
> "Antes de decidir isso, precisamos saber se temos dados sobre o comportamento do cliente neste segmento..."

Adiciona rigor. Evita que o grupo tome decisão com premissa errada.

**5. O tomador de tempo**
> "Faltam 10 minutos — precisamos chegar a uma conclusão. O que decidimos?"

Mantém o foco no objetivo. Crítico no final das dinâmicas.

## Comportamentos que eliminam candidatos

- ❌ Interromper constantemente outros candidatos
- ❌ Ignorar sugestões dos colegas sem explicação
- ❌ Ficar em silêncio por mais de 5 minutos seguidos
- ❌ Agredir verbalmente ou ironizar a posição de outro
- ❌ Abandonar a posição original sem argumentação (apenas para agradar)
- ❌ Monopolizar o whiteboard ou o papel de facilitador sem convidar o grupo

## Script de entrada poderoso

Quando a dinâmica começa e ninguém fala, este é o momento para tomar a iniciativa:

> "Podemos começar por garantir que entendemos bem o problema? Vou resumir o que li e vocês complementam se faltou algo..."

Isso posiciona você como estruturador desde o início — sem impor nem excluir.`,
      },
      {
        id: '16-3',
        title: 'In-tray exercise e estudo de caso individual',
        duration: '30 min',
        content: `# In-tray exercise e estudo de caso individual

## O que é um in-tray exercise

Você recebe uma pasta com 15-25 documentos (emails, relatórios, memorandos, mensagens) de um executivo fictício que acabou de entrar de férias. Tem 60-90 minutos para:

1. Priorizar o que é urgente vs. importante
2. Redigir respostas ou indicar ações para cada item
3. Justificar suas decisões

O que avaliam: gestão de prioridades, julgamento executivo, comunicação escrita, capacidade de agir com informação incompleta.

## Estratégia para o in-tray

**Fase 1 (10 min): Leitura rápida de tudo**
Não responda nada ainda. Leia todos os documentos para entender o contexto geral, as relações entre os itens e identificar conflitos de prioridade.

**Fase 2 (5 min): Classifique**
Separe em 3 pilhas:
- 🔴 Urgente e importante (responda primeiro)
- 🟡 Importante mas não urgente (delegue ou agende)
- ⚪ Pouco relevante (arquive ou ignore com justificativa)

**Fase 3 (45-60 min): Responda e documente**
Para cada item, indique: o que vai fazer, quem vai envolver, em que prazo, e por quê.

**Fase 4 (5-10 min): Revisão**
Verifique consistência — suas decisões não podem se contradizer.

## Erros típicos no in-tray

- Tentar responder em ordem, sem priorizar
- Responder emails com detalhes excessivos em vez de decisões claras
- Não justificar as priorizações
- Ignorar itens que parecem sem importância (às vezes são armadilhas)
- Não delegar — tentar resolver tudo pessoalmente

## Estudo de caso individual

Formato: recebe dados de uma empresa/situação e tem 30-60 minutos para preparar uma análise com recomendação.

**Estrutura recomendada de resposta:**

1. **Diagnóstico** — qual é o problema real? (não só o sintoma)
2. **Análise** — dados relevantes, premissas, trade-offs
3. **Opções** — 2-3 alternativas com prós e contras
4. **Recomendação** — escolha clara com justificativa
5. **Próximos passos** — o que fazer primeiro, quem envolve

**O que diferencia os aprovados:** chegam a uma recomendação clara e defendível, não apenas "depende". Avaliadores querem ver julgamento, não apenas análise.`,
      },
      {
        id: '16-4',
        title: 'Role plays: cliente difícil, feedback e negociação',
        duration: '30 min',
        content: `# Role plays: cliente difícil, feedback e negociação

## O que são role plays em Assessment Centers

Você recebe um briefing (5-10 min de leitura) e depois atua numa conversa simulada com um avaliador que interpreta um papel: cliente insatisfeito, colaborador com baixo desempenho, fornecedor em negociação, gestor a dar feedback.

Duração típica: 15-20 minutos de interação + 5 min de debriefing.

## Os 3 tipos mais comuns

### 1. Cliente insatisfeito
Situação: cliente reclama de produto/serviço com razão (ou sem razão).

O que avaliam: empatia, resolução de conflito, orientação para o cliente, criatividade em soluções.

**Estrutura de resposta:**
1. Escuta ativa sem interromper (deixe a pessoa desabafar)
2. Valide o sentimento: *"Entendo que isso foi frustrante..."*
3. Peça detalhes para entender o problema real
4. Proponha solução concreta e realista
5. Confirme se a solução resolve: *"Isso resolveria sua questão?"*

### 2. Feedback a colaborador com baixo desempenho
Situação: você é o gestor de alguém que está falhando em entregas.

**Estrutura SBI (Situação-Comportamento-Impacto):**
> "Na última semana [**Situação**], percebi que os relatórios chegaram com 2 dias de atraso [**Comportamento**]. Isso impactou a reunião com o cliente e gerou retrabalho para a equipa [**Impacto**]. O que aconteceu?"

Escuta a resposta. Depois defina expectativa clara e acompanhamento.

### 3. Negociação com fornecedor
Situação: precisa renegociar prazo, preço ou condições.

**Princípio de Harvard:** separe pessoa do problema. Busque interesses, não posições.

Pergunte antes de propor: *"Qual é o maior constrangimento do vosso lado neste momento?"* — a resposta muitas vezes abre espaço que você não imaginava.

## Comportamentos que passam e que eliminam

| ✅ Valorizado | ❌ Elimina |
|---|---|
| Escuta ativa (silêncio estratégico) | Interromper antes de ouvir tudo |
| Valida emoções antes de resolver | Ir direto à solução sem empatia |
| Faça perguntas para entender | Assume que já entendeu |
| Propõe solução concreta | Fica em generalidades |
| Mantém a calma sob pressão | Fica defensivo ou se desculpa em excesso |

## Preparação prática

Antes do AC, pratique 2-3 role plays com um amigo. O desconforto de fazer em voz alta pela primeira vez é muito real — melhor sentir isso em casa do que no centro de avaliação.`,
      },
      {
        id: '16-5',
        title: 'Apresentação individual: estrutura e presença',
        duration: '30 min',
        content: `# Apresentação individual: estrutura e presença

## Formatos mais comuns

**Apresentação preparada (com tempo):**
Recebe tema com 20-30 min de preparo, apresenta 5-10 min, responde perguntas.

**Apresentação surpresa:**
Recebe tema e tem 2-3 min para estruturar mentalmente antes de apresentar.

**Pitch de negócio:**
Apresenta proposta/solução para problema fictício a "executivos" (avaliadores).

## Estrutura em 3 partes que sempre funciona

### 1. Abertura com impacto (30 seg)
Não comece com "Bom dia, meu nome é...". Comece com o ponto central:
> *"Vou argumentar que a empresa deve expandir para o mercado B2B — e vou mostrar 3 razões por que isso vai dobrar a receita em 2 anos."*

### 2. Desenvolvimento (70% do tempo)
Estrutura piramidal: conclusão primeiro, evidências depois.

Para cada ponto: afirmação → evidência/dado → implicação.

Use transições explícitas:
- *"O segundo ponto é..."*
- *"Isso nos leva a..."*
- *"Em resumo sobre este ponto..."*

### 3. Encerramento memorável (30 seg)
Retome a tese principal + chamada à ação clara:
> *"Em resumo: 3 razões apontam para B2B. O próximo passo é um projeto piloto de 90 dias com 5 clientes. Perguntas?"*

## Presença executiva durante a apresentação

**Contato visual:** distribua por todos os avaliadores. 3-5 segundos por pessoa antes de mudar.

**Voz:** fale mais devagar do que parece necessário. Pausas estratégicas comunicam confiança.

**Gestos:** mãos visíveis e naturais. Evite apontar para a audiência.

**Postura:** de pé sempre que possível, ligeiramente inclinado para a frente.

## Respondendo perguntas difíceis

Se não sabe a resposta:
> *"Boa pergunta. Não tenho o dado exato, mas baseado no que apresentei, a minha hipótese seria... Confirmaria depois com pesquisa adicional."*

Se a pergunta é para desestabilizar:
> *"Percebo o ceticismo — é legítimo. Vou reforçar o argumento central..."*

Nunca diga "não sei" e pare. Sempre complete com raciocínio.`,
      },
    ],
  },
  {
    id: 17,
    title: 'Big Techs e Startups: Processos Seletivos Específicos',
    desc: 'Entende como funcionam os processos do Google, Meta, Amazon, Microsoft e startups de alto crescimento — e como passar em cada um.',
    duration: '3h 30min',
    icon: '🚀',
    isPro: true,
    color: { bg: 'bg-sky-50', border: 'border-sky-200', badge: 'bg-sky-100 text-sky-700', icon: 'bg-sky-500' },
    lessons: [
      {
        id: '17-1',
        title: 'Como as big techs estruturam seus processos seletivos',
        duration: '25 min',
        content: `# Como as big techs estruturam seus processos seletivos

## O que diferencia o processo de uma big tech

Processo de uma empresa comum: CV → entrevista RH → entrevista técnica → oferta. Dura 2-4 semanas.

Processo de uma big tech: CV → screening → 4-7 entrevistas em painel → debrief → calibration → oferta. Dura 6-14 semanas.

A diferença central: **comitê de contratação**, não decisão individual. Múltiplos entrevistadores avaliam de forma independente, os resultados são calibrados em reunião coletiva. Isso elimina muito viés individual — mas torna o processo mais longo e mais imprescindível de preparação.

## As 4 dimensões avaliadas em todas as big techs

Independente do cargo ou empresa, as grandes techs avaliam:

**1. Competência técnica (Technical Bar)**
Você consegue fazer o trabalho? Testes de código, design de sistemas, análise, gestão de produto — dependendo da área.

**2. Competências comportamentais (Behavioral)**
Você se encaixa na forma de trabalhar? Perguntas STAR focadas em princípios específicos da empresa.

**3. Liderança (Leadership)**
Mesmo sem título de gestor — você influencia, resolve ambiguidade, prioriza?

**4. Fit com a missão (Mission/Culture Fit)**
Por que esta empresa? Demonstra entender e se identificar com o que a empresa faz.

## Visão geral dos processos por empresa

### Google
- Processo mais longo do mercado: 5-8 entrevistas de 45 min cada
- Avaliação em 4 dimensões: General Cognitive Ability, Leadership, Googleyness, Role-related knowledge
- Decisão tomada por comitê central (não pelo gestor direto)
- Foco forte em pensamento estruturado e comunicação clara sob pressão

### Meta (Facebook)
- Processo focado em impacto ("Move Fast, Build Things")
- Perguntas comportamentais ligadas a princípios como "Be Direct and Respect Your Colleagues"
- Para tech: coding + system design + behavioral em separado
- Tende a ser mais direto e rápido que Google

### Amazon
- 14 Leadership Principles são o eixo central de TUDO
- Cada pergunta comportamental é mapeada a 1-2 princípios
- Método STAR obrigatório — respostas sem estrutura são penalizadas
- "Bar Raiser": entrevistador independente com poder de veto

### Microsoft
- Processo mais humanizado e colaborativo
- Foco em "Growth Mindset" (conceito de Carol Dweck)
- Para tech: coding, design, behavioral — mas cultura mais aberta a erros
- Gestor direto tem mais peso na decisão final

## Quanto tempo preparar

| Nível | Preparação recomendada |
|---|---|
| Júnior/Estágio | 4-8 semanas de preparação intensiva |
| Pleno | 6-10 semanas |
| Sênior | 8-14 semanas |
| Staff/Principal | 12-20 semanas |`,
      },
      {
        id: '17-2',
        title: 'Os 14 Leadership Principles da Amazon: como dominá-los',
        duration: '40 min',
        content: `# Os 14 Leadership Principles da Amazon

## Por que os LPs são tudo na Amazon

Cada entrevistador da Amazon tem 2-3 Leadership Principles designados para avaliar. Cada pergunta comportamental é mapeada a pelo menos 1 LP. Sem dominar os LPs, não passa nas entrevistas comportamentais — independente de competência técnica.

## Os 14 Leadership Principles (resumidos para entrevista)

### 1. Customer Obsession
Começa pelo cliente e trabalha de trás para frente. Ganha a confiança e mantém-na.
*Pergunta típica: "Conte sobre uma vez em que você foi além do esperado para satisfazer um cliente."*

### 2. Ownership
Age como dono. Pensa no longo prazo. Nunca diz "não é meu problema".
*Pergunta típica: "Conte sobre um problema que estava fora do seu escopo mas que você resolveu mesmo assim."*

### 3. Invent and Simplify
Busca novas ideias em todo lugar. Simplifica.
*Pergunta típica: "Conte sobre uma inovação que você trouxe e como a implementou."*

### 4. Are Right, A Lot
Tem bom julgamento. Busca diversidade de perspectivas. Reconhece quando está errado.
*Pergunta típica: "Conte sobre uma decisão difícil que tomou com dados incompletos."*

### 5. Learn and Be Curious
Nunca para de aprender. Explora novas possibilidades.
*Pergunta típica: "O que você aprendeu recentemente por conta própria? Como aplicou?"*

### 6. Hire and Develop the Best
Eleva o nível de quem está ao redor. Reconhece talentos excepcionais.
*Pergunta típica: "Conte sobre alguém que você desenvolveu ou mentoreou."*

### 7. Insist on the Highest Standards
Tem padrões altos. Não aceita trabalho mediano.
*Pergunta típica: "Conte sobre uma vez que você insistiu em qualidade quando havia pressão para entregar rápido."*

### 8. Think Big
Cria e comunica direção ousada. Pensa diferente.
*Pergunta típica: "Qual foi a ideia mais ousada que você teve e executou?"*

### 9. Bias for Action
Velocidade importa. Muitas decisões são reversíveis — age.
*Pergunta típica: "Conte sobre uma vez que agiu sem ter todos os dados necessários."*

### 10. Frugality
Faça mais com menos. Restrição gera engenhosidade.
*Pergunta típica: "Conte sobre uma vez que entregou resultado expressivo com poucos recursos."*

### 11. Earn Trust
Escuta atentamente. Fala com franqueza. Respeita outros mesmo discordando.
*Pergunta típica: "Conte sobre uma vez que discordou de um superior e como conduziu."*

### 12. Dive Deep
Fica conectado aos detalhes. Questiona métricas com ceticismo saudável.
*Pergunta típica: "Conte sobre uma vez que analisou dados em profundidade e encontrou algo inesperado."*

### 13. Have Backbone; Disagree and Commit
Desafia decisões com as quais discorda — mesmo que seja desconfortável. Mas quando decidido, compromete-se totalmente.
*Pergunta típica: "Conte sobre uma vez que discordou de uma decisão da equipa e o que fez."*

### 14. Deliver Results
Foca em resultados e entrega com qualidade no prazo.
*Pergunta típica: "Conte sobre o maior desafio de entrega que você enfrentou e como superou."*

## Como preparar: o banco de histórias

Prepare 8-10 histórias STAR da sua carreira. Para cada uma, mapeie os LPs que ela pode ilustrar. Uma boa história cobre 3-4 LPs dependendo de como é contada.

Crie uma tabela:

| História | LPs cobertos |
|---|---|
| Redesenhei o processo de onboarding | #2, #7, #9, #14 |
| Assumi projeto abandonado | #2, #9, #13, #14 |`,
      },
      {
        id: '17-3',
        title: 'Processos seletivos em startups: seed, série A, B e C+',
        duration: '30 min',
        content: `# Processos seletivos em startups por estágio

## Por que o estágio importa tanto

Uma startup em seed de 8 pessoas e uma série C de 300 pessoas são mundos completamente diferentes — apesar de ambas serem chamadas de "startup". O processo seletivo, os critérios e o que você deve mostrar variam radicalmente.

## Seed / Pre-seed (até 20 pessoas)

**O processo:** geralmente 2-3 conversas diretas com founders. Informal. Rápido (1-2 semanas).

**O que avaliam acima de tudo:**
- Vontade genuína de construir (não apenas trabalhar)
- Capacidade de fazer coisas que estão fora do job description
- Alta tolerância à ambiguidade e mudança de planos

**O que mostrar:**
- Projetos pessoais, side projects, coisas que construiu por conta própria
- Exemplos em que "encontrou o caminho" sem ter um manual
- Entusiasmo real pelo problema que a startup resolve (eles percebem quem é genuíno)

**Erros típicos:** pedir processos estruturados, perguntar sobre plano de carreira formal, não ter estudado o produto/problema da empresa.

## Série A (20-80 pessoas)

**O processo:** 3-5 entrevistas. Começa a aparecer estrutura. RH ou People Ops envolvido.

**O que avaliam:**
- Competência técnica clara na área
- Capacidade de escalar com a empresa
- Cultura: colaboração sem ego, velocidade de execução

**O que mostrar:**
- Resultados mensuráveis em contextos de crescimento rápido
- Que você já viu (e sobreviveu a) caos organizado
- Que aprenda rápido quando entra numa área nova

## Série B/C (80-500 pessoas)

**O processo:** mais formalizado. 4-6 entrevistas. Pode incluir case ou take-home assignment.

**O que avaliam:**
- Especialização real (generalistas viram menos valorizados)
- Capacidade de liderar sem autoridade formal (squads, projetos cross-funcionais)
- Fit com valores explícitos da empresa

**Take-home assignments:** muito comuns neste estágio. Dica: documente o processo de raciocínio, não apenas o resultado. Mostre que você questiona premissas antes de executar.

## Série D+ / Unicórnios

Processo similar a uma empresa de médio porte. Pode incluir Assessment Center.

O diferencial: velocidade e impacto ainda são valorizados, mas governança e processo já existem. Mostre que você consegue trabalhar com estrutura sem perder a mentalidade de dono.`,
      },
      {
        id: '17-4',
        title: 'Take-home assignments e technical screens',
        duration: '35 min',
        content: `# Take-home assignments e technical screens

## Take-home assignments

São tarefas enviadas antes ou durante o processo para você fazer fora da entrevista — análises, estratégias, código, planos de produto.

### Por que as empresas usam
- Avalia trabalho real em condições mais próximas do dia-a-dia
- Permite avaliação mais profunda do que 45 min de entrevista
- Reduz o impacto do nervosismo

### O que os avaliadores realmente procuram

**Para perfis de análise/estratégia:**
- Clareza de raciocínio (processo, não só conclusão)
- Uso de dados para suportar decisões (mesmo dados hipotéticos)
- Capacidade de priorizar — não tentar resolver tudo

**Para perfis técnicos:**
- Código limpo e legível (não apenas funcional)
- Decisões de arquitetura justificadas
- README claro explicando as escolhas

**Para perfis de produto:**
- Estrutura: problema → usuário → solução → métricas
- Opiniões claras, não só opções

### As 3 regras de ouro do take-home

1. **Documente seu raciocínio** — o que você considerou e descartou vale tanto quanto o que entregou
2. **Respeite o tempo estimado** — se disseram 4 horas, entregue em 4 horas. Entregar algo muito além do esperado pode ser sinal negativo (dificuldade de priorizar)
3. **Pergunte antes de começar** — uma boa pergunta de esclarecimento mostra maturidade

### Template de apresentação de take-home

\`\`\`
1. Entendimento do problema (2-3 linhas)
2. Premissas assumidas
3. Metodologia / abordagem
4. Análise / desenvolvimento
5. Conclusão / recomendação
6. O que faria diferente com mais tempo/dados
\`\`\`

## Technical screens (entrevistas técnicas ao vivo)

### Coding interviews

Plataformas: CoderPad, HackerRank, LeetCode (ao vivo).

**O que importa mais que resolver:**
- Verbalizar o raciocínio em tempo real
- Perguntar clarificações antes de começar a codificar
- Identificar edge cases antes de ser perguntado
- Complexidade de tempo e espaço mencionada espontaneamente

**Se travar:** diga em voz alta. *"Estou pensando entre esta abordagem e outra — deixa eu explorar as duas."* Entrevistadores preferem transparência a silêncio.

### System design

Usado para sênior+. *"Como você desenharia o Twitter? Um sistema de pagamentos? Um feed de notícias?"*

**Framework recomendado:**
1. Clarifica requisitos (funcionais e não-funcionais)
2. Estima escala (usuários, requests/segundo, armazenamento)
3. Design de alto nível (componentes principais)
4. Deep dive nos componentes críticos
5. Trade-offs das suas escolhas`,
      },
      {
        id: '17-5',
        title: 'Cultura e fit: o que realmente avaliam além da técnica',
        duration: '20 min',
        content: `# Cultura e fit: o que realmente avaliam além da técnica

## Por que bons candidatos são rejeitados

O motivo mais comum de rejeição pós-entrevistas técnicas bem-sucedidas é **culture fit** mal avaliado. Não é discriminação — é que empresas de tecnologia têm formas específicas de trabalhar, e pessoas que não se encaixam nessas formas tornam o trabalho de todos mais difícil.

## O que "culture fit" realmente significa em tech

**Autonomia e ambiguidade:** você consegue trabalhar sem que alguém defina cada passo? Faça perguntas melhores do que pedidos de permissão?

**Velocidade vs. perfeição:** cada empresa tem seu ponto de equilíbrio. Startups cedo valorizam velocidade; Google valoriza robustez. Você sabe identificar e se adaptar?

**Comunicação escrita:** em empresas remote-first ou com times distribuídos, escrever bem é tão importante quanto falar bem.

**Ego vs. impacto:** você credita o sucesso a si mesmo ou ao time? Prefere ter razão ou ter o melhor resultado?

**Feedback como ferramenta:** você busca feedback? Como reage a crítica direta?

## Como demonstrar fit nas entrevistas

**Pesquise antes** — leia o blog de engenharia, os posts do CEO no LinkedIn, reviews no Glassdoor. Mencione o que leu.

**Perguntas que mostram fit:**
- *"Como é o processo de tomada de decisão quando há desacordo entre times?"*
- *"O que diferencia quem performa muito bem aqui de quem performa bem?"*
- *"Como é o onboarding de novas pessoas — o que as ajuda a impactar rápido?"*

## Red flags que você deve observar na empresa

- Respostas vagas sobre cultura (*"somos como uma família"* — red flag)
- Avaliadores que chegam atrasados e não pedem desculpas
- Processo extremamente longo sem comunicação clara
- Perguntas de entrevista desrespeitosas ou que violam privacidade
- Todos os entrevistadores repetem os mesmos adjetivos sobre a cultura (roteiro)

Lembre: você também está avaliando se quer trabalhar ali.`,
      },
    ],
  },
  {
    id: 18,
    title: 'Promoção Interna: Crescer Sem Mudar de Empresa',
    desc: 'Estratégias para se tornar visível, construir o caso para promoção e navegar a política interna com inteligência.',
    duration: '2h 30min',
    icon: '📈',
    isPro: true,
    color: { bg: 'bg-lime-50', border: 'border-lime-200', badge: 'bg-lime-100 text-lime-700', icon: 'bg-lime-500' },
    lessons: [
      {
        id: '18-1',
        title: 'Como funcionam as promoções de verdade (o que ninguém te conta)',
        duration: '25 min',
        content: `# Como funcionam as promoções de verdade

## O mito da promoção por mérito

A maioria das pessoas acredita que promoções acontecem quando você trabalha muito e entrega bem. Isso é necessário — mas não suficiente.

Promoções acontecem quando a intersecção de três elementos está presente:
1. **Você entrega resultados acima do esperado** (o mínimo necessário)
2. **As pessoas certas sabem disso** (visibilidade)
3. **Há espaço ou necessidade para o cargo acima** (timing e contexto)

Muitos profissionais excelentes ficam anos sem promoção porque dominam o ponto 1 mas ignoram os pontos 2 e 3.

## O ciclo de promoções na maioria das empresas

As promoções formais acontecem em janelas específicas: fim de ano, meio de ano, ciclos de performance review. Entender o calendário é estratégico.

**6 meses antes da janela:** comece a construir o caso ativamente.
**3 meses antes:** tenha a conversa explícita com seu gestor.
**1 mês antes:** garanta que seu gestor tem todos os dados para te defender.

## O papel do gestor direto

Na maioria das empresas, o gestor direto é seu principal patrocinador — ou seu principal obstáculo. Eles precisam:
- Acreditar que você está pronto
- Ter dados concretos para defender sua promoção em reuniões de calibração
- Estar dispostos a "gastar capital político" por você

Se seu gestor não está fazendo isso, você precisa mudar o gestor, mudar sua estratégia, ou aceitar que a promoção não virá por esse caminho.

## Calibration meetings: onde as promoções são decididas

Na maioria das grandes empresas, gestores se reúnem periodicamente para calibrar avaliações de performance e promoções. Nessas reuniões:

- Seu gestor apresenta seu caso
- Outros gestores questionam ou validam
- A decisão final não é do seu gestor sozinho

Isso significa que você precisa ser conhecido e respeitado por pessoas além do seu gestor direto. Cross-functional relationships são investimento de carreira, não apenas trabalho.`,
      },
      {
        id: '18-2',
        title: 'Visibilidade estratégica: ser conhecido pelas razões certas',
        duration: '30 min',
        content: `# Visibilidade estratégica: ser conhecido pelas razões certas

## O problema da visibilidade passiva

Muitos profissionais excelentes esperam que o trabalho fale por si. Em equipes pequenas, isso às vezes funciona. Em organizações médias e grandes, é uma estratégia de stagnação.

Visibilidade não é autopromoção vazia. É garantir que as contribuições certas cheguem às pessoas certas.

## 5 formas de aumentar visibilidade estrategicamente

### 1. Apresente resultados, não atividades
Em reuniões de equipa, relatórios e updates: foque em impacto mensurável, não em volume de trabalho.

❌ "Esta semana trabalhei no projeto X e fiz várias reuniões de alinhamento."
✅ "Esta semana finalizamos a fase 1 do projeto X — o que vai reduzir o tempo de processo em 30% a partir de segunda-feira."

### 2. Tome iniciativas além do escopo
Resolver um problema que não é "seu" — especialmente se beneficia outros times — gera capital político e visibilidade.

Identifique problemas que todos reclamam mas ninguém resolve. Proponha solução. Execute. Comunique o resultado.

### 3. Construa relações verticais e horizontais
Agende cafés ou conversas de 20 min com líderes sênior de outras áreas. O pretexto: aprender sobre o trabalho deles. O objetivo real: ser conhecido e lembrado.

### 4. Contribua com conhecimento coletivo
Apresente em reuniões de equipa alargadas. Escreva documentos internos sobre o que você aprendeu. Compartilhe aprendizados em canais de Slack/Teams relevantes.

### 5. Solicite oportunidades de exposição ao seu gestor
> *"Gostaria de apresentar os resultados do projeto X na próxima reunião de liderança. Faça sentido?"*

Gestores normalmente apoiam — tira trabalho deles e demonstra maturidade.

## A diferença entre visibilidade e política negativa

Visibilidade positiva: baseada em contribuições reais, beneficia o coletivo, é transparente.

Política negativa: baseada em aparecer sem substância, diminui outros para se elevar, é percebida e ressente.

A linha é clara: se você está fazendo coisas que realmente ajudam e comunicando isso, é visibilidade estratégica. Se está exagerando contribuições ou ocultando as de outros, é política destrutiva — e acaba mal.`,
      },
      {
        id: '18-3',
        title: 'Como pedir promoção: a conversa que a maioria evita',
        duration: '30 min',
        content: `# Como pedir promoção: a conversa que a maioria evita

## Por que a maioria não pede

1. Medo de ouvir "não" — que é tratado como rejeição pessoal
2. Acredita que o gestor vai perceber "sozinho"
3. Não sabe como estruturar a conversa
4. Teme parecer ambicioso de forma negativa

A realidade: gestores raramente promovem quem não sinalizou desejo de crescer. A conversa é necessária.

## Quando ter a conversa

- **Não:** logo após um erro ou projeto problemático
- **Não:** em período de crise na empresa ou mudança organizacional
- **Sim:** após entrega relevante com resultado mensurável
- **Sim:** 3-4 meses antes do ciclo formal de performance review
- **Sim:** quando você já está entregando responsabilidades do nível acima

## Como estruturar a conversa

**Abertura:**
> *"Queria conversar sobre minha trajetória aqui. Estou no cargo de [X] há [Y meses/anos] e tenho pensado sobre crescimento. Posso compartilhar minha perspectiva e ouvir a sua?"*

**O caso:**
> *"Nos últimos [período], contribuí com [resultados específicos com números]. Além das responsabilidades do meu cargo, tenho assumido [responsabilidades do nível acima]. Acredito que estou pronto para o próximo nível e gostaria de entender o que seria necessário para isso acontecer."*

**A pergunta direta:**
> *"Na sua visão, o que estou fazendo bem que devo continuar? E o que precisaria desenvolver para estar pronto para a promoção?"*

## Se o gestor disser "ainda não"

Não é fim de linha — é informação.

Perguntas a fazer após um "não":
- *"Quais são os critérios específicos para o próximo nível?"*
- *"O que você precisaria ver nos próximos 6 meses?"*
- *"Há algo no meu trabalho atual que preciso melhorar?"*

Documente as respostas. Se em 6 meses você cumpriu os critérios e ainda não houve promoção, você tem dados para uma conversa mais direta — ou para buscar o crescimento fora da empresa.`,
      },
      {
        id: '18-4',
        title: 'Navegar política interna sem se perder',
        duration: '25 min',
        content: `# Navegar política interna sem se perder

## Política não é palavrão

Toda organização tem política — dinâmicas de poder, influência e interesses. Ignorar isso não a elimina. Aprender a navegar com integridade é habilidade profissional, não fraqueza moral.

## Mapeando o poder real (não o organograma)

O organograma mostra hierarquia formal. O mapa de poder real mostra quem influencia decisões.

Perguntas para mapear:
- Quem o CEO/liderança sênior escuta de verdade?
- Quem sempre sabe das mudanças antes dos comunicados oficiais?
- Cujas opiniões bloqueiam ou aceleram iniciativas?
- Quem outros pedem opinião antes de decidir?

Construa relações com essas pessoas — não por manipulação, mas porque elas entendem o contexto real da organização.

## Gestão de stakeholders difíceis

### O colega que sabota
Não reaja publicamente. Documente comportamentos com datas e factos. Tenha conversa direta se for seguro. Envolva o gestor apenas com evidências.

### O gestor que não te apoia
Primeira pergunta: é intencional ou ele não sabe como te apoiar? Muitos gestores simplesmente não sabem fazer desenvolvimento de carreira.

Se intencional: avalie mudar de equipa internamente ou buscar oportunidade externa.

Se não-intencional: seja explícito sobre o que precisa. *"Para conseguir a promoção, precisaria que você me incluísse nas reuniões de liderança de X. Isso seria possível?"*

### O concorrente interno
Há outra pessoa competindo pelo mesmo cargo. A resposta errada: competição destrutiva. A certa: demonstre que você soma, não subtrai — colabore visivelmente.

## Quando a política está contra você

Sinais de que você está em desvantagem política:
- Excluído de reuniões importantes sem explicação
- Projetos relevantes vão para outros sem critério claro
- Feedback de performance vago e inconsistente
- Seu gestor não te defende quando questionado

Se 3 ou mais desses sinais estão presentes há mais de 6 meses: provavelmente é hora de buscar a promoção em outro lugar. Às vezes, o crescimento mais rápido é lateral — para outra empresa.`,
      },
    ],
  },
  {
    id: 19,
    title: 'Recolocação Após Demissão ou Layoff',
    desc: 'Guia prático para se recolocar com rapidez e estratégia após uma demissão — tratando os aspectos emocionais, práticos e de posicionamento.',
    duration: '2h',
    icon: '💪',
    isPro: false,
    color: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700', icon: 'bg-orange-600' },
    lessons: [
      {
        id: '19-1',
        title: 'Os primeiros 7 dias: o que fazer imediatamente',
        duration: '25 min',
        content: `# Os primeiros 7 dias após a demissão

## Dia 1-2: Permita-se processar

Demissão — mesmo quando esperada — é um choque. Sentimentos de raiva, vergonha, alívio, medo, tristeza são todos normais e podem coexistir. Tentar saltar direto para "modo busca" sem processar o que aconteceu resulta em candidaturas feitas com mau estado de espírito.

Reserve 24-48h para não fazer nada profissional. Converse com pessoas de confiança. Não publique nada nas redes sociais enquanto estiver emocional.

## Dia 2-4: Questões práticas urgentes

### Rescisão e direitos
- Verifique todos os cálculos da rescisão antes de assinar
- Entenda o que está recebendo: FGTS + multa, aviso prévio, férias, 13º proporcional
- Em caso de dúvida, consulte um advogado trabalhista (muitos fazem primeira consulta gratuita)
- Guarde todos os documentos da empresa antes do acesso ser cortado

### Seguro-desemprego
- Solicite dentro do prazo (geralmente até 120 dias após a demissão)
- Verifique elegibilidade: mínimo de 12 meses com carteira assinada para 1ª solicitação
- Calcule quanto tempo de benefício tem e use como runway para busca sem desespero

### Finanças
- Monte planilha de despesas mensais essenciais vs. opcionais
- Calcule quantos meses tem de reserva (FGTS + seguro + poupança)
- Se necessário, renegocie dívidas proativamente — antes de atrasar, não depois

## Dia 5-7: Preparação estratégica

### Atualize o CV imediatamente
Enquanto os números e detalhes de projetos estão frescos, documente tudo. Conquistas, métricas, projetos relevantes, ferramentas usadas.

### Faça o inventário de networking
Liste 20-30 contatos que podem ajudar: ex-colegas, ex-gestores, clientes, fornecedores, conhecidos do setor.

### Defina os próximos passos com calma
- Quer o mesmo cargo numa empresa similar?
- Quer mudar de área ou setor?
- Está aberto a freelance temporário enquanto busca?
- Há oportunidades internas em outras empresas do mesmo grupo?

Decisões tomadas no calor do momento de uma demissão raramente são as melhores. Uma semana de reflexão vale mais que agir precipitadamente.`,
      },
      {
        id: '19-2',
        title: 'Como explicar a demissão em entrevistas',
        duration: '30 min',
        content: `# Como explicar a demissão em entrevistas

## A pergunta que todo candidato teme

"Por que você saiu da última empresa?" — e quando a resposta é "fui demitido", muitos candidatos ficam sem saber o que dizer.

A boa notícia: demissões são extremamente comuns, especialmente após layoffs em massa dos últimos anos. Recrutadores experientes sabem disso. O que eles avaliam não é o facto de você ter sido demitido — mas como você lida com isso e o que fez desde então.

## Tipos de demissão e como comunicar cada um

### Layoff / Reestruturação (redução coletiva)

Esta é a mais fácil de comunicar — e a mais comum nos últimos anos.

> *"A empresa passou por uma reestruturação que eliminou minha área inteira — junto com mais [X] colegas. Foi uma decisão de negócio que não tinha relação com performance individual. Tenho referências excelentes de meu gestor direto, se precisar."*

**Por que funciona:** é verificável, não gera dúvida sobre você, e demonstra maturidade ao contextualizar sem dramatizar.

### Demissão individual (performance ou conflito)

Esta exige mais cuidado, mas ainda é gerenciável.

**O que nunca fazer:** falar mal da empresa ou do gestor. O recrutador vai imaginar que você fará o mesmo sobre eles.

**Framework honesto sem se autossabotar:**

> *"Naquele momento, havia um desalinhamento entre o que a empresa precisava e o que eu estava entregando em [área específica]. Aprendi muito com o processo — especialmente [lição concreta]. Hoje estou muito mais [habilidade] e busco um ambiente onde possa aplicar isso."*

Se houve conflito de gestão: *"Tivemos divergências sobre a direção estratégica da área. Acabou sendo melhor para ambos seguirmos caminhos diferentes."*

### Mutual agreement / PDV

> *"A empresa ofereceu um programa de desligamento voluntário e, avaliando meu momento de carreira, fez sentido aceitar para buscar novos desafios."*

## Como preparar a narrativa

1. **Seja breve** — não mais que 2-3 frases para explicar a saída
2. **Redirecione rápido** — termine sempre com o que você aprendeu ou o que busca
3. **Pratique em voz alta** — o desconforto na primeira vez que você diz é real
4. **Tenha referências prontas** — ex-gestores ou colegas dispostos a dar referência positiva neutralizam quase qualquer preocupação

## O timing de revelar

Se perguntado diretamente: seja honesto imediatamente.
Se não perguntado: você não precisa trazer no primeiro contato. No CV, basta indicar a data de saída. A explicação vem na entrevista.`,
      },
      {
        id: '19-3',
        title: 'Estratégia de recolocação acelerada',
        duration: '30 min',
        content: `# Estratégia de recolocação acelerada

## O erro que prolonga a busca

Candidatar-se em massa para qualquer vaga, sem estratégia, é o caminho mais longo. A taxa de retorno de candidaturas não direcionadas é de 2-3%. O caminho mais rápido para recolocação é sempre o networking.

## O plano de 30 dias para recolocação

### Semana 1: Base e ativação

**Dia 1-3: Materiais**
- CV atualizado e otimizado para ATS
- Perfil LinkedIn atualizado com "Open to Work" (visível só para recrutadores, se preferir)
- Lista de 15-20 empresas-alvo definida

**Dia 4-7: Ativação da rede**
Envie mensagem personalizada para 10 contatos da sua rede mais próxima:

> *"Oi [Nome], espero que esteja bem. Recentemente fui desligado da [empresa] e estou em busca ativa de novas oportunidades em [área]. Se você souber de alguma vaga ou puder me apresentar a alguém relevante, ficaria muito grato. Abraço, [Nome]"*

### Semana 2-3: Expansão e candidaturas

- 5-10 candidaturas por semana (qualidade > quantidade)
- 3-5 mensagens de networking por dia (LinkedIn, email, WhatsApp)
- Identificar 2-3 recrutadores especializados na sua área e entrar em contato

### Semana 4: Revisão e ajuste

Analise o que funcionou:
- Quais candidaturas geraram resposta?
- Quais empresas do networking responderam?
- Precisa ajustar o CV, o targeting ou o nível do cargo?

## Usar o período produtivamente

Além de candidatar-se, use o tempo para:

- **Freelance ou consultoria temporária** — gera renda e preenche o gap no CV
- **Certificações relevantes** — 4-6 semanas bem investidas
- **Projetos pessoais** — especialmente para tech e criativas
- **Mentorias e informational interviews** — aprenda e expanda rede simultaneamente

## Como lidar com o gap no CV

Um gap de 1-3 meses não precisa de explicação. Acima de 6 meses, tenha uma narrativa:

> *"Usei o período para [freelance / projeto pessoal / certificação / cuidar de família] enquanto buscava a oportunidade certa, em vez de aceitar a primeira oferta apenas para preencher o gap."*`,
      },
      {
        id: '19-4',
        title: 'Identidade profissional além do cargo',
        duration: '25 min',
        content: `# Identidade profissional além do cargo

## O perigo da identidade fundida ao trabalho

Quando você se apresenta como "Sou [cargo] na [empresa)", sua identidade está fundida ao cargo. Quando perde o emprego, perde parte de si.

Isso não é exagero — pesquisas em psicologia do trabalho mostram que demissão tem impacto semelhante ao luto em termos de resposta emocional, especialmente para pessoas com alta identidade ligada ao trabalho.

## Reconstruindo a narrativa de si mesmo

Durante a busca, é útil separar conscientemente:

**O que você faz** (habilidades, expertises) — não muda com a demissão.
**O que você realizou** (conquistas, impacto) — permanente, independente de onde você trabalhava.
**Quem você é** (valores, caráter, forma de trabalhar) — intacto.

Exercício: escreva 10 afirmações sobre você que não dependem de nenhuma empresa específica. *"Sou alguém que resolve problemas complexos com dados. Sou alguém que constrói times de alto desempenho. Sou alguém que aprenda novas ferramentas rapidamente."*

## Mantendo estrutura e propósito sem trabalho formal

A perda de estrutura é um dos aspectos mais difíceis da transição. Estratégias:

**Crie rotina deliberada:** horários fixos de "trabalho na busca", horários de não-trabalho.

**Mantenha contribuição:** voluntariado, mentoria, projetos open source — qualquer forma de dar algo cria senso de propósito.

**Cultive comunidade:** grupos de busca de emprego, masterminds, eventos da área. O isolamento amplia os pensamentos negativos.

**Celebre marcos pequenos:** a busca tem pouco feedback positivo — você precisa criá-lo. Cada candidatura enviada, cada contato respondido, cada entrevista agendada é uma vitória real.

## Quando considerar ajuda profissional

Se após 4+ semanas de demissão você ainda sente que não consegue começar a buscar, tem dificuldade de dormir, perdeu interesse em coisas que antes gostava, ou sente angústia persistente — considere falar com um psicólogo. Não é fraqueza; é inteligência em cuidar do recurso mais importante: você mesmo.`,
      },
    ],
  },
  {
    id: 20,
    title: 'Soft Skills que Decidem Carreiras',
    desc: 'As competências interpessoais que separam profissionais bons de extraordinários: comunicação, inteligência emocional, feedback e presença.',
    duration: '3h',
    icon: '🌟',
    isPro: false,
    color: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700', icon: 'bg-amber-500' },
    lessons: [
      {
        id: '20-1',
        title: 'Comunicação que influencia: falar menos, dizer mais',
        duration: '35 min',
        content: `# Comunicação que influencia

## O problema da comunicação corporativa

A maioria das comunicações no ambiente de trabalho é ineficaz: demasiado longa, sem ponto central claro, sem chamada à ação. Reuniões que poderiam ser emails. Emails que deveriam ser uma frase no Slack.

## A pirâmide invertida (Top-Down)

**Bottom-up (como a maioria faz):**
> "Analisámos os dados de Q1. Email tem CTR 3.2%, pago tem CPA R$45, orgânico cresceu 18%. Concluímos que deveríamos investir mais em orgânico."

**Top-down (como líderes eficazes fazem):**
> "Recomendo dobrar o investimento em SEO. É o canal com melhor ROI: cresceu 18% a custo quase zero, enquanto o pago tem CPA de R$45."

**Regra prática:** comece pela conclusão, depois pelos dados que a suportam.

## Email executivo de alto impacto

- **Assunto:** a decisão ou ação necessária, não o tema geral
  - ❌ "Atualização do projeto X"
  - ✅ "Aprovação necessária: mudança de prazo do projeto X"
- **1º parágrafo:** o que você precisa e quando
- **Desenvolvimento:** contexto e dados (quem concordar pode ignorar)
- **Encerramento:** próximo passo com responsável e data

## Em reuniões

**O pitch de contexto:**
> "Tenho 3 pontos. O principal é X [30 seg]. Posso começar por ele?"

Organiza a conversa antes de começar. Demonstra pensamento estruturado.

**Perguntas mais inteligentes:**
- Não: "Qual é o status do projeto?" (resposta: relatório de 10 min)
- Sim: "O projeto está no prazo para 15/03?" (resposta: sim ou não + contexto)`,
      },
      {
        id: '20-2',
        title: 'Inteligência emocional no trabalho',
        duration: '35 min',
        content: `# Inteligência emocional no trabalho

## O que é IE de facto

IE não é ser emotivo. É reconhecer emoções (próprias e alheias), entender o que causam, e usar essa informação produtivamente.

4 domínios (Goleman):
1. **Autoconsciência** — reconhecer suas emoções em tempo real
2. **Auto-regulação** — não agir impulsivamente por impulso emocional
3. **Consciência social** — perceber o estado dos outros
4. **Gestão de relacionamentos** — influenciar e colaborar eficazmente

## Autoconsciência: o início

Ao final de cada dia:
- Qual foi o momento mais frustrante?
- Qual foi o momento de mais energia?
- Houve alguma reação da qual não me orgulho?

Com o tempo, você vê padrões — quais situações te ativam emocionalmente.

## Auto-regulação: a pausa estratégica

O espaço entre estímulo e resposta é onde IE acontece.

Quando recebe feedback negativo ou mensagem hostil:
- Não responda imediatamente se estiver emocional
- Nomeie a emoção internamente ("estou frustrado")
- Pergunte: "Se responder assim, é o que quero?"

## Dar feedback com IE (modelo SBI)

**Situação → Comportamento → Impacto**

❌ "Você é desorganizado."
✅ "Na reunião de ontem [S], você chegou 15 min atrasado sem avisar [C]. Isso fez todos esperarem sem saber se aconteceria, gerando frustração [I]."

SBI descreve factos observáveis, não julgamentos de carácter.

## Receber feedback

1. Ouça até o fim sem interromper
2. Agradeça antes de responder
3. Faça perguntas de clarificação
4. Separe reação imediata de resposta
5. Decida conscientemente o que fazer com o feedback`,
      },
      {
        id: '20-3',
        title: 'Presença executiva: como ser levado a sério',
        duration: '30 min',
        content: `# Presença executiva: como ser levado a sério

## O que é presença executiva

Não é sobre cargo. É sobre a percepção que os outros têm de você — de que tem algo a acrescentar, pode ser confiado com responsabilidade, tem perspectiva.

## 3 pilares

### 1. Gravitas (como você age)
- Mantém calma sob pressão
- Toma posições claras e defende-as com dados
- Reconhece erros sem colapso de confiança
- Foca em soluções mais do que em problemas

**O que mina a gravitas:**
- Reclamar em público sem propor solução
- Mudar de posição sob pressão social sem nova informação
- Precisar de validação constante para decisões pequenas

### 2. Comunicação (como você fala)
- Fala com ritmo moderado — não acelera quando nervoso
- Usa silêncio estrategicamente (pausa = ponderação)
- Elimina enchimentos: "tipo", "sabes", "basicamente"
- É direto: "Não concordo porque..." vs. "Não sei se seria o melhor..."

**Exercício:** grave-se em 3 reuniões. Ouça depois. O que está lá que não devia?

### 3. Aparência visual
- Postura de abertura em reuniões (não braços cruzados)
- Contato visual distribuído em grupos
- Câmara ao nível dos olhos em vídeo

## Desenvolver presença sem autoridade formal

- **Nomeie o elefante na sala** com tato e solução
- **Tome posições públicas** em debates — quem nunca tem opinião é esquecível
- **Fale nos primeiros 5 minutos de reuniões** — quem fala cedo parece mais confiante
- **Gerencie o tempo do grupo:** "Faltam 10 min — qual é a decisão que precisamos tomar?"`,
      },
      {
        id: '20-4',
        title: 'Gestão de tempo como competência estratégica',
        duration: '30 min',
        content: `# Gestão de tempo como competência estratégica

## Por que gestão de tempo é uma soft skill

Não é sobre apps ou técnicas. É sobre a capacidade de tomar decisões contínuas sobre o que importa mais — e comunicar essas decisões com clareza.

## 3 perguntas antes de aceitar qualquer tarefa

1. **Qual é o resultado esperado?** (Se ninguém sabe, recuse ou redefina)
2. **Sou a pessoa certa?** (Quem mais poderia? Delegar é competência)
3. **Qual é o custo de oportunidade?** (O que não vou fazer se aceitar isto?)

## A matriz Eisenhower na prática

| | Urgente | Não urgente |
|---|---|---|
| **Importante** | Faça agora | Planeia e protege tempo |
| **Não importante** | Delega | Elimina |

A maioria vive no "urgente/importante" porque não investe no "importante/não urgente" — onde estão desenvolvimento de carreira, relações estratégicas e prevenção de crises.

## Dizer não com elegância

> "Estou comprometido com X e Y até [data]. Se pode esperar, fico feliz em ajudar. Se é urgente, podemos conversar sobre prioridades com [gestor]?"

> "Não estou na melhor posição para entregar isso com qualidade agora. [Nome] provavelmente ajudaria mais rápido."

Recusar com alternativa é profissionalismo, não negativa.

## Proteger tempo de trabalho profundo

Trabalho de alto impacto (análise, escrita, código) exige blocos ininterruptos de 90-120 min.

Estratégias:
- Bloqueie 2-3h pela manhã no calendário para trabalho focado
- Agrupe reuniões em blocos (ex: tarde de segunda e quinta)
- Responda mensagens em 2-3 blocos definidos por dia, não continuamente`,
      },
    ],
  },
  {
    id: 21,
    title: 'Trabalho em Portugal e na Europa',
    desc: 'Guia completo para conseguir emprego em Portugal e outros países europeus: vistos, mercado, adaptação cultural e processo seletivo.',
    duration: '3h 15min',
    icon: '🇪🇺',
    isPro: true,
    color: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', icon: 'bg-blue-700' },
    lessons: [
      {
        id: '21-1',
        title: 'O mercado de trabalho em Portugal',
        duration: '35 min',
        content: `# O mercado de trabalho em Portugal

## Por que Portugal é o destino mais procurado por brasileiros

- Idioma compartilhado (com diferenças de vocabulário e tom)
- Acesso ao mercado europeu (Schengen)
- Processo de visto mais simples para brasileiros vs. outros países europeus
- Custo de vida abaixo da média da Europa Ocidental
- Ecossistema tech em crescimento (Lisboa e Porto)

## Salários em Portugal: a realidade

| Nível | Faixa mensal bruta |
|---|---|
| Salário mínimo (2024) | €820 |
| Média geral | ~€1.400 |
| Tech júnior | €1.200–€1.800 |
| Tech sênior | €2.500–€4.000 |
| Gestão | €2.000–€5.000+ |

Para brasileiros vindos de salários em reais, os valores em euros são menores numericamente — mas o poder de compra em Portugal é superior, especialmente comparado a São Paulo.

## Sectores com mais oportunidades

- **Tecnologia:** Lisboa é hub europeu de startups (Feedzai, Talkdesk, Farfetch). Maior demanda por devs, dados e produto.
- **Saúde:** médicos e enfermeiros brasileiros com reconhecimento de diploma (processo longo, 6-18 meses).
- **Turismo e hotelaria:** fácil entrada, salários mais baixos.
- **Finanças e consultoria:** Lisboa tem presença de grandes bancos e Big 4.

## O que o mercado português valoriza

- Pontualidade e comprometimento com prazos
- Comunicação escrita cuidadosa (emails formais ainda são norma)
- Estabilidade (mudar frequentemente de emprego é visto com ceticismo)
- Proatividade discreta — não a assertividade intensa comum no Brasil`,
      },
      {
        id: '21-2',
        title: 'Vistos e autorização de trabalho para brasileiros',
        duration: '30 min',
        content: `# Vistos e autorização de trabalho para brasileiros

## As 3 formas principais de trabalhar legalmente em Portugal

### Visto D3 (Atividade Altamente Qualificada)
**Para quem:** profissionais com oferta de emprego + diploma universitário ou experiência comprovada numa área qualificada.

**Processo:**
1. Empresa portuguesa faz contrato de trabalho
2. Você solicita o D3 no Consulado Português no Brasil
3. Prazo médio: 2-4 meses

**Documentos principais:** passaporte, contrato assinado, diploma, comprovante de alojamento.

### Visto D8 (Nómada Digital)
**Para quem:** quem tem emprego remoto fora de Portugal (empresa brasileira, freelance internacional) e quer residir em Portugal.

**Requisito de renda:** mínimo de €3.280/mês líquido (2024 = 4x salário mínimo).

**Vantagem:** não precisa de empresa portuguesa. Você trabalha remotamente enquanto vive em Portugal.

### Dupla cidadania europeia
Brasileiros com ascendência portuguesa, espanhola, italiana ou alemã podem ter direito a cidadania europeia. Com ela, trabalha em qualquer país da UE sem visto de trabalho.

## O processo passo a passo (D3)

**No Brasil:**
1. Consegue oferta de emprego em Portugal
2. Assina contrato (pode ser feito à distância)
3. Solicita visto D3 no Consulado
4. Aguarda aprovação (2-4 meses)

**Em Portugal:**
5. Solicita Autorização de Residência (AIMA) dentro de 4 meses da chegada
6. Obtém NIF (Número de Identificação Fiscal — essencial para tudo)
7. Abre conta bancária
8. Solicita NISS (Segurança Social)

## Plataformas para encontrar vagas em Portugal

- LinkedIn (filtro de localização: Portugal)
- Net-Empregos (net-empregos.com)
- Indeed.pt
- SAPO Emprego
- Startup Lisboa job board`,
      },
      {
        id: '21-3',
        title: 'Adaptar CV e carta para o mercado europeu',
        duration: '25 min',
        content: `# Adaptar CV e carta para o mercado europeu

## Diferenças entre CV brasileiro e europeu

| Aspecto | Brasil | Europa (PT) |
|---|---|---|
| Foto | Comum e esperada | Opcional, menos comum |
| Objetivo profissional | Frequente | Raro — use sumário profissional |
| Dados pessoais | CPF, estado civil | Apenas contato essencial |
| Extensão | 1-3 páginas | Máximo 2 páginas |
| Língua | PT-BR | PT-PT ou inglês (em tech) |

## Adaptações linguísticas essenciais

| PT-BR | PT-PT |
|---|---|
| Gerenciar | Gerir |
| Time (equipa) | Equipa |
| Celular | Telemóvel |
| Faculdade | Universidade |
| Cargo | Função / Cargo |

## A carta de motivação no mercado português

Em Portugal, cartas são esperadas — especialmente em empresas tradicionais.

**Tom:** mais formal do que no Brasil. Menos storytelling emocional, mais competência com evidências.

**Estrutura:**
1. Abertura formal: "Venho por este meio candidatar-me à posição de X..."
   (Em Portugal esta abertura ainda é adequada — ao contrário do Brasil)
2. Por que a empresa: pesquisa real, não elogios genéricos
3. Por que você: 2 conquistas com números
4. Encerramento: disponibilidade para entrevista

## Candidaturas em inglês

Startups e empresas de tecnologia em Portugal frequentemente conduzem processos em inglês. Para essas empresas, CV e carta podem ser em inglês.`,
      },
      {
        id: '21-4',
        title: 'Cultura de trabalho em Portugal e adaptação',
        duration: '30 min',
        content: `# Cultura de trabalho em Portugal e adaptação

## As diferenças que mais surpreendem brasileiros

### Ritmo de comunicação
Portugueses comunicam de forma mais reservada e indireta. Um "está bem" pode esconder reservas não expressas. Aprenda a ler as entrelinhas.

### Hierarquia e formalidade
Em empresas tradicionais (bancos, seguradoras, organismos públicos), a hierarquia é mais rígida. Tratar superiores por "você" em vez de "tu" e usar títulos (Dr., Eng.) ainda é esperado.

Startups e empresas tech são muito mais informais.

### Velocidade de decisão
Processos de decisão tendem a ser mais lentos. Mudanças que em startups brasileiras aconteciam em dias podem levar semanas em empresas estabelecidas.

### Pontualidade
Reuniões começam na hora. Atraso de 15 minutos sem aviso é considerado desrespeitoso.

## O que portugueses apreciam em colegas brasileiros

- Energia e entusiasmo
- Capacidade de adaptação
- Facilidade em criar relações genuínas

## O que pode causar atrito

- Informalidade excessiva demasiado cedo (tuteando superiores imediatamente)
- Falar alto ou de forma muito expansiva em ambientes conservadores
- Assumir que tudo é igual porque a língua é a mesma

## Integração prática

Nos primeiros 3 meses, observe mais do que age. Identifique quem são as pessoas-chave não-oficiais (quem todos consultam informalmente). Construa relações individuais antes de tentar influenciar grupos.

Associe-se a comunidades de brasileiros em Portugal — são fontes de dicas sobre mercado, burocracia e vida quotidiana.`,
      },
      {
        id: '21-5',
        title: 'Outros países europeus: Alemanha, Holanda, Irlanda, Espanha',
        duration: '30 min',
        content: `# Outros países europeus

## Alemanha

**Idioma:** alemão é essencial para a maioria das posições. Inglês funciona bem em tech e multinacionais.

**Mercado:** maior economia da Europa. Escassez de mão de obra qualificada — alemães procuram profissionais estrangeiros ativamente.

**Oportunity Card (desde 2024):** permite entrar sem oferta de emprego para buscar trabalho por 1 ano.

**Salários:** significativamente mais altos que Portugal. Tech sênior: €60k-€100k+/ano bruto.

**Cultura:** pontualidade sagrada. Comunicação direta e focada em factos. Separação clara entre vida profissional e pessoal.

## Holanda

**Idioma:** inglês é língua de trabalho na maioria das multinacionais e startups. Amsterdã é uma das cidades mais anglófonas da Europa.

**Mercado:** sede europeia de Netflix, Uber, Booking.com, Adyen. Forte em tech, logística, agricultura e finanças.

**Cultura:** extremamente direta. Feedback honesto e sem rodeios é norma. Work-life balance muito valorizado.

## Irlanda

**Idioma:** inglês nativo. Excelente para consolidar o idioma.

**Mercado:** Dublin é sede europeia de Google, Meta, Apple, LinkedIn, Airbnb, Stripe.

**Cultura:** informal, sociável. Boa integração para brasileiros.

## Espanha

**Idioma:** espanhol — português é muito próximo, adaptação rápida.

**Mercado:** tecnologia crescendo em Madrid e Barcelona. Muitas startups em expansão.

**Nómada Digital Visa (2023):** para freelancers e trabalhadores remotos.

**Cultura:** similar ao Brasil em muitos aspectos — horários mais flexíveis, almoço importante, relacionamento social no trabalho valorizado.`,
      },
    ],
  },
  {
    id: 22,
    title: 'Portfólio Profissional: Da Ideia ao Destaque',
    desc: 'Cria um portfólio que substitui o CV como prova de competência — por área, do zero ao publicado online.',
    duration: '2h 45min',
    icon: '🎨',
    isPro: true,
    color: { bg: 'bg-rose-50', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700', icon: 'bg-rose-500' },
    lessons: [
      {
        id: '22-1',
        title: 'Por que um portfólio bate o CV',
        duration: '25 min',
        content: `# Por que um portfólio bate o CV

## O CV é promessa. O portfólio é prova.

O CV diz "tenho experiência em X". O portfólio mostra "aqui está X que fiz".

Recrutadores tomam decisões baseadas em confiança. Um portfólio forte encurta o caminho da dúvida para a confiança — o que traduz directamente em mais entrevistas e mais ofertas.

## Áreas onde portfólio é obrigatório

- **Design (UX/UI, gráfico):** sem portfólio, sem entrevista
- **Desenvolvimento de software:** GitHub ativo e projetos são o portfólio
- **Marketing de conteúdo:** amostras de escrita e campanhas com resultados
- **Dados e BI:** projetos no Kaggle, dashboards públicos, análises no GitHub

## Áreas onde portfólio é diferenciador (menos óbvio)

- **Gestão de produto:** PRDs, análises de mercado, estratégias de produto — mesmo fictícias
- **Marketing digital:** campanha com métricas, análise de funil, estratégia de SEO
- **Consultoria:** análise de caso publicada, white paper, artigo com insights de mercado

## O portfólio mínimo viável

Não precisa de site elaborado. Um MVP pode ser:
- **Notion público** com 2-3 projetos documentados
- **LinkedIn:** seção de projetos preenchida + artigos publicados
- **GitHub** com READMEs bem escritos (para tech)

**Regra:** 3 projetos bem documentados valem mais do que 15 mal apresentados.

## O que cada projeto deve mostrar

1. **O problema** — o que precisava ser resolvido?
2. **O processo** — como você abordou? Que alternativas considerou?
3. **A solução** — o que entregou especificamente?
4. **O resultado** — qual foi o impacto? Tem números?
5. **O que aprendeu** — reflexão honesta aumenta credibilidade`,
      },
      {
        id: '22-2',
        title: 'Portfólio para tech: GitHub e projetos',
        duration: '35 min',
        content: `# Portfólio para tech: GitHub e projetos

## O GitHub como portfólio vivo

Para desenvolvedores, o GitHub é o portfólio. Recrutadores técnicos olham o perfil antes (ou em vez) do CV.

## O que faz um bom perfil GitHub

### Profile README
O perfil pode ter um README.md que aparece na página principal:

\`\`\`markdown
## Olá, sou [Nome] 👋
Desenvolvedor [especialidade] com foco em [área].

**Stack:** Python · FastAPI · PostgreSQL · React
**Interesse:** sistemas distribuídos · ML em produção

📫 [email] | [LinkedIn]
\`\`\`

### Repositórios que importam

**READMEs claros em cada projeto:**
- O que resolve (1 parágrafo)
- Como instalar e rodar (comandos copiáveis)
- Screenshots ou demo
- Decisões técnicas e por quê

**Pinned repos:** os 6 melhores aparecem no topo do perfil.

**Contribuições regulares:** commits consistentes são melhores que sprints ocasionais.

## Tipos de projetos que impressionam

1. **Resolver um problema real seu** — mostra iniciativa e relevância
2. **Clonar e melhorar** — versão simplificada de produto conhecido, com uma melhoria original
3. **Contribuir em open source** — mesmo pequenas contribuições mostram capacidade de trabalhar em código de outros
4. **Ferramenta de automação** — scripts que automatizam algo manual

## Para Data Science e ML

- Notebooks no Kaggle com análise bem documentada
- Dashboard público no Streamlit ou Tableau Public
- Análise de dataset público (IBGE, IPEA) com storytelling

**O diferencial:** narrativa. Não basta o código funcionar — mostre que comunicou os insights claramente.`,
      },
      {
        id: '22-3',
        title: 'Portfólio para design e marketing',
        duration: '30 min',
        content: `# Portfólio para design e marketing

## Design (UX/UI e Gráfico)

### Plataformas
- **Behance** — padrão para design gráfico e motion
- **Dribbble** — UI e identidade visual
- **Site próprio** (Framer, Webflow) — para diferenciar
- **Figma Community** — interfaces acessíveis por recrutadores

### O que todo case de UX deve ter

1. Problema / briefing (o que foi pedido)
2. Pesquisa (usuários, mercado, concorrentes)
3. Definição (personas, hipóteses)
4. Ideação (wireframes, alternativas descartadas)
5. Prototipagem (low-fi → high-fi)
6. Teste com usuários
7. Entrega final (mockups, especificações)
8. Resultados (métricas se disponíveis)

**Erro comum:** mostrar só o resultado final bonito. Recrutadores de UX querem ver o processo de pensamento.

### Número ideal de projetos

3-5 projectos bem documentados. Qualidade > quantidade.

## Marketing Digital

### O que incluir

**Performance e paid media:**
- Capturas de ecrã de contas de anúncios com métricas (anonimize dados sensíveis)
- Resumo: objectivo, estratégia, resultado (ROAS, CPA, conversão)

**SEO:** evolução de tráfego orgânico + artigos que você escreveu e seu desempenho

**Email marketing:** taxa de abertura, CTR vs. benchmarks da indústria

### Plataformas para publicar

- **Notion público** — para apresentar dados e narrar estratégia
- **Medium** — artigos com análises (mostra raciocínio e escrita)
- **LinkedIn** — estudos de caso em formato mais curto`,
      },
      {
        id: '22-4',
        title: 'Portfólio sem experiência formal',
        duration: '30 min',
        content: `# Portfólio sem experiência formal

## O paradoxo — e como resolver

"Preciso de experiência para ter portfólio, mas preciso de portfólio para ter experiência."

A solução: criar experiência real sem emprego formal. É possível e cada vez mais aceite.

## 6 formas de criar projetos reais sem emprego

### 1. Projetos pessoais com problema real
Resolva um problema que você mesmo tem. O problema real + solução = portfólio.

Exemplos:
- App de controlo de gastos que você criou para si
- Dashboard de dados sobre tema que te interessa (futebol, clima)
- Redesenho de interface de app que você usa e acha ruim
- Campanha de marketing fictícia para marca que admira

### 2. Trabalho voluntário para ONGs
ONGs precisam de designers, marketers e devs. Você entrega trabalho real + recebe case + referência.

### 3. Freelance a preço simbólico
2-3 projetos por valor baixo em troca de depoimento e autorização para incluir no portfólio.

### 4. Projetos de curso com qualidade de portfólio
Em vez de fazer o mínimo, invista nos projectos dos cursos como se fossem reais. Documente bem. Publique.

### 5. Hackathons e competições
Kaggle (dados), desafios de design, case competitions. Resultado verificável + visibilidade.

### 6. Spec work (criação não-solicitada)
Para marketing e design: crie campanha ou identidade visual para empresa real — sem ser contratado. É ficção, mas demonstra como você pensa.

## Como apresentar projectos sem experiência

Seja honesto sobre o contexto:
> "Este projeto foi desenvolvido como exercício durante o curso X / como projeto pessoal para resolver [problema real]."

Compense com profundidade de documentação. Um projeto pessoal bem documentado pode ser mais convincente do que um profissional mal documentado.`,
      },
    ],
  },
  {
    id: 23,
    title: 'Processos de Consultoria: McKinsey, BCG, Bain e Big 4',
    desc: 'Tudo sobre case interviews, fit interviews e como passar nos processos mais rigorosos do mercado de trabalho.',
    duration: '4h',
    icon: '📊',
    isPro: true,
    color: { bg: 'bg-slate-50', border: 'border-slate-200', badge: 'bg-slate-100 text-slate-700', icon: 'bg-slate-700' },
    lessons: [
      {
        id: '23-1',
        title: 'O universo da consultoria: MBB, Big 4 e boutiques',
        duration: '25 min',
        content: `# O universo da consultoria

## A hierarquia

### MBB (McKinsey, BCG, Bain)
O topo da pirâmide. Processos mais rigorosos do mercado. Clientes: C-level de Fortune 500, governos, organizações multilaterais.

Entrada típica: MBA de top school ou graduação de universidades de elite + processo ultra-seletivo.

### Big 4 (Deloitte, PwC, EY, KPMG)
Maior volume de contratações. Processo rigoroso mas mais acessível que MBB. Além de consultoria, atuam em auditoria, impostos, advisory.

### Boutiques e especialistas
Firmas menores com foco em indústria: Roland Berger, Oliver Wyman, A.T. Kearney. Processos mais humanos com acesso mais direto a projetos reais desde cedo.

## O modelo de carreira

| Nível | Tempo médio |
|---|---|
| Analyst / Associate | 2-3 anos |
| Consultant / Senior Associate | 2-3 anos |
| Engagement Manager | 2-4 anos |
| Principal / Partner | 3+ anos |

Modelo "up or out": quem não progride, sai. Alta pressão mas alta velocidade de desenvolvimento.

## Por que o processo é diferente

Consultores precisam, no dia-a-dia, de:
- Estruturar problemas complexos e ambíguos
- Comunicar análises de forma clara para executivos
- Trabalhar bem em equipa sob pressão intensa

O processo seletivo replica exatamente essas situações — daí os case interviews.`,
      },
      {
        id: '23-2',
        title: 'Case interviews: estrutura, frameworks e prática',
        duration: '50 min',
        content: `# Case interviews: estrutura e frameworks

## O que é um case interview

O entrevistador apresenta um problema de negócio. Você tem 20-30 minutos para estruturar, analisar e chegar a uma recomendação.

Não há resposta "certa". O que avaliam é o processo de raciocínio.

## Os 4 tipos de case mais comuns

### 1. Rentabilidade
"O lucro da empresa X caiu 20%. Por quê e o que fazer?"

Framework: Lucro = Receita − Custo
- Receita: volume × preço — o que mudou?
- Custo: fixo e variável — onde cresceu?

### 2. Entrada em novo mercado
"A empresa deve entrar no mercado de energia renovável?"

Framework: Atratividade do mercado → Capacidade da empresa → Estratégia de entrada

### 3. Crescimento
"Como dobrar a receita em 3 anos?"

Framework: Crescimento orgânico (novos produtos, mercados, preço) vs. inorgânico (M&A, parcerias)

### 4. M&A
"A empresa A deve adquirir a empresa B?"

Framework: Strategic fit → Financial fit → Integration feasibility

## A estrutura de resposta que funciona

**Ao receber o case:**
1. Confirme que entendeu: repita o problema em suas palavras
2. Peça 1-2 minutos para estruturar
3. Apresente a estrutura antes de mergulhar nos detalhes

**Durante:**
- Comunique o raciocínio em voz alta
- Sinalize mudanças de área: "Explorei a receita. Agora vou os custos."
- Faça math em voz alta (estimativas são aceites)

**Conclusão:**
- Dê recomendação clara (não "depende")
- Suporte com 2-3 dados mais relevantes
- Mencione riscos ou próximos passos

## Market sizing (fermi estimation)

Exemplo: *"Quantos litros de cerveja são consumidos no Brasil por ano?"*
- 210M pessoas → ~50% adultos que bebem = 105M pessoas
- Consumo: ~2 cervejas/semana × 330ml = 660ml/semana
- 660ml × 52 × 105M ≈ 36 bilhões de litros/ano
- Sanity check: Brasil é o 3º maior mercado — faz sentido.`,
      },
      {
        id: '23-3',
        title: 'Fit interview em consultoria',
        duration: '30 min',
        content: `# Fit interview em consultoria

## Por que o fit é crítico

Consultores trabalham em equipa em condições intensas: viagens, prazos apertados, clientes difíceis. Uma pessoa que não colabora bem pode destruir um projeto inteiro.

## As perguntas mais comuns

### "Por que consultoria?"

❌ "Quero resolver problemas complexos e aprender rápido." (genérico — todos dizem isso)

✅ "Em [empresa anterior], lideramos reestruturação do processo X. Em 6 semanas criámos modelo que reduziu tempo em 40%. Percebi que gosto especialmente de estruturar problemas e ver a mudança acontecer — e quero fazer isso sistematicamente em diferentes contextos."

### "Por que McKinsey/BCG/Bain?"
Cada firma tem cultura distinta:
- **McKinsey:** liderança e impacto sistémico
- **BCG:** inovação e vantagem competitiva sustentável
- **Bain:** resultados mensuráveis e relacionamento profundo com clientes

Mencione algo específico: projeto publicado que admira, tipo de cliente com que trabalham.

### "Qual foi seu maior fracasso?"
Escolha algo real. Foque: o que aconteceu → o que faria diferente → o que mudou no seu comportamento desde então.

## Como preparar

1. Escreva 5-6 histórias STAR com conquistas mensuráveis
2. Mapeie cada história para as perguntas típicas
3. Pesquise a firma a fundo — LinkedIn dos entrevistadores, publicações
4. Pratique em voz alta — o awkwardness na primeira vez é real`,
      },
      {
        id: '23-4',
        title: 'Como se preparar em 30 dias',
        duration: '35 min',
        content: `# Como se preparar para um processo de consultoria em 30 dias

## A realidade

Um processo MBB exige 80-120 horas de preparação estruturada. Quem tenta sem preparação raramente passa — independentemente de inteligência.

## O plano de 30 dias

### Semana 1: Fundamentos

**Dias 1-2:**
- Leia: *Case in Point* (Cosentino) ou *The McKinsey Way* (Rasiel)
- Assista: vídeos de cases (IGotAnOffer, CaseCoach no YouTube)
- Faça 1 case sozinho em voz alta para diagnosticar onde está

**Dias 3-7: Frameworks básicos**
- Árvore de lucratividade
- Framework de entrada em mercado
- Framework de M&A
- Estimativas de mercado (fermi estimation)

### Semana 2-3: Prática intensiva

Meta: 2 cases por dia (1 sozinho, 1 com parceiro).

**Onde encontrar parceiros:**
- PrepLounge.com (plataforma global de parceiros de prática)
- Grupos de LinkedIn/WhatsApp de candidatos a consultoria

### Semana 3 (fit): Histórias STAR

Escreva e pratique em voz alta suas 6 histórias STAR. Grave-se. Reveja. Ajuste.

### Semana 4: Simulação e calibração

2-3 mock interviews completos com ex-consultores ou coaches especializados.

**Recursos:**
- PrepLounge: coaches com ex-MBB
- RocketBlocks: plataforma de prática guiada

## Semana do processo

- Durma bem nos 3 dias anteriores
- Revise os frameworks — não aprenda nada novo
- Faça 1-2 cases de aquecimento no dia anterior`,
      },
      {
        id: '23-5',
        title: 'Vida real em consultoria: o que esperar após entrar',
        duration: '20 min',
        content: `# Vida real em consultoria

## A curva de aprendizagem

Os primeiros 6 meses são intensos. Analistas novos trabalham 60-80h/semana em projetos intensos.

O que aprenda rapidamente:
- Estruturar qualquer problema em 30 minutos
- Comunicar insights complexos em linguagem executiva
- Trabalhar com dados incompletos e tomar decisões
- Gestão de stakeholders de nível C

## O modelo de trabalho

**Por projetos (engagements):**
- Duração: 3-6 meses em média
- Equipa: 3-6 pessoas (Partner, Manager, Consultores, Analysts)
- Localização: pode envolver viagens semanais ao cliente

**Feedback intenso e contínuo:**
Após cada apresentação ou reunião importante, há debrief. Isso acelera o desenvolvimento — mas exige abertura genuína para receber crítica constante.

## Por que muitos saem após 2-4 anos (e para onde vão)

A saída é planejada para a maioria. As consultoras são "aceleradoras de carreira" — você entra, aprenda muito rápido, e sai para posição de liderança que normalmente não teria acesso sem esse background.

Destinos comuns de ex-consultores:
- C-suite em empresas médias
- Gestores sênior em multinacionais
- Fundadores de startups
- Private equity e venture capital
- Chief of Staff em empresas de crescimento rápido

O branding de ex-McKinsey/BCG/Bain abre portas que demorariam 10+ anos sem esse percurso.`,
      },
    ],
  },
  {
    id: 24,
    title: 'Os Primeiros 90 Dias: Onboarding com Impacto',
    desc: 'O que fazer depois de conseguir o emprego. O plano estratégico para criar credibilidade, construir alianças e ter vitórias rápidas nos primeiros 3 meses.',
    duration: '3h 15min',
    icon: '🚀',
    isPro: true,
    color: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', icon: 'bg-emerald-600' },
    lessons: [
      {
        id: '24-1',
        title: 'Por que os primeiros 90 dias são críticos',
        duration: '20 min',
        content: `# Por que os primeiros 90 dias são críticos

## A estatística que poucos conhecem

Estudos de retenção mostram que **até 20% dos novos contratados deixam o emprego nos primeiros 45 dias**. Não por falta de competência — mas por falhas de integração.

E do lado do candidato, outro problema: **as primeiras impressões formam-se em 3 semanas** e são difíceis de reverter. Uma entrada desastrosa pode perseguir-te por anos na empresa.

## O que está em jogo

Os primeiros 90 dias determinam:

- **Quem és na empresa** — a reputação que constróis é sticky (pegajosa)
- **Que projetos te são atribuídos** — visibilidade e desafio ou trabalho marginal
- **O ritmo da sua progressão** — quem entra forte cresce mais rápido
- **A rede interna** — as relações que construíres agora valem durante anos

## O erro mais comum

A maioria chega com vontade de **mostrar o que sabe imediatamente** — propõe mudanças, critica processos, tenta demonstrar valor pela velocidade.

Resultado: é visto como arrogante, ameaçador ou ingénuo.

A abordagem correcta é o oposto: **escuta primeiro, propõe depois**.

## O modelo dos 90 dias

O framework clássico divide em três fases:

| Fase | Foco | Duração |
|---|---|---|
| Imersão | Aprender, ouvir, mapear | Dias 1–30 |
| Integração | Construir relações, validar hipóteses | Dias 31–60 |
| Acção | Executar, entregar, liderar | Dias 61–90 |

> **A regra de ouro:** Aprenda 2x mais do que falas no primeiro mês. Depois vai aumentando gradualmente a sua voz.`,
      },
      {
        id: '24-2',
        title: 'O plano de 30-60-90 dias: como criar o seu',
        duration: '35 min',
        content: `# O plano de 30-60-90 dias

## Para que serve o plano

O plano de 30-60-90 dias é um documento estratégico que defina:
- O que vais **aprender** em cada fase
- Quem vais **conhecer** e quando
- O que vais **entregar** e como medir o sucesso

É uma ferramenta de gestão da sua própria integração.

## Estrutura de cada fase

### Primeiros 30 dias — Imersão

**Objectivo:** Entender antes de agir.

**O que fazer:**
- Lê toda a documentação disponível (processos, estratégia, relatórios)
- Marca reuniões de 30 min com cada membro direto da equipa
- Observa reuniões sem pressão de contribuir
- Mapeia stakeholders: quem são, o que querem, como preferem comunicar
- Identifica "vitórias rápidas" potenciais — mas não as executes ainda

**O que não fazer:**
- Propor mudanças de processo antes de entender o porquê do actual
- Criticar a empresa anterior em comparação
- Assumir que o que funcionou na empresa anterior vai funcionar aqui

**Pergunta de reflexão do mês:** *O que não sabia sobre esta empresa que me surpreendeu?*

---

### 31–60 dias — Integração

**Objectivo:** Construir relações e validar hipóteses.

**O que fazer:**
- Começa a contribuir ativamente nas reuniões
- Compartilha 1-2 ideias pequenas e testáveis — não revolucionárias
- Alinha com o gestor sobre prioridades dos próximos 30 dias
- Expanda a rede além da sua equipa direta
- Identifica quem são os "influenciadores informais" da empresa

**Entregável desta fase:** Uma análise breve (escrita ou numa reunião com o gestor) do que aprendestes, as suas hipóteses sobre oportunidades e como planeas contribuir no próximo mês.

---

### 61–90 dias — Acção

**Objectivo:** Executar uma vitória tangível.

**O que fazer:**
- Lidera ou contribui significativamente num projeto visível
- Apresenta a sua análise e recomendações (se aplicável)
- Pede feedback explícito ao gestor: "O que devo manter? O que devo ajustar?"
- Consolida as relações chave

**Entregável desta fase:** Um resultado mensurável. Não tem de ser enorme — tem de ser real e visível.

---

## Como apresentar o plano ao gestor

Se o seu gestor não mencionou um plano de integração, pode propor o seu:

> *"Queria compartilhar consigo o meu plano para os primeiros 90 dias. Preparei um documento que defina as minhas prioridades de aprendizagem, as relações que quero construir e os resultados que espero entregar em cada fase. Posso compartilhar e receber o seu feedback?"*

Isto demonstra proactividade e organização — qualidades que os gestores adoram ver em novos contratados.`,
      },
      {
        id: '24-3',
        title: 'Construir credibilidade e alianças internas',
        duration: '30 min',
        content: `# Construir credibilidade e alianças internas

## Credibilidade: o que é e como se constrói

Credibilidade profissional resulta da combinação de:
- **Competência percebida** — acreditam que sabes fazer o trabalho
- **Confiabilidade** — cumpres o que prometeste, sem excepções
- **Integridade** — és consistente e honesto, mesmo quando é difícil

A competência demora tempo a demonstrar. A confiabilidade pode construir desde o **dia 1**.

### A regra mais importante dos primeiros 90 dias

**Nunca prometas o que não pode cumprir.**

Mais vale dizer "preciso de 3 dias" e entregar em 2, do que dizer "entrego amanhã" e atrasar. A confiabilidade é construída através de consistência — não de velocidade.

## Mapa de stakeholders

Nas primeiras 2 semanas, mapeia mentalmente (ou num documento privado) os principais actores internos:

| Tipo | Quem são | Como abordar |
|---|---|---|
| **Aliados naturais** | Pessoas com quem vais trabalhar directamente | Reunião individual, interesse genuíno pelo trabalho delas |
| **Influenciadores informais** | Quem todos ouvem, independentemente do título | Almoço ou conversa informal; aprenda com eles |
| **Gatekeepers** | Quem controla acesso a recursos, informação ou decisores | Respeito, não subversão; pede ajuda explicitamente |
| **Potenciais detratores** | Quem pode ser ameaçado pela sua chegada | Reconhecimento do expertise deles; parceria, não competição |

## As reuniões de "onboarding" que ninguém menciona

Para além das formais, marca conversas informais com:

**O predecessor (se aplicável):**
Se o cargo foi ocupado por outra pessoa, descobre o que correu bem e mal — sem julgamentos.

**O "veterano" da equipa:**
Alguém com 5+ anos na empresa conhece tudo que não está escrito. Vale ouro.

**Alguém de outro departamento:**
Perspectiva externa sobre como a sua equipa é vista internamente.

## Perguntas que abrem portas

Em vez de falar de ti, faz perguntas que mostram interesse genuíno:

- *"Qual é o maior desafio da equipa neste momento?"*
- *"O que mudarias se pudesses mudar uma coisa?"*
- *"Quais foram os momentos altos dos últimos 2 anos aqui?"*
- *"Quem, além de ti, devo conhecer nos próximos meses?"*

Pessoas que se sentem ouvidas tornam-se aliadas naturais.`,
      },
      {
        id: '24-4',
        title: 'Primeiras vitórias: como escolher e executar',
        duration: '25 min',
        content: `# Primeiras vitórias: como escolher e executar

## O que é uma "vitória rápida"

Uma vitória rápida (quick win) é uma melhoria pequena, visível e real que pode entregar nos primeiros 60-90 dias.

**Características de uma boa vitória rápida:**
- Resolve um problema **real** que a equipa já sente
- É **executável** com os recursos que tens agora
- É **visível** — o gestor e pelo menos alguns colegas sabem que foi você
- Tem **resultado mensurável** — antes vs. depois

## Como identificar a vitória certa

Nas primeiras semanas, estás a **coleccionar problemas** sem tentar resolvê-los ainda. Toma nota de:

- Reclamações repetidas nas reuniões
- Processos que toda a gente considere lentos ou ineficientes
- Tarefas manuais que poderiam ser automatizadas
- Documentação desactualizada ou inexistente
- Fricção entre departamentos

Depois, classifica por **impacto** × **esforço**:

| | Baixo esforço | Alto esforço |
|---|---|---|
| **Alto impacto** | ✅ Executa primeiro | Planeia para depois |
| **Baixo impacto** | Faça se sobrares tempo | Ignora |

## Exemplos de vitórias rápidas por área

**Marketing:**
- Actualizar a biblioteca de templates de apresentação
- Criar um dashboard de KPIs que não existia

**Tecnologia:**
- Documentar um processo técnico que vivia "na cabeça" de um colega
- Automatizar um relatório manual semanal

**Operações:**
- Criar um SOP (Standard Operating Procedure) para uma tarefa repetitiva
- Consolidar fornecedores duplicados

**Finanças:**
- Criar um template de análise de custo que faltava
- Identificar uma ineficiência fiscal pequena mas real

## Como comunicar a vitória (sem ser arrogante)

Não anuncias a vitória — deixas que seja evidente pelo impacto.

Se alguém perguntar como foi feito:
> *"Reparei que [problema]. Trabalhei com [colega X] para resolver. O resultado foi [impacto]. Fico feliz por ter ajudado."*

Sempre compartilha o crédito. Vitórias em equipa constroem mais capital político do que vitórias individuais.`,
      },
      {
        id: '24-5',
        title: 'Erros fatais nos primeiros meses e como evitá-los',
        duration: '25 min',
        content: `# Erros fatais nos primeiros meses

## Os 8 erros mais comuns (e como evitá-los)

### 1. "Na minha empresa anterior fazíamos assim"

**O erro:** Comparar constantemente com o emprego anterior, implicitamente ou explicitamente.

**O impacto:** Passas a mensagem de que não estás comprometido com esta empresa; pareces não respeitar o contexto actual.

**Como evitar:** Compartilha experiências em formato de *aprendizagem*, não de comparação.
> Em vez de: *"Na [empresa X] fazíamos assim e funcionava melhor"*
> Diz: *"Em experiências anteriores, vi uma abordagem que resolveu problema parecido. Vale explorar aqui?"*

---

### 2. Ignorar a política interna

**O erro:** Tratar a empresa como se fosse apenas racional — as melhores ideias ganham sempre.

**A realidade:** Todas as empresas têm política. Ignorá-la não a faz desaparecer — faz-te o ingénuo que não a vê.

**Como navegar:** Observa quem influencia decisões *de facto*, não apenas no organograma. Constrói relações com esses influenciadores antes de precisares deles.

---

### 3. Tentar fazer tudo sozinho

**O erro:** Por querer mostrar competência, evitas pedir ajuda.

**O impacto:** Demoras mais; cometes erros evitáveis; as pessoas ao seu redor não constroem relação contigo.

**Como evitar:** Pede ajuda estrategicamente. Um pedido bem feito é sinal de inteligência, não de fraqueza.
> *"Não quero reinventar a roda — há documentação ou alguém que passou por isto antes que me possas recomendar?"*

---

### 4. Não gerir expectativas com o gestor

**O erro:** Assumir que o gestor sabe o que está a acontecer sem comunicação ativa.

**Como evitar:** Reuniões de 1:1 regulares com o gestor nas primeiras semanas. Pergunta explicitamente:
- *"O que seria sucesso para mim daqui a 30/60/90 dias, no seu ponto de vista?"*
- *"Há algo sobre a cultura da equipa que devo saber e que não é óbvio?"*

---

### 5. Descuidar a saúde nos primeiros meses

**O erro:** Trabalhar excessivamente para impressionar, comprometendo sono, exercício e relações pessoais.

**O impacto:** Burnout nos primeiros 3-6 meses. Produtividade cai precisamente quando precisas de ser visto como forte.

**Como gerir:** Defina limites saudáveis *desde o início*. É muito mais fácil manter do que reduzir depois de estabelecidos.

---

### 6. Assumir que a cultura escrita é a cultura real

**O erro:** Ler os valores da empresa e assumir que é como a empresa funciona de facto.

**O que fazer:** Observa os comportamentos que são recompensados (não os que são valorizados no papel). É a cultura real.

---

### 7. Negligenciar a equipa de suporte

**O erro:** Focar-te nos "decisores" e ignorar administrativos, assistentes, técnicos.

**A realidade:** Estas pessoas têm poder informal enorme. Podem facilitar ou obstruir o seu trabalho de formas invisíveis mas reais.

**O que fazer:** Trata toda a gente com o mesmo respeito e atenção. Ponto.

---

### 8. Não pedir feedback no momento certo

**O erro:** Esperar pela avaliação formal de desempenho (3, 6 ou 12 meses) para perceber como estás a ser visto.

**Como evitar:** Aos 30, 60 e 90 dias, pede feedback explicitamente ao gestor:
> *"Tenho estado aqui X semanas. O que estou a fazer bem? O que devo ajustar?"*

Gestores adoram colaboradores que pedem feedback — é raro e demonstra maturidade.`,
      },
    ],
  },
  {
    id: 25,
    title: 'Pacote Total de Compensação: Além do Salário',
    desc: 'Como avaliar e negociar o pacote completo — benefícios, bônus, equity, férias e muito mais. Candidatos Pro sabem que o salário é só uma parte da oferta.',
    duration: '2h 45min',
    icon: '💎',
    isPro: true,
    color: { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700', icon: 'bg-violet-600' },
    lessons: [
      {
        id: '25-1',
        title: 'O que compõe o pacote total de compensação',
        duration: '30 min',
        content: `# O que compõe o pacote total de compensação

## O erro de fixar no salário

A maioria dos candidatos negoceia apenas o salário base e aceita o resto sem questionar.

Resultado: podem perder **20-40% de valor real** em benefícios e compensação variável não negociados.

Um candidato informado avalia o **pacote total de compensação** (Total Compensation ou "Total Comp").

## Os componentes do pacote

### 1. Salário base
O valor fixo mensal/anual. É o ponto de partida, não o único ponto.

### 2. Remuneração variável
- **Bónus anual:** tipicamente 10-30% do salário base; condicional a metas
- **Comissão:** para funções comerciais; pode dobrar ou triplicar o salário
- **Profit sharing / PLR (Participação nos Lucros):** comum em grandes empresas brasileiras

### 3. Benefícios obrigatórios vs. opcionais

**Obrigatórios no Brasil (CLT):**
- FGTS, férias + 1/3, 13º salário, vale-transporte

**Opcionais (mas comuns em empresas médias/grandes):**
- Plano de saúde (e odontológico) — pode valer R$500-2.000/mês/família
- Vale-alimentação ou refeição (R$500-1.500/mês)
- Seguro de vida
- Previdência privada com matching da empresa
- Auxílio creche, auxílio educação, bolsa de idiomas

### 4. Equity (participação societária)
Mais comum em startups e empresas de tecnologia.

**Tipos:**
- **Stock Options:** direito de comprar acções a preço fixo no futuro
- **RSUs (Restricted Stock Units):** acções que "vencem" (vest) ao longo do tempo
- **Phantom Shares / SAR:** equivalente financeiro sem participação real

### 5. Benefícios de qualidade de vida
- Trabalho remoto ou híbrido (tem valor económico real: menos deslocamento, mais tempo)
- Horário flexível
- Auxílio home office
- Dias de folga adicionais além das férias legais
- Subsídio de ginásio / saúde mental
- Budget de formação/certificações

### 6. Outros
- Carro da empresa / ajuda de custo de combustível
- Estacionamento
- Telemóvel corporativo
- Expatriação (para cargos internacionais)

## Como calcular o valor total

Para comparar duas ofertas, converte tudo em valor anual:

\`\`\`
Salário base anual         R$ 120.000
+ Bónus alvo (20%)         R$  24.000
+ Plano de saúde (família) R$  18.000
+ VA/VR                    R$  12.000
+ Budget formação          R$   5.000
─────────────────────────────────────
Total Comp                 R$ 179.000
\`\`\`

Uma oferta de R$140.000 de salário base num pacote fraco pode valer menos do que R$120.000 num pacote completo.`,
      },
      {
        id: '25-2',
        title: 'Como comparar duas ofertas de emprego',
        duration: '35 min',
        content: `# Como comparar duas ofertas de emprego

## O erro clássico: comparar só salários

Candidatos que comparam apenas salário tomam decisões piores do que quem avalia o pacote completo.

Pior: muitos tomam a oferta com salário mais alto que, no total, vale menos.

## Framework de avaliação

### Dimensão 1: Compensação financeira total

Calcula o **Total Comp anual** de cada oferta (como vimos na aula anterior).

Inclui salário base + variável esperado + benefícios convertidos em valor anual.

### Dimensão 2: Crescimento e aprendizagem

Perguntas a fazer sobre cada empresa:
- Qual é a velocidade de promoção típica?
- Terei acesso a projetos desafiadores e visíveis?
- Há mentoria formal ou informal?
- Em 2-3 anos, este cargo terá sido um trampolim para onde?

**Regra dos 3 anos:** O cargo vai acelerar ou desacelerar a sua carreira daqui a 3 anos? Às vezes vale ganhar menos hoje para crescer mais amanhã.

### Dimensão 3: Qualidade de vida e fit cultural

- Quantas horas/semana é o ritmo real (não o prometido)?
- Qual é o estilo de gestão do seu futuro gestor direto?
- Presença física obrigatória ou flexibilidade real?
- Qual é a cultura de feedback e desenvolvimento?

### Dimensão 4: Estabilidade e risco

- A empresa é lucrativa ou a queimar caixa?
- Qual é a runway (tempo de caixa) se for startup?
- Há risco de reestruturação ou layoffs no horizonte?
- Qual é a reputação no mercado?

## Template de comparação

| Critério | Peso | Oferta A | Oferta B |
|---|---|---|---|
| Salário base | 25% | 8/10 | 7/10 |
| Pacote total | 20% | 7/10 | 9/10 |
| Crescimento | 20% | 9/10 | 6/10 |
| Cultura/fit | 20% | 8/10 | 8/10 |
| Qualidade de vida | 15% | 6/10 | 9/10 |
| **Total ponderado** | 100% | **7,6** | **7,7** |

Defina os pesos de acordo com o seu momento de vida. No início de carreira, crescimento pesa mais. Com filhos pequenos, qualidade de vida pode pesar mais.

## Red flags numa proposta

- Salário acima do mercado sem explicação clara
- Pressão para decidir em 24-48h sem extensão possível
- Recusa em colocar tudo por escrito
- Vagueza sobre bônus ("depende da performance" sem critérios claros)
- Plano de saúde sem cobertura para dependentes

## Como pedir mais tempo (sem perder a oferta)

> *"Estou muito entusiasmado com esta oportunidade. Para tomar a decisão responsável, precisaria de [X dias] para concluir a minha avaliação. É possível?"*

A maioria das empresas concede 3-7 dias adicionais sem problema. Quem não concede está a sinalizar algo sobre a cultura.`,
      },
      {
        id: '25-3',
        title: 'Negociar benefícios: o que é negociável e como pedir',
        duration: '30 min',
        content: `# Negociar benefícios: o que é negociável e como pedir

## A mentalidade errada

Muitos candidatos assumem que os benefícios são fixos — "é política da empresa" — e não tentam negociar.

A realidade: **quase tudo é negociável**, dependendo do nível do cargo e do contexto.

## O que costuma ser negociável

### Alta negociabilidade
- Data de início (1-3 semanas de flexibilidade é comum)
- Cargo/título (importante para LinkedIn e futuras negociações)
- Número de dias de home office
- Budget de formação e certificações
- Equipamento de trabalho (laptop, monitor, ergonomia)
- Participação em conferências e eventos profissionais

### Negociabilidade média
- Salário base (+5-15% em geral sem quebrar a oferta)
- Bónus alvo e critérios de elegibilidade
- Plano de benefícios (nível/cobertura em empresas com múltiplas opções)
- Auxílio home office (valor mensal)

### Menor negociabilidade
- Benefícios definidos por política global da empresa
- Equity em startups com cap table muito apertado
- CLT vs. PJ (tem implicações legais que a empresa não flexibiliza facilmente)

## Como pedir sem soar ganancioso

O segredo é enquadrar o pedido em **valor para a empresa**, não em necessidade pessoal.

**Exemplo — formação:**
> *"Estou muito alinhado com a oferta. Uma coisa que me seria muito valiosa e que acredito beneficiaria directamente a empresa: um budget anual de formação para manter as certificações actualizadas. Há flexibilidade para incluir isso?"*

**Exemplo — home office:**
> *"Tenho sido mais produtivo em contexto híbrido. Seria possível ajustarmos para [X dias] em remoto? Entendo que pode haver restrições, mas queria explorar."*

**Exemplo — salário:**
> *"A oferta está muito próxima do que esperava. Com base na minha pesquisa de mercado e na experiência que trago, conseguiria chegar a [X]? Isso tornaria a decisão muito mais simples para mim."*

## A sequência correcta de negociação

1. **Recebe a proposta por escrito** antes de negociar
2. **Agradece e demonstra entusiasmo** genuíno pela oportunidade
3. **Pede tempo** se precisares (24-72h é razoável)
4. **Identifica os 1-2 pontos** mais importantes para negociar (não tudo de uma vez)
5. **Apresenta o pedido com argumento** — não só o número
6. **Aceita o que for razoável** e não queimes a ponte por detalhes menores

## O que nunca fazer

- Dar ultimatos sem intenção de os cumprir
- Mencionar a empresa concorrente como pressão (a menos que seja real e esteja disposto a ir)
- Aceitar verbalmente e depois tentar renegociar
- Negociar via WhatsApp ou chat informal — sempre por email ou chamada formal`,
      },
      {
        id: '25-4',
        title: 'Equity e Stock Options: o guia para não ser enganado',
        duration: '30 min',
        content: `# Equity e Stock Options: o guia completo

## Por que a maioria não entende equity

Stock options e RSUs são apresentados de forma sedutora ("pode ficar rico!") e as empresas raramente explicam a letras miúdas.

Resultado: candidatos aceitam equity sem perceber o que assinaram, o que vale e quando (se alguma vez) conseguem dinheiro.

## O vocabulário essencial

**Cliff:** Período mínimo que tens de ficar na empresa antes de qualquer equity "vencer" (fazer vest). Típico: 1 ano. Se saíres antes do cliff, perdes tudo.

**Vesting:** O processo gradual de ganhar a sua equity ao longo do tempo. Schedule típico: 4 anos com cliff de 1 ano.
- Ao completar 1 ano: 25% vesta
- Depois: ~2,1% por mês durante os 3 anos restantes

**Strike price (preço de exercício):** O preço que pagas para comprar as acções quando exerces as opções. Deve ser o valor justo de mercado (FMV) na data de concessão.

**Valuation:** O valor total estimado da empresa. Divide a empresa em partes (shares) — quanto mais baixo o valuation na sua concessão, mais potencial de valorização.

**Dilution (diluição):** Cada nova ronda de investimento cria novas acções, diluindo as suas. É normal mas tens de saber quanto.

**Liquidation preference:** Investidores têm prioridade no pagamento em caso de venda. Pode ter equity "no papel" que na prática vale zero se a empresa for vendida por valor inferior ao que investidores colocaram.

## As perguntas certas a fazer

Antes de aceitar uma oferta com equity relevante:

1. **Quantas shares me estão a oferecer?** (Número absoluto)
2. **Qual é o total de shares em circulação?** (Para calcular a sua percentagem)
3. **Qual é o strike price?** (Preço que pagas para comprar)
4. **Qual é o valuation actual da empresa?**
5. **Qual é o schedule de vesting e cliff?**
6. **Quanto tempo tenho para exercer as opções se sair?** (Comum: 90 dias — pode ser um problema fiscal)
7. **Houve diluição nas últimas rondas? O que está previsto?**
8. **Qual é a preferência de liquidação dos investidores?**

## Quando a equity vale o risco

**Vale a pena dar peso significativo à equity quando:**
- A empresa está em estágio early (seed/Series A) com produto validado
- Tens confiança no produto, equipa de gestão e mercado
- A empresa tem caminho claro para liquidez (IPO, M&A) em 5-7 anos
- A sua percentagem é significativa (> 0,1% para cargos executivos, > 0,01% para sênior ICs)

**Não dês muito peso à equity quando:**
- A empresa já está em estágio avançado (Series D+) com valuation elevado
- Não consegues obter respostas claras às perguntas acima
- A empresa tem histórico de diluição agressiva
- O salário base é muito abaixo do mercado "compensado" por equity`,
      },
      {
        id: '25-5',
        title: 'Quando aceitar uma oferta abaixo do mercado (e quando não aceitar)',
        duration: '20 min',
        content: `# Quando aceitar uma oferta abaixo do mercado

## A questão mais difícil

Depois de negociar o máximo possível, a empresa não consegue chegar ao seu piso. O que fazer?

A resposta não é sempre "recusa". Há situações em que aceitar faz sentido estratégico.

## Quando faz sentido aceitar abaixo do mercado

### 1. O crescimento compensa
Se o cargo te vai acelerar 3-5 anos na carreira — por exposure, mentoria, marca da empresa, ou competências únicas — o "custo" temporário pode ser um investimento racional.

**Exemplo:** Aceitar 15% abaixo do mercado num cargo de PM em empresa top-tier que te vai abrir portas que demorarias 5 anos a abrir de outra forma.

### 2. A estabilidade num momento de incerteza
Após layoff, transição de área ou longa ausência do mercado, às vezes entrar — mesmo abaixo do ideal — restabelece o CV e o rendimento enquanto buscas algo melhor.

### 3. O fit cultural é excepcionalmente raro
Se encontraste uma empresa onde o ambiente, o produto e as pessoas correspondem ao que procuras de forma rara, o "desconto" pode ser o preço de um lugar onde queres passar os próximos 3-5 anos.

## Quando NÃO deves aceitar abaixo do mercado

- A empresa não tem argumento claro para o gap (apenas "é o que temos")
- Estás a entrar num cargo de baixo crescimento — o gap não "paga" com aprendizagem
- O gap é superior a 20% sem compensação não-financeira clara
- Sentes pressão emocional para aceitar (medo de não ter outra opção) mas tens opções reais

## Como negociar um "revisão em X meses"

Se aceitas com gap mas queres protecção:

> *"Aceito a proposta. Dado o gap relativamente ao mercado, pedia que incluíssemos na carta uma cláusula de revisão salarial formal em 6 meses, condicionada ao atingimento de objectivos que definiremos juntos nos primeiros 30 dias. Consegues incluir isso?"*

Não é garantia — mas coloca em papel a expectativa, o que cria accountability.`,
      },
    ],
  },
  {
    id: 26,
    title: 'GitHub, Portfólio Técnico e Projecto para Devs',
    desc: 'Para profissionais de tecnologia: como criar um portfólio técnico que impressiona recrutadores e tech leads, o que incluir no GitHub e como projectos pessoais ganham entrevistas.',
    duration: '3h 30min',
    icon: '💻',
    isPro: true,
    color: { bg: 'bg-gray-50', border: 'border-gray-200', badge: 'bg-gray-100 text-gray-700', icon: 'bg-gray-800' },
    lessons: [
      {
        id: '26-1',
        title: 'Por que o portfólio técnico vale mais do que o CV',
        duration: '20 min',
        content: `# Por que o portfólio técnico vale mais do que o CV

## A diferença entre dizer e mostrar

Qualquer candidato pode escrever "experiência com React, Node.js e AWS". O portfólio técnico **prova** o que o CV apenas afirma.

Para cargos de tecnologia, um portfólio sólido pode:
- Compensar a ausência de diploma formal
- Substituir anos de experiência em empresa
- Abrir processo selectivo que o CV sozinho não abriria
- Eliminar rounds técnicos em algumas empresas (o entrevistador já viu o seu código)

## O que os recrutadores e tech leads procuram

### O recrutador (não técnico) procura:
- Sinal de que és ativo e comprometido com a área
- Projetos com nomes e descrições claros
- Evidência de trabalho real, não apenas tutoriais

### O tech lead / engenheiro sênior procura:
- Qualidade do código (legibilidade, estrutura, padrões)
- Documentação (README claro, comentários quando necessário)
- Historial de commits (frequência e qualidade das mensagens)
- Soluções para problemas reais, não apenas exercícios
- Capacidade de completar projetos — não repositórios abandonados

## Os três tipos de portfólio técnico

### 1. GitHub profile
O standard de facto. Todos os cargos de tecnologia esperam que tenhas um perfil ativo.

### 2. Site/portfólio pessoal
Para devs front-end, designers e full-stack: um site que mostra os projetos em funcionamento, com descrições e links para o código.

### 3. Contribuições open source
O mais valorizado por tech leads: mostra que sabes trabalhar com código de terceiros, ler issues e criar PRs que passam revisão real.

## A realidade do mercado

Para cargos júnior: **o portfólio frequentemente pesa mais do que o diploma**.

Para cargos pleno/sênior: **o portfólio confirma o que o CV afirma** e diferencia entre candidatos com CVs similares.

Para liderança técnica: contribuições open source e escrita técnica (artigos, talks) pesam mais do que projetos pessoais.`,
      },
      {
        id: '26-2',
        title: 'GitHub: como estruturar o perfil e os repositórios',
        duration: '35 min',
        content: `# GitHub: como estruturar o perfil e os repositórios

## O perfil GitHub como cartão de visita

O primeiro impacto é visual. Um perfil mal configurado perde pontos antes de alguém ler uma linha de código.

### README do perfil
O GitHub permite um README especial no seu perfil (repositório com o mesmo nome do seu username). Inclui:

\`\`\`markdown
## Olá, sou [Nome] 👋

[2-3 frases: o que fazes, onde estás profissionalmente, o que procuras]

**Stack principal:** React · Node.js · Python · AWS

**Actualmente a trabalhar em:** [projeto ou empresa]
**Disponível para:** [oportunidades/freelance/sim ou não]

📫 [email ou LinkedIn]
\`\`\`

### Contribution graph (o gráfico verde)
O gráfico de contribuições é a primeira coisa que tech leads notam. Um gráfico vazio não é neutral — é sinal negativo.

**Como ter um gráfico ativo mesmo sem projetos públicos:**
- Faça commits nos seus repos privados (contam)
- Contribui regularmente — melhor 10 min/dia do que 4h no fim de semana
- Abre issues e PRs em repos de outros (contribuições open source)

### Pinned repositories
Escolha 4-6 repos para destacar. Critérios:
- Projetos completos (não em construção)
- Variedade de tecnologias (se aplicável)
- Os que melhor representam o seu nível actual

## Estrutura de um bom repositório

Cada repo pinado deve ter:

### README.md de qualidade
Mínimo obrigatório:
- **O que é este projeto** (1 parágrafo)
- **Screenshot ou GIF** do produto em funcionamento
- **Como correr localmente** (passo-a-passo)
- **Stack tecnológica** usada e por quê
- **Próximos passos / roadmap** (opcional mas valorizado)

### Mensagens de commit legíveis
Bad: *"fix"* / *"update"* / *"wip"*
Good: *"feat: add user authentication with JWT"* / *"fix: resolve race condition in cart sync"*

Usa [Conventional Commits](https://www.conventionalcommits.org/) — é o standard da indústria.

### Estrutura de pastas clara
Sigue as convenções da tecnologia. Em React, a estrutura esperada é diferente de Python. Divergir sem razão cria fricção desnecessária.

## O que nunca colocar no portfólio

- Tutoriais copiados sem adaptação (to-do list, weather app padrão)
- Código com credenciais no repositório (chaves API, senhas)
- Repos abandonados com issues sem resolver e PRs abertos há meses
- Código sem testes em projetos que pretendem demonstrar "qualidade"`,
      },
      {
        id: '26-3',
        title: 'Que projetos construir para impressionar',
        duration: '40 min',
        content: `# Que projetos construir para impressionar

## A hierarquia de valor dos projetos

Do menos ao mais valioso (para um recrutador técnico):

1. **Tutorial seguido sem adaptação** — quase sem valor
2. **Tutorial com modificações** — pouco valor
3. **Projeto pessoal do zero** — valor médio/bom
4. **Projecto que resolve um problema real (seu ou de outros)** — muito valor
5. **Contribuição open source aceite** — alto valor
6. **Projecto com usuários reais** — muito alto valor

## A regra de ouro do portfólio

**Constrói o que usarias.** Projectos onde resolveste um problema que tinhas têm autenticidade imediata. A história é mais convincente do que a tecnologia.

## Ideias de projetos por nível

### Júnior (menos de 2 anos de experiência)

**Full-stack:**
- App de gestão de hábitos com autenticação e persistência
- Clone funcional de uma app conhecida (Twitter, Trello) — ênfase no "funcional", não apenas visual
- API REST com CRUD completo, testes e documentação Swagger

**Back-end:**
- API de processamento de pagamentos com Stripe (sandbox)
- Sistema de notificações em tempo real com WebSockets
- CLI tool que resolva um problema específico do seu dia-a-dia

**Front-end:**
- Dashboard de visualização de dados (com API pública: clima, finanças, GitHub API)
- App com pesquisa em tempo real e infinite scroll
- Sistema de design próprio com componentes documentados

### Pleno (2-5 anos de experiência)

**O diferencial aqui é complexidade e decisões de arquitectura.**

- Microserviços com comunicação assíncrona (RabbitMQ, Kafka)
- Sistema com autenticação OAuth2 completa e refresh tokens
- Pipeline de dados com transformação, validação e alertas
- App com testes de integração e E2E (Cypress, Playwright)

### Sênior

**O diferencial é liderança técnica e impacto escalonável.**

- Open source library com documentação completa e testes
- Infra como código (Terraform, Pulumi) para um stack real
- Contribuição significativa para projeto com +1000 stars no GitHub

## Como transformar projetos do trabalho em portfólio

Se o seu melhor trabalho é código proprietário que não pode compartilhar:

1. Cria uma **versão simplificada** do mesmo problema sem dados da empresa
2. Escreva um **artigo técnico** sobre o problema e a solução (sem revelar IP)
3. Extraia um **componente genérico** que resolves e que pode open-sourcear

Sempre pede permissão ao empregador antes de publicar qualquer coisa relacionada com código corporativo.`,
      },
      {
        id: '26-4',
        title: 'Contribuições open source: como começar do zero',
        duration: '35 min',
        content: `# Contribuições open source: como começar do zero

## Por que contribuições open source são tão valorizadas

Contribuir para open source demonstra que sabes:
- Ler código de terceiros (fundamental no trabalho real)
- Comunicar claramente (issues, PRs, code reviews)
- Trabalhar assincronamente com pessoas que não conheces
- Aceitar e incorporar feedback de código

Nenhuma dessas competências é comprovada por projetos pessoais.

## O medo de contribuir (e como superá-lo)

**"O meu código não é bom o suficiente"** — A maioria das contribuições open source não são código. São documentação, testes, traduções, correção de typos, e relatórios de bugs detalhados.

**"Vão rejeitar o meu PR"** — É parte do processo. Um PR rejeitado com feedback é uma aula grátis de um programador mais experiente.

**"Não sei por onde começar"** — Vês a seguir.

## Por onde começar: o caminho gradual

### Nível 0: Usa e reporta
1. Usa ferramentas open source no dia-a-dia
2. Quando encontrares um bug, abre uma issue detalhada com:
   - Passos para reproduzir
   - Comportamento esperado vs. actual
   - Versão da ferramenta e ambiente

Isto já é uma contribuição válida.

### Nível 1: Documentação e typos
Encontraste um typo na documentação? Um exemplo que não funciona? Uma instrução de instalação desactualizada?

Abre um PR. É simples e é uma contribuição real.

### Nível 2: Good first issues
No GitHub, filtra por *label: good first issue* ou *label: help wanted* nos projetos que usas.

Estas issues são marcadas propositadamente para novos contribuidores. Os maintainers esperam e querem ajuda.

### Nível 3: Correcção de bugs com teste
Encontraste um bug, percebeste a causa, e consegues corrigi-lo com um teste que o previne? Este é o PR que impressiona.

### Nível 4: Nova funcionalidade
Discussão prévia com os maintainers é essencial. Abre uma issue com a proposta antes de escrever código.

## Onde encontrar projetos para contribuir

- **goodfirstissue.dev** — agrega first issues de centenas de projetos
- **up-for-grabs.net** — similar com mais filtros
- **Projetos que usas no dia-a-dia** — maior motivação e contexto

## Como mencionar contribuições open source no CV/entrevista

> *"Contribuí para [projeto] com [X] — corrigi um bug que causava [problema] e adicionei teste de regressão. O PR foi aceite após code review com o maintainer principal."*

Se o PR teve impacto mensurável (o projeto tem X stars, Y usuários), menciona.`,
      },
      {
        id: '26-5',
        title: 'O site de portfólio pessoal: o que incluir e o que evitar',
        duration: '25 min',
        content: `# O site de portfólio pessoal

## Para quem é essencial vs. opcional

**Essencial:**
- Devs front-end (o próprio site é uma demonstração)
- Designers de produto (portfolio visual)
- Full-stack com projetos com interface

**Opcional mas valorizado:**
- Back-end / DevOps (o GitHub é suficiente mas um site bem feito diferencia)
- Data Scientists (com notebooks e visualizações interactivas)

## O que incluir

### Secções obrigatórias

**Hero / Apresentação:**
- Nome e título (o que fazes, não o seu cargo actual)
- 2-3 frases que comunicam valor, não experiência
- Call to action claro (ver projetos / falar comigo / ver CV)

**Projetos:**
- 3-5 projetos (menos é mais — escolha os melhores)
- Para cada: screenshot/demo, descrição do problema resolvido, tecnologias, link para demo e código

**Sobre:**
- Contexto pessoal breve
- O que te apaixona tecnicamente
- O que procuras profissionalmente

**Contato:**
- Email, LinkedIn, GitHub — simples e fácil de encontrar

### Secções opcionais (mas que diferenciam)
- Blog técnico / artigos
- Talks e apresentações
- Open source contributions com contexto
- Testemunhos de colegas ou gestores

## O que evitar

**Tecnicamente:**
- Site demorado a carregar (ironic fail para dev)
- Design excessivamente criativo que prejudica a leitura
- Animações que bloqueiam o conteúdo
- Mobile experience quebrada

**No conteúdo:**
- "Tenho uma paixão por tecnologia" — generic
- Barras de competência ("Proficiência em Python: ████░ 80%") — não comunicam nada real
- Projectos inacabados ou com links quebrados
- Datas de projectos muito antigas sem actualização

## Stack recomendada para o site

**Mais rápido:** Astro + Netlify/Vercel (deploy gratuito, performance excelente)
**Para mostrar React:** Next.js + Vercel
**Para quem não quer código:** Framer, Notion + Super.so

O conteúdo importa mais do que a stack — não pases semanas a optimizar o site quando podias estar a construir projectos.`,
      },
    ],
  },
  {
    id: 27,
    title: 'IA na Busca de Emprego: Prompts que Funcionam',
    desc: 'Use ChatGPT e Claude para escrever CVs, cartas, preparar entrevistas e pesquisar empresas em fração do tempo. Inclui prompts prontos para copiar.',
    duration: '2h 30min',
    icon: '🤖',
    isPro: true,
    color: { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700', icon: 'bg-violet-500' },
    lessons: [
      {
        id: '27-1',
        title: 'Por que usar IA na busca de emprego (e o que ela não substitui)',
        duration: '20 min',
        content: `# Por que usar IA na busca de emprego

## A vantagem competitiva que poucos estão a usar

Em 2025, a maioria dos candidatos ainda passa horas a escrever cada carta de motivação do zero, a tentar lembrar as palavras-chave certas e a imaginar o que o recrutador quer ouvir.

A IA não elimina esse trabalho — mas reduz o tempo de horas para minutos, e melhora a qualidade quando usada corretamente.

**O que a IA faz muito bem:**
- Primeiro rascunho de CVs e cartas de motivação
- Adaptar um documento para cada vaga em segundos
- Simular perguntas de entrevista e dar feedback
- Pesquisar empresas e identificar ângulos de abordagem
- Reescrever bullets fracos com linguagem mais impactante
- Traduzir experiências em linguagem que o setor usa

**O que a IA não substitui:**
- Suas realizações reais (ela não as inventa — você precisa fornecê-las)
- Sua autenticidade em entrevistas
- Julgamento sobre cultura e fit
- Relações humanas e networking genuíno

## Ferramentas recomendadas

| Ferramenta | Melhor para | Plano gratuito? |
|---|---|---|
| **ChatGPT** (GPT-4o) | Geração de texto, brainstorming | Sim (limitado) |
| **Claude** (Anthropic) | Textos longos, análise de CVs | Sim |
| **Gemini** (Google) | Integrado com Gmail/Docs | Sim |
| **Copilot** (Microsoft) | Integrado com Word/LinkedIn | Sim |

> Para a maioria dos casos, o ChatGPT gratuito ou Claude gratuito é suficiente.

## Como pensar sobre prompts

Um bom prompt tem 4 elementos:

1. **Papel** — diz à IA quem ela é: "Você é um recrutador sênior..."
2. **Contexto** — fornece informação: "Esta é a descrição da vaga..."
3. **Tarefa** — instrução clara: "Escreva um parágrafo de abertura..."
4. **Restrições** — formato e limites: "em até 3 linhas, tom profissional mas não formal"

A qualidade do output depende 80% da qualidade do input. Prompt fraco = resultado fraco.`,
      },
      {
        id: '27-2',
        title: 'Prompts para criar e otimizar CVs com IA',
        duration: '35 min',
        content: `# Prompts para criar e otimizar CVs com IA

## Prompt 1: Otimizar um bullet de experiência

\`\`\`
Você é um especialista em CVs para mercado tech/corporativo.
Reescreva este bullet de experiência para ser mais impactante,
usando um verbo de ação forte e incluindo resultado quantificado se possível.
Tom: profissional, direto, orientado a resultados.
Máximo: 2 linhas.

Bullet original: [cole seu bullet aqui]
\`\`\`

**Exemplo de uso:**
- Original: "Trabalhei com equipe de vendas para melhorar processo"
- IA gera: "Redesenhei o funil de vendas em parceria com time comercial, reduzindo o ciclo de venda de 45 para 28 dias e aumentando a taxa de conversão em 22%"

---

## Prompt 2: Adaptar CV para uma vaga específica

\`\`\`
Você é um especialista em recrutamento e ATS.
Vou te dar a descrição de uma vaga e meu CV atual.
Sua tarefa:
1. Identifique as 10 palavras-chave mais importantes da vaga
2. Mostre quais dessas palavras já estão no meu CV
3. Sugira como incorporar as que faltam, com exemplos concretos
4. Proponha uma versão melhorada do resumo profissional
   alinhada com esta vaga específica (máximo 4 linhas)

VAGA: [cole a descrição da vaga]

MEU CV: [cole o texto do seu CV]
\`\`\`

---

## Prompt 3: Gerar bullets de experiência a partir do zero

\`\`\`
Você é especialista em escrever CVs de alto impacto.
Com base nas informações abaixo, gere 5 bullets de experiência
profissional no formato: Verbo de ação + O que fez + Resultado quantificado.

Cargo: [seu cargo]
Empresa: [tipo de empresa]
O que fiz: [descreva em linguagem natural o que você fazia]
Resultados que obtive: [descreva resultados, mesmo aproximados]

Formato: bullets curtos, máximo 2 linhas cada, iniciando com verbo no passado.
\`\`\`

---

## Prompt 4: Analisar pontos fracos do seu CV

\`\`\`
Você é um recrutador sênior com 10 anos de experiência.
Analise este CV com olho crítico e me diga:
1. Os 3 pontos mais fracos que me impediriam de ser chamado
2. O que está faltando que os melhores CVs da minha área têm
3. Sugestões concretas para corrigir cada ponto fraco

MEU CV: [cole o texto]
VAGA-ALVO: [descreva o tipo de vaga que procura]
\`\`\`

## Dica importante: itere, não aceite o primeiro output

A IA raramente acerta de primeira. O fluxo correto:
1. Gera o primeiro rascunho com o prompt
2. Avalia o que está bom e o que está genérico
3. Pede refinamento: "Torna a segunda frase mais específica" ou "Substitui o verbo X por algo mais dinâmico"
4. Incorpora sua voz e ajusta detalhes que só você conhece`,
      },
      {
        id: '27-3',
        title: 'Prompts para cartas de motivação que se destacam',
        duration: '30 min',
        content: `# Prompts para cartas de motivação que se destacam

## O problema das cartas geradas por IA sem personalização

Recrutadores já reconhecem cartas escritas 100% por IA: são formais demais, genéricas e sem personalidade. A solução é usar IA como co-escritora, não como ghostwriter completa.

**Regra de ouro:** Você fornece os fatos, a IA fornece a estrutura e o polish.

---

## Prompt 1: Carta de motivação completa

\`\`\`
Você é especialista em cartas de motivação para mercado lusófono
(Brasil e Portugal).

Escreva uma carta de motivação com estas características:
- Tom: profissional mas humano (não robótico)
- Estrutura: gancho inicial impactante → proposta de valor →
  prova concreta → fit com a empresa → call to action
- Máximo 300 palavras

INFORMAÇÕES:
- Meu nome: [nome]
- Cargo que busco: [cargo]
- Empresa: [empresa]
- Por que esta empresa me interessa: [sua razão genuína]
- Minha maior conquista relevante para esta vaga: [conquista com número]
- Habilidade que mais me diferencia: [habilidade]
- Descrição da vaga: [cole ou descreva]
\`\`\`

---

## Prompt 2: Melhorar uma carta existente

\`\`\`
Aqui está minha carta de motivação atual.
Melhore-a seguindo estes critérios:
1. O primeiro parágrafo deve ser um gancho — algo que faça o recrutador
   querer continuar a ler. Sem clichês como "venho por meio desta"
2. Cada parágrafo deve ter uma ideia central clara
3. Substitua adjetivos vagos ("dedicado", "comprometido")
   por evidências concretas
4. Encurte se necessário — máximo 280 palavras
5. Mantenha meu tom e personalidade

CARTA ATUAL: [cole sua carta]
\`\`\`

---

## Prompt 3: Primeira linha de impacto (o mais difícil)

\`\`\`
Preciso de uma primeira frase memorável para minha carta de motivação.
Não quero clichês. Quero algo que prenda a atenção imediatamente.

Minha situação: [descreva em 2-3 linhas quem você é e o que quer]
A empresa: [o que a empresa faz, o que te atrai]
Tom desejado: [direto/criativo/formal-moderno]

Gere 5 opções diferentes de primeira frase.
\`\`\`

---

## O que nunca delegar à IA

- A razão genuína de querer trabalhar naquela empresa específica
- Suas histórias e realizações pessoais (invente e é detetável)
- O tom final — sempre revise e humanize
- Detalhes culturais e linguísticos específicos do mercado local`,
      },
      {
        id: '27-4',
        title: 'Preparar entrevistas com IA: role-play e feedback',
        duration: '30 min',
        content: `# Preparar entrevistas com IA: role-play e feedback

## Por que treinar com IA funciona

Preparar respostas mentalmente é muito diferente de dizê-las em voz alta. A IA permite praticar centenas de variações de perguntas, receber feedback imediato e treinar até a resposta soar natural.

---

## Prompt 1: Simulador de entrevista completo

\`\`\`
Você é um entrevistador sênior de [empresa / setor].
Vou fazer uma entrevista para o cargo de [cargo].

Faça 8 perguntas típicas desta entrevista, uma de cada vez.
Após cada resposta minha:
1. Avalie de 1-10 com justificativa
2. Identifique o que ficou forte
3. Aponte o que poderia ser melhorado
4. Dê um exemplo de como poderia responder melhor

Comece com a primeira pergunta.
\`\`\`

---

## Prompt 2: Feedback na resposta STAR

\`\`\`
Analise esta resposta que darei para a pergunta
"Conte sobre um desafio que você enfrentou e como resolveu":

MINHA RESPOSTA: [cole sua resposta]

Avalie:
1. Está clara a Situação? (contexto)
2. Está clara a Tarefa? (meu papel)
3. As Ações são específicas e concretas?
4. O Resultado é quantificado ou mensurável?
5. Duração adequada? (ideal: 90-120 segundos falado)

Reescreva a resposta com as melhorias necessárias.
\`\`\`

---

## Prompt 3: Gerar perguntas difíceis por empresa

\`\`\`
Estou me preparando para entrevista na [empresa] para o cargo de [cargo].

1. Liste as 10 perguntas mais prováveis nesta entrevista,
   incluindo técnicas e comportamentais
2. Inclua 3 perguntas-armadilha comuns neste tipo de processo
3. Para cada pergunta-armadilha, explique o que o recrutador
   está realmente avaliando e como responder corretamente
\`\`\`

---

## Prompt 4: Preparar perguntas para fazer ao entrevistador

\`\`\`
Estou na fase final de entrevista com [empresa] para [cargo].
O entrevistador é [cargo do entrevistador].

Gere 8 perguntas inteligentes para eu fazer ao final da entrevista.
Categorize em: cultura da empresa, crescimento na função,
desafios da equipe e expectativas de performance.
As perguntas devem mostrar que pesquisei a empresa e penso
estrategicamente, não apenas que quero saber salário e benefícios.
\`\`\``,
      },
      {
        id: '27-5',
        title: 'Pesquisa de empresas e negociação com ajuda da IA',
        duration: '25 min',
        content: `# Pesquisa de empresas e negociação com ajuda da IA

## Antes de qualquer candidatura ou entrevista: pesquise a fundo

Candidatos que pesquisam bem a empresa têm 3x mais chances de avançar nas fases. A IA acelera essa pesquisa de horas para minutos.

---

## Prompt 1: Análise rápida de empresa

\`\`\`
Faça uma análise da empresa [nome] para me preparar para uma entrevista.
Inclua:
1. O que a empresa faz e qual o seu modelo de negócio
2. Quem são os principais concorrentes
3. Notícias recentes relevantes (crescimento, produtos, desafios)
4. Cultura e valores declarados
5. 3 perguntas inteligentes que posso fazer na entrevista
   com base nessas informações
6. Como conectar minha experiência ao momento atual da empresa
\`\`\`

---

## Prompt 2: Pesquisa salarial e ancoragem

\`\`\`
Estou me candidatando para [cargo] em [cidade/país]
com [X anos] de experiência.

Me ajude a pesquisar:
1. Faixa salarial típica para este cargo neste mercado
2. Fatores que justificam estar no topo da faixa
3. Como calcular meu "número âncora" para negociação
4. O que perguntar à empresa para entender o pacote total
   (além do salário base)
\`\`\`

---

## Prompt 3: Preparar argumentos de negociação

\`\`\`
Recebi uma proposta de [valor] para [cargo] em [empresa].
Minha expectativa é [valor-alvo].

Com base nas minhas realizações abaixo, me ajude a montar
3 argumentos sólidos para justificar pedir [valor-alvo]:

MINHAS REALIZAÇÕES:
- [Realização 1]
- [Realização 2]
- [Realização 3]

Os argumentos devem ser quantificados, específicos
e difíceis de refutar.
\`\`\`

---

## Uso ético e honesto da IA

A IA é uma ferramenta de amplificação — ela amplifica o que você coloca nela. Se você fornecer realizações reais, ela escreve sobre elas melhor. Se inventar, ela amplifica mentiras.

**Regras simples:**
- Nunca inclua informações que não são suas
- Sempre revise o output para confirmar que é verdadeiro
- A entrevista vai verificar o que está no CV — prepare-se para justificar cada linha
- Use IA para polir, não para inventar`,
      },
    ],
  },
  {
    id: 28,
    title: 'Sprint de 30 Dias: Do Zero ao Emprego',
    desc: 'Um método estruturado e intensivo com metas diárias, prioridades claras e sistema de accountability. Para quem precisa se recolocar rápido e com resultado.',
    duration: '3h 0min',
    icon: '⚡',
    isPro: true,
    color: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700', icon: 'bg-amber-500' },
    lessons: [
      {
        id: '28-1',
        title: 'A mentalidade do sprint: urgência sem desespero',
        duration: '25 min',
        content: `# A mentalidade do sprint: urgência sem desespero

## Por que a maioria das buscas de emprego falha

A maioria das pessoas busca emprego de forma reativa e desorganizada:
- Manda CV quando lembra
- Aplica para tudo sem filtro
- Espera sem seguimento (follow-up)
- Alterna entre períodos intensos e semanas de inércia

O resultado: meses de busca com poucos resultados, crescente ansiedade e decisões precipitadas por desespero.

## A mentalidade do sprint muda isso

Um sprint é um período de esforço máximo e focado, com duração definida e metas claras. No contexto da busca de emprego:

- **30 dias** de execução disciplinada
- **Metas diárias** concretas (não "mandar CVs")
- **Sistema de rastreamento** para saber o que funciona
- **Review semanal** para ajustar a estratégia

## A diferença entre urgência e desespero

| Urgência | Desespero |
|---|---|
| Candidata-se com foco em vagas certas | Candidata-se a tudo sem critério |
| Personaliza cada candidatura | Envia o mesmo CV para 100 vagas |
| Faz follow-up profissional | Envia e esquece (ou manda emails diários) |
| Mantém padrões de qualidade | Aceita a primeira oferta, qualquer oferta |
| Cuida do bem-estar | Trabalha 18h/dia e entra em colapso |

## A regra da divisão de tempo

No sprint de 30 dias, o tempo se divide em:

**40% — Candidaturas (aplicar e personalizar)**
**30% — Networking (construir e ativar relações)**
**20% — Preparação (CV, perfil, prática de entrevista)**
**10% — Aprendizagem e ajuste (o que está funcionando?)**

## Preparar o ambiente do sprint

Antes de começar os 30 dias:
1. **Bloqueie tempo diário** — 3-4h mínimas, idealmente de manhã
2. **Crie o seu CRM** — use o Rastreador de Candidaturas do JobJump
3. **Defina o seu alvo** — cargo, setor, faixa salarial, geografia
4. **Documente as suas métricas iniciais** — CV pronto? LinkedIn atualizado? Pitch definido?
5. **Informe as pessoas próximas** — o apoio social aumenta a consistência`,
      },
      {
        id: '28-2',
        title: 'Semana 1: Preparar todas as armas antes de disparar',
        duration: '40 min',
        content: `# Semana 1: Preparar todas as armas antes de disparar

## O erro mais comum: candidatar-se antes de estar pronto

A maioria das pessoas começa a mandar CVs no primeiro dia de busca. É um erro. Candidatar-se com CV fraco, LinkedIn desatualizado e pitch mal definido é desperdiçar oportunidades que não voltam.

A Semana 1 é a mais trabalhosa do sprint — mas define os resultados das semanas seguintes.

---

## Dia 1 — Diagnóstico e definição de alvo (2-3h)

**Tarefas:**
- [ ] Escreva em 3 linhas exatamente que cargo você quer, em que tipo de empresa e com que faixa salarial
- [ ] Liste 20 empresas em que você quer trabalhar (mesmo sem vagas abertas)
- [ ] Identifique 5 vagas existentes para calibrar o mercado
- [ ] Analise os requisitos comuns nessas vagas

**Output esperado:** Alvo claro + lista de empresas + gap entre seu perfil atual e o desejado

---

## Dia 2 — CV otimizado (3-4h)

**Tarefas:**
- [ ] Use a ferramenta ATS do JobJump para analisar seu CV atual
- [ ] Reescreva bullets fracos com o Gerador de Bullets de CV
- [ ] Verifique: cada experiência tem pelo menos 1 resultado quantificado?
- [ ] CV em formato de texto limpo (testável em ATS)
- [ ] Peça feedback a uma pessoa da sua área

**Métricas:** Score do CV Analyzer acima de 70 antes de avançar

---

## Dia 3 — LinkedIn completo (2-3h)

**Tarefas:**
- [ ] Foto profissional atualizada
- [ ] Headline otimizada com o Gerador de Headline do JobJump
- [ ] Seção "Sobre" completa (mínimo 200 palavras)
- [ ] Todas as experiências preenchidas com bullets do CV
- [ ] Open to Work ativado (modo "apenas recrutadores" ou público)
- [ ] Skills atualizadas com as da sua área

---

## Dia 4 — Pitch pessoal treinado (1-2h)

**Tarefas:**
- [ ] Use o Gerador de Elevator Pitch do JobJump
- [ ] Pratique em voz alta as 3 versões
- [ ] Grave 1 minuto de video de si mesmo respondendo "fale sobre você"
- [ ] Assista e ajuste o que soou artificial

---

## Dias 5-7 — Primeira rodada de candidaturas (4-6h)

**Tarefas:**
- [ ] Aplique para 8-12 vagas altamente compatíveis (não quantidade — qualidade)
- [ ] Para cada candidatura: personalize o primeiro parágrafo da carta
- [ ] Registre tudo no Rastreador de Candidaturas
- [ ] Identifique 3 pessoas no LinkedIn que trabalham nas empresas-alvo

**Regra:** Máximo de 2-3 candidaturas por dia. Cada uma bem feita supera 10 genéricas.`,
      },
      {
        id: '28-3',
        title: 'Semanas 2-3: Volume com qualidade e networking ativo',
        duration: '35 min',
        content: `# Semanas 2-3: Volume com qualidade e networking ativo

## A fase de execução: construir pipeline

Nas Semanas 2 e 3, você já tem as armas preparadas. O objetivo agora é:
1. Manter um volume constante de candidaturas personalizadas
2. Ativar ativamente a rede de contatos
3. Acompanhar os processos já iniciados (follow-up)
4. Ajustar o que não está funcionando

---

## Rotina diária nas Semanas 2-3

### Manhã (1-1,5h): Candidaturas novas
- Pesquise 3-5 vagas novas relevantes
- Candidate-se a 2-3 com personalização real
- Registre no Rastreador

### Tarde (1h): Networking
- Envie 3-5 mensagens personalizadas no LinkedIn (não genéricas!)
- Responda mensagens recebidas
- Comente de forma relevante em posts do setor

### Semanal (2h): Revisão e ajuste
- Qual a taxa de resposta das candidaturas?
- Quais tipos de vagas estão gerando mais retorno?
- O que precisa mudar na estratégia?

---

## As mensagens de networking que funcionam

**❌ O que não funciona:**
"Olá, estou em busca de emprego. Você conhece alguma vaga?"

**✅ O que funciona:**
"Olá [Nome], vi que trabalhaste na [empresa] como [cargo]. Estou a pesquisar muito sobre [setor/empresa] e tive uma dúvida específica: [pergunta genuína e curta]. Seria possível trocar 15 minutos?"

---

## Meta semanal mínima para o sprint

| Atividade | Meta semanal |
|---|---|
| Candidaturas enviadas | 10-15 vagas |
| Follow-ups enviados | Todos os processos >5 dias sem resposta |
| Novas conexões LinkedIn | 15-20 pessoas |
| Conversas de networking | 2-3 calls/reuniões |
| Entrevistas obtidas | 1-2 (cresce ao longo do sprint) |

---

## Como fazer follow-up sem parecer desesperado

**5 dias após candidatura:**
"Olá [Nome], enviei candidatura para [cargo] em [data] e queria confirmar o recebimento. Estou muito animado com a possibilidade e fico à disposição para qualquer informação adicional."

**10 dias após entrevista:**
"Olá [Nome], foi ótimo conversar sobre a posição de [cargo]. Continuo muito interessado e queria saber se há alguma atualização sobre o processo. Posso ajudar com qualquer informação adicional?"

---

## O mercado oculto: vagas que nunca são publicadas

Estima-se que 70-80% das vagas são preenchidas antes de serem publicadas. Para acessar esse mercado:

1. **Candidaturas espontâneas:** Manda CV direto para o gestor da área (não RH) com contexto claro
2. **Referências internas:** Alguém na empresa pode indicar você — pesa muito
3. **LinkedIn proativo:** Recrutadores buscam perfis ativamente — estar bem posicionado é fundamental
4. **Eventos do setor:** Meetups, conferências e eventos online criam conexões genuínas`,
      },
      {
        id: '28-4',
        title: 'Semana 4: Entrevistas, negociação e decisão',
        duration: '35 min',
        content: `# Semana 4: Entrevistas, negociação e decisão

## A fase de colheita

Se as Semanas 1-3 foram executadas bem, a Semana 4 deve trazer:
- 3-6 processos seletivos em andamento
- 1-3 entrevistas marcadas ou confirmadas
- Pelo menos 1 proposta em negociação (idealmente mais)

---

## Antes de cada entrevista: o ritual de 1h

**45 minutos antes:**
- [ ] Revise a descrição da vaga e suas anotações sobre a empresa
- [ ] Prepare 3 histórias STAR relevantes para os requisitos
- [ ] Liste 5 perguntas inteligentes para fazer ao entrevistador
- [ ] Confirme logística (link da call, endereço, contacto do recrutador)

**15 minutos antes:**
- [ ] Abra o local/link com antecedência
- [ ] Água próxima, ambiente silencioso
- [ ] Relembre as 3 primeiras frases do seu pitch pessoal

---

## Durante a entrevista: os 5 momentos-chave

**1. Os primeiros 60 segundos** — impressão e energia
**2. A pergunta "fale sobre você"** — use o pitch de 60s que praticou
**3. Perguntas comportamentais** — use STAR, seja específico
**4. Perguntas sobre motivação** — mostre pesquisa genuína sobre a empresa
**5. Suas perguntas ao final** — use as 5 que preparou; nunca diga "não tenho perguntas"

---

## Negociação: o momento de não deixar dinheiro na mesa

Regras para a Semana 4:

1. **Nunca aceite na hora** — peça sempre "um dia para analisar"
2. **Negocie sempre** — mesmo que pareça justo, o primeiro número raramente é o máximo
3. **Use o Script de Negociação do JobJump** como base de preparação
4. **Pense no pacote total** — salário base + bônus + benefícios + flexibilidade + progressão

**A pergunta mágica antes de decidir:**
"Qual seria o salário típico para alguém com meu perfil e experiência nesta função?"

Isso transfere o ônus de ancoragem para eles.

---

## Gerenciar múltiplas propostas

Se recebeu mais de uma oferta (objetivo do sprint), use o Comparador de Ofertas do JobJump para comparar lado a lado.

Fatores além do salário:
- Oportunidade de aprendizagem e crescimento
- Qualidade da gestão direta
- Cultura e fit com seus valores
- Estabilidade da empresa
- Localização / flexibilidade remota
- Benefícios de saúde, formação e previdência`,
      },
      {
        id: '28-5',
        title: 'Quando o sprint acaba: o que fazer se ainda não conseguiu',
        duration: '25 min',
        content: `# Quando o sprint acaba: o que fazer se ainda não conseguiu

## Normalizar o processo sem normalizar a inércia

Um sprint de 30 dias executado corretamente quase sempre gera progresso mensurável — mas não necessariamente uma oferta de emprego. O mercado tem variáveis que você não controla: timing, concorrência, orçamento de contratação.

**O que 30 dias bem executados devem gerar:**
- 30-50 candidaturas personalizadas enviadas
- 5-15 processos seletivos iniciados
- 3-8 entrevistas realizadas
- Uma rede de contatos 30-50% mais ativa
- Clareza sobre o que funciona e o que não funciona para o seu perfil

Se esses números não foram atingidos, o problema não é o mercado — é a execução. Reveja com honestidade.

---

## O diagnóstico pós-sprint

Responda a estas perguntas:

**Se a taxa de resposta ao CV está abaixo de 10%:**
- O alvo está bem definido? Está aplicando em vagas para as quais é realmente qualificado?
- O CV está otimizado para ATS? Use o Analisador de CV do JobJump
- Está personalizando a candidatura para cada vaga?

**Se está chegando a entrevistas mas não avançando:**
- O pitch está claro e convincente?
- Está usando método STAR nas respostas?
- Está pesquisando a empresa antes de cada entrevista?
- Peça feedback ao recrutador após cada rejeição

**Se não está conseguindo nenhuma entrevista:**
- O networking está ativo? (Este canal gera 70-80% dos empregos)
- Está se candidatando a vagas onde tem 70%+ dos requisitos?
- O LinkedIn está completo e atualizado?

---

## O sprint 2: ajustar e relançar

Se necessário, faça um segundo sprint com ajustes baseados no diagnóstico:

**Pivô 1: Ampliar o alvo** — se o segmento está muito competitivo, adicione setores adjacentes

**Pivô 2: Mudança de abordagem** — se candidaturas não geram retorno, invista 70% do tempo em networking direto

**Pivô 3: Revisão de posicionamento** — se os feedbacks apontam qualificação insuficiente, priorize projetos ou certificações de curto prazo

---

## Cuidar de si mesmo durante o processo

A busca de emprego é emocionalmente desgastante. Não é fraqueza reconhecer isso.

**Práticas que ajudam:**
- **Desconecte nos fins de semana** — o acesso constante aumenta ansiedade sem aumentar resultados
- **Comemore marcos parciais** — primeira entrevista, primeiro feedback, primeira proposta
- **Mantenha rotina de exercícios e sono** — a clareza mental afeta diretamente a qualidade das entrevistas
- **Fale sobre o processo** — vergonha isola; comunidade e rede de apoio aceleram

> **Lembre:** Cada rejeição é informação, não sentença. Os candidatos que conseguem emprego mais rápido não são os mais talentosos — são os mais consistentes.`,
      },
    ],
  },
  {
    id: 29,
    title: 'Carreira Após os 40: Como Sêniors Se Reposicionam',
    desc: 'Estratégias específicas para profissionais com 15+ anos de experiência que buscam recolocação ou transição — sem cair nas armadilhas do etarismo.',
    duration: '3h 20min',
    icon: '🧭',
    isPro: true,
    color: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700', icon: 'bg-amber-500' },
    lessons: [
      {
        id: '29-1',
        title: 'O mercado não te exclui — mas você pode se excluir',
        duration: '35 min',
        content: `# O mercado não te exclui — mas você pode se excluir

## A realidade do etarismo no Brasil

Etarismo existe. Não vamos fingir que não. Pesquisas mostram que candidatos acima de 45 anos levam, em média, **3x mais tempo** para se recolocar do que candidatos mais jovens para a mesma função.

Mas há um dado que a maioria ignora: **a maioria das dificuldades de profissionais sêniors não vem do mercado — vem de como eles se apresentam ao mercado.**

## As três armadilhas que você precisa evitar

### Armadilha 1: O CV museu
O CV que lista 25 anos de experiência cronologicamente, começando de 1999, com cargos que não existem mais, em empresas que fecharam, usando ferramentas que já não são relevantes.

**O que fazer:** Seu CV deve ter no máximo 2 páginas. Foque nos últimos 10-12 anos. O que veio antes, a menos que seja extraordinário, fica fora ou em menção mínima.

### Armadilha 2: A mentalidade de "tenho muito para ensinar"
Profissionais sêniors frequentemente entram em entrevistas com postura de autoridade — o que inconscientemente afasta os recrutadores (que muitas vezes são mais jovens e sentem hierarquia implícita).

**O que fazer:** Entre com curiosidade, não com certeza. Você quer aprender sobre esse ambiente específico tanto quanto quer mostrar o que sabe.

### Armadilha 3: Esconder a idade (e gerar desconfiança)
Omitir o ano de formação, não colocar datas no CV, evitar qualquer referência temporal — gera desconfiança e, quando a idade aparece, parece que você tentou esconder algo.

**O que fazer:** Seja direto. Sua experiência é um ativo — posicione assim.

## O que o mercado realmente valoriza em profissionais sêniors

- **Execução com autonomia**: você entrega sem precisar de mão na mão
- **Network estabelecido**: você traz relacionamentos com clientes, parceiros e fornecedores
- **Visão de negócio**: você entende como as decisões impactam o todo
- **Estabilidade e comprometimento**: você não vai sumir depois de 6 meses
- **Capacidade de desenvolver mais jovens**: você multiplica o time

## A pergunta que você precisa responder

Antes de qualquer entrevista, responda: **"Por que EU, especificamente, sou a melhor escolha para ESTE cargo, NESTA empresa, NESTE momento?"**

Não é sobre a sua trajetória. É sobre o que você resolve agora.`,
      },
      {
        id: '29-2',
        title: 'Como posicionar experiência como diferencial (não como peso)',
        duration: '40 min',
        content: `# Como posicionar experiência como diferencial (não como peso)

## O problema da narrativa cronológica

A maioria dos profissionais sêniors conta sua história assim: "Comecei em 1998 como trainee, depois fui analista, depois coordenador, depois gerente, depois diretor..."

Esse modelo tem dois problemas:
1. É chato e previsível
2. Coloca ênfase no tempo (que pode ser lido como "velho") em vez de no valor

## A narrativa de impacto

Reescreva sua história como um portfólio de problemas resolvidos:

**Fraco:** "Fui Diretor de Operações da empresa X por 8 anos."

**Forte:** "Reestruturei as operações logísticas de uma empresa com R$1,2 bilhão de faturamento, reduzindo custo operacional em 22% e prazo de entrega em 40% — sem demissões."

A estrutura: **Contexto (escala/complexidade) + Ação (o que você fez) + Resultado (número)**

## Atualizando sua linguagem

Muitos sêniors perdem pontos por usar linguagem antiga ou resistir a termos modernos:

| Evite | Use |
|-------|-----|
| "Gestão de pessoal" | "Desenvolvimento e liderança de equipes" |
| "Reuniões de diretoria" | "Apresentações para C-Level" |
| "Informatizado" | "Digital / automatizado" |
| "Fichário / pasta" | "Base de dados / sistema" |
| "Fax / telex" | Omita. Simplesmente omita. |

## Posicionando a senioridade para cada tipo de empresa

**Startups em crescimento:** Querem você para estruturar o que ainda é caótico. Posicione: "Já passei por essa fase. Sei o que escala e o que quebra."

**Empresas médias em transformação:** Querem maturidade e execução. Posicione: "Implementei mudanças similares. Posso reduzir o tempo de erro."

**Grandes corporações:** Querem alguém que navegue política e complexidade. Posicione: "Operei em ambientes multi-stakeholder com aprovação em múltiplos níveis."

## O princípio da relevância seletiva

Você tem 20 anos de experiência. Não use tudo. Use o que é relevante para ESTA vaga.

Regra prática: **Cada exemplo que você usa em entrevista deve responder a pergunta implícita "por que isso me faz a escolha certa para este cargo específico?"**

Se não responde, não use.`,
      },
      {
        id: '29-3',
        title: 'Onde encontrar empresas que valorizam sêniors',
        duration: '35 min',
        content: `# Onde encontrar empresas que valorizam sêniors

## O paradoxo da vaga publicada

A maioria das vagas publicadas para sêniors é altamente competitiva e frequentemente já tem um candidato interno ou indicado antes de publicar. Isso é especialmente verdade para cargos de liderança.

**Conclusão:** Vagas publicadas são o pior canal para profissionais sêniors. Networking é o melhor.

## Tipos de empresa que buscam ativamente sêniors

### 1. Empresas em momento de profissionalização
Negócios familiares ou fundados por empreendedores que chegaram a um ponto onde precisam de gestores profissionais. Esses lugares não têm ego de quem contratar — querem resultado.

**Onde encontrar:** Aceleradoras, consultorias de M&A, associações setoriais, eventos de PMEs.

### 2. Empresas internacionais entrando no Brasil
Precisam de alguém com mercado local, rede de contatos e que entenda a cultura. Você tem vantagem natural.

**Onde encontrar:** AmCham, FACC (Câmara Franco-Brasileira), BRICS Business Council, publicações setoriais internacionais.

### 3. Startups em Série B e C
Já passaram da fase de caos inicial e precisam estruturar áreas. Procuram sêniors que "já viram esse filme antes."

**Onde encontrar:** Abstartups, Distrito, LinkedIn filtrando por "Série B", grupos de investidores.

### 4. Empresas de Private Equity e fundo de investimento
Fundos que compraram empresas e precisam implementar gestão profissional rapidamente.

**Onde encontrar:** ABVCAP, sites de PE como Patria, Vinci, Kinea, Advent.

### 5. Consultorias e projetos por deliverable
Cada vez mais empresas preferem contratar sêniors como consultores para projetos específicos — mais flexibilidade para ambos.

**Onde encontrar:** Plataformas como Toptal, Expert360, consultorias boutique, sua própria rede.

## A estratégia de conteúdo no LinkedIn

Profissionais sêniors que publicam conteúdo de valor no LinkedIn são encontrados — não precisam buscar tanto.

**O que publicar:**
- Análises setoriais baseadas na sua experiência
- Lições aprendidas em momentos difíceis (com foco no aprendizado, não na vitimização)
- Tendências que você antecipou e que aconteceram
- Perspectivas contra-intuitivas do seu setor

**Frequência:** 1-2 posts por semana é suficiente. Consistência > volume.

## Ativando sua rede de forma estratégica

Sua maior vantagem é uma rede construída ao longo de décadas. Mas ela pode estar adormecida.

**Sequência de ativação:**
1. Liste 30 pessoas da sua rede que você não fala há mais de 6 meses
2. Mande mensagem genuína (sem pedir nada) para 5 por semana
3. Após reconectar, nas próximas semanas, compartilhe algo útil
4. Só então, se relevante, mencione que está buscando oportunidades

Você não pede favores — você ativa relacionamentos.`,
      },
      {
        id: '29-4',
        title: 'CV e LinkedIn para profissionais com 15+ anos de experiência',
        duration: '40 min',
        content: `# CV e LinkedIn para profissionais com 15+ anos de experiência

## As regras mudam com a senioridade

Tudo que se ensina sobre CV para iniciantes é errado para sêniors. Não coloque tudo. Não seja exaustivo. Seja seletivo e poderoso.

## O CV do sênior: estrutura ideal

### Cabeçalho
- Nome (fonte legível, não precisa ser enorme)
- Título profissional: específico e atual (não "Executivo com 20 anos de experiência")
- Cidade, LinkedIn, email, telefone
- **NÃO coloque foto** (no Brasil ainda existe preconceito visual consciente e inconsciente)
- **NÃO coloque data de nascimento**

### Sumário executivo (3-4 linhas)
A seção mais importante para sêniors. Responde: quem você é, qual problema você resolve, qual é sua proposta de valor.

**Exemplo fraco:** "Profissional com ampla experiência em gestão de operações e logística, com passagem por grandes empresas do setor."

**Exemplo forte:** "Diretor de Operações com track record de reestruturação de supply chains em empresas com faturamento acima de R$500M. Especialista em redução de custo operacional e digitalização de processos — 3 projetos entregues com ROI médio de 280% em 18 meses."

### Experiência (apenas os últimos 10-12 anos)
Para cada cargo:
- Empresa + cargo + período (ano de início e fim, sem o mês)
- 3-5 bullets de realizações, não responsabilidades
- Formato: Verbo de impacto + o que foi feito + resultado mensurável

### O que fica FORA do CV de sênior
- Cargos anteriores a 2010-2012 (salvo se extraordinários)
- Ano de formação (se for antes de 2000, omita)
- Habilidades básicas como "Pacote Office" (isso é insulto para um sênior)
- Referências ou "disponível mediante solicitação"
- Foto, estado civil, filhos, CPF

## LinkedIn para sêniors: os pontos críticos

### Foto profissional atual
Uma foto de 10 anos atrás é pior do que nenhuma. Invista R$200-400 em um ensaio rápido ou use um fundo neutro em boa iluminação.

### Título: não "Diretor" — o que você FAZ
Ruim: "Diretor Comercial | Ex-Ambev | Ex-Unilever"
Bom: "Aceleração Comercial B2B | Especialista em Vendas Complexas e Abertura de Mercados | 3 países, 8 setores"

### A seção "Sobre": sua carta de vendas em 300 palavras
Estrutura recomendada:
1. Abertura impactante (resultado que você entregou ou problema que resolve)
2. Sua proposta de valor específica
3. 3-4 realizações em formato bullet com números
4. Quem deve se conectar com você e para quê
5. CTA: email ou "me mande mensagem"

### Recomendações
Para sêniors, 3-5 recomendações de ex-gestores, pares ou subordinados carregam muito peso. Peça especificamente para mencionarem resultados concretos que você entregou.`,
      },
      {
        id: '29-5',
        title: 'Negociando salário quando você tem mais experiência que o gestor',
        duration: '30 min',
        content: `# Negociando salário quando você tem mais experiência que o gestor

## A dinâmica delicada da entrevista com gestores mais jovens

É cada vez mais comum que profissionais sêniors sejam entrevistados por gestores mais jovens. Isso cria uma dinâmica delicada que, mal manejada, pode custar a vaga.

**O que o gestor jovem teme:**
- Que você não respeite a hierarquia
- Que você seja difícil de gerenciar
- Que você queira o cargo dele no futuro
- Que você julgue suas decisões baseado em "antes era assim"

**Como resolver isso na entrevista:**
- Faça perguntas genuínas sobre como ele trabalha e o que valoriza
- Demonstre que você quer aprender sobre ESTE ambiente específico
- Nunca use a frase "na minha época" ou "antes se fazia assim"
- Mostre que você entrega sem precisar de reconhecimento hierárquico

## A questão salarial: como abordar

Sêniors frequentemente enfrentam dois problemas opostos:

**Problema A:** A empresa quer pagar menos do que você ganhava antes (porque seu histórico é "caro")
**Problema B:** A empresa tem budget adequado mas você subestima o que pode pedir

### Para o Problema A: Como negociar quando a empresa "não tem budget"

1. **Não revele seu salário anterior** — isso sempre te posiciona mal (se for alto, "caro demais"; se for baixo, âncora baixa)
2. Peça a faixa da posição primeiro: *"Para não perdermos tempo dos dois lados, você pode me dizer qual é a faixa prevista para esta posição?"*
3. Se a faixa for abaixo: "Pesquisei e para este nível de responsabilidade o mercado está entre X e Y. Estou aberto à conversa, mas gostaria que chegássemos a uma proposta nessa faixa."
4. Considere negociar além do salário: bônus por entrega, equity, flexibilidade, PLR, revisão em 6 meses

### Para o Problema B: Como saber quanto você pode pedir

Fontes para pesquisa:
- Glassdoor e LinkedIn Salary (filtrar por cargo + empresa de porte similar)
- Grupos de pares da sua área (WhatsApp, Slack de comunidades)
- Conversar com headhunters — eles conhecem o mercado em tempo real
- Pesquisas de remuneração de consultorias (Mercer, Hay, Korn Ferry — algumas têm versões gratuitas)

### O script para sêniors

*"Ao longo da minha carreira, aprendi que o alinhamento de expectativas logo no início evita frustrações. Posso compartilhar minha expectativa salarial, mas antes gostaria de entender melhor o escopo total da função e o que vocês esperam entregar nos primeiros 12 meses — isso vai me ajudar a ter uma proposta mais precisa."*

Isso faz duas coisas: posiciona você como alguém que foca em entrega (não em salário) e atrasa a negociação para quando você tem mais informação.

## Quando aceitar menos do que você quer

Às vezes vale: quando a empresa é um salto estratégico de carreira, quando o aprendizado compensa, quando o ambiente é excepcional, ou quando você precisa de velocidade de recolocação.

Mas aceite conscientemente — não por desespero disfarçado. E sempre com data de revisão acordada.`,
      },
    ],
  },
  {
    id: 30,
    title: 'Plano de Carreira de 5 Anos',
    desc: 'Construa um roteiro concreto para os próximos 5 anos: onde você quer chegar, o que precisa desenvolver e como medir o progresso.',
    duration: '2h 50min',
    icon: '🗺️',
    isPro: false,
    color: { bg: 'bg-teal-50', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-700', icon: 'bg-teal-500' },
    lessons: [
      {
        id: '30-1',
        title: 'Autoconhecimento: o que você quer de verdade?',
        duration: '35 min',
        content: `# Autoconhecimento: o que você quer de verdade?

## O problema da carreira por default

A maioria das pessoas não escolhe sua carreira — ela acontece. Uma oportunidade surge, você aceita porque precisa, a empresa gosta, você vai subindo, e um dia você olha para o espelho e percebe que está numa carreira que nunca escolheu conscientemente.

Isso não é falha moral. É a realidade de como o mundo funciona. Mas pode ser diferente.

## As quatro dimensões do que você quer

Antes de definir "onde quero estar em 5 anos", você precisa responder a quatro perguntas:

### 1. O que te dá energia?
Não o que você é bom — o que te dá energia quando você está fazendo. Há uma diferença.

Você pode ser excelente em analisar planilhas mas sair de reuniões de dados completamente esgotado. Isso é um sinal.

**Exercício:** Nas últimas 4 semanas, quais atividades no trabalho você perdeu a noção do tempo fazendo? Quais te deixaram mais animado após terminar?

### 2. O que você quer criar ou resolver?
Carreira satisfatória tem relação com impacto percebido. Você quer:
- Construir produtos que milhões usam?
- Liderar equipes e ver pessoas crescerem?
- Resolver problemas técnicos complexos?
- Mudar sistemas ou políticas que afetam muitas pessoas?
- Construir seu próprio negócio?
- Ganhar bem e ter tempo para o que realmente importa fora do trabalho?

Não há resposta certa. Mas você precisa saber a sua.

### 3. Qual é o estilo de vida que você quer?
A carreira é um meio, não um fim. Pergunte-se:
- Quanto você quer trabalhar? (40h/semana? 60h? 25h?)
- Onde você quer trabalhar? (Escritório, remoto, híbrido, no mundo?)
- Com quem você quer trabalhar? (Pequenos times, grandes organizações, de forma independente?)
- Qual é a sua tolerância a risco e instabilidade?

### 4. Quanto você precisa e quanto você quer ganhar?
Há o mínimo necessário para sua vida atual. E há o número que mudaria materialmente sua qualidade de vida. Saber os dois evita tanto a acomodação como a ganância sem propósito.

## O exercício dos 3 futuros

Escreva, em 1 página cada, três versões do seu futuro em 5 anos:

**Futuro A: A progressão natural** — se você continuar exatamente como está, sem mudanças deliberadas, onde você estará?

**Futuro B: O que você secretamente quer** — se não houvesse limitações (medo, dinheiro, opinião alheia), o que você faria?

**Futuro C: O alternativo razoável** — se o Futuro B for muito arriscado agora, qual seria uma versão intermediária que seria genuinamente boa?

Seu plano de carreira vai viver entre B e C.

## Por que a clareza interna vem primeiro

Sem saber o que você quer, você vai otimizar métricas que não importam para você — cargo, salário, reconhecimento externo — e acordar em 5 anos com tudo que "deveria" querer mas sem a sensação de que valeu a pena.

O autoconhecimento não é um exercício de filosofia. É o alicerce do plano.`,
      },
      {
        id: '30-2',
        title: 'Mapeando o mercado: onde seu perfil tem mais valor',
        duration: '35 min',
        content: `# Mapeando o mercado: onde seu perfil tem mais valor

## A intersecção que cria valor

Há um princípio simples mas poderoso: **você cria mais valor (e ganha mais) quando suas habilidades naturais encontram um mercado que tem escassez delas.**

O plano de carreira de 5 anos precisa incluir uma análise honesta dessa intersecção.

## Seu inventário de competências

Liste, sem modéstia excessiva, as suas competências nos três níveis:

### Competências técnicas (hard skills)
O que você sabe fazer com ferramentas, metodologias, sistemas. Seja específico: não "análise de dados" mas "Python para análise de dados, SQL avançado, experiência com dbt e Looker."

### Competências comportamentais (soft skills)
Não liste "trabalho em equipe" — todo mundo coloca isso. Pense em comportamentos observáveis:
- "Consigo simplificar problemas complexos para audiências não técnicas"
- "Funciono bem em ambientes de alta ambiguidade sem precisar de direção constante"
- "Tenho histórico de construir relacionamentos de confiança com clientes difíceis"

### Competências de domínio (knowledge)
O conhecimento específico que você acumulou sobre um setor, produto ou contexto: "Conheço profundamente o mercado de saúde suplementar no Brasil, incluindo regulação ANS e dinâmica de operadoras."

## Análise de mercado: onde há demanda

Para cada competência que você identificou, pesquise:

**1. Quais setores mais valorizam isso?**
Use LinkedIn para buscar vagas com as palavras-chave das suas competências. Observe quais setores concentram mais oportunidades.

**2. Qual é a trajetória de carreira típica?**
Busque profissionais com perfil similar ao seu, veja onde eles estão em 5-10 anos, quais cargos ocupam, quais empresas os contratam.

**3. Onde há escassez?**
Setores em transformação geralmente têm escassez de profissionais que unem domínio de negócio com capacidade digital. Essa intersecção paga muito bem.

## Os setores que mais crescem no Brasil (2025-2030)

Com base em tendências estruturais:

- **Saúde digital e healthtech**: digitalização acelerada pós-pandemia, regulação modernizando
- **Agro e agritechs**: Brasil é potência, mas o setor está em transformação digital profunda
- **Fintechs e serviços financeiros digitais**: ainda em expansão mesmo após consolidação inicial
- **ESG e sustentabilidade corporativa**: pressão regulatória e de investidores crescendo
- **Cibersegurança**: demanda supera oferta de profissionais qualificados em todo o mundo
- **IA aplicada a negócios**: não IA técnica — profissionais que sabem usar IA para resolver problemas de negócio

## O princípio da mobilidade estratégica

Um bom plano de 5 anos não é um trilho de trem — é um destino com múltiplas rotas possíveis.

Defina: **"Em 5 anos, quero estar em posição de [cargo/função/nível] em [tipo de empresa/setor], com [faixa salarial] e [estilo de trabalho]."**

Deixe a rota em aberto para ajustes — mas o destino precisa ser claro.`,
      },
      {
        id: '30-3',
        title: 'Construindo o roteiro: metas, milestones e checkpoints',
        duration: '35 min',
        content: `# Construindo o roteiro: metas, milestones e checkpoints

## Por que a maioria dos planos de carreira falha

Não por falta de ambição. Por falta de estrutura. Você define uma visão de 5 anos e nunca mais olha para ela.

Um plano que funciona tem três camadas: visão de longo prazo, metas de médio prazo e ações de curto prazo que você pode executar esta semana.

## A estrutura do plano em três horizontes

### Horizonte 1: Os próximos 90 dias (o que você fará)
Ações concretas, sem ambiguidade. Exemplo:
- "Fazer 3 entrevistas informais com profissionais da área X"
- "Completar o curso Y até [data]"
- "Atualizar CV e publicar 4 posts no LinkedIn"
- "Candidatar para 10 vagas por semana"

### Horizonte 2: Os próximos 12 meses (onde você quer estar)
Um estado desejado específico:
- "Estar num novo cargo com título de Sênior ou Especialista"
- "Ter completado a certificação Z"
- "Estar ganhando X% acima do salário atual"
- "Ter construído rede de 50 contatos ativos na nova área"

### Horizonte 3: Os próximos 5 anos (quem você quer ser)
Mais sobre identidade e capacidade do que cargo:
- "Ser referência reconhecida em [especialidade] no Brasil"
- "Ter liderado um time de pelo menos 15 pessoas"
- "Estar em posição de gestão sênior com autonomia estratégica"
- "Ter renda suficiente para [objetivo de vida específico]"

## O mapa de milestones

Entre hoje e o Horizonte 3, mapeie 5-7 marcos que indicam que você está no caminho certo. Esses marcos devem ser:
- **Específicos**: não "evoluir profissionalmente" mas "receber promoção para gerente"
- **Verificáveis**: você sabe com certeza quando chegou lá
- **Distribuídos no tempo**: pelo menos um por ano

## Como escrever metas que funcionam

Use o framework **SMART** mas sem ser mecânico:

| Elemento | O que significa | Exemplo |
|----------|-----------------|---------|
| Específica | O que exatamente você quer | "Cargo de Product Manager Sênior" |
| Mensurável | Como você sabe que chegou lá | "Com salário acima de R$12k" |
| Alcançável | É desafiador mas possível | Baseado na sua trajetória atual |
| Relevante | Conecta à sua visão maior | Faz sentido na rota de 5 anos |
| Temporal | Tem prazo claro | "Até dezembro de 2026" |

## O checkpoint trimestral

A cada 3 meses, reserve 2 horas para se perguntar:

1. Quais ações do Horizonte 1 eu completei?
2. Estou no caminho para o Horizonte 2?
3. Meu Horizonte 3 ainda faz sentido ou preciso ajustar?
4. O que aprendi que muda meu plano?

Planos de carreira não são imutáveis. São documentos vivos. Mas a revisão precisa ser intencional, não contínua — caso contrário você nunca executa, só planeja.`,
      },
      {
        id: '30-4',
        title: 'Desenvolvimento de competências: o que aprender e como',
        duration: '30 min',
        content: `# Desenvolvimento de competências: o que aprender e como

## O erro do aprendizado não estratégico

A maioria das pessoas que quer "se desenvolver" faz cursos aleatoriamente — o que aparece no feed, o que um colega recomendou, o que está em promoção na Black Friday.

Resultado: diplomas e certificações que não agregam à trajetória desejada, e a sensação permanente de que "está estudando" sem nunca se sentir qualificado.

## O gap de competências

Volte ao seu destino de 5 anos. Agora liste as competências que os profissionais que já estão lá possuem.

**Pesquise 10 perfis no LinkedIn** de pessoas com o cargo/função que você quer daqui a 5 anos. Anote:
- Formação e certificações
- Experiências anteriores que elas listam
- Skills que aparecem em comum
- Empresas onde trabalharam antes

Agora compare com o que você tem hoje. A diferença é o seu **mapa de desenvolvimento.**

## Priorizando o que aprender

Nem todos os gaps têm a mesma urgência. Classifique:

**Crítico (resolve no próximo ano):** Competências que bloqueiam você de entrar no próximo nível. Sem elas, portas não abrem.

**Importante (desenvolver em 1-3 anos):** Competências que diferenciam candidatos medianos de excelentes no nível desejado.

**Complementar (desenvolver em 3-5 anos):** Competências que ampliam seu escopo e possibilidades.

## Como aprender de forma eficiente

### Para competências técnicas
A hierarquia de eficiência (do mais para o menos):
1. **Projeto real** com essa tecnologia/método (aprende 10x mais do que ler sobre)
2. **Trabalho com alguém mais experiente** na competência
3. **Curso prático com exercícios reais** (não vídeo-aula passiva)
4. **Livro técnico** (se você aplica enquanto lê)
5. Vídeos e artigos (base mínima, não suficiente)

### Para competências comportamentais
Não se desenvolvem em cursos. Se desenvolvem em:
- **Exposição deliberada** a situações que exigem a competência
- **Feedback estruturado** de alguém que a tem
- **Reflexão sistemática** sobre o que aconteceu (não só fazer, mas analisar)
- **Mentoria** com alguém que desenvolveu essa competência

### O princípio do 70-20-10
- **70%** do desenvolvimento acontece no trabalho, em projetos desafiadores
- **20%** acontece com outras pessoas (mentores, pares, feedback)
- **10%** acontece em cursos e treinamentos formais

A maioria das pessoas inverte isso — passa a maior parte do tempo em cursos e pouco tempo em projetos reais.

## Como encaixar o desenvolvimento na sua rotina

Desenvolvimento de carreira não é um sprint — é uma maratona. O que importa é consistência:

- **30 minutos por dia** de aprendizado direcionado > 8 horas por semana de curso intensivo ocasional
- Vincule o aprendizado a um projeto real sempre que possível
- Ensine o que você aprendeu (escreva, apresente, explique) — consolida o conhecimento
- Revise trimestralmente se o que você está aprendendo ainda faz sentido para o plano`,
      },
      {
        id: '30-5',
        title: 'Revisando e ajustando o plano anualmente',
        duration: '35 min',
        content: `# Revisando e ajustando o plano anualmente

## Por que revisar é tão importante quanto planejar

O mundo muda. Você muda. O mercado de trabalho de 2030 não é o de 2025.

Um plano de 5 anos que você nunca revisa é uma fantasia. Um plano que você revisa sistematicamente é uma ferramenta viva de desenvolvimento.

## A revisão anual: o que olhar

Reserve 3-4 horas por ano (idealmente em dezembro ou no mês do seu aniversário — um momento de transição natural) para responder estas perguntas:

### Olhando para trás (o ano que passou)
- O que eu planejei fazer e fiz?
- O que planejei e não fiz? Por quê? (Prioritize a honestidade aqui — "não tive tempo" quase sempre significa "não era prioridade real")
- O que aconteceu que eu não planejei mas foi importante?
- Quais competências eu desenvolvi de verdade?
- Minha rede cresceu? Com as pessoas certas?
- Estou mais próximo do meu horizonte de 5 anos do que estava?

### Olhando para frente (o próximo ano e o horizonte de 5 anos)
- O destino de 5 anos ainda faz sentido? O que mudou?
- Quais são os 3-5 milestones mais importantes para o próximo ano?
- O que preciso aprender, fazer ou experimentar?
- Quem eu preciso conhecer ou aprofundar relação?

### Olhando para dentro (quem você é agora)
- O que mudou nas minhas prioridades de vida?
- Ainda quero o mesmo que queria quando fiz este plano?
- Há algo que eu evitei olhar honestamente?

## Sinais de que seu plano precisa de ajuste

**Sinais de que você está no caminho certo:**
- Sente que está crescendo e sendo desafiado
- Tem conversas mais ricas com profissionais do destino que almeja
- Recebe reconhecimento na direção que importa para você
- A remuneração reflete o valor que você está gerando

**Sinais de que algo precisa mudar:**
- Passa semanas sem pensar no plano
- Evita olhar para os marcos porque sabe que está atrasado
- O destino que definiu não te anima mais quando pensa nele
- Tomou decisões de carreira por conveniência que foram contra o plano repetidas vezes

## Quando mudar o destino (não só a rota)

Algumas revisões vão revelar que o destino em si mudou. Isso não é fracasso — é crescimento.

**É hora de mudar o destino quando:**
- O que você queria em 2025 já não ressoa com quem você é em 2026
- Você descobriu uma área ou função que se encaixa melhor com seus valores e talentos
- Uma oportunidade inesperada abre um caminho que faz mais sentido

**Não mude o destino quando:**
- Está difícil (dificuldade não é sinal errado — é parte do processo)
- Alguém próximo criticou ou questionou sua escolha
- Uma oportunidade de curto prazo, embora tentadora, desvia do longo prazo

## O plano como bússola, não como GPS

Um GPS recalcula automaticamente. Uma bússola só aponta o norte — você decide o caminho.

Seu plano de carreira de 5 anos é uma bússola. Ele não vai te dizer o caminho exato. Vai te ajudar a saber, a cada decisão, se você está se aproximando ou se afastando de onde quer chegar.

Olhe para ele com frequência. Ajuste quando fizer sentido. Mas nunca o abandone por preguiça ou por medo de constatar que ficou para trás.

Você pode sempre recomeçar — e o plano pode ser refeito. O que não pode ser recuperado é o tempo gasto sem direção.`,
      },
    ],
  },
  {
    id: 31,
    title: 'Entrevistas por Vídeo e Online',
    desc: 'Tudo sobre entrevistas remotas: setup técnico, presença na câmera, plataformas e one-way interviews — o que separa candidatos medianos de memoráveis.',
    duration: '2h 20min',
    icon: '📹',
    isPro: false,
    color: { bg: 'bg-cyan-50', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700', icon: 'bg-cyan-500' },
    lessons: [
      {
        id: '31-1',
        title: 'Setup técnico que transmite profissionalismo',
        duration: '25 min',
        content: `# Setup técnico que transmite profissionalismo

## Por que o setup importa tanto quanto o que você diz

Em entrevistas presenciais, o ambiente é neutro. Em entrevistas por vídeo, o seu espaço fala antes de você abrir a boca. Um fundo bagunçado, iluminação ruim ou áudio com eco comunicam desorganização — independente do que você vai dizer.

A boa notícia: você não precisa de um estúdio. Precisa de atenção a quatro variáveis.

## Os quatro pilares do setup profissional

### 1. Iluminação
É o fator que mais impacta a qualidade da imagem. Sem boa luz, nenhuma câmera cara resolve.

**Regra de ouro:** Luz natural na frente do rosto, nunca atrás. Sente-se de frente para uma janela. Se a entrevista for à noite, use um ring light ou abajur voltado para você.

**Teste:** Ligue a câmera antes da entrevista. Se seu rosto aparecer escuro ou com sombras duras, ajuste a posição antes.

### 2. Câmera e enquadramento
Posicione a câmera na altura dos olhos. Câmera apontando para cima (laptop no colo) distorce proporções e é visualmente desconfortável para quem assiste.

Use livros, caixas ou um suporte para elevar o laptop até a altura dos olhos.

**Enquadramento ideal:** Cabeça e ombros visíveis, com um espaço pequeno acima da cabeça. Não muito próximo (parece claustrofóbico) nem muito distante (você some na tela).

### 3. Áudio
Prioridade máxima. Vídeo ruim é desconfortável; áudio ruim torna a conversa impossível.

- Fones de ouvido com microfone eliminam 80% dos problemas de eco e ruído ambiente
- Feche janelas se houver trânsito ou obras
- Desative notificações do celular e computador antes de começar
- Avise pessoas na casa que você estará em entrevista

### 4. Fundo
Parede limpa e neutra é a escolha mais segura. Não precisa ser branca — cinza, bege ou azul suave funcionam bem.

Se não tem espaço adequado, use um fundo virtual simples e sólido (disponível no Zoom, Teams e Meet). Evite fundos animados, com logotipos de times ou imagens de praias — passam imagem de pouca seriedade.

## O checklist dos 10 minutos antes da entrevista

- [ ] Testar câmera e microfone
- [ ] Verificar conexão de internet (prefira cabo ao Wi-Fi se possível)
- [ ] Fechar abas e aplicativos desnecessários
- [ ] Silenciar notificações
- [ ] Ter água na mesa
- [ ] Ter o CV impresso ou aberto em outra tela
- [ ] Entrar na sala virtual 5 minutos antes`,
      },
      {
        id: '31-2',
        title: 'Linguagem corporal e presença na câmera',
        duration: '25 min',
        content: `# Linguagem corporal e presença na câmera

## O problema do olhar

O maior erro em entrevistas por vídeo é olhar para a imagem do entrevistador na tela — o que parece natural, mas na câmera aparece como se você estivesse olhando para baixo, evitando contato visual.

**Contato visual em vídeo = olhar para a câmera, não para a tela.**

Isso é contraintuitivo e exige prática. Cole um autocolante sorridente perto da câmera para lembrar de olhar para lá quando estiver falando.

## Postura e energia transmitida

Sente-se ereto, ligeiramente inclinado para frente. Isso comunica engajamento. Reclinar na cadeira comunica desinteresse — mesmo que você esteja totalmente presente.

Mantenha os ombros relaxados, não elevados (tensão é visível). Se gesticula ao falar, certifique-se de que as mãos aparecem no enquadramento — gestos fora de tela parecem estranhos.

## Como gerenciar o silêncio e as pausas

Em vídeo, silêncios parecem mais longos do que são. Não preencha com "ééé" ou "então...". Quando precisar pensar, uma pausa curta e confiante é muito mais profissional.

Técnica: após uma pergunta difícil, diga "boa pergunta, deixa eu pensar por um segundo" — e pense. Isso demonstra reflexão, não insegurança.

## Expressão facial: o desafio do vídeo

Emoções são amplificadas em close. Um sorriso genuíno aparece claramente. Mas uma expressão neutra pode parecer séria ou desinteressada.

Mantenha expressão levemente positiva ao ouvir. Acene levemente com a cabeça quando o entrevistador fala — isso comunica que você está presente e processando.

## Gerenciar distrações durante a entrevista

Se algo acontecer (barulho externo, notificação, alguém entrando no cômodo), não entre em pânico. Trate com naturalidade: "Desculpe pelo barulho, pode continuar." Entrevistadores entendem — eles também fazem entrevistas em casa.

## Prática antes da entrevista real

Grave a si mesmo respondendo as 5 perguntas mais comuns. Assista sem julgamento e observe:
- Onde você olha?
- Sua postura está ereta?
- Você pisca muito ou pouco?
- Seu tom de voz é variado ou monótono?
- Você fala muito rápido quando fica nervoso?

Uma sessão de prática gravada vale mais do que 10 entrevistas simuladas sem feedback visual.`,
      },
      {
        id: '31-3',
        title: 'Zoom, Teams e Meet: diferenças e dicas por plataforma',
        duration: '20 min',
        content: `# Zoom, Teams e Meet: diferenças e dicas por plataforma

## Por que conhecer a plataforma antes importa

Entrar numa entrevista e descobrir que não sabe silenciar o microfone, compartilhar a tela ou encontrar o chat é uma fonte desnecessária de ansiedade. 5 minutos de familiarização antes resolve.

## Zoom

A plataforma mais usada para entrevistas em empresas de tecnologia e internacionais.

**Dicas específicas:**
- Atualize o Zoom antes da entrevista — versões antigas podem ter bugs
- Ative "Touch up my appearance" (Configurações > Vídeo) para uma aparência ligeiramente mais suavizada
- Mude seu nome exibido para o nome profissional (não apelidos ou usernames)
- Familiarize-se com o botão de reação — aceno de mão ou polegar para cima sem interromper
- Se convidado por link, entre como participante antes — não inicie como host por engano

## Microsoft Teams

Comum em grandes corporações, bancos e multinacionais que usam o ecossistema Microsoft.

**Dicas específicas:**
- Não precisa ter conta Microsoft para entrar — pode acessar pelo navegador como convidado
- O botão de microfone e câmera fica na barra inferior — confirme que estão ativos ao entrar
- O Teams tem "Blur de fundo" nativo (sem precisar de versão paga) — útil se o fundo não for ideal
- Aviso: a versão web tem limitações. Se possível, instale o app

## Google Meet

Comum em startups, empresas de tecnologia e empresas que usam Google Workspace.

**Dicas específicas:**
- Funciona bem pelo Chrome sem instalação adicional
- Ative os legendas automáticas (CC) se tiver dificuldade para ouvir — não aparecem para o entrevistador
- O Meet tem qualidade de vídeo muito dependente da sua conexão — prefira cabo ou Wi-Fi próximo ao roteador

## Quando a plataforma travar

Tenha sempre um plano B: número de telefone do recrutador ou e-mail. Se a conexão cair, não entre em pânico — mande mensagem imediatamente: "Caiu a conexão, estou reconectando." Entrevistadores esperam isso acontecer eventualmente.`,
      },
      {
        id: '31-4',
        title: 'One-way interviews: HireVue, Spark Hire e similares',
        duration: '20 min',
        content: `# One-way interviews: HireVue, Spark Hire e similares

## O que são e por que existem

One-way interviews (entrevistas unilaterais) são ferramentas onde você grava respostas para perguntas pré-definidas, sem interação ao vivo. O recrutador assiste depois — às vezes junto com IA que analisa tom de voz, expressão e palavras usadas.

Empresas as usam para escalar o processo seletivo, avaliar mais candidatos com menos tempo. Plataformas comuns: HireVue, Spark Hire, Willo, Paradox.

## O que te desnorteia (e como resolver)

A experiência é estranha: você fala para uma câmera sem ninguém respondendo, com contagem regressiva e limite de tempo. Isso gera ansiedade desproporcional à dificuldade real das perguntas.

**Soluções práticas:**
- Pratique com um cronômetro visível — simule a pressão antes
- Faça o teste técnico da plataforma (todas oferecem) antes da entrevista real
- Prepare respostas para as 5 perguntas mais comuns com antecedência — o conteúdo é o que importa
- Fale olhando para a câmera (não para a própria imagem na tela)

## Estrutura de resposta recomendada

Com limite de tempo (geralmente 90 segundos a 3 minutos por pergunta), a estrutura STAR compactada funciona bem:

1. **Contexto em 1 frase** (onde, quando, qual era a situação)
2. **O que você fez** (ações específicas, não abstrações)
3. **Resultado mensurável** (número, percentual, impacto)
4. **Conexão com a vaga** (como isso é relevante para o cargo)

## Se você travar ou cometer um erro

A maioria das plataformas permite regravar (verifique antes). Se não permitir, continue — uma hesitação é humana e não descredencia. O que descredencia é desistir ou se desculpar excessivamente por um erro pequeno.

## Atenção à análise de IA

Algumas plataformas usam IA para analisar expressão facial, tom de voz e palavras. Isso soa invasivo, mas na prática:
- Fale com variedade de tom (monotonia é penalizada)
- Mantenha expressão positiva e engajada
- Use as palavras-chave da descrição da vaga nas respostas
- Iluminação boa melhora a leitura de expressões pela IA`,
      },
      {
        id: '31-5',
        title: 'Erros fatais em entrevistas por vídeo',
        duration: '10 min',
        content: `# Erros fatais em entrevistas por vídeo

## Os erros que eliminam candidatos qualificados

Estes não são erros de conteúdo — são erros de forma que distraem o entrevistador e criam impressão negativa antes de você terminar a primeira resposta.

**1. Chegar atrasado à sala virtual**
Entrar com 2-3 minutos de atraso num ambiente físico é tolerável. Em vídeo, o entrevistador fica olhando para uma tela vazia esperando você. Entre 5 minutos antes.

**2. Fundo caótico ou inadequado**
Roupas na cadeira, cama desfeita visível, cartazes ou objetos inapropriados ao fundo. Tudo isso entra na percepção do entrevistador, conscientemente ou não.

**3. Iluminação de trás (contraluz)**
Você aparece como silhueta. O entrevistador não consegue ler suas expressões. Sente-se de frente para a fonte de luz.

**4. Microfone do laptop sem fone**
O microfone captura eco, sua voz fica abafada, o entrevistador pede para você repetir constantemente. Use fones.

**5. Notificações aparecendo durante a entrevista**
Um pop-up de mensagem ou notificação sonora durante sua resposta quebra totalmente o fluxo. Modo Não Perturbe obrigatório.

**6. Olhar constantemente para a própria imagem**
Parece vaidade. Também comunica que você não está olhando para o entrevistador. Minimize sua própria imagem ou cubra com um post-it.

**7. Ler as respostas de um papel ou tela**
O movimento dos olhos para baixo ou para o lado é visível. Se precisar de notas, use uma folha acima da câmera — os olhos ficam próximos ao nível da câmera.

**8. Ambiente com interrupções**
Cachorro latindo, criança entrando, campainha. Avise a família, feche a porta, coloque o animal em outro cômodo. Uma interrupção pode ser engraçada. Três interrupções terminam a entrevista.

## O teste definitivo

30 minutos antes de qualquer entrevista por vídeo: ligue a câmera, grave 60 segundos de você falando, assista. Se você aprovaria esse candidato visualmente, está pronto.`,
      },
    ],
  },
  {
    id: 32,
    title: 'Carreira nos EUA e Canadá',
    desc: 'Do visto ao emprego: como brasileiros conseguem trabalhar nos Estados Unidos e Canadá — vistos, CV norte-americano, entrevistas culturais e estratégia de recolocação.',
    duration: '3h 30min',
    icon: '🗽',
    isPro: true,
    color: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-700', icon: 'bg-red-600' },
    lessons: [
      {
        id: '32-1',
        title: 'Panorama: mercado americano e canadense para brasileiros',
        duration: '35 min',
        content: `# Panorama: mercado americano e canadense para brasileiros

## Dois mercados diferentes, duas estratégias diferentes

EUA e Canadá parecem similares mas têm dinâmicas muito diferentes para imigrantes brasileiros.

**Estados Unidos:**
- Mercado enorme mas altamente competitivo
- Patrocínio de visto é o grande gargalo — empresas precisam patrocinar ativamente
- Setores que mais patrocinam: tecnologia, finanças, engenharia, saúde
- Cidades com mais oportunidades: San Francisco, Nova York, Austin, Seattle, Miami

**Canadá:**
- Sistema de imigração mais estruturado e receptivo (Express Entry)
- Você pode chegar já como residente permanente — sem depender de patrocínio
- Mercado menor mas com crescente demanda por tech, saúde e construção
- Cidades principais: Toronto, Vancouver, Calgary, Ottawa

## O que separa candidatos brasileiros que conseguem de quem não consegue

**Conseguem:**
- Inglês fluente (C1+) — não "avançado", fluente mesmo
- Experiência em empresas reconhecíveis internacionalmente ou projetos com impacto documentado
- Network nos EUA/Canadá (ex-colegas, comunidades de brasileiros, LinkedIn ativo)
- Especialização clara — generalistas têm dificuldade maior
- Proatividade: foram atrás antes de estar no país

**Não conseguem:**
- Esperam a oferta aparecer sem conexão com o mercado local
- CV no formato brasileiro
- Inglês funcional mas não fluente
- Sem rede de contatos no destino

## As rotas mais comuns para cada perfil

**Para profissionais de tecnologia:**
Rota mais viável: empresa brasileira com escritório nos EUA → transferência intra-empresa (visto L-1), ou empresa americana com operação no Brasil que já te conhece.

**Para quem quer ir direto:**
Canadá via Express Entry (para residência permanente) ou busca ativa nos EUA com patrocínio de H-1B.

**Para empreendedores:**
Visto E-2 (investimento) nos EUA ou Start-up Visa no Canadá.

## Realismo sobre o processo

Isso não é rápido. A timeline realista vai de 6 meses a 2 anos dependendo da rota. Quem entra com expectativa de "vou mandar currículo e sair em 3 meses" quase sempre se frustra.

O processo requer planejamento, paciência e execução consistente. Mas é completamente possível.`,
      },
      {
        id: '32-2',
        title: 'Vistos de trabalho: H-1B, O-1, L-1 e Express Entry',
        duration: '40 min',
        content: `# Vistos de trabalho: H-1B, O-1, L-1 e Express Entry

## Aviso importante

Legislação de vistos muda com frequência. As informações aqui são educacionais — consulte sempre um advogado de imigração para seu caso específico.

## Estados Unidos: os principais vistos de trabalho

### H-1B (Specialty Occupation)
O mais comum para profissionais de tecnologia, finanças, engenharia e afins.

**Como funciona:** Empresa americana te patrocina. Há um processo de loteria anual (sorteio). Limite de 65.000 vagas/ano + 20.000 para mestres de universidades americanas.

**Realidade:** Chance de passar na loteria está em torno de 30-40% por tentativa. Muitos tentam múltiplos anos.

**Quem tem chance:** Profissionais de tech com salários acima de $100k/ano têm mais chance de ser patrocinados pois o custo do processo para a empresa vale o investimento.

### O-1 (Extraordinary Ability)
Para profissionais com "habilidade extraordinária" em sua área. Não precisa de loteria.

**Como provar habilidade extraordinária:** Prêmios, publicações, salário acima da média do setor, trabalho em organizações de destaque, contribuições originais reconhecidas, cobertura na mídia.

Mais acessível do que parece para quem tem histórico sólido documentado.

### L-1 (Intracompany Transfer)
Para quem trabalha numa multinacional com escritório nos EUA e quer ser transferido.

**Requisito:** Trabalhar na empresa há pelo menos 1 ano nos últimos 3 anos.

Esta é a rota mais suave — a empresa já te conhece, o processo é mais previsível.

## Canadá: Express Entry

O sistema de imigração mais organizado do mundo para trabalhadores qualificados.

**Como funciona:** Você cria um perfil no sistema Express Entry com pontos (CRS Score) baseados em:
- Idade (mais jovem = mais pontos)
- Nível de educação
- Proficiência em inglês e/ou francês (IELTS/CELPIP/TEF)
- Experiência de trabalho
- Oferta de emprego no Canadá (adiciona pontos significativos)
- Adaptabilidade (cônjuge com qualificações, parentes no Canadá etc.)

**O processo:** Rounds de convite periódicos (geralmente a cada 2 semanas). Quem atingir o score mínimo recebe convite para residência permanente.

**Score atual (2025):** Varia entre 470-500+ pontos dependendo do round. Verifique o site oficial do IRCC para dados atualizados.

**Dica:** Melhorar o IELTS de 7.0 para 8.0 pode adicionar 30-50 pontos — diferença que decide a aprovação.`,
      },
      {
        id: '32-3',
        title: 'Resume americano: o que muda completamente do CV brasileiro',
        duration: '35 min',
        content: `# Resume americano: o que muda completamente do CV brasileiro

## Resume ≠ Currículo

O resume americano segue convenções muito diferentes. Enviar um currículo no formato brasileiro para uma empresa americana é um sinal imediato de que você não conhece o mercado.

## O que NUNCA incluir num resume americano

- Foto (ilegal perguntar sobre aparência nos EUA — foto pode criar problemas legais para a empresa)
- Data de nascimento
- Estado civil
- Número de filhos
- CPF, RG ou qualquer número de documento
- Objetivo profissional (objetivo) — substituído pelo Summary
- Referências (diga "available upon request" ou simplesmente omita)

## Estrutura do resume americano

**1. Header**
Nome (grande) + cidade/estado (não endereço completo) + email + telefone com código do país + LinkedIn URL

**2. Summary (opcional mas recomendado)**
2-3 linhas. Quem você é e o que você entrega. Orientado a resultados, não a trajetória.

**3. Experience**
Empresa + cargo + período (mês e ano) + 3-5 bullets de realizações por cargo
Formato dos bullets: verbo de impacto no passado + o que fez + resultado mensurável
Exemplo: "Led migration of legacy system to cloud infrastructure, reducing operational costs by 34% and improving uptime to 99.9%"

**4. Skills**
Lista técnica de ferramentas, linguagens, metodologias. Sem avaliação de nível (não escreva "proficient in Excel" — ou você sabe ou não sabe).

**5. Education**
Universidade + grau + ano de conclusão. Sem notas a menos que sejam excepcionais (GPA 3.8+).

## Tamanho e formato

- **1 página** para menos de 10 anos de experiência
- **2 páginas** para sêniors — mas nunca mais que isso
- Fonte: Calibri, Arial, Garamond — nada decorativo
- Salvar como PDF sempre
- Nome do arquivo: firstname-lastname-resume.pdf

## Adaptando para ATS americano

Os mesmos princípios de ATS se aplicam, mas com uma diferença: o ATS americano é ainda mais literal. Use exatamente as palavras da job description — "software engineer" vs. "software developer" pode fazer diferença no ranking.

## Traduzindo cargos e empresas brasileiras

Cargos: use equivalentes em inglês e adicione contexto de escala
- "Gerente" → "Manager"
- "Analista Sênior" → "Senior Analyst"

Empresas: se não é conhecida nos EUA, adicione contexto
- "Itaú (largest private bank in Latin America, $100B+ assets)"
- "iFood (leading food delivery app in Brazil, 50M+ users)"`,
      },
      {
        id: '32-4',
        title: 'Entrevistas culturais: o que muda para EUA e Canadá',
        duration: '35 min',
        content: `# Entrevistas culturais: o que muda para EUA e Canadá

## A cultura de entrevista americana

Americana não é europeia. Não é nem mesmo canadense. Há especificidades.

### Seja direto sobre suas conquistas

No Brasil, modéstia excessiva é comum. Nos EUA, subestimar suas realizações é lido como falta de autoconfiança ou falta de realizações.

"Participei de um projeto que melhorou as métricas" → ruim
"Liderança de um projeto que aumentou conversão em 28%, gerando $2.1M em receita adicional" → certo

Isso não é arrogância — é clareza. Americanos valorizam candidatos que sabem articular seu impacto.

### Enthusiasm is expected

Americanos esperam entusiasmo visível pela vaga e pela empresa. Uma postura mais reservada (comum no Brasil corporativo formal) pode ser interpretada como desinteresse.

"I'm really excited about this opportunity" não soa falso nos EUA — soa adequado.

### Perguntas sobre "tell me about yourself"

Nos EUA, esta pergunta pede um pitch profissional de 60-90 segundos — não uma autobiografia. Estrutura: cargo atual → background relevante → por que você está interessado nessa oportunidade específica.

## A diferença cultural canadense

O Canadá tem cultura mais próxima da europeia e menos da americana em termos de assertividade. Canadenses valorizam:
- Humildade com substância (seja humilde, mas tenha resultados para mostrar)
- Colaboração e trabalho em equipe (mencione frequentemente contribuições coletivas)
- Diversidade e inclusão (esteja preparado para perguntas sobre como você trabalha com times diversos)

## Perguntas que surpreendem brasileiros

**"What's your biggest weakness?"**
Não responda "sou perfeccionista". Responda com uma fraqueza real + o que você tem feito para desenvolver.

**"Where do you see yourself in 5 years?"**
Mostre ambição alinhada com o crescimento da empresa, não um plano de saída.

**"Why are you leaving your current role?"**
Nunca critique a empresa atual. Foque no que você busca: crescimento, desafio, impacto, missão.

**"Do you have any questions for us?"**
Sempre tenha 2-3 perguntas preparadas. Não ter perguntas é sinal de desinteresse nos EUA.

## Preparação cultural obrigatória

Antes de qualquer entrevista: pesquise a empresa profundamente — produto, cultura, valores, notícias recentes, missão. Americanos e canadenses esperam que você saiba muito sobre eles antes de aparecer na entrevista.`,
      },
      {
        id: '32-5',
        title: 'Estratégia de recolocação: por onde começar do Brasil',
        duration: '45 min',
        content: `# Estratégia de recolocação: por onde começar do Brasil

## O erro da abordagem passiva

A maioria das pessoas que quer trabalhar nos EUA ou Canadá começa mandando currículos para vagas no LinkedIn de dentro do Brasil. Funciona raramente — a maioria das empresas filtra candidatos fora do país nos primeiros segundos do ATS.

A estratégia eficiente é construtiva, não passiva.

## As três rotas práticas por perfil

### Rota 1: Multinacional com operação no Brasil → transferência

É a rota mais suave e com maior taxa de sucesso.

**Passo a passo:**
1. Identifique empresas com escritórios nos EUA e operação no Brasil (Accenture, IBM, Deloitte, Amazon, Google, Microsoft, Mercado Livre etc.)
2. Entre na operação brasileira — seja excelente, construa reputação
3. Expresse interesse formal em mobility após 1-2 anos
4. Encontre um sponsor interno no escritório de destino (alguém que defenda sua transferência)

Timeline: 2-4 anos, mas com estabilidade e sem depender de loteria de visto.

### Rota 2: Empresa americana contrata remotamente → relocação posterior

Com a expansão do trabalho remoto, empresas americanas contraram talentos no Brasil remotamente — e depois oferecem relocação.

**Como conseguir:**
- Plataformas: Toptal, Andela, Remote.com, Torre.co, LinkedIn com filtro "Remote" + localização EUA
- Você trabalha em dólar do Brasil, demonstra valor, depois negocia relocação
- Muito comum em tech (backend, ML, DevOps) e design UX

### Rota 3: Canadá via Express Entry (caminho mais direto para residência)

Para quem quer ir direto, sem depender de emprego primeiro.

**Sequência:**
1. Fazer IELTS e alcançar score alto (7.5+ em cada habilidade)
2. Ter educação avaliada por WES (World Education Services)
3. Criar perfil no Express Entry e calcular seu CRS Score
4. Se score for baixo: buscar oferta de emprego no Canadá (adiciona 50-200 pontos)
5. Receber convite (ITA) → aplicar para residência permanente

## Construindo sua presença antes de chegar

**LinkedIn em inglês:** Perfil completamente em inglês, headline orientada ao mercado-alvo, conexões nos EUA/Canadá.

**GitHub ativo** (para tech): Contribuições recentes, projetos documentados em inglês.

**Comunidades de brasileiros no exterior:** Grupos no LinkedIn e Slack de brasileiros em tech em São Francisco, Toronto, Vancouver — pessoas que passaram pelo processo são sua maior fonte de informação real.

**Conferências internacionais:** Online e presenciais. Onde você conhece as pessoas que vão indicar você.

## O que resolver antes de sair do Brasil

- Reserva financeira: mínimo 6-12 meses de despesas do destino
- Inglês: invista agora, não depois
- Documentos: diploma com apostilamento, certidão de antecedentes criminais, histórico de emprego documentado
- Imposto: entenda as obrigações fiscais com o Brasil (saída definitiva ou não)`,
      },
    ],
  },
  {
    id: 33,
    title: 'Product Management como Carreira',
    desc: 'O guia completo para entrar e crescer na área de produto: o que é PM de verdade, como fazer a transição, habilidades essenciais e como se sair bem nos processos seletivos.',
    duration: '3h 15min',
    icon: '🧩',
    isPro: true,
    color: { bg: 'bg-indigo-50', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700', icon: 'bg-indigo-600' },
    lessons: [
      {
        id: '33-1',
        title: 'O que é PM de verdade (e o que não é)',
        duration: '30 min',
        content: `# O que é PM de verdade (e o que não é)

## A confusão que atrapalha quem quer entrar na área

Product Management é uma das áreas mais desejadas e mais mal compreendidas do mercado. Muitos querem ser PM por razões erradas — e chegam mal preparados por isso.

## O que PM NÃO é

**PM não é o "CEO do produto"**
Essa frase é sedutor mas imprecisa. O PM não manda no designer, no engenheiro ou no marketing. Tem influência, não autoridade. Lidera convencendo, não ordenando.

**PM não é gerente de projeto**
Gerente de projeto garante que o projeto seja entregue dentro do prazo. PM decide *o que* construir e *por quê*. São funções diferentes. Em empresas menores, um profissional pode fazer as duas — mas são atividades distintas.

**PM não é o representante do usuário**
Você representa o negócio tanto quanto o usuário. Às vezes o que o usuário pede não é o que o negócio precisa construir.

**PM não é dono do roadmap**
O roadmap é uma consequência das decisões estratégicas — não um documento que o PM cria sozinho e impõe ao time.

## O que PM é

**PM é quem define o problema certo a resolver.**
Antes de qualquer solução, o PM garante que o time está trabalhando no problema que gera mais valor para o negócio e para o usuário.

**PM é ponte entre negócio, tecnologia e design.**
Não precisa ser o melhor em nenhum dos três — mas precisa falar a língua de todos e criar contexto compartilhado.

**PM é tomador de decisão com informação incompleta.**
Você nunca vai ter todos os dados. Vai tomar decisões com 70% da informação que gostaria de ter. Aprender a ser confortável com isso é parte do trabalho.

**PM é comunicador.**
A maior parte do trabalho é comunicação: com engenharia, com stakeholders, com liderança, com usuários. Quem não comunica bem, não performa bem como PM.

## Os tipos de PM que existem

- **PM de growth:** foco em aquisição, ativação, retenção e monetização
- **PM de plataforma:** infra e sistemas internos que outros times usam
- **PM de produto core:** funcionalidades principais do produto
- **Technical PM:** mais próximo de engenharia, entende profundamente a stack
- **PM de dados:** foco em analytics, ferramentas de dados, ML products

Saber qual perfil você quer ser ajuda a direcionar o aprendizado e o tipo de empresa que faz sentido buscar.`,
      },
      {
        id: '33-2',
        title: 'Como entrar na área sem experiência formal',
        duration: '40 min',
        content: `# Como entrar na área sem experiência formal

## A barreira circular

"Precisamos de PM com experiência em produto" — mas como ter experiência se nenhuma empresa te contrata sem ela?

Esse problema é real, mas tem solução. PMs surgem de várias áreas: engenharia, design, marketing, dados, atendimento. O que muda é a estratégia de transição para cada perfil.

## As rotas de entrada mais comuns

### De engenharia/tech para PM
É a transição mais suave. Você já fala a língua do time de desenvolvimento.

**Estratégia:** Peça para participar das discussões de discovery e planejamento. Voluntarie-se para documentar requisitos e facilitar alinhamentos. Quando uma vaga interna de APM ou PM aparecer, você já tem contexto.

### De design/UX para PM
Você entende o usuário — falta o lado de negócio e dados.

**Estratégia:** Desenvolva habilidades de análise de métricas (SQL básico, Google Analytics, Mixpanel). Aprenda frameworks de priorização (RICE, ICE, MoSCoW). Mostre que você pensa em impacto de negócio, não só em usabilidade.

### De marketing/growth para PM
Você entende métricas e o funil — falta profundidade técnica e de discovery.

**Estratégia:** Aprenda o básico de como software é construído (sem precisar codar — mas entender sprints, APIs, banco de dados). Faça discovery com usuários além de dados de marketing.

### De outras áreas (RH, financeiro, operações)
Mais difícil, mas possível — especialmente para PM de domínio específico (ex-financeiro → fintech, ex-saúde → healthtech).

**Estratégia:** Use seu conhecimento de domínio como diferencial. Encontre empresas no seu setor que precisam de PM que entenda o negócio profundamente.

## O portfólio de PM que substitui a experiência formal

Na ausência de título de PM, você pode construir evidências:

**1. Tear-downs de produto**
Análise crítica de produtos existentes: o que funciona, o que não funciona, o que você mudaria e por quê. Publique no LinkedIn ou Medium.

**2. Case estudos de features hipotéticas**
"Como eu repaginaria o onboarding do [app X]" — pesquisa de usuário, problema identificado, soluções propostas, métricas de sucesso. Mostra pensamento de PM.

**3. Contribuição em comunidade**
Grupos de PM no LinkedIn e Slack (Product Managers Brasil, Product School etc.). Participar e contribuir gera visibilidade.

**4. Projetos internos na empresa atual**
Qualquer iniciativa que você liderou, coordenou ou melhorou — documente como se fosse um case de PM.

## APM Programs: a porta de entrada estruturada

Algumas empresas têm programas específicos de Associate Product Manager (APM) para pessoas em transição:

No Brasil: Nubank (já teve), Mercado Livre, iFood, Loft, QuintoAndar — verifique sites de carreira diretamente.

Internacionalmente: Google APM, Meta RPM, Microsoft PM, LinkedIn PM — altamente competitivos mas transformadores de carreira.`,
      },
      {
        id: '33-3',
        title: 'Habilidades essenciais: discovery, priorização e stakeholders',
        duration: '35 min',
        content: `# Habilidades essenciais: discovery, priorização e stakeholders

## As três competências que fazem a diferença real

Você pode ler todos os livros de produto e ainda não ser um bom PM. As competências que importam se desenvolvem na prática — mas saber o que são e como desenvolvê-las acelera muito.

## 1. Discovery: encontrar o problema certo

Discovery é o processo de entender profundamente o usuário, o mercado e os dados antes de propor qualquer solução.

**O erro mais comum:** Pular o discovery e ir direto à solução. "Vamos criar uma feature de relatórios" sem entender se isso resolve o problema real.

**Como fazer discovery:**
- **Entrevistas com usuários** (mínimo 5-8 por rodada): perguntas abertas sobre comportamento, não sobre opiniões em soluções
- **Análise de dados**: onde usuários abandonam? O que correlaciona com retenção? Quais features são usadas vs. ignoradas?
- **Jobs To Be Done**: qual "trabalho" o usuário está tentando realizar com o produto?
- **Benchmarking**: como concorrentes resolvem o mesmo problema?

A saída do discovery não é uma solução — é uma definição clara do problema e um conjunto de oportunidades priorizadas.

## 2. Priorização: decidir o que construir agora

Com um backlog infinito e recursos finitos, priorizar é uma das habilidades mais críticas.

**Frameworks principais:**

**RICE:** Reach × Impact × Confidence / Effort
- Bom para: times com dados quantitativos robustos
- Pontuação numérica que facilita comparação

**ICE:** Impact × Confidence × Ease
- Bom para: priorização rápida e iterativa
- Mais simples, menos rigoroso

**MoSCoW:** Must / Should / Could / Won't
- Bom para: alinhar expectativas com stakeholders sobre o que entra num ciclo

**Value vs. Effort matrix (2×2):**
- Fácil de comunicar para lideranças não técnicas
- Quadrantes: faça agora / planeje / avalie / descarte

O framework importa menos do que a disciplina de tornar explícitos os critérios de decisão.

## 3. Gestão de stakeholders: influenciar sem autoridade

Stakeholders são todas as partes que têm interesse no produto: liderança, time de vendas, suporte, marketing, jurídico, finanças.

**O problema:** Cada um tem uma opinião sobre o que o produto deveria fazer. Seu trabalho não é fazer tudo que pedem — é alinhar todos em torno das prioridades certas.

**Técnicas práticas:**

**Mapa de stakeholders:** Liste todos, classifique por influência (alta/baixa) e interesse (alto/baixo). Gerencie ativamente os de alta influência.

**Comunicação proativa:** Atualizações regulares sobre o roadmap evitam pedidos urgentes no pior momento possível.

**Dizer não estrategicamente:** "Não vamos fazer isso agora porque priorizamos X que tem impacto Y maior. Reavaliamos no próximo ciclo" — é diferente de "não vamos fazer".

**Decisões documentadas:** Um documento simples de "por que decidimos isso" evita revisões infinitas e constrói confiança ao longo do tempo.`,
      },
      {
        id: '33-4',
        title: 'O processo seletivo para PM: cases e entrevistas',
        duration: '35 min',
        content: `# O processo seletivo para PM: cases e entrevistas

## Como funciona o processo seletivo de PM

É um dos processos mais exigentes do mercado. Tipicamente tem 4-6 etapas e pode durar 4-8 semanas.

**Etapas comuns:**
1. Triagem de CV e LinkedIn
2. Entrevista de screening com recrutador (cultura, fit, motivação)
3. Entrevista de produto (cases de produto)
4. Entrevista de execução (métricas, priorização, roadmap)
5. Entrevista comportamental (STAR, liderança, conflito)
6. Case study take-home (às vezes substituindo ou adicionando à etapa 3-4)
7. Entrevista final com liderança (VP, CPO)

## Os tipos de perguntas de case de produto

### Design de produto
"Design um produto de [categoria] para [audiência]."

Estrutura recomendada:
1. Clarificar o contexto (qual empresa? qual estágio? qual objetivo?)
2. Definir o usuário-alvo
3. Identificar as principais necessidades (Jobs To Be Done)
4. Propor 3+ soluções
5. Priorizar uma com justificativa
6. Definir métricas de sucesso

### Diagnóstico de métricas
"A métrica X caiu 20% na última semana. O que você faz?"

Estrutura:
1. Clarificar a métrica (definição, período, segmento)
2. Verificar se é dado real ou artefato de medição
3. Hipóteses por categoria (produto, técnico, externo, competição, sazonalidade)
4. Priorizar hipóteses e como validar cada uma
5. Próximos passos

### Priorização de roadmap
"Você tem 3 features para construir mas só tem tempo para 1. Como decide?"

Mostre critérios explícitos: impacto no usuário, impacto no negócio, esforço, risco, alinhamento estratégico. Não escolha por intuição — mostre o raciocínio.

### Estimativas (às vezes, menos comum no Brasil)
"Quantos PMs existem no Brasil?" — tipo Fermi estimation.
Mostre processo: decompor o problema, usar dados que você sabe, chegar a uma ordem de grandeza razoável.

## Preparação para cases: o método prático

**Semanas 1-2:** Aprenda os frameworks. Livros: Cracking the PM Interview (Gayle McDowell), Decode and Conquer (Lewis Lin).

**Semanas 3-4:** Pratique em voz alta. Grave a si mesmo respondendo cases. Assista e critique.

**Semanas 5+:** Prática com parceiro. Comunidades como PM exercises ou grupos de LinkedIn têm candidatos dispostos a praticar juntos.

**Antes de cada empresa:** Pesquise profundamente o produto deles. Qual é a métrica principal? Qual é o maior desafio atual? Isso vai aparecer na entrevista.

## Perguntas comportamentais para PM

"Me conte sobre uma vez que você tomou uma decisão de produto difícil com dados limitados."
"Como você lidou com uma situação em que engenharia discordou da sua priorização?"
"Conte sobre um produto que você lançou e que não performou como esperado."

Todas pedem STAR com foco em processo de decisão, não só resultado.`,
      },
      {
        id: '33-5',
        title: 'Crescimento na carreira: APM → PM → Sênior → Head → CPO',
        duration: '35 min',
        content: `# Crescimento na carreira: APM → PM → Sênior → Head → CPO

## A progressão de PM e o que muda em cada nível

Ao contrário de muitas carreiras, em produto a progressão não é só sobre antiguidade — é sobre escopo de impacto e autonomia na tomada de decisão.

## APM / PM Júnior (0-2 anos)
**Foco:** Execução com supervisão. Entregar features de menor complexidade, aprender discovery, participar do processo sem liderar.

**O que desenvolver:**
- Escrita de product spec clara e completa
- Relacionamento com engenharia e design
- Básico de SQL e analytics
- Facilitar cerimônias ágeis (sprint planning, retrospectiva)

**Sinal de que está pronto para o próximo nível:** Consegue pegar um problema de produto médio, fazer discovery, propor solução, alinhar stakeholders e entregar — com mínima supervisão.

## PM Pleno (2-5 anos)
**Foco:** Propriedade completa de uma área ou feature. Discovery autônomo, comunicação com stakeholders, decisões de priorização com embasamento.

**O que desenvolver:**
- Visão estratégica de produto (não só execução)
- Influência com lideranças sem autoridade formal
- Capacidade de articular trade-offs claramente para diferentes audiências
- Mentoria de PMs mais juniores

## PM Sênior (4-8 anos)
**Foco:** Área estratégica ou múltiplas áreas. Define direção, influencia roadmap da empresa, é referência de qualidade de decisão.

**Diferencial:** Pensamento de longo prazo. Sabe sacrificar curto prazo por posicionamento estratégico.

## Head / Director of Product (6-12 anos)
**Foco:** Time de PMs. Contratação, desenvolvimento, cultura de produto, alinhamento com C-Level.

**Transição crítica:** De "fazer produto" para "desenvolver quem faz produto". Líderes que não conseguem largar a execução ficam presos aqui.

## CPO / VP of Product (10+ anos)
**Foco:** Estratégia de produto da empresa. Visão de longo prazo, alocação de recursos, cultura de produto em escala.

**Realidade:** São poucos cargos, muito competitivos. A maioria dos CPOs tem histórico de criar produtos com impacto de negócio mensurável em escala — não só de gerenciar bem.

## O que acelera a progressão

1. **Impacto documentado e mensurável** — crescimento de métricas que você claramente influenciou
2. **Empresa em crescimento** — em startup Série B/C a progressão pode ser 2x mais rápida
3. **Visibilidade com liderança** — quem não é visto, não é lembrado quando há promoção
4. **Feedback buscado ativamente** — quem espera feedback anual cresce mais devagar
5. **Network em produto** — indicações de outros PMs são a maior fonte de vagas senior`,
      },
    ],
  },
  {
    id: 34,
    title: 'Saúde Mental e Burnout: Carreira Sustentável',
    desc: 'Reconhecer e prevenir o burnout, estabelecer limites sem prejudicar a carreira, e como voltar mais forte depois de um colapso — guia honesto e prático.',
    duration: '2h 30min',
    icon: '🧠',
    isPro: false,
    color: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-100 text-green-700', icon: 'bg-green-600' },
    lessons: [
      {
        id: '34-1',
        title: 'Reconhecer burnout antes que ele te reconheça',
        duration: '30 min',
        content: `# Reconhecer burnout antes que ele te reconheça

## O que é burnout (e o que não é)

Burnout não é cansaço. Todo mundo fica cansado. Burnout é um estado de esgotamento crônico que afeta como você pensa, sente e performa — e que não some com um fim de semana de descanso.

A OMS reconhece burnout como fenômeno ocupacional com três dimensões:
1. **Exaustão** — sensação de estar completamente drenado, sem energia mesmo depois de dormir
2. **Cinismo** — distanciamento mental do trabalho, sensação de que nada importa ou que tudo é inútil
3. **Ineficácia** — percepção de que você não consegue mais fazer bem nem o básico

## Os sinais que aparecem antes do colapso

**Sinais cognitivos:** dificuldade de concentração, esquecimento frequente, decisões simples exigindo esforço desproporcional, pensamentos circulares sobre o trabalho que não param à noite.

**Sinais emocionais:** irritabilidade desproporcional, sensação de desconexão, ausência de satisfação mesmo quando as coisas vão bem, medo ou ansiedade em relação ao trabalho que antes era inexistente.

**Sinais físicos:** problemas de sono, dores de cabeça frequentes, tensão muscular crônica, queda de imunidade, exaustão física que não melhora com descanso.

**Sinais comportamentais:** procrastinação em tarefas que antes eram automáticas, isolamento social, aumento de consumo de álcool ou cafeína para "funcionar", trabalhar mais horas sem produzir mais.

## Por que profissionais de alto desempenho são especialmente vulneráveis

O paradoxo do burnout: quem mais se compromete, quem mais tem senso de responsabilidade, quem mais se importa — é quem mais arrisca.

Burnout não é fraqueza. É o resultado de colocar mais do que você tem durante tempo demais, sem reposição.

## O que fazer quando você reconhece os sinais

1. **Não minimizar** — "é só uma fase" atrasou o reconhecimento de burnout em milhões de profissionais
2. **Reduzir carga imediatamente** — mesmo que temporariamente — antes de buscar soluções estruturais
3. **Buscar apoio** (próxima lição)
4. **Identificar a causa raiz** — ambiente, ritmo, relação com trabalho ou combinação

Reconhecer cedo é a diferença entre ajuste e colapso.`,
      },
      {
        id: '34-2',
        title: 'Fronteiras saudáveis no trabalho sem prejudicar a carreira',
        duration: '30 min',
        content: `# Fronteiras saudáveis no trabalho sem prejudicar a carreira

## O mito do "sempre disponível"

Existe a crença de que estar sempre disponível é sinal de comprometimento. Na realidade, é frequentemente sinal de gestão de tempo ruim, falta de processos, ou cultura tóxica — e quase sempre leva a desempenho pior no médio prazo.

Profissionais que estabelecem fronteiras claras e as comunicam bem são percebidos como mais confiáveis — porque os outros sabem o que esperar deles.

## Tipos de fronteiras que você pode estabelecer

**Fronteiras de tempo:** não responder mensagens após determinado horário, proteger horários fixos para refeição e descanso, recusar reuniões em blocos de trabalho focado.

**Fronteiras de escopo:** não assumir tarefas além do que você pode entregar com qualidade, comunicar quando uma demanda é irreal antes de comprometer, dizer não com alternativa a pedidos que desviam das suas prioridades.

**Fronteiras emocionais:** não levar problemas do trabalho para casa, não ser responsável pelas emoções das outras pessoas, separar crítica ao trabalho de crítica pessoal.

## Como comunicar fronteiras sem parecer difícil

O framing importa. Compare:

**Framing defensivo:** "Não vou responder mensagens à noite."

**Framing profissional:** "Trabalho focado até as 19h e retomo mensagens na manhã seguinte. Se for urgente, pode me ligar diretamente."

A diferença: o segundo explica o que você faz e oferece um canal de emergência. Você não está se fechando — está sendo previsível.

## O paradoxo da produtividade com fronteiras

Estudos sobre desempenho cognitivo mostram que trabalho acima de 50 horas por semana tem retorno decrescente a partir da 5ª semana consecutiva. Após 8 semanas acima de 55 horas, o output cumulativo é igual ao de quem trabalhou 50 horas.

Fronteiras não comprometem a carreira. Falta de fronteiras compromete a saúde — que compromete a carreira.`,
      },
      {
        id: '34-3',
        title: 'Quando pedir ajuda e como encontrar suporte',
        duration: '25 min',
        content: `# Quando pedir ajuda e como encontrar suporte

## Quando buscar ajuda profissional

Você deve buscar apoio psicológico quando:
- Os sintomas de burnout ou ansiedade persistem por mais de 2 semanas
- Você está tomando decisões importantes sob estado emocional comprometido
- Você usa álcool, medicamentos ou outras substâncias para "funcionar" ou "desligar"
- Pensamentos negativos sobre si mesmo se tornaram frequentes
- Você sente que não consegue mais realizar tarefas básicas do trabalho

Não precisa estar em crise para buscar ajuda. Psicoterapia preventiva é tão válida quanto a remediativa.

## Tipos de suporte disponíveis

**Psicoterapia:** A intervenção mais eficaz para burnout, ansiedade e depressão relacionadas ao trabalho. Abordagens com evidência: TCC (Terapia Cognitivo-Comportamental) e ACT (Acceptance and Commitment Therapy).

Acesso: planos de saúde frequentemente cobrem. Plataformas como Vittude, Zenklub e Psicologia Viva têm valores menores. CAPS oferece atendimento público gratuito.

**EAP (Employee Assistance Program):** Muitas empresas oferecem este benefício sem divulgá-lo. É um serviço confidencial de apoio psicológico, jurídico e financeiro. Verifique com o RH.

**Psiquiatria:** Quando há sintomas físicos intensos (insônia severa, ansiedade paralisante, depressão), o psiquiatra avalia se há necessidade de medicação complementar à psicoterapia.

## Conversando com seu gestor sobre saúde mental

Você não é obrigado a revelar diagnóstico. Você pode dizer:
*"Estou passando por um momento de sobrecarga e preciso ajustar temporariamente minha carga de trabalho. Posso conversar sobre como priorizar o que é mais crítico?"*

Foque no impacto concreto e nas soluções, não nos detalhes pessoais. A maioria dos gestores prefere um ajuste temporário a perder um bom profissional por colapso.`,
      },
      {
        id: '34-4',
        title: 'Ritmo sustentável vs. sprint constante',
        duration: '30 min',
        content: `# Ritmo sustentável vs. sprint constante

## A mentalidade de sprint que destrói carreiras

A cultura de trabalho atual glamoriza o excesso: "hustle culture", orgulhar-se de quantas horas se trabalha. Essa narrativa tem um problema fundamental: carreiras longas e bem-sucedidas raramente são resultado de sprints permanentes.

São resultado de ritmo sustentável com picos pontuais — não de corrida constante sem parar.

## O atleta como modelo

Atletas de elite não treinam no máximo todos os dias. Eles periodizam: dias de alta intensidade seguidos de recuperação ativa. Treinamento sem recuperação gera lesão, não performance.

A carreira funciona da mesma forma. Períodos de alta entrega precisam ser seguidos de recuperação. Quem trata todo período como urgente perde a capacidade de distinguir o que realmente importa.

## Como construir ritmo sustentável na prática

**Semanal:** proteja pelo menos meio dia sem reuniões, separe trabalho focado de trabalho reativo, defina horário de encerramento e cumpra.

**Mensal:** revise sua carga de comprometimentos, reserve tempo para aprendizado, avalie se está trabalhando no que é estrategicamente mais importante.

**Anual:** tire férias reais (desconectado de verdade), faça revisão honesta do bem-estar profissional, ajuste metas se necessário.

## A diferença entre intensidade e urgência perpétua

Intensidade é focar totalmente em algo importante por tempo determinado.
Urgência perpétua é tratar tudo como igualmente urgente o tempo todo.

A primeira produz resultados extraordinários. A segunda produz exaustão sem resultados proporcionais.

## Longevidade como vantagem competitiva

Um profissional que performa bem por 30 anos supera em impacto cumulativo um que performa excepcionalmente por 5 anos e depois colapsa. Sustentabilidade não é o oposto da ambição — é a condição para ela se realizar.`,
      },
      {
        id: '34-5',
        title: 'Voltando depois do burnout ou da licença médica',
        duration: '25 min',
        content: `# Voltando depois do burnout ou da licença médica

## O retorno é uma etapa do processo

Burnout não tem cura imediata. O retorno ao trabalho após uma crise é uma transição que exige tanta atenção quanto o período de recuperação. Voltar antes de estar pronto — ou voltar para o mesmo ambiente sem nada ter mudado — é receita para recaída.

## Antes de voltar: perguntas que você precisa responder

**O que causou o burnout?** Se foram condições da empresa e nada mudou, voltar é expor-se ao mesmo risco.

**O que mudou em mim?** Quais padrões de comportamento contribuíram? Você está trabalhando nisso?

**Qual é o plano de retorno?** Uma volta gradual é mais eficaz do que retornar full capacity imediatamente.

## Conversando com a empresa sobre o retorno

Você tem direito de negociar o retorno gradual: acordo para retorno progressivo de carga horária, mudança de função ou gestor se a causa foi situacional, flexibilidade temporária de horários.

A empresa tem interesse no seu retorno saudável — um funcionário que volta em colapso parcial não produz e gera custo de afastamento novamente.

## O que você pode dizer (se escolher divulgar)

*"Passei por um período de saúde que resolvi. Voltei com plano claro para garantir que entrego bem daqui para frente."*

Foco no futuro e na solução, não nos detalhes do passado.

## Reconstruindo a confiança profissional

- Comece com tarefas que você domina — reconquistar competência percebida é importante
- Celebre pequenas entregas (a tendência pós-burnout é minimizar progressos)
- Mantenha o suporte psicológico durante a fase de retorno — não só durante a crise
- Construa rituais de transição entre trabalho e descanso

Burnout é uma informação sobre o sistema (você + ambiente). O retorno consciente é uma oportunidade de redesenhar esse sistema.`,
      },
    ],
  },
  {
    id: 35,
    title: 'Storytelling e Comunicação Executiva',
    desc: 'Comunicar com clareza e impacto para qualquer audiência — de colegas a CEO. Narrativa, estrutura, escrita e presença que avançam carreiras.',
    duration: '3h 10min',
    icon: '🎙️',
    isPro: true,
    color: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700', icon: 'bg-orange-500' },
    lessons: [
      {
        id: '35-1',
        title: 'Por que storytelling decide carreiras',
        duration: '30 min',
        content: `# Por que storytelling decide carreiras

## O profissional invisível

Há um profissional em toda empresa que entrega consistentemente, é tecnicamente excelente, mas nunca é promovido. Na avaliação de desempenho, seu gestor diz que ele é "ótimo" mas não consegue dar exemplos específicos.

Esse profissional tem um problema de comunicação, não de competência.

## Por que o cérebro responde a histórias

Dados ativam duas áreas do cérebro. Histórias ativam sete áreas adicionais — incluindo as responsáveis por sensações e emoção.

Quando você apresenta resultados como dados, a informação é processada. Quando você conta a história de como descobriu o problema, o que tentou, o que falhou e o que funcionou — a informação é sentida e lembrada.

**Implicação:** Entrevistadores lembram das histórias. Comitês de promoção discutem casos concretos. CEOs mencionam o nome de quem criou clareza.

## Onde storytelling decide o resultado

**Entrevistas:** Cada resposta comportamental é uma história. Quem conta melhor, avança.

**Apresentações para liderança:** A diferença entre "precisamos de budget" e uma história que cria urgência, mostra o custo do não-investimento e propõe solução clara.

**Conversas de promoção:** O colaborador que narra sua trajetória de impacto vs. o que espera que o gestor lembre.

**Alinhamento de stakeholders:** Pessoas que discordam de dados podem concordar com uma história que cria perspectiva compartilhada.

## A habilidade que mais retorna no investimento

Storytelling não é talento inato — é estrutura + prática. Os próximos módulos mostram exatamente como desenvolver.`,
      },
      {
        id: '35-2',
        title: 'Estruturas de narrativa para entrevistas e apresentações',
        duration: '40 min',
        content: `# Estruturas de narrativa para entrevistas e apresentações

## Por que estrutura importa mais do que criatividade

Histórias sem estrutura confundem. A audiência gasta energia tentando entender onde você quer chegar — energia que deveria estar no conteúdo.

Estrutura transforma uma sequência de fatos em narrativa compreensível e memorável.

## As três estruturas mais úteis

### 1. STAR (entrevistas comportamentais)

Distribuição ideal de tempo:
- Situação: 15% (contexto mínimo)
- Tarefa: 10% (seu papel específico)
- Ação: 50% (o que VOCÊ fez — seja específico)
- Resultado: 25% (número + impacto de negócio + aprendizado)

O erro mais comum: gastar demais em S e T, chegar apressado em A e R.

### 2. Pirâmide de Minto (apresentações executivas)

Comece pela conclusão. Depois justifique.

1. Situação (contexto compartilhado)
2. Complicação (o problema ou mudança)
3. Pergunta implícita (o que fazemos agora?)
4. Resposta/recomendação (sua conclusão primeiro)
5. Os 3 argumentos que sustentam

Exemplo:
- "Nossa retenção está em 78% vs. 88% do mercado. Para fechar esse gap, preciso de aprovação para programa de sucesso do cliente. Os três motivos: CAC é 5x maior que custo de retenção, abandono ocorre nos primeiros 60 dias, e concorrentes com NPS>50 têm churn menor."

### 3. Antes e Depois (impacto de projeto)

"Antes de [ação], a situação era [X]. Após [ação], tornou-se [Y]. O que fiz para chegar lá: [3 ações concretas]."

## A regra dos três pontos

Toda apresentação deve ter no máximo três pontos principais. O cérebro humano retém três. Cinco pontos competem na memória. Dez pontos = zero pontos.

Se você tem dez argumentos, escolha os três mais fortes.`,
      },
      {
        id: '35-3',
        title: 'Falar para líderes: como adaptar a mensagem para o C-Level',
        duration: '35 min',
        content: `# Falar para líderes: como adaptar a mensagem para o C-Level

## O maior erro com líderes sêniors

Apresentar o processo em vez do resultado.

Líderes sêniors não querem saber como você chegou lá. Querem saber onde chegou, o que isso significa para o negócio e o que você precisa deles.

## O que líderes valorizam em comunicação

**Clareza acima de completude.** Uma mensagem incompleta que é entendida vale mais que uma completa que confunde.

**Números de negócio, não métricas técnicas.** CFOs não entendem DAU/MAU. Entendem receita, custo, margem. Traduza sempre.

**Implicação, não informação.** Não diga "a taxa de conversão caiu 12%". Diga "a taxa de conversão caiu 12%, o que representa R$800k de receita em risco neste trimestre se não agirmos em 30 dias."

**Recomendação clara.** Líderes ficam frustrados quando recebem análise sem recomendação. Mesmo incerto, diga "minha recomendação é X, com a ressalva de Y."

## A estrutura BLUF (Bottom Line Up Front)

Comece com a conclusão. A primeira frase deve conter o que o líder precisa saber.

Exemplo de email ao CEO:
> "Precisamos aprovar R$150k em budget adicional até sexta para não atrasar o lançamento Q3. Abaixo os 3 pontos que justificam e 2 alternativas caso budget não seja aprovado."

Se o CEO puder ler só a primeira frase e entender o que é necessário, você comunicou bem.

## Lendo a sala

Sinais de que você perdeu a atenção: olha para o celular, faz perguntas que você já respondeu, interrompe antes de terminar.

O que fazer: pare e pergunte diretamente — "Quero ter certeza que estou indo na direção certa. Qual é a parte mais importante para você nesse contexto?"`,
      },
      {
        id: '35-4',
        title: 'Comunicação escrita de alto impacto',
        duration: '30 min',
        content: `# Comunicação escrita de alto impacto

## Por que a escrita importa mais do que nunca

Em ambientes remotos e híbridos, comunicação escrita é o principal canal de trabalho. Quem escreve bem é percebido como mais inteligente, mais organizado e mais confiável.

## Os princípios da escrita executiva

**Clareza primeiro, elegância depois.** A frase mais clara é sempre melhor que a mais elaborada.

**Uma ideia por parágrafo.** Se tem duas ideias, separe em dois parágrafos.

**Subject line de email = a conclusão.**
- Ruim: "Reunião de alinhamento sobre projeto X"
- Bom: "Aprovação necessária para budget Q3 — até sexta-feira"

**Comece com o pedido, não com o contexto.** Emails com contexto no início e pedido no final são lidos pela metade.

## A estrutura do email executivo eficiente

---
Assunto: [O que você precisa + prazo]

Preciso de [aprovação / decisão / feedback] sobre [X] até [data].

Por quê agora: [1-2 frases]
Contexto: [3 bullets no máximo]
Opções:
• Opção A (minha recomendação): [breve descrição]
• Opção B: [breve descrição]

Me avisa qual preferem.
---

## Relatórios que são lidos

Estrutura que funciona:
1. **Executive Summary** (1 página) — o que aconteceu, o que significa, o que fazer
2. **Análise detalhada** — para quem quer aprofundar
3. **Dados brutos** — no anexo

Regra: quem ler só o Executive Summary deve ter tudo que precisa para decidir.

## Erros que destroem credibilidade

- Frases passivas que escondem o responsável ("Foi decidido que...")
- Jargão em excesso em todo parágrafo
- Adjetivos sem dado ("crescimento expressivo" — qual número?)
- Bullets que poderiam ser uma frase`,
      },
      {
        id: '35-5',
        title: 'Presença em reuniões, palcos e videoconferências',
        duration: '35 min',
        content: `# Presença em reuniões, palcos e videoconferências

## O que é presença executiva

Presença executiva não é ser extrovertido. É a capacidade de entrar em um ambiente e ser notado pelos motivos certos — a qualidade do que você diz, a segurança com que se move, a atenção que você gera.

É completamente desenvolvível.

## Presença em reuniões de trabalho

**Fale menos, mas pese mais.** O participante que fala em cada ponto é ruído. Quem fala três vezes com substância é lembrado.

Estratégia: reserve intervenções para os pontos em que você tem algo único a acrescentar. Quando falar, seja direto e conclua com recomendação ou pergunta clara.

**Faça a pergunta que libera o grupo.** Em toda reunião há uma pergunta não feita que bloquearia o avanço. Quem a faz — respeitosamente — demonstra clareza de pensamento e constrói reputação de liderança.

## Apresentações e palcos

**Os primeiros 30 segundos.** A audiência decide se você merece atenção nos primeiros 30 segundos. Comece com afirmação surpreendente, pergunta inesperada ou dado que quebra uma suposição.

Nunca comece com "Bom dia, meu nome é X e hoje vou falar sobre Y."

**Velocidade e pausa.** Falar rápido demais é sinal de nervosismo. Pausas estratégicas — especialmente após afirmação importante — criam peso e deixam o conteúdo assentar.

**Onde olhar.** Em palco, divida em três zonas (esquerda, centro, direita) e alterne. O objetivo é que cada pessoa sinta que você olhou para ela pelo menos uma vez.

## Sobre o nervosismo

Não é fingir confiança — é preparação que gera confiança real. Pratique em voz alta, não mentalmente. O nervosismo é físico — a prática tem que ser física. O objetivo não é eliminar o nervosismo — é usar essa energia como foco.`,
      },
    ],
  },
  {
    id: 36,
    title: 'Carreira em Dados: Analytics, BI e Data Science',
    desc: 'O mapa completo para construir ou migrar para uma carreira em dados — cargos, habilidades por nível, portfólio que impressiona e como entrar sem formação técnica formal.',
    duration: '3h 20min',
    icon: '📊',
    isPro: true,
    color: { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700', icon: 'bg-purple-600' },
    lessons: [
      {
        id: '36-1',
        title: 'O ecossistema de dados: áreas, cargos e diferenças',
        duration: '35 min',
        content: `# O ecossistema de dados: áreas, cargos e diferenças

## Por que "trabalhar com dados" não é um cargo

"Quero trabalhar com dados" é como dizer "quero trabalhar com saúde." Há dezenas de funções diferentes, com habilidades, perfis e mercados distintos.

## O mapa de cargos em dados

**Analista de Dados:** Responde perguntas de negócio com dados existentes. Cria dashboards e análises. SQL + Excel + BI tool. Perfil: raciocínio analítico com foco em negócio.

**Analista de BI:** Constrói pipelines e dashboards para a empresa toda. SQL avançado + ETL + modelagem dimensional + Power BI/Tableau + dbt. Perfil: gosta de estrutura e arquitetura.

**Engenheiro de Dados:** Constrói a infraestrutura que move e transforma dados. Python + SQL + Spark + Airflow + cloud. **Maior escassez no mercado — salários proporcionalmente mais altos.**

**Cientista de Dados:** Constrói modelos preditivos. Python + estatística + scikit-learn + SQL. Perfil: base matemática/estatística forte.

**Analytics Engineer:** Intersecção de análise e engenharia — SQL + dbt + transformação de dados com qualidade de código. Função crescente e muito demandada.

## Como escolher sua trilha

Responda:
- Prefere responder perguntas (Analyst) ou construir a estrutura que permite respondê-las (Engineer)?
- Trabalhar com dados históricos (BI/Analytics) ou prever o futuro (Data Science)?
- Código leve com muito negócio (Analyst) ou código pesado com menos negócio (Engineer)?

Sua resposta aponta a trilha.`,
      },
      {
        id: '36-2',
        title: 'Habilidades essenciais por trilha e nível',
        duration: '40 min',
        content: `# Habilidades essenciais por trilha e nível

## Para Analista de Dados / Analytics

**Júnior:** SQL básico-intermediário (SELECT, WHERE, GROUP BY, JOIN), Excel avançado (tabelas dinâmicas, XLOOKUP), uma ferramenta de BI básica, comunicação de insight para não-técnicos.

**Pleno:** SQL avançado (window functions, CTEs, performance), Python básico com pandas, estatística descritiva aplicada, narrativa visual com dados.

**Sênior:** Definição de métricas e taxonomia para a empresa, experimentação (A/B testing rigoroso), influência com stakeholders, liderança técnica.

## Para Engenheiro de Dados

**Júnior:** Python (manipulação, APIs, OOP básico), SQL avançado, conceitos de ETL, cloud básico (S3, GCS).

**Pleno:** Airflow ou Prefect, dbt, Spark, Data Warehouse moderno (BigQuery, Snowflake), Git e DevOps básico.

**Sênior:** Arquitetura de data lakehouse, streaming (Kafka, Flink), data quality e observabilidade, otimização de custo de cloud.

## Para Cientista de Dados

**Júnior:** Python (pandas, numpy, scikit-learn), estatística básica (distribuições, testes de hipótese), ML supervisionado, visualização.

**Pleno:** ML avançado (ensemble, feature engineering), experimentação rigorosa, SQL avançado, comunicação de incerteza.

**Sênior:** Deep learning (PyTorch/TensorFlow), MLOps (deploy e monitoramento de modelos), liderança de projetos end-to-end.

## O que estudar primeiro (para quem está começando)

1. **SQL** — denominador comum de tudo. Invista aqui antes de qualquer outra coisa.
2. **Excel/Sheets** — ainda é a ferramenta mais usada no cotidiano de dados no Brasil.
3. **Uma ferramenta de BI** — Power BI tem mais vagas no Brasil; Tableau tem mais no mercado internacional.
4. **Python básico** — depois de SQL, não antes.

Recursos gratuitos: Mode Analytics SQL Tutorial, Kaggle Learn, Khan Academy Statistics.`,
      },
      {
        id: '36-3',
        title: 'Portfólio de dados que impressiona recrutadores',
        duration: '35 min',
        content: `# Portfólio de dados que impressiona recrutadores

## Por que portfólio vale mais que certificação

Certificações dizem que você estudou. Portfólio diz que você sabe fazer. Um projeto real bem documentado vale mais do que 10 certificados.

## O que faz um projeto de dados ser impressionante

**Problema real + dataset real.** Projetos com dados fictícios não convencem. Use dados públicos de fontes confiáveis: Kaggle, IBGE, data.gov.br, Google Dataset Search.

Fraco: "Analisei vendas de dataset genérico e plotei gráficos."
Forte: "Analisei dados públicos do Ministério da Saúde para identificar padrões de internação por região e propus modelo preditivo de demanda hospitalar."

**Processo completo documentado:** mostre o problema de negócio, de onde vieram os dados, quais análises foram feitas e por quê, o que foi encontrado, qual seria a recomendação.

**Código limpo e comentado:** variáveis descritivas, estrutura em seções, decisões não óbvias documentadas.

## Onde hospedar

- **GitHub:** padrão para código. Todo projeto tem README claro.
- **Kaggle:** para notebooks com análise exploratória.
- **Medium/Substack:** análises narrativas — muito valorizado por recrutadores.
- **Tableau Public / Power BI Reports:** dashboards interativos gratuitos.

## 3 projetos que funcionam para qualquer área

1. **Análise exploratória com insight de negócio** — dataset de e-commerce (Kaggle), pergunta de negócio real, conclusões + recomendações.

2. **Dashboard executivo** — dados financeiros ou de vendas públicos, 4-5 KPIs, filtros por período/região, narrativa visual.

3. **Modelo preditivo simples** — previsão de churn, aprovação de crédito ou demanda. EDA + feature engineering + modelo + métricas + interpretação.

**Dica de diferencial:** use dados brasileiros (IBGE, INEP, Receita Federal). A maioria dos portfólios usa dados americanos. Dados locais chamam atenção de empresas nacionais.`,
      },
      {
        id: '36-4',
        title: 'Como entrar em dados sem formação técnica',
        duration: '30 min',
        content: `# Como entrar em dados sem formação técnica

## Formação formal não é requisito

A maioria dos analistas de dados no Brasil não tem graduação em Estatística ou Ciências da Computação. Veio de Administração, Economia, Marketing, Jornalismo, Psicologia.

O que importa: você sabe usar dados para responder perguntas de negócio? Consegue comunicar o resultado para alguém não técnico?

## Trilha de 6-12 meses para entrar em analytics

**Meses 1-2: SQL e Excel.**
Foco total. SQL é a habilidade mais importante e mais escassa. Meta: queries com JOINs, GROUP BY e subqueries.
Recursos: Mode Analytics SQL Tutorial (gratuito), DIO.

**Meses 3-4: Power BI + comunicação com dados.**
Conectar os dados que você aprendeu a consultar a uma visualização. Qual gráfico para qual pergunta.
Recursos: Hashtag Treinamentos (YouTube, gratuito).

**Meses 5-6: Python básico + primeiro projeto de portfólio.**
Pandas para manipulação, visualização com plotly. Primeiro projeto documentado no GitHub.

**Meses 7-12: Segundo projeto + candidaturas + networking.**
Comunidades: Data Hackers (maior do Brasil), grupos de dados no LinkedIn.

## Usando seu background como diferencial

**Marketing:** entende funil, métricas de aquisição. Analytics de growth e produto valorizam isso.
**Finanças/Contabilidade:** entende modelagem de negócio, P&L. BI financeiro é natural.
**RH:** people analytics é área crescente.
**Operações/Logística:** supply chain analytics tem alta demanda.

Não mude de área — aplique dados à área que você já domina. É muito mais fácil ser analista de dados de marketing com background em marketing.

## Vagas de entrada que aceitam não-técnicos

- Trainee em dados (Ambev, B3, Itaú, Magazine Luiza)
- Junior Data Analyst em startups
- Analytics Engineer Junior (SQL forte é suficiente para começar)
- Analista de BI Junior (menor barreira de entrada)`,
      },
      {
        id: '36-5',
        title: 'Crescimento e especialização: da análise ao engineering',
        duration: '40 min',
        content: `# Crescimento e especialização: da análise ao engineering

## As decisões que moldam sua trajetória

Em algum ponto da carreira em dados, você vai precisar escolher:

1. **Ir mais fundo tecnicamente** (engenharia, ML, pesquisa)
2. **Ir mais para negócio** (analytics lead, head de dados, CDO)
3. **Ir para gestão de times** (Data Manager, Head of Analytics)
4. **Especializar por domínio** (fintech analytics, healthcare data, growth)

## O caminho técnico: de analyst para engineer

A transição de analista para engenheiro de dados é uma das mais procuradas e bem remuneradas.

O que aprender:
- Python além de pandas: orientação a objetos, testes unitários
- Orquestração: Airflow, Prefect ou Dagster
- Data Warehouse moderno: BigQuery, Snowflake ou Databricks
- dbt: padrão de fato para transformação de dados

Timeline realista: 12-18 meses de aprendizado focado + projetos práticos.

## O caminho de liderança: de sênior para head

Exige habilidades além das técnicas: recrutamento e desenvolvimento de talentos, priorização estratégica de time, influência executiva, demonstração de impacto em termos financeiros.

## Tendências que moldam as oportunidades

**Analytics Engineering:** dbt e ferramentas similares criaram nova disciplina — analistas que sabem construir pipelines confiáveis sem serem engenheiros completos.

**LLMs e dados:** cresce demanda por profissionais que sabem trabalhar com dados não estruturados e construir pipelines para IA generativa.

**Data Governance:** LGPD e qualidade de dados como preocupação estratégica criou perfis especializados.

## Como se posicionar para crescimento acelerado

1. **Especialize-se em algo escasso** — "especialista em experimentação" abre portas que generalistas não abrem.
2. **Construa visibilidade** — publique análises, contribua em comunidades, fale em meetups.
3. **Mova-se para empresas data-driven** — você aprende mais onde dados decidem.
4. **Encontre um mentor técnico** — Data Hackers e PyData Brasil conectam profissionais.`,
      },
    ],
  },
  {
    id: 37,
    title: 'Mentorias de Carreira: Como Encontrar e Aproveitar',
    desc: 'Como encontrar mentores que realmente importam, abordá-los sem parecer desesperado e extrair o máximo de cada sessão — o atalho mais subestimado na carreira.',
    duration: '2h 15min',
    icon: '🤝',
    isPro: false,
    color: { bg: 'bg-yellow-50', border: 'border-yellow-200', badge: 'bg-yellow-100 text-yellow-700', icon: 'bg-yellow-500' },
    lessons: [
      {
        id: '37-1',
        title: 'O que é mentoria real (e o que não é)',
        duration: '25 min',
        content: `# O que é mentoria real (e o que não é)

## A confusão sobre o que é mentoria

Mentoria virou palavra da moda. Hoje em dia, qualquer conversa de 30 minutos com alguém mais experiente é chamada de mentoria. Isso diluiu o conceito e criou expectativas erradas.

**Mentoria real é:**
- Um relacionamento de longo prazo com alguém que investiu tempo em te conhecer
- Troca genuína (mentor aprende algo com você também)
- Orientação contextualizada para sua situação específica — não conselhos genéricos
- Baseada em confiança construída ao longo do tempo

**O que não é mentoria:**
- Uma conversa única com um palestrante famoso
- Alguém que responde suas perguntas num evento
- Um coaching pago pontual (que tem valor, mas é diferente)
- Alguém que te dá validação sem desafio

## Por que mentoria importa tanto

Pesquisas mostram que profissionais com mentor progridem mais rapidamente, recebem mais promoções, ganham mais e reportam maior satisfação. Mas o efeito não é mágico — vem do acesso a perspectiva que você não consegue sozinho.

Um mentor que passou pelo que você está passando 10 anos antes pode te fazer evitar erros que levariam anos para você perceber. Isso não tem preço.

## Os tipos de mentor que existem

**Mentor de carreira:** Te ajuda a navegar decisões de carreira, promoções, transições.

**Mentor técnico:** Tem profundidade em uma competência específica que você quer desenvolver.

**Sponsor:** Vai além do conselho — te indica ativamente, fala o seu nome quando oportunidades aparecem. Mais raro, mais valioso.

**Peer mentor:** Alguém no mesmo nível mas com perspectiva diferente — troca mais horizontal.

Você pode e deve ter múltiplos mentores para diferentes aspectos da carreira.`,
      },
      {
        id: '37-2',
        title: 'Como encontrar mentores relevantes para sua carreira',
        duration: '30 min',
        content: `# Como encontrar mentores relevantes para sua carreira

## Onde mentores estão (e onde não estão)

**Onde estão:**
- Na sua rede atual — a maioria das mentorias começa com alguém que você já conhece ou tem conexão em comum
- LinkedIn — pesquisa por cargo atual ou trajetória semelhante ao que você quer
- Comunidades da sua área — Slack de profissionais, grupos no LinkedIn, comunidades setoriais
- Eventos e conferências — tanto presenciais quanto online
- Programas formais de mentoria (algumas empresas, associações e ONGs oferecem)
- Ex-colegas que avançaram mais rapidamente

**Onde não estão:**
- Palestrantes famosos com 100k seguidores que você aborda no DM sem contexto
- Executivos de Fortune 500 que você nunca teve qualquer tipo de contato

## O critério de seleção do mentor certo

Antes de abordar alguém, responda:

1. **Esta pessoa está onde eu quero estar daqui a 5-10 anos?** (ou passou pelo que estou passando?)
2. **Temos valores ou interesses em comum além da área?** (facilita conexão genuína)
3. **Ela tem tempo e energia para investir em mentoria?** (executivos muito ocupados dão conselhos superficiais)
4. **Tenho algo a oferecer para essa troca?** (perspectiva, habilidade, network em outra área)

## Plataformas e programas formais

**MentorCruise:** plataforma paga com mentores globais, muito boa para tech e produto.

**ADPList:** gratuito, mentores voluntários em tech, design e startups — global.

**Impulso Network:** comunidade brasileira de tech com mentorias.

**Programas de empresas:** muitas organizações têm programas internos. Pesquise com o RH.

**Associações profissionais:** ABRH (RH), ABRAIDI (design), comunidades de marketing, grupos de CFOs etc.

## O erro de buscar o mentor "famoso"

A melhor mentoria raramente vem do CEO mais famoso da sua área. Vem de alguém que está 3-5 anos à frente de você, tem tempo para se engajar e lembra como era estar onde você está. Esse perfil é muito mais acessível e muito mais útil.`,
      },
      {
        id: '37-3',
        title: 'Como abordar um mentor sem soar desesperado',
        duration: '25 min',
        content: `# Como abordar um mentor sem soar desesperado

## Por que a maioria dos pedidos de mentoria é ignorada

"Olá [nome], admiro muito sua trajetória e gostaria muito de ter uma mentoria com você. Poderia me dedicar um pouco do seu tempo?"

Este tipo de mensagem chega dezenas de vezes por semana para profissionais experientes. É genérica, pede sem oferecer, e coloca o trabalho todo no lado do mentor.

## A estrutura de abordagem que funciona

**1. Demonstre que você fez a lição de casa**
Mencione algo específico sobre o trabalho ou trajetória da pessoa. Não "vi que você trabalha em X" — mas "li seu artigo sobre Y e a perspectiva sobre Z me fez repensar como estou abordando [problema específico]."

**2. Seja específico sobre o que você precisa**
Não "quero uma mentoria". Mas "estou tomando a decisão de X vs. Y e você passou por situação similar. Posso ter 30 minutos para ouvir sua perspectiva?"

**3. Minimize o custo para o mentor**
30 minutos é mais fácil de dizer sim do que "uma mentoria". Uma conversa online específica é mais fácil do que um compromisso aberto.

**4. Ofereça algo em troca (quando genuíno)**
Se você tem uma perspectiva, dado ou conexão que pode ser útil para o mentor, mencione.

**Exemplo de mensagem que funciona:**

"Olá [nome], acompanho seu trabalho em [área específica] há algum tempo — especialmente o que você compartilhou sobre [tema] me foi muito útil quando [contexto pessoal].

Estou num momento de decisão sobre [situação específica] e você passou por algo similar quando [referência à trajetória dela]. Você teria 30 minutos nos próximos 2-3 semanas para uma conversa? Posso me adaptar ao seu horário."

## O que fazer depois da primeira conversa

- Envie um email de agradecimento em até 24 horas com o que foi mais útil
- Implemente algo do que foi discutido antes do próximo contato
- No próximo contato: mostre o que você fez com o conselho anterior
- Não desapareça depois da primeira sessão — mentorias que funcionam têm continuidade`,
      },
      {
        id: '37-4',
        title: 'Extraindo o máximo de cada sessão',
        duration: '25 min',
        content: `# Extraindo o máximo de cada sessão

## O mentorado que não aproveita

Chega sem preparação. Faz perguntas genéricas ("o que você me recomenda para crescer na carreira?"). Espera que o mentor faça o trabalho de identificar o que precisa ser discutido.

O mentor termina a sessão sem saber se foi útil. O mentorado sai com conselhos vagos que não aplica.

## A preparação antes de cada sessão

**15-20 minutos de preparação valem 45 minutos de sessão melhor.**

Antes de cada encontro:
1. O que eu implementei desde a última sessão? Qual foi o resultado?
2. Qual é a decisão ou desafio mais importante que estou enfrentando agora?
3. Quais são as 2-3 perguntas específicas que só esta pessoa pode responder?
4. Tem algo que quero mostrar (portfólio, análise, plano) para feedback concreto?

## Perguntas que extraem mais valor

Ao invés de: "O que você me recomenda para crescer?"
Use: "Quando você estava nessa posição, qual foi a decisão que mais acelerou sua progressão?"

Ao invés de: "Como você negociou seu salário?"
Use: "Você pode me contar o momento exato de uma negociação difícil e como conduziu — o que disse, o que não disse?"

Ao invés de: "Como entro nessa área?"
Use: "Se você fosse começar hoje com o meu perfil atual, quais seriam seus primeiros 3 movimentos?"

## Durante a sessão

- Tome notas (com permissão)
- Não interrompa para contar sua história quando o mentor está dando um exemplo — ouça até o fim
- Quando receber conselho que discorda, explore com curiosidade antes de defender sua posição
- Ao final: pergunte "tem alguma pergunta que eu deveria ter feito e não fiz?"

## Fechando o ciclo da mentoria

Ao final de um período (3-6 meses), faça uma revisão com o mentor: o que avançou, o que ainda está em aberto, se faz sentido continuar.

Mentorias que terminam naturalmente com gratidão e relato de impacto frequentemente se transformam em sponsorship — o mentor começa a te indicar ativamente.`,
      },
      {
        id: '37-5',
        title: 'Quando você vira mentor: o ciclo que multiplica',
        duration: '30 min',
        content: `# Quando você vira mentor: o ciclo que multiplica

## Por que se tornar mentor acelera sua própria carreira

Ensinar é a forma mais eficiente de aprender. Quando você articula para outra pessoa o que sabe — organizando, simplificando, respondendo perguntas que não esperava — você consolida e aprofunda seu próprio conhecimento.

Além disso, ser mentor constrói reputação de liderança, cria network de pessoas que cresceram com seu apoio, e frequentemente abre portas que o mentorado mais tarde indica.

## Quando você está pronto para mentorar

Você não precisa ser expert para ser mentor. Você precisa estar 3-5 anos à frente de alguém em um aspecto específico.

Se você passou por uma transição de carreira difícil, conseguiu o primeiro emprego numa área competitiva, ou desenvolveu uma habilidade específica — você tem algo para compartilhar com quem está alguns passos atrás.

## Como ser um bom mentor

**Escute antes de aconselhar.** O erro mais comum de novos mentores: dar conselhos antes de entender profundamente a situação. Faça perguntas até ter clareza.

**Compartilhe falhas, não só sucessos.** Histórias de erro e aprendizado são mais úteis do que histórias de sucesso. Remova o verniz.

**Dê feedback difícil com cuidado.** "Você está evitando uma conversa importante" é mais útil do que "você está indo muito bem". Mas entregue com empatia e evidência específica.

**Não resolva o problema pelo mentorado.** Faça perguntas que fazem o mentorado chegar à própria conclusão. Autonomia de pensamento é o maior presente de uma mentoria.

**Saiba quando a mentoria acabou.** Nem toda mentoria dura para sempre. Quando o mentorado cresceu além do que você pode oferecer, comemore e indique mentores mais adequados.

## O efeito multiplicador

Cada profissional que você mentora bem carrega aprendizados e valores que vai transmitir para quem ele mentorar. É uma das poucas formas de impacto que escala além da sua capacidade individual.`,
      },
    ],
  },
  {
    id: 38,
    title: 'Trabalho em Multinacionais',
    desc: 'O que realmente muda ao trabalhar numa multinacional — cultura, processos seletivos, crescimento, expatriação e como navegar uma organização global.',
    duration: '2h 50min',
    icon: '🌐',
    isPro: true,
    color: { bg: 'bg-slate-50', border: 'border-slate-200', badge: 'bg-slate-100 text-slate-700', icon: 'bg-slate-600' },
    lessons: [
      {
        id: '38-1',
        title: 'A cultura multinacional: o que muda de fato',
        duration: '30 min',
        content: `# A cultura multinacional: o que muda de fato

## O que é diferente (e o que não é)

Muitos profissionais idealizam o trabalho em multinacional sem entender o que realmente muda. Outros subestimam as diferenças e chegam despreparados.

**O que realmente muda:**

**Estrutura e processos mais formais:** Multinacionais têm políticas globais, frameworks de gestão padronizados, processos de aprovação com mais stakeholders. Há menos improviso — o que pode ser bom (previsibilidade) ou desafiador (burocracia).

**Inglês como língua de trabalho:** Reuniões com stakeholders internacionais, apresentações para HQ, emails para colegas em outros países. O inglês deixa de ser diferencial e vira requisito operacional.

**Diversidade real:** Trabalhar com pessoas de culturas diferentes em projetos colaborativos expõe a formas de pensar e resolver problemas que não aparecem em empresas locais.

**Benefícios e remuneração mais estruturados:** PLR, bônus por performance, planos de saúde abrangentes, programas de desenvolvimento — tendem a ser mais robustos.

**O que não muda:**
- Política interna existe em qualquer organização (se não maior, diferente)
- Pressão por resultado — muitas vezes mais intensa devido a metas globais
- A qualidade da liderança direta ainda é o maior fator de satisfação

## Perfis de multinacional: não são todas iguais

**Multinacional americana:** hierarquia relativamente plana no papel, mas cultura de performance e meritrocracia intensa. Direto ao ponto, menos formalidade, resultados acima de protocolo.

**Multinacional europeia:** mais formal e hierárquica, com valorização de equilíbrio trabalho-vida. Alemãs e escandinavas em especial têm estruturas bem definidas.

**Multinacional asiática (japonesa, coreana):** alta formalidade, hierarquia respeitada, processos longos de decisão por consenso. Exige paciência e adaptação cultural.

## O que você ganha ao trabalhar em multinacional

- Exposição a melhores práticas globais
- Rede de contatos internacional
- Marca no CV que abre portas no Brasil e no exterior
- Possibilidade de expatriação e mobilidade global
- Desenvolvimento de inglês e competências globais no dia a dia`,
      },
      {
        id: '38-2',
        title: 'Como entrar numa multinacional: processo seletivo e rede',
        duration: '35 min',
        content: `# Como entrar numa multinacional: processo seletivo e rede

## O processo seletivo de multinacionais

É mais longo, mais estruturado e mais exigente do que empresas locais de porte similar. Espere 4-8 semanas e 3-6 etapas.

**Etapas típicas:**
1. Triagem de CV pelo ATS (mais rigoroso — use palavras-chave da vaga literalmente)
2. Screening com RH local (fit cultural, inglês, motivação)
3. Teste online (raciocínio lógico, verbal, perfil comportamental — SHL, Hogan, Korn Ferry são comuns)
4. Entrevista com gestor da área
5. Assessment center ou painel (para cargos de liderança)
6. Entrevista com stakeholders internacionais (às vezes em inglês)
7. Proposta e negociação

## Onde as vagas aparecem

- Site de carreiras da empresa (sempre o mais atualizado)
- LinkedIn (vagas publicadas e abordagem direta a recrutadores)
- Plataformas como Glassdoor, Indeed, Catho para grandes volumes
- Headhunters especializados em multinacionais (Michael Page, Robert Half, Heidrick & Struggles para sêniors)

## A vantagem do networking interno

Em multinacionais, indicação interna é levada a sério. Candidatos indicados por funcionários passam da triagem com muito mais frequência.

**Estratégia:** Identifique funcionários da empresa no LinkedIn com quem você tem conexão. Uma conversa informal antes de aplicar — para entender a cultura e o que buscam — aumenta muito suas chances de uma indicação.

## Construindo o perfil certo para multinacionais

**Inglês avançado/fluente:** Não apenas "leitura e escrita" — mas conversação e apresentação. Invista antes de candidatar.

**Experiência em projetos que cruzaram departamentos ou países:** Mostra que você funciona em ambientes de alta complexidade.

**Exposição a frameworks e metodologias globais:** Certificações (PMP, CFA, CPA, Scrum), metodologias (OKR, Agile, Six Sigma) são reconhecidas universalmente.

**Soft skills para cultura global:** Adaptabilidade, comunicação intercultural, capacidade de trabalhar em fusos diferentes com autonomia.`,
      },
      {
        id: '38-3',
        title: 'Inglês como idioma de trabalho: dicas práticas',
        duration: '25 min',
        content: `# Inglês como idioma de trabalho: dicas práticas

## A diferença entre inglês "avançado" e inglês de trabalho

Inglês avançado em curso significa que você passou num teste. Inglês de trabalho significa que você consegue:
- Participar de reunião com 8 pessoas de 4 países sem perder o fio
- Fazer uma apresentação para HQ sem precisar pausar para traduzir mentalmente
- Escrever um email que soa profissional e direto, não uma tradução do português
- Entender sotaques diferentes (inglês indiano, americano, britânico, holandês)

## O que desenvolver para inglês de trabalho real

**Vocabulário de negócios:** Há termos específicos de cada área que não aparecem em cursos gerais. Leia relatórios anuais, notícias de negócios (Bloomberg, FT, WSJ), artigos do seu setor em inglês. Absorção natural é mais eficiente do que decorar vocabulário.

**Reuniões e videoconferências:** O maior desafio para brasileiros. Dicas:
- Prepare suas 2-3 contribuições antes de cada reunião
- Pratique as frases de entrada: "I'd like to add...", "Building on what X said...", "I have a quick question about..."
- Não interrompa para pedir para repetir toda hora — pegue as palavras-chave e complete o contexto

**Emails executivos em inglês:** Mais diretos e curtos que em português. BLUF (Bottom Line Up Front) é padrão. "I am writing to inquire about..." é formal demais para a maioria dos contextos — "Quick question about..." funciona melhor.

**Apresentações:** Pratique em voz alta, não mentalmente. Grave-se. Peça feedback de falante nativo ou de alguém que trabalha em inglês regularmente.

## Como melhorar o inglês no dia a dia sem curso formal

- Consuma conteúdo de interesse pessoal em inglês (série, podcast, livro, YouTube)
- Escreva notas e to-dos pessoais em inglês
- Participe de comunidades online internacionais da sua área
- Encontre um language partner (ADiTalks, Tandem, Speaky)
- Pratique antes de reuniões com simulação em voz alta`,
      },
      {
        id: '38-4',
        title: 'Crescimento em multinacional: promoção e mobility',
        duration: '30 min',
        content: `# Crescimento em multinacional: promoção e mobility

## Como promoções funcionam em multinacionais

Diferente de empresas locais onde promoção pode ser mais subjetiva, multinacionais geralmente têm ciclos formais de avaliação de desempenho — 1 ou 2 vezes por ano — com critérios definidos.

**O que é avaliado:**
- Resultado vs. metas (o mais importante)
- Competências de liderança (mesmo para não-gestores — mostrar que você lidera pelo exemplo)
- Feedback de 360 graus (pares, subordinados, clientes internos)
- Potencial de crescimento (não só desempenho atual)

**O que diferencia quem é promovido:**
- Visibilidade além do seu time imediato (stakeholders de outras áreas te conhecem?)
- Entregas que impactaram além do seu escopo
- Ter um sponsor — alguém acima de você que defende seu nome quando a promoção é discutida

## Mobility: crescer dentro da rede global

Transferência internacional é uma das maiores vantagens de multinacionais. Muitas empresas têm programas formais de mobility.

**Como acessar:**
1. Expresse interesse formalmente ao seu gestor e ao RH — não espere que apareça
2. Construa visibilidade com stakeholders internacionais (participe de calls, projetos globais)
3. Entregue resultado excepcional localmente primeiro — mobility vai para quem já provou
4. Pesquise o processo interno: algumas empresas exigem tempo mínimo no cargo atual

**O que a empresa espera ao investir em mobility:**
- Que você volte ou aplique o aprendizado global na operação local
- Que você desenvolva perspectiva global e traga isso para o time

## A armadilha da estabilidade

Multinacionais oferecem estabilidade, benefícios e estrutura. Isso pode ser uma armadilha para quem fica confortável sem crescer.

A cada 2-3 anos, pergunte: "Estou crescendo aqui ou apenas mantendo?" Se a resposta for manter, é hora de buscar um novo desafio — interno ou externo.`,
      },
      {
        id: '38-5',
        title: 'Expatriação: quando a empresa te manda para outro país',
        duration: '30 min',
        content: `# Expatriação: quando a empresa te manda para outro país

## O que é um pacote de expatriação

Quando uma empresa envia um funcionário para trabalhar em outro país por período prolongado (geralmente 1-3 anos), ela oferece um pacote de compensação específico que cobre os custos adicionais da mudança.

**O que um pacote de expat típico inclui:**
- Ajuda de custo para mudança (transporte de bens, viagem)
- Moradia subsidiada ou auxílio moradia no país destino
- Auxílio escolar para filhos (internacional schools são caras)
- Repatriação ao fim do contrato
- Ajuste de custo de vida (COLA — Cost of Living Adjustment)
- Suporte para visto e documentação
- Mantém ou melhora o salário base

## Como se preparar para uma expatriação

**Antes de aceitar:**
- Negocie o pacote completo — não só o salário
- Entenda o que acontece ao fim do período (retorno garantido? Qual cargo?)
- Avalie o impacto familiar (cônjuge, filhos, vínculos)
- Pesquise o custo de vida real do destino — não confie só no que a empresa informa

**Nos primeiros meses:**
- Expectativa vs. realidade: a maioria dos expats passa por choque cultural nos primeiros 3-6 meses
- Construa rede local fora da empresa — dependência total dos colegas de trabalho isola
- Aprenda o básico do idioma local mesmo que o inglês seja suficiente para o trabalho

## O impacto na carreira de longo prazo

Experiência de expatriação é altamente valorizada para cargos de liderança global. Ela demonstra:
- Adaptabilidade cultural
- Capacidade de performar fora da zona de conforto
- Perspectiva global de negócios

No entanto, o retorno precisa de gestão ativa. Muitos expats voltam para a empresa sem o mesmo nível de visibilidade que tinham antes — o que foi chamado de "reverse culture shock" organizacional. Mantenha relacionamentos no país de origem durante o período fora.`,
      },
    ],
  },
  {
    id: 39,
    title: 'CLT vs PJ vs MEI: Maximizando Sua Remuneração',
    desc: 'Entenda de verdade o que cada regime significa, como calcular se vale a pena ir para PJ, o que negociar e como gerenciar as finanças de quem trabalha como pessoa jurídica.',
    duration: '2h 45min',
    icon: '💼',
    isPro: true,
    color: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', icon: 'bg-emerald-600' },
    lessons: [
      {
        id: '39-1',
        title: 'Entendendo os três regimes: direitos e obrigações',
        duration: '30 min',
        content: `# Entendendo os três regimes: direitos e obrigações

## CLT (Consolidação das Leis do Trabalho)

O regime clássico de emprego formal no Brasil.

**Direitos garantidos:**
- 13º salário
- Férias de 30 dias + 1/3 adicional
- FGTS (8% do salário depositado pelo empregador)
- Aviso prévio (30 dias + 3 dias por ano de empresa, máximo 90)
- Seguro-desemprego (em caso de demissão sem justa causa)
- Licença maternidade/paternidade
- Plano de saúde (comum mas não obrigatório por lei)
- INSS (descontado do salário, garante aposentadoria e benefícios)

**O que você abre mão em CLT:**
- Flexibilidade de renda (salário fixo — não sobem facilmente)
- Possibilidade de otimizar impostos

## PJ (Pessoa Jurídica)

Você abre uma empresa (geralmente LTDA ou SLU) e emite nota fiscal para o contratante. Não tem vínculo empregatício.

**Vantagens:**
- Renda potencialmente maior (o contratante economiza encargos)
- Possibilidade de tributação mais baixa dependendo do regime fiscal
- Maior controle sobre o próprio negócio

**O que você é responsável por:**
- Pagar o próprio INSS (se quiser manter benefícios previdenciários)
- Sem FGTS, sem seguro-desemprego, sem 13º, sem férias remuneradas
- Contabilidade (imposto de renda da empresa + imposto pessoa física)
- Risco de sazonalidade (o contrato pode ser encerrado)

## MEI (Microempreendedor Individual)

Limite de faturamento anual: R$81.000 (2025). Para serviços: teto mais baixo em algumas categorias.

**Vantagens:**
- Custo fixo mensal baixo (~R$70/mês cobre INSS, ICMS e ISS)
- Acesso a CNPJ sem contador obrigatório
- Benefícios previdenciários (aposentadoria mínima, auxílio-doença)

**Limitação:** Para contratos de serviço exclusivo com uma empresa, MEI pode caracterizar vínculo empregatício (risco jurídico para o contratante). Freelancers com múltiplos clientes têm mais segurança jurídica.`,
      },
      {
        id: '39-2',
        title: 'Como calcular se vale a pena ir para PJ',
        duration: '35 min',
        content: `# Como calcular se vale a pena ir para PJ

## A comparação que a maioria faz errado

"Me oferecem R$8.000 CLT ou R$12.000 PJ. Claramente o PJ é melhor."

Essa comparação ignora os custos ocultos do PJ e os benefícios que você recebe no CLT sem ver no holerite.

## O custo real do CLT (o que você recebe além do salário)

Para um salário de R$8.000 CLT, o custo total para a empresa e os benefícios para você incluem:

- FGTS: 8% = R$640/mês depositado (você recebe se demitido sem justa causa)
- 13º salário: R$8.000/12 = R$667/mês equivalente
- Férias + 1/3: R$8.000 × 1,33/12 = R$889/mês equivalente
- Plano de saúde: valor médio de R$500-800/mês pago pela empresa
- Vale refeição/alimentação: R$600-1.200/mês (varia muito)

**Total de benefícios adicionais:** ~R$3.000-4.000/mês em valor real

Portanto, R$8.000 CLT equivale a ~R$11.000-12.000 em custo total.

## O custo real do PJ

Para receber R$12.000 líquido como PJ, você precisa faturar mais e pagar:

- Impostos da empresa (Simples Nacional): 6-10% sobre o faturamento (~R$720-1.200/mês)
- INSS autônomo: 20% sobre até o teto (ou 11% com a DAS do Simples se incluído)
- Contador: R$200-500/mês
- Plano de saúde próprio: R$500-1.000/mês
- Provisão para férias e 13º (se você poupar o equivalente): R$1.500-2.000/mês

**Custo adicional PJ:** ~R$3.000-5.000/mês

## A fórmula simplificada

PJ vale a pena quando: Valor PJ − Custos PJ > Salário CLT + Valor dos benefícios CLT

**Regra prática:** Para ser equivalente a um CLT, o PJ geralmente precisa pagar 30-40% a mais bruto.

CLT R$8.000 → PJ equivalente: R$10.400–R$11.200 bruto mínimo.

Abaixo disso, você está perdendo na comparação com benefícios.`,
      },
      {
        id: '39-3',
        title: 'Negociando contrato PJ: o que é negociável',
        duration: '30 min',
        content: `# Negociando contrato PJ: o que é negociável

## Por que a empresa propõe PJ

Em geral, não é para te prejudicar — é porque:
1. Reduz encargos trabalhistas (economiza ~30-40% do custo CLT)
2. Dá mais flexibilidade para encerrar o contrato
3. Pode ser a estrutura natural da empresa (consultorias, startups enxutas)

Entendendo isso, você sabe o que tem para negociar: a economia que a empresa terá com você.

## O que negociar no contrato PJ

**1. Valor bruto suficiente para cobrir os custos**
Use o cálculo da lição anterior. Chegue com número fundamentado.

"Meu custo como PJ — impostos, contador, plano de saúde, provisão de férias e 13º — é de aproximadamente R$X. Para que a comparação seja justa com o CLT que me foi oferecido, o valor PJ precisaria ser de R$Y."

**2. Reajuste periódico garantido em contrato**
Como CLT tem pisos de convenção coletiva e INPC, o PJ precisa ter cláusula de reajuste. Proponha reajuste anual atrelado ao INPC ou ao acordo mútuo.

**3. Prazo de aviso para rescisão**
O contrato CLT tem aviso prévio legal. O PJ não tem, a menos que você negocie. Proponha prazo mínimo de 30-60 dias de aviso.

**4. Assistência com contador**
Algumas empresas oferecem isso. Vale pedir — poupa R$200-400/mês.

**5. Verba de home office / equipamento**
Se não há escritório, a empresa pode fornecer ou subsidiar equipamento e internet.

## O que não é negociável (cuidado jurídico)

Se há exclusividade, horário definido, subordinação e dependência econômica total de uma única empresa — na prática existe vínculo empregatício, independente de como está formalizado.

Isso é risco jurídico para o contratante. Se a empresa insiste em PJ nessas condições, saiba que há risco de reconhecimento de vínculo depois e que a empresa está assumindo esse risco — mas você também.`,
      },
      {
        id: '39-4',
        title: 'Gestão financeira para quem trabalha como PJ',
        duration: '30 min',
        content: `# Gestão financeira para quem trabalha como PJ

## O erro mais caro do PJ: não separar pessoa física de jurídica

O dinheiro da empresa entra na conta PJ. O que sobra depois dos impostos é o lucro — e é aí que você pode distribuir pro-labore ou dividendos. Misturar as contas é o erro número 1.

## A conta bancária PJ

Abra uma conta PJ separada da sua conta pessoal. Bancos digitais como Nubank, Mercado Pago e Inter têm conta PJ gratuita ou de baixo custo.

Todo faturamento entra nessa conta. Pagamento de impostos e despesas da empresa saem dessa conta. O que você "paga para si mesmo" (pro-labore ou distribuição de lucros) transfere para sua conta pessoal.

## Quanto guardar para impostos e obrigações

Essa é a maior dificuldade de quem começa. Você recebe o valor bruto e esquece que parte não é seu.

**Provisão recomendada (Simples Nacional, atividade de serviço):**
- Impostos (~8-10% do faturamento): separe antes de tudo
- INSS PJ (se não incluído no DAS): R$800-1.000/mês
- Contador: R$250-450/mês
- Reserva para férias + 13º equivalente: 16-17% do que você quer ter por mês
- Fundo de emergência maior (3-6 meses): PJ não tem seguro-desemprego

**Regra simplificada:** Separe 35-40% do faturamento bruto para obrigações. O restante é o que você efetivamente tem disponível.

## O pró-labore vs. distribuição de lucros

**Pró-labore:** Salário que o sócio paga a si mesmo. Incide INSS e IR pessoa física.

**Distribuição de lucros:** O que sobra depois de pagar os custos e impostos da empresa. Em muitos regimes é isento de IR para pessoa física — essa é a grande vantagem tributária do PJ para quem tem alta renda.

Converse com um contador sobre o mix ideal para a sua situação.`,
      },
      {
        id: '39-5',
        title: 'Quando voltar para CLT faz sentido',
        duration: '30 min',
        content: `# Quando voltar para CLT faz sentido

## PJ não é para sempre — e tudo bem

A decisão CLT/PJ não é permanente. Muitos profissionais alternam entre os regimes ao longo da carreira conforme a situação muda.

## Quando CLT volta a fazer sentido

**1. Você quer estabilidade e previsibilidade**
PJ tem risco de perda de contrato, sazonalidade, inadimplência de clientes. Se você está num momento de vida que exige previsibilidade (compra de imóvel, filho pequeno, cuidado de familiar), CLT oferece segurança que PJ não tem.

**2. O valor do CLT supera o PJ**
Considere: empresa pagando plano de saúde excelente, plano de carreira estruturado, bolsa de estudos, stock options ou participação nos lucros robusta. Se o pacote total CLT for competitivo, o PJ pode não valer a burocracia.

**3. Você quer crescer numa empresa específica**
Crescimento de carreira (promoções, gestão, exposição internacional) frequentemente só é acessível como CLT. PJ está fora das promoções internas e dos programas de desenvolvimento.

**4. A carga administrativa do PJ está pesando**
Contador, declarações, emissão de notas, gestão de fluxo de caixa irregular. Para quem não gosta de gestão administrativa, isso drena energia que poderia ir para o trabalho em si.

**5. Você quer acessar crédito imobiliário**
Bancos calculam renda disponível de PJ de forma mais conservadora para financiamento. CLT facilita comprovação de renda formal.

## Como calcular o ponto de equivalência antes de decidir

Antes de qualquer mudança, faça a conta completa:
- Qual é o custo total do pacote CLT (salário + todos os benefícios em reais)?
- Qual é a minha renda líquida real como PJ (depois de impostos, contador, benefícios próprios e provisões)?
- Qual é a diferença?
- Essa diferença justifica a maior complexidade e risco do PJ?

A resposta muda conforme a vida muda. Revise anualmente.`,
      },
    ],
  },
  {
    id: 40,
    title: 'Design de Carreira: Decisões Difíceis com Clareza',
    desc: 'Como tomar as decisões de carreira mais difíceis — aceitar ou recusar proposta, quando pedir demissão, como dizer não estrategicamente e construir trajetória não-linear com coerência.',
    duration: '2h 40min',
    icon: '🧭',
    isPro: true,
    color: { bg: 'bg-rose-50', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700', icon: 'bg-rose-600' },
    lessons: [
      {
        id: '40-1',
        title: 'O método de design thinking aplicado à carreira',
        duration: '30 min',
        content: `# O método de design thinking aplicado à carreira

## Por que decisões de carreira são tão difíceis

Não é por falta de opções — é por excesso de variáveis intangíveis, medo de arrependimento, e a pressão de que decisões de carreira são "irreversíveis."

Na prática, a maioria das decisões de carreira é mais reversível do que parece. E as poucas que não são merecem um processo de decisão mais estruturado.

## O framework de design thinking para carreira

Criado por Bill Burnett e Dave Evans em Stanford (livro: "Designing Your Life"), adapta o processo de design de produtos para decisões de vida e carreira.

### Princípio 1: Reframe o problema

A maioria das pessoas enquadra o problema errado: "Devo aceitar essa proposta?" quando o problema real é "O que eu quero que minha vida profissional me ofereça nos próximos 3 anos?"

Antes de qualquer decisão específica, defina o que você está tentando otimizar. Segurança? Crescimento? Aprendizado? Dinheiro? Autonomia? Impacto? Poucos conseguem ter tudo — o que você prioriza agora?

### Princípio 2: Prototipe antes de decidir

Em design de produto, você não lança o produto sem testar. Em carreira, a maioria decide sem nenhum teste.

**Protótipos de carreira possíveis:**
- Conversa exploratória com alguém que tem o cargo/vida que você considera
- Projeto freelance na área que você quer migrar
- Curso intensivo + projeto prático antes de comprometer totalmente
- Período sabático curto (2-4 semanas) para clareza

### Princípio 3: Construa planos paralelos

Em vez de um plano de carreira linear ("faço X, depois Y, depois Z"), construa três planos:

**Plano A:** A progressão natural do que você está fazendo agora.
**Plano B:** O que você faria se o Plano A ficasse indisponível.
**Plano C:** O que você faria se dinheiro e reputação não fossem preocupação.

Ter clareza dos três reduz o medo paralisante de tomar a decisão "errada".

### Princípio 4: Ação gera clareza (não o contrário)

A maioria espera ter clareza para agir. Mas clareza frequentemente só vem com ação. Fazer o próximo passo pequeno é mais valioso do que análise infinita.`,
      },
      {
        id: '40-2',
        title: 'Como avaliar propostas de emprego além do salário',
        duration: '35 min',
        content: `# Como avaliar propostas de emprego além do salário

## O viés da âncora salarial

Quando você recebe uma proposta, o número do salário âncora toda a avaliação. Mas salário é só um dos fatores que determinam se você vai estar bem nesse trabalho.

Profissionais que aceitam vagas quase que exclusivamente pelo salário costumam se arrepender nos primeiros 6 meses.

## O modelo de avaliação de 7 dimensões

Avalie cada proposta em 7 dimensões, de 1 a 10:

**1. Compensação total**
Não só salário: bônus, PLR, benefícios em valor real, equity, reajuste esperado. Calcule o pacote anual completo.

**2. Aprendizado e crescimento**
Você vai aprender coisas que te tornam mais valioso no mercado? O cargo te expõe a novas habilidades, setores ou perspectivas?

**3. Qualidade da liderança direta**
Seu gestor direto é o maior determinante da sua experiência. Você já conseguiu se reunir com ele? Que impressão teve? Pergunte sobre seu estilo de gestão.

**4. Missão e propósito da empresa**
Você acredita no que a empresa faz? Trabalhar para algo em que você não acredita gera conflito de valores que desgasta progressivamente.

**5. Cultura e ambiente de trabalho**
Como as pessoas se tratam? Qual é o ritmo esperado? O modelo de trabalho (remoto/presencial/híbrido) se encaixa na sua vida?

**6. Estabilidade e perspectiva da empresa**
Qual é a situação financeira? É uma empresa em crescimento ou em crise? Para startups: qual é a runway e a última rodada de captação?

**7. Fit com seu plano de carreira**
Esse cargo te aproxima ou te afasta de onde você quer estar em 5 anos?

## Como usar o modelo

Pontue cada dimensão de 1-10. Some. Compare propostas diferentes ou compare a nova proposta com o emprego atual.

Mas use com sabedoria: não é uma fórmula matemática — é uma forma de tornar explícitas as dimensões que o número do salário obscurece.

Qualquer nota abaixo de 5 em Qualidade da Liderança ou Aprendizado merece atenção especial, independente das outras notas.`,
      },
      {
        id: '40-3',
        title: 'Quando pedir demissão (e quando não pedir)',
        duration: '30 min',
        content: `# Quando pedir demissão (e quando não pedir)

## A decisão mais pessoal da carreira

Não há fórmula universal para quando pedir demissão. Há fatores a considerar e perguntas a se fazer com honestidade.

## Sinais de que provavelmente é hora

**1. Você não cresce há mais de 12-18 meses e o ambiente não mudará**
Se você está fazendo o mesmo trabalho, no mesmo nível, com o mesmo aprendizado (ou nenhum), e não há perspectiva realista de mudança — cada mês que passa é custo de oportunidade.

**2. Você perdeu o respeito pela empresa, pelo produto ou pela liderança**
Trabalhar intensamente por algo em que você não acredita é insustentável. Não é questão de ser fácil ou difícil — é questão de onde vai sua energia.

**3. A cultura está ativamente prejudicando sua saúde ou seus valores**
Não é desconforto normal (todo trabalho tem desconforto). É ambiente que te deixa pior — mais ansioso, mais cínico, mais esgotado — de forma sistemática.

**4. Você recebeu uma proposta significativamente melhor**
Significativamente melhor: não 5-10% de salário a mais. Melhor em múltiplas dimensões que importam para você agora.

## Sinais de que provavelmente não é hora

**1. Você está num momento de alta pressão temporária**
Lançamento de produto, virada de ano, reestruturação — períodos intensos passam. Decisões tomadas no pico de estresse raramente são as melhores.

**2. Você foge de um problema que vai te seguir**
Dificuldade com feedback? Conflito com colegas? Procrastinação? Se o problema está em você, vai aparecer no próximo lugar.

**3. Você não tem clareza sobre o que quer em vez**
"Quero sair" não é um plano. O que você quer ir em vez disso? Sem resposta, você pode trocar um problema por outro.

## O processo de pedir demissão com profissionalismo

- Avise com antecedência adequada (o que seu contrato exige, mais o que for honesto com o volume de trabalho pendente)
- Ofereça transição de conhecimento genuína
- Mantenha relacionamentos — o mercado é pequeno`,
      },
      {
        id: '40-4',
        title: 'Dizer não estrategicamente sem queimar pontes',
        duration: '25 min',
        content: `# Dizer não estrategicamente sem queimar pontes

## Por que dizer não é uma habilidade de carreira

Profissionais que não sabem dizer não acabam fazendo tudo mediocremente. Profissionais que sabem dizer não estrategicamente fazem menos coisas com mais qualidade — e são percebidos como mais confiáveis.

Paradoxalmente, dizer não às coisas certas aumenta sua credibilidade. Dizer sim para tudo a diminui.

## Quando dizer não

**Quando o pedido desvia das suas prioridades estabelecidas:** Você tem um conjunto de responsabilidades e projetos. Um pedido novo significa algo existente vai sofrer — seja explícito sobre isso.

**Quando você não tem capacidade de entregar bem:** Um sim que resulta em entrega ruim é pior do que um não honesto. A reputação de confiabilidade vem de comprometimentos que você cumpre, não de quantos você assume.

**Quando vai contra seus valores:** Seja ético, não ativo. "Não me sinto confortável com essa abordagem" é resposta legítima.

## Como dizer não sem queimar a relação

**A estrutura NIAN (Não + Impacto + Alternativa + Quando):**

"Não consigo assumir [X] agora [Não] porque estou com [Y] que vence em [prazo] e adicionando [X] comprometeria a qualidade de ambos [Impacto]. Posso assumir a partir de [data] [Quando] ou, se for urgente, posso fazer a parte [Z] agora e delegar o restante para [pessoa] [Alternativa]."

Essa estrutura mostra:
- Que você entendeu o pedido
- Que o problema é capacidade, não disposição
- Que você está pensando em solução, não apenas rejeitando

## Dizer não a gestores e líderes

Mais delicado, mas essencial para carreira sustentável.

A chave: nunca diga não sem oferecer alternativa e sem ser transparente sobre as trade-offs. "Se eu assumir [X], [Y] vai atrasar ou precisará ser delegado. Qual você prefere que eu priorize?"

Isso transfere a decisão para quem tem autoridade e evita que você seja o único responsável pela escolha.`,
      },
      {
        id: '40-5',
        title: 'Trajetórias não-lineares: coerência sem rigidez',
        duration: '40 min',
        content: `# Trajetórias não-lineares: coerência sem rigidez

## O mito da carreira linear

Existe a ideia de que uma carreira boa parece uma escada: você começa em baixo e vai subindo, um degrau por vez, até chegar ao topo. Qualquer desvio é "dar um passo atrás."

A realidade: a maioria dos profissionais que admira você tem uma trajetória que, vista de perto, tem zigue-zagues, apostas, mudanças de rota e momentos que "não fazem sentido" — até que fazem.

## O que torna uma trajetória não-linear coerente

Trajetória não-linear não é trajetória aleatória. A diferença é a narrativa de fio condutor — a explicação de como cada movimento contribuiu para quem você é hoje.

**Perguntas para encontrar o fio condutor da sua trajetória:**
- Qual é o tema que aparece em todos os seus trabalhos, mesmo que em áreas diferentes?
- Que habilidade você carregou de um lugar para o outro?
- O que aprendeu em cada experiência que informa como você trabalha hoje?

Mesmo uma mudança radical — de finanças para educação, de TI para marketing — pode ser narrada com coerência quando você explica o aprendizado transferível e a motivação genuína.

## Como apresentar trajetória não-linear em entrevistas

A pergunta "me fale sobre sua trajetória" é uma oportunidade de narrativa, não um pedido de autobiografia cronológica.

**Estrutura recomendada:**
1. O fio condutor (o tema que une tudo)
2. 2-3 experiências-chave com o que cada uma contribuiu
3. Como isso te torna a escolha certa para esse cargo agora

Exemplo: "Minha carreira tem um fio condutor de resolução de problemas complexos com times multidisciplinares. Em marketing, aprendi a entender o cliente. Em produto, aprendi a traduzir isso em solução. Em operações, aprendi a escalar. Esse cargo é onde essas três perspectivas convergem de uma forma que eu não via antes."

## Quando fazer uma mudança que "não faz sentido"

Algumas mudanças vão parecer ilógicas para quem está de fora. Como avaliar se vale a pena:

- O aprendizado dessa mudança vai te tornar mais valioso em algum horizonte de 3-5 anos?
- Você consegue explicar a decisão de forma que soa como escolha deliberada, não fuga?
- Você está perseguindo algo, não apenas fugindo de algo?

Se sim para as três: vá. Trajetórias não-lineares construídas com intenção costumam ser mais ricas do que as lineares previsíveis.`,
      },
    ],
  },
]
