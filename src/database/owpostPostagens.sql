use owlpost;

insert into Tags (nome) values
('Exemplos'),
('Tutoriais'),
('Owlpost'),
('Posts de teste');

insert into Postagens (idUsuario, fixado, titulo, conteudo) values
(1, true, 'Como funcionam as postagens',
'# Como funcionam as postagens.

Aqui você pode escrever o que quiser, talvez algo interessante, talvez até incluir algumas imagens.

![](https://img.freepik.com/fotos-gratis/personagem-de-estilo-anime-no-espaco_23-2151134100.jpg)
___
Tudo aqui é escrito em **Markdown** ou **MD** para simplicficar, uma **linguagem de marcação**, ou em outras palavras, um meio de escrever que usa símbolos e caracteres especiais para formatar seu texto.

> **Porque usar Markdown?**
>
> É uma forma simples e rápida de criar textos. Podem conter conteúdos externos (*como conteúdo da internet*) como links, imagens e até mesmo vídeos e outros sites se você decidir se aprofundar um pouquinho.

Você vai usar o editor para escrever seus posts. O editor é divido em dois paineis:
- O code (*painel da esquerda*) é onde você vai poder escrever e editar seus posts.
- O preview (*painel da direita*) é onde você pode ver como seu post está ficando.

Você pode alternar entre eles usando os botões na barra de ferramentas, que fica em cima do editor. Nela também vão ter alguns atalhos bem uteis.');

insert into TagsPostadas (idTag, idPost) values (1, 1), (2, 1), (3, 1);

insert into Postagens (idUsuario, fixado, titulo, conteudo) values
(1, true, 'Como escrever em markdown',
'# Como escrever em markdown

Um guia simples de como escrever em markdown, qualquer duvida, dê uma olhada no painel da esquerda, nele tem vários exemplos de como tudo funciona.

## Como criar títulos

O símbolo para criar títulos é o hashtag `#`. Para criar títulos use de 1 a 6 `#` seguido de um espaço e o seu título. 

> Não esqueça de deixar uma linha em branco entre seu título e seus parágrafos.

```md
# Meu título principal
```
ou
```md
# Meu título secundário
```

## Como criar um parágrafo

Parágrafos são separados por uma linha em branco entre eles, não precisa de mais nada, o markdown vai entender e criar seus parágrafos.

Parágrafos devem estar no começo da linha, evite colocar espaços antes de um parágrafo.

```md
Parágrafo 1 ...
            <- Linha em branco
Parágrafo 2 ...
```

## Como formatar meu texto

O símbolo para formatar textos é o `*`. 

Você pode criar um *texto em itálico* usando o `*` seguido do texto e feche usando o `*` novamente.

```md 
*meu texto em itálico*
```

Você pode criar um **texto em negrito** usando o dois `*` seguido do texto e feche usando dois `*` novamente.

```md 
**meu texto em negrito**
```

Você pode combinar os dois para criar um ***texto em itálico e negrito*** usando três `*` seguido do texto e feche usando três `*` novamente.

```md 
***meu texto em itálico e negrito***
```

## Como separar meu texto

Alguns textos precisam estar separados para fazerem sentido na hora de ler. 

Para criar uma barra que separa seu texto use três underlines `_` seguidos.

```md 
Cria uma barra que separa esse parágrafo...
_ _ _ 
...deste outro.
```
___

Algumas vezes você quer que seu texto continue na linha de baixo, mas no markdown não é tão simples quanto pular uma linha e continuar escrevendo na linha de baixo.  

O markdown permite que você pule linhas para organizar seu texto no editor, então ele ignora essas **quebras de linha** e considera tudo como o mesmo parágrafo.

Para pular uma linha use 2 ou mais espaços no final da linha e continue escrevendo na linha de baixo.

```md 
meu texto_ _        <- dois espaços
que continua na linha de baixo.
```
## Quer aprender mais

Esse guia foi apenas o básico para começar a escrever em markdown. Ainda tem muitas coisas que não apareceram nesse guia, como listas, citações, blocos de código, links, imagens e muito mais.

Quer aprender mais sobre **Markdown**? comece por esses links:

- [O que é Markdown](https://markdown.net.br/)
- [Como escrever Markdown](https://markdown.net.br/sintaxe-basica/))');

insert into TagsPostadas (idTag, idPost) values (1, 2), (2, 2), (3, 2);

insert into Postagens (idUsuario, fixado, titulo, conteudo) values
(1, true, 'História da Hemoterapia no Brasil', 
'# História da Hemoterapia no Brasil

## Objetivo
Este artigo traça a evolução histórica da hemoterapia no Brasil, desde seus primórdios empíricos até sua consolidação como uma prática científica. O estudo aborda as principais transformações, avanços científicos e desafios enfrentados pela hemoterapia no Brasil, especialmente após o impacto da AIDS e a criação da Política Nacional do Sangue.

## Primórdios da Hemoterapia
- **Período empírico**: Antes de 1900, as transfusões eram feitas de maneira rudimentar, sem base científica. Um exemplo é o estudo de José Vieira Marcondes, de 1879, discutindo a melhor transfusão, se entre animais e humanos ou entre humanos.
- **Período científico**: Após a descoberta dos grupos sanguíneos por Karl Landsteiner em 1900, as transfusões começaram a ser realizadas com mais precisão. No Brasil, cirurgiões pioneiros no Rio de Janeiro lideraram a prática.

## Primeiros Avanços no Brasil
- **Década de 1920**: Surgem os primeiros serviços organizados de transfusão de sangue, ainda que simples. O uso de instrumentos como a **seringa de Jubé** facilitou os procedimentos de transfusão.
- **Serviço de Transfusão de Sangue (STS)**: Fundado em 1933 no Rio de Janeiro, foi um marco na área, combinando assistência médica com pesquisa científica. Outros serviços foram criados em Juiz de Fora e Salvador, baseados no modelo do STS.
- **Primeiro Banco de Sangue**: Em 1942, no Rio de Janeiro, foi fundado o primeiro banco de sangue no Instituto Fernandes Figueira, com o objetivo de fornecer sangue para o hospital e para as frentes de batalha da Segunda Guerra Mundial.

## Consolidação como Especialidade
- **Década de 1940**: A hemoterapia começou a se consolidar como uma especialidade médica no Brasil. Em 1949, o **I Congresso Paulista de Hemoterapia** foi realizado, lançando as bases para a criação da Sociedade Brasileira de Hematologia e Hemoterapia (SBHH) em 1950.
- **Fundação da SBHH**: A sociedade foi fundada durante o primeiro Congresso Brasileiro de Hematologia e Hemoterapia, realizado em Petrópolis, em 1950. Esse evento foi crucial para o desenvolvimento das duas especialidades irmãs: hematologia e hemoterapia.

## Regulação e Expansão da Hemoterapia
- **Criação da Comissão Nacional de Hemoterapia (1965)**: Estabeleceu normas para proteger doadores e receptores de sangue. Mesmo assim, o sistema continuou desorganizado até o final da década de 1970.
- **Política Nacional do Sangue (anos 1980)**: Com a criação dessa política, a hemoterapia brasileira deu um salto qualitativo, introduzindo a doação voluntária de sangue e novas regulamentações para garantir a segurança das transfusões.

## Impacto da AIDS e Modernização
- **Advento da AIDS (1981)**: A hemoterapia sofreu um impacto significativo com a descoberta da transmissão da AIDS por transfusões de sangue. Isso levou à criação de novos protocolos de segurança e à introdução de autotransfusões e controle mais rigoroso do uso de sangue e derivados.
- **Campanha de Doação Voluntária (1980)**: Liderada pela SBHH, essa campanha teve como objetivo extinguir a prática de doação remunerada, prevalente no Brasil até então. A campanha foi um sucesso, transformando o sistema de doação de sangue no país.

## Avanços Tecnológicos e Científicos
- **Genética Molecular e Biotecnologia**: O desenvolvimento dessas áreas trouxe novas ferramentas para a hemoterapia, como testes diagnósticos avançados e o uso de produtos recombinantes.
- **Terapias Celulares**: A separação e cultura de células, incluindo o uso de células-tronco, são inovações importantes que expandiram o campo da hemoterapia e ajudaram no desenvolvimento de centros de transplantes de células-tronco hematopoéticas.
- **Automação e Sistemas de Qualidade**: A automação de processos e a implementação de sistemas de qualidade são tendências em crescimento, aumentando a eficiência e a segurança dos serviços de hemoterapia.

## Conclusão
A hemoterapia no Brasil evoluiu significativamente desde suas primeiras práticas rudimentares. O país passou de um sistema desorganizado, com grandes disparidades na qualidade dos serviços, para um sistema moderno, fundamentado em princípios científicos, tecnológicos e éticos. A criação de hemocentros, a regulamentação da doação voluntária e os avanços na biotecnologia são marcos importantes que moldaram a hemoterapia contemporânea no Brasil.

O século XXI apresenta novos desafios e oportunidades para a hemoterapia, incluindo o avanço da biologia molecular, engenharia genética e terapia celular, que prometem transformar ainda mais a prática.');

insert into TagsPostadas (idTag, idPost) values (4, 3);

insert into Postagens (idUsuario, fixado, titulo, conteudo) values
(1, true, 'Gestação e a Constituição da Maternidade',
'# Gestação e a Constituição da Maternidade

## Objetivo
Este estudo busca investigar os sentimentos das gestantes sobre a maternidade, enfatizando a relação entre o período gestacional e a constituição da maternidade. O foco está nas mudanças biológicas, psicológicas e sociais, que afetam intensamente a dinâmica psíquica individual e as relações sociais da mulher.

## Participantes
- **39 gestantes primíparas** (mães pela primeira vez), no terceiro trimestre de gestação.
- Idade entre 19 e 37 anos (média de 26 anos).
- Selecionadas a partir de hospitais e unidades de saúde pública, anúncios e indicações.
- Variaram quanto ao nível socioeconômico e educacional.
- Todas viviam com o pai do bebê.

## Métodos
- Foram realizadas entrevistas qualitativas com as gestantes, abordando suas percepções sobre a gravidez, aceitação da maternidade e expectativas em relação ao bebê.
- **Análise de Conteúdo Qualitativa** foi usada para categorizar os sentimentos das gestantes em quatro principais temas: transformações corporais, psicológicas, na conjugalidade, e o tornar-se mãe.

## Principais Temas e Descobertas

### 1. Transformações Corporais
- **Satisfação com as mudanças**: Muitas gestantes relataram orgulho em exibir a barriga, sentindo-se mais visíveis socialmente.
- **Preocupações com o corpo**: Houve relatos de preocupações com o ganho de peso e o impacto das mudanças físicas. Algumas adotaram medidas de autocuidado, como dietas.
- **Estranheza e desconforto**: Algumas se sentiram desconfortáveis com as mudanças, como o aumento de peso ou a produção de leite, e relataram insegurança sobre a atratividade para os parceiros.
- **Conformidade**: Outras aceitaram as mudanças como uma parte natural da maternidade, reconhecendo o bebê como o aspecto mais importante.

### 2. Transformações Psicológicas
- **Intensificação emocional**: A gravidez trouxe à tona emoções mais intensas, desde sentimentos de fragilidade até maior tranquilidade e compreensão.
- **Satisfação psicológica**: Algumas gestantes relataram uma sensação de crescimento emocional, tornando-se mais calmas e abertas com os outros.
- **Inadequação e estranheza**: Muitas se sentiram inadequadas ou desconfortáveis com os novos estados emocionais, achando que suas reações não condiziam com a realidade.

### 3. Transformações na Conjugalidade
- **Maior apoio do parceiro**: As gestantes relataram que seus parceiros passaram a ajudar mais nas tarefas domésticas, o que foi visto como positivo.
- **União conjugal**: Para muitas, a gravidez fortaleceu o relacionamento, criando uma sensação de solidez.
- **Insatisfação e ciúmes**: Algumas expressaram insatisfação com a superproteção dos parceiros, ciúmes em relação a outras pessoas e até mesmo em relação ao próprio bebê.
- **Mudanças na vida sexual e financeira**: A frequência das relações sexuais diminuiu, com receios de machucar o bebê. Também houve mudanças na organização financeira do casal, visando à preparação para a chegada do bebê.

### 4. Tornar-se Mãe
- **Sentimento de conquista**: Muitas gestantes sentiram que a gravidez era uma conquista pessoal e um marco de realização.
- **Sentimento de perda**: Algumas relataram uma sensação de perda de liberdade, com o surgimento de novas responsabilidades e compromissos.
- **Preocupação com a maternidade**: Houve preocupação sobre a capacidade de cuidar do bebê, o futuro incerto e a dependência mútua entre mãe e filho.
- **Tranquilidade**: Apesar das preocupações, muitas gestantes se mostraram confiantes em sua habilidade de exercer o papel materno.

## Discussão
O estudo revela que a gestação é um período crucial para a mulher, caracterizado por mudanças profundas em diversos aspectos. As gestantes vivenciam intensos sentimentos sobre o tornar-se mãe, com a maternidade sendo construída progressivamente durante a gravidez.

- **Conflitos psíquicos**: Durante a gravidez, muitas mulheres podem vivenciar conflitos emocionais que são trazidos à consciência por meio de sonhos ou sintomas.
- **Impacto na conjugalidade**: A transição para a parentalidade transforma a dinâmica conjugal, exigindo adaptação nos padrões de interação entre o casal.
- **Cultura e expectativa social**: A constituição da maternidade também é influenciada por aspectos culturais e transgeracionais, incluindo expectativas sobre o papel da mulher na sociedade.

## Considerações Finais
A gestação não deve ser vista apenas como uma fase preparatória para a maternidade, mas sim como um momento em que o papel materno já começa a ser exercido ativamente. As mudanças psicológicas, sociais e emocionais vivenciadas pela mulher durante a gestação são essenciais para a constituição de um espaço psíquico dedicado ao bebê.

O estudo destaca a importância de entender a mulher gestante como uma mãe em plena formação, e não apenas como uma futura mãe. Essa perspectiva pode melhorar a qualidade das intervenções clínicas e o apoio psicológico oferecido às gestantes.');

insert into TagsPostadas (idTag, idPost) values (4, 4);

insert into Postagens (idUsuario, titulo, conteudo) values
(4, 'Tractare cum cernes',
'## Tractare cum cernes aut coniuge formas

Artis draconi, telum quae sede gaudet fecit corripe, dat. Rigent vite.

> Vitarit de tempora signumque, frutices quid, sua navita pariterque amore.
> Curvantur culpavit nunc falsa Hac Sicanias auro, Minervae teneas actis patens
> in utque flores orbe amori sub.

Fraterni precibus. Inbellemque inmiti ales fruges *adopertaque solent
fefellimus* aequora Anaxareten subiere movit instar, quisve canis; **caedis**, ora.');

insert into TagsPostadas (idTag, idPost) values (4, 5);

insert into Postagens (idUsuario, titulo, conteudo) values
(5, 'Gradus idemque quadriiugi',
'Gradus idemque quadriiugi funus temptare sentiri delphines sinunt agros stare
coniugis maternas lucem plangoremque *nescia*. Femina equi modo habet! Edere
viseret: maiora luget succedere sibi, diu mitis quae utilis at.

Clara murice abit, frondere palmis [saucius induta
torique](http://gloriacorpore.com/) nunc. Placuere arcus contingere reppulit
inque accessisse fronti traxit accessus; umor equo texique suppositosque inde
praestantior dedit formaque. Iuvenum nec ubi gratissime priora Romulus in neve
seroque colorque, arva colores resoluta sensi. Saturnia terra senserit ursaque
hoc truncos, tu spissisque Liber absolvere? Fratrum ingemuere mater ponit
*armenta*, quam exierant: [sed iam](http://quo-causamque.net/) stupuitque plena
multarum genis corripitur quam liquefaciunt praemia ille.');

insert into TagsPostadas (idTag, idPost) values (4, 6);

insert into Postagens (idUsuario, titulo, conteudo) values
(2, 'Te prius videntur',
'## Te prius videntur index mercurio pietas videri

Lorem markdownum quae paelex meque volucrem et cuncta placidum Chromis! Est
murice **femina** suos nondum, illa indignantem *haec* visa, meorum. Guttur
more, quo missa pennis dea prece quodsi eundo viri **omnes satis** temptabat,
se.

- Ultima iniectos Morphea
- Tum pater me pinuque vittis ludit est
- Metuam laudatis vertice ex et ille longius
- Gremio inplicuit inundet rapta tua manifesta et
- Coniunx ora Veneris suum');

insert into TagsPostadas (idTag, idPost) values (4, 7);

insert into Postagens (idUsuario, titulo, conteudo) values
(3, 'Iuppiter sic flere',
'## Iuppiter sic flere

De pondere voluisse inspicitur Iuno, edere nimbos harena? Glaebis per, spiris
Iove: errare fraterque et missa vincula? De cum Thyesteis **rectior** inque
namque, manus, contempto tamen, ne altera ratus! Mea est arvo nequiquam angues
pietas percussis motisque si caelo e Cicones, adfert. Pectore altam talia,
laniataque excipit fecit.

Inpius animos! Ultra loca, nemorosi deae fatus axis lene Pyramus mota pectusque
ruitque fidem, loca, ferox forte, mille. Nefandas videt; loca magis, meo cum
induitur fabrae laesit patiar; ecce.');

insert into TagsPostadas (idTag, idPost) values (4, 8);

insert into Postagens (idUsuario, titulo, conteudo) values
(4, 'Pro huius abunde',
'## Pro huius abunde arboris tecta tenebras melior

Quid illo genitus Saturnius aegro [est tua](#non), mersit tamen eiectatamque
fluctus paulum matris, radiante. Athamas nec cui feliciter molimine [celebrant
nondum](#qui) cornum *parva*, pallentemque *pompae ut Noricus* transit [et
Minyis reddique](#pacis) membra.

```ts
    if (-2 - market) {
        processorGraphic.waveBoolean = lion(consoleGpu);
        powerpointText(floatingSpriteGate + whiteTypefaceParallel);
        disk = dotXslt(device, exabyte_burn_markup(intranetTextDesktop, text,
                mp_uri_publishing));
    }
    vdslHalftoneThroughput.ajaxDvMamp = cookie_registry_time(keylogger(voip -
            art, motion_kbps, dram_frequency_floating), barSimplexDevice);
    if (resolutionPpm(right, array, plain_vector) == user) {
        gui_mtu.ftp = 3;
        rosetta_cifs(computer(powerpoint_host, -2), expansion_pup, 1 * 4);
    } else {
        southbridge_syn_leopard(bespokeInternet, -1, raw_ctr_exif);
        font(left_scareware_perl, tabletLeopardHeap, aluDefaultOspf);
    }
    hdd_mbr_ram += 22 * -3 + 4 / batch_commerce_zebibyte;
```

Hippodamen sudore, illa nec undis parenti iam: ungues humus, Pandiona medio
pensaque quae: amet. Extremum bello liquidum, quid gestu ramos, belua montibus.
Cum et superos superabit Erinys doctae ducunt, sub et dixisse miles Hecabesque
depressitque iussus luco. Generis curvi prensis et duos, parvis ventos.');

insert into TagsPostadas (idTag, idPost) values (4, 9);

-- select * from Tags t;
-- select * from Postagens p;
-- select * from TagsPostadas tp;

