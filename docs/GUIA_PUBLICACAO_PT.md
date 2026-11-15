# EpiOrbit — Guia de publicação no GitHub (Windows e Android)

Este sistema publica uma versão nova do EpiOrbit em **pympzhub/epiorbit-download** com o menor número de passos possível. É reutilizável: para cada versão nova mudam apenas o `publicacao.json`, as notas e (se necessário) a pasta `repo-overlay`.

- Página pública: <https://pympzhub.github.io/epiorbit-download/>
- Downloads: <https://github.com/pympzhub/epiorbit-download/releases>

---

## 1. O que está nesta pasta

| Ficheiro | Para que serve |
|---|---|
| `PUBLICAR_EPIORBIT.bat` | **O único ficheiro que precisas de abrir.** |
| `PUBLICAR_EPIORBIT.ps1` | O script que faz o trabalho (chamado pelo .bat). |
| `publicacao.json` | Versão, plataforma, tag e nome do ficheiro a publicar. |
| `RELEASE_NOTES_PT.md` / `RELEASE_NOTES_EN.md` | Texto da Release (PT-PT e inglês). |
| `CHANGELOG.md` | Histórico de todas as versões. |
| `repo-overlay\` | Ficheiros copiados para o repositório público (página, documentação). |
| `saida_<tag>\` | Criada pelo script: `SHA256SUMS.txt`, `LINKS_PUBLICOS.txt`, cópias de segurança. |
| `publicacao_*.log` | Registo completo de cada execução (útil se houver erros). |

## 2. Preparação (só da primeira vez)

1. Instala o **Git**: <https://git-scm.com/downloads> (opções por defeito).
2. Instala o **GitHub CLI**: <https://cli.github.com/> (opções por defeito).
3. Fecha e volta a abrir o Explorador de Ficheiros. O script trata do login no GitHub.

## 3. Publicar (sempre igual)

1. Cria o instalador (Windows: `Fase22\CRIAR-INSTALADOR.bat`) ou o APK (Android), e **testa-o**.
2. Põe esta pasta ao lado da pasta `Build_Fase22` (ou dentro da pasta do projeto). Assim o script encontra o instalador sozinho; se não o encontrar, abre uma janela para o escolheres.
3. *(Opcional, recomendado)* Faz um ensaio sem publicar: abre uma Linha de Comandos nesta pasta e escreve `PUBLICAR_EPIORBIT.bat -SoVerificar`.
4. Dá duplo clique em **`PUBLICAR_EPIORBIT.bat`** e responde às perguntas:
   - `PUBLICAR`: cria a Release nova;
   - `AUTORIZO`: altera algo numa Release que já existe (só acrescenta; nunca apaga);
   - `ATUALIZAR`: envia as alterações da página;
   - `SUBSTITUIR`: só aparece se o ficheiro publicado for diferente do teu (desaconselhado; publica antes uma versão nova).
5. No fim, abre `saida_<tag>\LINKS_PUBLICOS.txt`.

### O que o script verifica sozinho
- Git e GitHub CLI instalados, sessão iniciada e permissão de escrita no repositório.
- Versão, canal e tag coerentes (ex.: `1.1.0-beta` só com o canal `beta`).
- Nome exato do ficheiro, tamanho, tipo (EXE/APK) e versão interna do instalador.
- Assinatura digital (avisa se não houver; um APK «Release» com chave Debug é recusado).
- Auditoria `VERIFICAR-RELEASE` do projeto Windows **com a mesma versão** (pastas de versões antigas ao lado de `Build_Fase22` são ignoradas). Se o projeto estiver noutro sítio, indica-o em `publicacao.json` › `projectDir`.
- Tokens TMDB, chaves OMDb, chaves privadas, keystores e ficheiros pessoais em tudo o que vai para o público.
- Se a tag ou a Release já existem. **Não reutiliza tags nem apaga Releases.**
- Se o ficheiro já publicado é idêntico ao teu (compara o SHA-256).
- Cópia de segurança completa da página antes de a alterar, e mostra as diferenças antes de enviar.
- No fim: o download público responde, a página mostra a versão nova e **todas as Releases anteriores continuam disponíveis**.

## 4. Preparar a próxima versão

1. Edita `publicacao.json`:

```json
{
  "platform": "windows",
  "version": "1.0.2",
  "channel": "stable",
  "tag": "windows-v1.0.2",
  "assetName": "EpiOrbit_Setup_1.0.2_x64.exe",
  "title": "EpiOrbit 1.0.2 (Windows)",
  "markLatest": true,
  "site": { "update": true }
}
```
(mantém os restantes campos: `repo`, `pagesUrl`, `notesPt`, `notesEn`, `assetPath`, `projectDir`, `apkBuild`).

2. Reescreve `RELEASE_NOTES_PT.md` e `RELEASE_NOTES_EN.md` (mesmas secções: Novas funcionalidades, Melhorias, Bugs corrigidos, Alterações de compatibilidade, Problemas conhecidos, Instruções de atualização). Inclui apenas alterações reais e testadas.
3. Acrescenta a versão ao topo de `CHANGELOG.md` e copia-o para `repo-overlay\CHANGELOG.md`.
4. Copia as notas para `repo-overlay\docs\releases\<tag>\`.
5. Apaga de `repo-overlay` os ficheiros específicos da versão anterior que não queres voltar a copiar (ex.: `site\privacy.html`, se não mudou).

### Versões e tags

| Tipo | Versão | Canal | Tag Windows | Tag Android | Release |
|---|---|---|---|---|---|
| Primeiros testes | 1.1.0-preview | preview | windows-v1.1.0-preview | android-v1.1.0-preview | Pre-release |
| Testes avançados | 1.1.0-beta | beta | windows-v1.1.0-beta | android-v1.1.0-beta | Pre-release |
| Candidata | 1.1.0-rc1 | rc | windows-v1.1.0-rc1 | android-v1.1.0-rc1 | Pre-release |
| Estável | 1.1.0 | stable | windows-v1.1.0 | android-v1.1.0 | Normal |
| Correção | 1.1.1 | stable | windows-v1.1.1 | android-v1.1.1 | Normal |

`v1.0.0` e `v1.0.1` (Windows) mantêm-se como estão: não se renomeiam tags publicadas.

## 5. Android — repositório e assinatura

### Mesmo repositório ou separado?
**Recomendação: o mesmo repositório (`epiorbit-download`)**, com tags `android-v…`:
- uma só página pública, um só sítio de downloads e um só separador Issues;
- as versões de teste Android são publicadas como **Pre-release** e com `--latest=false`, por isso **não tiram o selo «Latest» ao Windows**;
- os botões da página apontam para endereços fixos de cada versão, por isso Windows e Android não interferem.

Um repositório separado só compensa se o Android vier a ter página própria ou equipa própria.

### Na primeira publicação Android
- Em `publicacao.json`: `"platform": "android"`, `"tag": "android-v1.1.0-preview"`, `"assetName": "EpiOrbit_1.1.0-preview_android.apk"`, `"apkBuild": "Release"` (ou `"Debug"` só para testes internos), `"assetPath": "caminho\\para\\o\\apk"`, `"site": { "update": false }`.
- A secção Android da página (botão e requisitos) deve ser desenhada uma vez, mantendo o estilo Dark Cinematic. O script **não** altera botões Android sozinho.

### Criar a chave de assinatura (gratuito, só uma vez)
A chave identifica-te como autor: as atualizações do APK têm de ser assinadas **sempre com a mesma chave**. Se a perderes, os utilizadores terão de desinstalar e voltar a instalar.

- **Mais simples:** no Visual Studio, clica com o botão direito no projeto Android, escolhe **Publicar…** › **Ad Hoc** › **Criar identidade de assinatura**, e preenche os dados e uma palavra-passe forte.
- **Alternativa (linha de comandos, com o JDK instalado pelo Visual Studio):**
  `keytool -genkeypair -v -keystore epiorbit-release.keystore -alias epiorbit -keyalg RSA -keysize 4096 -validity 10000`

Guarda a keystore e a palavra-passe **fora** de qualquer pasta que vá para o GitHub (ex.: gestor de palavras-passe + cópia numa pen USB). Nunca a ponhas no projeto público, no ZIP ou numa Issue. O script recusa publicar qualquer `.keystore`/`.jks`.

## 6. Segurança e licenças (antes de cada versão)
- [ ] `VERIFICAR-RELEASE` (Windows) termina em `[OK]`.
- [ ] Sem tokens TMDB, chaves OMDb, backups ou ficheiros de `%LOCALAPPDATA%\EpiOrbit`.
- [ ] Atribuição TMDB («This product uses the TMDB API but is not endorsed or certified by TMDB.») e **logótipo oficial TMDB** no ecrã Sobre da aplicação.
- [ ] Atribuição TVmaze (CC BY-SA) e condições OMDb.
- [ ] A página e o repositório contêm só o site e a documentação, **nunca o código-fonte**.

## 7. Se algo correr mal
- O script pára e mostra `[ERRO]` com a explicação. Envia essa mensagem e o ficheiro `publicacao_*.log`.
- **Página com problemas:** a cópia anterior está em `saida_<tag>\backup_site_e_docs_*.zip`. Para reverter, na pasta `epiorbit-download` corre `git revert HEAD` e depois `git push`.
- **Release errada:** não apagues nada; publica uma versão de correção (ex.: 1.0.2).
