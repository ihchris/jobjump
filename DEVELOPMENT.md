# Desenvolvimento

Use Node 24 e npm 11, validados neste ambiente.

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 5173 --strictPort
npm run build
```

Sem as variáveis do Supabase, o aplicativo usa o modo demonstração. Não copie os valores fictícios de `.env.example`. O botão **Experimentar sem cadastro** abre o diagnóstico e a primeira aula sem criar uma conta. O progresso da demonstração fica neste navegador. Pagamentos, IA e conexões reais não fazem parte da prévia.

## Verificações

Com o servidor de desenvolvimento iniciado e Chromium instalado:

```sh
CHROMIUM_PATH=/usr/bin/chromium npm run test:smoke
CHROMIUM_PATH=/usr/bin/chromium npm run test:auth
```

Em outra máquina, instale o navegador do Playwright com `npx playwright install chromium` e omita `CHROMIUM_PATH`. `BASE_URL` permite selecionar outra porta do servidor de desenvolvimento. O teste de autenticação usa respostas simuladas e imports do servidor Vite: ele não comprova autenticação real nem faz solicitações aos provedores.

O smoke test cobre tela inicial, diagnóstico de seis perguntas, recomendação, abertura da primeira aula, saída da prévia e ausência de rolagem horizontal em 1440px, 390px e 320px. Também verifica que os textos das aulas só são solicitados ao abrir um módulo. No computador, o smoke test verifica também conclusão de aula e os avisos de indisponibilidade de pagamento e coach na demonstração. O teste de autenticação cobre erro de login, solicitação de recuperação e confirmação/atualização de senha com backend simulado.

Os metadados estão em `src/data/moduleCatalog.js`; os textos, em `src/data/lessons/`. `src/data/modules.js` mantém a exportação completa usada pelo script de seed do Supabase, sem integrar o bundle do navegador.

## Integrações externas: validação ainda necessária

Não há projeto Supabase nem provedores de pagamento/IA configurados neste ambiente. Antes de publicar essas funcionalidades, use um projeto de testes e as configurações de `.env.example` e `SECURITY_CRITICAL.md`. Nunca use chaves privadas em variáveis `VITE_`.

- Aplicar e verificar as migrações de `supabase/migrations/`, dados iniciais e políticas de acesso no projeto escolhido.
- Configurar URL e chave pública do Supabase, URLs de redirecionamento e funções necessárias.
- Testar cadastro com confirmação por email, login válido/inválido, logout e recuperação completa por um link recebido. O link deve abrir a tela de nova senha; após atualizar, verificar login com a nova senha.
- Configurar Stripe em modo de teste, preços mensal/anual e webhook. Testar checkout concluído, cancelado e recusado; verificar o plano no banco após o webhook e impedir acesso Pro para planos gratuitos. O retorno do checkout sozinho não comprova pagamento.
- Configurar Anthropic somente no servidor. Testar sessão ausente/expirada, limite de uso, indisponibilidade do provedor e resposta válida do coach.
- Verificar logs sem registrar credenciais ou dados sensíveis. Não executar testes de cobrança em produção.

As configurações e testes reais acima dependem do projeto e das contas escolhidos pelo responsável. O build e testes locais não substituem essa validação.

## Identidade visual

A marca compartilhada está em `src/components/ui/Brand.jsx`, com símbolo turquesa e nome legível em fundos claros e escuros. `public/logo.png` contém a composição redesenhada completa; o site usa o ícone transparente `public/brand-icon.webp`, convertido sem perdas, e a versão PNG como favicon.
