const Category = require("../Model/Category");

class categoryController {
    postData(data, image) {
        return new Promise(
            async (resolve, reject) => {

                try {

                    const ImageName = new Date().getTime() + Math.floor(Math.random() * 100000) + image.name;
                    const destination = './public/uploads/foodproduct/' + ImageName;
                    image.mv(destination,
                        (err) => {
                            if (err) {
                                reject({
                                    msg: "Error in image upload",
                                    status: 0,
                                    err
                                });
                            } else {
                                // Create a new instance of Category with data passed in 
                                data.image = ImageName;
                                const newCategory = new Category(data);
                                // Save the new category to the database
                                newCategory.save()
                                    .then(savedCategory => {
                                        resolve({
                                            msg: "Successfully added data",
                                            status: 1,
                                            data: savedCategory
                                        });
                                    })
                                    .catch(err => {
                                        console.log(err, "err")
                                        reject({
                                            msg: "Error saving data",
                                            status: 0,
                                            error: err
                                        });
                                    });
                            }
                        }
                    );
                } catch (error) {
                    reject({
                        msg: "Server side problem",
                        status: 0,
                        error: error.message
                    });
                }
            });
    }



    readData(cat_name = null) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = undefined;
                if (cat_name === null) {
                    result = await Category.find();
                } else {
                    result = await Category.findOne({ category: cat_name });
                }

                resolve({
                    msg: "Find all data",
                    status: 1,
                    data: result
                });
            } catch (err) {
                console.error(err);
                reject({
                    msg: "Not Find the data",
                    status: 0
                });
            }
        });
    }




    //read the data by id

    readDataById(id = null) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = undefined;
                if (id === null) {
                    result = await Category.find();
                } else {
                    result = await Category.findOne({_id:id});
                }

                resolve({
                    msg: "Find all data",
                    status: 1,
                    data: result
                });
            } catch (err) {
                console.error(err);
                reject({
                    msg: "Not Find the data",
                    status: 0
                });
            }
        });
    }


    //Patch Method 
    UpdateCate(id = null, data) {
        return new Promise(
            (res, rej) => {
                try {
                    if (id != null) {
                        const result = Category.updateOne({ _id: id },
                            { name: data.name }
                        );
                        result.then(
                            (suc) => {
                                res(
                                    {
                                        msg: "Update Data",
                                        status: true,
                                        data: suc

                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                rej(
                                    {
                                        mag: "Internal server Error",
                                        status: false,
                                        error
                                    }
                                )
                            }
                        )
                    }

                } catch (error) {
                    rej(
                        {
                            mag: "Internal server Error",
                            status: false,
                            error
                        }
                    )
                }
            }
        )
    }


    //Delaits category method
    DeletesCate(id = null) {
        return new Promise(
            (res, rej) => {
                try {
                    if (id != null) {
                        const result = Category.deleteOne({ _id: id });
                        result.then(
                            (suc) => {
                                res(
                                    {
                                        msg: "Delete Data",
                                        status: true,
                                        data: suc

                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                rej(
                                    {
                                        mag: "Internal server Error",
                                        status: false,
                                        error
                                    }
                                )
                            }
                        )
                    }

                } catch (error) {
                    rej(
                        {
                            mag: "Internal server Error",
                            status: false,
                            error
                        }
                    )
                }
            }
        )
    }



    StatusChange(id, status) {
        return new Promise(
            async (res, rej) => {
                try {
                    await Category.updateOne({ _id: id }, { status: status }).then(
                        (suc) => {
                            res({
                                msg: "status update",
                                status: 1,
                                suc
                            })
                        }
                    ).catch(
                        () => {
                            rej({
                                msg: "Unable to Update status",
                                status: 0
                            })
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





    EditFood(id, data, image) {
        return new Promise((res, rej) => {

            try {
                const editimage = new Date().getTime() + Math.floor(Math.random() * 1000) + image.name;
                const destination = "./Public/uploads/category/" + editimage;
                image.mv(
                    destination, (err) => {
                        if (err) {

                            rej({
                                msg: "unable to upload image",
                                status: 0
                            })
                        }
                        else {
                            Category.updateOne({ _id: id }, {
                                name: data.name,
                                category: data.category,
                            address: data.address,
                                price: data.price,
                                rating: data.rating,
                                ordertime: data.ordertime,
                                offer: data.offer,
                                image: editimage,

                            }
                            ).then(
                                (suc) => {
                                    res({
                                        msg: "data update",
                                        status: 1
                                    })
                                }
                            ).catch(
                                (err) => {
                                    rej({
                                        msg: "unable to update data",
                                        status: 0
                                    })
                                }
                            )
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
}

module.exports = categoryController;
