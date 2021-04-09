---
title: Java 16, o que temos de novidades ?
description: A mais recente versão do Java foi lançada dia 21 de março e temos muitas coisas a falar sobre ela
date: 2021-04-08 23:00:25
category: java
background: "#B31917"
thumbnail: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE3MTIwNTEw&ixlib=rb-1.2.1&q=80&w=1600
---

![Notebook com código na tela](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE3MTIwNTEw&ixlib=rb-1.2.1&q=80&w=1600)


A mais recente versão do Java foi lançada dia **21 de março de 2021**. Para esta
versão foram incluídas **17 JEP (**[JDK 16 GA
Release](https://jdk.java.net/16/)**)**. Esta é uma versão de feature release, o
que significa que o suporte oficial dela é de somente 6 meses, sendo assim ela
substitui a JDK 15 lançada em setembro de 2020, essas versões são interessantes
para que possamos avaliar e testar novas funcionalidades da linguagem. Em
setembro teremos o lançamento da versão 17 e esta será uma versão LTS(Long Term
Support).

*Alguns dos novos recursos incluem mudanças no ZGC, suporte à versão 14 do C++
para evolução da JDK e JVM, capacidade elástica do metaspace, novas APIs e
ferramentas.*

*****

1 - [JEP 338 Vector API (Incubadora)](https://openjdk.java.net/jeps/338)

A ideia por trás desta API é fornecer uma forma de realizar cálculos de vetor
que compilam em tempo de execução para instruções de hardware de vetor em CPUs
que suportam esta arquitetura, e assim, alcançar desempenho superior para
cálculos escalares equivalentes, sendo agnóstica ao tipo de arquitetura. Uma das
metas é que mesmo que o código venha a ser executado em uma máquina que não
tenha suporte a vetores na CPU, ela tenha uma degradação de performance de forma
"graciosa" e ainda realize os cálculos necessários, e a aplicação continue
funcionando corretamente.

2 - [JEP 347: Enable C++14 Language Features](https://openjdk.java.net/jeps/347)

É possível agora utilizar os novos recursos da linguagem C ++ 14 no código-fonte
do JDK. Apesar de que no lançamento do JDK 11 ter sido atualizado para suportar
as novas versões do C++, não era possível ainda utilizar as novas features no
Hotspot da JVM.

3 - [JEP 357: Migrate from Mercurial to Git](https://openjdk.java.net/jeps/357)

Pode parecer estranho, mas se tratando do java que está ai há 25 anos, o código
fonte do openjdk ainda era versionado no Mercurial então foi feita a migração do
código para Git. Os maiores benefícios são a redução do tamanho e recursos
disponíveis deste sistema de controle de versão.

4 - [JEP 369: Migrate to GitHub](https://openjdk.java.net/jeps/369)

Todos os repositórios agora se encontram no GitHub, isto trouxe várias vantagens
como o uso das actions do github e outra vantagens desta plataforma, como
definição de alguns workflows antes de um merge ao código fonte.

5 - [JEP 376: ZGC: Concurrent Thread-Stack Processing](https://openjdk.java.net/jeps/376)

O Z Garbage Collector(ZGC) foi projetado para mitigar as pausas de GC e os
problemas de escalabilidade no HotSpot. Para ir além da situação atual, o
processamento por thread, incluindo varredura de pilha, foi alterado para
ocorrer de forma simultânea. Com isto, o custo de latência deve ser
insignificante e o tempo gasto nos pontos seguros do ZGC em máquinas comuns deve
ser inferior a um milissegundo.

6 - [JEP 380: Unix-Domain Socket Channels](https://openjdk.java.net/jeps/380)

Os sockets de domínio Unix são usados ​​para comunicações entre processos no
mesmo host. Eles são semelhantes aos soquetes TCP/IP em muitos aspectos, exceto
que são endereçados por nomes de caminhos do sistema de arquivos ao invés de
endereços IP e números de portas. O objetivo deste novo recurso é oferecer
suporte a todos os recursos dos canais de soquete do domínio Unix que são comuns
nas principais plataformas Unix e Windows. Eles são mais seguros e mais
eficientes do que as conexões de loopback TCP/IP para comunicações locais entre
processos.

7 - [JEP 386:Alpine Linux Port](https://openjdk.java.net/jeps/386)

O Alpine Linux é muito utilizado por containers devido ao tamanho de sua imagem.
Uma imagem Docker usando o Alpine gira em torno de 6 MB, permitir que o Java
seja executado em tais configurações permitirá que Tomcat, Jetty, Spring e
outras estruturas populares funcionem nesses ambientes nativamente. Ao usar
jlink isto irá reduzir o tamanho do runtime do Java, tornando ainda menor criar
uma imagem que execute uma aplicação java.

8 - [JEP 387:Elastic Metaspace](https://openjdk.java.net/jeps/387)

Foi adicionada uma capacidade elástica ao Metaspace da JVM, o que por
consequência trás vantagens como devolver de forma mais eficiente e rápida a
memória que não está sendo utilizada para sistema operacional. Essa abordagem já
foi utilizada em outros lugares como o kernel do Linux e tornará prático alocar
memória em pedaços menores para reduzir a sobrecarga do Class Loader, com isto a
fragmentação de memória também será reduzida. Na prática ele vai dividir a
memória em partes menores para ter uma melhor gestão dos recursos.

9 - [JEP 388:Windows/AArch64 Port](https://openjdk.java.net/jeps/388)

Com o uso se tornando mais constante do uso do Windows em arquiteturas ARM64,
então a idéia por trás é realizar o port do JDK para esta arquitetura. Embora o
porte em si já esteja quase completo, o foco desta proposta envolve a integração
do porte no repositório principal do JDK.

10 - [JEP 389:Foreign Linker API (Incubator)](https://openjdk.java.net/jeps/389)

Essa API entrou em um estágio de incubação no JDK 16. A Foreign linker API
simplificará consideravelmente o processo de link a uma biblioteca nativa. Esta
API pretende substituir a JNI (Java Native Interface) por um modelo de
desenvolvimento Java puro, para oferecer suporte ao C e, ao longo do tempo, ser
flexível o suficiente para acomodar o suporte para outras plataformas, como x86
de 32 bits e funções escritas em linguagens diferentes de C, como C++. O
desempenho deve ser melhor ou comparável ao JNI.

11 - [JEP 390:Warnings for Value-Based Classes](https://openjdk.java.net/jeps/390)

A proposta desta JEP é basicamente adicionar warnings de deprecated aos
construtores das famosas classes wrappers de primitivos, como o Boolean, Integer
e etc. Com o projeto Valhalla grandes melhorias vem sendo adicionadas a
linguagem, para continuar a evolução é necessário ter acesso livre aos valores
em memória para realização de cópia entre os endereços de mémoria.

12 - [JEP 392:Packaging Tool](https://openjdk.java.net/jeps/392)

Ouvimos falar de jpackage no lançamento do JDK14 onde esta JEP entrou na
incubadora, e agora é oficial, portanto jpackage passa a ser uma ferramenta de
produção. Caso não tenha ouvida falar dela ainda, esta ferramenta é capaz de
gerar um arquivo de instalação nativo para Windows (msi ou exe), MacOS (pkg e
dmg) e Linux(deb e rpm), ela encapsula a sua aplicação(jar) junto com o
executável do java, ou seja, não há necessidade de se preocupar em instalar jre
ou copiar os arquivos jar para executar a aplicação. A ferramenta pode ser
chamada diretamente por linha de comando ou programaticamente.

13 - [JEP 393:Foreign-Memory Access API (Third Incubator)](https://openjdk.java.net/jeps/393)

Esta feature foi introduzida no JDK14, e entra pela terceira vez em testes na
JDK16. A idéia por trás desta API é fornecer um meio de acesso seguro a memória
externa fora a heap do Java. Foram feitas alterações, incluindo uma separação
mais clara de funções entre as interfaces MemorySegment e MemoryAddresses. A API
não deve prejudicar a segurança da JVM. O que motiva a proposta é que muitos
programas Java acessam memória externa, como Ignite, Memcached e MapDB.

14 - [JEP 394:Pattern Matching for instanceof](https://openjdk.java.net/jeps/394)

Finalizada e liberada, esta feature vem sendo trabalhada desde a versão 14 e
agora faz parte oficial da linguagem, na prática facilita nos casos onde fazemos
comparações com instanceof para depois realizar o cast para uma variável, agora
na própria declaração já podemos ter a variável definida caso a asserção seja
verdadeira.

15 - [JEP 395:Records](https://openjdk.java.net/jeps/395)

Records deixam de ser uma feature preview, como na na JDK 14 e na JDK 15. Esta
feature foi criada em resposta às reclamações de que o Java ser muito verboso e
ter muito boilerplate. Os objetivos desta feature incluem conceber uma
construção orientada a objetos que expressa uma agregação simples de valores,
ajudando os desenvolvedores a se concentrarem na modelagem de dados imutáveis
​​em vez de comportamento extensível, implementando automaticamente métodos
orientados a dados(gets, setters e etc).

16 - [JEP 396:Strongly Encapsulate JDK Internals by Default](https://openjdk.java.net/jeps/396)

Bom, esta JEP é mais um passo que vem sendo feito afim de encapsular, fechar o
acesso aos componentes internos do JDK, desta forma é possível trabalhar em
mudanças com mais segurança e de forma mais rápida. Esta ação mitiga mudanças
que possam ocorrer na JDK e não prejudique versões anteriores que faziam acesso
a classes internas, prejudicando a migração para uso de novas versões do java.

17 - [JEP 397:Sealed Classes (Second Preview)](https://openjdk.java.net/jeps/397)

No JDK entrou as classes e interfaces seladas como preview, a idéia por trás é
restringir que outras classes e interfaces possam estendê-las ou implementá-las.
Ao declarar uma classe ou interface como selada você consegue especificar quem
de fato pode implementar ou estender o comportamento desta classe. Esta feature
entra novamente como preview nesta versão.

### **Conclusão**

Pois é meus amigos, são muitos recursos para melhorar a perfomance, consumo de
memória e uso da linguagem. Espero que tenham gostado deste resumo do que esta
nova versão trouxe, caso queiram bater papo deixem comentários ou me procurem no
twitter: [@danilosalesinfo](https://twitter.com/danilosalesinfo)


Post originalmente feito no [Medium](https://daniloassales.medium.com/java-16-o-que-temos-de-novidades-183f2d33cb55)


_Foto do usuário [Clément Hélardot](https://unsplash.com/@clemhirdt) no [Unsplash](https://unsplash.com/)_
