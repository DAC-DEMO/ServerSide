module.exports = {

    "commentList": ["red", "blue", "green"],
    "addComment": function(comment) {
        this.commentList.push(comment);
    },

    "updateComment": function(oldComment, newComment) {
        var index = this.searchComment(oldComment);

        this.commentList[index] = newComment;
    },

    "searchComment": function(comment) {
        return this.commentList.indexOf(comment);
    },

    "deleteComment": function(comment) {
        var index = this.searchComment(comment);

        this.commentList.splice(index, 1);
    }
};