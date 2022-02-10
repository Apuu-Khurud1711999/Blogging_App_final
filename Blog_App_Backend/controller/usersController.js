const jwt=require("jsonwebtoken");
const jwtSecret="apurvakhurudavrupaduruhk";
const registermodel = require('../models/user.model');

 async function login(req,res,next){
    let uname = req.body.uname;
    let email = req.body.email;
    let password = req.body.password;
    const user =  await registermodel.findOne({uname:uname, email:email });
    if (user && (await user.matchPassword(password))) {
        let payload={
            uid:uname,
            email:email,
            uname:user.uname,
        }
        const token=jwt.sign(payload,jwtSecret,{expiresIn:360000})
        res.json({"err":0,"msg":"Login Success","payload":payload,"token":token})
    }
    else {
        res.status(401);
        throw new Error("Invalid Email or Password");
      }
}  

async function register(req,res,next){
    let ins = new registermodel({ fname: req.body.fname, lname: req.body.lname, uname: req.body.uname, /* pic: req.body.pic, */email:req.body.email,password:req.body.password });
    await ins.save((err) => {
        if (err) {
            console.log(err)
            res.send("Already Added")
        }
        else {
            res.send("ok")
        }
    })
    
}

async function profile(req,res,next){
    let email = req.params.email;
    await registermodel.findOne({ email:email },(err,data)=>{
        if(err) res.json({ err : err })
        res.json({ email:data })
    })
}
 
module.exports = {login, register ,profile};




