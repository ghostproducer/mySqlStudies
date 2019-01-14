
-- Atualiza o nome Maranhão na sigla MA
update estados
set nome = 'Maranhão'
where sigla = 'MA'

-- exibe o nome do Maranhão atualizado
select nome from estados where sigla = 'MA'

-- Atualiza o nome e populacao do Paraná
update estados 
set nome = 'Paraná', 
    populacao = 11.32
where sigla = 'PR'

-- Exibe as atualizações do Paraná
select nome,sigla, populacao from estados where sigla = 'PR'