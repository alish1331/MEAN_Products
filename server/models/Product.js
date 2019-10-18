const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Products must contain a Name!"],
        minlength: [3, "Product must have a Name 3 characters or longer!"],
    },
    qty: {
        type: Number,
        required: [true, "Products must contain a Qty!"],
        min:[0]
        
    },
    price: {
        type: Number,
        required: [true, "Products must contain a Price!"],
        min: [0]
    }
}, { timestamps: true });


mongoose.model('Product', productSchema);