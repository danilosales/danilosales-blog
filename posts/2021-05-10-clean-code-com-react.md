---
title: Clean Code com React
description: React é uma lib que não define como as coisas devem ser
  estruturadas. É exatamente por isso que é nossa responsabilidade manter nossos
  projetos limpos e fáceis de manter.
date: 2021-05-09 22:38:54
tags:
  - react
  - javascript
  - frontend
category: react
background: "#2DA0C3"
image: assets/img/clean-code-react.png
---
![Photo by Sarah Dorweiler from Unsplash](https://source.unsplash.com/x2Tmfd1-SgA/1600x900 "Photo by Sarah Dorweiler from Unsplash")

Clean Code é mais do que apenas código funcional. Clean Code é manter um código que seja fácil de ler, simples de entender e bem organizado.

Por isto hoje, falaremos sobre algumas das melhores práticas a serem seguidas para melhorar a integridade do seu app em React. Essas regras são amplamente aceitas e usadas pela comunidade, por isto ter esse conhecimento é fundamental.

Ao analisar essas sugestões, é importante lembrar que é exatamente o que são: sugestões. Se você discordar de qualquer um deles, está tudo bem. No entanto, essas são práticas que considero úteis para escrever meu próprio código React.

Tudo será mostrado com código, então aperte o cinto e vamos nessa:





#### 1. Utilize Fragments

Sempre utilize Fragments ao invés de div. Além de manter o seu código limpo ele também deixa seus componentes mais rápidos pois é um nó a menos a ser criado no DOM Virtual do React.

```javascript
//Ruim
return (
  <div>
    <Button />
    <TextInput />
  </div>  
)

//Bom
return (
  <>
    <Button />
    <TextInput />
  </>  
)
```



#### 2. Não defina métodos dentro do render

Não defina uma função dentro da renderização. Tente manter a lógica interna da renderização com o minímo necessário.

```javascript
//Ruim
return (
  <button onClick={() => fazAlgumaCoisa()}> 
    Clique aqui
  </button>  
)

//Bom
const fazAlgumaCoisa = () => console.log('clicou');

return (
  <button onClick={fazAlgumaCoisa}> 
    Clique aqui
  </button>  
)
```



3.