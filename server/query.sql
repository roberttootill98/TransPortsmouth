/*Example queries used for data retrieval */
/*Gathering all the table categories */
SELECT Category
FROM Establishment
GROUP BY Category

/*Searching for all Restaurants*/
SELECT Name, Address, Town
FROM Establishment
INNER JOIN Restaurant on Establishment.Est_Id = Restaurant.Est_Id;

/*Selecting all important info for an establishment of type Restaurant where RESTAURANT and 1 can be switched out for any other value*/
SELECT Establishment.Name, Establishment.Address, Establishment.Postcode, Restaurant.Cuisine, Restaurant.Type, Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook,
concat(Work_Time.Mon_Open," ", Work_Time.Mon_Close) as Monday,concat(Work_Time.Tue_Open," ", Work_Time.Tue_Close) as Tuesday,concat(Work_Time.Wed_Open," ", Work_Time.Wed_Close) as Wednesday,concat(Work_Time.Thu_Open," ", Work_Time.Thu_Close) as Thursday,concat(Work_Time.Fri_Open," ", Work_Time.Fri_Close) as Friday,concat(Work_Time.Sat_Open," ", Work_Time.Sat_Close) as Saturday, concat(Work_Time.Sun_Open," ", Work_Time.Sun_Close) as Sunday
FROM Establishment
INNER JOIN Restaurant on Establishment.Est_Id = Restaurant.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
INNER JOIN Work_Time on Establishment.Est_Id = Work_Time.Est_Id
WHERE Establishment.Est_Id = 1;

/*Selecting from 
SELECT Establishment.Name, Establishment.Address, Establishment.Postcode*/ 
