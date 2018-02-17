/*Inserting into Establishment*/
insert into Establishment (Name, Phone, Address, Town, Postcode, Description) values ("Las Iguanas", "02392293797", "108-111 East Side Plaza, Gunwharf Quays", "Portsmouth", "PO1 3SY", "Flame grilled Latin American food and sharing dishes");
insert into Establishment (Name, Phone, Address, Town, Postcode, Description) values ("Lion Gate Building", "02392846400", "Lion Terrace", "Portsmouth", "PO1 3HF", "University Building: primarily used by Computing and Mathmatics Students");
insert into Establishment (Name, Phone, Address, Town, Postcode, Description) values ("The Astoria", "02392863741", "37-39 Guildhall Walk", "Portsmouth", "PO1 2RY", "Nightclub with VIP balcony, Offers two different dance floors with different musical preference");
insert into Establishment (Name, Phone, Address, Town, Postcode, Description) values ("Honest Politician", "02392298877", "47 Elm Grove", "Portsmouth", "PO5 1JF", "A casual bar which offers cocktails, pool and darts");
insert into Establishment (Name, Phone, Address, Town, Postcode, Description) values ("Lyberry", "02392851157", "29-33 Guildhall Walk", "Portsmouth", "PO1 2RY", "Bar / Nightclub connected to Astoria");

/*Inserting into Time*/
insert into Work_Time values (1, '10:00:00', '23:00:00', '10:00:00', '23:00:00', '10:00:00', '23:00:00', '10:00:00', '23:00:00', '10:00:00', '00:00:00', '10:00:00', '00:00:00', '10:00:00', '22:30:00');

/*Inserting into Resturant*/
insert into Resturant (Est_Id, Theme, Type) values (1, "Latin Food Chain", "Sit Down, Family");

/*Inserting into University*/
insert into University (Est_Id, Canteen, Free_PCs) values (2, False, True);

/*Inserting into NightClub*/
insert into NightClub (Est_Id, CostOfEntry) values (3, 6.00);
insert into NightClub (Est_Id, CostOfEntry) values (5, 6.00);

/*Inserting into Bar*/
insert into Bar (Est_Id, Atmosphere, Type) values (4, "Relaxed | Traditonal", "Student Bar");
insert into Bar (Est_Id, Atmosphere, Type) values (5, "Lively | Loud Music", "Nightclub Bar");
