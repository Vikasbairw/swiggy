const express = require('express');
const fileUpload = require('express-fileupload');
const FoodCatController = require('../Controller/FoodCatController');

const FoodcatRouter = express.Router();

FoodcatRouter.post(
    '/foodcategory',
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
const image= req.files.image;
        const result = new FoodCatController().FoodCate(req.body,image);
        result.then(
            (suc) => {
                res.send(suc);
            }
        ).catch(
            (err) => {
                res.send(err);
            }
        )
    }
)

FoodcatRouter.get(
    '/:id?',
    (req,res)=>{
const result = new FoodCatController().GetFoodCategory(req.params.id).then(
    (suc)=>{
        res.send(suc);
    }
).catch(
    (err)=>{
        res.send(err);
    }
)
    }
)


FoodcatRouter.delete(
    '/delete/:id?',
    (req,res)=>{
        const result = new FoodCatController().DeleteFoodCategory(req.params.id).then(
            (suc)=>{
                res.send(suc);
            }
        ).catch(
            (err)=>{
                res.send(err);
            }
        )
    }

)


//status update
FoodcatRouter.patch(
    '/statusChange/:id?/:status',
    (req,res)=>{
        const result = new FoodCatController().StatusFoodCategory(req.params.id,req.params.status).then(
            (suc)=>{
                res.send(suc);
            }
        ).catch(
            (err)=>{
                res.send(err);
            }
        )
    }
)



module.exports = FoodcatRouter;