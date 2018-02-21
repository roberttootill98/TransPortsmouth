create database TransPortsmouth;
use TransPortsmouth;

create table Establishment(
Est_Id int(8) primary key auto_increment,
Name varchar(60) not null,
Address varchar(150),
Town varchar(54),
Postcode varchar(8),
Description varchar (500)
);

create table Review(
Review_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Title varchar(20),
Content varchar(288) not null,
constraint FKestReview foreign key (Est_Id) references Establishment (Est_Id)
);

create table Contact_Info(
Est_Id int(8) primary key,
Phone varchar(13),
Email varchar(80),
Website varchar(120),
Facebook varchar(80),
constraint FKestContact foreign key (Est_Id) references Establishment (Est_Id)
);
  
/*Time table data might be moved to Establishment table*/
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


create table Resturant (
Resturant_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Theme varchar(20) not null,
Type varchar(20) not null,
constraint FKestRest foreign key (Est_Id) references Establishment(Est_Id)
);

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
CostOfEntry double(2,2),
constraint FKestClub foreign key (Est_Id) references Establishment(Est_Id)
);

  create table ClubEvent (
    CEvent_Id int(8) primary key,
    Club_Id int(8) not null,
    EventName varchar(30) not null,
    TicketPrice double(2,2),
    EventDate date,
    Attraction varchar(50)
    );

create table Bar (
Bar_Id int(8) primary key auto_increment,
Est_Id int(8) not null,
Atmosphere varchar (20),
Type varchar (20),
constraint FKestBar foreign key (Est_Id) references Establishment(Est_Id)
);

  create table BarEvent (
    BEvent_Id int(8) primary key,
    Bar_Id int(8) not null,
    EventName varchar(30) not null,
    EventType varchar (30) not null,
    TicketPrice double(2,2),
    EventDate date,
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
Type varchar (20),
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
