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

a) select = buscar; from= na tabela; where = tipo condicional; like= parecido/como; between= entre; not= negação
b) SELECT _ FROM Actor WHERE (nome NOT LIKE "A%") AND salary > 350000;
c) SELECT _ FROM Actor WHERE nome LIKE "%G%" OR nome LIKE "%g%";
d) SELECT \* FROM Actor WHERE (nome LIKE "%A%" OR nome LIKE "%a%" OR nome LIKE "%G%" oR nome LIKE "%g%") AND (salary BETWEEN 350000 AND 900000)

### Exercício 5

a)CREATE TABLE Movie(
id varchar(100) primary key,
nome varchar(100) not null unique,
sinopse text not null,
data_lancamento date not null,
avaliacao int not null
);
b) INSERT INTO Movie VALUES ("001","Se eu fosse você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-01-06",7);
c) INSERT INTO Movie VALUES ("002","Doce de mãe","Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela","2012-12-27",10);
d)INSERT INTO Movie VALUES ("003","Dona Flor e seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02",8);
e)INSERT INTO Movie VALUES ("004","Cidade de Deus","Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
"2002-08-30",10);

### Exercício 6

a)SELECT id,nome,avaliacao from Movie WHERE id=003;
b)SELECT \* FROM Movie WHERE nome="Dona Flor e seus dois Maridos";
c) SELECT id,nome,sinopse from Movie where avaliacao>=7;

### Exercício 7

a) SELECT _ FROM Movie WHERE nome LIKE "%vida%";
b)SELECT _ FROM Movie WHERE nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";
c)SELECT _ FROM Movie WHERE data_lancamento < "2020-05-04";
d)SELECT _ FROM Movie WHERE data_lancamento < "2020-05-04" AND (nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%") AND avaliacao > 7;
