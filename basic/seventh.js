var fs = require('fs');

module.exports = {
    "readSomeFile": function() {
        fs.readFile("seventh.js", 'utf8', function(err, data) {
            if (!err) {
                console.log(data);
            }
        });
    }
};