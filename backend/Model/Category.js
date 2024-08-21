const mongoose = require('mongoose');
const { stringify } = require('qs');
const Schema = mongoose.Schema;

// Define the schema for the Category collection
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    price: {
        type: String,
        default: 0 // Default value for rating
    },
    rating: {
        type: String,
        default: 0 // Default value for rating
    },
    ordertime: {
        type:String,
        required: true
    },
   price: {
        type:Number,
        default:0
    },
    image:{
        type: String,
       require:true
    },
   offer: {
type:Number,
default:0
    },
    status:{
        type:String,
        default:true
    }
},{
    timestamps:true
}
);

// Create a model based on the schema
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
