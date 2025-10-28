const newsData = [
    // --- NOTÍCIA PRINCIPAL - O FATO (05/02/2020) ---
    {
        id: "coletiva-sirius-caos",
        isMainHeadline: true, // Notícia principal do dia
        category: "BRASIL - URGENTE",
        headline: "COLETIVA SOB ATAQUE: Sirius confirma investigação contra Defensores em aliança com ARISA; Invasores e 'Anjo Dourado' surgem em Brasília.",
        summary: "Pronunciamento de Sirius é sabotado por grupo tático. O líder da investigação sobre os Defensores citou o Incidente de Chennai para justificar a cooperação internacional, que é apoiada pela população mas atacada por radicais.",
        author: "Redação Pulso (Com reportagem de campo de Marcos Andrade)",
        date: "05 de Fevereiro de 2020 - 15:45 (Atualizado 17:50)",
        fullStory: `
            <p>Em um pronunciamento tenso que parou o país, Sirius, o líder da inteligência dos Defensores e agora chefe da força-tarefa que investiga a própria equipe, foi alvo de um ataque coordenado. O evento ocorreu momentos após ele anunciar uma aliança sem precedentes com a agência global ARISA para finalizar a investigação sobre a queda dos heróis nacionais.</p>
            <p>Sirius, a única figura de liderança dos Defensores que não foi implicada no escândalo de traição do mês passado, falou a uma nação que se sente traída. Ele confirmou que a investigação interna sobre o suposto conluio da equipe com células terroristas está "em estágio avançado", mas que as evidências apontam para "uma conspiração de nível global, com recursos tecnológicos e financeiros que ultrapassam a capacidade de qualquer nação isolada."</g>
            <p>Foi então que ele usou o desastre de Chennai como um parâmetro. Sirius argumentou que o nível de sofisticação da ameaça que corrompeu ou incriminou os Defensores é "de classe existencial", exigindo uma resposta internacional unificada. Por essa razão, ele anunciou a formalização de uma "cooperação técnica irrestrita" com a ARISA, que enviará seus melhores analistas e investigadores para auditar o caso e caçar os verdadeiros culpados.</p>
            <p>A reação popular a essa notícia, medida por enquetes online, era majoritariamente positiva. No entanto, um grupo de manifestantes radicais presentes na praça começou a gritar palavras de ordem contra o que chamam de "ocupação" da ARISA. No exato momento em que a segurança continha esse grupo, um ataque muito mais perigoso começou. Pelo menos oito indivíduos, trajando uniformes táticos pretos e máscaras balísticas, invadiram o palco. O grupo demonstrou treinamento de elite, utilizando granadas de fumaça e dispositivos de concussão sônica para neutralizar a segurança.</p>
            <p>O alvo era claramente Sirius. O confronto foi brutal e rápido. A polícia e os seguranças restantes dos Defensores foram pegos de surpresa. Quando um dos invasores estava prestes a subjugar Sirius, um segundo evento, de natureza completamente diferente, paralisou a todos.</p>
            <p>Uma luz dourada intensa emanou do céu. Testemunhas e as câmeras do <strong>Pulso</strong> capturaram o momento em que uma entidade humanoide, de aproximadamente três metros de altura e envolta em chamas douradas que não queimavam, apareceu flutuando sobre o palco. A "Figura Dourada", como já está sendo apelidada, não demonstrou hostilidade. Ela simplesmente observou o conflito abaixo. Sua mera presença induziu um silêncio absoluto e um medo primordial em todos os presentes, incluindo os agressores mascarados, que congelaram.</p>
            <p>A entidade pairou por vários segundos antes de desaparecer em um feixe de luz vertical. No vácuo de sua partida, o caos retornou, mas os invasores aproveitaram a distração sobrenatural para recuar e desaparecer na confusão. Sirius foi retirado às pressas, ileso, mas visivelmente abalado.</p>
            <p>O ataque terrorista, ironicamente, serviu apenas para provar o ponto de Sirius: o Brasil está enfrentando inimigos que operam nas sombras e com recursos de nível militar. A investigação da ARISA, que começa na próxima semana, tornou-se a missão mais perigosa e observada do planeta.</p>
            <p><strong>ATUALIZAÇÃO 17:48:</strong> Circulam nas redes sociais e em grupos de mensagem da polícia boatos perturbadores de que um policial militar, posicionado na linha de contenção, cometeu suicídio com a própria arma durante a confusão. As imagens são inconclusivas e um porta-voz da PM negou o boato, afirmando que o policial "passou mal devido a uma granada de efeito moral". O <strong>Pulso</strong> está investigando a veracidade das alegações.</p>
        `
    },
    // --- ANÁLISE / REAÇÃO PÚBLICA (NOVO) ---
    {
        id: "analise-opiniao-arisa",
        isMainHeadline: false,
        isSecondaryBreaking: true, // Notícia quente relacionada
        category: "ANÁLISE E OPINIÃO",
        headline: "ANÁLISE: População vê ARISA como 'mal necessário' e 'única saída' para crise.",
        summary: "Diferente dos protestos radicais, enquetes mostram que 72% dos brasileiros apoiam a vinda da ARISA. Confiança na agência global supera a das instituições nacionais após escândalo.",
        author: "Clarissa Mendes, Editora de Sociedade",
        date: "05 de Fevereiro de 2020 - 18:00",
        fullStory: `
            <p>O ataque violento de um grupo extremista em Brasília não reflete a opinião da maioria da população. Uma enquete rápida realizada pelo Instituto DataPulso, logo após o anúncio de Sirius, mostrou que 72% dos brasileiros são "totalmente a favor" ou "a favor com ressalvas" da cooperação com a ARISA.</p>
            <p>O motivo é a confiança, ou a falta dela. Após o escândalo que dissolveu os Defensores, a confiança pública nas instituições de segurança nacionais despencou. A ARISA, por outro lado, goza de uma reputação global de eficiência e imparcialidade. O sucesso em Singapura e, principalmente, sua liderança na resposta ao Incidente de Chennai, são vistos como provas de sua capacidade.</p>
            <p>"Ninguém gosta de admitir que precisa de ajuda externa", comentou o sociólogo Dr. Hélio Vargas, "mas o sentimento geral é que o problema é grande demais para nós. A acusação de que os Defensores estariam ligados a terroristas é tão grave que só uma entidade acima de qualquer suspeita, como a ARISA, pode conduzir uma investigação limpa. O povo não quer vingança, quer a verdade."</g>
            <p>O grupo que atacou Sirius é, segundo analistas de segurança, o mesmo que tem sido associado a pichações e manifestações no "Lixão" — uma facção radical e anarquista que vê tanto o governo quanto a ARISA como forças opressoras. O ataque de hoje, paradoxalmente, apenas reforçou na opinião pública a necessidade da presença da ARISA.</p>
        `
    },
    // --- CONTEXTO (ARQUIVO - NOVO) ---
    {
        id: "arquivo-defensores-queda",
        isMainHeadline: false,
        category: "ARQUIVO PULSO",
        headline: "A QUEDA DOS HERÓIS: Entenda o escândalo de traição que dissolveu os Defensores.",
        summary: "Há três semanas, o Brasil prendeu seus maiores protetores. O 'Pulso' reconstrói o escândalo de vazamentos que acusou a 'Amazona' de conluio com terroristas.",
        author: "Equipe Pulso Arquivo",
        date: "01 de Fevereiro de 2020",
        fullStory: `
            <p>Para entender a decisão drástica de Sirius hoje, é preciso voltar 21 dias, para o dia em que o Brasil declarou guerra a si mesmo. A "Queda dos Defensores" não foi uma batalha, foi uma execução pública por mil vazamentos.</p>
            <p>Tudo começou quando um consórcio de jornalismo investigativo internacional publicou os "Arquivos Sombra". Eram gigabytes de dados criptografados que supostamente vazaram de um servidor dos Defensores. Os arquivos continham comunicações internas, manifestos de voo e, o mais devastador, ordens de transferência de armas de alta tecnologia.</p>
            <p>Os documentos pareciam provar, de forma conclusiva, que a líder dos Defensores, 'Amazona', com o conhecimento tático de 'Titã' e 'Ventania', havia desviado secretamente armas "despertadas" não-rastreáveis para uma célula terrorista conhecida como "A Vanguarda Vermelha".</p>
            <p>A reação foi global e imediata. O governo brasileiro, pego de surpresa e humilhado internacionalmente, não teve escolha. Sob pressão da ONU e da própria ARISA, o Ministério da Defesa dissolveu a equipe e emitiu mandados de prisão para os membros sobreviventes. 'Amazona' e os outros estão detidos em uma instalação militar de segurança máxima, aguardando julgamento. O público, que um dia os amou, sentiu-se traído.</p>
            <p>Sirius, o chefe de inteligência, foi o único não implicado. Os vazamentos o pintaram como "o traído", aquele que foi mantido no escuro por sua própria equipe. Desde então, ele tem trabalhado incansavelmente, não como um colega, mas como o investigador-chefe da força-tarefa, para provar que os "Arquivos Sombra" são a maior e mais sofisticada armação da história. A vinda da ARISA, anunciada hoje, é sua última e única cartada para ter acesso a recursos internacionais e provar sua teoria.</p>
        `
    },
    // --- NOTÍCIA DE TECNOLOGIA E ECONOMIA (WORLD BUILDING) ---
    {
        id: "neo-tech-fusao",
        isMainHeadline: false,
        category: "ECONOMIA & INOVAÇÃO",
        headline: "Neo-Tech choca o mercado e anuncia Reator de Fusão Compacto 'ARC' para 2022.",
        summary: "Em um anúncio que pode encerrar a crise energética global, a gigante da tecnologia Neo-Tech afirma ter estabilizado a fusão nuclear em um reator do tamanho de um contêiner. Ações disparam 45%.",
        author: "David Chen, Tecnologia",
        date: "03 de Fevereiro de 2020",
        fullStory: `
            <p>A Neo-Tech, a corporação mais valiosa do mundo, fez um anúncio nesta semana que ofuscou todas as outras notícias globais: o sucesso de seu programa "Projeto Prometeu". A empresa revelou o 'ARC' (Ativador de Ressonância Compacta), um reator de fusão nuclear funcional, estável e, o mais chocante, portátil.</p>
            <p>Diferente dos gigantescos e experimentais reatores Tokamak, que consomem mais energia do que geram, o CEO da Neo-Tech, Elara Vance, demonstrou o ARC em funcionamento em uma transmissão ao vivo de sua sede em Neo-Tokyo. O reator, do tamanho de um contêiner, utilizou Deutério (água do mar) para gerar 500 megawatts de energia limpa e contínua por 72 horas.</p>
            <p>"Hoje, nós não apenas resolvemos a crise climática. Nós encerramos a guerra por recursos. A energia agora é tão fundamental e barata quanto o ar", declarou Vance na apresentação. Ela prometeu que os primeiros reatores 'ARC' estarão disponíveis comercialmente no final de 2022, com prioridade para nações em desenvolvimento.</p>
            <p>A reação foi sísmica. As ações de todas as empresas de petróleo e gás do mundo, incluindo a Petrobras, entraram em colapso. As ações da Neo-Tech (NASDAQ: NTEC) subiram 45% antes de terem as negociações suspensas por volatilidade. Governos estão em pânico, tentando entender as implicações geopolíticas de uma única empresa deter a chave para a energia ilimitada. Críticos alertam que isso dá à Neo-Tech um poder superior ao de nações, transformando Vance na "Imperatriz de fato" do planeta.</p>
        `
    },
    // --- NOTÍCIA DE CIÊNCIA (WORLD BUILDING) ---
    {
        id: "ciencia-ia-oceanus",
        isMainHeadline: false,
        category: "CIÊNCIA & DESCOBERTA",
        headline: "IA 'Oceanus' descobre estruturas 'não-humanas' e 'organizadas' no fundo da Fossa das Marianas.",
        summary: "A comunidade científica está em choque após uma IA de profundidade da Universidade de Kyoto revelar o que parecem ser filamentos biológicos cobrindo 150km do leito marinho.",
        author: "Science Today",
        date: "22 de Janeiro de 2020",
        fullStory: `
            <p>O que começou como um projeto de mapeamento de profundidade tornou-se, potencialmente, a descoberta biológica mais importante—e aterrorizante—da história humana. A IA 'Oceanus', uma inteligência artificial totalmente autônoma operando uma frota de drones submersos, concluiu seu mapeamento de 90% da Fossa das Marianas.</p>
            <p>Os dados, publicados hoje na revista 'Nature', não mostram apenas novas espécies de peixes-caracol ou micróbios. Mostram o que o Dr. Kenji Tanaka, líder do projeto, descreve como "uma estrutura biológica organizada de escala geológica".</p>
            <p>A 'Estrutura', como está sendo chamada, consiste em uma rede de filamentos luminescentes, cada um com cerca de 30 cm de espessura, que correm pelo leito do oceano, conectando fontes hidrotermais em um padrão que é descrito como "intencional e não-aleatório". A rede cobre uma área estimada de 150 quilômetros quadrados.</p>
            <p>A IA Oceanus, inclusive, detectou que a rede "reagiu" à sua presença. "Não estamos olhando para um organismo passivo. Estamos olhando para algo que se assemelha mais a um sistema nervoso do tamanho de uma cidade", explicou o Dr. Tanaka. "A IA detectou pulsos de energia rítmicos que *mudaram* de padrão quando nossas sondas se aproximaram. O que quer que seja, está ciente de nós. E não sabemos se é amigo ou não."</I></p>
        `
    },
    // --- NOTÍCIA DE CULTURA (WORLD BUILDING) ---
    {
        id: "cultura-filme-vizinho",
        isMainHeadline: false,
        category: "CULTURA & SOCIEDADE",
        headline: "Fenômeno de bilheteria, 'O Vizinho de Cima' captura a paranoia da Era Despertada.",
        summary: "Sem heróis ou vilões, o filme de terror sul-coreano que foca no medo de Despertados de baixo nível se torna o filme mais comentado do ano. Críticos o chamam de 'o espelho da nossa ansiedade'.",
        author: "Variety",
        date: "19 de Janeiro de 2020",
        fullStory: `
            <p>Em um mundo obcecado por Despertados Nível Ômega e batalhas que destroem cidades, o filme mais lucrativo do último trimestre foi um thriller de baixo orçamento filmado inteiramente dentro de um prédio de apartamentos em Seul.</p>
            <p>"O Vizinho de Cima" ("The Neighbor Upstairs"), dirigido por Lee Min-jun, tornou-se um fenômeno global por explorar o que nenhum blockbuster ousa tocar: a paranoia social de viver ao lado de pessoas com poderes.</p>
            <p>O filme não tem vilões. O antagonista é a ansiedade. A trama segue um jovem casal que se convence de que seu vizinho recluso do andar de cima é um "Despertado" perigoso. As "provas" são circunstanciais e pequenas: as lâmpadas queimam quando ele está em casa, o cachorro late sem parar para a porta dele, e um dia, a esposa vê, ou acha que viu, uma colher cair da mesa e parar a centímetros do chão.</p>
            <p>O filme acompanha a descida do casal à loucura e ao vigilantismo, culminando em um final trágico e ambíguo. "O Vizinho de Cima" funciona porque captura perfeitamente o medo da sociedade moderna", escreveu o crítico do New York Times. "Não temos medo do monstro que destrói a cidade; temos medo do colega de trabalho que pode estar lendo nossos pensamentos, ou do vizinho que pode fazer o gás vazar com um gesto."</a_i>
            <p>O impacto do filme foi além das bilheterias. No congresso americano, legisladores que propõem um "Registro de Habilidades" citaram o filme como um exemplo da "necessidade de transparência para a segurança pública". Em contrapartida, grupos de direitos civis o usam como prova da perseguição e histeria que os Despertados de baixo nível, a maioria inofensivos, enfrentam diariamente.</p>
        `
    }
];