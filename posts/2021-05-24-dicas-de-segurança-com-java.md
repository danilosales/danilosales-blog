---
title: Dicas de segurança com Java
description: “Segurança”, esta palavra tem sido muito dita nos últimos anos.
  Qualquer um pode codificar, mas se nosso código não for confiável o
  suficiente, ele não poderá ser usado por muito tempo.
date: 2021-05-24 24:08:39
tags:
  - java
  - security
  - segurança
category: java
background: "#B31917"
image: assets/img/dicas-segurança-em-java.png
---
![Photo by Clint Patterson from Unsplash](https://source.unsplash.com/dYEuFB8KQJk/1600x900 "Photo by Clint Patterson from Unsplash")

A segurança é um dos aspectos mais complexos, amplos e importantes do desenvolvimento de software. A segurança do software também é freqüentemente negligenciada ou simplificada demais para apenas alguns pequenos ajustes no final do ciclo de desenvolvimento.

Para sua informação, ferramentas de segurança tanto de ataque quanto de defesa, são aprimoradas por empresas, grupos e indivíduos, então é realmente necessário entender que existe uma indústria inteira que busca vulnerabilidades de segurança todos os dias e não importa de que lado você esteja, este jogo está longe de terminar.

Embora todos tenhamos o objetivo de escrever um bom código, a segurança nem sempre faz parte da mentalidade de um desenvolvedor. No entanto, prevenir problemas de segurança deve ser tão importante quanto tornar seu aplicativo executável, escalável e sustentável. 

A boa notícia é que a plataforma Java conta com muitos recursos de segurança. O pacote Java Security passou por intensos testes e é atualizado com frequência para novas vulnerabilidades de segurança. A API de segurança Java EE mais recente, aborda vulnerabilidades em arquiteturas de nuvem e microsserviços. 

Peque um café e aproveite a leitura abaixo com algumas dicas que irão lhe ajudar a desenvolver uma aplicação mais segura.

**ATENÇÃO**

Por favor, **NÃO** ache que as dicas a seguir irão proteger totalmente o seu projeto. Venha com a mente aberta para que isso o faça pensar com mais segurança. 

### 1. SQL Injection

Injeção de código está no topo da lista da OWASP como uma das vulnerabilidades mais exploradas e expostas na web. Sempre devemos "sanitizar" as entradas externas que vêm através de parâmetros antes de utilizar em nossas queries. O código abaixo mostra um exemplo de como escrever uma query com JDBC de forma insegura:

```java
public void searchUser(String name) {
  String query = "SELECT * FROM USERS WHERE lastname = " + name;
  Statement statement = connection.createStatement();
  ResultSet result = statement.executeQuery(query);
}
```

Se o parâmetro neste exemplo for algo como **''OR 1 = 1,** o resultado conterá todos os itens da tabela. Isso pode ser ainda mais problemático se o banco de dados suportar múltiplas consultas e o parâmetro for **''; UPDATE USERS SET lastname = ''**. 

Para evitar esse risco de segurança no Java, devemos parametrizar as consultas usando uma Prepared Statement. Fazendo desta forma o Java faz o escape dos valores não sendo possível inserir código malicioso como parâmetro.

```java
public void searchUser(String name) {
  String query = "SELECT * FROM USERS WHERE lastname = ?";
  PreparedStatement statement = connection.prepareStatement(query);
  statement.setString(1, name);
  ResultSet result = statement.executeQuery(query);
}
```

### 2. XSS Injection

Cross-site scripting (XSS) é um problema bem conhecido e utilizado principalmente em aplicativos JavaScript. Apesar de ser conhecido e usado no javascript não quer dizer que nossa aplicação Java está imune a isso. XSS nada mais é do que uma injeção de código JavaScript que é executado remotamente. A regra #0 para prevenir XSS, de acordo com o OWASP, é “Nunca insira dados não confiáveis, exceto em locais permitidos”. 

A solução básica para este risco de segurança em Java é "sanitizar" a entrada antes de usá-lo e salvar em nossas bases. Existem diversas libs que realizam este tipo de trabalho tanto para validar na entrada como na saída para exibir em tela. A própria OWASP fornece uma lib em java para isto, como pode ser visto [aqui](https://dzone.com/articles/cross-site-scripting-xss-attack-remediation)

### 3.  XXE Injection

Apesar de hoje em dia utilizarmos bastante JSON em nossas aplicações ainda temos cenários que utilizamos XML, e para os casos onde temos a XML eXternal Entity (XXE) habilitado, é possível criar um XML malicioso, conforme visto a seguir, e ler o conteúdo de um arquivo em nosso servidor e é uma vulnerabilidade de segurança Java que precisamos prevenir. As bibliotecas Java XML são particularmente vulneráveis à injeção XXE porque a maioria dos analisadores XML tem entidades externas habilitadas por padrão.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE test [
       <!ENTITY xxe SYSTEM "file:///etc/passwd">]>
<song>
   <artist>&xxe;</artist>
   <title>Bohemian Rhapsody</title>
   <album>A Night at the Opera</album>
</song>
```

Se olhar o código abaixo, fazemos uma implementação "padrão" do DefaultHandler e do SAX, que analisa o arquivo XML e revela o no final acaba imprimindo o conteúdo arquivo passwd. O caso abaixo não se restringe somente no uso SAX da API do Java, outros analisadores, como o DocumentBuilder e DOM4J, têm o mesmo comportamento por padrão.

```java
SAXParserFactory factory = SAXParserFactory.newInstance();
SAXParser saxParser = factory.newSAXParser();

DefaultHandler handler = new DefaultHandler() {

    public void startElement(String uri, String localName,String qName,Attributes attributes) throws SAXException {
        System.out.println(qName);
    }

    public void characters(char ch[], int start, int length) throws SAXException {
        System.out.println(new String(ch, start, length));
    }
};
```

Para evitar expor o conteúdo com um ataque deste tipo podemos desativar este comportamento para que não permita entidades externas no XML.

```java
SAXParserFactory factory = SAXParserFactory.newInstance();
SAXParser saxParser = factory.newSAXParser();

factory.setFeature("https://xml.org/sax/features/external-general-entities", false);
saxParser.getXMLReader().setFeature("https://xml.org/sax/features/external-general-entities", false);
factory.setFeature("https://apache.org/xml/features/disallow-doctype-decl", true); 
```

### 4. Comunicação não criptografada

É possível interceptar o tráfego de rede e obter os dados que são trafegados. Sempre se comunique com sistemas externos através de SSL e verifique o certificado fornecido pelo servidor. Freqüentemente, os desenvolvedores Java substituem a função setDefaultHostNameVerifier por uma versão que permite todos os hosts.

```java
// Comunicação insegura
ServerSocket soc = new ServerSocket(1234);

// Um exemplo seguro usando SSL
ServerSocket soc = SSLServerSocketFactory.getDefault().createServerSocket(1234);

// Exemplo ao consumir uma url com https
HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
    @Override
    public boolean verify(String hostname, SSLSession session) {
      return true; // Não faça isto, valide o hostname
    }
  };
)
```

### 5. Não revele a implementação por meio de mensagens de erro

As mensagens de erro podem ser uma fonte fértil de informações para os invasores. Os stacktraces especialmente, podem revelar informações sobre a tecnologia que você está usando e como a está usando. Evite mostrar o stacktrace para os usuários finais. 

Os alertas de falha de login também se enquadram nesta categoria. Substitua mensagens como de erro como "Usuário não existe" ou "Senha incorreta" por "Falha no login" ou "Usuário/senha inválida, pois desta forma você evita de fornecer informação de que um determinado usuário existe no seu sistema. 

#### 6. Cuidado com dados confidenciais

Expor dados confidenciais, como dados pessoais ou números de cartão de crédito de seu cliente, podem ser extremamente prejudiciais. Mas mesmo outros dados que a primeira vista possa parecer inofensivos podem trazer problemas. Por exemplo, a exposição de ids em seu sistema é uma vulnerabilidade pois esse identificador pode ser usado em outra chamada para recuperar dados adicionais daquela entidade. Em primeiro lugar, você precisa examinar atentamente o design de sua aplicação e determinar se realmente precisa daqueles dados(LGPD chegou para isso).

Uma maneira fácil de evitar que esses dados acabem indo parar nos seus logs é limpar os métodos **toString()** de suas entidades de domínio. Dessa forma, você não irá expor informações por acidente. Se você usa o  **Lombok** para gerar seu método **toString()**, tente usar **@ToString.Exclude** para evitar que um campo faça parte da saída do toString(). 

Além disso, tenha muito cuidado ao expor dados para o mundo externo. Por exemplo: se temos um endpoint em um sistema que mostra todos os nomes de usuário, não há necessidade de mostrar o id. Esse id pode ser usado para conectar outras informações mais confidenciais ao usuário, usando outros endpoints. Se você usa Jackson para serializar e desserializar POJOs para JSON, tente usar **@JsonIgnore** e **@JsonIgnoreProperties** para evitar que essas propriedades sejam serializadas ou desserializadas.

### 7. Habilite o Java Security Manager

Por padrão, um processo Java não tem restrições. Ele pode acessar todos os tipos de recursos, como o  sistema de arquivos, rede, processos eternos e muito mais. Existe, no entanto, um mecanismo que controla todas essas permissões, o Java Security Manager. Por padrão, o Java Security Manager não está ativo e a JVM tem poder ilimitado sobre a máquina. Embora provavelmente não queiramos que a JVM acesse certas partes do sistema, ela tem acesso. Mais importante, Java fornece APIs que podem fazer coisas desagradáveis ​​e inesperadas. 

Acho que o mais assustador é a Attach API. Com esta API, você se conecta a outra JVM em execução. Por exemplo, é muito fácil alterar o byte pelo bytecode de uma JVM em execução, se você tiver acesso à máquina. Posteriormente pretendo trazer um post sobre esse assunto, um caso inocente que muitos devs já utilizaram esta API foi para o famoso debug remoto. 

Ativar o Java Security Manager é fácil. Basta adicionar o seguinte parâmetro abaixo ao inicializar a aplicação que você ativa o gerenciador de segurança com a política padrão 

 `java -Djava.security.manager`

É possível definir uma política customizada para a JVM, Para mais informações sobre permissões do JDK e como escrever arquivos de política, verifique a documentação oficial do Java neste [link](https://docs.oracle.com/en/java/javase/11/security/permissions-jdk1.html#GUID-1E8E213A-D7F2-49F1-A2F0-EFB3397A8C95).

### 8. Analise suas dependências em busca de vulnerabilidades conhecidas

Há uma boa chance de você não saber quantas dependências seu aplicativo usa. Também é extremamente provável que você não saiba quantas dependências transitivas seu aplicativo usa. 

Os invasores têm como alvo cada vez mais as dependências de código aberto, pois sua reutilização fornece muitas vítimas a um invasor mal-intencionado. É importante garantir que não haja vulnerabilidades de segurança conhecidas em toda a sua árvore de dependência de seu aplicativo.

Em 2019 houve a descoberta de uma falha de segurança no Jackson ao desserializar um JSON, conforme pode ser visto no seguinte [post](https://snyk.io/blog/jackson-deserialization-vulnerability/). Por isto é bom sempre ficarmos atentos e atualizarmos nossas dependências sempre que possível.

### Conclusão

A segurança no Java depende mais de medidas tomadas pelo desenvolvedor para evitar que um usuário mal-intencionado faça algo com sua aplicação. Ao escrever um código Java forte e seguro, um desenvolvedor evita que a confidencialidade, integridade e disponibilidade do aplicativo e dos dados sejam comprometidos.

Se você atualizar o Java corretamente, usa apenas os módulos necessários e certifica-se de que seus aplicativos sejam construídos com uma mentalidade de segurança, você consegue minimizar o risco.

Obrigado pelo tempo dedicado até aqui e até a próxima.



**Referências:**

\- https://snyk.io/blog/10-java-security-best-practices/