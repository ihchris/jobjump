const Section = ({ id, title, children }) => (
  <section id={id} className="mb-10">
    <h2 className="text-lg font-black text-[#1e3a5f] mb-3 pb-2 border-b border-slate-200">{title}</h2>
    <div className="text-slate-600 text-sm leading-relaxed space-y-3">{children}</div>
  </section>
)

const toc = [
  ['1', 'Aceitação dos Termos'],
  ['2', 'Definições'],
  ['3', 'Cadastro e Conta de Usuário'],
  ['4', 'Planos e Pagamentos'],
  ['5', 'Política de Reembolso'],
  ['6', 'Cancelamento e Rescisão'],
  ['7', 'Propriedade Intelectual'],
  ['8', 'Licença de Uso'],
  ['9', 'Conteúdo Gerado pelo Usuário'],
  ['10', 'Coach de IA — Limitações e Isenção de Responsabilidade'],
  ['11', 'Resultados e Desempenho — Ausência de Garantias'],
  ['12', 'Uso Proibido'],
  ['13', 'Dados Pessoais e Privacidade'],
  ['14', 'Armazenamento Local (LocalStorage)'],
  ['15', 'Serviços de Terceiros'],
  ['16', 'Disponibilidade do Serviço'],
  ['17', 'Limitação de Responsabilidade'],
  ['18', 'Indenização'],
  ['19', 'Menores de Idade'],
  ['20', 'Modificações nos Termos'],
  ['21', 'Lei Aplicável e Foro'],
  ['22', 'Disposições Gerais'],
  ['23', 'Contato'],
]

export default function TermsOfService({ onBack }) {
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
                    href={`#s${num}`}
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
              <h1 className="text-2xl sm:text-3xl font-black text-[#1e3a5f] mb-2">Termos de Uso</h1>
              <p className="text-sm text-slate-400">
                Última atualização: 27 de junho de 2025 · Versão 1.0
              </p>
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs leading-relaxed">
                <strong>Leia com atenção.</strong> Ao criar uma conta ou utilizar qualquer funcionalidade da plataforma JobJump, você declara ter lido, compreendido e concordado com todos os termos abaixo. Se não concordar, não utilize o serviço.
              </div>
            </div>

            {/* ── 1 ── */}
            <Section id="s1" title="1. Aceitação dos Termos">
              <p>
                Os presentes Termos de Uso ("Termos") regulam o acesso e a utilização da plataforma JobJump, disponível em <strong>www.jobjump.com.br</strong> e nos demais domínios e aplicações associados ("Plataforma"), operada por <strong>JobJump</strong> ("Empresa", "nós", "nosso").
              </p>
              <p>
                Ao acessar, navegar, criar uma conta ou utilizar qualquer funcionalidade da Plataforma, o usuário ("você", "Usuário") concorda, de forma livre, consciente e expressa, com estes Termos e com nossa <strong>Política de Privacidade</strong>, que constitui parte integrante deste instrumento.
              </p>
              <p>
                A aceitação pode se dar por qualquer meio que demonstre inequivocamente sua concordância, incluindo clique em botão de confirmação, criação de conta, uso continuado ou acesso à Plataforma após atualização dos Termos.
              </p>
            </Section>

            {/* ── 2 ── */}
            <Section id="s2" title="2. Definições">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Plataforma:</strong> o site www.jobjump.com.br e todos os seus recursos, funcionalidades e conteúdos.</li>
                <li><strong>Usuário:</strong> toda pessoa física que acessa ou utiliza a Plataforma.</li>
                <li><strong>Conta:</strong> registro individual do Usuário na Plataforma.</li>
                <li><strong>Plano Gratuito:</strong> modalidade de acesso sem custo, com recursos limitados.</li>
                <li><strong>Plano Pro:</strong> modalidade paga com acesso integral aos recursos da Plataforma.</li>
                <li><strong>Conteúdo:</strong> textos, vídeos, módulos, templates, ferramentas, algoritmos e qualquer material disponibilizado pela Empresa.</li>
                <li><strong>Conteúdo do Usuário:</strong> qualquer texto, publicação ou comentário inserido pelo Usuário na comunidade.</li>
                <li><strong>Coach de IA:</strong> funcionalidade de assistência automatizada por inteligência artificial, sem intervenção humana em tempo real.</li>
                <li><strong>Serviços:</strong> conjunto de funcionalidades oferecidas pela Plataforma, incluindo módulos educacionais, ferramentas de carreira, Coach de IA e comunidade.</li>
              </ul>
            </Section>

            {/* ── 3 ── */}
            <Section id="s3" title="3. Cadastro e Conta de Usuário">
              <p>
                Para acessar os recursos da Plataforma, o Usuário deve criar uma Conta fornecendo nome completo, endereço de e-mail válido e senha. O Usuário é responsável pela veracidade, exatidão e atualidade das informações fornecidas.
              </p>
              <p>
                O Usuário é o único responsável pela confidencialidade de suas credenciais de acesso (e-mail e senha) e por todas as atividades realizadas em sua Conta. A Empresa não se responsabiliza por acessos não autorizados decorrentes de negligência ou descuido do Usuário na guarda de suas credenciais.
              </p>
              <p>
                É proibida a criação de múltiplas contas para fins de contornar limitações do Plano Gratuito ou quaisquer outras restrições de uso. A Empresa reserva-se o direito de encerrar contas duplicadas sem aviso prévio.
              </p>
              <p>
                O Usuário deve comunicar imediatamente a Empresa sobre qualquer uso não autorizado de sua Conta pelo endereço de contato indicado na Seção 23.
              </p>
            </Section>

            {/* ── 4 ── */}
            <Section id="s4" title="4. Planos e Pagamentos">
              <p><strong>4.1 Plano Gratuito.</strong> Oferece acesso permanente a 2 (dois) módulos educacionais e ao Coach de IA com limite de 5 (cinco) mensagens por dia. Não requer cadastro de cartão de crédito.</p>
              <p><strong>4.2 Plano Pro.</strong> Oferece acesso integral a todos os módulos, ferramentas e ao Coach de IA sem limite de mensagens, mediante pagamento de assinatura mensal recorrente no valor de R$ 29,90 (vinte e nove reais e noventa centavos), ou o valor vigente à época da contratação.</p>
              <p><strong>4.3 Cobrança.</strong> A assinatura é processada pela plataforma de pagamentos Stripe. A cobrança ocorre na data de contratação e se renova automaticamente a cada 30 (trinta) dias, salvo cancelamento antecipado pelo Usuário.</p>
              <p><strong>4.4 Alteração de preços.</strong> A Empresa pode alterar o valor da assinatura mediante aviso prévio de no mínimo 30 (trinta) dias por e-mail cadastrado. O novo preço vigorará a partir do próximo ciclo de cobrança após o término do aviso.</p>
              <p><strong>4.5 Inadimplência.</strong> Em caso de falha no pagamento, a Empresa tentará recobrá-lo automaticamente. Se o pagamento não for regularizado no prazo definido pela Stripe, o acesso ao Plano Pro será suspenso e a conta regredirá automaticamente ao Plano Gratuito.</p>
              <p><strong>4.6 Dados de pagamento.</strong> Dados de cartão de crédito nunca são armazenados pela Empresa. Toda a gestão de meios de pagamento é feita exclusivamente pela Stripe, Inc., sujeita aos seus próprios termos e política de privacidade.</p>
            </Section>

            {/* ── 5 ── */}
            <Section id="s5" title="5. Política de Reembolso">
              <p>
                A Empresa oferece garantia de reembolso integral de <strong>7 (sete) dias corridos</strong> a partir da data da primeira cobrança do Plano Pro, contados inclusive do dia do pagamento. Para solicitar o reembolso, o Usuário deve enviar pedido pelo e-mail de contato indicado na Seção 23 dentro deste prazo.
              </p>
              <p>
                Após o período de 7 dias, não haverá reembolso proporcional ou integral de valores já cobrados, salvo determinação legal em contrário. O cancelamento encerra a renovação automática, mantendo o acesso Pro ativo até o final do ciclo já pago.
              </p>
              <p>
                Em caso de cobrança indevida por erro técnico da plataforma, o Usuário tem direito ao reembolso integral independentemente do prazo, mediante comprovação do erro.
              </p>
              <p>
                O reembolso é processado para o mesmo meio de pagamento utilizado na compra e pode levar até 10 (dez) dias úteis para aparecer no extrato do Usuário, a depender da instituição financeira.
              </p>
            </Section>

            {/* ── 6 ── */}
            <Section id="s6" title="6. Cancelamento e Rescisão">
              <p><strong>6.1 Pelo Usuário.</strong> O Usuário pode cancelar sua assinatura a qualquer momento pelo painel de configurações da Conta (Configurações → Plano → Gerenciar assinatura). O cancelamento interrompe a renovação automática. O acesso ao Plano Pro permanece ativo até o final do ciclo de cobrança vigente, sem reembolso proporcional.</p>
              <p><strong>6.2 Exclusão de conta.</strong> O Usuário pode solicitar a exclusão completa de sua Conta pelas configurações da Plataforma ou por e-mail. A exclusão é irreversível e apaga permanentemente todos os dados associados à Conta.</p>
              <p><strong>6.3 Pela Empresa.</strong> A Empresa pode suspender ou encerrar a Conta do Usuário, com ou sem aviso prévio, em caso de: (a) violação destes Termos; (b) suspeita de uso fraudulento; (c) comportamento abusivo contra outros usuários ou contra a Plataforma; (d) fornecimento de informações falsas; (e) uso que viole leis aplicáveis. Em caso de encerramento por justa causa, não haverá reembolso das quantias pagas.</p>
              <p><strong>6.4 Encerramento do serviço.</strong> Caso a Empresa decida encerrar definitivamente a Plataforma, os Usuários serão notificados com antecedência mínima de 30 (trinta) dias por e-mail, e os Usuários com Plano Pro receberão reembolso proporcional ao período restante pago.</p>
            </Section>

            {/* ── 7 ── */}
            <Section id="s7" title="7. Propriedade Intelectual">
              <p>
                Todo o Conteúdo disponibilizado na Plataforma — incluindo, mas não se limitando a, textos, módulos educacionais, vídeos, áudios, ilustrações, ícones, logotipos, templates, ferramentas interativas, algoritmos, interfaces, código-fonte, design, roteiros e metodologias — é de propriedade exclusiva da Empresa ou licenciado por terceiros, e está protegido pelas leis de direitos autorais, marcas registradas e demais normas de propriedade intelectual aplicáveis.
              </p>
              <p>
                É expressamente proibido reproduzir, copiar, distribuir, publicar, transmitir, adaptar, modificar, criar obras derivadas, vender, licenciar, sublicenciar, realizar engenharia reversa ou explorar comercialmente, de qualquer forma, o Conteúdo da Plataforma, sem autorização prévia e expressa por escrito da Empresa.
              </p>
              <p>
                Os templates disponibilizados para download são licenciados para uso pessoal e intransferível do Usuário, exclusivamente para finalidade de candidatura a empregos. É vedada sua revenda, distribuição ou uso para fins comerciais.
              </p>
            </Section>

            {/* ── 8 ── */}
            <Section id="s8" title="8. Licença de Uso">
              <p>
                Sujeito ao cumprimento integral destes Termos e ao pagamento das mensalidades devidas quando aplicável, a Empresa concede ao Usuário uma licença pessoal, não exclusiva, não transferível, revogável e limitada para acessar e utilizar a Plataforma exclusivamente para fins pessoais e não comerciais.
              </p>
              <p>
                Esta licença não inclui o direito de: (a) sublicenciar ou transferir os direitos de acesso; (b) utilizar a Plataforma para prestar serviços a terceiros; (c) acessar a Plataforma de forma automatizada (bots, scrapers, crawlers); (d) criar produtos ou serviços concorrentes baseados no Conteúdo.
              </p>
            </Section>

            {/* ── 9 ── */}
            <Section id="s9" title="9. Conteúdo Gerado pelo Usuário">
              <p>
                A Plataforma dispõe de uma seção de Comunidade onde Usuários podem publicar textos e comentários ("Conteúdo do Usuário"). Ao publicar, o Usuário:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Declara ser o único autor ou deter os direitos necessários sobre o Conteúdo publicado;</li>
                <li>Concede à Empresa licença mundial, gratuita, não exclusiva, sublicenciável e transferível para usar, reproduzir, exibir, adaptar e distribuir o Conteúdo do Usuário dentro da Plataforma e em materiais de marketing relacionados ao serviço;</li>
                <li>É o único responsável pelo Conteúdo publicado, respondendo civil e criminalmente por eventuais violações de direitos de terceiros, difamação, discriminação ou qualquer ilicitude;</li>
                <li>Concorda que a Empresa pode remover, ocultar ou editar qualquer Conteúdo do Usuário, a qualquer momento e a seu critério exclusivo, sem necessidade de justificativa, especialmente se violar estes Termos ou causar dano à Plataforma ou a terceiros.</li>
              </ul>
              <p>
                É proibido publicar Conteúdo que: contenha informações falsas, enganosas ou fraudulentas; ofenda, assedie, ameace ou discrimine outros usuários; viole direitos autorais de terceiros; contenha spam, publicidade não autorizada ou links maliciosos; ou viole qualquer legislação aplicável.
              </p>
            </Section>

            {/* ── 10 ── */}
            <Section id="s10" title="10. Coach de IA — Limitações e Isenção de Responsabilidade">
              <p>
                O Coach de IA é uma funcionalidade automatizada baseada em inteligência artificial (desenvolvida pela Anthropic, Inc.) que fornece orientações gerais sobre carreira, currículos, entrevistas e mercado de trabalho.
              </p>
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                <strong>AVISO IMPORTANTE:</strong> As respostas do Coach de IA <strong>NÃO constituem</strong> aconselhamento profissional, jurídico, contábil, financeiro, psicológico, de saúde ou qualquer outra forma de consultoria especializada regulamentada. O Coach de IA é uma ferramenta educacional e informativa, e suas orientações são de caráter geral.
              </div>
              <p>
                O Usuário reconhece e concorda que:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>A IA pode cometer erros, gerar informações desatualizadas ou imprecisas;</li>
                <li>As respostas da IA não substituem a avaliação de um profissional qualificado;</li>
                <li>Decisões de carreira baseadas exclusivamente nas orientações do Coach de IA são de responsabilidade exclusiva do Usuário;</li>
                <li>A Empresa não se responsabiliza por eventuais prejuízos decorrentes de ações tomadas com base nas respostas do Coach de IA;</li>
                <li>O histórico de conversas é armazenado localmente no navegador do Usuário e pode ser perdido a qualquer momento;</li>
                <li>A Empresa pode alterar, suspender ou encerrar o Coach de IA a qualquer momento.</li>
              </ul>
            </Section>

            {/* ── 11 ── */}
            <Section id="s11" title="11. Resultados e Desempenho — Ausência de Garantias">
              <p>
                A Empresa não garante, em hipótese alguma, que o uso da Plataforma resultará em:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Obtenção de emprego, entrevista ou proposta de trabalho;</li>
                <li>Aumento de salário ou melhoria nas condições de trabalho;</li>
                <li>Aprovação em processos seletivos específicos;</li>
                <li>Transição de carreira bem-sucedida;</li>
                <li>Qualquer resultado específico de carreira.</li>
              </ul>
              <p>
                As estatísticas, percentuais e depoimentos exibidos na Plataforma (ex.: "89% aumentaram a taxa de resposta") baseiam-se em relatos voluntários de usuários e dados históricos, e <strong>não constituem garantia de desempenho individual</strong>. Os resultados variam significativamente de acordo com fatores externos como mercado de trabalho, área de atuação, localização geográfica, perfil profissional e outros fatores fora do controle da Empresa.
              </p>
              <p>
                O Usuário utiliza a Plataforma ciente de que os resultados dependem de seu próprio esforço, dedicação e circunstâncias individuais.
              </p>
            </Section>

            {/* ── 12 ── */}
            <Section id="s12" title="12. Uso Proibido">
              <p>O Usuário está expressamente proibido de:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Compartilhar credenciais de acesso com terceiros ou permitir o uso simultâneo da Conta;</li>
                <li>Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte da Plataforma;</li>
                <li>Usar scrapers, bots, crawlers ou qualquer mecanismo automatizado para acessar ou coletar dados da Plataforma;</li>
                <li>Tentar burlar limites de uso do Plano Gratuito (ex.: criar múltiplas contas);</li>
                <li>Publicar ou transmitir vírus, malware ou qualquer código malicioso;</li>
                <li>Realizar ataques de negação de serviço (DDoS) ou qualquer ataque à infraestrutura da Plataforma;</li>
                <li>Usar a Plataforma para fins ilegais, fraudulentos ou que violem direitos de terceiros;</li>
                <li>Comercializar, revender ou sublicenciar o acesso à Plataforma ou ao Conteúdo;</li>
                <li>Usar o Coach de IA para gerar conteúdo enganoso, discriminatório, ofensivo ou ilegal;</li>
                <li>Tentar acessar áreas restritas da Plataforma sem autorização;</li>
                <li>Usar o serviço para assediar, ameaçar ou prejudicar outros Usuários.</li>
              </ul>
              <p>
                A violação de qualquer proibição acima pode resultar na suspensão ou encerramento imediato da Conta, sem reembolso, e poderá dar ensejo a medidas legais cabíveis.
              </p>
            </Section>

            {/* ── 13 ── */}
            <Section id="s13" title="13. Dados Pessoais e Privacidade">
              <p>
                O tratamento de dados pessoais realizado pela Empresa observa a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)</strong>, o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong> e, para usuários localizados na União Europeia e em Portugal, o <strong>Regulamento Geral sobre a Proteção de Dados (RGPD/GDPR)</strong>.
              </p>
              <p>A Empresa coleta e trata as seguintes categorias de dados pessoais:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Dados de cadastro:</strong> nome, e-mail e senha (armazenada de forma criptografada);</li>
                <li><strong>Dados de uso:</strong> contagem diária de mensagens do Coach de IA (para controle do Plano Gratuito);</li>
                <li><strong>Dados de pagamento:</strong> identificador de cliente Stripe (não inclui dados de cartão);</li>
                <li><strong>Dados de navegação:</strong> progresso nos módulos, dados do rastreador de candidaturas e histórico do Coach de IA (armazenados localmente — veja Seção 14).</li>
              </ul>
              <p>
                O Usuário tem os direitos de: confirmação de tratamento; acesso; correção; anonimização ou eliminação; portabilidade; informação sobre compartilhamento; revogação de consentimento; e oposição ao tratamento, conforme previsto nos arts. 17 a 22 da LGPD. Para exercer qualquer desses direitos, entre em contato pela Seção 23.
              </p>
              <p>
                A Política de Privacidade completa, que detalha bases legais, finalidades e prazos de retenção, está disponível na Plataforma e constitui parte integrante destes Termos.
              </p>
            </Section>

            {/* ── 14 ── */}
            <Section id="s14" title="14. Armazenamento Local (LocalStorage)">
              <p>
                Certas funcionalidades da Plataforma utilizam o armazenamento local do navegador do Usuário (localStorage) para salvar dados como progresso nos módulos, histórico de conversas com o Coach de IA e dados do rastreador de candidaturas (Kanban).
              </p>
              <p>
                Esses dados <strong>não são transmitidos nem armazenados nos servidores da Empresa</strong>. Por consequência:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Os dados podem ser perdidos em caso de limpeza do cache do navegador, uso de modo privado/anônimo, troca de dispositivo ou troca de navegador;</li>
                <li>A Empresa não é responsável pela perda de dados armazenados localmente;</li>
                <li>O Usuário é o único responsável por realizar backups dos dados que deseja preservar (ex.: exportar o rastreador em CSV).</li>
              </ul>
            </Section>

            {/* ── 15 ── */}
            <Section id="s15" title="15. Serviços de Terceiros">
              <p>A Plataforma utiliza serviços de terceiros para seu funcionamento:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Supabase, Inc.:</strong> autenticação, banco de dados e funções de backend;</li>
                <li><strong>Stripe, Inc.:</strong> processamento de pagamentos;</li>
                <li><strong>Anthropic, Inc.:</strong> tecnologia de inteligência artificial (Coach de IA);</li>
                <li><strong>Google Fonts:</strong> tipografia.</li>
              </ul>
              <p>
                O uso desses serviços é regido pelos respectivos Termos de Uso e Políticas de Privacidade de cada fornecedor, sobre os quais a Empresa não tem controle. A Empresa não se responsabiliza por falhas, interrupções, decisões de negócio ou quaisquer danos causados por tais serviços de terceiros.
              </p>
            </Section>

            {/* ── 16 ── */}
            <Section id="s16" title="16. Disponibilidade do Serviço">
              <p>
                A Empresa envida seus melhores esforços para manter a Plataforma disponível de forma contínua, mas <strong>não garante disponibilidade ininterrupta ou isenta de erros</strong>. A Plataforma pode ser temporariamente indisponível por razões como:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Manutenções programadas ou emergenciais;</li>
                <li>Falhas em serviços de terceiros (hospedagem, banco de dados, pagamentos);</li>
                <li>Ataques cibernéticos ou eventos de força maior;</li>
                <li>Decisões técnicas ou de negócio da Empresa.</li>
              </ul>
              <p>
                A Empresa não oferece Acordo de Nível de Serviço (SLA) formal. Interrupções temporárias não dão direito a reembolso, salvo se prolongadas por período superior a 72 (setenta e duas) horas consecutivas, caso em que o Usuário poderá solicitar crédito proporcional ao período afetado.
              </p>
            </Section>

            {/* ── 17 ── */}
            <Section id="s17" title="17. Limitação de Responsabilidade">
              <p>
                Na máxima extensão permitida pela legislação aplicável, a Empresa não será responsável por danos indiretos, incidentais, especiais, punitivos, exemplares ou consequenciais, incluindo, mas não se limitando a: lucros cessantes, perda de dados, perda de oportunidades de emprego, danos à reputação profissional ou quaisquer danos intangíveis, ainda que a Empresa tenha sido avisada da possibilidade de tais danos.
              </p>
              <p>
                A responsabilidade total da Empresa perante o Usuário, por qualquer causa e independentemente da forma de ação, estará limitada ao <strong>valor total efetivamente pago pelo Usuário à Empresa nos 12 (doze) meses anteriores ao evento que originou a responsabilidade</strong>, ou R$ 100,00 (cem reais), o que for maior.
              </p>
              <p>
                Esta limitação aplica-se independentemente de o dano resultar de: falha do serviço, uso ou impossibilidade de uso da Plataforma, acesso não autorizado, alteração de dados ou qualquer outra causa.
              </p>
              <p>
                As limitações acima não excluem ou restringem direitos garantidos pelo Código de Defesa do Consumidor (Lei nº 8.078/1990) que não possam ser contratualmente afastados.
              </p>
            </Section>

            {/* ── 18 ── */}
            <Section id="s18" title="18. Indenização">
              <p>
                O Usuário concorda em defender, indenizar e isentar a Empresa, seus sócios, diretores, colaboradores, agentes e prestadores de serviço de quaisquer reivindicações, ações, prejuízos, danos, responsabilidades, custos e despesas (incluindo honorários advocatícios razoáveis) decorrentes de ou relacionados a:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Violação destes Termos pelo Usuário;</li>
                <li>Conteúdo do Usuário publicado na Plataforma;</li>
                <li>Uso da Plataforma em violação a leis ou direitos de terceiros;</li>
                <li>Informações falsas ou enganosas fornecidas pelo Usuário no cadastro.</li>
              </ul>
            </Section>

            {/* ── 19 ── */}
            <Section id="s19" title="19. Menores de Idade">
              <p>
                A Plataforma é destinada exclusivamente a pessoas com <strong>18 (dezoito) anos ou mais</strong>. Ao criar uma Conta, o Usuário declara ter a maioridade civil necessária para celebrar contratos válidos e vinculantes.
              </p>
              <p>
                A Empresa não coleta intencionalmente dados pessoais de menores de 18 anos. Caso identifique que uma Conta pertence a um menor, encerrará a Conta imediatamente e eliminará os dados associados. Pais ou responsáveis que identifiquem o acesso indevido de menores devem nos contatar imediatamente pela Seção 23.
              </p>
            </Section>

            {/* ── 20 ── */}
            <Section id="s20" title="20. Modificações nos Termos">
              <p>
                A Empresa reserva-se o direito de modificar estes Termos a qualquer momento. Alterações relevantes serão comunicadas ao Usuário por e-mail cadastrado com antecedência mínima de 15 (quinze) dias antes de entrarem em vigor.
              </p>
              <p>
                O uso continuado da Plataforma após a vigência das alterações constitui aceitação tácita dos novos Termos. Caso o Usuário não concorde com as modificações, deverá cancelar sua assinatura e cessar o uso da Plataforma antes da data de vigência.
              </p>
              <p>
                A versão vigente dos Termos estará sempre disponível na Plataforma com indicação da data da última atualização.
              </p>
            </Section>

            {/* ── 21 ── */}
            <Section id="s21" title="21. Lei Aplicável e Foro">
              <p>
                Estes Termos são regidos e interpretados exclusivamente pelas leis da <strong>República Federativa do Brasil</strong>, independentemente de conflito de leis ou da localização do Usuário.
              </p>
              <p>
                Fica eleito o foro da <strong>Comarca de São Paulo, Estado de São Paulo</strong>, para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro foro, por mais privilegiado que seja.
              </p>
              <p>
                Para usuários localizados em Portugal e na União Europeia, nada nestes Termos exclui proteções obrigatórias conferidas pela legislação local que não possam ser contratualmente afastadas, nomeadamente o RGPD e a legislação de proteção ao consumidor aplicável.
              </p>
            </Section>

            {/* ── 22 ── */}
            <Section id="s22" title="22. Disposições Gerais">
              <p><strong>Integralidade.</strong> Estes Termos, conjuntamente com a Política de Privacidade, constituem o acordo integral entre o Usuário e a Empresa quanto ao uso da Plataforma, substituindo quaisquer acordos anteriores sobre o mesmo objeto.</p>
              <p><strong>Invalidade parcial.</strong> Se qualquer cláusula destes Termos for considerada inválida, nula ou inexequível por qualquer razão, as demais cláusulas permanecerão em pleno vigor e efeito.</p>
              <p><strong>Não renúncia.</strong> A falha da Empresa em exercer ou fazer cumprir qualquer direito previsto nestes Termos não constituirá renúncia a tal direito.</p>
              <p><strong>Cessão.</strong> O Usuário não pode ceder ou transferir seus direitos ou obrigações decorrentes destes Termos sem consentimento prévio e escrito da Empresa. A Empresa pode ceder seus direitos e obrigações decorrentes destes Termos a qualquer momento, notificando o Usuário por e-mail.</p>
              <p><strong>Força maior.</strong> A Empresa não será responsável por atrasos ou falhas no cumprimento de suas obrigações decorrentes de eventos fora de seu controle razoável, incluindo desastres naturais, pandemias, ataques cibernéticos de larga escala, falhas de infraestrutura de internet ou decisões governamentais.</p>
              <p><strong>Relação entre as partes.</strong> Estes Termos não criam vínculo empregatício, societário, de agência ou de franquia entre o Usuário e a Empresa.</p>
            </Section>

            {/* ── 23 ── */}
            <Section id="s23" title="23. Contato">
              <p>
                Para dúvidas, reclamações, exercício de direitos de titular de dados ou quaisquer assuntos relacionados a estes Termos, entre em contato pelo e-mail:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl font-mono text-sm text-blue-700">
                suporte@jobjump.com.br
              </div>
              <p>
                A Empresa se compromete a responder às solicitações dentro de <strong>5 (cinco) dias úteis</strong>.
              </p>
            </Section>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-400 text-center space-y-1">
              <p>© 2025 JobJump. Todos os direitos reservados.</p>
              <p>Este documento foi redigido para fins informativos e de proteção contratual. Não substitui assessoria jurídica especializada.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
