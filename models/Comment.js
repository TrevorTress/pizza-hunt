const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },

    commentBody: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    size: {
        type: String,
        default: 'Large'
    },
})

// create the Comment model using the CommentSchema
const Comment = model('Comment', CommentSchema);

// export the Pizza model
module.exports = Comment;