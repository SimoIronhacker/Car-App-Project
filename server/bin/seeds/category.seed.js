require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const Mongoose = require("mongoose");
const CategoryModel = require("./../../models/Category");

const seedCategories = [
  {
    name: "Bugatti",
  },
];

const seedDB = async () => {
  await CategoryModel.deleteMany({});
  await CategoryModel.insertMany(seedCategories);
};

seedDB().then(() => {
  Mongoose.connection.close();
});
