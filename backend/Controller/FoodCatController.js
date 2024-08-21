const Foodcategory = require("../Model/FoodCategory");


class FoodCatController {

    FoodCate(data, image) {
        return new Promise((res, rej) => {
            try {
                const NewImage = new Date().getTime() * 1000 + image.name;
                const describtion = './public/uploads/category/' + NewImage;
                image.mv(
                    describtion,
                    (err) => {
                        if (!err) {
                            data.image = NewImage;
                            Foodcategory(data).save().then(
                                (suc) => {
                                    res({
                                        msg: "Food category data add",
                                        status: 1,
                                        suc
                                    })
                                }
                            ).catch(
                                (err) => {
                                    rej(
                                        {
                                            msg: "unable to add food category data",
                                            status: 0
                                        }
                                    )
                                }
                            )
                        } else {
                            rej({
                                msg: "internal server error",
                                status: 0
                            })
                        }
                    }
                )

            }
            catch {
                rej({
                    msg: 'internal server error',
                    status: 0
                })
            }
        })
    }


    //read category data

    GetFoodCategory(id) {
        return new Promise((res, rej) => {
            try {
                const data = Foodcategory.find().then(
                    (suc) => {
                        res({
                            msg: "read category data",
                            status: 1,
                            suc
                        })
                    }
                ).catch(
                    (err) => {
                        rej(
                            {
                                msg: "unable to read data",
                                status: 0
                            }
                        )
                    }
                )

            }
            catch (err) {
                console.log(err)
                rej({
                    msg: 'internal server error',
                    status: 0
                })
            }
        })
    }



    //delete function 

    DeleteFoodCategory(id = null) {
        return new Promise((res, rej) => {
            try {
                if (id != null) {
                    Foodcategory.deleteOne({ _id: id }).then(
                        (suc) => {
                            res({
                                msg: "Category Data Deleted",
                                status: 1
                            })
                        }
                    ).catch(
                        (err) => {
                            rej({
                                msg: "Unable to delete Food category",
                                status: 0
                            })
                        }
                    )
                }
            }
            catch {
                rej({
                    msg: 'internal server error',
                    status: 0
                })
            }
        })
    }



    //Food status update
    StatusFoodCategory(id, status) {
        return new Promise((res, rej) => {
            try {
                Foodcategory.updateOne({ _id: id }, {
                    status: status
                }).then(
                    (suc) => {
                        res({
                            msg: "update Food Status",
                            status: 1
                        })
                    }
                ).catch(
                    () => {
                        rej({
                            msg: "unable to update status",
                            status: 0
                        })
                    }
                )
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

module.exports = FoodCatController;