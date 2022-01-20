const sql = require("../services/sqlConnection");

module.exports = {

    getUserSignUpDetails: (data, callback) => {
        let sql_query = "SELECT * FROM Users WHERE Username = ?";
        const values = [data.username];
        sql.executeQuery(sql_query, values, (err, result) => callback(err, result));
    },

    signUp: (data, callback) => {
        let sql_query = "INSERT into Users (Username, Password, UserType, CreatedAt, UpdatedAt) VALUES (?, ?, 0, now(), now())";
        const values = [data.username, data.password];
        sql.executeQuery(sql_query, values, (err, result) => callback(err, result));
    },

    login: (data, callback) => {
        let sql_query = "SELECT * FROM Users WHERE Username = ? AND Password = ?";
        const values = [data.username, data.password];
        sql.executeQuery(sql_query, values, (err, result) => callback(err, result));
    }
}