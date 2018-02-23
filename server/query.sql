/*Example queries used for data retrieval */


/*Searching for all Restaurants*/
SELECT Name, Address, Town
FROM Establishment
INNER JOIN Restaurant on Establishment.Est_Id = Restaurant.Est_Id;

/*Selecting all important info for an establishment of type Restaurant*/
SELECT Establishment.Name, Establishment.Address, Restaurant.Theme, Restaurant.Type, Contact_Info.Phone, Contact_Info.Website, Contact_Info.Facebook
FROM Establishment
INNER JOIN Restaurant on Establishment.Est_Id = Restaurant.Est_Id
INNER JOIN Contact_Info on Establishment.Est_Id = Contact_Info.Est_Id
WHERE Establishment.Est_Id = 1;
