const express= require('express')
const router=express.Router()
const {getProducts,getSingleProduct,createProduct,updateProduct,deleteProduct} = require('../controller/product.controller.js')
const Product = require('../models/product.model.js')



router.get('/',getProducts )
router.get('/:id',getSingleProduct)
router.post('/',createProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)


module.exports=router
