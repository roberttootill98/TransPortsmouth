/*Only use these two lines if the database does not already exist*/
create database TransPortsmouth;
use TransPortsmouth;

/*Database tables creation START*/
/*Creates the main table. All companies and locations should have exactly 1 establishment entry*/
create table Establishment(
Est_Id int(8) primary key auto_increment,
Name varchar(60) not null,
Address varchar(150) unique,
Town varchar(54) not null,
Postcode varchar(8) not null,
Description varchar (500),
Category varchar(10)
);

/*Creates review table, if work is achieved fast enough will link this table with a user table*/
create table Review(
Review_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Title varchar(20),
Content varchar(288) not null,
Score int(8) default 0,
constraint FKestReview foreign key (Est_Id) references Establishment (Est_Id)
);

/*Contant info for establishments are stored here, so that information does not repeat, such as when a company which is both a bar and a nightclub*/
create table Contact_Info(
Est_Id int(8) primary key,
Phone varchar(13),
Email varchar(80),
Website varchar(120),
Facebook varchar(80),
constraint FKestContact foreign key (Est_Id) references Establishment (Est_Id)
);
  
/*Time table to store open and close times. NOTE: May possibly add holiday opening times*/
create table Work_Time(
Est_Id int(8) primary key,
Mon_Open time,
Mon_Close time,
Tue_Open time,
Tue_Close time,
Wed_Open time,
Wed_Close time,
Thu_Open time,
Thu_Close time,
Fri_Open time,
Fri_Close time,
Sat_Open time,
Sat_Close time,
Sun_Open time,
Sun_Close time,
constraint FKestTime foreign key (Est_Id) references Establishment (Est_Id)
);

create table Restaurant (
Resturant_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Theme varchar(20) not null,
Type varchar(20) not null,
constraint FKestRest foreign key (Est_Id) references Establishment(Est_Id)
);

/*Note: Bool datatype in SQL is actually just a tinyInt, so is stored as 0 or 1, Webscript team please remember to interpret this!*/
create table University (
Uni_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Canteen bool default False,
Free_PCs bool default False,
constraint FKestUni foreign key (Est_Id) references Establishment(Est_Id)
);

create table NightClub (
Club_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
CostOfEntry double(4,2),
constraint FKestClub foreign key (Est_Id) references Establishment(Est_Id)
);

create table Bar (
Bar_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Atmosphere varchar (20),
Type varchar (20),
constraint FKestBar foreign key (Est_Id) references Establishment(Est_Id)
);

create table Shop (
Shop_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Type varchar(40) not null,
constraint FKestShop foreign key (Est_Id) references Establishment(Est_Id)
);

create table Cafe (
Cafe_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Atmosphere varchar (20),
Type varchar(20),
constraint FKestCafe foreign key (Est_Id) references Establishment(Est_Id)
);

create table Gym (
Gym_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Monthly_Fee double(2,2),
Offer_Trials bool default 0,
Classes_Available varchar(80),
constraint FKestGym foreign key (Est_Id) references Establishment(Est_Id)
);

/*Database tables creation END*/

/*Extra tables for if we choose to make it, NOTE: when adding data of this table be sure to encrypt Password and Email*/

/*Example of encrypting data: insert into User (Username, Password, Email) values ("Username",aes_encrypt('pass', SHA2('Trophy', 512)), aes_encrypt('name@email.co.uk', SHA2('Gacha', 256)));*/
/*Example of decrypting data: select Username,aes_decrypt(Password, SHA2('Trophy',512)) as Password, aes_decrypt(Email, SHA2('Gacha',256)) as Email from User;
create table User (
User_Id int(8) primary key auto_increment,
Username varchar(30) unique,
Password varbinary(208),
Email varbinary(208) unique
);

/*Alternate version of Review table which requires Users to be signed in to make a review*/
create table Review(
Review_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
User_Id int(8) not null,
Creator varchar(30) not null,
Title varchar(20),
Content varchar(288) not null,
Score int(8) default 0,
constraint FKestReview foreign key (Est_Id) references Establishment (Est_Id),
constraint FKUserReview foreign key (User_Id) references User (User_Id),
constraint FKReviewCreator foreign key (Creator) references Establishment (Username)
);

create table Favourite(
User_Id int(8) not null,
Est_Id int(8) not null,
Primary key (User_Id, Est_Id),
constraint FKestFav foreign key (Est_Id) references Establishment (Est_Id),
constraint FKuserFav foreign key (User_Id) references User (User_Id)  
);
*/
