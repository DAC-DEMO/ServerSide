var ref = require("./six");
var seventh = require('./seventh');

seventh.readSomeFile();

console.log(ref.commentList);

var comment = "Hello World!!";
ref.addComment(comment);

var index = ref.searchComment(comment);
console.log(index);

var newComment = "Hello Universe";
ref.updateComment(comment, newComment);


ref.deleteComment(newComment);


console.log(ref.commentList);