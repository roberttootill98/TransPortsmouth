/*Inserting into Establishment, Be sure to remember which entires into table, since the ID autoincrements*/
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Las Iguanas", "108-111 East Side Plaza, Gunwharf Quays", "Portsmouth", "PO1 3SY", "Flame grilled Latin American food and sharing dishes", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Restaurant 27", "27A South Parade, Southsea", "Portsmouth", "PO5 2JF", "Upper class French cuisine", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Pie and Vinyl", "59-61 Castle Road, Southsea", "Portsmouth", "PO5 3AY", "Unique pie and mash restaurant connected to a record shop. Serves locally sourced pies as well as vegan and gluten free", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("The Kitchen", "Florence Road", "Portsmouth", "PO5 2NA", "High end cuisine with unique takes on British dishes with international influences", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Samphire", "1 Kent Road", "Portsmouth", "PO5 3EG", "Classy seafood restaurant that also sells British cuisine including Roast Dinners and Fish & Chips", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Montparnasse", "103 Palmerston Road", "Portsmouth", "PO5 3PS", "French inspired, high end restaurant commonly known for beautiful looking dishes", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Becketts Southsea", "11 Bellevue Terrace, Southsea", "Portsmouth", "PO5 3AT", "Cosy and comforting British restaurant", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("The Wave Maiden", "36 Osborne Road", "Portsmouth", "PO5 3LT", "A mash up of British and American cuisine that often has live music and great atmosphere", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Brasserie Blanc", "1 Gunwharf Quays", "Portsmouth", "PO1 3FR", "Known for seafood dishes known for French inspired menu", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Abarbistro", "58 White Road", "Portsmouth", "PO1 2JA", "Beautifully presented dishes with a variety of cuisines", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("The Chambers", "27 Landport Terrace", "Portsmouth" , "PO1 2RG", "Lounge and Restaurant housed in a cosy building with unique decor", "Restaurant");
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Haldi", "93 Albert Road", "Portsmouth", "PO5 2SG", "", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Spice Merchants", "44 Osborne Road", "Portsmouth", "PO5 3LT", "" , 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Purple Mango", "27 Albet Road", "Portsmouth", "PO5 2SE", "", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("T & J Mahal", "39 Elm Grove", "Portsmouth", "PO5 1JF", "", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Massala Room", "245 London Road", "Portsmouth", "PO2 9HA", "", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("The Gandhi Restaurant", "139-141 Kingston Road", "Portsmouth", "PO2 7EB", "", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Spice Route Indian Cusine", "101 Palmerston Road", "Portsmouth", "PO5 3PS", "", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Kadir's Indian Street Food", "217 Alber Road", "Portsmouth", "PO4 0JP", "", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("Kassia, Southsea", "82 Osborne Road", "Portsmouth", "PO5 3LU", "", 'Restaurant');
insert into Establishment (Name, Address, Town, Postcode, Description, Category) values ("The Akash", "99 Albert Road", "Portsmouth", "PO5 2SG", "", 'Restaurant');










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
