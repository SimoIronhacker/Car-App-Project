const express = require("express");
const router = new express.Router();
const uploader = require("../config/cloudinary");
const BrandModel = require("../models/Brand");



// lire tous les brands (get)

router.get("/brand", async (req, res, next) => {
    try {
        // console.log(typeof req.query)
        // console.log(req.query)
        // console.log(req.query.category)
        // {category: "brand"}  bien sûr c'est pas tjs brand, ça peut être chiron | concept car | veryon
        // console.log({category: req.query.category})
        // console.log("-----");

        const currentCategory = req.query.category;


        let filter;
        if( currentCategory === undefined ) {
            filter = {};
        } else {
            filter = { category : currentCategory }
        }
        
        
        // if req.query.category est undefined on veut trouver tous les brands => filter sera un object vide
        
        // sinon on veut trouver les brands de la category en cours => filter sera un object ressemblant {category: 'chiron'} ou {category: "veryon"}
        const brands = await BrandModel.find(filter).populate("brand");
        console.log("brand", brands);

        res.status(200).json(brands);
    }catch(err) {
        next(err);
    }
});

// créer un brand (post)
router.post("/brand", uploader.single('images'), async (req, res, next) => {
    try {
        const { title, description, category} = req.body
        let images=null
        console.log(req.file)
        if (req.file) {
            images = req.file.path
        }
        const newBrand = await BrandModel.create({
            title, description, category, images
        });
        res.status(200).json(newBrand);
       }catch (err) {
           next(err);
       }
});

// lire un brand GET
router.get("/brand/:id", async (req, res, next) => {
    try {
        const brand = await BrandModel.findById(req.params.id);
        res.status(200).json(brand);
    } catch(err) {
        next(err);
    }
    
});


// supprimer un brand (delete)
router.delete("/brand/:id", async (req, res, next) => {
    try {
        const deleteBrand = await BrandModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteBrand);
    } catch (err) {
        next(err);
    }
});


// mettre à jour un brand (update)
router.patch("/brand/:id", async (req, res, next) => {
    try {
        const updateBrand = await BrandModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateBrand);
    } catch (err) {
        next(err);
    }
   

});

module.exports = router;




