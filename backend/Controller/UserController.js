const User = require("../Model/UserModel");


class UserController {
    Singup(data) {
        return new Promise((res, rej) => {
            try {
                const userdata = User(data).save().then(
                    (success) => {
                        res({
                            msg: "create user successfully ",
                            status: 1,
                        })
                    }
                ).catch(
                    (error) => {
                        rej({
                            msg: "create user failed ",
                            status: 0
                        })
                    }
                )
            }
            catch (error) {
                console.log(error)
                rej({
                    msg: 'internal server error',
                    status: 0,
                    error
                })
            }
        })
    }



    Login(data) {
        return new Promise((res, rej) => {
            const logindata = User.findOne({user_email:data.user_email});
            logindata.then(
                (success) => {
                    res({
                        msg: "User data",
                        status: 1,
                        success
                    })
                }
            ).catch(
                (error) => {
                    rej({
                        msg: "Unable to fatch user data",
                        status: 0
                    })
                }
            )
            try {
            }
            catch {
                rej({
                    msg: 'internal server error',
                    status: 0
                })
            }
        })
    }
}


module.exports = UserController;