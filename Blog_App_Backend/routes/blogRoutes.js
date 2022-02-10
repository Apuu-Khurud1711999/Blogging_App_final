const router = require('express').Router()
const blogcontroller = require('../controller/blogsController');
const express = require('express');

const multer = require('multer')
const path = require('path')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname, "./public/")))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "D:/Technical Training/Blog_App/blog-app-frontend/public/image");

    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});
let upload = multer({
    storage: storage,
}).single('blogimage')


router.post("/addblog", upload, blogcontroller.addblog)
router.get('/getblog/:email', blogcontroller.usersblog)
router.get('/getallblog', blogcontroller.usersallblog)
router.post('/editblog/:id', blogcontroller.editblog)
router.get('/singleblog/:id', blogcontroller.getsingleblog)

module.exports = router