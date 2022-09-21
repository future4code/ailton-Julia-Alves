### Exercício 1 
a) a chave estrangeira ou melhor dizendo foreign key é uma forma de relacionar/referenciar uma tabela com outra, de forma que essa chave estrangeira deve se referenciar sempre a uma primary key de outra tabela;
b) a query de criação foi a exemplificada na questão, a query de inserção é:
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "001",
  "Melhor filme de todos os tempos!!",
  10,
  "004");
```
c) vai dar erro "Cannot add or update a child row: a foreign key constraint fails (`ailton-julia-alves`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))". Isso porque necessáriamente precisa de uma primary key correspondente, a chave estrangeira nesse caso serve também como uma proteção, não podemos criar uma avaliação, para um filme não existente. 
d) a query é:
```
ALTER TABLE Movie
  DROP COLUMN avaliacao;
```
e) deu o erro "Cannot delete or update a parent row: a foreign key constraint fails (`ailton-julia-alves`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))". Isso porque para deletar um elemento que foi usado na criação de outra tabela, precisamos deletar todas as referências que ele tem nas outras tabelas.

### Exercício 2
a) estamos criando uma tabela de junção, que é uma tabela intermediaria pois tanto os atores podem se relacionar com vários filmes, assim como em um filme pode ter vários atores. Essa em especifico diz que o movie_id vai ser igual, ou seja, se referenciar a id da tabela movie, assim como o actor_id vai ser igual a id da tabela actor.
b) a query é:
```
INSERT INTO MovieCast VALUES
("001","003"),("003","003"),("001","004"),
("004","004"),("004","005"),("003","005");
```
c)o erro foi "Cannot add or update a child row: a foreign key constraint fails (`ailton-julia-alves`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))". Isso ocorre pois não tem como criar uma chave estrangeira sem primary key existente;
d) Assim como visto anteriormente para apagar algum item que possua referência temos que apagar esta primeiro.

### Exercício 3
a) o operador on é a condição do join ou teriamos uma tabela com todas relações possiveis entre as duas tabelas;
b) a query é: 
```
SELECT nome, Movie.id, rate
FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```