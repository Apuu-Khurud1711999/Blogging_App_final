const blogmodel = require('../models/post');

const blogcontroller = {

    addblog: (req, res) => {
        console.log(req.body)
        let title = req.body.title;
        let description = req.body.description;
        let tags = req.body.tags;
        let user = req.body.user;
        let blogimage = (req.file) ? req.file.filename : null;
        let ins = new blogmodel({ title: title, description: description,tags: tags,user: user, blogimage: blogimage});
        // console.log(ins)
        ins.save((err) => {
            if (err) {
                res.json({ "err": "Please fill all the fields in blog" })
            }
            else {
                res.json({ "msg": "Blog added successfully" })
            }
        })
    },
    usersblog: async (req, res) => {
        console.log(req.params.email)
        let user = req.params.email;
        await blogmodel.find({user:user }, (err, data) => {
            if (err) {
                res.status(200).json({"err":1, status: 401, "msg": "Something went wrong" })
            }
            else{
                res.status(200).json({ user: data,"err":0, status: 200, "msg": "here are the blogs!!" })

            }
        })
      },
      usersallblog: async (req, res) => {
        await blogmodel
          .find()
          .then((product) => {
           /*  console.log(product); */
            res.json({ user: product });
          });
      },

      editblog: async (req, res) => {
        console.log(req.body)
        try {            
            console.log(req.params.id)
            await blogmodel.findByIdAndUpdate( req.params.id, { $set: req.body })
            res.status(200).json("blog updated successfully");
        } catch (error) {
            res.status(500).json("Error while updating");
        }
      },
 
      getsingleblog : async (req, res) => {
        let id = req.params.id;
        await blogmodel
          .findOne({ _id: id })
          .then((product) => {
           /*  console.log(product); */
            res.json({ user: product });
          });
      },

}
module.exports = blogcontroller
