/*Example queries used for data retrieval */
/*Gathering all the table categories */
SELECT Category
FROM Establishment
GROUP BY Category

/*Select all establishments which are of a category*/
SELECT Name, Address, Town
FROM Establishment
WHERE Category == "X"; /* Where "X" is the desired category*/
 /*OR*/
SELECT Name, Address, Town
FROM Establishment
INNER JOIN X on Establishment.Est_Id = X.Est_Id; /*Where X is the desired category*/
 
/*Searching for all Restaurants*/
SELECT Name, Address, Town
FROM Establishment
INNER JOIN Restaurant on Establishment.Est_Id = Restaurant.Est_Id;

/*Selecting all important info for an establishment of type Restaurant where RESTAURANT and 1 can be switched out for any other value*/
SELECT Establishment.Name, Establishment.Address, Establishment.Postcode, 
Restaurant.Cuisine, Restaurant.Type, 
Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook,
concat(Work_Time.Mon_Open," ", Work_Time.Mon_Close) as Monday,concat(Work_Time.Tue_Open," ", Work_Time.Tue_Close) as Tuesday,concat(Work_Time.Wed_Open," ", Work_Time.Wed_Close) as Wednesday,concat(Work_Time.Thu_Open," ", Work_Time.Thu_Close) as Thursday,concat(Work_Time.Fri_Open," ", Work_Time.Fri_Close) as Friday,concat(Work_Time.Sat_Open," ", Work_Time.Sat_Close) as Saturday, concat(Work_Time.Sun_Open," ", Work_Time.Sun_Close) as Sunday
FROM Establishment
INNER JOIN Restaurant on Establishment.Est_Id = Restaurant.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
INNER JOIN Work_Time on Establishment.Est_Id = Work_Time.Est_Id
WHERE Establishment.Est_Id = ;

/*Selecting from University*/
SELECT Establishment.Name, Establishment.Address, Establishment.Postcode, 
University.Canteen, University.Free_PCs as Open_Work_Area,
Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook,
concat(Work_Time.Mon_Open," ", Work_Time.Mon_Close) as Monday,concat(Work_Time.Tue_Open," ", Work_Time.Tue_Close) as Tuesday,concat(Work_Time.Wed_Open," ", Work_Time.Wed_Close) as Wednesday,concat(Work_Time.Thu_Open," ", Work_Time.Thu_Close) as Thursday,concat(Work_Time.Fri_Open," ", Work_Time.Fri_Close) as Friday,concat(Work_Time.Sat_Open," ", Work_Time.Sat_Close) as Saturday, concat(Work_Time.Sun_Open," ", Work_Time.Sun_Close) as Sunday
FROM Establishment
INNER JOIN University on Establishment.Est_Id = University.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
INNER JOIN Work_Time on Establishment.Est_Id = Work_Time.Est_Id
WHERE Establishment.Est_Id = ;

/*Selecting from NightClub*/
SELECT Establishment.Name, Establishment.Address, Establishment.Postcode, 
NightClub.CostOfEntry as Entry_Fee,
Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook,
concat(Work_Time.Mon_Open," ", Work_Time.Mon_Close) as Monday,concat(Work_Time.Tue_Open," ", Work_Time.Tue_Close) as Tuesday,concat(Work_Time.Wed_Open," ", Work_Time.Wed_Close) as Wednesday,concat(Work_Time.Thu_Open," ", Work_Time.Thu_Close) as Thursday,concat(Work_Time.Fri_Open," ", Work_Time.Fri_Close) as Friday,concat(Work_Time.Sat_Open," ", Work_Time.Sat_Close) as Saturday, concat(Work_Time.Sun_Open," ", Work_Time.Sun_Close) as Sunday
FROM Establishment
INNER JOIN NightClub on Establishment.Est_Id = NightClub.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
INNER JOIN Work_Time on Establishment.Est_Id = Work_Time.Est_Id
WHERE Establishment.Est_Id = ;

/*Selecting from Bar*/
SELECT Establishment.Name, Establishment.Address, Establishment.Postcode, 
Bar.Atmosphere, Bar.Type,
Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook,
concat(Work_Time.Mon_Open," ", Work_Time.Mon_Close) as Monday,concat(Work_Time.Tue_Open," ", Work_Time.Tue_Close) as Tuesday,concat(Work_Time.Wed_Open," ", Work_Time.Wed_Close) as Wednesday,concat(Work_Time.Thu_Open," ", Work_Time.Thu_Close) as Thursday,concat(Work_Time.Fri_Open," ", Work_Time.Fri_Close) as Friday,concat(Work_Time.Sat_Open," ", Work_Time.Sat_Close) as Saturday, concat(Work_Time.Sun_Open," ", Work_Time.Sun_Close) as Sunday
FROM Establishment
INNER JOIN Bar on Establishment.Est_Id = Bar.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
INNER JOIN Work_Time on Establishment.Est_Id = Work_Time.Est_Id
WHERE Establishment.Est_Id = ;

/*Selecting from Shop*/
SELECT Establishment.Name, Establishment.Address, Establishment.Postcode, 
Shop.Type,
Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook,
concat(Work_Time.Mon_Open," ", Work_Time.Mon_Close) as Monday,concat(Work_Time.Tue_Open," ", Work_Time.Tue_Close) as Tuesday,concat(Work_Time.Wed_Open," ", Work_Time.Wed_Close) as Wednesday,concat(Work_Time.Thu_Open," ", Work_Time.Thu_Close) as Thursday,concat(Work_Time.Fri_Open," ", Work_Time.Fri_Close) as Friday,concat(Work_Time.Sat_Open," ", Work_Time.Sat_Close) as Saturday, concat(Work_Time.Sun_Open," ", Work_Time.Sun_Close) as Sunday
FROM Establishment
INNER JOIN Shop on Establishment.Est_Id = Shop.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
INNER JOIN Work_Time on Establishment.Est_Id = Work_Time.Est_Id
WHERE Establishment.Est_Id = ;

/*Selecting from Gym*/
SELECT Establishment.Name, Establishment.Address, Establishment.Postcode, 
Gym.Monthly_Fee, Gym.Offer_Trials, Gym.Classes_Available
Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook,
concat(Work_Time.Mon_Open," ", Work_Time.Mon_Close) as Monday,concat(Work_Time.Tue_Open," ", Work_Time.Tue_Close) as Tuesday,concat(Work_Time.Wed_Open," ", Work_Time.Wed_Close) as Wednesday,concat(Work_Time.Thu_Open," ", Work_Time.Thu_Close) as Thursday,concat(Work_Time.Fri_Open," ", Work_Time.Fri_Close) as Friday,concat(Work_Time.Sat_Open," ", Work_Time.Sat_Close) as Saturday, concat(Work_Time.Sun_Open," ", Work_Time.Sun_Close) as Sunday
FROM Establishment
INNER JOIN Gym on Establishment.Est_Id = Gym.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
INNER JOIN Work_Time on Establishment.Est_Id = Work_Time.Est_Id
WHERE Establishment.Est_Id = ;

/*Fetching Reviews*/
SELECT Review.Title, Review.Content, Review.Score
FROM Review
WHERE Review.Est_Id = ;
