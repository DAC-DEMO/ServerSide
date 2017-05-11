var mysql = require('mysql');

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
        var sql = "SELECT * FROM USER";
        connection.query(sql, function(err, results) {
            if (!err) {
                console.log(results);
            }

            // STEP LAST
            connection.end();
        });
    },

};