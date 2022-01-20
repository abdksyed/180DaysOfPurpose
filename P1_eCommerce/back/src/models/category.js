const sql = require("../services/sqlConnection");

module.exports = {
    listCategories: (callback) => {
        const sql_query = "SELECT ID as cat_id, Name as cat_name FROM Categories";
        const values = [];
        sql.executeQuery(sql_query, values, (err, result) => callback(err, result));
    }
}