# Changelog — EpiOrbit

Formato: [Keep a Changelog](https://keepachangelog.com/pt-PT/1.1.0/). Versões: [SemVer](https://semver.org/lang/pt-BR/).
Windows e Android têm ciclos próprios. Tags: `v1.0.0` e `v1.0.1` (Windows, históricas); a partir de agora `windows-vX.Y.Z` e `android-vX.Y.Z`.

## [Windows 1.0.1] — 2026-11-15 · tag `v1.0.1`
### Adicionado
- Cache local (memória + disco) das respostas TMDB, TVmaze e OMDb, com validade por tipo de dado.
- Estatísticas de pedidos feitos/poupados no Diagnóstico do sistema.
- Estado real do arranque com o Windows nas Definições.
### Alterado
- Pesquisa sem pedidos extra desnecessários; notificações reutilizam dados recentes que não são datas.
- Limite de pedidos em paralelo e nova tentativa em HTTP 429.
- Aviso na primeira vez que a aplicação inicia minimizada; primeira verificação de notificações adiada 45 s no arranque do Windows.
### Corrigido
- Opções de arranque só aplicadas ao carregar em «Guardar».
- Arranque bloqueado após desativação no Gestor de Tarefas.
- Entrada de arranque a apontar para um executável inexistente.
- Caixa de arranque com estado diferente do real após guardar.
- Pasta de trabalho `System32` no arranque automático.

## [Windows 1.0.0] — 2026-11-07 · tag `v1.0.0`
### Adicionado
- Primeira versão estável para Windows x64: biblioteca de séries, anime e filmes; listas My Watchlist, Plan to Watch e On Hold; calendário; notificações; temporadas e episódios vistos; trailers TMDB e títulos semelhantes; temas claro/escuro; PT-PT/EN; cópias de segurança locais; assistente de primeira utilização para as credenciais TMDB/OMDb.
