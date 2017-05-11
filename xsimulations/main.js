var eight = require("./test1");

eight.selectFromTable(function(results) {
    console.log(results);
    for (var i = 0; i < results.length; i++) {
        var temp = results[0];
        console.log(temp.name);
    }

    results.every(function(item) {
        console.log(item);
    });
});