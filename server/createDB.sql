create database if not exists plannerDB;

create table if not exists headerNames (
  id int primary key auto_increment,
  title varchar(30),
  coloumn1 varchar(30),
  coloumn2 varchar(30),
  coloumn3 varchar(30)
);
