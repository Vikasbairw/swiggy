const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const food = mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        image:{
            type:String,
            require:true
        },
        status:{
            type: String,
            default:true
        }
    },{
        timestamps:true
    }
)

const Foodcategory  =mongoose.model('food',food);

module.exports =Foodcategory;