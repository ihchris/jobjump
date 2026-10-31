# JobJump: demonstração pública local

Trabalhar apenas na branch `master`. Esta versão não cria contas, não conecta base de dados e não cobra pagamentos. A seleção pública contém 10 módulos, 30 ferramentas e modelos para download; conteúdos e funcionalidades não liberados não são apresentados como disponíveis. O progresso fica no navegador.

## Desenvolver

Node 24 está fixado em `.nvmrc`. npm 11 foi validado.

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 5173 --strictPort
```

Não é necessário criar `.env`, configurar Supabase ou informar credenciais. A presença de variáveis antigas do Supabase não ativa o backend: `src/lib/release.js` mantém `PUBLIC_DEMO` ligado. O aplicativo público não importa a aplicação conectada.

O percurso principal é: página inicial → demonstração → diagnóstico de seis perguntas → roteiro → primeira aula. Também é possível navegar para ferramentas, modelos, plano semanal, diário e favoritos. A saída da demonstração não apaga o progresso. Configurações oferece exportação e exclusão confirmada dos registros locais. Sem acesso ao armazenamento, o helper mantém os dados em memória durante a sessão.

## Validação

Com o servidor de desenvolvimento iniciado:

```sh
CHROMIUM_PATH=/usr/bin/chromium npm run test:smoke
CHROMIUM_PATH=/usr/bin/chromium npm run test:auth
npm run build
npm run test:release
CHROMIUM_PATH=/usr/bin/chromium npm run test:production
```

Em outra máquina, instale o Chromium do Playwright com `npx playwright install chromium` e omita `CHROMIUM_PATH`. O smoke test aceita `BASE_URL` e cobre 1440px, 390px e 320px. Ele valida diagnóstico, carregamento sob demanda, conclusão de aula, persistência após reload, geração STAR, extração de palavras-chave, busca por teclado, tema, exportação, navegação legal e fechamento de diálogos por teclado. Falha se houver solicitações externas ou erros de runtime.

`test:auth` usa um backend simulado para validar componentes de autenticação preservados para a etapa futura; não comprova email ou autenticação real e não faz parte do percurso público.

`test:release` verifica a completude da seleção pública, a ausência de conteúdo excluído, o número de perguntas dos quizzes, os limites do bundle e a geração de metadados por domínio. `test:production` inicia e encerra seu próprio servidor estático local com os headers configurados para deployment; verifica o bundle, download de documento, impressão em nova aba sob CSP, exclusão limitada aos dados da demonstração e funcionamento com armazenamento bloqueado. Isso não substitui validação na hospedagem real.

## Conteúdo e arquitetura

- `src/data/publicCatalog.js`: seleção revisada de metadados, sem bloqueio de pagamento na demo.
- `src/data/publicQuizzes.js`: cinco perguntas por módulo da seleção pública.
- `src/lib/content.js`: só importa os dez arquivos de aulas liberados, sob demanda. A biblioteca restante fica preservada no repositório, fora do build público.
- `src/data/toolCatalog.js`: ferramentas locais publicadas. O gravador foi retirado da seleção para não depender de microfone ou reconhecimento de voz do navegador.
- `src/components/ui/Brand.jsx`: identidade visual compartilhada; tokens de cor em `tailwind.config.js`.
- `src/integrations/`: aplicação conectada e acesso remoto preservados para uma etapa posterior. Seu uso exige revisão; alternar uma flag, sozinho, não conclui a integração.
- `supabase/migrations/` e funções de checkout/webhook: estrutura futura, sem aplicação ou deploy automático.

Não use a demonstração como mecanismo de proteção de conteúdo pago. Tudo que é entregue ao navegador pode ser copiado. Uma oferta paga exige autorização validada no servidor e conteúdo protegido na origem.

## Publicação e etapa comercial

Veja [DEPLOYMENT.md](DEPLOYMENT.md). A publicação precisa de aprovação explícita do responsável. A preparação e os testes locais não publicam o site.
