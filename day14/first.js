var mysql = require('mysql');

var config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "DAC2017"
};


module.exports = {

    "selectFromTable": function() {

        // SETP 2
        var config = {
            "host": "localhost",
            "user": "root",
            "password": "",
            "database": "DAC2017"
        };
        var connection = mysql.createConnection(config);

        // STEP 3
        connection.connect();

        // SETP 4
        var sql = "SELECT * FROM USER WHERE ID=? and name=?";
        var param = [1, "CDAC"];
        connection.query(sql, param, function(err, results) {
            if (!err) {
                console.log(results);
            }

            // STEP LAST
            connection.end();
        });
    },


    "insertIntoTable": function() {
        var config = {
            "host": "localhost",
            "user": "root",
            "password": "",
            "database": "DAC2017"
        }

        var connection = mysql.createConnection(config);

        connection.connect();

        var sql = "INSERT INTO USER (NAME,EMAIL,MOBILE) VALUES('BONDE','ABC@GMAIL.COM','9422894973')";

        connection.query(sql, function(err, data) {
            if (!err) {
                console.log(data);
            }
            connection.end();
        });
    },


    "insertIntoTableOne": function() {

        var connection = mysql.createConnection(config);

        connection.connect();

        var sql = "INSERT INTO USER (NAME,EMAIL,MOBILE) VALUES(?,?,?)";
        var params = ['komal', 'komal@gmail.com', '100'];

        connection.query(sql, params, function(err, data) {
            if (!err) {
                console.log(data);
            }
            connection.end();
        });
    },

    "updateUserTable": function() {

        var connection = mysql.createConnection(config);

        connection.connect();

        var sql = "UPDATE USER SET NAME = ? WHERE ID = ?";
        var params = ['CDAC MUMBAI', 1];

        connection.query(sql, params, function(err, data) {
            if (!err) {
                console.log(data);
            }
            connection.end();
        });
    },

    "deleteFromTable": function() {

        var connection = mysql.createConnection(config);

        connection.connect();

        var sql = "DELETE FROM USER WHERE ID = ?";
        var params = [4];

        connection.query(sql, params, function(err, data) {
            if (!err) {
                console.log(data);
            }
            connection.end();
        });
    },

    "insertMultipleRecords": function() {

        var connection = mysql.createConnection(config);

        connection.connect();

        var sql = "INSERT INTO USER (NAME,EMAIL,MOBILE) VALUES ?";

        var mulipleRecord = [
            ['subh', 'XYZ@Z.COM', '000'],
            ['labh', 'XYZ@Z.COM', '000']
        ];

        var params = [mulipleRecord];

        connection.query(sql, params, function(err, data) {
            if (!err) {
                console.log(data);
            }
            connection.end();
        });

    },






};