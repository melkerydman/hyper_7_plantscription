import express from 'express';
import Product from '../models/productModel.js';

// CREATE PRODUCT
async function createProduct(req, res) {
    try {
        const newProduct = await Product.create({
            title: req.body.title,
            desc: req.body.desc,
            img: req.body.img,
            cat: req.body.cat,
            price: req.body.price,
        });

        res.status(200).json({
            status: 'success',
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        console.log('Something went wrong creating a product', err.message);
        res.sendStatus(420);
    }
}

// GET PRODUCT
async function getProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
        console.log(product);
    } catch (err) {
        console.log('Something went wrong fetching the product', err.message);
        res.sendStatus(500);
    }
}

// GET ALL PRODUCTS
async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.json(products);
        console.log(products);
    } catch (err) {
        console.log('Something went wrong fetching all products', err.message);
        res.sendStatus(500);
    }
}

const productRoutes = express.Router();
// Product routes to create

productRoutes.post('/', createProduct);

productRoutes.get('/:id', getProduct);

productRoutes.get('/', getAllProducts);

// Additional and optional for admin panel

// productRoutes.delete('/:id', deleteProducts);

export default productRoutes;
