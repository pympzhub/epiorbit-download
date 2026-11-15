## EpiOrbit 1.0.1 (Windows) — Atualização de manutenção

### Novas funcionalidades
- **Cache local das respostas** do TMDB, TVmaze e OMDb (em memória e no disco), mantida entre reinícios do Windows.
- **Diagnóstico do sistema** mostra quantos pedidos foram feitos à Internet e quantos foram poupados pela cache.
- **Estado real do arranque com o Windows** nas Definições: ativo, bloqueado pelo Windows, ficheiro em falta ou outra cópia.
- **Painel Sobre** com o logótipo EpiOrbit e o logótipo oficial do TMDB, junto do aviso de atribuição.

### Melhorias
- Cada tipo de dado tem uma validade própria (ex.: IDs externos 30 dias, plataformas 24 h, datas de episódios 6–12 h).
- Pedidos iguais feitos ao mesmo tempo partilham uma única ligação.
- Sem Internet, a aplicação usa a última informação conhecida em vez de mostrar erro.
- A pesquisa deixa de fazer 2 pedidos extra quando os resultados já correspondem ao termo pesquisado.
- A verificação de notificações reutiliza plataformas, IDs e dados TVmaze recentes; as datas de estreia continuam atualizadas.
- Limite de pedidos em simultâneo e nova tentativa automática quando o TMDB pede para abrandar (HTTP 429).
- Ao iniciar minimizada pela primeira vez, a aplicação avisa que está na área de notificação.
- Quando arranca com o Windows, a primeira verificação de notificações espera 45 s para a rede ligar.
- O componente WebView2 é iniciado antes de a janela ser escondida na área de notificação.

### Bugs corrigidos
- As opções «Iniciar o EpiOrbit com o Windows» e «Iniciar minimizado» só eram aplicadas ao carregar em «Guardar»; agora aplicam-se de imediato.
- O arranque automático não funcionava se o EpiOrbit tivesse sido desativado alguma vez no Gestor de Tarefas; ativar a opção na aplicação volta a autorizá-lo.
- A entrada de arranque podia apontar para um ficheiro que já não existia (aplicação movida ou versão antiga); passa a ser reparada ao abrir a aplicação.
- Depois de guardar as preferências, a caixa de arranque podia mostrar um estado diferente do real.
- Ao arrancar com o Windows, a pasta de trabalho era `C:\Windows\System32`; passa a ser a pasta da aplicação.

### Alterações de compatibilidade
- Instala-se **por cima da 1.0.0**: listas, histórico, definições e chaves são mantidos (mesmo identificador da aplicação e mesma pasta de dados `%LOCALAPPDATA%\EpiOrbit`).
- Nova pasta `%LOCALAPPDATA%\EpiOrbit\Cache\Api`: não contém chaves API, não entra nas cópias de segurança, limpa-se sozinha após 45 dias e pode ser apagada sem perder dados.
- A desinstalação remove também a autorização de arranque do Windows criada pelo EpiOrbit.
- Requisitos inalterados: Windows 10/11 x64; o instalador instala o WebView2 da Microsoft se for necessário.

### Problemas conhecidos
- O instalador não tem assinatura digital: o Windows SmartScreen pode mostrar «Editor desconhecido» (escolhe «Mais informações» › «Executar mesmo assim»).
- A poupança de pedidos só se nota depois da primeira utilização, quando a cache já tem dados.

### Instruções de atualização
1. Fecha o EpiOrbit (incluindo o ícone junto ao relógio › «Sair do EpiOrbit»).
2. Descarrega e executa `EpiOrbit_Setup_1.0.1_x64.exe`.
3. Abre o EpiOrbit uma vez pelo Menu Iniciar.
4. Se usas o arranque automático, confirma em Definições › Notificações que o estado diz «Ativo».
