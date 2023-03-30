const express = require('express')
const multer = require('multer')
const storage = require('../Config/cloudinary')
const postCtrl = require('../Controllers/postCtrl')
const postFetchCtrl = require('../Controllers/postFetchCtr')
const postRouter = express.Router()

const upload = multer({ storage })

postRouter.post('/postUpload', upload.single('postImage'), postCtrl)

postRouter.get("/postFetch", postFetchCtrl)

module.exports = postRouter