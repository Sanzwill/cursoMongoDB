const { Router } = require('express');

const { getProducts, createProduct, updateProduct, deleteProduct }
 = require('../controllers/product.controller');

const router = Router();

router.get('/get-products', getProducts);

router.post('/create-product', createProduct);

router.put('/update-product', updateProduct);

router.delete('/delete-product', deleteProduct);

module.exports = router;
