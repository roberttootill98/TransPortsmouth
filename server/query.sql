/*Example queries used for data retrieval */


/*Searching for all Restaurants*/
SELECT Name, Address, Town
FROM Establishment
INNER JOIN Restaurant on Establishment.Est_Id = Restaurant.Est_Id;

