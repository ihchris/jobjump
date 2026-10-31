# Deployment da demonstração JobJump

## Estado preparado

A aplicação é estática, com build em `dist/`. Nenhuma base de dados, chave de pagamento, cadastro, serviço de mensagens ou provedor de geração de texto é necessário. A demonstração funciona com dados locais e não vende assinaturas.

A configuração `vercel.json` define Vite, `npm run build`, saída `dist/`, cache para assets com hash e headers de segurança. A versão pública não usa scripts ou fontes remotas. A política CSP permite conexões apenas à própria origem, bloqueia frames e formulários externos e mantém estilos inline necessários aos componentes. A Permissions Policy desativa câmera, microfone, geolocalização e pagamentos.

O bundle e os headers foram testados em servidor estático local. Nenhuma publicação, DNS ou emissão de certificado foi executada por essa validação.

## Antes de publicar: decisão e aprovação

O projeto já está na Vercel e o usuário autorizou commit, pull e push na master após melhorias da demonstração. Definir ou confirmar o projeto e domínio existentes antes de alterar configurações da hospedagem. Ações que ativem contas, coleta de dados ou cobranças continuam dependendo de aprovação específica. Não criar outro projeto de hospedagem para substituir o existente sem necessidade. O push pode publicar automaticamente a demonstração pelo vínculo Git já existente.

## Publicar na Vercel, após aprovação

1. Importar `ihchris/jobjump` para a conta escolhida. Usar exclusivamente `master` como branch de produção e a raiz do repositório como diretório.
2. Selecionar Node 24. A Vercel usa `vercel.json`; conferir build `npm run build` e diretório `dist`. As dependências estão fixadas pelo `package-lock.json`.
3. Não adicionar credenciais do Supabase, Stripe ou outros serviços. Não habilitar a aplicação conectada nesta etapa.
4. O endereço público confirmado é `https://jobjump-snowy.vercel.app`, definido em `site.config.json`. O build gera canonical, sitemap e URLs de compartilhamento para ele. A variável de build `SITE_URL`, quando definida, tem prioridade e deve conter somente a origem HTTPS do domínio principal, sem caminho ou parâmetros. Não é uma credencial.
5. O push na master pode acionar o deploy aprovado da demonstração. Se trocar para domínio próprio, atualizar `SITE_URL` na hospedagem ou o endereço confirmado no arquivo de configuração e fazer novo build. Não configurar um endereço fictício.
6. No painel Domains, adicionar o domínio e aplicar somente os registros DNS indicados pela hospedagem. Conferir os registros atuais antes de editar, preservando email e serviços existentes. O certificado HTTPS é gerenciado pela hospedagem; aguardar sua validação antes de divulgar o endereço.
7. Escolher um endereço principal, redirecionar os aliases para ele e garantir que `SITE_URL` coincida com esse endereço. Não adicionar regras de redirect com um domínio ainda desconhecido.

A publicação requer uma conta com acesso ao repositório/hospedagem. Nenhum token deve ser enviado em chat ou incluído no Git.

## Verificação depois da publicação

- Abrir em computador e celular, inclusive navegação por teclado e tema escuro.
- Testar página inicial → diagnóstico → roteiro → aula → conclusão → reload; abrir ferramentas e baixar um modelo.
- Confirmar que não há login, cobranças, ofertas de planos pagos, depoimentos sem comprovação ou recursos não liberados na interface.
- Conferir no navegador que só são solicitados arquivos da própria hospedagem. Testar também a impressão de modelos em nova aba com os headers reais.
- Conferir title, description, favicon, imagem de compartilhamento e ausência de erros de assets; validar canonical, URLs absolutas de compartilhamento, `/robots.txt` e `/sitemap.xml` usando o endereço confirmado ou o override `SITE_URL`.
- Conferir HTTPS, domínio principal, redirecionamentos e headers de `vercel.json` no serviço real. A configuração local não comprova propagação de DNS, emissão de certificado ou aplicação de headers pela hospedagem.

## Rollback e manutenção

Guardar o identificador do deploy aprovado e usar a opção de rollback da hospedagem para voltar a um deploy anterior se a verificação falhar. Não alterar DNS ou apagar dados locais como forma de rollback. O navegador pode manter os registros locais da demonstração entre versões.

Fazer `npm ci`, build e testes antes de novas publicações. Atualizações de dependências devem ser tratadas em uma tarefa própria com revisão das mudanças.

## O que falta para começar a vender

1. **Responsável e oferta:** identificar responsável/empresa, público-alvo, canal de atendimento, preços, moeda, benefícios realmente entregues, limites de uso e regras de suporte.
2. **Base de dados:** escolher o projeto, revisar e aplicar migrações e seed, validar políticas RLS, retenção, backups e acesso. Nenhuma migração foi aplicada nesta etapa.
3. **Autenticação:** habilitar a aplicação conectada, configurar confirmação de email e redirects e testar cadastro, sessão, logout e recuperação de senha com mensagens realmente recebidas. Não confiar apenas nos testes simulados.
4. **Pagamentos:** configurar Stripe inicialmente em modo de teste, criar preços, checkout, portal e webhook, validar assinatura/renovação/cancelamento/falhas e idempotência. Só habilitar cobranças reais após aprovação.
5. **Controle de acesso:** validar plano e permissões no servidor; proteger conteúdo na origem. Não usar localStorage, a flag de demonstração ou o bundle público como prova de pagamento.
6. **Condições e privacidade:** revisar documentos com identificação, contato, fornecedores, finalidade e retenção dos dados, direitos e condições comerciais aplicáveis. Os textos atuais descrevem somente a demonstração, sem revisão jurídica profissional.
7. **Operação e conversão:** definir monitoramento de erros, suporte e métricas mínimas de visita → diagnóstico → cadastro → compra quando esses eventos realmente existirem, com transparência e consentimento quando exigido. Não há trackers ativos nesta versão.

Contas, pagamentos e recursos de servidor não estão configurados ou validados. Nenhum prazo de contratação, garantia comercial ou resultado profissional é prometido nesta demonstração.

## Preparação para a oferta única

Veja `docs/product/ONE_TIME_OFFER.md` e `docs/product/LAUNCH_CHECKLIST.md`. A hipótese é pagamento único, sem checkout ativo. As funções legadas do Stripe usam assinatura; não representam a implementação de uma compra única. `offerDraft.js` não é importado pela aplicação pública. Testes de uso e disposição para pagar ainda não foram executados; não divulgar demanda ou resultados como validados.

## Acesso para verificar o site publicado

O acesso deste ambiente a `jobjump-snowy.vercel.app` exige o domínio na política de rede. Uma resposta 403 do proxy ao abrir o túnel CONNECT bloqueia o teste antes de alcançar a hospedagem; não comprova indisponibilidade ou autenticação exigida pelo site. A alteração da allowlist do ambiente não aplica headers nem publica arquivos na Vercel. Após a liberação efetiva de rede, repetir os testes no endereço público.
