### Exercício 1

a) varchar é para uma variavel de caracteres e o número que fica entre o paranteses é quantidade de caracteres permitido, date é para receber datas.
b)o show satabases mostra as contas gerais e o comando show tables todas as tabelas que temos na base atual.
c)o comando describe mostra a estrutura da tabela e descreve o que e como ela vai receber os dados

### Exercício 2

a)INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200,
"19-08-23",
"female"
);
b) Error Code: 1062 Duplicate entry "002" for key primary
c) Error Code 1136: Column count doesnt match value count at row 1
d) Error Code: 1364 Field "nome" doesnt have a default value
e) Error Code: 1292 Incorrect date value
f)INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
"005",
"Maria Floe",
6500,
"19-06-23",
"female"
);

### Exercício 3

a)SELECT _ from Actor WHERE gender = "famale"
b)SELECT salary from Actor WHERE name = "Tony Ramos"
c) 0 rows returned
d) SELECT _ from Actors WHERE salary>=500000
e)Error Code:1054 Unknow coumn "name" in field list

### Exercício 4
