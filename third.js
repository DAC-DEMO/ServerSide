var cityName = "Kharghar";

function thirdMethod1() {
    console.log("thirdMethod1");
}

function thirdMethod2() {
    console.log("thirdMethod1");
}


module.exports.city = cityName;
module.exports.tm1 = thirdMethod1;
module.exports.thirdMethod2 = thirdMethod2;