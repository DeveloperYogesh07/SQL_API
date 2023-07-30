const express = require('express');
const router = express.Router();
const {createNewProduct,GetAllProducts,updateById,deleteById} = require('../controller/product')



router.get('/view',GetAllProducts);
router.post('/create',createNewProduct);
router.patch('/update/:id',updateById);
router.delete('/delete/:id',deleteById);


module.exports = router;

