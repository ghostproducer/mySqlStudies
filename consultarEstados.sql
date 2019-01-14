
-- Seleciona todo o banco de dados
select * from estados;


-- Seleciona sigla e nome do estado mudando a label titulo da coluna
-- select sigla as 'Sigla do Estado', nome as 'Nome do Estado' from estados
-- where regiao = 'Norte'


-- seleciona nome, regiao e populacao, filtrando populacao maior que 10 e ordena de maneira decrescente
-- select nome, regiao, populacao from estados
-- WHERE populacao >= 10
-- order by populacao desc