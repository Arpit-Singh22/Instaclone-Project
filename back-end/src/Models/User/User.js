const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: text,
        required: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true,
    },
},
    { timestamps: true }
)

const User = mongoose.model('user', userModel)

module.exports = User