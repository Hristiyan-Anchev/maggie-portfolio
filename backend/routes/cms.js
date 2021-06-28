var express = require('express');
var router = express.Router();
let SiteUser = require("../models/UserModel");
let bcrypt = require("bcrypt");



    router.post("/login",function (req,res){
        let responseObj = {
            error: true,
            msg:"Something went wrong"
        };

        let {username,password} = req.body;
        console.log(req.body);
        SiteUser.findOne({username:username || ""},function(err,targetUser){
            if(err ) {
                console.log("There was an error while searching the database: ",err);
                res.status(500).json(responseObj);
                return;
            }

            if(!targetUser){
                console.log("Something went wrong");
                res.status(404).json(responseObj);
            }
            else{
                bcrypt.compare(password,targetUser.password,
                    function (err,result){
                    if(err){
                        res.status(500).json(responseObj);
                        return;
                    }
                    if(result === true){
                        responseObj.error = false;
                        responseObj.msg = "Authentication successful";
                        //todo GENERATE JWT and return it to the client!

                        res.status(200).json(responseObj);
                    }else{
                        res.status(401).json(responseObj);
                    }
           });
            }
        });

    });


    module.exports = router;