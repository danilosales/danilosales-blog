---
title: Flexbox e CSS Grid - Quando utilizar cada um ?
description: Decidir entre CSS grid e Flexbox pode ser um pouco difícil (às
  vezes), especialmente se você é novo em CSS. Esse artigo pode te ajudar !!
date: 2021-06-07 21:06:04
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

Se a gente imaginar uma casa:

* **CSS Grid**: Seria responsável pela estrutura dos cômodos
* **Flexbox**: Seria responsável pela disposição dos móveis dentro desses cômodos

**Flexbox** é unidimensional, ou seja, linha OU coluna e não ambos, então é perfeito para o desenvolvimento interno de COMPONENTES.

**CSS grid** é um módulo multi-dimensional de layout, o que significa que ele possui colunas e linhas, perfeito para layouts.