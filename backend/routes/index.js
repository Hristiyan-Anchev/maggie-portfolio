var express = require('express');
var router = express.Router();
const mailer = require("../mailer/mailer");
const Project = require("../models/ProjectModel.js");
const Illustration = require("../models/IllustrationModel");

const xhrHandler = (req,res,next)=>{
  console.log("checking xhr:::")
  if(req.xhr === true){
    next();
  }else{
    res.redirect("/")
  }
}


router.get("/projects",xhrHandler,function(req,res,next){
  console.log("xhr",req.xhr);

    Project.find(function (err, projects) {
      if (err) {
        res.status(500).send({error: true, msg: err.message});
        console.error(err);
        return;
      }
      res.send(projects);
    });

});


router.post("/messageme",function(req,res,next){
  const {name,email,subject,message} = req.body;


  if(name.trim() !== "" &&
      email.trim() !== "" &&
      email.trim().match(new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")) &&
      subject.trim() !== "" &&
      message.trim() !== "" &&
  [name,email,subject,message].every(val=>val.length < 5000)) {
    mailer.sendMessage(name.trim(),email.trim(),subject.trim(),message.trim());
    res.status(200)
        .json({error:false,});
    return;
  }

  res.status(400).json({error:null});


});

router.get("/illustrations",xhrHandler,function(req,res,next){
    Illustration.find(function (err,illustrations){
      if(err){
        res.status(500).send({error:true,msg:err.message});
        console.error(err);
        return;
      }
      res.send(illustrations);
    });
});
module.exports = router;
