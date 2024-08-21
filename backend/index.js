const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose');
const CategoryRouter = require('./Router/CategoryRouter');
const FoodcatRouter = require('./Router/FoodCatRouter');
const UserRouter = require('./Router/UserRouter');
const app=express();


app.use(express.json());
app.use(cors())
app.use(express.static('public'));
app.use('/admin',CategoryRouter)
app.use('/food',FoodcatRouter)
app.use("/user",UserRouter)
mongoose.connect("mongodb://0.0.0.0:27017",{
    dbName:'swiggy'
}
).then(
    ()=>{
app.listen(
    5000,
    ()=>{

        console.log("server chalu ho gaya h😎😋😎")
    }
)
    }
).catch(
    (err)=>{
console.log(err)
    }
)

