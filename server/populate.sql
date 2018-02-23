/*Inserting into Establishment, Be sure to remember which entires into table, since the ID autoincrements*/
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Las Iguanas", "108-111 East Side Plaza, Gunwharf Quays", "Portsmouth", "PO1 3SY", "Flame grilled Latin American food and sharing dishes", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Lion Gate Building", "Lion Terrace", "Portsmouth", "PO1 3HF", "University Building: primarily used by Computing and Mathmatics Students", 'University');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("The Astoria", "37-39 Guildhall Walk", "Portsmouth", "PO1 2RY", "Nightclub with VIP balcony, Offers two different dance floors with different musical preference", 'NightClub');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Honest Politician", "47 Elm Grove", "Portsmouth", "PO5 1JF", "A casual bar which offers cocktails, pool and darts", 'Bar');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Lyberry", "29-33 Guildhall Walk", "Portsmouth", "PO1 2RY", "Bar / Nightclub connected to Astoria", 'Bar | NightClub');

/*Inserting into Contact*/
insert into Contact_Info values (1, "023 9229 3797", "Gunwharf@iguanas.co.uk","https://www.iguanas.co.uk/restaurants/portsmouth", "https://www.facebook.com/LasIguanasGunwharfQuays/");

/*Inserting into Time*/
insert into Work_Time values (1, '10:00:00', '23:00:00', '10:00:00', '23:00:00', '10:00:00', '23:00:00', '10:00:00', '23:00:00', '10:00:00', '00:00:00', '10:00:00', '00:00:00', '10:00:00', '22:30:00');

/*Inserting into Resturant*/
insert into Restaurant (Est_Id, Theme, Type) values (1, "Latin Food Chain", "Sit Down, Family");

/*Inserting into University*/
insert into University (Est_Id, Canteen, Free_PCs) values (2, False, True);

/*Inserting into NightClub*/
insert into NightClub (Est_Id, CostOfEntry) values (3, 6.00);
insert into NightClub (Est_Id, CostOfEntry) values (5, 6.00);

/*Inserting into Bar*/
insert into Bar (Est_Id, Atmosphere, Type) values (4, "Relaxed | Traditonal", "Student Bar");
insert into Bar (Est_Id, Atmosphere, Type) values (5, "Lively | Loud Music", "Nightclub Bar");
