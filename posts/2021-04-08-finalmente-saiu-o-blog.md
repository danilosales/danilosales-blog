---
title: Finalmente saiu o blog!
description: Falando um pouco da experiência de criar um blog
date: 2021-04-08 22:45:00
category: misc
tags:
  - react
  - gatsby
  - graphql
background: "#637a91"
image: https://images.unsplash.com/photo-1569748130764-3fed0c102c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE3OTI4NTIx&ixlib=rb-1.2.1&q=80&w=1080
---

![React code block](https://images.unsplash.com/photo-1569748130764-3fed0c102c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE3OTI4NTIx&ixlib=rb-1.2.1&q=80&w=1080)

Opa, e aí, cheguei para ficar!\
Seja bem-vindo ao meu humilde blog, não tem lá muita coisa ainda, mas com o tempo pretendo preencher esse pequeno site com bastante conhecimento, tanto o que ando aprendendo, quanto os que eu já sei.

Agora vamos ao assunto principal: *por que eu tirei esse blog do fundo do baú?* A muito tempo venho com a idéia de fazer um blog, mas como toda pessoa desenvolvedora de respeito, acaba deixando o projeto de lado e segue fazendo outras milhares de coisas e nunca termina aquilo que começou.

Há umas semanas atrás, aproveitei uma vespera de feriado para matar banco de horas da empresa, neste dia ao invés de fazer qualquer outra coisa, acordei com uma vontade imensa de escrever um artigo falando sobre as novidades do Java 16 lançado a poucos dias.

Assim começou aquela segunda, vespera de feriado em comemoração ao aniversário de Florianopolis, cidade que estou aprendendo a amar sem conseguir de fato aproveitar por conta da pandemia de COVID-19.

Como queria iniciar e não queria ter desculpa de onde publicar, acabei optando por escrever e publicar no Medium. Após uns dias de publicação, uma coisa começou a me incomodar, para acessar alguns posts era necessário ter uma assinatura na plataforma. Isto começou a me deixar extramamente chateado, acredito que conhecimento deve ser transmitido ao máximo de pessoas possivéis e nem todos podem pagar por isso.

Sendo assim unindo a insatisfação e a vontade de não utilizar plataformas como wordpress, decidi construir utilizando como base o Gatsby, um framework React para construção de páginas, sites e que vem sendo bastante utilizada para blogs.

### Tecnologias utilizadas ####

#### Gatsby ####

Já faz um tempo que venho estudando e criando algumas coisas com React,já havia ouvido falar do Gatsby, e acabei optando por ele ao invés de outros como jekyll, Hugo e etc. O foco do Gatsby é proporcionar um desenvolvimento rápido, efetivo e performático, acima de tudo.

A forma que ele funciona consiste em três etapas. Primeiro, você tem o Data Source, que é basicamente a fonte desses dados que você vai entregar pra construir o web site ou uma aplicação, como um blog, por exemplo.

E, depois, vem o processo de building, onde ele vai incorporar todo HTML, JavaScript e CSS que são necessários para compilar sua aplicação, lendo em cima dessa fonte de dados e construir o site estático.

O conceito do Gatsby é ler esses dados, construí-los de forma estática, criando um site estático, que é o que dá, de fato, essa performance para ele. Por fim, a terceira etapa é o Deploy, onde você entrega esses arquivos e os visualiza na web.

#### GraphQL ####

O Gatsby utiliza graphql para a criação da lógica na construção das páginas, é uma tecnologia incrivel criada pelo Facebook. Pretendo falar mais dele no futuro e detalhar um pouco mais sobre o uso.

#### Algolia ####

Para fornecer um meio de buscar os posts, optei por utilizar um serviço online chamado  Algolia. Ele é um sistema de busca extremamente rápido e inteligente, possibilitando buscas por sinônimos, por conteúdos dentro do texto do post, além de ter um "typo correction", ou seja, se a pessoa errar uma letra ou outra, ele vai buscar pelo termo certo.

Ele possui vários planos, e o que eu uso é o Community, que é gratuito e já me permite 10 mil operações por mês, o que é bem suficiente para o tamanho do meu blog. Além disso, ele me dá alguns dados relacionados a que tipos de buscas foram feitas, isso irá ajudar no futuro a saber o que as pessoas procuram e se eu não tiver nada do assunto, posso começar a escrever!

#### Disqus ####

Feedback é algo que considero muito importante na minha vida, então optei por utilizar o Disqus para comentários.

Fiquei na dúvida no uso desta ferramenta, por ser um third-party script, ele acaba carregando coisas que prejudicam de leve a performance, mesmo que várias coisas sejam async. Estou utilizando o react-disqus-comments, que foi a solução mais simples e leve que achei também.

Vamos ver como vai ser e se de fato vai ter alguma interação, qualquer coisa eu removo no futuro.


#### Markdown + NetlifyCMS ####

O Gatsby possui um plugin que é bastante utilizado em todo o seu ecossistema usado na construção todo o conteúdo e páginas, em resumo todo o conteúdo é escrito em markdown e é interpretado por ele junto com ao graphql.

O [Netlify CMS](https://www.netlifycms.org/) basicamente adiciona um CMS para o meu blog, sem esforço nenhum, bastando algumas linhas. E porque usar um CMS, se eu já subo tudo para o Github e eu sei ler Markdown sem problemas?

Simples, no CMS, eu posso escrever rascunhos de forma mais fácil, deixar uma pilha de ideias lá e ir terminando conforme eu achar necessário. Além de ter um preview do que estou escrevendo e bom... não preciso de um elefante branco para ter essas facilidades. ~~to falando de você Wordpress.~~


### Próximos passos

Bem, fazendo uma analise bem simples, ainda preciso finalizar algumas partes do blog, tentar fazer posts pelo menos uma vez ao mês(espero chegar a publicar quinzenalmente ou semanalmente), e corrigir alguns bugszinhos aqui ou ali que possa ter e fazendo alguns ajustes de layout.

Muito obrigado por ter lido até aqui, nos vemos na próxima!

Foto do usuário [Filiberto Santillán](https://unsplash.com/@filisantilan) no [Unsplash](https://unsplash.com/)
