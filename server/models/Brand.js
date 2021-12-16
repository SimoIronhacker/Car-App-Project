require("dotenv").config();
require("./../config/mongo");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        enum: ["chiron", "one off", "concept car", "veyron"]
    },

    image: {
        type: String,
    },

    releaseDate: {
        type: "String",
        default: Date.now
    },

    description: {
        type: String,
        required: true,
    },

    brand: {
        type: Schema.Types.ObjectId,
        ref: "cars",
    },

    price: {
        type: Number,
    },
});


const BrandModel = mongoose.model("Brand", brandSchema);

module.exports = BrandModel;