# Material de Fundamentos — Conversão Visual / GDesign
Extraído fielmente do Figma "Didático Conversão Visual" em 13/08/2026.
Uso: colar este arquivo como instrução de contexto (ex: `FUNDAMENTOS.md` na raiz do projeto ou dentro de `.claude/`) sempre que iniciar um novo projeto de site/página de vendas.

> Nota: a copy final e a estrutura de seções/dobras de cada projeto específico vêm sempre do briefing enviado separadamente e têm prioridade sobre qualquer exemplo de fluxo mencionado aqui. Este documento é a base de fundamentos de design, não um template fixo de página.

---

## 1. O QUE É UI DESIGN

**UI Design não é decoração. É comunicação.**
A interface é o meio entre a pessoa e o objetivo dela. Se a pessoa quer comprar, a interface precisa facilitar a compra. Se quer se cadastrar, a interface precisa deixar o caminho óbvio. Tudo que dificulta isso é design ruim, independente de ser bonito.

**Pessoas não leem páginas. Escaneiam.**
O visitante não lê a página de cima a baixo como um livro. Ele bate o olho, escaneia os elementos maiores, decide em 3 a 5 segundos se vai continuar ou sair. Se nesse tempo ele não entendeu o que a página oferece, já perdeu. Isso muda tudo no jeito de projetar: cada elemento precisa justificar sua existência. Se não ajuda o visitante a entender ou agir, atrapalha.

**A diferença entre decorar e comunicar**
Decorar é escolher cores bonitas, fontes estilosas e colocar efeitos porque ficam legais. Comunicar é fazer o visitante olhar pra página e entender a mensagem sem esforço. Um hero com tipografia enorme e fundo gradiente pode ser lindo, mas se a headline não comunica o que o produto faz, é decoração. Um botão com micro-animação pode ser sofisticado, mas se a pessoa não percebe que precisa clicar ali, é firula.

**O que o UI Designer faz de verdade**
- Organiza informação
- Define o que a pessoa vê primeiro, segundo e terceiro
- Cria caminhos claros pra ação
- Remove o que distrai
- Reforça o que importa

Não é sobre pixel perfeito. É sobre decisão visual com intenção.

**As 3 perguntas que toda interface precisa responder em 5 segundos**
1. O que é isso?
2. O que eu ganho com isso?
3. O que eu faço agora?

Se a página responde as três, funciona. Se não responde nenhuma, não importa quanto efeito tenha.

**Onde o UI Designer atua**
Sites, Landing pages, Páginas de captura, Páginas de vendas, Apps, Dashboards, Sistemas — qualquer tela onde uma pessoa precisa entender algo e tomar uma decisão. O mercado é gigante e a demanda cresce todo ano porque tudo está migrando pro digital.

**A mentalidade certa pra começar**
Esqueça "fazer bonito". Pense em "fazer funcionar". A beleza vem quando a estrutura está certa, a hierarquia está clara e cada elemento tem um motivo pra existir. Design bonito que não comunica é pôster. Design que comunica e também é bonito é UI profissional.

---

## 2. FUNDAMENTOS DE UI DESIGN

Os 6 princípios que estruturam qualquer interface que funciona: **hierarquia, contraste, alinhamento, proximidade, repetição e espaçamento.** Não são estilo. São lógica visual. Se a página comunica sem esforço, esses princípios estão funcionando. Se confunde, pelo menos um está quebrado.

### Hierarquia
O que é maior e mais pesado, o olho lê primeiro. O cérebro humano não escolhe, processa automaticamente na ordem: **tamanho, peso, cor.** Uma página sem hierarquia é uma página onde tudo grita ao mesmo tempo. Se tudo é importante, nada é importante.

**Ordem de força:** Tamanho > Peso > Cor > Posição

A headline precisa ser o maior elemento de texto da tela. A sub precisa ser visivelmente menor. O corpo menor ainda. Se o visitante borra os olhos e ainda entende a ordem de leitura, a hierarquia tá certa.

### Contraste
Contraste não é só preto no branco. É diferença. Qualquer diferença visual entre dois elementos: tamanho, cor, peso, forma, textura, espaço. Sem contraste, nada se destaca. Com contraste demais em tudo, nada se destaca também. O segredo é contraste intencional: forçar a diferença onde você quer atenção e suavizar onde não quer.

**Tipos de contraste que o designer usa todo dia:**
Exemplo prático: Headline 48px ao lado de corpo 24px, com botão CTA.
- O olho vai pro 48 primeiro.
- **Cor:** botão verde sobre fundo escuro. O botão pula da tela.
- **Peso:** uma palavra em bold dentro de uma frase regular. O olho vai pra ela.
- **Forma:** um círculo numa página cheia de retângulos. Quebra o padrão.
- **Espaço:** um card com respiro ao redor vs texto amontoado. O card parece mais importante.

**Regra:** se dois elementos parecem iguais mas não são a mesma coisa, um deles precisa mudar. Ou corta ou diferencia.

### Alinhamento
Alinhamento cria ordem invisível. Quando elementos compartilham a mesma linha de referência, o olho percebe organização. Quando não compartilham, percebe amadorismo, mesmo sem saber explicar por quê. Toda página profissional segue linhas invisíveis — são os grids. O texto começa no mesmo ponto. Os cards têm a mesma largura. Os ícones estão na mesma altura. Nada está "mais ou menos" posicionado.

**Regras práticas de alinhamento:**
- **Texto à esquerda:** sempre. É o padrão de leitura ocidental. O olho começa pela esquerda naturalmente.
- **Centralizado:** só em hero, CTAs e títulos de seção. Nunca em parágrafos de corpo. Nunca misture alinhamento à esquerda e centralizado na mesma seção — parece que escorregou sem querer.
- **Justificado:** nunca em tela. Funciona em livro impresso. Em interface cria buracos de espaço que atrapalham a leitura.
- **O grid existe pra isso:** definir as linhas invisíveis que tudo segue. Um grid de 12 colunas resolve 95% dos layouts. Se o elemento não está encostando numa linha do grid, tem algo errado.

### Proximidade
Perto significa relacionado. Longe significa separado. O cérebro agrupa automaticamente o que está próximo e separa o que está distante. Isso é mais forte que cor, borda ou qualquer outro indicador. O espaço entre o título e o parágrafo deve ser menor que o espaço entre o parágrafo e a próxima seção. Parece óbvio mas a maioria das páginas erra isso.

**O erro mais comum:** espaçamento uniforme em tudo. Mesmo gap entre título e corpo, entre corpo e próxima seção, entre seção e footer. O resultado é que nada parece agrupado. Tudo parece solto.

**A regra:** mais espaço entre seções, menos espaço dentro delas. O espaço interno do bloco deve ser visivelmente menor que o espaço externo.

### Repetição
Elementos que se repetem criam consistência e ritmo. Quando os cards têm a mesma estrutura, as seções seguem o mesmo padrão e os botões têm o mesmo estilo, a página inteira parece profissional. Quando cada seção inventa um jeito novo de mostrar informação, parece amador.

**Onde aplicar repetição:**
- **Componentes:** todos os botões primários têm a mesma cor, tamanho e border-radius. Sem exceção.
- **Espaçamentos:** o gap entre seções é sempre o mesmo. 80px, 100px, o valor que for. Mas sempre o mesmo.
- **Tipografia:** a mesma fonte, os mesmos pesos, a mesma escala na página inteira. Cores: paleta definida e respeitada. Nenhuma cor nova aparece do nada.

Repetição não é monotonia. É sistema. É o que faz o visitante entender a linguagem da página sem precisar reaprender a cada scroll.

### Espaçamento
Espaço em branco é design. Não é "área vazia que precisa ser preenchida". É o que dá respiro, cria hierarquia e faz cada elemento ser percebido individualmente. Designers iniciantes têm medo de espaço. Acham que precisa preencher tudo. O resultado é uma página sufocada onde nada respira e tudo compete por atenção.

**Sistema de 8pt:** todo espaçamento na página deve ser múltiplo de 8. Paddings, gaps, margens, tudo.

`8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 120...`

| Categoria | Valores (px) |
|---|---|
| X-Small | 02, 04, 06, 08 |
| Small | 12, 16, 20, 24 |
| Medium | 32, 40, 48, 56 |
| Large | 64, 72, 80, 88, 96 |
| X-Large | 112, 120, 128, 144, 192 |
| Gap (entre seções) | 230, 320, 640 |

Isso cria consistência automática. Você não precisa decidir "quanto de espaço coloco aqui" toda vez. Pega o múltiplo de 8 mais próximo da sensação que quer e pronto.

---

## 3. ÍCONES

Ícones são elementos gráficos simples que facilitam a comunicação dentro de uma interface. São pequenos, mas fazem um trabalho gigante: guiar, reforçar ações e facilitar entendimento. Mas se você misturar estilos diferentes, seu layout vira uma bagunça visual.

**Papel dos ícones na criação de páginas:**
- **Guia visual:** direcionam a atenção do usuário para botões, menus e ações.
- **Complemento de texto:** reduzem a carga cognitiva, substituindo ou reforçando palavras.
- **Consistência de linguagem:** quando usados no mesmo estilo, deixam o layout limpo e coerente.
- **Estética e identidade:** além de funcionais, transmitem personalidade da marca.

**Boas práticas no uso de ícones:**
- **Consistência é regra:** escolha um estilo e mantenha em todo o projeto.
- **Legibilidade:** evite ícones excessivamente detalhados, principalmente em tamanhos pequenos.
- **Escala:** defina um grid base (16px, 24px ou 32px) para todos os ícones.
- **Alinhamento:** sempre alinhe com texto e elementos próximos.
- **Cor:** use tons neutros ou tokens de cor definidos no design system.
- **Texto de apoio:** em ações críticas, sempre combine ícone + label para evitar ambiguidades.

**Erros mais comuns:**
- Misturar estilos diferentes no mesmo layout.
- Usar ícones sem relação clara com a ação.
- Substituir textos importantes apenas por ícones (sem label).
- Exagerar no uso → polui em vez de ajudar.

**Estilos de ícones disponíveis:**
| Estilo | Característica |
|---|---|
| Broken | Traços abertos, modernos, com leveza |
| Curved | Linhas arredondadas, simpáticas e amigáveis |
| Outline | Contorno fino, mais elegante |
| Border | Parecido com outline, mas com traço contínuo |
| Two tone | Combina duas cores, ótimo para ênfase |
| Bulk | Preenchidos com peso, usados para chamar mais atenção |
| Bold | Linhas grossas e fortes, transmitem impacto |

**Ícones & Peso Visual**
"Peso visual" é o impacto percebido de um elemento dentro do layout. Se o ícone é muito grosso e o texto é fino, fica desproporcional. Se o texto é bold e o ícone muito leve, parece quebrado. **Equilíbrio é a chave: ícone e tipografia precisam conversar.**

**Combinação ideal:**
- Ícone leve + texto leve → Equilíbrio
- Ícone outline + label regular → Consistência
- Ícone bold + texto bold → Harmonia

Nunca misture pesos diferentes sem critério → quebra a hierarquia.

**Recomendações finais:**
- Escolha um único estilo e siga ele em todo o projeto.
- Se usar Two Tone, defina uma paleta fixa (ex: primária + cinza).
- Use consistência → ícone comunica tanto quanto tipografia e cor.
- Sempre olhe o conjunto, não o elemento isolado.
- Ajuste o tamanho do ícone com base no tamanho da fonte, não no "px solto".
- Centralize visualmente, não matematicamente (especialmente em botões).
- Defina um grid base de ícones (ex: 16px, 24px, 32px) e mantenha em todo o projeto.
- Prefira ícones com a mesma linguagem geométrica (curvas, ângulos, proporção).

---

## 4. CORES

As cores são um dos elementos mais poderosos no design de interfaces. Elas não apenas tornam um layout mais bonito, mas também guiam o olhar do usuário, destacam elementos importantes, criam hierarquia e transmitem sensações. Uma paleta bem construída é capaz de reforçar a identidade visual da marca, melhorar a experiência do usuário e tornar a navegação mais clara e intuitiva.

### Cores Primárias
São a base de tudo. Não podem ser criadas a partir de outras. As cores primárias são a base de toda a teoria da cor — não podem ser criadas a partir da mistura de outras e são responsáveis por gerar todas as demais tonalidades. Em geral, consideramos vermelho, azul e amarelo como primárias no modelo tradicional, e ciano, magenta e amarelo no sistema digital (CMY). No UI Design, a cor primária é aquela escolhida como principal da interface — geralmente usada em botões de destaque, links e elementos de maior ênfase. É a cor que transmite a identidade central do produto ou serviço.

### Cores Secundárias
Nascem da mistura entre duas primárias. Surgem da mistura de duas cores primárias. São elas que criam diversidade visual e oferecem alternativas de apoio para a interface. Em sistemas digitais, verde, laranja e roxo são exemplos comuns. No contexto de páginas e sites, as cores secundárias funcionam como apoio à primária: podem aparecer em botões secundários, cards de informação, fundos de seções ou até mesmo como cor de hover em elementos interativos.

### Cores Neutras
Servem de base, respiro, e ajudam a destacar outras cores. As cores neutras — preto, branco e tons de cinza — são fundamentais no design digital. Elas dão respiro às interfaces e servem como pano de fundo para que as cores principais ganhem destaque. Sem o uso de neutros, uma paleta pode parecer pesada ou confusa. Elas funcionam como a base de tipografia, containers, fundos de páginas e áreas de leitura.

### Cores Frias
Sensação de calma, confiança. As cores frias (azul, verde, roxo) estão associadas à calma, confiança e estabilidade. São muito utilizadas em interfaces corporativas, bancárias e tecnológicas justamente por transmitirem credibilidade. No design de páginas, cores frias ajudam a criar ambientes sóbrios e profissionais, reduzindo a fadiga visual e aumentando a sensação de segurança.

### Cores Quentes
Usadas para criar contraste forte e chamar atenção. As cores quentes (vermelho, laranja, amarelo) transmitem energia, movimento e urgência. São ótimas para chamar atenção em botões de ação, mensagens de alerta ou promoções. Entretanto, precisam ser usadas com cuidado: o excesso de cores quentes pode gerar ansiedade no usuário e comprometer a legibilidade.

### Cores de Alerta / Status
Esse padrão é reconhecido universalmente e facilita a comunicação rápida dentro das páginas. É comum termos uma paleta funcional dedicada a alertas e mensagens de status:
- **Informações:** geralmente azul, indica uma mensagem neutra ou informativa.
- **Aviso:** amarelo ou laranja, sinaliza atenção ou risco moderado.
- **Erro:** vermelho, indica falha ou ação inválida.
- **Sucesso:** verde, confirma que uma ação foi concluída com êxito.

### Cores de ornamentos
Paleta funcional completa reconhecida universalmente, disponível em tom cheio e tom claro: Roxo, Pink, Vermelho, Laranja, Amarelo, Verde, Azul.

### Escala de Cores
Ter uma cor base não é suficiente. É preciso trabalhar com variações claras e escuras de cada cor, criando escalas. Isso permite aplicar diferentes estados em botões (hover, active, disabled) e definir hierarquia entre elementos.

**Exemplo de nomenclatura de tokens:** `primary-100` até `primary-900`, com incrementos de 100 em 100 (100, 200, 300, 400, 500, 600, 700, 800, 900) — do tom mais claro ao mais escuro.

### Acessibilidade e WCAG
O uso de cores deve sempre respeitar as diretrizes de acessibilidade (WCAG). Um dos pontos principais é o **contraste mínimo de 4.5:1 entre texto e fundo**, para garantir legibilidade a todos os usuários, incluindo pessoas com deficiência visual. Ferramentas dentro do Figma ou plugins externos permitem checar se sua paleta atende aos padrões. Essa organização em tokens facilita o trabalho em equipe e garante consistência em grandes projetos.

### Como definir cores para páginas e sites
Definir claramente essas funções evita poluição visual e garante consistência na experiência do usuário.
- **Primária:** destaque principal, usada em botões, links e CTAs.
- **Secundária:** cor de apoio, reforça a primária sem competir.
- **Neutras:** base da interface, aplicadas em textos, fundos e containers.
- **Alertas:** mensagens funcionais (erro, aviso, sucesso, info).
- **Accent:** detalhes que reforçam identidade e estilo.

### Erros comuns
- Paletas com muitas cores sem função definida.
- Falta de contraste suficiente em textos e botões.
- Uso de cores apenas por estética, sem relação com a identidade.
- Repetição de cores quentes e chamativas em excesso.

**Conclusão:** Cores não servem apenas para deixar o layout bonito. Elas são uma ferramenta estratégica para guiar, comunicar e criar confiança no usuário. Dominar os princípios de cores é essencial para qualquer UI Designer que queira criar páginas consistentes, acessíveis e de alto impacto.

---

## 5. TIPOGRAFIA

Tipografia é muito mais do que escolher uma fonte bonita. Ela organiza a informação, cria hierarquia e garante legibilidade dentro de páginas e interfaces. Uma tipografia bem aplicada dá ritmo à leitura, transmite personalidade da marca e aumenta a clareza da comunicação.

### Hierarquia Tipográfica (H1, H2, H3...)
| Nível | Função |
|---|---|
| H1 | Título principal, maior peso visual da página |
| H2 | Subtítulo, introduz seções |
| H3 | Usado em blocos menores, tópicos e conteúdos secundários |
| Paragraph | Responsável pela leitura contínua |
| Lead | Parágrafo, geralmente maior ou em bold, que resume a ideia principal |
| Caption/Label | Textos de apoio, instruções, botões e formulários |

Nunca misture pesos diferentes sem critério → quebra a hierarquia. O segredo é manter consistência no uso desses estilos ao longo de todo o site.

### Tamanhos e Proporções
Defina uma escala tipográfica fixa: **12, 14, 16, 20, 24, 32, 48px.** Essa escala garante que todos os elementos mantenham proporção visual coerente. Evite "inventar" tamanhos fora da escala — isso quebra o ritmo visual.

### Line-height (Altura de linha)
- **Corpo de texto:** entre 140% e 160% do tamanho da fonte (ex: texto 16px → line-height 24px).
- **Títulos:** podem ter line-height menor (110%–120%), criando impacto visual.
- Line-height errado pode deixar o texto apertado demais ou solto demais.

### Letter-spacing (Espaçamento entre letras)
- **Textos grandes em bold:** podem precisar de letter-spacing negativo (-1% a -2%) para não parecerem esmagados.
- **Textos longos:** funcionam melhor com espaçamento neutro ou levemente positivo.
- **Labels e botões em uppercase:** costumam ter mais espaçamento (tracking aumentado) para dar clareza.

### Viúva e Órfã
- **Viúva:** quando sobra uma única palavra sozinha em uma linha final.
- **Órfã:** quando a primeira palavra de um parágrafo fica isolada em uma linha.

Esses erros quebram o ritmo da leitura e passam impressão de descuido. Sempre revise seus textos e ajuste manualmente quando necessário.

### Dicas práticas de tipografia em UI
- **Consistência visual:** use text styles salvos no Figma para evitar variação solta.
- **Acessibilidade:** tamanho mínimo para corpo de texto em web é 12-16px.
- **Contraste:** não use tipografia clara em fundo claro ou escura em fundo escuro.
- **Alinhamento:** prefira alinhamento à esquerda para textos longos.
- **Sistema de estilos:** nomeie textos como H1, Body, Caption etc., padronize!

**Erros comuns:**
- Usar muitas fontes diferentes em um mesmo site.
- Falta de hierarquia (tudo parece ter o mesmo peso).
- Texto pequeno demais → prejudica leitura em telas menores.
- Usar uppercase em textos longos → dificulta a compreensão.

---

## 6. ARQUITETURA

A arquitetura do design é o que garante que uma página seja clara, escalável e responsiva. Mais do que simplesmente organizar elementos visuais, ela define como a informação será distribuída, como o usuário vai percorrer o conteúdo e como os componentes vão se adaptar em diferentes dispositivos. Sem uma boa arquitetura, qualquer página se torna confusa, pesada e difícil de manter.

### Breakpoints e Responsividade
O primeiro pilar da arquitetura é pensar em resoluções diferentes.
- **Desktop:** larguras comuns como 1280px, 1440px, 1680px e 1920px. Mais espaço para grids complexos e layouts elaborados.
- **Tablet:** entre 768px e 1024px. Zona intermediária que exige reorganizar colunas e priorizar conteúdo.
- **Mobile:** de 320px a 480px (padrão mais comum: 375px | 343px). Aqui tudo precisa ser reduzido e reorganizado em blocos verticais.

Responsividade não é apenas mudar a largura da tela. Envolve ajustar padding, gaps, tipografia e hierarquia para manter a experiência coerente em qualquer dispositivo.

### Grid Systems
Um grid é a espinha dorsal da página.
- **Desktop:** normalmente 12 colunas (com margens e gutters fixos).
- **Tablet:** 8 colunas.
- **Mobile:** 4 colunas.

O grid define não apenas alinhamento, mas também proporção. Quando bem aplicado, cria ritmo visual e facilita a modularidade.

### Botões e Componentes Responsivos
Botões, inputs e cards são bons exemplos de como responsividade vai além do layout. Botões têm variações de tamanho (Large, Medium, Small), mas também de gap, padding, tipografia e ícones.

| Propriedade | Desktop | Tablet | Mobile |
|---|---|---|---|
| Padding | 24-16px | 20-12px | 16-12px |
| Radius | 16px | 12px | 8px |
| Type (fonte) | 24px | 20px | 16px |
| Icon | 24-24px | 20-20px | 16-16px |
| Line (altura de linha) | 1.5px | 1.5px | 1px |

**Inputs e Formulários:** precisam respeitar a escala: no desktop podem ter mais espaçamento lateral, enquanto no mobile o foco é aproveitar ao máximo a largura da tela.

**Cards:** de 360px a 480px (padrão mais comum).

### Padrões de Leitura
O design deve guiar o usuário. E os olhos seguem padrões conhecidos:
- **F-Pattern:** comum em páginas de conteúdo longo, como blogs e artigos. O olhar percorre de cima para baixo, em forma de "F".
- **L-Pattern:** comum em páginas de conteúdo longo. O olhar percorre de cima para baixo, em forma de "L".
- **Z-Pattern:** ideal para landing pages curtas. O olhar faz um movimento em "Z": topo → diagonal → rodapé.
- **Layer Cake:** leitura em blocos horizontais. Ótima para páginas de vendas ou homepages, pois permite escanear rapidamente seções separadas.

Um bom design respeita esses padrões e organiza o conteúdo para que a leitura flua de maneira natural.

### Fluxo de Sessões (exemplo de referência)
Toda página deve ter uma narrativa visual. Estrutura de referência mencionada no material (não é obrigatória — a estrutura real de cada projeto vem do briefing):
- **Hero:** apresenta a mensagem principal.
- **Prova Social:** mostra autoridade ou credibilidade.
- **Benefícios / Features:** explica como o produto resolve problemas.
- **Conteúdo Secundário:** detalhamento ou comparações.
- **CTA:** chamada clara para ação.

Essa estrutura não é fixa, mas garante que o usuário siga um caminho lógico até a conversão.

### Hierarquia Visual
A hierarquia é definida por tamanho, peso, cor e espaçamento.
- **Títulos grandes:** guiam a atenção.
- **Contraste de cor:** destaca informações importantes.
- **Espaço em branco:** dá respiro e cria pontos de parada na leitura.
- **Consistência entre seções:** evita que o usuário se perca.

### Microinterações e Feedback Visual
Arquitetura também envolve pensar nos estados de interface:
- **Hover:** dá feedback que um elemento é interativo.
- **Focus:** destaca inputs e botões selecionados.
- **Disabled:** mostra que a ação não está disponível.
- **Error e Success:** mensagens de feedback claras, com cores funcionais.

Estados de input a implementar sempre: Default, Hover, Focus, Disabled, Error, Sucesso.

### Erros comuns de arquitetura
- Ignorar breakpoints e projetar só em desktop.
- Usar espaçamentos aleatórios que quebram consistência.
- Criar páginas sem fluxo lógico (ex: CTA antes de apresentar benefícios).
- Repetir muitos padrões de leitura em uma única página (ex: usar Z e F ao mesmo tempo sem propósito).
- Exagerar em elementos decorativos que quebram a narrativa.

---

## Resumo rápido — valores técnicos exatos pra aplicar direto no código

**Espaçamento (base 8pt):** 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 120px
**Tipografia (escala):** 12, 14, 16, 20, 24, 32, 48px
**Line-height:** corpo 140-160% | títulos 110-120%
**Letter-spacing:** títulos grandes bold -1% a -2% | labels uppercase tracking positivo
**Grid:** Desktop 12 colunas | Tablet 8 colunas | Mobile 4 colunas
**Breakpoints:** Desktop 1280/1440/1680/1920px | Tablet 768-1024px | Mobile 320-480px (padrão 375px)
**Contraste mínimo (WCAG):** 4.5:1 texto/fundo
**Botão desktop:** padding 24-16px, radius 16px, fonte 24px, ícone 24px, line-height 1.5
**Botão tablet:** padding 20-12px, radius 12px, fonte 20px, ícone 20px, line-height 1.5
**Botão mobile:** padding 16-12px, radius 8px, fonte 16px, ícone 16px, line-height 1
**Cards:** 360-480px de largura
**Ícones:** grid base 16/24/32px
**Escala de cor:** tokens 100→900 (claro→escuro) por cor
