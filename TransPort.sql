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
=======
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
>>>>>>> 8213ff502d6a58069e9778707733f70b5c4245c2
constraint FKestRest foreign key (est_Id) references Establishment(est_Id)
);

create table University (
<<<<<<< HEAD
Uni_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Canteen bool default False,
Free_PCs bool default False,
=======
uni_Id int(8) not null auto_increment,
est_Id int(8) not null,
canteen bool default False,
free_computer bool default False,
constraint PKuni primary key (uni_Id),
>>>>>>> 8213ff502d6a58069e9778707733f70b5c4245c2
constraint FKestUni foreign key (est_Id) references Establishment(est_Id)
);

create table NightClub (
<<<<<<< HEAD
Club_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
CostOfEntry double(2,2),
=======
club_Id int(8) not null auto_increment,
est_Id int(8) not null,
costOfEntry double(2,2),
constraint PKclub primary key (club_Id),
>>>>>>> 8213ff502d6a58069e9778707733f70b5c4245c2
constraint FKestClub foreign key (est_Id) references Establishment(est_Id)
);

create table Bar (
<<<<<<< HEAD
Bar_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Atmosphere varchar (20),
Type varchar (20),
=======
bar_Id int(8) not null auto_increment,
est_Id int(8) not null,
atomsphere varchar (40),
type varchar (40),
constraint PKbar primary key (bar_Id),
>>>>>>> 8213ff502d6a58069e9778707733f70b5c4245c2
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

