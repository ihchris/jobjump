# Checklist antes do primeiro cliente pagante

## Demonstração e pesquisa

- [x] Percurso local de diagnóstico, três prioridades e critérios de aplicação preparados.
- [x] Ferramentas e modelos de apoio ligados às tarefas; sem compra ou conta simulada.
- [x] Hipótese de oferta única e caderno de treino documentados, sem preço na interface pública.
- [x] Plano de validação preparado; nenhuma pessoa contatada ou pesquisa executada.
- [ ] Responsável aprova recrutamento, canais, consentimento e tratamento/retenção de dados antes de qualquer contato ou coleta.
- [ ] Observar participantes reais e registrar resultados, falhas, denominadores e limitações.
- [ ] Decidir se o benefício observado diferencia o kit da demo gratuita e justifica testar um preço.

## Oferta e operação

- [ ] Aprovar público, entregáveis e preço total de pagamento único, sem recorrência.
- [ ] Identificar vendedor/responsável, contato, suporte e obrigações fiscais aplicáveis.
- [ ] Revisar conteúdo final, arquivos e compatibilidade prometida com profissionais/editor(es) adequados.
- [ ] Definir acesso, entrega, correções, atualizações, suporte, cancelamento e reembolso sem promessas não sustentadas.
- [ ] Calcular custos e margem, incluindo atendimento e reembolsos.

## Etapa técnica posterior — não autorizada por este checklist

- [ ] Aprovação específica antes de configurar serviços, coletar dados, ativar contas ou cobrar.
- [ ] Escolher/configurar base de dados, migrações, RLS, retenção, backups e recuperação.
- [ ] Configurar autenticação, confirmação de email, sessão, logout e recuperação de senha; verificar mensagens reais.
- [ ] Implementar pedido/entrega únicos: não reutilizar checkout de assinatura sem revisão. As funções Stripe legadas são de assinatura e não implementam esta oferta.
- [ ] Testar preços, checkout, webhook assinado/idempotente, pagamento recusado/cancelado, pedido duplicado e reembolso em modo de teste.
- [ ] Liberar arquivos apenas após confirmação de pagamento no servidor; nunca confiar em querystring, localStorage, flag de demo ou bundle público.
- [ ] Definir reenvio/recuperação de arquivos e suporte para falhas de entrega.
- [ ] Revisar termos e privacidade para a operação real antes de coletar dados ou vender.
- [ ] Aprovação específica e teste de ponta a ponta antes de ativar cobrança real.

## Publicação e Git

As melhorias gratuitas da demonstração podem ser enviadas à `master` pelo fluxo autorizado de commit, pull e push. O push pode acionar o deployment existente na Vercel. Isso não autoriza ativar contas, coleta, checkout, preços cobrados ou integrações de servidor. Conferir o resultado do deployment na hospedagem quando houver acesso; um push bem-sucedido não comprova deploy concluído.

## Assinatura: critério posterior

Não lançar apenas por haver muitas aulas ou ferramentas. Exigir evidências de retorno espontâneo em mais de uma ocasião, motivo de uso continuado e capacidade de entregar valor periódico com termos e custos sustentáveis. Não preencher esses requisitos com métricas técnicas, respostas hipotéticas ou intenção de compra.
