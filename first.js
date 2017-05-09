var ref = require("./second");
var third = require("./third");
var fifth = require("./fifth");

var status = false;

ref();
third.tm1();

// accessing fifth
console.log(fifth.name);
fifth.option1();

function weatherApi() {
    var i = 2;
    var name = "CDAC-2";

    console.log(i);
    console.log(name);
}


weatherApi();