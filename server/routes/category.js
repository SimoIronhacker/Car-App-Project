const express = require("express");
const CategoryModel = require("../models/Category");
const router = new express.Router();

const categoryModel = require("../models/Category");

// lire tous les categories (get)

router.get("/category", async (req, res, next) => {
    try {
        const categories = await categoryModel.find()
        res.status(200).json(categories);
    }catch(err) {
        next(err);
    }
});

router.post("/category", async (req, res, next) => {
    try {
        const newCategory = await categoryModel.create(req.body);
        res.status(200).json(newCategory);
    }catch(err) {
        next(err);
    }
   
});

router.get("/category/:id", async (req, res, next) => {
    try {
        const category = await categoryModel.findById(req.params.id);
        res.status(200).json(category);
    }catch(err) {
        next(err);
    }
});

router.delete("/category/:id", async (req, res, next) => {
    try {
        const deleteCategory = await CategoryModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteCategory);
    }catch(err) {
        next(err);
    }
});


router.patch("/category/:id", async (req, res, next) => {
    try {
        const updateCategory = await categoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateCategory);
    }catch(err) {
        next(err);
    }
    
});


module.exports = router;



