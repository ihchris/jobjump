const Section = ({ id, title, children }) => (
  <section id={id} className="mb-10">
    <h2 className="text-lg font-black text-[#1e3a5f] mb-3 pb-2 border-b border-slate-200">{title}</h2>
    <div className="text-slate-600 text-sm leading-relaxed space-y-3">{children}</div>
  </section>
)

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-xl border border-slate-200 my-2">
    <table className="w-full text-xs">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          {headers.map((h) => (
            <th key={h} className="text-left px-3 py-2 font-bold text-slate-700">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-slate-100 last:border-0">
            {row.map((cell, j) => (
              <td key={j} className="px-3 py-2 text-slate-600 align-top">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const toc = [
  ['1', 'Identificação do Responsável pelo Tratamento'],
  ['2', 'Definições'],
  ['3', 'Dados Pessoais que Recolhemos'],
  ['4', 'Armazenamento Local (localStorage)'],
  ['5', 'Finalidades e Bases Legais do Tratamento'],
  ['6', 'Subprocessadores e Partilha com Terceiros'],
  ['7', 'Transferências Internacionais de Dados'],
  ['8', 'Prazos de Retenção'],
  ['9', 'Segurança e Proteção de Dados'],
  ['10', 'Cookies e Tecnologias de Rastreamento'],
  ['11', 'Direitos dos Titulares de Dados'],
  ['12', 'Dados de Menores de Idade'],
  ['13', 'Consentimento Informado'],
  ['14', 'Reclamações e Autoridades de Supervisão'],
  ['15', 'Alterações a Esta Política'],
  ['16', 'Contato e Encarregado de Proteção de Dados'],
]

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="JobJump" className="h-7 w-auto" />
          </div>
          <button
            onClick={onBack}
            className="text-sm text-slate-500 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors"
          >
            ← Voltar
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-10">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Índice</p>
              <nav className="space-y-1">
                {toc.map(([num, label]) => (
                  <a
                    key={num}
                    href={`#pp${num}`}
                    className="block text-xs text-slate-500 hover:text-blue-600 py-1 pl-2 border-l-2 border-transparent hover:border-blue-400 transition-all"
                  >
                    <span className="text-slate-400 mr-1">{num}.</span>{label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-black text-[#1e3a5f] mb-2">Política de Privacidade</h1>
              <p className="text-sm text-slate-400">
                Última atualização: 27 de junho de 2025 · Versão 1.0
              </p>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 text-xs leading-relaxed">
                <strong>O seu direito à privacidade é uma prioridade para nós.</strong> Este documento descreve de forma clara e transparente quais dados pessoais a JobJump recolhe, porque os recolhe, como os protege e quais são os seus direitos. Leia com atenção antes de criar uma conta ou utilizar a plataforma.
              </div>
            </div>

            {/* ── 1 ── */}
            <Section id="pp1" title="1. Identificação do Responsável pelo Tratamento">
              <p>
                O responsável pelo tratamento dos dados pessoais recolhidos por meio desta Plataforma é:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm space-y-1">
                <p><strong>JobJump</strong></p>
                <p>Website: <span className="text-blue-700">www.jobjump.com.br</span></p>
                <p>E-mail de privacidade: <span className="text-blue-700">privacidade@jobjump.com.br</span></p>
                <p>E-mail de suporte: <span className="text-blue-700">suporte@jobjump.com.br</span></p>
              </div>
              <p>
                Esta Política de Privacidade é aplicável a todos os utilizadores da plataforma JobJump, disponível em <strong>www.jobjump.com.br</strong>, independentemente do país de residência. A JobJump opera principalmente no Brasil, mas também serve utilizadores em Portugal, na União Europeia e noutros países.
              </p>
              <p>
                O tratamento de dados pessoais é realizado em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)</strong> como legislação primária, e com o <strong>Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679)</strong> para utilizadores localizados na União Europeia e em Portugal, bem como com o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong>.
              </p>
            </Section>

            {/* ── 2 ── */}
            <Section id="pp2" title="2. Definições">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Dado pessoal:</strong> qualquer informação relativa a uma pessoa singular identificada ou identificável.</li>
                <li><strong>Titular de dados:</strong> a pessoa singular a quem os dados pessoais dizem respeito (o utilizador da Plataforma).</li>
                <li><strong>Responsável pelo tratamento / Controlador:</strong> a JobJump, que determina as finalidades e os meios do tratamento.</li>
                <li><strong>Subprocessador / Operador:</strong> terceiro que trata dados pessoais por conta da JobJump.</li>
                <li><strong>Tratamento:</strong> qualquer operação sobre dados pessoais, como recolha, registo, armazenamento, utilização, transmissão ou eliminação.</li>
                <li><strong>Consentimento:</strong> manifestação livre, informada, específica e inequívoca pela qual o titular aceita o tratamento dos seus dados.</li>
                <li><strong>localStorage:</strong> tecnologia de armazenamento do navegador do utilizador, que guarda dados exclusivamente no dispositivo local, sem os enviar para servidores externos.</li>
                <li><strong>LGPD:</strong> Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) — legislação brasileira.</li>
                <li><strong>RGPD/GDPR:</strong> Regulamento Geral sobre a Proteção de Dados (Regulamento UE 2016/679) — legislação da União Europeia.</li>
                <li><strong>ANPD:</strong> Autoridade Nacional de Proteção de Dados (Brasil).</li>
                <li><strong>CNPD:</strong> Comissão Nacional de Proteção de Dados (Portugal).</li>
              </ul>
            </Section>

            {/* ── 3 ── */}
            <Section id="pp3" title="3. Dados Pessoais que Recolhemos">
              <p>A JobJump recolhe dados pessoais nas seguintes categorias:</p>

              <p className="font-semibold text-slate-700 pt-1">3.1 Dados de Cadastro</p>
              <p>Fornecidos diretamente pelo utilizador ao criar uma conta:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Nome completo</strong></li>
                <li><strong>Endereço de e-mail</strong></li>
                <li><strong>Senha</strong> — armazenada de forma criptografada com bcrypt (nunca em texto legível)</li>
              </ul>

              <p className="font-semibold text-slate-700 pt-1">3.2 Dados de Uso e Interação</p>
              <p>Gerados automaticamente durante o uso da Plataforma:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Contagem diária de mensagens enviadas ao Coach de IA (para controlo do limite do Plano Gratuito)</li>
                <li>Progresso nos módulos educacionais (quais lições foram concluídas)</li>
                <li>Dados do plano contratado (Gratuito ou Pro) e data de ativação</li>
              </ul>

              <p className="font-semibold text-slate-700 pt-1">3.3 Dados de Pagamento</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Identificador de cliente Stripe (token tokenizado)</li>
                <li>E-mail utilizado na compra</li>
                <li>Data da primeira cobrança e renovações</li>
                <li>Plano contratado e histórico de faturação</li>
              </ul>
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-xs">
                <strong>Importante:</strong> A JobJump <strong>não armazena</strong> números de cartão de crédito, datas de validade ou CVV. Estes dados são processados e armazenados exclusivamente pela Stripe, Inc., conforme os seus próprios padrões de segurança PCI-DSS.
              </div>

              <p className="font-semibold text-slate-700 pt-1">3.4 Dados Técnicos e de Navegação</p>
              <p>Recolhidos automaticamente quando acede à Plataforma:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Endereço IP</li>
                <li>Tipo de navegador e versão</li>
                <li>Sistema operativo</li>
                <li>Data e hora de acesso</li>
                <li>Páginas visitadas e ações realizadas na Plataforma</li>
              </ul>

              <p className="font-semibold text-slate-700 pt-1">3.5 Dados do Coach de IA</p>
              <p>
                As mensagens enviadas ao Coach de IA são processadas pela Anthropic, Inc. para gerar respostas. O histórico de conversas é armazenado localmente no navegador do utilizador (ver Secção 4). A JobJump não armazena o conteúdo das conversas nos seus servidores.
              </p>
            </Section>

            {/* ── 4 ── */}
            <Section id="pp4" title="4. Armazenamento Local (localStorage)">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs leading-relaxed">
                <strong>Atenção — dados guardados APENAS no seu dispositivo:</strong> Algumas funcionalidades guardam dados exclusivamente no armazenamento local do seu navegador (localStorage). Estes dados NÃO são enviados para os servidores da JobJump e estão fora do nosso controlo.
              </div>
              <p>Os seguintes dados são armazenados apenas localmente no dispositivo do utilizador:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Progresso nos módulos educacionais</li>
                <li>Histórico de conversas com o Coach de IA</li>
                <li>Dados do rastreador de candidaturas (Kanban — vagas, status, notas, datas)</li>
              </ul>
              <p><strong>Implicações importantes que deve conhecer:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Os dados <strong>não são sincronizados</strong> entre dispositivos diferentes</li>
                <li>Os dados <strong>perdem-se</strong> se limpar o cache ou os cookies do navegador</li>
                <li>Os dados <strong>não estão disponíveis</strong> em modo de navegação privada/anónima</li>
                <li>Os dados <strong>perdem-se</strong> ao trocar de navegador ou de dispositivo</li>
                <li>A JobJump <strong>não consegue recuperar</strong> dados locais perdidos, pois nunca os teve</li>
              </ul>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 text-xs">
                <strong>Recomendação:</strong> Exporte regularmente os dados do rastreador de candidaturas (Kanban → CSV) para evitar perda de informação importante.
              </div>
            </Section>

            {/* ── 5 ── */}
            <Section id="pp5" title="5. Finalidades e Bases Legais do Tratamento">
              <p><strong>5.1 Para utilizadores no Brasil — LGPD (Art. 7º, Lei nº 13.709/2018):</strong></p>
              <Table
                headers={['Dados', 'Finalidade', 'Base Legal LGPD']}
                rows={[
                  ['Nome, e-mail, senha', 'Criação e gestão de conta; autenticação; comunicações do serviço', 'Consentimento (Art. 7º, I) + Execução de contrato (Art. 7º, V)'],
                  ['Progresso nos módulos', 'Funcionalidade essencial da plataforma; personalização do percurso de aprendizagem', 'Execução de contrato (Art. 7º, V)'],
                  ['Contagem de mensagens do Coach de IA', 'Controlo dos limites de uso do Plano Gratuito', 'Execução de contrato (Art. 7º, V)'],
                  ['ID cliente Stripe, dados de faturação', 'Processamento de pagamentos; prevenção de fraude; cumprimento de obrigações fiscais', 'Consentimento (Art. 7º, I) + Interesse legítimo (Art. 7º, IX) + Obrigação legal (Art. 7º, II)'],
                  ['IP, navegador, data/hora de acesso', 'Segurança da plataforma; deteção de ameaças; análise de uso agregado', 'Interesse legítimo (Art. 7º, IX)'],
                  ['Mensagens do Coach de IA', 'Geração de respostas pela IA (Anthropic); melhoria do serviço', 'Consentimento (Art. 7º, I)'],
                ]}
              />

              <p className="font-semibold text-slate-700 pt-1"><strong>5.2 Para utilizadores em Portugal e na União Europeia — RGPD (Art. 6º, Regulamento UE 2016/679):</strong></p>
              <Table
                headers={['Dados', 'Finalidade', 'Base Legal RGPD']}
                rows={[
                  ['Nome, e-mail, senha', 'Criação de conta; autenticação; comunicações do serviço', 'Consentimento (Art. 6º, 1, a) + Execução de contrato (Art. 6º, 1, b)'],
                  ['Progresso nos módulos', 'Funcionalidade essencial; personalização', 'Execução de contrato (Art. 6º, 1, b)'],
                  ['Contagem de mensagens do Coach de IA', 'Controlo de limites de uso', 'Execução de contrato (Art. 6º, 1, b)'],
                  ['ID cliente Stripe, dados de faturação', 'Processamento de pagamentos; prevenção de fraude; obrigações legais fiscais', 'Execução de contrato (Art. 6º, 1, b) + Interesse legítimo (Art. 6º, 1, f) + Obrigação legal (Art. 6º, 1, c)'],
                  ['IP, navegador, data/hora de acesso', 'Segurança; deteção de ameaças; análise agregada', 'Interesse legítimo (Art. 6º, 1, f)'],
                  ['Mensagens do Coach de IA', 'Geração de respostas pela IA', 'Consentimento (Art. 6º, 1, a)'],
                ]}
              />
              <p>
                A JobJump não trata dados pessoais para fins de marketing direto sem consentimento prévio e expresso. O utilizador pode optar por receber comunicações promocionais no momento do registo e pode retirar esse consentimento a qualquer momento.
              </p>
            </Section>

            {/* ── 6 ── */}
            <Section id="pp6" title="6. Subprocessadores e Partilha com Terceiros">
              <p>
                A JobJump partilha dados pessoais exclusivamente com os seguintes subprocessadores, que atuam sob instruções da JobJump e estão sujeitos a acordos de processamento de dados (Data Processing Agreements — DPA):
              </p>
              <Table
                headers={['Serviço', 'País/Região', 'Dados Partilhados', 'Finalidade']}
                rows={[
                  ['Supabase, Inc.', 'EUA / UE', 'Nome, e-mail, hash de senha, dados de uso, progresso, ID de plano', 'Autenticação, base de dados, backend e armazenamento seguro'],
                  ['Stripe, Inc.', 'EUA', 'E-mail, ID de cliente tokenizado, datas de faturação, plano contratado', 'Processamento seguro de pagamentos e gestão de assinaturas'],
                  ['Anthropic, Inc.', 'EUA', 'Mensagens enviadas ao Coach de IA (conteúdo da conversa)', 'Geração de respostas por inteligência artificial'],
                  ['Google Fonts', 'EUA', 'Endereço IP, user agent', 'Carregamento de tipografia e design da interface'],
                ]}
              />
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-xs">
                <strong>A JobJump não vende, aluga nem comercializa dados pessoais a terceiros.</strong> Todos os dados partilhados com os subprocessadores acima destinam-se exclusivamente ao funcionamento da Plataforma e são tratados de acordo com as respetivas políticas de privacidade de cada fornecedor.
              </div>
              <p>
                Cada subprocessador está sujeito às suas próprias políticas de privacidade e mecanismos de segurança, sobre os quais a JobJump não tem controlo direto além dos acordos contratuais estabelecidos.
              </p>
            </Section>

            {/* ── 7 ── */}
            <Section id="pp7" title="7. Transferências Internacionais de Dados">
              <p>
                Os subprocessadores Supabase, Stripe e Anthropic estão sediados nos Estados Unidos da América (EUA), o que implica transferências internacionais de dados pessoais para fora do Brasil e da União Europeia.
              </p>
              <p><strong>Para utilizadores no Brasil (LGPD — Art. 33):</strong></p>
              <p>
                As transferências internacionais são realizadas com base em garantias adequadas de proteção, incluindo cláusulas contratuais padrão (SCCs) e o compromisso dos subprocessadores com padrões de segurança equivalentes ou superiores aos exigidos pela LGPD.
              </p>
              <p><strong>Para utilizadores em Portugal e na União Europeia (RGPD — Arts. 44-49):</strong></p>
              <p>
                As transferências para os EUA são protegidas pelos seguintes mecanismos:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Stripe:</strong> Cláusulas Contratuais Padrão (Standard Contractual Clauses — SCCs) aprovadas pela Comissão Europeia</li>
                <li><strong>Anthropic:</strong> Cláusulas Contratuais Padrão (SCCs) aprovadas pela Comissão Europeia</li>
                <li><strong>Supabase:</strong> Pode utilizar infraestrutura na UE quando disponível; SCCs aplicáveis para transferências fora da UE</li>
                <li><strong>Google Fonts:</strong> Política de privacidade do Google conforme RGPD</li>
              </ul>
              <p>
                A JobJump garante que, independentemente do país de processamento, os dados pessoais recebem um nível de proteção equivalente ao exigido pela legislação aplicável.
              </p>
            </Section>

            {/* ── 8 ── */}
            <Section id="pp8" title="8. Prazos de Retenção">
              <p>
                A JobJump conserva os dados pessoais apenas pelo tempo estritamente necessário para as finalidades que motivaram a sua recolha, ou conforme exigido por obrigações legais:
              </p>
              <Table
                headers={['Categoria de Dados', 'Prazo de Retenção', 'Justificação']}
                rows={[
                  ['Nome, e-mail, hash de senha', 'Durante a vigência da conta + 90 dias após eliminação', 'Conformidade fiscal; prevenção de fraude; possibilidade de recuperação'],
                  ['Histórico do Coach de IA, progresso, Kanban', 'Durante a vigência da conta + 30 dias após eliminação', 'Funcionalidade do serviço; recuperação em caso de eliminação acidental'],
                  ['Dados de faturação (ID Stripe, histórico)', '6 anos após a última transação', 'Obrigação legal fiscal brasileira (Código Tributário Nacional)'],
                  ['Logs de acesso (IP, hora, navegador)', '90 dias após o registo', 'Segurança; deteção de ameaças; Marco Civil da Internet (Art. 15)'],
                  ['Dados em localStorage', 'Sob controlo exclusivo do utilizador (navegador)', 'A JobJump não tem acesso nem controlo sobre estes dados'],
                ]}
              />
              <p>
                Após o término dos prazos de retenção, os dados são eliminados de forma segura ou anonimizados de maneira a impossibilitar a identificação do titular, salvo obrigação legal em contrário.
              </p>
              <p>
                O utilizador pode solicitar a eliminação antecipada dos seus dados a qualquer momento (ver Secção 11), exceto quando a retenção for exigida por lei.
              </p>
            </Section>

            {/* ── 9 ── */}
            <Section id="pp9" title="9. Segurança e Proteção de Dados">
              <p>
                A JobJump implementa medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação, perda ou destruição acidental ou ilícita:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Criptografia em trânsito:</strong> todas as comunicações entre o seu dispositivo e os servidores utilizam HTTPS com TLS 1.2 ou superior</li>
                <li><strong>Criptografia de senhas:</strong> as senhas são armazenadas exclusivamente como hash bcrypt — nunca em texto legível</li>
                <li><strong>Tokens de sessão seguros:</strong> configurados com flags httpOnly e Secure para prevenir acesso por scripts maliciosos</li>
                <li><strong>Validação de dados de entrada:</strong> prevenção de injeção SQL, XSS (Cross-Site Scripting) e outros vetores de ataque comuns</li>
                <li><strong>Autenticação via Supabase:</strong> sistema de autenticação de padrão industrial com gestão de sessões segura</li>
                <li><strong>Acesso restrito:</strong> apenas pessoal autorizado tem acesso aos sistemas de produção e apenas para finalidades operacionais necessárias</li>
              </ul>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs leading-relaxed">
                <strong>Limitação importante:</strong> Nenhum sistema de segurança é 100% infalível. Embora adotemos as melhores práticas da indústria, não podemos garantir segurança absoluta. Em caso de incidente de segurança (data breach) que coloque em risco os seus direitos e liberdades, a JobJump compromete-se a notificar as autoridades competentes e os utilizadores afetados dentro de <strong>72 horas</strong>, em conformidade com a LGPD e o RGPD.
              </div>
            </Section>

            {/* ── 10 ── */}
            <Section id="pp10" title="10. Cookies e Tecnologias de Rastreamento">
              <p>
                A Plataforma utiliza cookies e tecnologias similares para o seu funcionamento. Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo:
              </p>

              <p className="font-semibold text-slate-700 pt-1">10.1 Cookies Estritamente Necessários</p>
              <p>
                Essenciais para o funcionamento básico da Plataforma. Não requerem o seu consentimento, pois sem eles o serviço não funciona:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Token de sessão:</strong> mantém a sua sessão autenticada entre páginas</li>
                <li><strong>Preferências do utilizador:</strong> guarda configurações como tema e idioma</li>
              </ul>

              <p className="font-semibold text-slate-700 pt-1">10.2 Cookies de Análise (Opcional)</p>
              <p>
                A Plataforma pode utilizar ferramentas de análise (como Google Analytics) para compreender como os utilizadores interagem com o serviço e melhorá-lo. Estes cookies requerem o seu consentimento prévio e explícito, apresentado através do aviso de cookies no primeiro acesso.
              </p>

              <p className="font-semibold text-slate-700 pt-1">10.3 O que não fazemos</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Não utilizamos cookies de publicidade ou rastreamento entre sites</li>
                <li>Não partilhamos dados de navegação com redes publicitárias</li>
                <li>Não criamos perfis de comportamento para fins comerciais externos</li>
              </ul>

              <p className="font-semibold text-slate-700 pt-1">10.4 Gestão de Cookies</p>
              <p>
                Pode gerir e eliminar cookies através das definições do seu navegador. Tenha em conta que desativar cookies estritamente necessários pode impedir o funcionamento correto da Plataforma. Um aviso de cookies detalhado está disponível no site com opções específicas de aceitação e recusa.
              </p>
            </Section>

            {/* ── 11 ── */}
            <Section id="pp11" title="11. Direitos dos Titulares de Dados">
              <p>
                Garantimos o exercício dos seus direitos como titular de dados, conforme a legislação aplicável. Pode exercê-los a qualquer momento enviando um e-mail para <strong>privacidade@jobjump.com.br</strong> com o assunto <strong>"Direitos de Titular de Dados"</strong> e especificando o direito que deseja exercer.
              </p>
              <p>
                Compromemo-nos a responder em até <strong>10 (dez) dias úteis</strong> a partir da receção do pedido.
              </p>

              <p className="font-semibold text-slate-700 pt-1">11.1 Direitos conforme a LGPD (Arts. 17–22 — utilizadores no Brasil):</p>
              <Table
                headers={['Direito', 'O que significa', 'Como exercer']}
                rows={[
                  ['Confirmação de tratamento', 'Saber se tratamos os seus dados pessoais', 'E-mail para privacidade@jobjump.com.br'],
                  ['Acesso', 'Receber uma cópia dos dados que temos sobre si', 'E-mail para privacidade@jobjump.com.br'],
                  ['Correção', 'Corrigir dados incompletos, inexatos ou desatualizados', 'E-mail ou Configurações da conta'],
                  ['Anonimização ou eliminação', 'Apagar dados desnecessários ou tratados em desconformidade', 'E-mail para privacidade@jobjump.com.br'],
                  ['Portabilidade', 'Receber os seus dados num formato estruturado e legível por máquina', 'E-mail para privacidade@jobjump.com.br'],
                  ['Informação sobre terceiros', 'Saber com quem partilhamos os seus dados', 'Ver Secção 6 desta Política'],
                  ['Oposição', 'Opor-se a tratamento baseado em interesse legítimo', 'E-mail para privacidade@jobjump.com.br'],
                  ['Revogação de consentimento', 'Retirar o consentimento dado previamente', 'E-mail ou Configurações da conta'],
                ]}
              />

              <p className="font-semibold text-slate-700 pt-1">11.2 Direitos adicionais conforme o RGPD (Arts. 15–22 — utilizadores na UE/Portugal):</p>
              <Table
                headers={['Direito', 'O que significa']}
                rows={[
                  ['Direito de acesso', 'Obter confirmação e cópia dos dados tratados'],
                  ['Direito de retificação', 'Corrigir dados inexatos ou incompletos'],
                  ['Direito ao apagamento ("direito de ser esquecido")', 'Solicitar a eliminação dos seus dados em determinadas circunstâncias'],
                  ['Direito de limitação do tratamento', 'Restringir o tratamento dos seus dados em determinadas situações'],
                  ['Direito de portabilidade', 'Receber os dados num formato estruturado e transferi-los para outro responsável'],
                  ['Direito de oposição', 'Opor-se ao tratamento, incluindo para fins de marketing direto'],
                  ['Direito de não sujeição a decisão automatizada', 'Não ser sujeito a decisões baseadas exclusivamente em tratamento automatizado que produzam efeitos jurídicos significativos'],
                  ['Direito de retirar consentimento', 'Retirar o consentimento a qualquer momento, sem afetar a licitude do tratamento anterior'],
                ]}
              />
              <p>
                Para utilizadores na UE/Portugal: nada nesta Política exclui ou limita direitos obrigatoriamente conferidos pelo RGPD que não possam ser contratualmente afastados.
              </p>
            </Section>

            {/* ── 12 ── */}
            <Section id="pp12" title="12. Dados de Menores de Idade">
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs leading-relaxed">
                <strong>A plataforma JobJump é exclusivamente destinada a pessoas com 18 (dezoito) anos ou mais.</strong>
              </div>
              <p>
                A JobJump não recolhe intencionalmente dados pessoais de menores de 18 anos. Ao criar uma conta, o utilizador declara expressamente ser maior de idade.
              </p>
              <p>
                Caso a JobJump identifique que uma conta pertence a um menor de 18 anos, irá:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Encerrar a conta imediatamente</li>
                <li>Eliminar todos os dados pessoais associados</li>
                <li>Notificar o titular ou responsável legal, se possível</li>
              </ul>
              <p>
                Pais, mães ou tutores legais que identifiquem o acesso indevido de um menor à Plataforma devem contactar-nos imediatamente através do endereço <strong>privacidade@jobjump.com.br</strong>.
              </p>
            </Section>

            {/* ── 13 ── */}
            <Section id="pp13" title="13. Consentimento Informado">
              <p>
                O tratamento de dados pessoais baseado em consentimento é realizado de forma livre, informada, específica e inequívoca, conforme exigido pela LGPD e pelo RGPD.
              </p>
              <p><strong>No momento do registo, o utilizador é solicitado a:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Ler e aceitar os Termos de Uso</li>
                <li>Ler e aceitar esta Política de Privacidade</li>
                <li>Opcionalmente, consentir no recebimento de comunicações de marketing por e-mail (consentimento separado e facultativo)</li>
              </ul>
              <p><strong>Características do consentimento:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Livre:</strong> o utilizador não é obrigado a consentir em tratamentos não essenciais para usar o serviço</li>
                <li><strong>Informado:</strong> o utilizador tem acesso a esta Política antes de consentir</li>
                <li><strong>Específico:</strong> o consentimento para comunicações de marketing é separado do consentimento para usar o serviço</li>
                <li><strong>Inequívoco:</strong> o consentimento é dado através de ação afirmativa explícita (clicar em checkbox)</li>
                <li><strong>Revogável:</strong> pode ser retirado a qualquer momento sem prejuízo para o utilizador</li>
              </ul>
              <p>
                A retirada do consentimento não afeta a licitude do tratamento realizado com base no consentimento antes da sua retirada.
              </p>
            </Section>

            {/* ── 14 ── */}
            <Section id="pp14" title="14. Reclamações e Autoridades de Supervisão">
              <p>
                Se considerar que o tratamento dos seus dados pessoais viola a legislação aplicável, encorajamo-lo a contactar-nos primeiro para que possamos resolver a situação:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                <p className="font-semibold">Contacto de privacidade:</p>
                <p className="text-blue-700 mt-1">privacidade@jobjump.com.br</p>
                <p className="text-slate-500 text-xs mt-1">Resposta em até 10 dias úteis</p>
              </div>
              <p>
                Se não ficar satisfeito com a nossa resposta, tem o direito de apresentar reclamação junto da autoridade de proteção de dados competente:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Brasil</strong> — Autoridade Nacional de Proteção de Dados (ANPD): <span className="text-blue-700">www.gov.br/anpd</span>. Em alternativa, pode recorrer ao Ministério Público, ao PROCON ou aos tribunais competentes.
                </li>
                <li>
                  <strong>Portugal</strong> — Comissão Nacional de Proteção de Dados (CNPD): <span className="text-blue-700">www.cnpd.pt</span>
                </li>
                <li>
                  <strong>Outros países da União Europeia</strong> — A autoridade de supervisão do seu país de residência (lista disponível em <span className="text-blue-700">edpb.europa.eu</span>)
                </li>
              </ul>
            </Section>

            {/* ── 15 ── */}
            <Section id="pp15" title="15. Alterações a Esta Política">
              <p>
                A JobJump reserva-se o direito de atualizar esta Política de Privacidade a qualquer momento, para refletir alterações nos serviços, na legislação aplicável ou nas práticas de tratamento de dados.
              </p>
              <p>Em caso de alterações materiais (que afetem significativamente os seus direitos ou as finalidades do tratamento):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>A versão atualizada será publicada nesta página com a data de vigência</li>
                <li>Enviaremos uma notificação por e-mail para o endereço registado</li>
                <li>Pode ser solicitada nova aceitação no próximo acesso à Plataforma</li>
              </ul>
              <p>
                Para alterações não materiais (como correções de linguagem ou clarificações sem impacto nos direitos dos titulares), a Política será atualizada sem notificação prévia formal.
              </p>
              <p>
                O uso continuado da Plataforma após a entrada em vigor das alterações constitui aceitação da Política de Privacidade atualizada. Caso não concorde com as alterações, pode encerrar a sua conta e cessar o uso da Plataforma.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-xs">
                <strong>Versão atual:</strong> 1.0 — vigente desde 27 de junho de 2025
              </div>
            </Section>

            {/* ── 16 ── */}
            <Section id="pp16" title="16. Contato e Encarregado de Proteção de Dados">
              <p>
                Para qualquer questão relacionada com esta Política de Privacidade, o tratamento dos seus dados pessoais ou o exercício dos seus direitos como titular, pode contactar-nos através dos seguintes canais:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-slate-700">E-mail de Privacidade</p>
                  <p className="text-blue-700">privacidade@jobjump.com.br</p>
                  <p className="text-slate-400 text-xs">Para exercício de direitos, reclamações e questões de proteção de dados</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <p className="font-semibold text-slate-700">E-mail de Suporte Geral</p>
                  <p className="text-blue-700">suporte@jobjump.com.br</p>
                  <p className="text-slate-400 text-xs">Para questões gerais sobre o serviço</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <p className="font-semibold text-slate-700">Website</p>
                  <p className="text-blue-700">www.jobjump.com.br</p>
                </div>
              </div>
              <p>
                Comprometemo-nos a responder a todos os pedidos relacionados com dados pessoais num prazo máximo de <strong>10 (dez) dias úteis</strong> a partir da receção do pedido.
              </p>
              <p className="text-xs text-slate-400 italic">
                Nota: A designação formal de um Encarregado de Proteção de Dados (DPO/EPD) será comunicada nesta Política quando aplicável nos termos do RGPD e da LGPD.
              </p>
            </Section>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-400 text-center space-y-1">
              <p>© 2025 JobJump. Todos os direitos reservados.</p>
              <p>Este documento foi elaborado em conformidade com a LGPD (Brasil), o RGPD (UE/Portugal) e o Marco Civil da Internet (Brasil).</p>
              <p>Não substitui assessoria jurídica especializada.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
