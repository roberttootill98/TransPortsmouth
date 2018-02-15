create database TransPortsmouth;

create table Establishment(
est_Id int(8) not null auto_increment,
name varchar(60) not null,
phone varchar(13)
address varchar(150),
town varchar(54) not null,
postcode varchar(8),
description varchar (500),
constraint PKest primary key (est_Id)
);

create table Resturant (
resturant_Id int(8) not null auto_increment,
est_Id int(8) not null,
theme varchar(40) not null,
type varchar(40) not null,
constraint PKresturant primary key (resturant_Id),
constraint FKestRest foreign key (est_Id) references Establishment(est_Id)
);

create table University (
uni_Id int(8) not null auto_increment,
est_Id int(8) not null,
canteen bool default False,
free_computer bool default False,
constraint PKuni primary key (uni_Id),
constraint FKestUni foreign key (est_Id) references Establishment(est_Id)
);

create table NightClub (
club_Id int(8) not null auto_increment,
est_Id int(8) not null,
costOfEntry double(2,2),
constraint PKclub primary key (club_Id),
constraint FKestClub foreign key (est_Id) references Establishment(est_Id)
);

create table Bar (
bar_Id int(8) not null auto_increment,
est_Id int(8) not null,
atomsphere varchar (40),
type varchar (40),
constraint PKbar primary key (bar_Id),
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

