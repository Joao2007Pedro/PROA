create database db_clinica_odontologica;
use db_clinica_odontologica;

create table tb_dentista(
id_dentista int auto_increment primary key,
nome_dentista varchar (100) not null,
cro_dentista varchar (10) not null,
telefone_dentista char (14) not null,
endereco_dentista varchar (255) not null,
especialidade_dentista varchar (50) not null,
estado_civil_dentista enum ('solteiro(a)','casado(a)','viuvo(a)','divorciado(a)') not null,
data_admissao_dentista date not null,
data_nascimento_dentista date not null,
email_dentista varchar (100) not null
);

select * from tb_dentista;

drop table tb_dentista;

create table tb_paciente(
id_paciente int auto_increment primary key,
nome_paciente varchar (255) not null,
cpf_paciente char (11) not null,
telefone_paciente char(14) not null,
endereco_paciente varchar (100) not null,
genero_paciente enum ('f','m','outros') not null,
data_nasc_paciente date not null,
email_paciente varchar(80) not null,
convenio_paciente varchar (100) not null,
obs_paciente varchar (100),
data_cadastro_paciente date not null
);

describe tb_paciente;
drop table tb_paciente;

select * from tb_paciente;

create table tb_consulta(
id_consulta int auto_increment primary key,
data_consulta datetime not null,
procedimento varchar (100) not null,
id_dentista int,
id_paciente int
);

describe tb_consulta;
select * from tb_consulta;

create table tb_sala(
id_sala int auto_increment primary key,
numero_sala int not null,
tipo_sala varchar (50) not null
);

select * from tb_sala;

INSERT INTO tb_dentista (nome_dentista, cro_dentista, telefone_dentista, endereco_dentista, 
especialidade_dentista, estado_civil_dentista, data_admissao_dentista, data_nascimento_dentista, email_dentista) 
VALUES
	('Gilberto Santos', '55555', '(11)969966296', 'Rua dos Pedreiros, 110', 'Cirurgião', 'casado(a)', '2020-06-25', '1999-02-15', 'drgilbertosantos@gmail.com'),
    ('Ana Julia Almeida', '44444', '(11)969966287', 'Rua das Palmeiras', 'Ortodontia', 'viuvo(a)', '2021-06-25', '2004-02-15', 'draanajulialameida@gmail.com'),
    ('Melissa Santos', '33333', '(11)969966756', 'Avenida São João, 2202', 'Clinico Geral', 'solteiro(a)', '2017-09-20', '1989-02-15', 'dramelissasantos@gmail.com'),
	('Guilherme Alves', '22222', '(11)969966542', 'Travessa Rodrigues', 'Implatodontia', 'casado(a)', '2019-05-25', '2006-03-30', 'drguilhermealves@gmail.com');
	

INSERT INTO tb_paciente (nome_paciente, cpf_paciente, telefone_paciente, endereco_paciente, 
genero_paciente, data_nasc_paciente, email_paciente, convenio_paciente, obs_paciente, data_cadastro_paciente) VALUES
	('Kaue Rodrigues', '41155076006', '(11)966521127', 'Rua Alberto Soares, 28B', 'm', '2007-02-28', 'kauerodrigues@gmail.com', 'Amil Saude', 'Intolerante a lactose', '2026-05-21'),
    ('Joao Pedro', '41155079823', '(11)969564712', 'Travessa Rodolfo Alves, 330', 'm', '2007-07-30', 'joaopedro@gmail.com', 'Amil Saude', NULL, '2026-06-03'),
    ('Rafaella Cintra', '29638712204', '(11)951561792', 'Rua Pires da Motta, 120', 'f', '2005-08-12', 'rafaelacintra@gmail.com', 'Intermedica Saude', 'Intolerante a Dipirona', '2024-10-10'),
    ('Fabricio Carvalho', '32100450076', '(11)969762345', 'Rua dos Fortes, 88', 'm', '1996-05-30', 'fabriciocarvalho@gmail.com', 'Amil Saude', NULL, '2026-06-03'),
    ('Mariana Souza', '51877432011', '(11)988774411', 'Rua Bela Vista, 450', 'f', '1999-11-22', 'marianasouza@gmail.com', 'SulAmerica', 'Alergia a Penicilina', '2026-03-12'),
    ('Carlos Henrique', '60044512098', '(11)977665544', 'Avenida Paulista, 900', 'm', '1988-04-15', 'carlosh@gmail.com', 'Bradesco Saude', NULL, '2026-01-18'),
    ('Fernanda Lima', '45566789012', '(11)966334455', 'Rua das Flores, 77', 'f', '2001-09-03', 'fernandalima@gmail.com', 'NotreDame Intermedica', 'Diabetica', '2025-12-01'),
    ('Ricardo Alves', '71233456001', '(11)955667788', 'Rua Sao Jorge, 310', 'm', '1993-06-19', 'ricardoalves@gmail.com', 'Unimed', NULL, '2026-02-27'),
    ('Juliana Castro', '81122334055', '(11)944556677', 'Travessa das Palmeiras, 51', 'f', '1997-12-10', 'julianacastro@gmail.com', 'Amil Saude', 'Hipertensa', '2025-08-14'),
    ('Eduardo Martins', '92345678044', '(11)933221144', 'Rua Monte Alegre, 205', 'm', '1985-01-25', 'eduardom@gmail.com', 'Porto Seguro Saude', NULL, '2026-04-09');
    
INSERT INTO tb_sala (numero_sala, tipo_sala) VALUES
    (101, 'Consultorio Odontologico'),
    (102, 'Sala de Radiografia');


INSERT INTO tb_consulta (data_consulta, procedimento, id_dentista, id_paciente
) VALUES
    ('2026-06-10 09:00:00', 'Limpeza Dental', 1, 1),
    ('2026-06-10 10:30:00', 'Canal', 2, 2),
    ('2026-06-11 08:00:00', 'Extracao de Siso', 1, 3),
    ('2026-06-11 14:00:00', 'Clareamento Dental', 3, 4),
    ('2026-06-12 11:15:00', 'Avaliacao Ortodontica', 2, 5),
    ('2026-06-12 15:30:00', 'Implante Dentario', 1, 6),
    ('2026-06-13 09:45:00', 'Troca de Restauracao', 3, 7),
    ('2026-06-13 13:20:00', 'Aplicacao de Fluor', 2, 8),
    ('2026-06-14 16:00:00', 'Manutencao de Aparelho', 1, 9),
    ('2026-06-15 10:00:00', 'Consulta de Rotina', 3, 10);

SELECT * FROM tb_paciente;
SELECT * FROM tb_dentista;
SELECT * FROM tb_sala;
SELECT * FROM tb_consulta;

Alter table tb_consulta
add constraint fk_id_paciente foreign key (id_paciente) references tb_paciente (id_paciente);
Alter table tb_consulta
add constraint fk_id_dentista foreign key (id_dentista) references tb_dentista (id_dentista);

SELECT 
    c.id_consulta,
    c.data_consulta,
    c.procedimento,
    p.nome_paciente,
    p.telefone_paciente,
    p.convenio_paciente
FROM 
    tb_consulta AS c
INNER JOIN 
    tb_paciente AS p ON c.id_paciente = p.id_paciente; 
	











