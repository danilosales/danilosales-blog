---
thumbnail: assets/img/query-lenta.png
title: Query lenta no JPA/Hibernate, e executando rápido no SQL?
description: "Se sua query é rapida ao executar o SQL diretamente e é lenta
  através do JDBC ou JPA/Hibernate, isto pode ser somente configuração. "
date: 2021-04-27 10:13:00
tags:
  - java
  - hibernate
  - sqlserver
  - oracle
  - '"query lenta"'
  - jdbc
category: java
background: "#B31917"
image: assets/img/query-lenta.png
---
Opa, fala jovem, tudo certo ?

Hoje eu resolvi trazer uma dica de um problema que já presenciei algumas vezes em minha carreira, onde executava uma query diretamente e tem uma performance boa e quando era executada através do JPA/Hibernate apresenta uma lentidão. A possível causa pode ser o suporte a unicode, irei abordar o tema para alguns banco de dados:

### **SQL Server**

Antes de falarmos do problema em si, é importante primeiro entendermos alguns coisas antes. No SQL Server temos os tipos **VARCHAR**, **CHAR**, **NVARCHAR** e **NCHAR**.

**NCHAR** e **NVARCHAR** podem armazenar caracteres Unicode.\
***CHAR*** e ***VARCHAR*** *não* conseguem armazenar caracteres Unicode.

Devido esta característica é possível termos colunas em uma mesma tabela com suporte a unicode e outras sem este suporte. O driver JDBC do SQL Server por default tem habilitado que toda String enviada como um parâmetro está em unicode, sendo assim ao realizar um where de uma coluna varchar é realizada a conversão de cada uma das linhas das linhas da tabela para unicode.

Para que fique mais fácil de entender vamos ao exemplo:

```sql
-- Criação da tabela
CREATE TABLE Livros {
  id BIGINT NOT NULL,
  titulo VARCHAR(255),
  CONSTRAINT pk_livros PRIMARY KEY(id)
};

-- Criação de indice
CREATE INDEX IDX_Livros_Titulo ON Livros(titulo);

-- Popular a tabela com 200 registros diferentes
DECLARE @count INT;
SET @count = 1;
    
WHILE @count<= 200
BEGIN
   INSERT INTO Livros VALUES('Livro-'+CAST(@count as varchar))
   SET @count = @count + 1;
END;
```

O código acima é auto-explicativo, basicamente é criado uma tabela chamado livros e um índice para a coluna titulo, em seguida essa tabela é preenchida com 200 registros diferentes na coluna titulo.

Com base nisso o seguinte código será executado:

```java
try {
  // Ativa as estatiticas do SQL Server
  var statement = conn.prepareStatement("SET STATISTICS IO, TIME, PROFILE ON");
  statement.execute();

  //Realiza o select na tabela buscando  por Livro-50
  statement = conn.prepareStatement("SELECT id, titulo FROM Livros WHERE titulo = ? ");
  statement.setString(1, "Livro-50");

  ResultSet resultSet = statement.executeQuery();

  while(resultSet.next()) {
    String executionPlanLines = resultSet.getString(1);
    LOGGER.info("Plano de execução: {}{}",
      System.lineSeparator(),
      executionPlanLines
    );
  }
} catch (SQLException e ) {
  LOGGER.error(e.getMessage(), e);
}
```

Se olharmos o resultado do plano de execução podemos ver que é realizado um **Index Scan**  ao invés de um **Index Seek**, ou seja, o índice foi completamente ignorado.

O índice não foi utilizado porque como a coluna de titulo é do tipo varchar e como falado anteriormente toda String é por default é enviada como unicode ele acaba por realizar uma conversão de varchar para nvarchar.

A solução para isto é bem simples, basta adicionarmos o parâmetro **sendStringParametersAsUnicode=false**  na URL de conexão ficando assim:

***`jdbc:sqlserver://localhost:1433;databaseName=teste;sendStringParametersAsUnicode=false;`***

Com isto ao executar código acima novamente é utilizado o **Index Seek**. A instrução acima diz que os parâmetros em String não devem ser interpretados como unicode. 

***Certo Danilo, isso resolve meu problema em praticamente todas as buscas que faço no sistema, mas e se eu tiver uma coluna que deve ser do tipo NVARCHAR para armazenar um emoji por exemplo, como eu faço ?*** 

Bom neste caso é simples caso usemos JDBC diretamente temos dois métodos auxiliares **setNString** e **getNString** para manipular dados unicode, e no caso de usar JPA/Hibernate, basta adicionar a anotação **@Nationalized**

```java
@Entity(name = "Livros")
public class Livros {
 
    @Id
    @Column(name = "id")
    private Long id;
 
    @Column(name = "titulo")
    @Nationalized
    private String titulo;
     
}
```



### **Oracle**

No caso do banco de dados Oracle, também temos situação parecida com o do SQL Server, é possível definir colunas em uma mesma tabela que podem ser unicode(**NCHAR, NVARCHAR2, NCLOB**).

Ao contrário do SQL Server, por default todo parâmetro é enviado como uma String comum, então é bem raro termos este tipo de problema no Oracle.

No caso do Oracle não podemos utilizar o **setNString** devemos passar um parâmetro da seguinte forma:

`pstmt.setFormOfUse(1, OraclePreparedStatement.FORM_CHAR);
pstmt.setString(1, "Livro-50");  `

Se você utilizar JPA/Hibernate basta adicionar a anotação **@Nationalized** como mostrado acima.

Mas se suas colunas forem todas do tipo **N,** podemos ter o mesmo problema de lentidão, pois será necessário realizar o cast para o tipo correto.

No caso do Oracle podemos passar a seguinte variável **oracle.jdbc.defaultNChar=true** ao executar uma aplicação java que usa JDBC diretamente

`java -Doracle.jdbc.defaultNChar=true myApplication`

Se você utiliza hibernate, basta adicionar a seguinte propriedade para indicar que todo parâmetro é do tipo unicode:

**hibernate.connection.defaultNChar=true**



### PostgreSQL e MySQL

No caso destes dois bancos de dados não temos colunas com suporte a unicode e sem suporte em uma mesma tabela, somente a nível de tabela ou banco de dados, então não temos problema de conversão ao realizar um WHERE em uma tabela. Estes dois banco de dados utilizam a codificação de UTF-8 para fornecer suporte ao unicode.

Com isto basta definir na criação da tabela ou banco de dados para utilizar UTF-8.

```sql
-- Exemplos em MySQL
CREATE DATABASE 'teste' CHARACTER SET 'utf8';

CREATE TABLE  `Livros` (
    [...]
) DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
```



### Conclusão

Neste artigo abordei os alguns banco de dados quando se trata de como os parâmetros são interpretados, é importante sempre nos atentarmos e olharmos a documentação destes bancos para entender como o driver jdbc funciona para cada um deles.

É isso pessoal, espero que este conteúdo seja útil para você, um abraço e até a próxima.