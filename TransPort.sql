create database TransPortsmouth;
use TransPortsmouth;

create table Establishment(
<<<<<<< HEAD
Est_Id int(8) primary key auto_increment,
Name varchar(60) not null,
Phone varchar(13),
Address varchar(150),
Town varchar(54),
Postcode varchar(8),
Description varchar (500)
);

create table Resturant (
Resturant_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Theme varchar(20) not null,
Type varchar(20) not null,
constraint FKestRest foreign key (est_Id) references Establishment(est_Id)
);

create table University (
Uni_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Canteen bool default False,
Free_PCs bool default False,
constraint FKestUni foreign key (est_Id) references Establishment(est_Id)
);

create table NightClub (
Club_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
CostOfEntry double(2,2),
constraint FKestClub foreign key (est_Id) references Establishment(est_Id)
);

create table Bar (
Bar_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Atmosphere varchar (20),
Type varchar (20),
constraint FKestBar foreign key (est_Id) references Establishment(est_Id)
);

create table Shop (
shop_Id int(8) not null auto_incremement,
est_Id int(8) not null,
type varchar(40) not null,
website varchar(100),
constraint PKshop primary key (shop_Id),
constraint FKestShop foreign key (est_Id) references Establishment(est_Id)
);