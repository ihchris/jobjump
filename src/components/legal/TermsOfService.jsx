import LegalPage from './LegalPage'
export default function TermsOfService({ onBack }) {
  return <LegalPage title="Termos de uso da demonstração" onBack={onBack}>
    <section><h2 className="text-xl font-bold text-slate-800 mb-2">O que está disponível</h2><p>O JobJump disponibiliza uma demonstração gratuita de diagnóstico, aulas, modelos e ferramentas de preparação profissional. Não é necessário criar uma conta ou informar dados de pagamento.</p></section>
    <section><h2 className="text-xl font-bold text-slate-800 mb-2">Uso educacional</h2><p>As sugestões são orientativas. Não garantimos entrevistas, contratação, remuneração ou resultados em um prazo específico. Calculadoras e pontuações usam regras simplificadas e não substituem avaliação profissional, financeira ou jurídica. Revise o conteúdo antes de utilizá-lo.</p></section>
    <section><h2 className="text-xl font-bold text-slate-800 mb-2">Dados locais</h2><p>Progresso e anotações ficam neste navegador. Não oferecemos sincronização, recuperação de conta ou cópias em servidor. Você pode exportar ou apagar os dados em Configurações. Não insira informações sensíveis em dispositivos compartilhados.</p></section>
    <section><h2 className="text-xl font-bold text-slate-800 mb-2">Contas e pagamentos</h2><p>Não há assinaturas, cobranças, pré-venda ou garantia comercial nesta versão. Preços e condições de um serviço pago precisarão ser definidos, revisados e informados antes de qualquer contratação.</p></section>
    <section><h2 className="text-xl font-bold text-slate-800 mb-2">Limites da demonstração</h2><p>Não há envio de candidaturas, contato com recrutadores ou comunicação entre usuários. Modelos gerados devem conter informações verdadeiras e ser revisados por você. Registros de estudo são pessoais e não constituem certificação profissional.</p></section>
    <section><h2 className="text-xl font-bold text-slate-800 mb-2">Antes da operação comercial</h2><p>A identificação do responsável, um canal de atendimento e as condições comerciais serão publicados antes da abertura de contas ou vendas. Esta versão não deve ser usada para contratar serviços pagos.</p></section>
  </LegalPage>
}
