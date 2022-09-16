### Exercício 1
a) esse comando iria deletar a coluna de salario da tabela Actor;
b) nesse caso estariamos redeclarando a coluna genero por sexo e dizendo que nesse estapoço receberiamos uma string de até 6 dígitos;
c) nessa situação só mudariamos a limitaçao de strings que genero receberia, de 6 dígitos poderia receber até 255;
d) a query seria:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a) a query é:
```
UPDATE Actor
SET birth_date = "1997-06-27"
WHERE id =003;
``` 
b)as queries são:
```
UPDATE Actor
SET nome = "JULIANA PAES"
WHERE nome = "juliana Paes";

UPDATE Actor
SET nome = "Juliana Paes"
WHERE nome = "JULIANA PAES";
```
c) a query é:
```
UPDATE Actor 
SET 
nome = "Lazáro Ramos",
salary = 60000,
birth_date = "1978-11-1",
gender = "male"
WHERE id = "005";
```
d) to usando o beekepper nao apareceu nenhum sinal de erro, só não houve atualização na tabela.

### Exercício 3
a) a query é:
```
DELETE FROM Actor WHERE nome = "Fernanda Montenegro"
```
b) a query é:
```
DELETE FROM Actor WHERE gender="male" AND salary > 1000000;
```

### Exercício 4 
a) a query é:
```
SELECT MAX(salary) FROM Actor;
```
b) a query é:
```
SELECT MIN(salary) FROM Actor WHERE gender="famale";
```
c) a query é:
```
SELECT COUNT(*) FROM Actor WHERE gender = "famale";
```
d) a query é:
```
SELECT SUM(salary) FROM Actor;
```

#### Exercício 5 
a) o comando group by, divide/ separa a tabela de acordo com o comando. Ex: essa ultima query diviu a tabela em dois grupos e retornou a quantiade de pessoas do genero feminino e masculino. 
b) a query é:
```
SELECT id,nome FROM Actor ORDER BY nome DESC;
```
c) a query é:
```
SELECT * FROM Actor ORDER BY salary;
```
d) a query é:
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
e) a query é:
```
SELECT AVG(salary),gender FROM Actor GROUP BY gender;
```

### Exercício 6 
a) a query é: 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b) a query é:
```
ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT;
```
c)as queries são:
```
UPDATE Movie 
SET 
playing_limit_date = "2022-09-02"
WHERE id="002";

UPDATE Movie 
SET 
playing_limit_date = "2000-10-01"
WHERE id="001";
```
d) as queries são:
```
DELETE FROM Movie WHERE id= "002";

UPDATE Movie 
SET 
sinopse = "hahahahahah deletei"
WHERE id="002";
```
*nao aparece nada de erro nesse programa que to usando
