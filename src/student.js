var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
    res.json({ "Hello": "world" });
});

router.get("/admission", function(req, res) {
    res.json({ "key": "admission" });
});


module.exports = router;