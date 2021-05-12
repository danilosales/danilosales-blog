---
title: Clean Code com React
description: React é uma lib que não define como as coisas devem ser
  estruturadas. É exatamente por isso que é nossa responsabilidade manter nossos
  projetos limpos e fáceis de manter.
date: 2021-05-11 23:47:19
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

#### 3. Renderização condicional

Se você precisa renderizar algo quando somente se essa condição for verdadeira, não utilize o operador  ternário, utilize o operador **&&** para isso.

```javascript
//Ruim
return (
  <div>
    {showConditionalText ? <p>Mostra se a condição for verdadeira!</p> : null}
  </div>
)

//Bom
return (
  <div>
    {showConditionalText && <p>Mostra se a condição for verdadeira!</p>}
  </div>
)
```

Continuando neste quesito de renderização condicional temos um outro ponto que é quando de fato temos uma condicional onde devemos exibir algo quando a condição for verdadeira e outra diferente quando for falsa, pensando neste cenário devemos fazer uso do operador ternário como visto abaixo:

```javascript
//Ruim
return (
  <div>
    {showConditionalText && <p>Mostra se a condição for verdadeira!</p>}
    {!showConditionalText && <p>Mostra se a condição for falsa!</p>}
  </div>
)

//Bom
return (
  <div>
    {showConditionalText ? (
      <p>Mostra se a condição for verdadeira!</p>
    ) : (
      <p>Mostra se a condição for falsa!</p>
    )}
  </div>
)
```

E no caso de termos mais de uma condicional ? Nesse caso se liga na dica abaixo:



#### 4. Object Literals

Fazer uso de Object Literals nos ajuda muito para deixar o nosso código mais legível. Digamos que você queira mostrar três tipos de usuários com base em suas funções. De modo tradicional teríamos que usar clássico if/else ou switch, mas usado Object Literals seu código fica muito mais limpo, veja abaixo:

```javascript
//Ruim
const {role} = user

switch(role){
  case ADMIN:
    return <AdminUser />
  case MANAGER:
    return <ManagerUser />
  case USER:
    return <NormalUser />
}

//Bom
const {role} = user

const components = {
  ADMIN: AdminUser,
  MANAGER: ManagerUser,
  USER: NormalUser
};

const Component = components[role];

return <Componenent />;
```



#### 5. Utilize Object Destructuring

Use a desestruturação de objetos a seu favor. Digamos que você precise mostrar os detalhes de um usuário. 

```javascript
//Ruim
return (
  <>
    <div> {user.name} </div>
    <div> {user.age} </div>
    <div> {user.profession} </div>
  </>  
)

//Bom
const { name, age, profession } = user;

return (
  <>
    <div> {name} </div>
    <div> {age} </div>
    <div> {profession} </div>
  </>  
)
```



#### 6. Utilize Template Literals

Use Template Literals para construir strings grandes. Evite usar concatenação de string. É bom e limpo.

```javascript
//Ruim
const userDetails = user.name + " é um " + user.profession

//Bom
const userDetails = `${user.name} é um ${user.proffession}`
```



#### 7. Organize seus imports

Sempre tente importar as coisas em uma determinada ordem. Isso melhora a legibilidade do código. A regra é a seguinte:

* Built-in
* Externos
* Internos

```javascript
//Ruim
import React from 'react';
import ErrorImg from '../../assets/images/error.png';
import { Home } from '@styled-icons/boxicons-solid/Home'
import colors from '../../styles/colors';
import { PropTypes } from 'prop-types';


//Bom
import React from 'react';

import { PropTypes } from 'prop-types';
import { Home } from '@styled-icons/boxicons-solid/Home'

import ErrorImg from '../../assets/images/error.png';
import colors from '../../styles/colors';
```



#### 8. Definir um estado que depende do estado anterior

Sempre defina o estado como uma função se o novo estado depender do estado anterior. As atualizações de estado no React são feitas em batch, e podem não gravar suas mudanças dessa forma podendo levar a resultados inesperados.

```javascript
//Ruim
const [isDisabled, setIsDisabled] = useState(false)
const toggleButton = () => setIsDisabled(!isDisabled)


//Correto
const [isDisabled, setIsDisabled] = useState(false)
const toggleButton = () => setIsDisabled(isDisabled => !isDisabled)
```



### Conclusão

Como falado acima, isso são sugestões que na minha humilde opinião tornam o seu código mais legivel, para concluir as dicas a seguir não são específicas do React, mas sim boas práticas para escrever código limpo em JavaScript (ou qualquer linguagem de programação, nesse caso).

* Extraia lógicas complexa em pequenas funções com nomes claros do que elas fazem.
* Extraia números mágicos em constantes.
* Use variáveis com nomes claros do que elas representam.



É isso pessoal, um abraço e até o próximo post.