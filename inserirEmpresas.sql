INSERT INTO empresas (nome, cnpj)
VALUES
    ('Bradesco',    08473756000160)
    ('Vale',        86459066000160)
    ('Cielo',       74374650000133)

ALTER TABLE empresas MODIFY cnpj VARCHAR (14);

desc empresas
desc prefeitos

INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);

desc empresas_unidades
