drop database if exists dbProjetBackEnd;
create database if not exists dbProjetBackEnd;
use dbProjetBackEnd;
drop table if exists user;
create table if not exists user (
    id int primary key auto_increment,
    username varchar(25) unique not null,
    password char(60) not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(100) unique not null,
    role enum('Admin', 'SuperUser') default 'SuperUser',
    age int(11) default 0
);