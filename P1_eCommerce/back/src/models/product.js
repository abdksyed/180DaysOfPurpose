const sql = require('../services/sqlConnection')

module.exports = {

    listProducts: (data, callback) => {
        const sql_query = "SELECT ID as prod_id, Name as prod_name, Price as prod_price from Products";
        const values = [];
        if (data.categoryId) {
            sql_query += " WHERE CategoryID = ?";
            values.push(data.categoryId);
            // if the query is passed
            // {"query": "SonyTV"}
            if (data.query) {
                sql_query += ` AND LOCATE ('${data.query}', Name)`;
            }
            // If minPrice is given in filter
            if (data.minPrice) {
                sql_query += ` AND prod_price >= ${parseInt(data.minPrice, 10)}`;
            }
            // if maxPrice is given in filter and is greater than 0.
            if (data.maxPrice && parseInt(data.maxPrice, 10) > 0) {
                sql_query += ` AND prod_price <= ${parseInt(data.maxPrice, 10)}`;
            }
        }
        // If only query is given and no catergoryId
        else if (data.query) {
            sql_query += ` WHERE LOCATE ('${data.query}', Name)`;
            if (data.minPrice) {
                sql_query += ` AND prod_price >= ${parseInt(data.minPrice, 10)}`;
            }
            if (data.maxPrice && parseInt(data.maxPrice, 10) > 0) {
                sql_query += ` AND prod_price <= ${parseInt(data.maxPrice, 10)}`;
            }
        }
        // After Getting on Product List Page, if filter Price is given
        else if (data.minPrice){
            sql_query += ` WHERE prod_price >= ${parseInt(data.minPrice, 10)}`;
            if (data.maxPrice && parseInt(data.maxPrice, 10) > 0) {
                sql_query += ` AND prod_price <= ${parseInt(data.maxPrice, 10)}`;
            }
        }
        else if (data.maxPrice && parseInt(data.maxPrice, 10) > 0){
            sql_query += ` WHERE prod_price <= ${parseInt(data.maxPrice, 10)}`;
        }

        sql.executeQuery(sql_query, values, (err, results) => callback(err, results));
    }
}