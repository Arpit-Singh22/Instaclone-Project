const Post = require("../Models/postDetails/postDetails");
const fs = require("fs")
const postCtrl = async (req, res, next) => {
    const { name, likes, location, description, date } = req.body
    // get the path of uploaded image
    const postImage = req && req.file ? req.file.path : undefined
    // console.log(postImage)
    try {
        const post = await Post.create({
            name,
            likes,
            location,
            description,
            date,
            postImage
        })
        res.status(200).json(post)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = postCtrl