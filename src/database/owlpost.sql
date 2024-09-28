-- precisa rodar toda vez que abrir o banco
-- show variables like 'max_allowed_packet';
-- set global max_allowed_packet = 41820160;

drop database owlpost;

create database owlpost;

use owlpost;

-- nome: não é unico, porque o email vai ser usado para diferenciar 
-- os usuários com nomes iguais.
-- 
-- fotoPerfil: uma imagem guardada em formato binário. 
-- fotoFormato: o formato/extensão original da imagem.
create table Usuarios (
    id int primary key auto_increment,
    nome varchar(30) not null,
    email varchar(255) not null unique,
    senha text not null,
    fotoPerfil mediumblob,
    fotoFormato varchar(20),
    admin bool default false
);

-- 'ultimaAtividade' combinado com o 'logado' pode ser usado para
-- saber a quanto tempo o usuário está logado/deslogado.
create table Logins (
	id int primary key auto_increment,
	idUsuario int not null unique,
	logado bool not null,
	ultimaAtividade timestamp default current_timestamp,
	
	foreign key(idUsuario) references Usuarios(id) on delete cascade
);

create table Amigos (
	idUsuario int not null,
	idAmigo int not null,
	
	status enum('pedido', 'aceito', 'bloqueado') default 'pedido',
	dataCriacao timestamp default current_timestamp,
	
	primary key (idUsuario, idAmigo),
	
	foreign key (idUsuario) references Usuarios(id) on delete cascade,
	foreign key (idAmigo) references Usuarios(id) on delete cascade
); 

-- 'titulo': não é necessário ser maior que 255 caracteres.
-- 'conteudo': é um mediumtext para caber postagens maiores de até 16MB
-- talvez seja exagerado.
-- 'fixado': indica se uma postagem deve ter prioridade

-- 'ultimaAtividade' combinado com o 'atualizado' pode ser usado para
-- saber se um post foi criado/atualizado a quanto tempo.
create table Postagens (
    id int primary key auto_increment,
    idUsuario int not null,
    titulo varchar(255) not null,
    conteudo mediumtext not null,
    fixado bool default false,    
    atualizado bool default false,
    ultimaAtividade timestamp default current_timestamp,
    
    foreign key(idUsuario) references Usuarios(id) on delete cascade
);

update postagens set titulo = ?, conteudo = ?, atualizado = true, ultimaatividade = current_timestamp
where id = ?;

-- Um usuário pode favoritar apenas uma vez.
-- buscar por idPostagem, quantas estrelas tem uma postagem.
create table Estrelas (
    idUsuario int not null,
    idPostagem int not null,
    
    primary key(idUsuario, idPostagem),
    
    foreign key (idUsuario) references Usuarios (id),
    foreign key (idPostagem) references Postagens (id)  
);

create table Tags (
    id int primary key auto_increment,
    nome varchar(100) not null unique
);

-- Relaciona as tags com as postagens. Permite buscar posts que tenha 
-- uma tag especifica, ou buscar tags que pertencem a um post.
create table TagsPostadas (
	idTag int not null,
	idPost int not null,
	
	primary key(idPost, idTag),
	
	foreign key (idTag) references Tags(id) on delete cascade,
	foreign key (idPost) references Postagens(id) on delete cascade
);

create table Jogos (
    id int primary key auto_increment,
    nome varchar(255) not null,
    descricao text not null,
    fotoPerfil mediumblob,
    fotoFormato varchar(20)
);

-- Relaciona os jogos com os jogadores. Permite buscar jogos que os usuários
-- jogaram, ou quais usuários jogaram jogos especificos.
create table Biblioteca (
	idJogo int not null,
	idUsuario int not null,
	
	primary key (idJogo, idUsuario),
	
	conquistas int default 0,
	experiencia int default 0,
	tempoDeJogo double default 0,
	
	foreign key (idJogo) references Jogos(id) on delete cascade,
	foreign key (idUsuario) references Usuarios(id) on delete cascade
);

create table Conquistas (
    id int primary key auto_increment,
    idJogo int not null,
    nome varchar(255) not null,
    descricao text not null,
    fotoPerfil mediumblob,
    fotoFormato varchar(20),
    
    foreign key(idJogo) references Jogos(id) on delete cascade
);

create table ConquistasDesbloqueadas (
    idConquista int not null,
    idUsuario int not null,
    
    primary key(idConquista, idUsuario),
    
    foreign key(idConquista) references Conquistas(id) on delete cascade,
    foreign key(idUsuario) references Usuarios(id) on delete cascade
);

create table QuestaoCalculo (
    id int primary key auto_increment,
    enunciado text not null
);

create table QuestaoRegraDeTres (
    idQuestao int primary key,
    prescricao double not null,
    medicacao double not null,
    diluente double not null,
    prescricaoUnidade varchar(20) not null,
    medicacaoUnidade varchar(20) not null,
    diluenteUnidade varchar(20) not null,

    foreign key (idQuestao) references QuestaoCalculo(id) on delete cascade
);

create table QuestaoGotejamento (
    idQuestao int primary key,
    volume double not null,
    tempo double not null,
    volumeUnidade varchar(20) not null,
    tempoUnidade varchar(20) not null,
    destinoUnidade varchar(20) not null,

    foreign key (idQuestao) references QuestaoCalculo(id) on delete cascade
);




-- ----------------------------------------------------------------------------
-- Para inserir os dados padrões para teste execute os outros scripts dentro
-- dessa mesma pasta.
-- ----------------------------------------------------------------------------

-- Dados de teste

-- insert into Jogos (nome, descricao) values ('Anel do velho', 'Jogo dificil onde você da rolada');
-- insert into Jogos (nome, descricao) values ('O ultimo do Estados Unidos', 'Jogo de zumbizis estranhos');

-- select * from Jogos j;

-- insert into Conquistas (nome, descricao, id_jogo) values ('1000 roladas', 'Use a rolada 1000 vezes', 1);
-- insert into Conquistas (nome, descricao, id_jogo) values ('Morreu!', 'Morra 236 vezes antes de matar um boss', 1);
-- insert into Conquistas (nome, descricao, id_jogo) values ('Me derrubaram aqui!', 'Seja derrubado por um zumbi', 2);
-- insert into Conquistas (nome, descricao, id_jogo) values ('Toca Rauuuu!', 'Toque uma música no violão', 2);

-- select * from Conquistas c;


-- delete from usuarios;
-- select * from Logins l;

-- select * from Logins l;

-- replace into Logins (idUsuario, logado) values (2, false);

