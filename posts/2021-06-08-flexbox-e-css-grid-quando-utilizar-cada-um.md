---
title: Flexbox e CSS Grid - Quando utilizar cada um ?
description: Decidir entre CSS grid e Flexbox pode ser um pouco difícil (às
  vezes), especialmente se você é novo em CSS. Esse artigo pode te ajudar !!
date: 2021-06-28 22:55:14
tags:
  - css
category: css
background: "#7D669E"
image: assets/img/flexbox-e-css-grid.png
---
![Photo by Unsplash](https://source.unsplash.com/vw3Ahg4x1tY/1600x900 "Photo by Unsplash")

Quem trabalhou com desenvolvimento Front-end no passado sabe da dificuldade que a gente tinha pra fazer coisas triviais como um simples alinhamento vertical. 

O mesmo acontecia no desenvolvimento de Grids, então passamos a utilizar: Layouts em tabela, colunas desenvolvidas com **float** até chegarmos em soluções melhores como: Lost grid ou as famosas Grids do Bootstrap.

Hoje em dia CSS Grid e Flexbox resolvem praticamente todos os problemas que tínhamos para posicionar e organizar nossos elementos em tela.

Quando o Flexbox apareceu, ele tornou o alinhamento muito mais fácil e, desde então, foi amplamente adotado. O CSS Grid também criou muito entusiasmo na comunidade de web design. Flexbox e CSS Grid mostram resultados semelhantes, então a idéia é de fato deixar mais claro quando podemos utilizar um ou outro e combiná-los entre si.

Antes de entrar de cabeça nos conceitos e exemplos, eu quero me certificar que você entende a diferença entre CSS grid e flexbox.

![Imagem](https://pbs.twimg.com/media/EcgI56IWsAAnQrB?format=jpg&name=900x900)

A imagem acima foi compartilhada no [twitter](https://twitter.com/diogomoretti_/status/1281283890951446528) pelo [Diogo Moretti](https://twitter.com/diogomoretti_) e para mim é uma ótima referência em como podemos definir o uso dessas estruturas.

Se a gente imaginar uma casa:

* **CSS Grid**: Seria responsável pela estrutura dos cômodos
* **Flexbox**: Seria responsável pela disposição dos móveis dentro desses cômodos

**Flexbox** é unidimensional, ou seja, linha OU coluna e não ambos, então é perfeito para o desenvolvimento interno de COMPONENTES.

**CSS grid** é um módulo bi-dimensional de layout, o que significa que ele possui colunas e linhas, perfeito para layouts.



Certo, mas e quando utilizar um ou outro ? E a resposta é depende, depende do layout e o que você  deseja montar, mas eu costumo me fazer a seguinte pergunta:

* ***Como os itens do componente são exibidos? Em linha ou em colunas e linhas?***

A maioria das vezes se olharmos os seus itens no componente e eles estiverem em linha ou uma única coluna usaremos o display flex. Um bom exemplo são os nossos famosos headers:

![layout by flywheel grid and flexbox justify content screenshot](https://getflywheel.com/wp-content/uploads/2017/08/flexbox-justify-content.jpg)

Esse exemplo acima é facilmente estruturado usando display flex, o seguinte html abaixo exemplifica a imagem acima :

```html
<header>
  <nav>
    <ul>
      <li class="logo">
        <a href="#"><img src="logo.png"/></a>
      </li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <button>Login</button>
</header>
```

Aqui neste caso temos dois elementos dentro da tag header, o nosso nav que contém a logo e os links de About e Contact, e do lado direito temos o botão de login, para posicionar estes dois grupos um em cada ponta basta definirmos **display: flex** e definir para justificar o conteúdo com um espaço entre eles, utilizando **justify-content: space-between**.

Um outro "hack" bem legal do display flex é quando precisamos alinhar os itens, para isto basta utilizarmos a propriedade align-items. Veja o código CSS final abaixo:

```css
header{
    display: flex;
    justify-content: space-between;
}
 
header nav ul {
    display: flex;
    align-items: baseline;
    list-style-type: none;
}
```

Um exemplo bem prático de quando utilizar css grid é na montagem dos grupos de uma página:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--ufDeCIHw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://ishadeed.com/assets/grid-flex/grid-use-1.png)

```html
<div class="wrapper">
  <aside>Sidebar</aside>
  <main>Main</main>
</div>
```

E para posicionar esses grupos basta utilizar o seguinte código:

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 16px;
}

aside {
  align-self: start;
}
```

**DICA:** Se não utilizarmos a propriedade *align-self* para o aside, a altura dele será igual ao do elemento main, não importando o tamanho do conteúdo.

Outro exemplo clássico é quando tempos um grid com cards, para posicionar os elementos podemos escrever algo como código abaixo:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
}
```

Basicamente o código acima define que a coluna será de pelo menos 200px, e se o espaço não for suficiente, ele irá colocar os cards em uma nova linha e o espaço entre cada um desses cards será de 16px.



## Conclusão

Essas duas features do CSS: **Flexbox** e **CSS Grid** facilitam demais o nosso dia a dia, existem muitas outras features interessantes que foram sendo criadas nos últimos anos, mas confesso que estas duas são minhas favoritas(Com certeza devido ao trauma de posicionar as coisas com float).

Como já estão disponíveis faz alguns anos, existem muitos materiais de aprendizado e como um gamer porque não aprender com pequenos desafios que vão evoluindo ? Deixo abaixo para vocês alguns links com mini-games para aprender flexbox e css grid:

* [Flexbox Froggy](https://flexboxfroggy.com/) -  Ajude os sapos a se posicionarem nas vitória-regias.
* [Flexbox Defense](http://www.flexboxdefense.com/) - Gosta de jogos tower defense ? Então posicione suas torres contra os inimigos.
* [Grid Garden](https://cssgridgarden.com/) -  Que tal cuidar de um pequeno jardim e prover recursos para as suas plantas.



Esse último não tem haver com Flexbox e CSS Grid, mas é bem legal para aprender sobre seletores CSS e como estamos falando de jogos, porque não recomendar também:[](https://flukeout.github.io/)

* [CSS Diner](https://flukeout.github.io/) -  Aprenda a selecionar os pratos corretos para o jantar.



Espero que tenham curtido, andei sumido o último mês, mas pretendo voltar a uma periodicidade maior. Até breve. o/
