import { downloadAsDoc, openAsPrintPdf, downloadAsCsv } from './templateDownloads'

// ── Helpers ─────────────────────────────────────────────────────────────────
const ph = (text) => `<span class="placeholder">[${text}]</span>`

// ── Template 1: CV Clássico ──────────────────────────────────────────────────
function genCvClassico() {
  const html = `
<h1>${ph('SEU NOME COMPLETO')}</h1>
<p class="subtitle">${ph('Cargo Desejado')} &bull; ${ph('Cidade, Estado')}</p>
<p class="contact">${ph('email@exemplo.com')} &bull; ${ph('(11) 99999-9999')} &bull; linkedin.com/in/${ph('seuperfil')} &bull; ${ph('github.com/seuperfil')}</p>

<h2>Resumo Profissional</h2>
<p>${ph('Profissional de [área] com X anos de experiência em [especialidade]. Histórico comprovado de [resultado principal]. Especialista em [tecnologia/método] aplicado a [contexto]. Busco oportunidade em [tipo de empresa/cargo] para contribuir com [valor específico].')}</p>

<h2>Experiência Profissional</h2>

<h3><span class="company">${ph('Nome da Empresa')}</span> <span class="date">${ph('Jan 2022')} – Presente</span></h3>
<p><em>${ph('Cargo/Título')}</em> &bull; ${ph('Cidade, UF')}</p>
<ul>
  <li>Liderou ${ph('iniciativa/projeto')} que resultou em ${ph('resultado mensurável, ex: 35% de aumento de conversão')}</li>
  <li>Desenvolveu ${ph('produto/processo/estratégia')} impactando ${ph('número de pessoas/clientes/usuários')}</li>
  <li>Reduziu ${ph('custo/tempo/erro')} em ${ph('X%')} através de ${ph('método/ferramenta/iniciativa')}</li>
</ul>

<h3><span class="company">${ph('Nome da Empresa Anterior')}</span> <span class="date">${ph('Mar 2019')} – ${ph('Dez 2021')}</span></h3>
<p><em>${ph('Cargo/Título')}</em> &bull; ${ph('Cidade, UF')}</p>
<ul>
  <li>Gerenciou ${ph('equipe/projeto/processo')} com ${ph('orçamento/escala/contexto')}</li>
  <li>Implementou ${ph('solução/ferramenta')} aumentando ${ph('métrica')} em ${ph('X%')}</li>
  <li>Colaborou com ${ph('times/áreas')} para ${ph('entrega/resultado')}</li>
</ul>

<h2>Educação</h2>

<h3><span class="company">${ph('Universidade / Faculdade')}</span> <span class="date">${ph('2015')} – ${ph('2019')}</span></h3>
<p>${ph('Bacharel / MBA / Especialização')} em ${ph('Curso')}</p>

<h3><span class="company">${ph('Instituição de Curso')}</span> <span class="date">${ph('2021')}</span></h3>
<p>${ph('Certificação: Nome do Certificado (ex: AWS Solutions Architect, Google Analytics, etc.)')}</p>

<h2>Competências</h2>
<table>
  <tr>
    <td><strong>Técnicas</strong><br>${ph('Ferramenta 1, Ferramenta 2, Ferramenta 3, Linguagem, Plataforma')}</td>
    <td><strong>Gestão & Metodologias</strong><br>${ph('Agile/Scrum, OKRs, Excel avançado, Power BI, Análise de dados')}</td>
  </tr>
  <tr>
    <td><strong>Comportamentais</strong><br>${ph('Liderança, comunicação assertiva, gestão de conflitos, pensamento analítico')}</td>
    <td><strong>Idiomas</strong><br>${ph('Português (nativo) &bull; Inglês (avançado/C1) &bull; Espanhol (intermediário/B1)')}</td>
  </tr>
</table>

<div class="note">💡 <strong>Dica JobJump:</strong> Substitua todos os campos ${ph('em cinza')} pelos seus dados reais. Use verbos de ação no passado (liderou, desenvolveu, implementou) e sempre inclua resultados mensuráveis. Salve como .docx após editar.</div>`
  downloadAsDoc('CV_Classico_JobJump.doc', html)
}

// ── Template 2: CV Moderno ───────────────────────────────────────────────────
function genCvModerno() {
  const html = `
<table style="border:none; width:100%;">
  <tr>
    <td style="width:65%; border:none; padding-right:20pt; vertical-align:top;">
      <h1 style="font-size:24pt;">${ph('SEU NOME')}</h1>
      <p class="subtitle" style="font-size:12pt; font-weight:bold; color:#3b82f6;">${ph('Cargo / Especialidade')}</p>
      <p class="contact">${ph('email@exemplo.com')} &bull; ${ph('(11) 99999-9999')}<br>
         linkedin.com/in/${ph('seuperfil')} &bull; ${ph('portfólio / github')}</p>

      <h2>Sobre Mim</h2>
      <p>${ph('Em 3-4 linhas: quem você é, sua especialidade, maior realização e o que busca. Seja específico e evite clichês como "profissional dinâmico e proativo".')}</p>

      <h2>Experiência</h2>
      <h3>${ph('Empresa Atual')} <span class="date">${ph('2022')} – Presente</span></h3>
      <p style="color:#3b82f6; font-weight:bold;">${ph('Cargo')}</p>
      <ul>
        <li>${ph('Resultado 1 com número: aumentou X em Y%')}</li>
        <li>${ph('Resultado 2 com número: reduziu X em Y dias')}</li>
        <li>${ph('Resultado 3: liderou equipe de X pessoas, entregando Y')}</li>
      </ul>
      <h3>${ph('Empresa Anterior')} <span class="date">${ph('2019')} – ${ph('2022')}</span></h3>
      <p style="color:#3b82f6; font-weight:bold;">${ph('Cargo')}</p>
      <ul>
        <li>${ph('Resultado 1')}</li>
        <li>${ph('Resultado 2')}</li>
      </ul>

      <h2>Educação</h2>
      <p><strong>${ph('Curso')}</strong> — ${ph('Universidade')}, ${ph('ano')}<br>
         ${ph('Certificação relevante')} — ${ph('Instituição')}, ${ph('ano')}</p>

    </td>
    <td style="width:35%; border:none; background:#f1f5f9; border-radius:8pt; padding:16pt; vertical-align:top;">

      <h2 style="font-size:10pt;">COMPETÊNCIAS TÉCNICAS</h2>
      <p style="font-size:10pt;">${ph('Ferramenta/Linguagem 1')}<br>${ph('Ferramenta/Linguagem 2')}<br>${ph('Ferramenta/Linguagem 3')}<br>${ph('Plataforma/Framework 4')}<br>${ph('Ferramenta de análise 5')}</p>

      <h2 style="font-size:10pt;">SOFT SKILLS</h2>
      <p style="font-size:10pt;">${ph('Liderança de equipes')}<br>${ph('Comunicação estratégica')}<br>${ph('Pensamento analítico')}<br>${ph('Gestão de projetos')}</p>

      <h2 style="font-size:10pt;">IDIOMAS</h2>
      <p style="font-size:10pt;"><strong>Português</strong> — Nativo<br>
         <strong>Inglês</strong> — ${ph('Avançado / C1')}<br>
         <strong>${ph('Espanhol')}</strong> — ${ph('Intermediário / B1')}</p>

      <h2 style="font-size:10pt;">PROJETOS / PORTFÓLIO</h2>
      <p style="font-size:10pt;">${ph('Nome do Projeto')}<br>
         <span style="font-size:9pt; color:#64748b;">${ph('github.com/repo ou link ao vivo')}</span></p>

      <h2 style="font-size:10pt;">CONTATO</h2>
      <p style="font-size:10pt;">${ph('Cidade, Estado')}<br>${ph('email@exemplo.com')}<br>${ph('(11) 99999-9999')}</p>
    </td>
  </tr>
</table>
<div class="note">💡 <strong>Dica JobJump:</strong> Este formato de duas colunas é ideal para áreas de tech, design, marketing e produto. Para cargos mais tradicionais (jurídico, bancário, governo), prefira o CV Clássico de uma coluna.</div>`
  downloadAsDoc('CV_Moderno_JobJump.doc', html)
}

// ── Template 3: CV Executivo ─────────────────────────────────────────────────
function genCvExecutivo() {
  const html = `
<h1>${ph('NOME COMPLETO')}</h1>
<p class="subtitle">${ph('Diretor / VP / C-Level')} | ${ph('Área de Especialização')} | ${ph('Cidade, UF')}</p>
<p class="contact">${ph('email@exemplo.com')} &bull; ${ph('(11) 99999-9999')} &bull; linkedin.com/in/${ph('seuperfil')}</p>

<h2>Perfil Executivo</h2>
<p>${ph('Executivo com X anos de experiência liderando [função] em empresas de [porte/setor]. Histórico de criação de valor em contextos de [crescimento/turnaround/expansão]. Expertise em [área 1], [área 2] e [área 3]. Responsável por P&L de R$XX milhões. Liderou equipes de até X pessoas em Y países.')}</p>

<h2>Principais Realizações</h2>
<ul>
  <li>🏆 <strong>${ph('Realizou resultado expressivo 1')}</strong>: ${ph('detalhe com contexto + número — ex: Liderou transformação digital que aumentou receita em R$50M em 18 meses')}</li>
  <li>🏆 <strong>${ph('Realizou resultado expressivo 2')}</strong>: ${ph('detalhe — ex: Estruturou operação em 3 novos países, atingindo 100k clientes em 24 meses')}</li>
  <li>🏆 <strong>${ph('Realizou resultado expressivo 3')}</strong>: ${ph('detalhe — ex: Reduziu custo operacional em 30% mantendo NPS acima de 70')}</li>
</ul>

<h2>Trajetória Profissional</h2>

<h3><span class="company">${ph('Empresa Atual (Porte / Setor)')}</span> <span class="date">${ph('2020')} – Presente</span></h3>
<p><strong>${ph('Diretor / VP / CEO')}</strong> — ${ph('Reporte ao CEO/Board. Responsável por P&L de R$X milhões, equipe de X pessoas.')}</p>
<ul>
  <li>${ph('Reestruturou [área/operação], resultando em [impacto quantificado]')}</li>
  <li>${ph('Liderou [iniciativa estratégica], entregando [resultado no prazo/acima da meta]')}</li>
  <li>${ph('Desenvolveu e reteve talentos: X promoções internas, turnover reduzido de X% para Y%')}</li>
</ul>

<h3><span class="company">${ph('Empresa Anterior (Porte / Setor)')}</span> <span class="date">${ph('2015')} – ${ph('2020')}</span></h3>
<p><strong>${ph('Gerente Sênior / Head de')}</strong></p>
<ul>
  <li>${ph('Resultado principal com números')}</li>
  <li>${ph('Resultado secundário com contexto')}</li>
</ul>

<h2>Conselho / Atuação Voluntária</h2>
<p>${ph('Membro do Conselho de Administração — Empresa X (2022–presente)')}<br>
   ${ph('Mentor — Programa Y, 10 executivos orientados em 2 anos')}</p>

<h2>Formação & Desenvolvimento</h2>
<table>
  <tr>
    <th>Formação</th>
    <th>Instituição</th>
    <th>Ano</th>
  </tr>
  <tr><td>${ph('MBA Executivo')}</td><td>${ph('FGV / INSEAD / Wharton')}</td><td>${ph('2018')}</td></tr>
  <tr><td>${ph('Graduação em Engenharia / Administração')}</td><td>${ph('USP / PUC / Unicamp')}</td><td>${ph('2010')}</td></tr>
</table>

<h2>Idiomas & Competências</h2>
<p><strong>Idiomas:</strong> Português (nativo), Inglês (${ph('fluente/C2')}), ${ph('Espanhol (avançado)')}<br>
<strong>Competências:</strong> ${ph('Liderança executiva, M&A, P&L, estratégia corporativa, transformação digital, gestão de crises')}</p>

<div class="note">💡 <strong>Dica JobJump:</strong> CVs executivos devem ter no máximo 2 páginas. Priorize resultados financeiros e de liderança mensuráveis. Para cargos de C-Level em empresas internacionais, considere uma versão em inglês.</div>`
  downloadAsDoc('CV_Executivo_JobJump.doc', html)
}

// ── Template 4: CV Transição ─────────────────────────────────────────────────
function genCvTransicao() {
  const html = `
<h1>${ph('SEU NOME COMPLETO')}</h1>
<p class="subtitle">${ph('Título na Nova Área — ex: Analista de Dados | Desenvolvedor Front-End | UX Designer')}</p>
<p class="contact">${ph('email@exemplo.com')} &bull; ${ph('(11) 99999-9999')} &bull; linkedin.com/in/${ph('seuperfil')} &bull; ${ph('portfólio/github')}</p>

<h2>Objetivo de Transição</h2>
<p>${ph('Profissional de [área anterior] em transição deliberada para [nova área]. Combino X anos de experiência em [contexto anterior] com formação recente em [curso/certificação da nova área] e [projeto prático]. Trago como diferencial [perspectiva cruzada única — ex: visão de negócio para soluções tech / entendimento de UX para desenvolvimento].')}</p>

<h2>Competências Transferíveis</h2>
<table>
  <tr>
    <th>Competências da área anterior que se aplicam diretamente</th>
    <th>Novas competências desenvolvidas</th>
  </tr>
  <tr>
    <td>
      • ${ph('Competência 1 — ex: Análise e interpretação de dados')}<br>
      • ${ph('Competência 2 — ex: Gestão de projetos e stakeholders')}<br>
      • ${ph('Competência 3 — ex: Comunicação com clientes/usuários')}<br>
      • ${ph('Competência 4 — ex: Resolução estruturada de problemas')}
    </td>
    <td>
      • ${ph('Skill 1 — ex: Python para análise de dados')}<br>
      • ${ph('Skill 2 — ex: SQL e modelagem de banco de dados')}<br>
      • ${ph('Skill 3 — ex: Tableau / Power BI')}<br>
      • ${ph('Skill 4 — ex: Machine Learning (curso)')}<br>
    </td>
  </tr>
</table>

<h2>Projetos na Nova Área</h2>
<h3>${ph('Nome do Projeto 1')} <span class="date">${ph('Mês')} ${ph('2024')}</span></h3>
<p><em>${ph('Tipo: Projeto pessoal / Freelance / Bootcamp / Open Source')}</em></p>
<ul>
  <li>${ph('O que foi construído e com quais tecnologias/métodos')}</li>
  <li>${ph('Resultado ou aprendizado específico')}</li>
  <li>Link: ${ph('github.com/seuprojeto ou portfólio.com/projeto')}</li>
</ul>

<h3>${ph('Nome do Projeto 2')} <span class="date">${ph('Mês')} ${ph('2024')}</span></h3>
<ul>
  <li>${ph('Descrição do projeto e tecnologias usadas')}</li>
  <li>${ph('Resultado ou impacto')}</li>
</ul>

<h2>Formação na Nova Área</h2>
<h3>${ph('Certificação / Bootcamp / Pós-graduação')} <span class="date">${ph('2023')} – ${ph('2024')}</span></h3>
<p>${ph('Instituição: nome')} — ${ph('Carga horária ou duração')}</p>
<p>Tópicos: ${ph('Python, SQL, Machine Learning, Visualização de Dados')} (ou o que for relevante)</p>

<h2>Experiência Anterior (Recontextualizada)</h2>
<h3><span class="company">${ph('Empresa')}</span> <span class="date">${ph('2019')} – ${ph('2023')}</span></h3>
<p><em>${ph('Cargo na área anterior')}</em></p>
<ul>
  <li>${ph('Resultado relevante 1 — destaque o que é transferível para a nova área')}</li>
  <li>${ph('Resultado relevante 2 — mencione se usou dados, lógica, sistemas, etc.')}</li>
</ul>

<h2>Educação</h2>
<p>${ph('Graduação em [curso anterior]')} — ${ph('Universidade')}, ${ph('ano')}</p>

<h2>Idiomas</h2>
<p>Português (nativo) &bull; Inglês (${ph('nível')}) &bull; ${ph('outro idioma se houver')}</p>

<div class="note">💡 <strong>Dica JobJump:</strong> O CV híbrido coloca COMPETÊNCIAS ANTES da experiência cronológica — isso é intencional. Você quer que o recrutador veja que você tem as skills necessárias antes de ver que veio de outra área. Inclua sempre projetos concretos: eles provam que a transição já começou.</div>`
  downloadAsDoc('CV_Transicao_JobJump.doc', html)
}

// ── Template 5: Carta de Motivação ──────────────────────────────────────────
function genCartaMotivacao() {
  const html = `
<p>${ph('Cidade')}, ${new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
<br>
<p><strong>${ph('Nome do Recrutador / Responsável pela Vaga')}</strong><br>
${ph('Cargo do Recrutador')}<br>
${ph('Nome da Empresa')}<br>
${ph('Cidade, UF')}</p>
<br>
<p><strong>Ref: Candidatura para ${ph('Nome do Cargo')}</strong></p>
<br>

<p>${ph('Prezado(a) [Nome]')} / Prezada equipe de ${ph('[Empresa]')},</p>
<br>

<p><strong>[Parágrafo 1 — GANCHO: por que você + por que esta empresa]</strong><br>
${ph('Candidato-me à vaga de [Cargo] com entusiasmo genuíno — não como mais uma candidatura, mas como uma escolha deliberada. Acompanho [empresa] há [tempo] e admiro especificamente [algo concreto: produto, iniciativa, cultura, crescimento]. Acredito que meu perfil em [especialidade] complementa diretamente o que vi na descrição da vaga.')}</p>
<br>

<p><strong>[Parágrafo 2 — PROVA: sua realização mais relevante]</strong><br>
${ph('Nos últimos X anos, trabalhei em [empresa/contexto] onde [descreva o resultado mais relevante para ESTA vaga — com números]. Por exemplo: "Liderei a migração do sistema de CRM, reduzindo o tempo de atendimento em 40% e aumentando a satisfação do cliente de 7,2 para 8,9 (NPS)." Use o formato: ação + contexto + resultado mensurável.')}</p>
<br>

<p><strong>[Parágrafo 3 — FIT: por que você e a empresa são perfeitos um para o outro]</strong><br>
${ph('O que me atrai na [empresa] é [algo específico: missão, produto, desafio técnico, cultura de inovação, impacto]. Esse tipo de ambiente — onde [descreva] — é exatamente onde consigo entregar o meu melhor. Tenho experiência com [competência relevante à vaga] e estou animado com a possibilidade de [contribuição específica].')}</p>
<br>

<p><strong>[Parágrafo 4 — CTA: próximo passo]</strong><br>
${ph('Agradeço o tempo dedicado à leitura. Tenho disponibilidade para uma conversa a qualquer momento e posso me adaptar à sua agenda. Meu telefone é [número] e estou disponível por LinkedIn ou email. Aguardo com expectativa a possibilidade de contribuir com [empresa].')}</p>
<br>

<p>Atenciosamente,</p>
<br>
<p><strong>${ph('SEU NOME COMPLETO')}</strong><br>
${ph('email@exemplo.com')} &bull; ${ph('(11) 99999-9999')}<br>
linkedin.com/in/${ph('seuperfil')}</p>
<br>
<div class="note">💡 <strong>Estrutura ABCD JobJump:</strong> A = Atenção (gancho), B = Benefício (o que você entrega), C = Confiança (prova com números), D = Direção (CTA claro). Mantenha em no máximo 1 página. Personalize CADA carta — copiar e colar sem alterar é o erro mais comum.</div>`
  downloadAsDoc('Carta_Motivacao_JobJump.doc', html)
}

// ── Template 6: Email de Candidatura ────────────────────────────────────────
function genEmailCandidatura() {
  const html = `
<h2>Como usar este template</h2>
<p>Este documento contém o template completo para o email de candidatura — do assunto ao corpo e assinatura.</p>

<h2>Assunto do Email</h2>
<div class="script-box">
  <strong>Opção 1 (vaga específica):</strong><br>
  Candidatura — ${ph('Analista de Marketing Sênior')} | ${ph('Seu Nome')}<br><br>
  <strong>Opção 2 (com referência/número da vaga):</strong><br>
  Candidatura ${ph('#REF-1234')} — ${ph('Desenvolvedor Full Stack')} | ${ph('Seu Nome')}<br><br>
  <strong>Opção 3 (espontânea):</strong><br>
  Candidatura Espontânea — ${ph('UX Designer')} | ${ph('Seu Nome')}
</div>

<h2>Corpo do Email</h2>
<div class="script-box">
<p>Olá ${ph('[Nome do Recrutador]')},</p>

<p>Vi a vaga de ${ph('[Cargo]')} no ${ph('[LinkedIn / site da empresa / Indeed]')} e candidato-me porque ${ph('[motivo específico relacionado à empresa ou vaga — não genérico]')}.</p>

<p>Nos últimos ${ph('[X anos]')}, trabalho em ${ph('[área/empresa]')} onde ${ph('[resultado relevante para a vaga — com número sempre que possível. Ex: "aumentei a taxa de conversão em 25%" ou "liderei equipe de 8 pessoas entregando projeto 2 semanas antes do prazo"]')}. Essa experiência está diretamente alinhada com ${ph('[requisito específico da vaga que você viu na descrição]')}.</p>

<p>${ph('[Frase curta sobre por que ESSA empresa — montre que pesquisou: mencione produto, crescimento recente, cultura, missão]')}</p>

<p>Estou disponível para uma conversa a qualquer momento. Adapto-me à sua agenda.<br>
Meu telefone: ${ph('(11) 99999-9999')}.</p>

<p>Obrigado pelo tempo,</p>
</div>

<h2>Assinatura Profissional</h2>
<div class="script-box">
${ph('Seu Nome Completo')}<br>
${ph('Cargo Atual ou Área de Especialização')}<br>
📧 ${ph('email@exemplo.com')}<br>
📱 ${ph('(11) 99999-9999')}<br>
🔗 linkedin.com/in/${ph('seuperfil')}<br>
${ph('🌐 portfólio.com ou github.com/seuperfil (se relevante)')}
</div>

<h2>Checklist antes de enviar</h2>
<table>
  <tr><td>☐</td><td>CV em PDF com texto selecionável (não imagem)</td></tr>
  <tr><td>☐</td><td>Nome do arquivo: CV_SeuNome_Cargo.pdf</td></tr>
  <tr><td>☐</td><td>Assunto do email preenchido (nunca vazio)</td></tr>
  <tr><td>☐</td><td>Nome do recrutador/empresa correto no email</td></tr>
  <tr><td>☐</td><td>Resultado específico mencionado (com número)</td></tr>
  <tr><td>☐</td><td>Motivo específico pelo qual se candidata (não "busco crescimento")</td></tr>
  <tr><td>☐</td><td>Leu o email em voz alta para checar fluência e erros</td></tr>
  <tr><td>☐</td><td>Testou o link do portfólio/GitHub se incluiu</td></tr>
</table>

<div class="note">💡 <strong>Dica JobJump:</strong> O email de candidatura NÃO deve ser só "Segue em anexo meu CV." Isso garante que você seja ignorado. O email É a carta de motivação — só que mais curto e direto. Máximo 200 palavras no corpo.</div>`
  downloadAsDoc('Email_Candidatura_JobJump.doc', html)
}

// ── Template 7: Follow-up ────────────────────────────────────────────────────
function genFollowup() {
  const html = `
<h2>3 Templates de Follow-up para Diferentes Momentos</h2>
<p>O follow-up estratégico diferencia 80% dos candidatos que nunca o fazem. Use os templates abaixo adaptando para cada situação.</p>

<h3>Template 1 — Follow-up após candidatura (3-5 dias úteis depois)</h3>
<p><strong>Assunto:</strong> Re: Candidatura — ${ph('[Cargo]')} | ${ph('[Seu Nome]')}</p>
<div class="script-box">
<p>Olá ${ph('[Nome do Recrutador]')},</p>
<p>Enviei minha candidatura para a vaga de ${ph('[Cargo]')} em ${ph('[data de envio]')} e queria confirmar que chegou corretamente.</p>
<p>Continuo muito interessado na oportunidade — especialmente ${ph('[mencione algo específico que reforça seu interesse: um produto, desafio ou iniciativa da empresa]')}.</p>
<p>Fico à disposição para qualquer informação adicional ou para uma conversa sempre que for conveniente para você.</p>
<p>Obrigado,<br>${ph('[Seu Nome]')}</p>
</div>

<hr>

<h3>Template 2 — Follow-up após entrevista (24-48h depois)</h3>
<p><strong>Assunto:</strong> Obrigado pela conversa — ${ph('[Cargo]')} | ${ph('[Seu Nome]')}</p>
<div class="script-box">
<p>Olá ${ph('[Nome]')},</p>
<p>Obrigado pelo tempo e pela conversa de ${ph('[ontem / dia X]')}. Saí da reunião ainda mais animado com a oportunidade.</p>
<p>${ph('[Mencione algo específico que discutiram — ex: "A forma como vocês estão abordando o desafio de escalabilidade do produto me fez pensar em [algo relevante]" — isso prova que você estava presente e engajado]')}.</p>
<p>Reforço meu interesse na posição e fico à espera dos próximos passos. Se precisar de qualquer material adicional ou referência, é só pedir.</p>
<p>Atenciosamente,<br>${ph('[Seu Nome]')}<br>${ph('(11) 99999-9999')}</p>
</div>

<hr>

<h3>Template 3 — Follow-up final (2 semanas sem retorno após entrevista)</h3>
<p><strong>Assunto:</strong> Atualização sobre processo — ${ph('[Cargo]')} | ${ph('[Seu Nome]')}</p>
<div class="script-box">
<p>Olá ${ph('[Nome]')},</p>
<p>Sei que processos seletivos têm muitas etapas e a agenda está sempre apertada. Queria fazer um último contato para saber se há novidades sobre a posição de ${ph('[Cargo]')}, com entrevista realizada em ${ph('[data]')}.</p>
<p>Ainda tenho grande interesse na oportunidade. Se o processo tomou outro rumo, agradeço imensamente se puder me informar — e fico feliz em ficar em sua base de contatos para futuras oportunidades.</p>
<p>Obrigado pela atenção,<br>${ph('[Seu Nome]')}<br>${ph('email@exemplo.com')} | ${ph('(11) 99999-9999')}</p>
</div>

<h2>Regras de Ouro do Follow-up</h2>
<table>
  <tr><th>Situação</th><th>Prazo ideal</th><th>Canal preferido</th></tr>
  <tr><td>Após candidatura online</td><td>3-5 dias úteis</td><td>Email ou LinkedIn</td></tr>
  <tr><td>Após entrevista</td><td>24-48 horas</td><td>Email (obrigatório)</td></tr>
  <tr><td>Sem retorno 2 semanas</td><td>Imediatamente</td><td>Email com CC ao recrutador</td></tr>
  <tr><td>Máximo de follow-ups</td><td colspan="2">2 follow-ups por processo — mais do que isso é intrusivo</td></tr>
</table>

<div class="note">💡 <strong>Dica JobJump:</strong> Nunca pergunte "já tomaram uma decisão?" — pergunta se há algo mais que podes fornecer. Mantenha um registro de quando enviou cada follow-up para não duplicar.</div>`
  downloadAsDoc('Followup_Candidatura_JobJump.doc', html)
}

// ── Template 8: Guia de Entrevista (PDF) ────────────────────────────────────
function genGuiaEntrevista() {
  const html = `
<div class="nj-header">
  <div class="nj-logo">JJ</div>
  <div>
    <h1>Guia Completo de Preparação para Entrevistas</h1>
    <p>Checklist + Método STAR + Perguntas Inteligentes | JobJump</p>
  </div>
</div>

<h2>✅ Checklist Pré-Entrevista (48h antes)</h2>
<h3>Pesquisa da empresa</h3>
<div class="check-row"><span class="check">□</span> Site oficial: missão, produtos/serviços, público-alvo</div>
<div class="check-row"><span class="check">□</span> Notícias recentes (Google: "[empresa] site:folha.uol.com.br" ou similar)</div>
<div class="check-row"><span class="check">□</span> LinkedIn da empresa: tamanho, crescimento, cultura</div>
<div class="check-row"><span class="check">□</span> Glassdoor: reviews, processo seletivo, perguntas feitas</div>
<div class="check-row"><span class="check">□</span> Produto/serviço testado pessoalmente (se acessível)</div>

<h3>Pesquisa dos entrevistadores</h3>
<div class="check-row"><span class="check">□</span> Nome(s) dos entrevistadores no LinkedIn</div>
<div class="check-row"><span class="check">□</span> Cargo e histórico profissional</div>
<div class="check-row"><span class="check">□</span> Publicações, projetos ou interesses públicos</div>

<h3>Preparação das respostas</h3>
<div class="check-row"><span class="check">□</span> Self-introduction de 2 min treinada em voz alta</div>
<div class="check-row"><span class="check">□</span> 5 situações STAR preparadas (veja abaixo)</div>
<div class="check-row"><span class="check">□</span> Maior realização com números</div>
<div class="check-row"><span class="check">□</span> Maior fraqueza + o que estou fazendo para melhorar</div>
<div class="check-row"><span class="check">□</span> Por que esta empresa? (resposta específica, não genérica)</div>
<div class="check-row"><span class="check">□</span> Pretensão salarial: pesquisei o mercado (ver Módulo 6)</div>

<h3>Logística (presencial)</h3>
<div class="check-row"><span class="check">□</span> Endereço confirmado e rota testada no dia anterior</div>
<div class="check-row"><span class="check">□</span> Chegada planejada com 15-20 min de antecedência</div>
<div class="check-row"><span class="check">□</span> Roupa definida e separada</div>
<div class="check-row"><span class="check">□</span> Cópias do CV impressas (3x)</div>

<h3>Logística (online)</h3>
<div class="check-row"><span class="check">□</span> Câmera e microfone testados</div>
<div class="check-row"><span class="check">□</span> Internet estável (cabo > WiFi)</div>
<div class="check-row"><span class="check">□</span> Fundo: parede lisa ou virtual profissional</div>
<div class="check-row"><span class="check">□</span> Iluminação: luz na frente do rosto, não atrás</div>
<div class="check-row"><span class="check">□</span> Notificações do celular e computador desativadas</div>

<h2>⭐ Fichas de Preparação STAR</h2>
<p>Prepare 5 situações usando o método STAR. Use uma ficha por situação.</p>

<table>
  <tr>
    <th colspan="2">SITUAÇÃO 1: _________________________________________</th>
  </tr>
  <tr>
    <td style="width:20%; font-weight:bold; color:#3b82f6;">S — Situação</td>
    <td><em>Qual era o contexto? Onde, quando, com quem?</em><br><br><br>&nbsp;</td>
  </tr>
  <tr>
    <td style="font-weight:bold; color:#3b82f6;">T — Tarefa</td>
    <td><em>Qual era SUA responsabilidade específica?</em><br><br><br>&nbsp;</td>
  </tr>
  <tr>
    <td style="font-weight:bold; color:#3b82f6;">A — Ação</td>
    <td><em>O que VOCÊ fez, passo a passo? (foque no "eu", não no "nós")</em><br><br><br>&nbsp;</td>
  </tr>
  <tr>
    <td style="font-weight:bold; color:#3b82f6;">R — Resultado</td>
    <td><em>Qual foi o resultado? Com número sempre que possível.</em><br><br><br>&nbsp;</td>
  </tr>
</table>

<p style="page-break-before: always;"></p>

<table>
  <tr>
    <th colspan="2">SITUAÇÃO 2: _________________________________________</th>
  </tr>
  <tr><td style="width:20%; font-weight:bold; color:#3b82f6;">S — Situação</td><td><br><br>&nbsp;</td></tr>
  <tr><td style="font-weight:bold; color:#3b82f6;">T — Tarefa</td><td><br><br>&nbsp;</td></tr>
  <tr><td style="font-weight:bold; color:#3b82f6;">A — Ação</td><td><br><br>&nbsp;</td></tr>
  <tr><td style="font-weight:bold; color:#3b82f6;">R — Resultado</td><td><br><br>&nbsp;</td></tr>
</table>

<table>
  <tr>
    <th colspan="2">SITUAÇÃO 3: _________________________________________</th>
  </tr>
  <tr><td style="width:20%; font-weight:bold; color:#3b82f6;">S — Situação</td><td><br><br>&nbsp;</td></tr>
  <tr><td style="font-weight:bold; color:#3b82f6;">T — Tarefa</td><td><br><br>&nbsp;</td></tr>
  <tr><td style="font-weight:bold; color:#3b82f6;">A — Ação</td><td><br><br>&nbsp;</td></tr>
  <tr><td style="font-weight:bold; color:#3b82f6;">R — Resultado</td><td><br><br>&nbsp;</td></tr>
</table>

<h2>💬 Perguntas Inteligentes para Fazer ao Entrevistador</h2>
<div class="tip">Nunca diga "Não tenho perguntas." Isso sinaliza falta de interesse. Prepare pelo menos 3.</div>
<ul>
  <li>Como é o sucesso nessa posição nos primeiros 90 dias?</li>
  <li>Qual é o maior desafio que a equipe enfrenta agora?</li>
  <li>Como as decisões são tomadas em [área relevante ao cargo]?</li>
  <li>O que você mais gosta de trabalhar aqui? (para entrevistador que é funcionário)</li>
  <li>Como você descreveria a cultura da equipe no dia a dia?</li>
  <li>Há oportunidades de crescimento ou mudança de função internamente?</li>
  <li>Quais são os próximos passos do processo seletivo?</li>
</ul>

<h2>🚩 Red Flags para Ficar Atento Durante a Entrevista</h2>
<ul>
  <li>Entrevistador não consegue descrever o escopo da função com clareza</li>
  <li>Alta rotatividade na posição sem explicação clara</li>
  <li>Pressão para dar resposta imediata sobre a oferta</li>
  <li>Negatividade excessiva sobre funcionários ou gestores anteriores</li>
  <li>Processo seletivo muito longo sem comunicação clara das etapas</li>
</ul>`
  openAsPrintPdf('Guia de Entrevista — JobJump', html)
}

// ── Template 9: Script de Negociação (PDF) ──────────────────────────────────
function genScriptNegociacao() {
  const html = `
<div class="nj-header">
  <div class="nj-logo">JJ</div>
  <div>
    <h1>Scripts de Negociação Salarial</h1>
    <p>5 cenários com scripts prontos para usar | JobJump — Módulo 6</p>
  </div>
</div>

<div class="tip">💡 Regra de ouro: quem dá o primeiro número em negociação está em desvantagem. Sempre tente fazer a empresa revelar o range primeiro.</div>

<h2>Cenário 1 — "Qual é sua pretensão salarial?" (antes de oferta)</h2>
<p><strong>Quando acontece:</strong> durante a triagem inicial ou entrevista, antes de qualquer oferta.</p>
<p><strong>Objetivo:</strong> não dar um número ainda — fazer a empresa revelar o orçamento.</p>
<div class="script-box">
  <div class="script-label">Script A (ideal)</div>
  "Antes de dar um número específico, eu adoraria entender melhor o escopo completo da função e os benefícios do pacote. Você consegue compartilhar o range que a empresa tem em mente para essa posição?"
</div>
<div class="script-box">
  <div class="script-label">Script B (se pressionado a dar um número)</div>
  "Baseado na minha pesquisa de mercado para essa função em [cidade/setor], estou considerando uma faixa de R$ ______ a R$ ______. É compatível com o que vocês têm?"
</div>
<div class="tip">Âncora no número mais alto da faixa. Se o mercado é R$8k-12k, diga "R$11k-13k" — você pode negociar para baixo, mas raramente para cima.</div>

<h2>Cenário 2 — Recebeu a oferta — primeira contraproposta</h2>
<p><strong>Quando acontece:</strong> empresa faz uma oferta. Você quer mais.</p>
<p><strong>Objetivo:</strong> pedir mais sem parecer ganancioso ou perder a oferta.</p>
<div class="script-box">
  <div class="script-label">Script — contraproposta fundamentada</div>
  "Fico muito feliz com a oferta e com o processo todo — estou genuinamente animado com a oportunidade na [empresa]. Minha pesquisa de mercado para essa função com esse nível de responsabilidade indica um range de R$ ______ a R$ ______. Há possibilidade de chegarmos a R$ ______?"
</div>
<div class="tip">Sempre fundamente com dados (pesquisa de mercado, Glassdoor, LinkedIn Salary), nunca com necessidades pessoais ("meu aluguel subiu").</div>

<h2>Cenário 3 — "Não temos margem no salário base"</h2>
<p><strong>Quando acontece:</strong> empresa diz que o salário é fixo mas você quer mais.</p>
<p><strong>Objetivo:</strong> negociar o pacote total quando o base não tem margem.</p>
<div class="script-box">
  <div class="script-label">Script — negociando benefícios</div>
  "Entendo perfeitamente que o salário base pode ter um limite. Ainda assim, quero ter certeza de que o pacote total faz sentido para ambos os lados. Há possibilidade de conversarmos sobre [escolha 2-3]: bônus por performance, revisão salarial em 6 meses em vez de 12, orçamento de home office, budget para cursos ou certificações, ou dias adicionais de férias?"
</div>

<h2>Cenário 4 — Você tem outra oferta</h2>
<p><strong>Quando acontece:</strong> você está em processo com outra empresa que fez oferta melhor.</p>
<p><strong>Objetivo:</strong> usar a outra oferta como alavanca sem parecer chantagista.</p>
<div class="script-box">
  <div class="script-label">Script — comunicando outra oferta com elegância</div>
  "Quero ser transparente com você porque tenho grande respeito por esse processo. Recebi uma oferta de outra empresa com prazo para [data]. O valor oferecido é de R$ ______. Minha preferência genuína é por vocês — o produto, a equipe e o desafio me atraem mais. Se houver como chegar perto de R$ ______, tomaria a decisão imediatamente."
</div>

<h2>Cenário 5 — Reajuste no emprego atual</h2>
<p><strong>Quando acontece:</strong> você quer negociar aumento com seu gestor atual.</p>
<p><strong>Objetivo:</strong> pedir aumento baseado em valor entregue e mercado.</p>
<div class="script-box">
  <div class="script-label">Script — pedindo aumento com evidências</div>
  "Gostaria de conversar sobre minha remuneração. Nos últimos [X meses], entreguei [resultado 1], [resultado 2] e [resultado 3], o que representa [impacto em % ou R$] para a empresa. Minha pesquisa de mercado indica que profissionais com esse nível de entrega e responsabilidade estão recebendo entre R$ ______ e R$ ______. Gostaria de chegar a R$ ______ — você consegue avaliar isso?"
</div>
<div class="tip">Agende essa conversa estrategicamente: após um projeto de sucesso, após avaliação positiva de desempenho, ou antes do ciclo orçamentário da empresa.</div>

<h2>Tabela de Referência: O que Negociar Além do Salário</h2>
<table>
  <tr><th>Item</th><th>Como pedir</th><th>Impacto estimado/mês</th></tr>
  <tr><td>Bônus por performance</td><td>"Quais são as métricas para bônus?"</td><td>Variável (5-30% do salário)</td></tr>
  <tr><td>Home office days</td><td>"Qual é a política atual de home office?"</td><td>R$200-600 (transporte)</td></tr>
  <tr><td>Budget de cursos</td><td>"Há orçamento anual para desenvolvimento?"</td><td>R$200-500/mês equivalente</td></tr>
  <tr><td>Revisão antecipada</td><td>"Podemos marcar revisão em 6 meses?"</td><td>Aceleração de carreira</td></tr>
  <tr><td>Plano de saúde superior</td><td>"Quais as opções de cobertura?"</td><td>R$300-800/mês equivalente</td></tr>
  <tr><td>Equipamento</td><td>"Há verba para setup de home office?"</td><td>R$5k-15k (único)</td></tr>
</table>`
  openAsPrintPdf('Scripts de Negociação Salarial — JobJump', html)
}

// ── Template 10: Script de Networking (PDF) ──────────────────────────────────
function genScriptNetworking() {
  const html = `
<div class="nj-header">
  <div class="nj-logo">JJ</div>
  <div>
    <h1>10 Scripts de Networking</h1>
    <p>Templates para diferentes situações | JobJump — Módulo 5</p>
  </div>
</div>

<div class="tip">💡 A regra fundamental: personalize sempre. Um template copiado literalmente soa como spam. Adapte ao contexto, à pessoa e ao que vocês têm em comum.</div>

<h2>Grupo 1 — Contato frio (Cold Outreach)</h2>

<h3>Script 1 — Profissional da área que você admira</h3>
<div class="script-box">
  <div class="script-label">LinkedIn — Pedido de conexão (300 caracteres)</div>
  "Olá [Nome], acompanho seu trabalho em [área/empresa] e admiro especialmente [algo específico — post, projeto, cargo]. Sou [quem você é em 1 linha]. Adoraria conectar e eventualmente aprender com sua perspectiva sobre [tópico]."
</div>

<h3>Script 2 — Após conectar: pedindo um café de 20 minutos</h3>
<div class="script-box">
  <div class="script-label">LinkedIn DM ou email</div>
  "Olá [Nome], obrigado por conectar! Estou [em transição para X / buscando entrar em Y / aprofundando conhecimento em Z] e sei que você tem experiência relevante nessa área.<br><br>
  Você estaria disponível para um café virtual de 20-30 minutos? Tenho 2-3 perguntas específicas sobre [tópico] e qualquer insight seu seria muito valioso.<br><br>
  Fica completamente à vontade para declinar se a agenda não permitir — e obrigado de qualquer forma!"
</div>

<h2>Grupo 2 — Rede morna (Warm Networking)</h2>

<h3>Script 3 — Ex-colega de trabalho (não se falavam há tempo)</h3>
<div class="script-box">
  <div class="script-label">WhatsApp ou LinkedIn</div>
  "Olá [Nome]! Quanto tempo. Vi que você está em [empresa/cargo] agora — parece incrível, parabéns!<br><br>
  Estou [buscando uma transição para X / em processo seletivo / começando a explorar oportunidades] e lembrei de você imediatamente porque trabalhamos juntos em [contexto] e sempre admirei sua visão sobre [algo].<br><br>
  Topa um café (virtual ou presencial) pra matar a saudade e eu te contar mais sobre o que estou buscando?"
</div>

<h3>Script 4 — Pedindo indicação/referência a alguém da rede</h3>
<div class="script-box">
  <div class="script-label">WhatsApp ou email</div>
  "Oi [Nome]! Estou candidatando para [cargo] na [empresa] e vi que você está conectado com [pessoa X] que trabalha lá.<br><br>
  Você toparia me apresentar brevemente? Não precisa ser uma indicação formal — só um 'ei, esse profissional é sério e está se candidatando para vocês' já ajuda muito.<br><br>
  Claro que entendo se não for confortável — e de qualquer forma agradeço muito!"
</div>

<h2>Grupo 3 — Após eventos e encontros</h2>

<h3>Script 5 — Após conhecer alguém num evento (LinkedIn)</h3>
<div class="script-box">
  <div class="script-label">LinkedIn — nas 24h após o evento</div>
  "Olá [Nome], foi ótimo te conhecer no [evento] hoje! Adorei a conversa sobre [tópico específico que discutiram]. Vou [aplicar / pensar mais sobre / pesquisar] o que você mencionou sobre [algo específico].<br><br>
  Ficamos conectados!"
</div>

<h3>Script 6 — Follow-up após café de networking</h3>
<div class="script-box">
  <div class="script-label">Email ou LinkedIn (24-48h depois)</div>
  "Olá [Nome], muito obrigado pelo tempo hoje! A conversa sobre [tópico] foi exatamente o que eu precisava ouvir, especialmente quando você mencionou [insight específico].<br><br>
  Vou [ação concreta que você vai tomar por causa da conversa]. Se precisar de [algo que você pode oferecer], estarei aqui.<br><br>
  Espero que possamos manter contato!"
</div>

<h2>Grupo 4 — Recrutadores e Headhunters</h2>

<h3>Script 7 — Abordagem a recrutador no LinkedIn</h3>
<div class="script-box">
  <div class="script-label">LinkedIn DM</div>
  "Olá [Nome], vi que você recruta para a área de [área] em empresas de [setor/porte]. Sou [cargo atual] com [X anos] de experiência em [especialidade], com histórico em [resultado relevante].<br><br>
  Estou explorando novas oportunidades em [tipo de empresa] para assumir [tipo de responsabilidade]. Você tem vagas em aberto que possam ser relevantes, ou posso entrar em sua base para futuras oportunidades?"
</div>

<h3>Script 8 — Resposta a mensagem de recrutador (com interesse)</h3>
<div class="script-box">
  <div class="script-label">LinkedIn ou email</div>
  "Olá [Nome], obrigado pelo contato! A oportunidade parece interessante. Tenho algumas perguntas antes de seguir em frente:<br>
  1. Qual é o nível do cargo e o range salarial?<br>
  2. A posição é presencial, híbrida ou remota?<br>
  3. Qual é a empresa? (Se puder compartilhar)<br><br>
  Com essas informações, consigo avaliar melhor o fit e confirmar se faz sentido avançarmos."
</div>

<h2>Grupo 5 — Candidatura espontânea via rede</h2>

<h3>Script 9 — Mensagem para funcionário da empresa que quer entrar</h3>
<div class="script-box">
  <div class="script-label">LinkedIn DM</div>
  "Olá [Nome], vi que você trabalha na [empresa] como [cargo]. Estou muito interessado em oportunidades nessa empresa — especialmente por [razão específica: produto, cultura, crescimento].<br><br>
  Não precisa fazer nada formalmente — estou só tentando entender melhor como é trabalhar lá e se há áreas que estejam contratando. Uma conversa de 15 min seria incrível se você tiver disponibilidade."
</div>

<h3>Script 10 — Pedindo feedback após rejeição</h3>
<div class="script-box">
  <div class="script-label">Email ao recrutador (após receber "não")</div>
  "Olá [Nome], obrigado pelo retorno. Fico feliz de saber o resultado, mesmo que não seja o que esperava.<br><br>
  Você estaria disposto a compartilhar o que poderia ter sido diferente da minha parte? Estou comprometido com meu desenvolvimento e qualquer feedback — mesmo breve — seria muito valioso.<br><br>
  De qualquer forma, obrigado pelo processo e pelo tempo. Espero que possamos nos cruzar novamente."
</div>`
  openAsPrintPdf('Scripts de Networking — JobJump', html)
}

// ── Template 11: Plano de Transição (PDF) ───────────────────────────────────
function genPlanoTransicao() {
  const html = `
<div class="nj-header">
  <div class="nj-logo">JJ</div>
  <div>
    <h1>Plano de Transição de Carreira — 90 Dias</h1>
    <p>Roadmap estruturado para mudar de área com sucesso | JobJump — Módulo 7</p>
  </div>
</div>

<h2>Fase 1 — Diagnóstico e Planejamento (Semanas 1-2)</h2>
<p>Antes de qualquer ação externa, clareza interna. Preencha esta seção.</p>

<table>
  <tr><th colspan="2">Minha Situação Atual</th></tr>
  <tr><td style="width:40%"><strong>Área atual:</strong></td><td>&nbsp;</td></tr>
  <tr><td><strong>Tempo na área:</strong></td><td>&nbsp;</td></tr>
  <tr><td><strong>Área-alvo:</strong></td><td>&nbsp;</td></tr>
  <tr><td><strong>Por que estou mudando:</strong></td><td>&nbsp;</td></tr>
  <tr><td><strong>O que levo da área atual (ativos):</strong></td><td>&nbsp;</td></tr>
  <tr><td><strong>O que falta aprender (gaps):</strong></td><td>&nbsp;</td></tr>
  <tr><td><strong>Prazo-alvo para primeiro emprego na nova área:</strong></td><td>&nbsp;</td></tr>
</table>

<h3>Análise de Gap de Competências</h3>
<table>
  <tr>
    <th>Competência exigida na nova área</th>
    <th>Meu nível atual (0-5)</th>
    <th>Forma de desenvolver</th>
    <th>Prazo</th>
  </tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
</table>

<h2>Fase 2 — Fundação (Semanas 3-6)</h2>
<table>
  <tr><th>Ação</th><th>Prazo</th><th>Feito?</th></tr>
  <tr><td>CV híbrido criado (template JobJump)</td><td>Semana 3</td><td>☐</td></tr>
  <tr><td>LinkedIn atualizado com nova área-alvo no título</td><td>Semana 3</td><td>☐</td></tr>
  <tr><td>1 projeto na nova área iniciado (pessoal ou freelance)</td><td>Semana 4</td><td>☐</td></tr>
  <tr><td>Lista de 15 empresas-alvo criada</td><td>Semana 4</td><td>☐</td></tr>
  <tr><td>Curso/certificação da área iniciado</td><td>Semana 4</td><td>☐</td></tr>
  <tr><td>10 conexões na nova área estabelecidas</td><td>Semana 5</td><td>☐</td></tr>
  <tr><td>2 cafés de networking realizados</td><td>Semana 6</td><td>☐</td></tr>
  <tr><td>1 post no LinkedIn sobre a transição publicado</td><td>Semana 6</td><td>☐</td></tr>
</table>

<h2>Fase 3 — Ativação (Semanas 7-10)</h2>
<table>
  <tr><th>Ação</th><th>Prazo</th><th>Feito?</th></tr>
  <tr><td>1º projeto na nova área concluído e no portfólio/GitHub</td><td>Semana 7</td><td>☐</td></tr>
  <tr><td>Primeiras candidaturas enviadas (5-10 vagas)</td><td>Semana 7</td><td>☐</td></tr>
  <tr><td>Certificação ou módulo do curso concluído</td><td>Semana 8</td><td>☐</td></tr>
  <tr><td>Candidatura espontânea para 2 empresas dos sonhos</td><td>Semana 8</td><td>☐</td></tr>
  <tr><td>Participou de 1 evento da nova área</td><td>Semana 9</td><td>☐</td></tr>
  <tr><td>25 conexões na nova área</td><td>Semana 9</td><td>☐</td></tr>
  <tr><td>2º projeto concluído e publicado</td><td>Semana 10</td><td>☐</td></tr>
  <tr><td>3 candidaturas com indicação de rede</td><td>Semana 10</td><td>☐</td></tr>
</table>

<h2>Fase 4 — Aceleração (Semanas 11-13)</h2>
<table>
  <tr><th>Ação</th><th>Prazo</th><th>Feito?</th></tr>
  <tr><td>30+ candidaturas enviadas no total</td><td>Semana 11</td><td>☐</td></tr>
  <tr><td>Preparação para entrevistas: 5 respostas STAR treinadas</td><td>Semana 11</td><td>☐</td></tr>
  <tr><td>Entrevista de prática com colega ou mentor</td><td>Semana 12</td><td>☐</td></tr>
  <tr><td>Follow-up em todas as candidaturas sem retorno</td><td>Semana 12</td><td>☐</td></tr>
  <tr><td>Portfólio com 2+ projetos completos e visível</td><td>Semana 13</td><td>☐</td></tr>
</table>

<h2>Rastreamento Semanal</h2>
<table>
  <tr>
    <th>Semana</th>
    <th>Candidaturas enviadas</th>
    <th>Respostas recebidas</th>
    <th>Entrevistas agendadas</th>
    <th>Conexões feitas</th>
    <th>Horas de estudo</th>
  </tr>
  <tr><td>1</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>2</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>3</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>4</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>5</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>6</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>7</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>8</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>9</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>10</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>11</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>12</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>13</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
</table>`
  openAsPrintPdf('Plano de Transição de Carreira — JobJump', html)
}

// ── Template 12: Rastreador CSV ──────────────────────────────────────────────
function genRastreador() {
  const headers = [
    'Empresa', 'Cargo', 'Fonte', 'Data de Envio', 'Status',
    'Próxima Ação', 'Data Próxima Ação', 'Contato (Nome)',
    'Contato (LinkedIn/Email)', 'Salário Estimado (R$)', 'Prioridade', 'Notas'
  ]
  const rows = [
    ['Nubank', 'Product Manager', 'LinkedIn', '2025-01-10', 'Triagem', 'Aguardar resposta', '2025-01-17', 'Ana Lima', 'linkedin.com/in/analima', '15000-18000', 'Alta', 'Apliquei referenciado por João Silva. Fit muito bom com produto financeiro.'],
    ['iFood', 'Data Analyst Sênior', 'Site da empresa', '2025-01-08', 'Entrevista Agendada', 'Preparar case de análise', '2025-01-14', 'Carlos Mendes (Recrutador)', 'cmendes@ifood.com.br', '12000-15000', 'Alta', 'Entrevista técnica com case de SQL agendada para 14/01 às 14h.'],
    ['Itaú BBA', 'Analista de Estratégia', 'Glassdoor', '2025-01-05', 'Candidatura Enviada', 'Follow-up por email', '2025-01-12', '', '', '10000-13000', 'Média', 'Sem resposta ainda. Verificar se é ATS ou RH.'],
    ['Startup X', 'Head de Marketing', 'Indicação', '2025-01-03', 'Proposta Recebida', 'Avaliar e negociar', '2025-01-11', 'Pedro Rocha (CEO)', 'pedro@startupx.com', '14000', 'Alta', 'Oferta de R$14k + equity. Negociar para R$15.5k + benefícios.'],
    ['[Nome da Empresa]', '[Cargo]', '[LinkedIn/Indeed/Indicação/Site]', '[AAAA-MM-DD]', '[Em análise/Triagem/Entrevista/Proposta/Recusado]', '[Ação necessária]', '[AAAA-MM-DD]', '[Nome do Contato]', '[Email ou LinkedIn]', '[Faixa]', '[Alta/Média/Baixa]', '[Suas notas]'],
  ]
  downloadAsCsv('Rastreador_Candidaturas_JobJump.csv', headers, rows)
}

// ── Mapa de IDs → funções ────────────────────────────────────────────────────
export const TEMPLATE_GENERATORS = {
  1: genCvClassico,
  2: genCvModerno,
  3: genCvExecutivo,
  4: genCvTransicao,
  5: genCartaMotivacao,
  6: genEmailCandidatura,
  7: genFollowup,
  8: genGuiaEntrevista,
  9: genScriptNegociacao,
  10: genScriptNetworking,
  11: genPlanoTransicao,
  12: genRastreador,
}
