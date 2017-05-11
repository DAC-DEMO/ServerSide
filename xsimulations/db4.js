/**
 * Created by santosh on 5/9/17.
 */
var mysql = require('mysql');
var Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

var connectionConfig = {"host":"localhost", "username":"mysql", "password":"", "database":"test"};
var pool = mysql.createPool(connectionConfig);

var ref = {};
var mpromise = pool.getConnectionAsync();
mpromise.then(function(connection){
    ref.connection = connection;

    var sql = 'INSERT INTO user (name) VALUES ("hi")';
    return connection.queryAsync(sql);

}).then(function(results, fields){

    console.log(results);

    ref.connection.release();
}).catch(function(err){
    console.log(err);
});

