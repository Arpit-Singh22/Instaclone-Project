const mongoose = require('mongoose')

const postDetails = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    postImage: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    }
}, { timestamps: true }
)

const Post = mongoose.model('post', postDetails)

module.exports = Post