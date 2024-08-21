const express = require('express');
const CategoryController = require('../Controller/CategoryController');
const fileUpload = require('express-fileupload');
const categoryController = require('../Controller/CategoryController');


const CategoryRouter = express.Router();


//Create Category Method
CategoryRouter.post('/category', fileUpload({
    createParentPath: true
}),
async (req, res) => {
    try {
      
        const file = req.files.image;
        const result = await new CategoryController().postData(req.body,file);
        res.send(result);
    } catch(err) {
        res.send(err);
    }
});

//read Category Method
CategoryRouter.get(
    '/:cat_name?',
   async (req,res)=>{
try{
    const result = await new CategoryController().readData(req.params.cat_name);
    res.send(result);
}
catch(err){
    res.send(err);
}
    }
)


//read the by id
CategoryRouter.get(
    '/get/:id?',
   async (req,res)=>{
  
try{
    const result = await new CategoryController().readDataById(req.params.id);
    res.send(result);
}
catch(err){
    res.send(err);
}
    }
)

//category update method
CategoryRouter.patch(
    '/update/:id?',
    (req,res)=>{
        const result =  new CategoryController().UpdateCate(req.params.id,req.body);
        result.then(
            (success)=>{
                res.send(success)
            }
        ).catch(
            (error)=>{
                res.send(error)
            }
        )
    }
)

//status update method
CategoryRouter.patch(
    '/statuschange/:id?/:status?',
    (req,res)=>{
        const result =  new CategoryController().StatusChange(req.params.id,req.params.status);
        result.then(
            (success)=>{
                res.send(success)
            }
        ).catch(
            (error)=>{
                res.send(error)
            }
        )
    }
)



//category delaits method;
CategoryRouter.delete(
    "/delete/:id?",
    (req,res)=>{
        const result=new CategoryController().DeletesCate(req.params.id);
        result.then(
            (success)=>{
                res.send(success);
            }
        ).catch(
            (error)=>{
res.send(error)
            }
        )
    }
)



//edit food product 
CategoryRouter.patch(
    "/edit/:id?", fileUpload({
        createParentPath:true
    }),
    (req,res)=>{
       
        const image = req.files.image
const result = new categoryController().EditFood(req.params.id,req.body,image);
result.then(
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
module.exports = CategoryRouter;
