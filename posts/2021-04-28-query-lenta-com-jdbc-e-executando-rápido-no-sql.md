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

Devido esta característica é possível termos colunas em uma mesma tabela com suporte a unicode e outras sem este suporte. O driver JDBC do SQL Server por default tem habilitado que toda String enviada como um parâmetro