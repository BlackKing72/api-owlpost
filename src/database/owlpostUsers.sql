use owlpost;

insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato, admin) values ('Owlpost', 'owlpost@email.com', md5('admin'), null, null, true);
insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Megumin UwU!', 'uwu@email.com', md5('123'), null, null);
insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Megumin OwO!', 'owo@email.com', md5('123'), null, null);
insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Megumin O.O!', 'o.o@email.com', md5('123'), null, null);
insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Aqua ^v^', '^v^@email.com', md5('123'), null, null);

-- Comandos do banco de dados //////////////////////////////////////////////////
-- select * from Usuarios;
-- select * from Usuarios where id = ?;
-- select * from Usuarios where email = ? and senha = md5(?);
-- insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values (?, ?, ?, ?, ?);
-- update Usuarios set fotoPerfil = ?, fotoFormato = ? where id = ?;
-- delete from Usuarios where id = ?;
