# EpiOrbit 1.0.0 — Guia de publicação pública

## Objetivo
Publicar **uma página pública** no GitHub Pages e **o instalador Windows** como anexo da GitHub Release `v1.0.0`. Não é necessário publicar o código C#, o projeto Visual Studio ou as chaves API.

## Antes do clique (pré-requisitos obrigatórios)

- [ ] O instalador final `EpiOrbit_Setup_1.0.0_x64.exe` foi criado, testado na VM e não contém dados privados ou chaves API.
- [ ] O instalador inclui na secção **Sobre/Créditos** o logótipo TMDB aprovado, sem alterações, e a frase oficial de atribuição. **O projeto 1.0.0 anterior tinha a frase, mas a presença do logótipo oficial não foi validada.** Consulta <https://www.themoviedb.org/about/logos-attribution>.
- [ ] A atribuição TVmaze está visível e o uso dos dados cumpre as condições CC BY-SA / ShareAlike aplicáveis.
- [ ] A utilização de OMDb e de imagens ou marcas respeita os termos aplicáveis, incluindo a utilização não comercial.
- [ ] O instalador final foi revisto quanto a serviços externos e recursos de terceiros.
- [ ] Conta GitHub pronta; Git e GitHub CLI instalados. 
- [ ] Sabes que **um repositório público e a Release são visíveis a qualquer pessoa**.

## Um passo de publicação

1. Extrai este ZIP para uma pasta no Windows.
2. Executa **`PUBLICAR_EPIORBIT.bat`**. O assistente procura o instalador; se não o encontrar, permite escolhê-lo na janela de seleção de ficheiros.
3. Se ainda não tiveres iniciado sessão no GitHub CLI, o assistente ajuda-te a fazê-lo no browser.
4. Confirma explicitamente as verificações de distribuição e a publicação pública quando solicitado.
5. O script cria um **repositório público apenas com a página**, publica o instalador na Release `v1.0.0`, gera SHA-256 e configura o GitHub Pages.

O script **não** publica código-fonte, backups, ficheiros de configuração nem dados dos utilizadores. Não reutiliza um repositório existente, para evitar sobrescrever trabalho anterior. Se o nome predefinido já existir, o script pede para escolheres um nome novo.

## Instalar Git / GitHub CLI (gratuitos)

- Git: <https://git-scm.com/downloads>
- GitHub CLI: <https://cli.github.com/>
- GitHub Pages: <https://docs.github.com/en/pages>

## O que verificar depois

- Abre a página no endereço que o script apresenta.
- Testa o botão de download; confirma que o instalador publicado tem o mesmo SHA-256 que o teu ficheiro local.
- Confirma visualmente a secção de créditos no instalador final.
- Testa a Release numa VM Windows sem Visual Studio.
- Não publiques chaves API, emails pessoais nem dados dos utilizadores no repositório/Issues.

## Se surgir um problema

O script interrompe a publicação antes de criar o repositório se os pré-requisitos não estiverem completos. Se falhar depois de criar o repositório, mostra o nome da conta/repositório para terminares ou eliminares os recursos no GitHub. **Não afirma que a publicação foi concluída se houver erro.**

## Atenção à assinatura digital

Um instalador sem assinatura Authenticode poderá gerar um aviso SmartScreen. O script indica o estado da assinatura e não o altera. Uma assinatura digital de editor não é obrigatória para gerar o ficheiro, mas pode ser útil para distribuição pública. Não se deve aconselhar os utilizadores a desativar proteções do Windows.
