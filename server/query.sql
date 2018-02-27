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
SELECT Establishment.Name, Establishment.Address, Restaurant.Theme, Restaurant.Type, Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook
FROM Establishment
INNER JOIN Restaurant on Establishment.Est_Id = Restaurant.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
WHERE Establishment.Est_Id = 1;
