const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", function () {
    document.body.classList.toggle("modo-escuro");
});

const livros = [
{
    id:1,
    titulo:"A Hipótese do Amor",
    autor:"Ali Hazelwood",
    genero:"romance",
    nota:4.9,
    imagem:"img/a hipotese.png",
    resumo:"Olive Smith é uma estudante de doutorado que, para convencer sua melhor amiga de que superou um antigo relacionamento, acaba fingindo namorar Adam Carlsen, um professor conhecido por ser sério e exigente. Com o tempo, o relacionamento de mentira se transforma em sentimentos verdadeiros. Enquanto enfrentam desafios na vida acadêmica e superam suas inseguranças, Olive e Adam descobrem que o amor pode surgir onde menos esperam."
},

{
    id:2,
    titulo:"É Assim que Acaba",
    autor:"Colleen Hoover",
    genero:"romance",
    nota:4.8,
    imagem:"img/assim que acaba.png",
    resumo:"Lily Bloom se muda para Boston para realizar o sonho de abrir sua própria floricultura. Ela se apaixona por Ryle Kincaid, um neurocirurgião bem-sucedido, mas o relacionamento começa a apresentar comportamentos abusivos que fazem Lily lembrar da violência doméstica que presenciou na infância. Quando seu primeiro amor, Atlas Corrigan, reaparece, ela precisa tomar uma difícil decisão para quebrar o ciclo de abuso e escolher um futuro melhor para si e para sua família."
},

{
    id:3,
    titulo:"Verity",
    autor:"Colleen Hoover",
    genero:"romance",
    nota:4.7,
    imagem:"img/Verity.png",
    resumo:"Lowen Ashleigh é uma escritora contratada para finalizar a série de livros da famosa autora Verity Crawford, que ficou incapacitada após um acidente. Enquanto trabalha na casa da família, Lowen encontra um manuscrito com revelações chocantes sobre Verity. Conforme descobre esses segredos, ela se envolve com Jeremy, marido da escritora, e passa a questionar o que é verdade, vivendo uma história cheia de suspense, mistério e reviravoltas."
},

{
    id:4,
    titulo:"Diário de uma Paixão",
    autor:"Nicholas Sparks",
    genero:"romance",
    nota:4.7,
    imagem:"img/o diario de uma paixão.png",
    resumo:"Noah e Allie vivem um grande amor na juventude, mas acabam separados pelas diferenças entre suas famílias. Anos depois, eles se reencontram e precisam decidir se darão uma nova chance ao relacionamento. A história fala sobre amor, reencontros e a força dos sentimentos, mostrando que o verdadeiro amor pode superar o tempo e os obstáculos."
},

{
    id:5,
    titulo:"A Culpa é das Estrelas",
    autor:"John Green",
    genero:"romance",
    nota:4.7,
    imagem:"img/culpa das estrelas.png",
    resumo:"Hazel Grace Lancaster é uma adolescente que convive com um câncer e conhece Augustus Waters em um grupo de apoio para jovens com a doença. Os dois criam uma forte amizade que logo se transforma em um grande amor. Juntos, vivem momentos inesquecíveis, enfrentando os desafios da doença com coragem, humor e esperança."
},

{
    id:6,
    titulo:"Teto para Dois",
    autor:"Beth O'Leary",
    genero:"romance",
    nota:4.7,
    imagem:"img/teto para dois.png",
    resumo:"Leon e Tiffy dividem o mesmo apartamento, mas nunca se encontram: ela mora lá à noite e nos fins de semana, enquanto ele ocupa o imóvel durante o dia. A comunicação entre os dois acontece por meio de bilhetes deixados pela casa. Com o tempo, essa troca de mensagens cria uma amizade que se transforma em um romance inesperado."
},

{
    id:7,
    titulo:"Um Amor para Recordar",
    autor:"Nicholas Sparks",
    genero:"romance",
    nota:4.9,
    imagem:"img/Um Amor para Recordar.png",
    resumo:"Landon Carter é um jovem popular que acaba se aproximando de Jamie Sullivan, uma garota gentil, religiosa e muito diferente dele. Com o tempo, os dois se apaixonam e vivem uma história que transforma a maneira como Landon enxerga a vida. Porém, um grande desafio coloca esse amor à prova."
},

{
    id:8,
    titulo:"Como Eu Era Antes de Você",
    autor:"Jojo Moyes",
    genero:"romance",
    nota:4.9,
    imagem:"img/como eu era antes de vc.png",
    resumo:"Louisa Clark é uma jovem alegre que começa a trabalhar como cuidadora de Will Traynor, um homem que ficou tetraplégico após um acidente. No início, os dois têm dificuldades para se entender, mas, com o tempo, criam uma forte amizade que se transforma em um grande amor. Juntos, eles mudam a forma como enxergam a vida e aprendem importantes lições sobre felicidade, escolhas e superação."
},
{
    id:9,
    titulo:"É Assim que Começa",
    autor:"Colleen Hoover",
    genero:"romance",
    nota:4.9,
    imagem:"img/Assim que começa.png",
    resumo:"Após os acontecimentos de É Assim que Acaba, Lily Bloom tenta reconstruir sua vida enquanto divide a criação da filha com o ex-marido. Quando reencontra Atlas Corrigan, seu primeiro amor, ela decide dar uma nova chance ao relacionamento. No entanto, os desafios do passado e a convivência com o ex colocam o casal à prova."
},

{
    id:10,
    titulo:"Agora e para Sempre",
    autor:"Jenny Han",
    genero:"romance",
    nota:4.9,
    imagem:"img/agora é para sempre.png",
    resumo:"Lara Jean está no último ano do ensino médio e vive um relacionamento feliz com Peter. Enquanto se prepara para a formatura e para a faculdade, ela precisa tomar decisões importantes sobre o futuro, equilibrando seus sonhos, sua família e seu namoro. Ao longo da história, Lara Jean aprende que crescer também significa enfrentar mudanças e fazer escolhas difíceis."
},

{
    id:11,
    titulo:"P.S.: Ainda Amo Você",
    autor:"Jenny Han",
    genero:"romance",
    nota:4.9,
    imagem:"img/ainda amo vc.png",
    resumo:"Após o início de seu relacionamento com Peter Kavinsky, Lara Jean acredita que finalmente encontrou a felicidade. No entanto, a volta de John Ambrose, outro garoto que recebeu uma de suas antigas cartas de amor, desperta sentimentos e dúvidas sobre seu coração. Enquanto tenta lidar com ciúmes, inseguranças e novos desafios, Lara Jean aprende mais sobre confiança, amadurecimento e o que realmente significa amar alguém."
},

{
    id:12,
    titulo:"Mil Beijos de Garoto",
    autor:"Tillie Cole",
    genero:"romance",
    nota:4.9,
    imagem:"img/mil beijos.png",
    resumo:"Poppy e Rune são melhores amigos desde a infância e acreditam que seu amor será para sempre. Porém, uma separação inesperada faz com que eles se afastem por alguns anos. Quando se reencontram, precisam lidar com as mudanças, os sentimentos que ainda existem e os desafios que a vida coloca em seus caminhos."
},

{
    id:13,
    titulo:"Para Todos os Garotos que Já Amei",
    autor:"Jenny Han",
    genero:"romance",
    nota:4.9,
    imagem:"img/para todos os garotos.png",
    resumo:"Lara Jean Covey escreve cartas para todos os garotos por quem já se apaixonou, mas nunca pretende enviá-las. Um dia, essas cartas são enviadas sem sua permissão, e sua vida muda completamente. Para evitar uma situação constrangedora, ela faz um namoro de mentira com Peter Kavinsky. Com o tempo, a amizade entre os dois se transforma em um romance verdadeiro, enquanto Lara Jean aprende a enfrentar seus medos, amadurecer e acreditar no amor. O livro é uma história leve, divertida e romântica sobre crescimento, família e primeiros amores."
},

{
    id:15,
    titulo:"A Lâmina da Assassina",
    autor:"Sarah J. Maas",
    genero:"fantasia",
    nota:4.9,
    imagem:"img/a lamina.png",
    resumo:"Celaena Sardothien, uma famosa assassina, vive diversas missões perigosas antes dos acontecimentos de Trono de Vidro. Ao lado de Sam, ela enfrenta inimigos, descobre segredos e começa a questionar seu caminho como assassina. O livro mostra o passado de Celaena, suas perdas e os acontecimentos que transformam sua vida."
},

{
    id:16,
    titulo:"Trono de Vidro",
    autor:"Sarah J. Maas",
    genero:"fantasia",
    nota:4.9,
    imagem:"img/Trono de vidro.png",
    resumo:"Celaena Sardothien, uma jovem assassina, recebe a chance de conquistar sua liberdade ao participar de uma competição para se tornar a campeã do rei. Enquanto enfrenta provas perigosas contra outros competidores, ela descobre mortes misteriosas e uma ameaça ligada à magia antiga. Ao longo da história, Celaena faz aliados, vive um romance e percebe que seu destino é muito maior do que imaginava."
},

{
    id:17,
    titulo:"Coroa da Meia-Noite",
    autor:"Sarah J. Maas",
    genero:"fantasia",
    nota:4.9,
    imagem:"img/coroa da meia noite.png",
    resumo:"Depois de vencer a competição, Celaena Sardothien se torna a Campeã do Rei e precisa cumprir missões para o governante de Adarlan. Porém, ela começa a questionar suas ordens e tenta descobrir os segredos sombrios por trás do reino.Enquanto investiga uma ameaça misteriosa ligada à magia, Celaena enfrenta inimigos perigosos, revela partes escondidas de seu passado e se aproxima ainda mais de Dorian e Chaol. O livro mostra uma fase mais intensa da protagonista, com mais conflitos, descobertas e mudanças que irão transformar seu destino."
},

{
    id:18,
    titulo:"Herdeira do Fogo",
    autor:"Sarah J. Maas",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/herdeira do fogo.png",
    resumo:"Depois dos acontecimentos de Coroa da Meia-Noite, Celaena Sardothien vai para Wendlyn em busca de respostas sobre seu passado e seus poderes. Lá, ela precisa enfrentar seus medos, treinar suas habilidades e descobrir quem realmente é. Enquanto aprende a controlar sua magia com o guerreiro feérico Rowan, Celaena começa a aceitar sua verdadeira identidade e seu destino. Ao mesmo tempo, novos inimigos surgem e ameaças maiores começam a colocar o mundo em perigo."
},

{
    id:19,
    titulo:"Reino de Cinzas",
    autor:"Sarah J. Maas",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/reino de cinzas.png",
    resumo:"Após ser capturada e mantida presa, Aelin Galathynius precisa encontrar forças para sobreviver enquanto seus amigos se preparam para a batalha final contra Erawan e suas forças sombrias. Enquanto os aliados de Aelin se unem para defender Terrasen e lutar pelo futuro dos reinos, grandes guerras acontecem e segredos importantes são revelados. Cada personagem enfrenta seus maiores desafios, fazendo escolhas difíceis para proteger aqueles que ama."
},

{
    id:20,
    titulo:"Rainha das Sombras",
    autor:"Sarah J. Maas",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/rainha das sombras.png",
    resumo:"Depois de descobrir sua verdadeira identidade, Celaena Sardothien retorna a Adarlan como Aelin Galathynius, a legítima herdeira de Terrasen. Agora mais forte e determinada, ela busca recuperar seu reino e enfrentar aqueles que ameaçam seu povo. Ao voltar, Aelin reencontra antigos aliados e inimigos, forma novas alianças e começa a planejar sua vingança contra o rei de Adarlan. Enquanto isso, segredos sobre magia, poderes antigos e criaturas perigosas vêm à tona."
},

{
    id:21,
    titulo:"Império de Tempestades",
    autor:"Sarah J. Maas",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/imperio tempestade.png",
    resumo:"Depois de assumir sua identidade como Aelin Galathynius, a rainha de Terrasen precisa reunir aliados e preparar seu povo para uma grande guerra contra as forças de Erawan, um inimigo poderoso que ameaça destruir os reinos. Aelin viaja em busca de apoio, enfrenta antigos inimigos e faz novas alianças para proteger aqueles que ama. Enquanto isso, segredos sobre a magia, os Valg e o passado dos personagens começam a ser revelados."
},

{
    id:22,
    titulo:"Torre do Alvorecer",
    autor:"Sarah J. Maas",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/alvorecer.png",
    resumo:"O livro acompanha Chaol Westfall e Nesryn Faliq após os acontecimentos de Império de Tempestades. Eles viajam até o continente de Antica em busca de ajuda dos lendários curandeiros da Torre Cesme para tentar encontrar uma cura para as feridas de Chaol. Durante a viagem, Chaol precisa enfrentar suas próprias dores e aceitar as mudanças em sua vida. Enquanto isso, eles descobrem novos aliados, segredos sobre os inimigos e informações importantes sobre a guerra que se aproxima."
},

{
    id:23,
    titulo:"A Rainha Vermelha",
    autor:"Victoria Aveyard.",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/rainha vermelha.png",
    resumo:"Mare Barrow vive em um mundo onde os Vermelhos são pessoas comuns e os Prateados possuem poderes e governam o reino. Quando Mare descobre que também tem uma habilidade especial, ela é levada para a corte real e precisa esconder sua verdadeira origem.Enquanto conhece a família real e se envolve em uma rebelião contra a injustiça, Mare precisa lidar com traições, perigos e descobrir em quem pode confiar."
},

{
    id:24,
    titulo:"Espada de Vidro",
    autor:"Victoria Aveyard.",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/espada de vidro.png",
    resumo:"Depois de escapar da corte, Mare Barrow precisa lidar com as consequências de seus poderes e das escolhas que fez. Agora perseguida pelo rei Maven, ela decide encontrar outros jovens Vermelhos que, assim como ela, possuem habilidades especiais, formando um grupo para lutar contra o domínio dos Prateados. Enquanto busca novos aliados, Mare começa a treinar seus poderes e aprende que a guerra exige mais do que força: é preciso estratégia e confiança. Porém, as perdas, as traições e o medo de ser controlada pelo próprio poder fazem com que ela se torne cada vez mais desconfiada."
},

{
    id:25,
    titulo:"A Prisão do Rei",
    autor:"Victoria Aveyard.",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/a prisão.png",
    resumo:"Após os acontecimentos de Espada de Vidro, Mare Barrow é capturada pelo rei Maven e mantida prisioneira no palácio. Enquanto está presa, ela enfrenta a solidão, a culpa e as consequências de suas escolhas, além de tentar encontrar uma forma de escapar e continuar lutando pela causa dos novos-sangue. Enquanto isso, a Guarda Escarlate continua sua batalha contra o governo dos Prateados, buscando libertar Mare e derrubar o sistema injusto do reino. A guerra se intensifica, novas alianças são formadas e segredos sobre os poderes e a história dos personagens começam a ser revelados."
},

{
    id:26,
    titulo:"Tempestade de Guerra",
    autor:"Victoria Aveyard",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/tempestade de guerra.png",
    resumo:"Após os acontecimentos de A Prisão do Rei, Mare Barrow e seus aliados precisam se preparar para a grande guerra entre os Vermelhos, os novos-sangue e os Prateados. Com o reino dividido e ameaças crescendo, Mare precisa lidar com alianças difíceis, antigos inimigos e as consequências de suas escolhas. Enquanto diferentes grupos lutam pelo controle de Norta, Mare tenta descobrir em quem pode confiar e como usar seus poderes para proteger aqueles que ama. Ao mesmo tempo, conflitos políticos, traições e batalhas colocam todos em perigo."
},

{
    id:27,
    titulo:"Trono Destruído",
    autor:"Victoria Aveyard",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/trono destruido.png",
    resumo:"Trono Destruído é uma coletânea de histórias que complementa a série A Rainha Vermelha, mostrando acontecimentos antes, durante e depois da história principal. O livro apresenta novos detalhes sobre personagens importantes, revelando seus passados, sentimentos e acontecimentos que não apareceram nos outros livros. As histórias mostram mais sobre a vida de personagens como Mare, Cal, Maven e outros membros da Guarda Escarlate, além de explicar melhor o mundo dos Vermelhos e Prateados."
},

{
    id:28,
    titulo:"Harry Potter e a Pedra Filosofal",
    autor:"J.K. Rowling",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/pedra filosofal.png",
    resumo:"Harry Potter descobre, no seu aniversário de 11 anos, que é um bruxo e que seus pais também eram bruxos. Ele começa a estudar em Hogwarts, onde faz amizade com Rony e Hermione. Durante o primeiro ano, os três descobrem que algo muito poderoso está escondido na escola e tentam impedir que caia nas mãos erradas."
},

{
    id:29,
    titulo:"Harry Potter e a Câmara Secreta",
    autor:"J.K. Rowling",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/camera secreta.png",
    resumo:"Harry volta para seu segundo ano em Hogwarts, mas acontecimentos estranhos começam a assustar os alunos. Uma antiga Câmara Secreta é aberta e estudantes começam a ser petrificados. Harry, Rony e Hermione investigam o mistério e descobrem um perigo escondido dentro da escola."
},

{
    id:30,
    titulo:"Harry Potter e o Prisioneiro de Azkaban",
    autor:"J.K. Rowling",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/Prisioneiro de Azkaban.png",
    resumo:"No terceiro ano, Harry descobre que Sirius Black, um perigoso prisioneiro, fugiu de Azkaban e aparentemente está atrás dele. Ao longo da história, Harry descobre verdades surpreendentes sobre seus pais, Sirius e o passado de sua família."
},

{
    id:31,
    titulo:"Harry Potter e o Cálice de Fogo",
    autor:"J.K. Rowling",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/Cálice de Fogo.png",
    resumo:"Harry é escolhido inesperadamente para participar do Torneio Tribruxo, uma competição perigosa entre estudantes de diferentes escolas de magia. Enquanto enfrenta provas difíceis, acontecimentos cada vez mais sombrios mostram que Voldemort está começando a recuperar sua força."
},

{
    id:32,
    titulo:"Harry Potter e a Ordem da Fênix",
    autor:"J.K. Rowling",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/ordem da fenix.png",
    resumo:"Voldemort voltou, mas o Ministério da Magia se recusa a acreditar nisso. Em Hogwarts, Harry enfrenta a nova professora Dolores Umbridge e cria a Armada de Dumbledore para ensinar seus colegas a se defenderem. Enquanto isso, a ameaça de Voldemort cresce cada vez mais."
},

{
    id:33,
    titulo:"Harry Potter e o Enigma do Príncipe",
    autor:"J.K. Rowling",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/inigma.png",
    resumo:"Harry começa seu sexto ano em Hogwarts e recebe de Dumbledore informações importantes sobre o passado de Voldemort. Juntos, eles tentam descobrir como derrotá-lo. Ao mesmo tempo, Harry encontra um antigo livro de poções que pertenceu ao misterioso Príncipe Mestiço."
},

{
    id:34,
    titulo:"Harry Potter e as Relíquias da Morte",
    autor:"J.K. Rowling",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/reliquias.png",
    resumo:"Harry, Rony e Hermione deixam Hogwarts para encontrar e destruir as Horcruxes de Voldemort. A busca se torna cada vez mais perigosa, enquanto o mundo dos bruxos entra em guerra. No final, Harry precisa enfrentar Voldemort em uma batalha decisiva."
},

{
    id:35,
    titulo:"Harry Potter e a Criança Amaldiçoada",
    autor:"Jack Thorne, J.K. Rowling e John Tiffany",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/criança.png",
    resumo:"Dezenove anos depois do fim da história original, Harry é adulto e trabalha no Ministério da Magia. Seu filho, Alvo, começa a estudar em Hogwarts e enfrenta dificuldades por carregar o peso do nome Potter. Pai e filho acabam envolvidos em uma aventura relacionada ao passado e precisam aprender a lidar com suas diferenças."
},

{
    id:36,
    titulo:"Orgulho e Preconceito",
    autor:"Jane Austen",
    genero:"romance",
    nota:4.8,
    imagem:"img/orgulho e preconceito.png",
    resumo:"Elizabeth Bennet conhece o reservado Sr. Darcy e os dois começam com uma forte antipatia. Com o tempo, precisam superar preconceitos, diferenças sociais e mal-entendidos para descobrir seus verdadeiros sentimentos."
},

{
    id:37,
    titulo:"Os Dois Morrem no Final",
    autor:"Adam Silvera",
    genero:"romance",
    nota:4.7,
    imagem:"img/o dois morrem.png",
    resumo:"Mateo e Rufus recebem a notícia de que morrerão naquele mesmo dia. Eles se conhecem por meio de um aplicativo e decidem passar juntos suas últimas horas, criando uma amizade e um amor marcantes."
},

{
    id:38,
    titulo:"A Seleção",
    autor:"Kiera Cass",
    genero:"romance",
    nota:4.8,
    imagem:"img/a selecao.png",
    resumo:"America Singer é escolhida para participar de uma competição em que jovens disputam o coração do príncipe Maxon. Dividida entre seus sentimentos e as expectativas da família, ela descobre que a vida no palácio é muito mais complicada do que imaginava."
},

{
    id:39,
    titulo:"O Amor Não é Óbvio",
    autor:"Elayne Baeta",
    genero:"romance",
    nota:4.7,
    imagem:"img/o amor n é obv.png",
    resumo:"Iris tem uma paixão secreta por Cadu, mas acaba se aproximando de Édra e descobrindo sentimentos inesperados. A história fala sobre amizade, descoberta, inseguranças e primeiro amor."
},

{
    id:40,
    titulo:"Vermelho, Branco e Sangue Azul",
    autor:"Casey McQuiston",
    genero:"romance",
    nota:4.8,
    imagem:"img/vermelho branco e sangue azul.png",
    resumo:"Alex, filho da presidente dos Estados Unidos, e Henry, príncipe britânico, começam com uma relação difícil. Depois de uma aproximação inesperada, os dois desenvolvem sentimentos e precisam lidar com a pressão pública e suas responsabilidades."
},

{
    id:41,
    titulo:"A Guerra dos Tronos",
    autor:"George R. R. Martin",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/a guerra dos tronos.png",
    resumo:"Famílias poderosas disputam o controle de Westeros enquanto alianças, traições e conflitos políticos mudam o destino dos personagens. Ao mesmo tempo, ameaças antigas começam a surgir além das fronteiras do reino."
},

{
    id:42,
    titulo:"Percy Jackson e o Ladrão de Raios",
    autor:"Rick Riordan",
    genero:"fantasia",
    nota:4.9,
    imagem:"img/percy jackson.png",
    resumo:"Percy Jackson descobre que é filho de Poseidon e que os deuses da mitologia grega existem. Após ser acusado de roubar o raio-mestre de Zeus, ele parte em uma missão para encontrar o objeto e evitar uma guerra entre os deuses."
},

{
    id:43,
    titulo:"O Hobbit",
    autor:"J. R. R. Tolkien",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/o hobbit.png",
    resumo:"Bilbo Bolseiro leva uma vida tranquila até ser convidado por Gandalf para acompanhar uma companhia de anões em uma aventura. Durante a viagem, enfrenta perigos e descobre uma coragem que não sabia possuir."
},

{
    id:44,
    titulo:"Coraline",
    autor:"Neil Gaiman",
    genero:"fantasia",
    nota:4.7,
    imagem:"img/coraline.png",
    resumo:"Coraline encontra uma passagem para uma versão aparentemente perfeita de sua casa. Porém, os novos pais escondem intenções perigosas, e ela precisa usar sua coragem e inteligência para salvar sua família."
},

{
    id:45,
    titulo:"O Nome do Vento",
    autor:"Patrick Rothfuss",
    genero:"fantasia",
    nota:4.8,
    imagem:"img/o nome do vento.png",
    resumo:"Kvothe conta a história de sua vida, desde a infância até sua formação como músico, estudante e aventureiro. Entre perdas, mistérios e descobertas, ele busca respostas sobre os acontecimentos que marcaram seu passado."
},

{
    id:46,
    titulo:"It: A Coisa",
    autor:"Stephen King",
    genero:"terror",
    nota:4.8,
    imagem:"img/it a coisa.png",
    resumo:"Em Derry, crianças começam a desaparecer e um grupo de amigos descobre que uma criatura assustadora está por trás dos acontecimentos. Anos depois, eles precisam retornar à cidade para enfrentar novamente o medo que marcou suas infâncias."
},

{
    id:47,
    titulo:"O Iluminado",
    autor:"Stephen King",
    genero:"terror",
    nota:4.8,
    imagem:"img/o iluminado.png",
    resumo:"Jack Torrance aceita trabalhar como zelador de um hotel isolado durante o inverno. Enquanto seu filho Danny percebe que o lugar possui forças sobrenaturais, acontecimentos assustadores começam a afetar toda a família."
},

{
    id:48,
    titulo:"Frankenstein",
    autor:"Mary Shelley",
    genero:"terror",
    nota:4.7,
    imagem:"img/frankenstein.png",
    resumo:"Victor Frankenstein cria uma criatura a partir de partes de corpos humanos, mas se assusta com o resultado e a abandona. Rejeitada pela sociedade, a criatura busca compreender o mundo e entra em conflito com seu criador."
},

{
    id:49,
    titulo:"O Exorcista",
    autor:"William Peter Blatty",
    genero:"terror",
    nota:4.7,
    imagem:"img/o exorcista.png",
    resumo:"Uma menina começa a apresentar comportamentos inexplicáveis e assustadores. Sua mãe procura ajuda enquanto acontecimentos sobrenaturais se intensificam, levando religiosos a tentar descobrir a origem do mal."
},

{
    id:50,
    titulo:"A Assombração da Casa da Colina",
    autor:"Shirley Jackson",
    genero:"terror",
    nota:4.6,
    imagem:"img/a assombracao.png",
    resumo:"Um grupo de pessoas se reúne em uma antiga casa conhecida por acontecimentos sobrenaturais. Conforme passam mais tempo no local, acontecimentos estranhos e assustadores começam a afetar os moradores."
},

{
    id:51,
    titulo:"Jogos Vorazes",
    autor:"Suzanne Collins",
    genero:"acao",
    nota:4.9,
    imagem:"img/jogos vorazes.png",
    resumo:"Katniss Everdeen se oferece para participar dos Jogos Vorazes no lugar de sua irmã. Em uma competição em que apenas um participante pode sobreviver, ela precisa usar inteligência, coragem e estratégia."
},

{
    id:52,
    titulo:"Divergente",
    autor:"Veronica Roth",
    genero:"acao",
    nota:4.8,
    imagem:"img/divergente.png",
    resumo:"Tris Prior vive em uma sociedade dividida em grupos. Ao descobrir que não se encaixa em apenas uma categoria, ela precisa esconder sua verdadeira identidade enquanto enfrenta treinamentos, perigos e conflitos políticos."
},

{
    id:53,
    titulo:"Maze Runner: Correr ou Morrer",
    autor:"James Dashner",
    genero:"acao",
    nota:4.8,
    imagem:"img/maze.png",
    resumo:"Thomas acorda em um lugar desconhecido chamado Clareira sem lembrar de seu passado. Cercado por outros jovens e por um labirinto que muda constantemente, ele precisa encontrar uma saída e descobrir por que todos foram colocados ali."
},

{
    id:54,
    titulo:"O Último Reino",
    autor:"Bernard Cornwell",
    genero:"acao",
    nota:4.7,
    imagem:"img/ultimo reino.png",
    resumo:"Uhtred é um jovem criado entre saxões e dinamarqueses durante um período de grandes conflitos. Entre batalhas, alianças e disputas pelo poder, ele precisa decidir onde realmente está sua lealdade."
},

{
    id:55,
    titulo:"As Crônicas de Nárnia",
    autor:"C. S. Lewis",
    genero:"acao",
    nota:4.8,
    imagem:"img/as cronicas.png",
    resumo:"Quatro irmãos descobrem uma passagem para o mundo mágico de Nárnia. Lá, encontram criaturas fantásticas e entram em uma grande batalha contra forças que ameaçam o reino."
},

{
    id: 56,
    titulo: "O Príncipe Cruel",
    autor: "Holly Black",
    genero: "fantasia",
    nota: 4.7,
    imagem: "img/principe cruel.png",
    resumo: "Jude é uma humana vivendo no mundo das fadas, onde enfrenta perigos, intrigas e disputas pelo poder. Para conquistar seu lugar nesse reino, ela precisa aprender a lidar com o cruel príncipe Cardan."
},
{
    id: 57,
    titulo: "O Rei Perverso",
    autor: "Holly Black",
    genero: "fantasia",
    nota: 4.7,
    imagem: "img/rei perverso.png",
    resumo: "Jude conquistou uma posição de poder no mundo das fadas, mas novas ameaças surgem. Entre alianças e traições, ela precisa proteger aquilo que conquistou."
},
{
    id: 58,
    titulo: "A Rainha do Nada",
    autor: "Holly Black",
    genero: "fantasia",
    nota: 4.8,
    imagem: "img/rainha do nada.png",
    resumo: "Jude retorna ao mundo das fadas e precisa enfrentar uma nova ameaça que pode destruir o reino. Enquanto luta pelo poder, também precisa lidar com seus próprios sentimentos."
},
{
    id: 59,
    titulo: "Cidade dos Ossos",
    autor: "Cassandra Clare",
    genero: "fantasia",
    nota: 4.6,
    imagem: "img/dos ossos.png",
    resumo: "Clary descobre a existência de um mundo secreto habitado por caçadores de sombras e criaturas sobrenaturais. Sua vida muda completamente quando descobre segredos sobre sua própria família."
},
{
    id: 60,
    titulo: "Eragon",
    autor: "Christopher Paolini",
    genero: "fantasia",
    nota: 4.7,
    imagem: "img/eragon.png",
    resumo: "Eragon encontra um misterioso ovo que se transforma em um dragão. Ao se tornar um cavaleiro de dragão, ele inicia uma jornada perigosa contra um poderoso rei."
},
{
    id: 61,
    titulo: "Sombra e Ossos",
    autor: "Leigh Bardugo",
    genero: "fantasia",
    nota: 4.6,
    imagem: "img/sombra e ossos.png",
    resumo: "Alina Starkov descobre possuir um poder raro capaz de mudar o destino de seu país. Ao entrar no mundo dos Grishas, precisa aprender a controlar sua habilidade e enfrentar forças perigosas."
},
{
    id: 62,
    titulo: "O Iluminado",
    autor: "Stephen King",
    genero: "terror",
    nota: 4.8,
    imagem: "img/o iluminado.png",
    resumo: "Jack Torrance aceita trabalhar como zelador de um hotel isolado durante o inverno. Enquanto sua família permanece no local, acontecimentos sobrenaturais começam a afetar sua mente."
},
{
    id: 63,
    titulo: "It: A Coisa",
    autor: "Stephen King",
    genero: "terror",
    nota: 4.8,
    imagem: "img/it a coisa.png",
    resumo: "Um grupo de amigos enfrenta uma criatura que assume diferentes formas e aterroriza a cidade. Anos depois, eles precisam retornar para enfrentar novamente o mal que marcou sua infância."
},
{
    id: 64,
    titulo: "O Silêncio dos Inocentes",
    autor: "Thomas Harris",
    genero: "terror",
    nota: 4.8,
    imagem: "img/dos inocentes.png",
    resumo: "A agente Clarice Starling investiga um perigoso assassino e procura informações com Hannibal Lecter. A investigação se transforma em um intenso confronto psicológico."
},
{
    id: 65,
    titulo: "O Bebê de Rosemary",
    autor: "Ira Levin",
    genero: "terror",
    nota: 4.5,
    imagem: "img/o bebe.png",
    resumo: "Rosemary se muda com o marido para um antigo prédio em Nova York. Depois de engravidar, começa a perceber comportamentos estranhos entre seus vizinhos e suspeita que existe algo terrível por trás de tudo."
},
{
    id: 66,
    titulo: "O Homem de Giz",
    autor: "C. J. Tudor",
    genero: "terror",
    nota: 4.4,
    imagem: "img/o homem.png",
    resumo: "Eddie e seus amigos usavam desenhos feitos com giz para se comunicar. Anos depois, os mesmos sinais começam a aparecer novamente, trazendo à tona acontecimentos misteriosos do passado."
},
{
    id: 67,
    titulo: "Caixa de Pássaros",
    autor: "Josh Malerman",
    genero: "terror",
    nota: 4.5,
    imagem: "img/passaros.png",
    resumo: "Uma presença misteriosa faz com que as pessoas tenham comportamentos violentos quando a veem. Para sobreviver, Malorie precisa atravessar um mundo perigoso sem abrir os olhos."
},
{
    id: 68,
    titulo: "Divergente",
    autor: "Veronica Roth",
    genero: "acao",
    nota: 4.7,
    imagem: "img/divergente.png",
    resumo: "Tris vive em uma sociedade dividida em grupos. Ao descobrir que não se encaixa em apenas uma categoria, ela precisa esconder sua verdadeira identidade enquanto enfrenta perigos e conspirações."
},
{
    id: 69,
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    genero: "acao",
    nota: 4.7,
    imagem: "img/o codigo.png",
    resumo: "Robert Langdon, um professor de simbologia, é chamado para investigar um misterioso assassinato no Museu do Louvre, em Paris. Ao lado de Sophie Neveu, uma criptógrafa, ele encontra pistas escondidas em obras de arte e símbolos antigos. Durante a investigação, os dois precisam decifrar enigmas e desvendar segredos históricos enquanto tentam escapar de pessoas que querem impedir a descoberta da verdade."
},
{
    id: 70,
    titulo: "A 5ª Onda",
    autor: "Rick Yancey",
    genero: "acao",
    nota: 4.5,
    imagem: "img/a onda.png",
    resumo: "A humanidade enfrenta uma invasão alienígena dividida em ondas devastadoras. Cassie tenta sobreviver enquanto procura seu irmão e descobre que o perigo pode estar mais perto do que imagina."
},
{
    id: 71,
    titulo: "A Ilha do Tesouro",
    autor: "Robert Louis Stevenson",
    genero: "acao",
    nota: 4.7,
    imagem: "img/do tesouro.png",
    resumo: "Jim Hawkins encontra um mapa que indica a localização de um tesouro escondido. Ele embarca em uma aventura cheia de piratas, perigos, traições e descobertas."
},
{
    id: 72,
    titulo: "O Conde de Monte Cristo",
    autor: "Alexandre Dumas",
    genero: "acao",
    nota: 4.8,
    imagem: "img/monte cristo.png",
    resumo: "Edmond Dantès é injustamente preso e passa anos planejando sua vingança. Depois de escapar, encontra um tesouro e retorna para enfrentar aqueles que destruíram sua vida."
},
{
    id: 73,
    titulo: "Sherlock Holmes: Um Estudo em Vermelho",
    autor: "Arthur Conan Doyle",
    genero: "acao",
    nota: 4.8,
    imagem: "img/em vermelho.png",
    resumo: "Sherlock Holmes e o Dr. Watson investigam um misterioso assassinato. Usando observação e raciocínio lógico, Holmes tenta descobrir quem está por trás do crime."
},
{
    id: 74,
    titulo: "Jurassic Park",
    autor: "Michael Crichton",
    genero: "acao",
    nota: 4.7,
    imagem: "img/park.png",
    resumo: "Um parque criado com dinossauros geneticamente recriados sai do controle. Os visitantes precisam lutar para sobreviver enquanto as criaturas passam a dominar a ilha."
},
{
    id: 75,
    titulo: "Jane Eyre",
    autor: "Charlotte Brontë",
    genero: "romance",
    nota: 4.7,
    imagem: "img/jane eyre.png",
    resumo: "Jane Eyre enfrenta uma infância difícil e, já adulta, torna-se governanta em uma grande propriedade. Lá, conhece o misterioso Sr. Rochester e sua vida muda completamente."
},
{
    id: 76,
    titulo: "Eleanor & Park",
    autor: "Rainbow Rowell",
    genero: "romance",
    nota: 4.4,
    imagem: "img/e park.png",
    resumo: "Eleanor e Park se conhecem no ônibus escolar e, aos poucos, desenvolvem uma amizade que se transforma em amor. Juntos, encontram conforto em meio aos problemas de suas vidas."
},
{
    id: 77,
    titulo: "Amor & Gelato",
    autor: "Jenna Evans Welch",
    genero: "romance",
    nota: 4.4,
    imagem: "img/amor e gelato.png",
    resumo: "Lina viaja para a Itália para realizar o último desejo de sua mãe. Entre novas amizades, descobertas familiares e um romance inesperado, ela começa a enxergar sua vida de uma nova maneira."
},
{
    id: 78,
    titulo: "O Lado Feio do Amor",
    autor: "Colleen Hoover",
    genero: "romance",
    nota: 4.6,
    imagem: "img/feio do amor.png",
    resumo: "Tate Collins conhece Miles Archer e os dois iniciam uma relação baseada em regras. Porém, conforme a convivência aumenta, sentimentos cada vez mais fortes tornam essas regras difíceis de seguir."
},
{
    id: 79,
    titulo: "Novembro, 9",
    autor: "Colleen Hoover",
    genero: "romance",
    nota: 4.5,
    imagem: "img/novembro 9.png",
    resumo: "Fallon e Ben se conhecem no dia 9 de novembro e decidem se encontrar novamente na mesma data todos os anos. Com o passar do tempo, segredos mudam completamente a história dos dois."
},
{
    id: 80,
    titulo: "O Sol é Para Todos",
    autor: "Harper Lee",
    genero: "romance",
    nota: 4.8,
    imagem: "img/o sol e para todos.png",
    resumo: "Scout acompanha sua infância em uma pequena cidade enquanto seu pai defende um homem acusado injustamente. A história aborda preconceito, justiça e amadurecimento."
},
{
    id: 81,
    titulo: "O Feiticeiro de Terramar",
    autor: "Ursula K. Le Guin",
    genero: "fantasia",
    nota: 4.7,
    imagem: "img/o feiticeiro.png",
    resumo: "Ged é um jovem com grande talento para a magia. Ao aprender a controlar seus poderes, acaba libertando uma sombra perigosa que passa a persegui-lo."
},
{
    id: 82,
    titulo: "A Guerra da Papoula",
    autor: "R. F. Kuang",
    genero: "fantasia",
    nota: 4.6,
    imagem: "img/a guerra.png",
    resumo: "Rin consegue entrar em uma prestigiosa academia militar e descobre possuir habilidades mágicas. Sua trajetória acaba colocando-a no centro de uma guerra brutal."
},
{
    id: 83,
    titulo: "O Castelo de Howl",
    autor: "Diana Wynne Jones",
    genero: "fantasia",
    nota: 4.7,
    imagem: "img/o castelo.png",
    resumo: "Sophie é transformada em uma senhora idosa por uma bruxa. Para quebrar a maldição, ela acaba entrando no castelo mágico do misterioso mago Howl."
},
{
    id: 84,
    titulo: "O Jardim Secreto",
    autor: "Frances Hodgson Burnett",
    genero: "fantasia",
    nota: 4.6,
    imagem: "img/o jardim.png",
    resumo: "Mary encontra um jardim escondido em uma grande propriedade. Ao cuidar do lugar, ela descobre segredos da família e começa a transformar sua própria vida."
},
{
    id: 85,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    genero: "fantasia",
    nota: 4.9,
    imagem: "img/o pequeno principe.png",
    resumo: "Um piloto encontra um pequeno príncipe que veio de outro planeta. Durante suas conversas, o menino compartilha histórias e reflexões sobre amizade, amor e a vida."
},

{
    id: 86,
    titulo: "O Duque e Eu",
    autor: "Julia Quinn",
    genero: "romance",
    nota: 4.6,
    imagem: "img/duque e eu.png",
    resumo: "Daphne Bridgerton e Simon Basset fazem um acordo para fingir um relacionamento e escapar das pressões da sociedade. O que começa como uma estratégia acaba despertando sentimentos verdadeiros."
},
{
    id: 87,
    titulo: "A Caminho do Altar",
    autor: "Julia Quinn",
    genero: "romance",
    nota: 4.5,
    imagem: "img/a caminho do altar.png",
    resumo: "Gregory Bridgerton acredita que sabe exatamente como será sua história de amor, até conhecer alguém que faz seus planos mudarem completamente."
},
{
    id: 88,
    titulo: "Um Dia",
    autor: "David Nicholls",
    genero: "romance",
    nota: 4.5,
    imagem: "img/um dia.png",
    resumo: "Emma e Dexter se conhecem na faculdade e suas vidas continuam ligadas ao longo de muitos anos. A história acompanha encontros, desencontros, mudanças e sentimentos que permanecem."
},
{
    id: 89,
    titulo: "Pessoas que Conhecemos nas Férias",
    autor: "Emily Henry",
    genero: "romance",
    nota: 4.6,
    imagem: "img/nas ferias.png",
    resumo: "Poppy e Alex são melhores amigos que viajam juntos todos os anos. Depois de um acontecimento que os afastou, eles decidem fazer mais uma viagem para tentar recuperar a amizade."
},
{
    id: 90,
    titulo: "Leitura de Verão",
    autor: "Emily Henry",
    genero: "romance",
    nota: 4.5,
    imagem: "img/leitura de verao.png",
    resumo: "January é uma escritora que enfrenta um bloqueio criativo. Ao reencontrar um antigo conhecido, os dois fazem um desafio para escrever livros diferentes e acabam se aproximando."
},
{
    id: 91,
    titulo: "Depois de Você",
    autor: "Jojo Moyes",
    genero: "romance",
    nota: 4.7,
    imagem: "img/dps de vc.png",
    resumo: "Louisa Clark ainda tenta superar a perda de Will Traynor. Vivendo em Londres e trabalhando em um pub no aeroporto, ela sofre um acidente que a faz retornar para a casa da família. Durante sua recuperação, Lou conhece Sam Fielding, um paramédico que parece compreender sua dor. Aos poucos, ela começa a reconstruir sua vida, mas alguém ligado ao passado de Will aparece e muda novamente seus planos."
},
{
    id: 92,
    titulo: "O Reino das Pontes",
    autor: "Danielle L. Jensen",
    genero: "fantasia",
    nota: 4.5,
    imagem: "img/a ponte.png",
    resumo: "Lara é enviada para se casar com o rei de um reino rival. O casamento faz parte de um plano político, mas ela começa a questionar tudo o que acreditava sobre seu inimigo."
},
{
    id: 93,
    titulo: "Quarta Asa",
    autor: "Rebecca Yarros",
    genero: "fantasia",
    nota: 4.8,
    imagem: "img/quarta asa.png",
    resumo: "Violet é obrigada a entrar em uma academia militar para se tornar cavaleira de dragões. Entre treinamentos perigosos, dragões e rivalidades, ela precisa lutar para sobreviver."
},
{
    id: 94,
    titulo: "Coroa de Sombras",
    autor: "Tricia Levenseller",
    genero: "fantasia",
    nota: 4.4,
    imagem: "img/coroa de sombras.png",
    resumo: "Uma jovem determinada se envolve em uma disputa de poder marcada por magia, alianças e segredos. Para alcançar seus objetivos, ela precisa aprender a confiar em seus próprios instintos."
},
{
    id: 95,
    titulo: "A Cidade de Bronze",
    autor: "S. A. Chakraborty",
    genero: "fantasia",
    nota: 4.6,
    imagem: "img/a cidade de bronze.png",
    resumo: "Nahri descobre que possui uma ligação com um mundo mágico escondido. Ao ser levada para a lendária cidade de Daevabad, conhece gênios, conflitos políticos e segredos antigos."
},
{
    id: 96,
    titulo: "O Império Final",
    autor: "Brandon Sanderson",
    genero: "fantasia",
    nota: 4.8,
    imagem: "img/o imperio final.png",
    resumo: "Em um império dominado por um governante poderoso, um grupo de rebeldes planeja uma revolução. Vin, uma jovem com habilidades especiais, é recrutada para participar do plano."
},
{
    id: 97,
    titulo: "A Vida Invisível de Addie LaRue",
    autor: "V. E. Schwab",
    genero: "fantasia",
    nota: 4.7,
    imagem: "img/a vida invisivel de addie larue.png",
    resumo: "Addie faz um pacto que lhe concede liberdade para viver como quiser, mas com uma terrível consequência: ninguém se lembrará dela. Séculos depois, algo inesperado acontece."
},
{
    id: 98,
    titulo: "O Estranho Caso do Cachorro Morto",
    autor: "Mark Haddon",
    genero: "acao",
    nota: 4.3,
    imagem: "img/o estranho caso.png",
    resumo: "Christopher decide investigar a morte do cachorro de sua vizinha. Sua investigação o leva a descobrir segredos familiares e acontecimentos que mudam sua maneira de enxergar o mundo."
},
{
    id: 99,
    titulo: "O Enigma do Quarto 622",
    autor: "Joël Dicker",
    genero: "acao",
    nota: 4.5,
    imagem: "img/o enigma do quarto 622.png",
    resumo: "Um assassinato ocorrido anos atrás em um hotel suíço permanece sem solução. Uma investigação cheia de pistas, suspeitos e reviravoltas tenta descobrir a verdade."
},
{
    id: 100,
    titulo: "Inferno",
    autor: "Dan Brown",
    genero: "acao",
    nota: 4.6,
    imagem: "img/inferno.png",
    resumo: "Robert Langdon acorda em um hospital sem saber como chegou ali. Enquanto tenta recuperar a memória, encontra pistas relacionadas à obra de Dante e precisa impedir uma ameaça mundial."
},
{
    id: 101,
    titulo: "Anjos e Demônios",
    autor: "Dan Brown",
    genero: "acao",
    nota: 4.7,
    imagem: "img/anjos e demonios.png",
    resumo: "Robert Langdon investiga uma organização secreta ligada a uma série de acontecimentos perigosos no Vaticano. Símbolos, pistas e enigmas conduzem a investigação por Roma."
},
{
    id: 102,
    titulo: "Jogador Número 1",
    autor: "Ernest Cline",
    genero: "acao",
    nota: 4.6,
    imagem: "img/jogador numero um.png",
    resumo: "Em um futuro dominado pela realidade virtual, Wade participa de uma competição para encontrar um enorme prêmio escondido dentro de um mundo digital."
},
{
    id: 103,
    titulo: "O Chamado do Cuco",
    autor: "Robert Galbraith",
    genero: "acao",
    nota: 4.5,
    imagem: "img/o chamado de cuco.png",
    resumo: "O detetive Cormoran Strike investiga a morte de uma famosa modelo. O caso parece simples no início, mas novas descobertas revelam uma história cheia de segredos."
},
{
    id: 104,
    titulo: "O Último Desejo",
    autor: "Andrzej Sapkowski",
    genero: "acao",
    nota: 4.7,
    imagem: "img/o ultimo desejo.png",
    resumo: "Geralt de Rívia é um bruxo que caça monstros por dinheiro. Em suas aventuras, enfrenta criaturas perigosas, magia e decisões que nem sempre possuem respostas simples."
},
{
    id: 105,
    titulo: "A Casa no Mar Cerúleo",
    autor: "TJ Klune",
    genero: "fantasia",
    nota: 4.8,
    imagem: "img/a casa no mar ceruleo.png",
    resumo: "Linus Baker trabalha avaliando instituições que cuidam de crianças mágicas. Ao conhecer um grupo muito especial, começa a questionar as regras que sempre seguiu."
},
{
    id: 106,
    titulo: "O Priorado da Laranjeira",
    autor: "Samantha Shannon",
    genero: "fantasia",
    nota: 4.6,
    imagem: "img/o priorado da laranjeira.png",
    resumo: "Reinos rivais precisam se unir diante de uma ameaça antiga. Dragões, magia, política e alianças fazem parte de uma grande batalha pelo futuro do mundo."
},
{
    id: 107,
    titulo: "A Filha da Deusa da Lua",
    autor: "Sue Lynn Tan",
    genero: "fantasia",
    nota: 4.5,
    imagem: "img/a filha da deusa da lua.png",
    resumo: "Xingyin vive escondida na lua por causa de um segredo ligado à sua origem. Quando sua identidade é descoberta, ela precisa fugir e enfrentar um mundo cheio de magia e perigos."
},
{
    id: 108,
    titulo: "A Casa Infernal",
    autor: "Richard Matheson",
    genero: "terror",
    nota: 4.5,
    imagem: "img/a casa infernal.png",
    resumo: "Um grupo de investigadores entra em uma mansão conhecida por acontecimentos sobrenaturais. Conforme exploram o local, percebem que a casa esconde uma presença extremamente perigosa."
},
{
    id: 109,
    titulo: "O Ritual",
    autor: "Adam Nevill",
    genero: "terror",
    nota: 4.4,
    imagem: "img/o ritual.png",
    resumo: "Quatro amigos decidem atravessar uma floresta isolada durante uma caminhada. Perdidos e cercados por acontecimentos estranhos, percebem que não estão sozinhos."
},
{
    id: 110,
    titulo: "A Paciente Silenciosa",
    autor: "Alex Michaelides",
    genero: "terror",
    nota: 4.6,
    imagem: "img/a paciente silenciosa.png",
    resumo: "Alicia Berenson é acusada de matar o próprio marido e nunca mais fala depois do crime. Um terapeuta fica obcecado em descobrir o motivo de seu silêncio."
},
{
    id: 111,
    titulo: "O Homem de Palha",
    autor: "Pablo Zorzi",
    genero: "terror",
    nota: 4.3,
    imagem: "img/o homem de palha.png",
    resumo: "A história se passa em uma pequena cidade do Alasca, onde uma jovem desaparecida há dez anos é encontrada morta em circunstâncias misteriosas. Depois desse acontecimento, novos assassinatos começam a assustar os moradores. Os investigadores Gustavo Prado e Allegra Green ficam responsáveis por solucionar os crimes e descobrir a identidade do assassino, conhecido como Homem de Palha. Durante a investigação, eles encontram pistas assustadoras e segredos que tornam o caso cada vez mais perigoso."
},
{
    id: 112,
    titulo: "O Terror",
    autor: "Dan Simmons",
    genero: "terror",
    nota: 4.5,
    imagem: "img/o terror.png",
    resumo: "Uma expedição marítima fica presa no gelo durante uma viagem ao Ártico. Além das condições extremas, a tripulação precisa enfrentar uma presença misteriosa que os persegue."
},
{
    id: 113,
    titulo: "O Visitante",
    autor: "Stephen King",
    genero: "terror",
    nota: 4.5,
    imagem: "img/o visitante.png",
    resumo: "Um crime aparentemente impossível deixa a polícia diante de evidências contraditórias. Conforme a investigação avança, acontecimentos sobrenaturais começam a surgir."
},
{
    id: 114,
    titulo: "O Rei de Amarelo",
    autor: "Robert W. Chambers",
    genero: "terror",
    nota: 4.3,
    imagem: "img/o rei de amarelo.png",
    resumo: "Uma coleção de histórias apresenta personagens que entram em contato com um misterioso livro capaz de provocar acontecimentos perturbadores e inexplicáveis."
},
{
    id: 115,
    titulo: "A Estrada",
    autor: "Cormac McCarthy",
    genero: "acao",
    nota: 4.6,
    imagem: "img/a estrada.png",
    resumo: "Um pai e seu filho atravessam uma paisagem destruída por uma catástrofe. Enquanto procuram um lugar seguro, precisam enfrentar fome, frio e outros sobreviventes."
},
{
    id: 116,
    titulo: "Eu Sou a Lenda",
    autor: "Richard Matheson",
    genero: "terror",
    nota: 4.7,
    imagem: "img/eu sou a lenda.png",
    resumo: "Robert Neville parece ser o último homem saudável em um mundo dominado por criaturas semelhantes a vampiros. Durante o dia, ele procura maneiras de sobreviver e entender a origem da doença."
},
{
    id: 117,
    titulo: "A Guerra dos Mundos",
    autor: "H. G. Wells",
    genero: "acao",
    nota: 4.6,
    imagem: "img/a guerra dos mundos.png",
    resumo: "A Terra é invadida por criaturas vindas de Marte. Enquanto as cidades entram em caos, um homem tenta sobreviver e encontrar sua família em meio à destruição."
},
{
    id: 118,
    titulo: "Viagem ao Centro da Terra",
    autor: "Júlio Verne",
    genero: "acao",
    nota: 4.7,
    imagem: "img/viagem ao centro da terra.png",
    resumo: "Um professor e seu sobrinho encontram pistas que levam a uma passagem para o interior da Terra. A expedição revela um mundo subterrâneo cheio de criaturas e perigos."
},
{
    id: 119,
    titulo: "A Volta ao Mundo em 80 Dias",
    autor: "Júlio Verne",
    genero: "acao",
    nota: 4.7,
    imagem: "img/volta ao mundo.png",
    resumo: "Phileas Fogg aposta que consegue dar a volta ao mundo em apenas 80 dias. Acompanhado de seu criado, ele enfrenta atrasos, imprevistos e aventuras durante a viagem."
},
{
    id: 120,
    titulo: "O Homem da Máscara de Ferro",
    autor: "Alexandre Dumas",
    genero: "acao",
    nota: 4.5,
    imagem: "img/o homem da mascara de ferro.png",
    resumo: "Uma história de intrigas, conspirações e disputas pelo poder envolvendo personagens da França. Os mosqueteiros se envolvem em uma missão cheia de perigos e segredos."
},
{
    id: 121,
    titulo: "O Primeiro a Morrer no Final",
    autor: "Adam Silvera",
    genero: "Romance",
    nota: 4.5,
    imagem: "img/o primeiro a morrer.png",
    resumo: "No início de uma nova era, o serviço da Morte anuncia que alguém morrerá nas próximas 24 horas. Orion Pagan e Valentino Prince se conhecem em Nova York e começam a criar uma conexão especial, mesmo sabendo que o tempo pode estar contra eles. A história acompanha o encontro dos dois e mostra como o amor pode transformar completamente uma vida, mesmo quando o futuro é incerto."
}
];

const listaLivros = document.getElementById("listaLivros");

const tituloCategoria = document.getElementById("tituloCategoria");

const quantidadeLivros = document.getElementById("quantidadeLivros");

const pesquisa = document.getElementById("pesquisa");

function criarCard(livro){

return `

<div class="card" data-id="${livro.id}">

<img src="${livro.imagem}" alt="${livro.titulo}">

<h3>${livro.titulo}</h3>

<p>${livro.autor}</p>

<p>⭐ ${livro.nota}</p>

</div>

`;

}

function mostrarLivros(lista){

listaLivros.innerHTML="";

lista.forEach(livro=>{

listaLivros.innerHTML+=criarCard(livro);

});

quantidadeLivros.textContent=`${lista.length} livros`;

}

mostrarLivros(livros);

const botoes=document.querySelectorAll(".categoria");

botoes.forEach(botao=>{

botao.addEventListener("click",()=>{

botoes.forEach(btn=>btn.classList.remove("ativa"));

botao.classList.add("ativa");

const genero=botao.dataset.genero;

if(genero==="todos"){

tituloCategoria.textContent="Todos os Livros";

mostrarLivros(livros);

return;

}

tituloCategoria.textContent=

genero.charAt(0).toUpperCase()+

genero.slice(1);

const filtrados=

livros.filter(

livro=>livro.genero===genero

);

mostrarLivros(filtrados);

});

});

pesquisa.addEventListener("input",()=>{

const texto=

pesquisa.value.toLowerCase();

const encontrados=

livros.filter(livro=>

livro.titulo.toLowerCase().includes(texto)

);

tituloCategoria.textContent="Pesquisa";

mostrarLivros(encontrados);

});

const modal = document.getElementById("modal");

const fechar = document.getElementById("fechar");

const modalImagem = document.getElementById("modalImagem");

const modalTitulo = document.getElementById("modalTitulo");

const modalAutor = document.getElementById("modalAutor");

const modalResumo = document.getElementById("modalResumo");

const modalGenero = document.getElementById("modalGenero");

function abrirLivro(id){

    const livro = livros.find(l => l.id == id);

    if(!livro) return;

    modalImagem.src = livro.imagem;

    modalImagem.alt = livro.titulo;

    modalTitulo.textContent = livro.titulo;

    modalAutor.textContent = livro.autor;

    modalResumo.textContent = livro.resumo;

    modalGenero.textContent =
        livro.genero.charAt(0).toUpperCase() +
        livro.genero.slice(1);

    modal.classList.add("ativo");

    document.body.style.overflow = "hidden";

}

listaLivros.addEventListener("click",(e)=>{

    const card = e.target.closest(".card");

    if(!card) return;

    abrirLivro(card.dataset.id);

});

fechar.addEventListener("click",()=>{

    modal.classList.remove("ativo");

    document.body.style.overflow = "auto";

});

modal.addEventListener("click",(e)=>{

    if(e.target === modal){

        modal.classList.remove("ativo");

        document.body.style.overflow = "auto";

    }

});

const estrelas = document.querySelectorAll("#modalEstrelas i");

let livroAtual = null;

let notaSelecionada = 0;

function abrirLivro(id){

    const livro = livros.find(l=>l.id==id);

    if(!livro) return;

    livroAtual = livro.id;

    modalImagem.src = livro.imagem;

    modalTitulo.textContent = livro.titulo;

    modalAutor.textContent = livro.autor;

    modalResumo.textContent = livro.resumo;

    modalGenero.textContent =
    livro.genero.charAt(0).toUpperCase() +
    livro.genero.slice(1);

    notaSelecionada = 0;

    atualizarEstrelas();

    carregarComentarios();

    modal.classList.add("ativo");

    document.body.style.overflow="hidden";

}
function atualizarEstrelas(){

    estrelas.forEach((estrela,index)=>{

        estrela.classList.toggle(
            "ativa",
            index<notaSelecionada
        );

    });

}
estrelas.forEach((estrela,index)=>{

    estrela.addEventListener("click",()=>{

        notaSelecionada=index+1;

        atualizarEstrelas();

    });

});

const campoComentario=document.getElementById("comentario");

const listaComentarios=document.getElementById("listaComentarios");

const botaoEnviar=document.getElementById("enviar");

botaoEnviar.addEventListener("click",()=>{

    if(campoComentario.value.trim()===""){

        alert("Escreva um comentário.");

        return;

    }

    if(notaSelecionada===0){

        alert("Selecione uma nota.");

        return;

    }

    const comentario={

        nota:notaSelecionada,

        texto:campoComentario.value

    };

    const comentarios=

    JSON.parse(

    localStorage.getItem("comentarios")

    )||{};

    if(!comentarios[livroAtual]){

        comentarios[livroAtual]=[];

    }

    comentarios[livroAtual].push(comentario);

    localStorage.setItem(

        "comentarios",

        JSON.stringify(comentarios)

    );

    campoComentario.value="";

    notaSelecionada=0;

    atualizarEstrelas();

    carregarComentarios();

});

function carregarComentarios(){

    listaComentarios.innerHTML="";

    const comentarios =
    JSON.parse(localStorage.getItem("comentarios")) || {};

    const lista = comentarios[livroAtual] || [];

    lista.forEach((item,index)=>{

        listaComentarios.innerHTML += `

        <div class="comentario">

            <strong>Leitor</strong>

            <div class="estrelas-comentario">

                ${"⭐".repeat(item.nota)}

            </div>

            <p>${item.texto}</p>

            <button
                class="btnExcluir"
                data-index="${index}">

                <i class="fa-solid fa-trash"></i>

                Excluir

            </button>

        </div>

        `;

    });

    adicionarEventosExcluir();

}

function adicionarEventosExcluir(){

    const botoes = document.querySelectorAll(".btnExcluir");

    botoes.forEach(botao=>{

        botao.addEventListener("click",()=>{

            const indice = botao.dataset.index;

            const comentarios =
            JSON.parse(localStorage.getItem("comentarios")) || {};

            comentarios[livroAtual].splice(indice,1);

            localStorage.setItem(
                "comentarios",
                JSON.stringify(comentarios)
            );

            carregarComentarios();

        });

    });

}