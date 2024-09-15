use owlpost;

insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Owlpost', 'owlpost@email.com', md5('admin'), null, null);
insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Megumin UwU!', 'uwu@email.com', md5('123'), null, null);
insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Megumin OwO!', 'owo@email.com', md5('123'), null, null);
insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Megumin O.O!', 'o.o@email.com', md5('123'), null, null);
insert into Usuarios (nome, email, senha, fotoPerfil, fotoFormato) values ('Aqua ^v^', '^v^@email.com', md5('123'), null, null);

select * from Usuarios u;