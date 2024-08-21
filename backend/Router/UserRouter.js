const express = require('express');
const  UserController  = require('../Controller/UserController');

const UserRouter = express.Router();


//create user 
UserRouter.post("/singup", (req, res) => {
    const result = new UserController().Singup(req.body);
    result.then(
        (success) => {
            res.send(success)
        }
    ).catch(
        (error) => {
            res.send(error);
        }
    )
});


//get user data

UserRouter.post("/login",
    (req,res)=>{
const result = new UserController().Login(req.body);
result.then(
    (success)=>{
        res.send(success)
    }
).catch(
    (error)=>{
        res.send(error);
    }
)
    }
)

module.exports = UserRouter;