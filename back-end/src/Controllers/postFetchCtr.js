const Post = require("../Models/postDetails/postDetails");

const postFetchCtrl = async (req, res) => {
    try {
        const post = await Post.find({})
        res.status(200).json({ post })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = postFetchCtrl