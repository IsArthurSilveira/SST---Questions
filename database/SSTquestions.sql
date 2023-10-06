create schema SSTQuestions;
use SSTQuestions;

create table Usuarios (
    id int not null auto_increment,
    nome_usuario varchar(255) not null,
    email varchar(255) not null,
    senha varchar(155) not null,
    primary key (id,email)
);